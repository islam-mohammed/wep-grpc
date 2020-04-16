import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ListPhoneCallsRequest extends jspb.Message {
  getPersoItemId(): number;
  setPersoItemId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhoneCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhoneCallsRequest): ListPhoneCallsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPhoneCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhoneCallsRequest;
  static deserializeBinaryFromReader(message: ListPhoneCallsRequest, reader: jspb.BinaryReader): ListPhoneCallsRequest;
}

export namespace ListPhoneCallsRequest {
  export type AsObject = {
    persoItemId: number,
  }
}

export class ListPhoneCallsResponse extends jspb.Message {
  getPhoneCallsList(): Array<PhoneCall>;
  setPhoneCallsList(value: Array<PhoneCall>): void;
  clearPhoneCallsList(): void;
  addPhoneCalls(value?: PhoneCall, index?: number): PhoneCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhoneCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhoneCallsResponse): ListPhoneCallsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPhoneCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhoneCallsResponse;
  static deserializeBinaryFromReader(message: ListPhoneCallsResponse, reader: jspb.BinaryReader): ListPhoneCallsResponse;
}

export namespace ListPhoneCallsResponse {
  export type AsObject = {
    phoneCallsList: Array<PhoneCall.AsObject>,
  }
}

export class GetPhoneCallRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhoneCallRequest): GetPhoneCallRequest.AsObject;
  static serializeBinaryToWriter(message: GetPhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhoneCallRequest;
  static deserializeBinaryFromReader(message: GetPhoneCallRequest, reader: jspb.BinaryReader): GetPhoneCallRequest;
}

export namespace GetPhoneCallRequest {
  export type AsObject = {
    id: number,
  }
}

export class CreatePhoneCallRequest extends jspb.Message {
  getPersoItemId(): number;
  setPersoItemId(value: number): void;

  getDelayedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDelayedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDelayedAt(): boolean;
  clearDelayedAt(): void;

  getPhoneNumber(): PhoneNumber | undefined;
  setPhoneNumber(value?: PhoneNumber): void;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneCallRequest): CreatePhoneCallRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneCallRequest;
  static deserializeBinaryFromReader(message: CreatePhoneCallRequest, reader: jspb.BinaryReader): CreatePhoneCallRequest;
}

export namespace CreatePhoneCallRequest {
  export type AsObject = {
    persoItemId: number,
    delayedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber?: PhoneNumber.AsObject,
  }
}

export class UpdatePhoneCallRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDelayedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDelayedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDelayedAt(): boolean;
  clearDelayedAt(): void;

  getPhoneNumber(): PhoneNumber | undefined;
  setPhoneNumber(value?: PhoneNumber): void;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhoneCallRequest): UpdatePhoneCallRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhoneCallRequest;
  static deserializeBinaryFromReader(message: UpdatePhoneCallRequest, reader: jspb.BinaryReader): UpdatePhoneCallRequest;
}

export namespace UpdatePhoneCallRequest {
  export type AsObject = {
    id: number,
    delayedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber?: PhoneNumber.AsObject,
  }
}

export class DeletePhoneCallRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePhoneCallRequest): DeletePhoneCallRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePhoneCallRequest;
  static deserializeBinaryFromReader(message: DeletePhoneCallRequest, reader: jspb.BinaryReader): DeletePhoneCallRequest;
}

export namespace DeletePhoneCallRequest {
  export type AsObject = {
    id: number,
  }
}

export class VerifyPhoneNumberRequest extends jspb.Message {
  getPhoneNumber(): PhoneNumber | undefined;
  setPhoneNumber(value?: PhoneNumber): void;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneNumberRequest): VerifyPhoneNumberRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneNumberRequest;
  static deserializeBinaryFromReader(message: VerifyPhoneNumberRequest, reader: jspb.BinaryReader): VerifyPhoneNumberRequest;
}

export namespace VerifyPhoneNumberRequest {
  export type AsObject = {
    phoneNumber?: PhoneNumber.AsObject,
  }
}

export class PhoneNumber extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): void;

  getCountryCallingCode(): string;
  setCountryCallingCode(value: string): void;

  getBasePhoneNumber(): string;
  setBasePhoneNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneNumber.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
  static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneNumber;
  static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
}

export namespace PhoneNumber {
  export type AsObject = {
    countryCode: string,
    countryCallingCode: string,
    basePhoneNumber: string,
  }
}

export class VerifyPhoneNumberResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneNumberResponse): VerifyPhoneNumberResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneNumberResponse;
  static deserializeBinaryFromReader(message: VerifyPhoneNumberResponse, reader: jspb.BinaryReader): VerifyPhoneNumberResponse;
}

export namespace VerifyPhoneNumberResponse {
  export type AsObject = {
    valid: boolean,
  }
}

export class PhoneCall extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPersoItemId(): number;
  setPersoItemId(value: number): void;

  getStatus(): PhoneCall.Status;
  setStatus(value: PhoneCall.Status): void;

  getDelayedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDelayedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDelayedAt(): boolean;
  clearDelayedAt(): void;

  getPhoneNumber(): PhoneNumber | undefined;
  setPhoneNumber(value?: PhoneNumber): void;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneCall.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneCall): PhoneCall.AsObject;
  static serializeBinaryToWriter(message: PhoneCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneCall;
  static deserializeBinaryFromReader(message: PhoneCall, reader: jspb.BinaryReader): PhoneCall;
}

export namespace PhoneCall {
  export type AsObject = {
    id: number,
    persoItemId: number,
    status: PhoneCall.Status,
    delayedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber?: PhoneNumber.AsObject,
  }

  export enum Status { 
    COMPLETED = 0,
    INCOMPLETE_ERROR = 1,
    INCOMPLETE_INVALID = 2,
    INCOMPLETE_BUSY = 3,
    INCOMPLETE_NO_ANSWER = 4,
    INCOMPLETE_REJECTED = 5,
    SCHEDULED = 6,
    PREPARING = 7,
    RINGING = 8,
    ANSWERED = 9,
  }
}

