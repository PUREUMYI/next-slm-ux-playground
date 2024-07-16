import { Rag } from "@/components/models/rags";
import initDB from "@/components/store/db";
import type { NextApiRequest, NextApiResponse } from "next";

const getParamToStr = (param: string | string[]) => {
  return Array.isArray(param) ? param[0] : param;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rag[]>
) {
  const db = await initDB();
  switch (req.method) {
    case "GET":
      res.status(200).json(db.data?.rags);
      break;

    default:
      res.status(405).end();
  }
}
