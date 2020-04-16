import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as pnp_common_v1_locale_pb from '../../../pnp/common/v1/locale_pb';
import * as pnp_user_v1_auth_pb from '../../../pnp/user/v1/auth_pb';

export class CheckEmailRegisteredRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEmailRegisteredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEmailRegisteredRequest): CheckEmailRegisteredRequest.AsObject;
  static serializeBinaryToWriter(message: CheckEmailRegisteredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEmailRegisteredRequest;
  static deserializeBinaryFromReader(message: CheckEmailRegisteredRequest, reader: jspb.BinaryReader): CheckEmailRegisteredRequest;
}

export namespace CheckEmailRegisteredRequest {
  export type AsObject = {
    email: string,
  }
}

export class CheckEmailRegisteredResponse extends jspb.Message {
  getRegistered(): boolean;
  setRegistered(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEmailRegisteredResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEmailRegisteredResponse): CheckEmailRegisteredResponse.AsObject;
  static serializeBinaryToWriter(message: CheckEmailRegisteredResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEmailRegisteredResponse;
  static deserializeBinaryFromReader(message: CheckEmailRegisteredResponse, reader: jspb.BinaryReader): CheckEmailRegisteredResponse;
}

export namespace CheckEmailRegisteredResponse {
  export type AsObject = {
    registered: boolean,
  }
}

export class CreateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    email: string,
    password: string,
    firstName: string,
  }
}

export class CreateUserResponse extends jspb.Message {
  getAuthResponse(): pnp_user_v1_auth_pb.AuthResponse | undefined;
  setAuthResponse(value?: pnp_user_v1_auth_pb.AuthResponse): void;
  hasAuthResponse(): boolean;
  clearAuthResponse(): void;

  getUser(): User | undefined;
  setUser(value?: User): void;
  hasUser(): boolean;
  clearUser(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    authResponse?: pnp_user_v1_auth_pb.AuthResponse.AsObject,
    user?: User.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getCommunicationLocale(): pnp_common_v1_locale_pb.Locale;
  setCommunicationLocale(value: pnp_common_v1_locale_pb.Locale): void;

  getMarketingPushAccepted(): boolean;
  setMarketingPushAccepted(value: boolean): void;

  getMarketingEmailAccepted(): boolean;
  setMarketingEmailAccepted(value: boolean): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    communicationLocale: pnp_common_v1_locale_pb.Locale,
    marketingPushAccepted: boolean,
    marketingEmailAccepted: boolean,
    firstName: string,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCommunicationLocale(): pnp_common_v1_locale_pb.Locale;
  setCommunicationLocale(value: pnp_common_v1_locale_pb.Locale): void;

  getCurrentEmailStatus(): User.EmailStatus;
  setCurrentEmailStatus(value: User.EmailStatus): void;

  getMarketingPushAccepted(): boolean;
  setMarketingPushAccepted(value: boolean): void;

  getMarketingEmailAccepted(): boolean;
  setMarketingEmailAccepted(value: boolean): void;

  getTermsOfUseAccepted(): boolean;
  setTermsOfUseAccepted(value: boolean): void;

  getCurrentEmail(): string;
  setCurrentEmail(value: string): void;

  getPendingEmail(): string;
  setPendingEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getUnlockTradeShowForm(): boolean;
  setUnlockTradeShowForm(value: boolean): void;

  getUnlockAdminDashboard(): boolean;
  setUnlockAdminDashboard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    communicationLocale: pnp_common_v1_locale_pb.Locale,
    currentEmailStatus: User.EmailStatus,
    marketingPushAccepted: boolean,
    marketingEmailAccepted: boolean,
    termsOfUseAccepted: boolean,
    currentEmail: string,
    pendingEmail: string,
    firstName: string,
    unlockTradeShowForm: boolean,
    unlockAdminDashboard: boolean,
  }

  export enum EmailStatus { 
    UNKNOWN = 0,
    INVALID = 1,
    VERIFIED = 2,
  }
}

export class ChangeEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeEmailRequest): ChangeEmailRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeEmailRequest;
  static deserializeBinaryFromReader(message: ChangeEmailRequest, reader: jspb.BinaryReader): ChangeEmailRequest;
}

export namespace ChangeEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    oldPassword: string,
    newPassword: string,
  }
}

