import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pnp_phone_call_v1_phone_call_pb from '../../../pnp/phone_call/v1/phone_call_pb';

export class ListPersoItemsRequest extends jspb.Message {
  getTypesList(): Array<PersoItem.Type>;
  setTypesList(value: Array<PersoItem.Type>): void;
  clearTypesList(): void;
  addTypes(value: PersoItem.Type, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPersoItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPersoItemsRequest): ListPersoItemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPersoItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPersoItemsRequest;
  static deserializeBinaryFromReader(message: ListPersoItemsRequest, reader: jspb.BinaryReader): ListPersoItemsRequest;
}

export namespace ListPersoItemsRequest {
  export type AsObject = {
    typesList: Array<PersoItem.Type>,
  }
}

export class ListPersoItemsResponse extends jspb.Message {
  getPersoItemsList(): Array<PersoItem>;
  setPersoItemsList(value: Array<PersoItem>): void;
  clearPersoItemsList(): void;
  addPersoItems(value?: PersoItem, index?: number): PersoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPersoItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPersoItemsResponse): ListPersoItemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPersoItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPersoItemsResponse;
  static deserializeBinaryFromReader(message: ListPersoItemsResponse, reader: jspb.BinaryReader): ListPersoItemsResponse;
}

export namespace ListPersoItemsResponse {
  export type AsObject = {
    persoItemsList: Array<PersoItem.AsObject>,
  }
}

export class GetPersoItemRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPersoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPersoItemRequest): GetPersoItemRequest.AsObject;
  static serializeBinaryToWriter(message: GetPersoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPersoItemRequest;
  static deserializeBinaryFromReader(message: GetPersoItemRequest, reader: jspb.BinaryReader): GetPersoItemRequest;
}

export namespace GetPersoItemRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetPersoDataRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPersoDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPersoDataRequest): GetPersoDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetPersoDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPersoDataRequest;
  static deserializeBinaryFromReader(message: GetPersoDataRequest, reader: jspb.BinaryReader): GetPersoDataRequest;
}

export namespace GetPersoDataRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetPersoDataResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPersoDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPersoDataResponse): GetPersoDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetPersoDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPersoDataResponse;
  static deserializeBinaryFromReader(message: GetPersoDataResponse, reader: jspb.BinaryReader): GetPersoDataResponse;
}

export namespace GetPersoDataResponse {
  export type AsObject = {
    id: number,
    dataMap: Array<[string, string]>,
  }
}

export class CreatePersoItemRequest extends jspb.Message {
  getScenarioId(): number;
  setScenarioId(value: number): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePersoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePersoItemRequest): CreatePersoItemRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePersoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePersoItemRequest;
  static deserializeBinaryFromReader(message: CreatePersoItemRequest, reader: jspb.BinaryReader): CreatePersoItemRequest;
}

export namespace CreatePersoItemRequest {
  export type AsObject = {
    scenarioId: number,
    dataMap: Array<[string, string]>,
  }
}

export class UpdatePersoDataRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePersoDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePersoDataRequest): UpdatePersoDataRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePersoDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePersoDataRequest;
  static deserializeBinaryFromReader(message: UpdatePersoDataRequest, reader: jspb.BinaryReader): UpdatePersoDataRequest;
}

export namespace UpdatePersoDataRequest {
  export type AsObject = {
    id: number,
    dataMap: Array<[string, string]>,
  }
}

export class DeletePersoItemRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePersoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePersoItemRequest): DeletePersoItemRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePersoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePersoItemRequest;
  static deserializeBinaryFromReader(message: DeletePersoItemRequest, reader: jspb.BinaryReader): DeletePersoItemRequest;
}

export namespace DeletePersoItemRequest {
  export type AsObject = {
    id: number,
  }
}

export class IncrementViewRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncrementViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IncrementViewRequest): IncrementViewRequest.AsObject;
  static serializeBinaryToWriter(message: IncrementViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncrementViewRequest;
  static deserializeBinaryFromReader(message: IncrementViewRequest, reader: jspb.BinaryReader): IncrementViewRequest;
}

export namespace IncrementViewRequest {
  export type AsObject = {
    id: number,
  }
}

