import * as jspb from "google-protobuf"

export class MatchFirstNameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchFirstNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MatchFirstNameRequest): MatchFirstNameRequest.AsObject;
  static serializeBinaryToWriter(message: MatchFirstNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchFirstNameRequest;
  static deserializeBinaryFromReader(message: MatchFirstNameRequest, reader: jspb.BinaryReader): MatchFirstNameRequest;
}

export namespace MatchFirstNameRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetFirstNameRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFirstNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFirstNameRequest): GetFirstNameRequest.AsObject;
  static serializeBinaryToWriter(message: GetFirstNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFirstNameRequest;
  static deserializeBinaryFromReader(message: GetFirstNameRequest, reader: jspb.BinaryReader): GetFirstNameRequest;
}

export namespace GetFirstNameRequest {
  export type AsObject = {
    code: string,
  }
}

export class FirstName extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAssetUrl(): string;
  setAssetUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FirstName.AsObject;
  static toObject(includeInstance: boolean, msg: FirstName): FirstName.AsObject;
  static serializeBinaryToWriter(message: FirstName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FirstName;
  static deserializeBinaryFromReader(message: FirstName, reader: jspb.BinaryReader): FirstName;
}

export namespace FirstName {
  export type AsObject = {
    code: string,
    name: string,
    assetUrl: string,
  }
}

export class FirstNameMatches extends jspb.Message {
  getMatchesList(): Array<FirstNameMatches.Section>;
  setMatchesList(value: Array<FirstNameMatches.Section>): void;
  clearMatchesList(): void;
  addMatches(value?: FirstNameMatches.Section, index?: number): FirstNameMatches.Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FirstNameMatches.AsObject;
  static toObject(includeInstance: boolean, msg: FirstNameMatches): FirstNameMatches.AsObject;
  static serializeBinaryToWriter(message: FirstNameMatches, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FirstNameMatches;
  static deserializeBinaryFromReader(message: FirstNameMatches, reader: jspb.BinaryReader): FirstNameMatches;
}

export namespace FirstNameMatches {
  export type AsObject = {
    matchesList: Array<FirstNameMatches.Section.AsObject>,
  }

  export class Section extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getFirstNamesList(): Array<FirstName>;
    setFirstNamesList(value: Array<FirstName>): void;
    clearFirstNamesList(): void;
    addFirstNames(value?: FirstName, index?: number): FirstName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Section.AsObject;
    static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
    static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Section;
    static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
  }

  export namespace Section {
    export type AsObject = {
      name: string,
      firstNamesList: Array<FirstName.AsObject>,
    }
  }

}

