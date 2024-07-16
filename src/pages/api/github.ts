import { GithubInfo } from "@/components/models/rags";
import initDB from "@/components/store/db";
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GithubInfo>
) {
  const db = await initDB();
  switch (req.method) {
    case "GET":
      res.status(200).json(db.data?.github);
      break;

    case "PUT":
      const { token, url } = req.body;
      if (token && url) {
        db.data.github = {
          token,
          url,
          updatedDate: moment().format("YYYYMMDDHHmmss"),
        };
        db.write();
        res.status(201).json(db.data?.github);
      } else {
        res.status(400).end();
      }
      break;

    default:
      res.status(405).end();
  }
}
