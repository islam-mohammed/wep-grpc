import * as jspb from "google-protobuf"

export class UploadFileRequest extends jspb.Message {
  getExtension(): UploadFileRequest.Extension;
  setExtension(value: UploadFileRequest.Extension): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileRequest): UploadFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileRequest;
  static deserializeBinaryFromReader(message: UploadFileRequest, reader: jspb.BinaryReader): UploadFileRequest;
}

export namespace UploadFileRequest {
  export type AsObject = {
    extension: UploadFileRequest.Extension,
    data: Uint8Array | string,
  }

  export enum Extension { 
    JPEG = 0,
    PNG = 1,
    HEIC = 2,
    WEBP = 3,
    MP4 = 16,
    MOV = 17,
    WEBM = 18,
    MP3 = 32,
  }
}

export class UploadFileResponse extends jspb.Message {
  getStatus(): UploadFileResponse.Status;
  setStatus(value: UploadFileResponse.Status): void;

  getMessage(): string;
  setMessage(value: string): void;

  getFile(): File | undefined;
  setFile(value?: File): void;
  hasFile(): boolean;
  clearFile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileResponse): UploadFileResponse.AsObject;
  static serializeBinaryToWriter(message: UploadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileResponse;
  static deserializeBinaryFromReader(message: UploadFileResponse, reader: jspb.BinaryReader): UploadFileResponse;
}

export namespace UploadFileResponse {
  export type AsObject = {
    status: UploadFileResponse.Status,
    message: string,
    file?: File.AsObject,
  }

  export enum Status { 
    SUCCESS = 0,
    FAILED = 1,
  }
}

export class GetFileRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileRequest): GetFileRequest.AsObject;
  static serializeBinaryToWriter(message: GetFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileRequest;
  static deserializeBinaryFromReader(message: GetFileRequest, reader: jspb.BinaryReader): GetFileRequest;
}

export namespace GetFileRequest {
  export type AsObject = {
    id: number,
  }
}

export class File extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    id: number,
    path: string,
  }
}