export class ToggleKidSectionRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getShowKidSection(): boolean;
  setShowKidSection(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleKidSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleKidSectionRequest): ToggleKidSectionRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleKidSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleKidSectionRequest;
  static deserializeBinaryFromReader(message: ToggleKidSectionRequest, reader: jspb.BinaryReader): ToggleKidSectionRequest;
}

export namespace ToggleKidSectionRequest {
  export type AsObject = {
    id: number,
    showKidSection: boolean,
  }
}

export class ToggleKidSectionResponse extends jspb.Message {
  getShowKidSection(): boolean;
  setShowKidSection(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleKidSectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleKidSectionResponse): ToggleKidSectionResponse.AsObject;
  static serializeBinaryToWriter(message: ToggleKidSectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleKidSectionResponse;
  static deserializeBinaryFromReader(message: ToggleKidSectionResponse, reader: jspb.BinaryReader): ToggleKidSectionResponse;
}

export namespace ToggleKidSectionResponse {
  export type AsObject = {
    showKidSection: boolean,
  }
}

export class FlattenPersoItemRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): FlatteningType;
  setType(value: FlatteningType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlattenPersoItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlattenPersoItemRequest): FlattenPersoItemRequest.AsObject;
  static serializeBinaryToWriter(message: FlattenPersoItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlattenPersoItemRequest;
  static deserializeBinaryFromReader(message: FlattenPersoItemRequest, reader: jspb.BinaryReader): FlattenPersoItemRequest;
}

export namespace FlattenPersoItemRequest {
  export type AsObject = {
    id: number,
    type: FlatteningType,
  }
}

export class FlattenPersoItemResponse extends jspb.Message {
  getPersoItemId(): string;
  setPersoItemId(value: string): void;

  getType(): FlatteningType;
  setType(value: FlatteningType): void;

  getFlattening(): Flattening | undefined;
  setFlattening(value?: Flattening): void;
  hasFlattening(): boolean;
  clearFlattening(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlattenPersoItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FlattenPersoItemResponse): FlattenPersoItemResponse.AsObject;
  static serializeBinaryToWriter(message: FlattenPersoItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlattenPersoItemResponse;
  static deserializeBinaryFromReader(message: FlattenPersoItemResponse, reader: jspb.BinaryReader): FlattenPersoItemResponse;
}

export namespace FlattenPersoItemResponse {
  export type AsObject = {
    persoItemId: string,
    type: FlatteningType,
    flattening?: Flattening.AsObject,
  }
}

export class CreateReactionRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getReactionFileId(): number;
  setReactionFileId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReactionRequest): CreateReactionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReactionRequest;
  static deserializeBinaryFromReader(message: CreateReactionRequest, reader: jspb.BinaryReader): CreateReactionRequest;
}

export namespace CreateReactionRequest {
  export type AsObject = {
    id: number,
    reactionFileId: number,
  }
}

export class PersoItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFormId(): number;
  setFormId(value: number): void;

  getType(): PersoItem.Type;
  setType(value: PersoItem.Type): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getArchivedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setArchivedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasArchivedAt(): boolean;
  clearArchivedAt(): void;

  getCanUse(): boolean;
  setCanUse(value: boolean): void;

  getCanEdit(): boolean;
  setCanEdit(value: boolean): void;

  getCanDelete(): boolean;
  setCanDelete(value: boolean): void;

  getTitle(): string;
  setTitle(value: string): void;

  getSubtitle(): string;
  setSubtitle(value: string): void;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): void;

  getStreamingFlattening(): Flattening | undefined;
  setStreamingFlattening(value?: Flattening): void;
  hasStreamingFlattening(): boolean;
  clearStreamingFlattening(): void;

  getAudioCall(): PersoItem.AudioCall | undefined;
  setAudioCall(value?: PersoItem.AudioCall): void;
  hasAudioCall(): boolean;
  clearAudioCall(): void;

  getEvent(): PersoItem.Event | undefined;
  setEvent(value?: PersoItem.Event): void;
  hasEvent(): boolean;
  clearEvent(): void;

  getVideo(): PersoItem.Video | undefined;
  setVideo(value?: PersoItem.Video): void;
  hasVideo(): boolean;
  clearVideo(): void;

  getVideoCall(): PersoItem.VideoCall | undefined;
  setVideoCall(value?: PersoItem.VideoCall): void;
  hasVideoCall(): boolean;
  clearVideoCall(): void;

  getPayloadCase(): PersoItem.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersoItem.AsObject;
  static toObject(includeInstance: boolean, msg: PersoItem): PersoItem.AsObject;
  static serializeBinaryToWriter(message: PersoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersoItem;
  static deserializeBinaryFromReader(message: PersoItem, reader: jspb.BinaryReader): PersoItem;
}

