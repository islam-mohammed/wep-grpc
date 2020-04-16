import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class ListInfoMessagesResponse extends jspb.Message {
  getInfoMessagesList(): Array<InfoMessage>;
  setInfoMessagesList(value: Array<InfoMessage>): void;
  clearInfoMessagesList(): void;
  addInfoMessages(value?: InfoMessage, index?: number): InfoMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInfoMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInfoMessagesResponse): ListInfoMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: ListInfoMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInfoMessagesResponse;
  static deserializeBinaryFromReader(message: ListInfoMessagesResponse, reader: jspb.BinaryReader): ListInfoMessagesResponse;
}

export namespace ListInfoMessagesResponse {
  export type AsObject = {
    infoMessagesList: Array<InfoMessage.AsObject>,
  }
}

export class InfoMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): InfoMessage.Type;
  setType(value: InfoMessage.Type): void;

  getDelayBeforeDisplay(): google_protobuf_duration_pb.Duration | undefined;
  setDelayBeforeDisplay(value?: google_protobuf_duration_pb.Duration): void;
  hasDelayBeforeDisplay(): boolean;
  clearDelayBeforeDisplay(): void;

  getColor(): string;
  setColor(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getRoutesList(): Array<InfoMessage.Route>;
  setRoutesList(value: Array<InfoMessage.Route>): void;
  clearRoutesList(): void;
  addRoutes(value: InfoMessage.Route, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InfoMessage): InfoMessage.AsObject;
  static serializeBinaryToWriter(message: InfoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoMessage;
  static deserializeBinaryFromReader(message: InfoMessage, reader: jspb.BinaryReader): InfoMessage;
}

export namespace InfoMessage {
  export type AsObject = {
    id: number,
    type: InfoMessage.Type,
    delayBeforeDisplay?: google_protobuf_duration_pb.Duration.AsObject,
    color: string,
    title: string,
    body: string,
    icon: string,
    routesList: Array<InfoMessage.Route>,
  }

  export enum Type { 
    INFO = 0,
    WARNING = 1,
  }

  export enum Route { 
    HOME = 0,
    VIDEO = 1,
    CALL = 2,
    VIDEO_CALL = 3,
    MY_CREATION = 4,
    MY_ACCOUNT = 5,
    PLAYER = 6,
    KID = 7,
  }
}

