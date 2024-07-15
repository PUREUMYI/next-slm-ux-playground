import { ensureDir } from "fs-extra";
import { JSONFilePreset } from "lowdb/node";
import { homedir } from "os";
import { SlmMessageHistory } from "../models/message";
import { GithubInfo, Rag } from "../models/rags";

const appDirectgoryName = ".next-slm";
const baseDir = `${homedir}/${appDirectgoryName}/store`;
const storeName = `${baseDir}/db.json`;

interface DataSequences {
  histories: number;
  rags: number;
  ragTagets: number;
}

interface Data {
  sequences: DataSequences;
  histories: SlmMessageHistory[];
  github: GithubInfo;
  rags: Rag[];
}

export default async function initDB() {
  await ensureDir(baseDir);
  const defaultData: Data = {
    sequences: { histories: 0, rags: 0, ragTagets: 0 },
    histories: [],
    github: {
      token: "",
      url: "",
    },
    rags: [],
  };
  return await JSONFilePreset<Data>(storeName, defaultData);
}