export namespace PersoItem {
  export type AsObject = {
    id: number,
    formId: number,
    type: PersoItem.Type,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    archivedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    canUse: boolean,
    canEdit: boolean,
    canDelete: boolean,
    title: string,
    subtitle: string,
    thumbnailUrl: string,
    streamingFlattening?: Flattening.AsObject,
    audioCall?: PersoItem.AudioCall.AsObject,
    event?: PersoItem.Event.AsObject,
    video?: PersoItem.Video.AsObject,
    videoCall?: PersoItem.VideoCall.AsObject,
  }

  export class AudioCall extends jspb.Message {
    getAttemptCount(): number;
    setAttemptCount(value: number): void;

    getLatestPhoneNumber(): pnp_phone_call_v1_phone_call_pb.PhoneNumber | undefined;
    setLatestPhoneNumber(value?: pnp_phone_call_v1_phone_call_pb.PhoneNumber): void;
    hasLatestPhoneNumber(): boolean;
    clearLatestPhoneNumber(): void;

    getPhoneCallsList(): Array<pnp_phone_call_v1_phone_call_pb.PhoneCall>;
    setPhoneCallsList(value: Array<pnp_phone_call_v1_phone_call_pb.PhoneCall>): void;
    clearPhoneCallsList(): void;
    addPhoneCalls(value?: pnp_phone_call_v1_phone_call_pb.PhoneCall, index?: number): pnp_phone_call_v1_phone_call_pb.PhoneCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioCall.AsObject;
    static toObject(includeInstance: boolean, msg: AudioCall): AudioCall.AsObject;
    static serializeBinaryToWriter(message: AudioCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioCall;
    static deserializeBinaryFromReader(message: AudioCall, reader: jspb.BinaryReader): AudioCall;
  }

  export namespace AudioCall {
    export type AsObject = {
      attemptCount: number,
      latestPhoneNumber?: pnp_phone_call_v1_phone_call_pb.PhoneNumber.AsObject,
      phoneCallsList: Array<pnp_phone_call_v1_phone_call_pb.PhoneCall.AsObject>,
    }
  }


  export class Event extends jspb.Message {
    getConfig(): PersoItem.Event.Config | undefined;
    setConfig(value?: PersoItem.Event.Config): void;
    hasConfig(): boolean;
    clearConfig(): void;

    getLatestPhoneNumber(): pnp_phone_call_v1_phone_call_pb.PhoneNumber | undefined;
    setLatestPhoneNumber(value?: pnp_phone_call_v1_phone_call_pb.PhoneNumber): void;
    hasLatestPhoneNumber(): boolean;
    clearLatestPhoneNumber(): void;

    getPhoneCallsList(): Array<pnp_phone_call_v1_phone_call_pb.PhoneCall>;
    setPhoneCallsList(value: Array<pnp_phone_call_v1_phone_call_pb.PhoneCall>): void;
    clearPhoneCallsList(): void;
    addPhoneCalls(value?: pnp_phone_call_v1_phone_call_pb.PhoneCall, index?: number): pnp_phone_call_v1_phone_call_pb.PhoneCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
  }

  export namespace Event {
    export type AsObject = {
      config?: PersoItem.Event.Config.AsObject,
      latestPhoneNumber?: pnp_phone_call_v1_phone_call_pb.PhoneNumber.AsObject,
      phoneCallsList: Array<pnp_phone_call_v1_phone_call_pb.PhoneCall.AsObject>,
    }

    export class Config extends jspb.Message {
      getMainAction(): string;
      setMainAction(value: string): void;

      getActionsMap(): jspb.Map<string, PersoItem.Event.Config.Action>;
      clearActionsMap(): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        mainAction: string,
        actionsMap: Array<[string, PersoItem.Event.Config.Action.AsObject]>,
      }

      export class Action extends jspb.Message {
        getType(): PersoItem.Event.Config.Action.Type;
        setType(value: PersoItem.Event.Config.Action.Type): void;

        getListener(): PersoItem.Event.Config.Action.Listener | undefined;
        setListener(value?: PersoItem.Event.Config.Action.Listener): void;
        hasListener(): boolean;
        clearListener(): void;

