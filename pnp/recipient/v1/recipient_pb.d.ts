import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pnp_common_v1_locale_pb from '../../../pnp/common/v1/locale_pb';

export class ListRecipientsResponse extends jspb.Message {
  getRecipientsList(): Array<Recipient>;
  setRecipientsList(value: Array<Recipient>): void;
  clearRecipientsList(): void;
  addRecipients(value?: Recipient, index?: number): Recipient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipientsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipientsResponse): ListRecipientsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipientsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipientsResponse;
  static deserializeBinaryFromReader(message: ListRecipientsResponse, reader: jspb.BinaryReader): ListRecipientsResponse;
}

export namespace ListRecipientsResponse {
  export type AsObject = {
    recipientsList: Array<Recipient.AsObject>,
  }
}

export class GetRecipientRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipientRequest): GetRecipientRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipientRequest;
  static deserializeBinaryFromReader(message: GetRecipientRequest, reader: jspb.BinaryReader): GetRecipientRequest;
}

export namespace GetRecipientRequest {
  export type AsObject = {
    id: number,
  }
}

export class CreateRecipientRequest extends jspb.Message {
  getType(): Recipient.Type;
  setType(value: Recipient.Type): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipientRequest): CreateRecipientRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipientRequest;
  static deserializeBinaryFromReader(message: CreateRecipientRequest, reader: jspb.BinaryReader): CreateRecipientRequest;
}

export namespace CreateRecipientRequest {
  export type AsObject = {
    type: Recipient.Type,
    dataMap: Array<[string, string]>,
  }
}

export class RecipientData extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipientData.AsObject;
  static toObject(includeInstance: boolean, msg: RecipientData): RecipientData.AsObject;
  static serializeBinaryToWriter(message: RecipientData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipientData;
  static deserializeBinaryFromReader(message: RecipientData, reader: jspb.BinaryReader): RecipientData;
}

export namespace RecipientData {
  export type AsObject = {
    id: number,
    dataMap: Array<[string, string]>,
  }
}

export class UpdateRecipientRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAcceptBirthdayVideo(): boolean;
  setAcceptBirthdayVideo(value: boolean): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipientRequest): UpdateRecipientRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipientRequest;
  static deserializeBinaryFromReader(message: UpdateRecipientRequest, reader: jspb.BinaryReader): UpdateRecipientRequest;
}

export namespace UpdateRecipientRequest {
  export type AsObject = {
    id: number,
    acceptBirthdayVideo: boolean,
    dataMap: Array<[string, string]>,
  }
}

export class DeleteRecipientRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipientRequest): DeleteRecipientRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipientRequest;
  static deserializeBinaryFromReader(message: DeleteRecipientRequest, reader: jspb.BinaryReader): DeleteRecipientRequest;
}

export namespace DeleteRecipientRequest {
  export type AsObject = {
    id: number,
  }
}

export class Recipient extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCreateBirthdayVideo(): boolean;
  setCreateBirthdayVideo(value: boolean): void;

  getType(): Recipient.Type;
  setType(value: Recipient.Type): void;

  getLocale(): pnp_common_v1_locale_pb.Locale;
  setLocale(value: pnp_common_v1_locale_pb.Locale): void;

  getBirthDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthDate(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBirthDate(): boolean;
  clearBirthDate(): void;

  getName(): string;
  setName(value: string): void;

  getImageUrl(): string;
  setImageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipient.AsObject;
  static toObject(includeInstance: boolean, msg: Recipient): Recipient.AsObject;
  static serializeBinaryToWriter(message: Recipient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipient;
  static deserializeBinaryFromReader(message: Recipient, reader: jspb.BinaryReader): Recipient;
}

export namespace Recipient {
  export type AsObject = {
    id: number,
    createBirthdayVideo: boolean,
    type: Recipient.Type,
    locale: pnp_common_v1_locale_pb.Locale,
    birthDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    imageUrl: string,
  }

  export enum Type { 
    SINGLE = 0,
    GROUP = 1,
  }
}

