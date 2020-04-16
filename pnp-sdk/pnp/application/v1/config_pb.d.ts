import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class GetConfigRequest extends jspb.Message {
  getPlatform(): PlatformType;
  setPlatform(value: PlatformType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigRequest): GetConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigRequest;
  static deserializeBinaryFromReader(message: GetConfigRequest, reader: jspb.BinaryReader): GetConfigRequest;
}

export namespace GetConfigRequest {
  export type AsObject = {
    platform: PlatformType,
  }
}

export class Config extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getMinimumVersion(): string;
  setMinimumVersion(value: string): void;

  getLatestVersion(): string;
  setLatestVersion(value: string): void;

  getLatestTermsDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLatestTermsDate(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLatestTermsDate(): boolean;
  clearLatestTermsDate(): void;

  getPromptAcceptTerms(): boolean;
  setPromptAcceptTerms(value: boolean): void;

  getPromptMarketingEmail(): boolean;
  setPromptMarketingEmail(value: boolean): void;

  getEnableNameSuggestion(): boolean;
  setEnableNameSuggestion(value: boolean): void;

  getEnableHomePageEmailCapture(): boolean;
  setEnableHomePageEmailCapture(value: boolean): void;

  getEnableHomePageFreeVideo(): boolean;
  setEnableHomePageFreeVideo(value: boolean): void;

  getEnableGameAnsweringMachine(): boolean;
  setEnableGameAnsweringMachine(value: boolean): void;

  getLiveChatIdEn(): number;
  setLiveChatIdEn(value: number): void;

  getLiveChatIdEs(): number;
  setLiveChatIdEs(value: number): void;

  getLiveChatIdFr(): number;
  setLiveChatIdFr(value: number): void;

  getLiveChatIdIt(): number;
  setLiveChatIdIt(value: number): void;

  getSingleRecipientFormId(): number;
  setSingleRecipientFormId(value: number): void;

  getGroupRecipientFormId(): number;
  setGroupRecipientFormId(value: number): void;

  getCertificateName(): string;
  setCertificateName(value: string): void;

  getFreeVideoScenarioCode(): string;
  setFreeVideoScenarioCode(value: string): void;

  getFreeVideoFormId(): string;
  setFreeVideoFormId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    country: string,
    region: string,
    zone: string,
    currency: string,
    minimumVersion: string,
    latestVersion: string,
    latestTermsDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    promptAcceptTerms: boolean,
    promptMarketingEmail: boolean,
    enableNameSuggestion: boolean,
    enableHomePageEmailCapture: boolean,
    enableHomePageFreeVideo: boolean,
    enableGameAnsweringMachine: boolean,
    liveChatIdEn: number,
    liveChatIdEs: number,
    liveChatIdFr: number,
    liveChatIdIt: number,
    singleRecipientFormId: number,
    groupRecipientFormId: number,
    certificateName: string,
    freeVideoScenarioCode: string,
    freeVideoFormId: string,
  }
}

export enum PlatformType { 
  ANDROID = 0,
  IOS = 1,
  MACOS = 2,
  TVOS = 3,
  WEB = 4,
}
