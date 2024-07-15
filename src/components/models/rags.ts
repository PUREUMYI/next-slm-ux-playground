export enum FileType {
  Python = "py",
  Java = "java",
  JavaScript = "js",
  TypeScript = "ts",
}

export interface GithubInfo {
  token: string;
  url: string;
  updatedDate?: string;
}

export interface Rag {
  id: number;
  owner: string;
  repo: number;
  ragTargets: RagTarget[];
  updatedDate?: string;
}

export interface RagTarget {
  id: number;
  directory: string;
  fileType: FileType;
  files: number;
}
