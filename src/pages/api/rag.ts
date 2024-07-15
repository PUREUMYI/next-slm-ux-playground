import { FileType, Rag } from "@/components/models/rags";
import initDB from "@/components/store/db";
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";

const getParamToStr = (param: string | string[]) => {
  return Array.isArray(param) ? param[0] : param;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rag>
) {
  const db = await initDB();
  switch (req.method) {
    case "GET":
      const { id: idParam } = req.query;
      if (idParam) {
        const id = parseInt(getParamToStr(idParam));
        const rags = db.data?.rags.filter((rag) => rag.id === id);

        if (rags.length > 0) {
          res.status(200).json(rags[0]);
        } else {
          res.status(404).end();
        }
      } else {
        res.status(400).end();
      }
      break;

    case "POST":
      const { owner, repo }: { owner: string; repo: string } = req.body;
      if (owner && repo) {
        const rag: Rag = {
          id: (db.data.sequences.rags += 1),
          owner,
          repo,
          ragTargets: [],
          updatedDate: moment().format("YYYYMMDDHHmmss"),
        };
        db.data.rags.push(rag);
        await db.write();
        res.status(201).json(rag);
      } else {
        res.status(400).end();
      }
      break;

    case "PUT":
      const {
        id,
        ragTargets,
      }: {
        id: number;
        ragTargets: [
          {
            directory: string;
            fileType: FileType;
          }
        ];
      } = req.body;
      if (id && ragTargets && ragTargets.length > 0) {
        const rags = db.data?.rags.filter((rag) => rag.id === id);
        if (rags.length > 0) {
          for (const ragTarget of ragTargets) {
            console.log(ragTarget);
            rags[0].ragTargets?.push({
              id: (db.data.sequences.ragTagets += 1),
              directory: ragTarget.directory,
              fileType: ragTarget.fileType,
              // 수집된 파일 개수가 입력될 예정
              files: Math.floor(Math.random() * (800 - 150 + 1)) + 150,
            });
          }
          rags[0].updatedDate = moment().format("YYYYMMDDHHmmss");
          await db.write();
          res.status(201).json(rags[0]);
        } else {
          res.status(404).end();
        }
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
        if (rags.length > 0) {
          const ragTargets = rags[0].ragTargets.filter(
            (ragTarget) => ragTarget.id === ragTargetIdNum
          );
          if (ragTargets.length > 0) {
            rags[0].ragTargets =
              rags[0].ragTargets.filter(
                (ragTarget) => ragTarget.id !== ragTargetIdNum
              ) || [];
            rags[0].updatedDate = moment().format("YYYYMMDDHHmmss");
            await db.write();
            res.status(204).end();
          } else {
            res.status(404).end();
          }
        } else {
          res.status(404).end();
        }
      } else {
        res.status(400).end();
      }
      break;

    default:
      res.status(405).end();
  }
}
