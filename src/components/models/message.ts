//hello
export interface SlmMessage {
  role: SlmMessageType;
  message: string;
}

export interface SlmSettings {
  model: string;
  temperature: number;
  maxLength: number;
  topP: number;
}

export interface SlmModel {
  system: string;
  messages: SlmMessage[];
  settings: SlmSettings;
}

export enum SlmMessageType {
  HUMAN = "human",
  AI = "ai",
}

export interface SlmMessageHistory extends SlmModel {
  id: number;
  ragId: number;
  updatedDate: string;
}

export interface LocalModel {
  name: string;
  size: number;
  family: string;
  format: string;
  paramSize: string;
  quantizationLevel: string;
}