        getTriggersList(): Array<PersoItem.Event.Config.Action.Trigger>;
        setTriggersList(value: Array<PersoItem.Event.Config.Action.Trigger>): void;
        clearTriggersList(): void;
        addTriggers(value?: PersoItem.Event.Config.Action.Trigger, index?: number): PersoItem.Event.Config.Action.Trigger;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Action.AsObject;
        static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
        static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Action;
        static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
      }

      export namespace Action {
        export type AsObject = {
          type: PersoItem.Event.Config.Action.Type,
          listener?: PersoItem.Event.Config.Action.Listener.AsObject,
          triggersList: Array<PersoItem.Event.Config.Action.Trigger.AsObject>,
        }

        export class Listener extends jspb.Message {
          getErrorThreshold(): google_protobuf_duration_pb.Duration | undefined;
          setErrorThreshold(value?: google_protobuf_duration_pb.Duration): void;
          hasErrorThreshold(): boolean;
          clearErrorThreshold(): void;

          getErrorAction(): string;
          setErrorAction(value: string): void;

          getSuccessAction(): string;
          setSuccessAction(value: string): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Listener.AsObject;
          static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
          static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Listener;
          static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
        }

        export namespace Listener {
          export type AsObject = {
            errorThreshold?: google_protobuf_duration_pb.Duration.AsObject,
            errorAction: string,
            successAction: string,
          }
        }


        export class Trigger extends jspb.Message {
          getType(): PersoItem.Event.Config.Action.Trigger.Type;
          setType(value: PersoItem.Event.Config.Action.Trigger.Type): void;

          getAction(): string;
          setAction(value: string): void;

          getTimer(): google_protobuf_duration_pb.Duration | undefined;
          setTimer(value?: google_protobuf_duration_pb.Duration): void;
          hasTimer(): boolean;
          clearTimer(): void;

          getValueCase(): Trigger.ValueCase;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Trigger.AsObject;
          static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
          static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Trigger;
          static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
        }

        export namespace Trigger {
          export type AsObject = {
            type: PersoItem.Event.Config.Action.Trigger.Type,
            action: string,
            timer?: google_protobuf_duration_pb.Duration.AsObject,
          }

          export enum Type { 
            TIMER = 0,
          }

          export enum ValueCase { 
            VALUE_NOT_SET = 0,
            TIMER = 16,
          }
        }


        export enum Type { 
          PLAY = 0,
          CALL = 1,
        }
      }

    }

  }


  export class Video extends jspb.Message {
    getCanDownload(): boolean;
    setCanDownload(value: boolean): void;

    getCanShare(): boolean;
    setCanShare(value: boolean): void;

    getCanRecordReaction(): boolean;
    setCanRecordReaction(value: boolean): void;

    getShowKidSection(): boolean;
    setShowKidSection(value: boolean): void;

    getPlayToken(): string;
    setPlayToken(value: string): void;

    getDownloadFlattening(): Flattening | undefined;
    setDownloadFlattening(value?: Flattening): void;
    hasDownloadFlattening(): boolean;
    clearDownloadFlattening(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Video.AsObject;
    static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
    static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Video;
    static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
  }

  export namespace Video {
    export type AsObject = {
      canDownload: boolean,
      canShare: boolean,
      canRecordReaction: boolean,
      showKidSection: boolean,
      playToken: string,
      downloadFlattening?: Flattening.AsObject,
    }
  }


  export class VideoCall extends jspb.Message {
    getCanRecordReaction(): boolean;
    setCanRecordReaction(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoCall.AsObject;
    static toObject(includeInstance: boolean, msg: VideoCall): VideoCall.AsObject;
    static serializeBinaryToWriter(message: VideoCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoCall;
    static deserializeBinaryFromReader(message: VideoCall, reader: jspb.BinaryReader): VideoCall;
  }

  export namespace VideoCall {
    export type AsObject = {
      canRecordReaction: boolean,
    }
  }


  export enum Type { 
    VIDEO = 0,
    EVENT = 1,
    AUDIO_CALL = 2,
    VIDEO_CALL = 3,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    AUDIO_CALL = 64,
    EVENT = 65,
    VIDEO = 66,
    VIDEO_CALL = 67,
  }
}

export class Flattening extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatus(): Flattening.Status;
  setStatus(value: Flattening.Status): void;

