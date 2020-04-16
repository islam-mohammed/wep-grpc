import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class SubscribeEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeEmailRequest): SubscribeEmailRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeEmailRequest;
  static deserializeBinaryFromReader(message: SubscribeEmailRequest, reader: jspb.BinaryReader): SubscribeEmailRequest;
}

export namespace SubscribeEmailRequest {
  export type AsObject = {
    email: string,
    firstName: string,
  }
}

export class ConfirmEmailRequest extends jspb.Message {
  getEmailConfirmationToken(): string;
  setEmailConfirmationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmEmailRequest): ConfirmEmailRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmEmailRequest;
  static deserializeBinaryFromReader(message: ConfirmEmailRequest, reader: jspb.BinaryReader): ConfirmEmailRequest;
}

export namespace ConfirmEmailRequest {
  export type AsObject = {
    emailConfirmationToken: string,
  }
}

export class UnsubscribeEmailRequest extends jspb.Message {
  getUnsubscribeToken(): string;
  setUnsubscribeToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeEmailRequest): UnsubscribeEmailRequest.AsObject;
  static serializeBinaryToWriter(message: UnsubscribeEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeEmailRequest;
  static deserializeBinaryFromReader(message: UnsubscribeEmailRequest, reader: jspb.BinaryReader): UnsubscribeEmailRequest;
}

export namespace UnsubscribeEmailRequest {
  export type AsObject = {
    unsubscribeToken: string,
  }
}

