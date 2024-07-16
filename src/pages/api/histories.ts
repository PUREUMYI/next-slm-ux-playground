import {
  SlmMessage,
  SlmMessageHistory,
  SlmSettings,
} from "@/components/models/message";
import initDB from "@/components/store/db";
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SlmMessageHistory[]>
) {
  const db = await initDB();
  switch (req.method) {
    case "GET":
      const { message } = req.query;
      let filtered;
      if (message) {
        const messageStr = Array.isArray(message)
          ? message[0].toUpperCase()
          : message.toUpperCase();
        filtered = db.data?.histories.filter(
          (history) =>
            history.messages.filter((msg) =>
              msg.message.toUpperCase().includes(messageStr)
            ).length > 0
        );
      } else {
        filtered = db.data?.histories;
      }

      res.status(200).json(filtered);
      break;

    case "POST":
      const {
        system,
        messages,
        settings,
        ragId,
      }: {
        system: string;
        messages: SlmMessage[];
        settings: SlmSettings;
        ragId: number;
      } = req.body;
      const history: SlmMessageHistory = {
        id: (db.data.sequences.histories += 1),
        system,
        messages,
        settings,
        ragId,
        updatedDate: moment().format("YYYYMMDDHHmmss"),
      };
      db.data?.histories.push(history);
      await db.write();
      res.status(201).json(db.data?.histories);
      break;

    default:
      res.status(405).end();
  }
}
