import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class SubmitSuggestedNameRequest extends jspb.Message {
  getFileId(): number;
  setFileId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitSuggestedNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitSuggestedNameRequest): SubmitSuggestedNameRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitSuggestedNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitSuggestedNameRequest;
  static deserializeBinaryFromReader(message: SubmitSuggestedNameRequest, reader: jspb.BinaryReader): SubmitSuggestedNameRequest;
}

export namespace SubmitSuggestedNameRequest {
  export type AsObject = {
    fileId: number,
    name: string,
  }
}

