import { Rag } from "@/components/models/rags";
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

    default:
      res.status(405).end();
  }
}
