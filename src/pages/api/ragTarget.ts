import { FileType, RagTarget } from "@/components/models/rags";
import initDB from "@/components/store/db";
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";

const getParamToStr = (param: string | string[]) => {
  return Array.isArray(param) ? param[0] : param;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RagTarget>
) {
  const db = await initDB();
  switch (req.method) {
    case "POST":
      const {
        id,
        ragTarget,
      }: {
        id: number;
        ragTarget: {
          directory: string;
          fileType: FileType;
        };
      } = req.body;
      if (id && ragTarget) {
        const rags = db.data?.rags.filter((rag) => rag.id === id);
        if (rags.length === 0) {
          res.status(404).end();
          break;
        }

        const target: RagTarget = {
          id: (db.data.sequences.ragTagets += 1),
          directory: ragTarget.directory,
          fileType: ragTarget.fileType,
          // 수집된 파일 개수가 입력될 예정
          files: Math.floor(Math.random() * (800 - 150 + 1)) + 150,
        };
        rags[0].ragTargets?.push(target);
        rags[0].updatedDate = moment().format("YYYYMMDDHHmmss");
        await db.write();
        res.status(201).json(target);
      } else {
        res.status(400).end();
      }
      break;

    case "DELETE":
      const { ragId, ragTargetId } = req.query;
      if (ragId && ragTargetId) {
        const ragIdNum = parseInt(getParamToStr(ragId));
        const ragTargetIdNum = parseInt(getParamToStr(ragTargetId));
        const rags = db.data?.rags.filter((rag) => rag.id === ragIdNum);

        if (rags.length == 0) {
          res.status(404).end();
          return;
        }

        const ragTargets = rags[0].ragTargets.filter(
          (ragTarget) => ragTarget.id === ragTargetIdNum
        );
        if (ragTargets.length == 0) {
          res.status(404).end();
          return;
        }

        rags[0].ragTargets =
          rags[0].ragTargets.filter(
            (ragTarget) => ragTarget.id !== ragTargetIdNum
          ) || [];
        rags[0].updatedDate = moment().format("YYYYMMDDHHmmss");
        await db.write();
        res.status(204).end();
      } else {
        res.status(400).end();
      }
      break;

    default:
      res.status(405).end();
  }
}
