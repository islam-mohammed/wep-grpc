import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class SubscribeDeviceRequest extends jspb.Message {
  getDeviceToken(): string;
  setDeviceToken(value: string): void;

  getDeviceOs(): string;
  setDeviceOs(value: string): void;

  getDeviceModel(): string;
  setDeviceModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeDeviceRequest): SubscribeDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeDeviceRequest;
  static deserializeBinaryFromReader(message: SubscribeDeviceRequest, reader: jspb.BinaryReader): SubscribeDeviceRequest;
}

export namespace SubscribeDeviceRequest {
  export type AsObject = {
    deviceToken: string,
    deviceOs: string,
    deviceModel: string,
  }
}

