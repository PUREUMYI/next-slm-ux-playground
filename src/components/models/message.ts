//hello
export type SlmMessage = {
  role: SlmMessageType;
  message: string;
};

export type SlmSettings = {
  model: string;
  temperature: number;
  maxLength: number;
  topP: number;
};

export type SlmModel = {
  system: string;
  messages: SlmMessage[];
  settings: SlmSettings;
};

export enum SlmMessageType {
  HUMAN = "human",
  AI = "ai",
}

export type LocalModel = {
  name: string;
  size: number;
  family: string;
  format: string;
  paramSize: string;
  quantizationLevel: string;
};

export type GithubRAGsModel = {
  repoName: string;
  fileType: string;
  files: number;
  creationDate: string;
  models: string;
  regenerate: string;
  remove: string;
};
