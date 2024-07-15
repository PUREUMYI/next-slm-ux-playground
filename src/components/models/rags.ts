export enum FileType {
  Python = "py",
  Java = "java",
  JavaScript = "js",
  TypeScript = "ts",
  Markdown = "mdx",
}

export interface GithubInfo {
  token: string;
  url: string;
  updatedDate?: string;
}

export interface Rag {
  id: number;
  owner: string;
  repo: string;
  ragTargets: RagTarget[];
  updatedDate?: string;
}

export interface RagTarget {
  id: number;
  directory: string;
  fileType: FileType;
  files: number;
}
