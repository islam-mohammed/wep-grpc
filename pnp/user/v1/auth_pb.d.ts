import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class AuthRequest extends jspb.Message {
  getType(): AuthRequest.Type;
  setType(value: AuthRequest.Type): void;

  getEmailAuth(): AuthRequest.EmailAuth | undefined;
  setEmailAuth(value?: AuthRequest.EmailAuth): void;
  hasEmailAuth(): boolean;
  clearEmailAuth(): void;

  getProviderAuth(): AuthRequest.ProviderAuth | undefined;
  setProviderAuth(value?: AuthRequest.ProviderAuth): void;
  hasProviderAuth(): boolean;
  clearProviderAuth(): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  getCredentialsCase(): AuthRequest.CredentialsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    type: AuthRequest.Type,
    emailAuth?: AuthRequest.EmailAuth.AsObject,
    providerAuth?: AuthRequest.ProviderAuth.AsObject,
    refreshToken: string,
  }

  export class EmailAuth extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailAuth.AsObject;
    static toObject(includeInstance: boolean, msg: EmailAuth): EmailAuth.AsObject;
    static serializeBinaryToWriter(message: EmailAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailAuth;
    static deserializeBinaryFromReader(message: EmailAuth, reader: jspb.BinaryReader): EmailAuth;
  }

  export namespace EmailAuth {
    export type AsObject = {
      email: string,
      password: string,
    }
  }


  export class ProviderAuth extends jspb.Message {
    getType(): AuthRequest.ProviderAuth.Type;
    setType(value: AuthRequest.ProviderAuth.Type): void;

    getIdentityToken(): string;
    setIdentityToken(value: string): void;

    getAccessToken(): string;
    setAccessToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProviderAuth.AsObject;
    static toObject(includeInstance: boolean, msg: ProviderAuth): ProviderAuth.AsObject;
    static serializeBinaryToWriter(message: ProviderAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProviderAuth;
    static deserializeBinaryFromReader(message: ProviderAuth, reader: jspb.BinaryReader): ProviderAuth;
  }

  export namespace ProviderAuth {
    export type AsObject = {
      type: AuthRequest.ProviderAuth.Type,
      identityToken: string,
      accessToken: string,
    }

    export enum Type { 
      FIREBASE = 0,
    }
  }


  export enum Type { 
    REFRESH_TOKEN = 0,
    EMAIL = 1,
    PROVIDER = 2,
  }

  export enum CredentialsCase { 
    CREDENTIALS_NOT_SET = 0,
    EMAIL_AUTH = 16,
    PROVIDER_AUTH = 17,
    REFRESH_TOKEN = 18,
  }
}

export class ValidateResetTokenRequest extends jspb.Message {
  getResetToken(): string;
  setResetToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateResetTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateResetTokenRequest): ValidateResetTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateResetTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateResetTokenRequest;
  static deserializeBinaryFromReader(message: ValidateResetTokenRequest, reader: jspb.BinaryReader): ValidateResetTokenRequest;
}

export namespace ValidateResetTokenRequest {
  export type AsObject = {
    resetToken: string,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class ConfirmPasswordRequest extends jspb.Message {
  getResetToken(): string;
  setResetToken(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPasswordRequest): ConfirmPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPasswordRequest;
  static deserializeBinaryFromReader(message: ConfirmPasswordRequest, reader: jspb.BinaryReader): ConfirmPasswordRequest;
}

export namespace ConfirmPasswordRequest {
  export type AsObject = {
    resetToken: string,
    newPassword: string,
  }
}

export class AuthResponse extends jspb.Message {
  getBearerToken(): string;
  setBearerToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    bearerToken: string,
    refreshToken: string,
  }
}

