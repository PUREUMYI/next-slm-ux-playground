import { SlmMessageHistory } from "@/components/models/message";
import initDB from "@/components/store/db";
import type { NextApiRequest, NextApiResponse } from "next";

const getParamToStr = (param: string | string[]) => {
  return Array.isArray(param) ? param[0] : param;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SlmMessageHistory>
) {
  const db = await initDB();
  switch (req.method) {
    case "GET":
      const { id: idParam } = req.query;
      if (idParam) {
        const id = parseInt(getParamToStr(idParam));
        const histories = db.data?.histories.filter(
          (history) => history.id == id
        );

        if (histories.length > 0) {
          res.status(200).json(histories[0]);
        } else {
          res.status(404).end();
        }
      } else {
        res.status(400).end();
      }
      break;

    case "PUT":
      const { id: updatedId, messages } = req.body;
      if (updatedId && messages) {
        const id = parseInt(getParamToStr(updatedId));
        const histories = db.data?.histories.filter(
          (history) => history.id == id
        );

        if (histories.length > 0) {
          histories[0].messages = messages;
          db.write();
          res.status(200).json(histories[0]);
        } else {
          res.status(404).end();
        }
      } else {
        res.status(400).end();
      }
      break;

    case "DELETE":
      const { id: deletedId } = req.query;
      if (deletedId) {
        const id = parseInt(getParamToStr(deletedId));
        const histories = db.data?.histories.filter(
          (history) => history.id === id
        );
        if (histories.length > 0) {
          db.data!.histories =
            db.data?.histories.filter((history) => history.id !== id) || [];
          await db.write();
          res.status(204).end();
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
