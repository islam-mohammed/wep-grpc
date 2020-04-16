import * as jspb from "google-protobuf"

export class ListAssetsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsRequest): ListAssetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsRequest;
  static deserializeBinaryFromReader(message: ListAssetsRequest, reader: jspb.BinaryReader): ListAssetsRequest;
}

export namespace ListAssetsRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListAssetsResponse extends jspb.Message {
  getAssetsMap(): jspb.Map<string, Asset>;
  clearAssetsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsResponse): ListAssetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsResponse;
  static deserializeBinaryFromReader(message: ListAssetsResponse, reader: jspb.BinaryReader): ListAssetsResponse;
}

export namespace ListAssetsResponse {
  export type AsObject = {
    assetsMap: Array<[string, Asset.AsObject]>,
  }
}

export class Asset extends jspb.Message {
  getType(): Asset.Type;
  setType(value: Asset.Type): void;

  getUrl(): string;
  setUrl(value: string): void;

  getAudio(): Asset.Audio | undefined;
  setAudio(value?: Asset.Audio): void;
  hasAudio(): boolean;
  clearAudio(): void;

  getImage(): Asset.Image | undefined;
  setImage(value?: Asset.Image): void;
  hasImage(): boolean;
  clearImage(): void;

  getVideo(): Asset.Video | undefined;
  setVideo(value?: Asset.Video): void;
  hasVideo(): boolean;
  clearVideo(): void;

  getTypeDataCase(): Asset.TypeDataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    type: Asset.Type,
    url: string,
    audio?: Asset.Audio.AsObject,
    image?: Asset.Image.AsObject,
    video?: Asset.Video.AsObject,
  }

  export class Audio extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Audio.AsObject;
    static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
    static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Audio;
    static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
  }

  export namespace Audio {
    export type AsObject = {
    }
  }


  export class Image extends jspb.Message {
    getPreserveAlpha(): boolean;
    setPreserveAlpha(value: boolean): void;

    getAlt(): string;
    setAlt(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
  }

  export namespace Image {
    export type AsObject = {
      preserveAlpha: boolean,
      alt: string,
    }
  }


  export class Video extends jspb.Message {
    getPosterUrl(): string;
    setPosterUrl(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Video.AsObject;
    static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
    static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Video;
    static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
  }

  export namespace Video {
    export type AsObject = {
      posterUrl: string,
    }
  }


  export enum Type { 
    IMAGE = 0,
    VIDEO = 1,
    AUDIO = 2,
  }

  export enum TypeDataCase { 
    TYPE_DATA_NOT_SET = 0,
    AUDIO = 16,
    IMAGE = 17,
    VIDEO = 18,
  }
}

