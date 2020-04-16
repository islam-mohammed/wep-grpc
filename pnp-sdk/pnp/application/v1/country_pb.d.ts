import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class ListCountriesResponse extends jspb.Message {
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): void;
  clearCountriesList(): void;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCountriesResponse): ListCountriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCountriesResponse;
  static deserializeBinaryFromReader(message: ListCountriesResponse, reader: jspb.BinaryReader): ListCountriesResponse;
}

export namespace ListCountriesResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class Country extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCallingCodesList(): Array<string>;
  setCallingCodesList(value: Array<string>): void;
  clearCallingCodesList(): void;
  addCallingCodes(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    id: number,
    code: string,
    name: string,
    callingCodesList: Array<string>,
  }
}