  getAssetsMap(): jspb.Map<string, string>;
  clearAssetsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Flattening.AsObject;
  static toObject(includeInstance: boolean, msg: Flattening): Flattening.AsObject;
  static serializeBinaryToWriter(message: Flattening, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Flattening;
  static deserializeBinaryFromReader(message: Flattening, reader: jspb.BinaryReader): Flattening;
}

export namespace Flattening {
  export type AsObject = {
    id: number,
    status: Flattening.Status,
    assetsMap: Array<[string, string]>,
  }

  export enum Status { 
    IN_PROGRESS = 0,
    COMPLETED = 1,
    ERROR = 2,
  }
}

export class GetEmailTemplatesRequest extends jspb.Message {
  getPersoItemId(): number;
  setPersoItemId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailTemplatesRequest): GetEmailTemplatesRequest.AsObject;
  static serializeBinaryToWriter(message: GetEmailTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailTemplatesRequest;
  static deserializeBinaryFromReader(message: GetEmailTemplatesRequest, reader: jspb.BinaryReader): GetEmailTemplatesRequest;
}

export namespace GetEmailTemplatesRequest {
  export type AsObject = {
    persoItemId: number,
  }
}

export class GetEmailTemplatesResponse extends jspb.Message {
  getRecipientTemplate(): string;
  setRecipientTemplate(value: string): void;

  getOtherEmailTemplate(): string;
  setOtherEmailTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailTemplatesResponse): GetEmailTemplatesResponse.AsObject;
  static serializeBinaryToWriter(message: GetEmailTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailTemplatesResponse;
  static deserializeBinaryFromReader(message: GetEmailTemplatesResponse, reader: jspb.BinaryReader): GetEmailTemplatesResponse;
}

export namespace GetEmailTemplatesResponse {
  export type AsObject = {
    recipientTemplate: string,
    otherEmailTemplate: string,
  }
}

export class SendEmailRequest extends jspb.Message {
  getType(): SendEmailRequest.Type;
  setType(value: SendEmailRequest.Type): void;

  getPersoItemId(): number;
  setPersoItemId(value: number): void;

  getEmailsList(): Array<SendEmailRequest.Email>;
  setEmailsList(value: Array<SendEmailRequest.Email>): void;
  clearEmailsList(): void;
  addEmails(value?: SendEmailRequest.Email, index?: number): SendEmailRequest.Email;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendEmailRequest): SendEmailRequest.AsObject;
  static serializeBinaryToWriter(message: SendEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEmailRequest;
  static deserializeBinaryFromReader(message: SendEmailRequest, reader: jspb.BinaryReader): SendEmailRequest;
}

export namespace SendEmailRequest {
  export type AsObject = {
    type: SendEmailRequest.Type,
    persoItemId: number,
    emailsList: Array<SendEmailRequest.Email.AsObject>,
  }

  export class Email extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Email.AsObject;
    static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
    static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Email;
    static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
  }

  export namespace Email {
    export type AsObject = {
      email: string,
      firstName: string,
    }
  }


  export enum Type { 
    RECIPIENT = 0,
    OTHER_EMAIL = 1,
  }
}

export class SharedItemRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SharedItemRequest): SharedItemRequest.AsObject;
  static serializeBinaryToWriter(message: SharedItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedItemRequest;
  static deserializeBinaryFromReader(message: SharedItemRequest, reader: jspb.BinaryReader): SharedItemRequest;
}

export namespace SharedItemRequest {
  export type AsObject = {
    token: string,
  }
}

export class SharedItemResponse extends jspb.Message {
  getPersoItemId(): number;
  setPersoItemId(value: number): void;

  getFlattening(): Flattening | undefined;
  setFlattening(value?: Flattening): void;
  hasFlattening(): boolean;
  clearFlattening(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SharedItemResponse): SharedItemResponse.AsObject;
  static serializeBinaryToWriter(message: SharedItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedItemResponse;
  static deserializeBinaryFromReader(message: SharedItemResponse, reader: jspb.BinaryReader): SharedItemResponse;
}

export namespace SharedItemResponse {
  export type AsObject = {
    persoItemId: number,
    flattening?: Flattening.AsObject,
  }
}

export enum FlatteningType { 
  STREAMING = 0,
  DOWNLOAD = 1,
}
