import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class ListSectionsResponse extends jspb.Message {
  getSectionsList(): Array<Section>;
  setSectionsList(value: Array<Section>): void;
  clearSectionsList(): void;
  addSections(value?: Section, index?: number): Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectionsResponse): ListSectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectionsResponse;
  static deserializeBinaryFromReader(message: ListSectionsResponse, reader: jspb.BinaryReader): ListSectionsResponse;
}

export namespace ListSectionsResponse {
  export type AsObject = {
    sectionsList: Array<Section.AsObject>,
  }
}

export class Section extends jspb.Message {
  getFolderId(): number;
  setFolderId(value: number): void;

  getLabel(): string;
  setLabel(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getBgColor(): string;
  setBgColor(value: string): void;

  getFgColor(): string;
  setFgColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Section.AsObject;
  static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
  static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Section;
  static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
}

export namespace Section {
  export type AsObject = {
    folderId: number,
    label: string,
    icon: string,
    bgColor: string,
    fgColor: string,
  }
}

export class GetFolderDetailsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFolderDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFolderDetailsRequest): GetFolderDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetFolderDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFolderDetailsRequest;
  static deserializeBinaryFromReader(message: GetFolderDetailsRequest, reader: jspb.BinaryReader): GetFolderDetailsRequest;
}

export namespace GetFolderDetailsRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetVideoDetailsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVideoDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVideoDetailsRequest): GetVideoDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetVideoDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVideoDetailsRequest;
  static deserializeBinaryFromReader(message: GetVideoDetailsRequest, reader: jspb.BinaryReader): GetVideoDetailsRequest;
}

export namespace GetVideoDetailsRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListProductsResponse extends jspb.Message {
  getProductDetailsList(): Array<ProductDetails>;
  setProductDetailsList(value: Array<ProductDetails>): void;
  clearProductDetailsList(): void;
  addProductDetails(value?: ProductDetails, index?: number): ProductDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsResponse): ListProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsResponse;
  static deserializeBinaryFromReader(message: ListProductsResponse, reader: jspb.BinaryReader): ListProductsResponse;
}

export namespace ListProductsResponse {
  export type AsObject = {
    productDetailsList: Array<ProductDetails.AsObject>,
  }
}

export class FolderDetails extends jspb.Message {
  getPurchaseCodes(): PurchaseCodes | undefined;
  setPurchaseCodes(value?: PurchaseCodes): void;
  hasPurchaseCodes(): boolean;
  clearPurchaseCodes(): void;

  getBanner(): FolderDetails.Banner | undefined;
  setBanner(value?: FolderDetails.Banner): void;
  hasBanner(): boolean;
  clearBanner(): void;

  getGroupsList(): Array<FolderDetails.Group>;
  setGroupsList(value: Array<FolderDetails.Group>): void;
  clearGroupsList(): void;
  addGroups(value?: FolderDetails.Group, index?: number): FolderDetails.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FolderDetails.AsObject;
  static toObject(includeInstance: boolean, msg: FolderDetails): FolderDetails.AsObject;
  static serializeBinaryToWriter(message: FolderDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FolderDetails;
  static deserializeBinaryFromReader(message: FolderDetails, reader: jspb.BinaryReader): FolderDetails;
}

export namespace FolderDetails {
  export type AsObject = {
    purchaseCodes?: PurchaseCodes.AsObject,
    banner?: FolderDetails.Banner.AsObject,
    groupsList: Array<FolderDetails.Group.AsObject>,
  }

  export class Banner extends jspb.Message {
    getBackgroundUrl(): string;
    setBackgroundUrl(value: string): void;

    getSpriteUrl(): string;
    setSpriteUrl(value: string): void;

    getVideoUrl(): string;
    setVideoUrl(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Banner.AsObject;
    static toObject(includeInstance: boolean, msg: Banner): Banner.AsObject;
    static serializeBinaryToWriter(message: Banner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Banner;
    static deserializeBinaryFromReader(message: Banner, reader: jspb.BinaryReader): Banner;
  }

  export namespace Banner {
    export type AsObject = {
      backgroundUrl: string,
      spriteUrl: string,
      videoUrl: string,
      message: string,
    }
  }


  export class Group extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    getImage(): string;
    setImage(value: string): void;

    getCardsList(): Array<Card>;
    setCardsList(value: Array<Card>): void;
    clearCardsList(): void;
    addCards(value?: Card, index?: number): Card;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      label: string,
      image: string,
      cardsList: Array<Card.AsObject>,
    }
  }

}

export class Card extends jspb.Message {
  getType(): Card.Type;
  setType(value: Card.Type): void;

  getCardAction(): Card.Action;
  setCardAction(value: Card.Action): void;

  getButtonAction(): Card.Action;
  setButtonAction(value: Card.Action): void;

  getFolder(): Card.Folder | undefined;
  setFolder(value?: Card.Folder): void;
  hasFolder(): boolean;
  clearFolder(): void;

  getVideo(): Card.Video | undefined;
  setVideo(value?: Card.Video): void;
  hasVideo(): boolean;
  clearVideo(): void;

  getCall(): Card.Call | undefined;
  setCall(value?: Card.Call): void;
  hasCall(): boolean;
  clearCall(): void;

  getCardCase(): Card.CardCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    type: Card.Type,
    cardAction: Card.Action,
    buttonAction: Card.Action,
    folder?: Card.Folder.AsObject,
    video?: Card.Video.AsObject,
    call?: Card.Call.AsObject,
  }

  export class Folder extends jspb.Message {
    getFolderId(): number;
    setFolderId(value: number): void;

    getImageUrl(): string;
    setImageUrl(value: string): void;

    getIconUrl(): string;
    setIconUrl(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getSubtitle(): string;
    setSubtitle(value: string): void;

    getBlocker(): Card.Blocker | undefined;
    setBlocker(value?: Card.Blocker): void;
    hasBlocker(): boolean;
    clearBlocker(): void;

    getChip(): Chip | undefined;
    setChip(value?: Chip): void;
    hasChip(): boolean;
    clearChip(): void;

    getPurchaseInfo(): PurchaseInfo | undefined;
    setPurchaseInfo(value?: PurchaseInfo): void;
    hasPurchaseInfo(): boolean;
    clearPurchaseInfo(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Folder.AsObject;
    static toObject(includeInstance: boolean, msg: Folder): Folder.AsObject;
    static serializeBinaryToWriter(message: Folder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Folder;
    static deserializeBinaryFromReader(message: Folder, reader: jspb.BinaryReader): Folder;
  }

  export namespace Folder {
    export type AsObject = {
      folderId: number,
      imageUrl: string,
      iconUrl: string,
      title: string,
      subtitle: string,
      blocker?: Card.Blocker.AsObject,
      chip?: Chip.AsObject,
      purchaseInfo?: PurchaseInfo.AsObject,
    }
  }


  export class Video extends jspb.Message {
    getFormId(): number;
    setFormId(value: number): void;

    getScenarioId(): number;
    setScenarioId(value: number): void;

    getImageUrl(): string;
    setImageUrl(value: string): void;

    getIconUrl(): string;
    setIconUrl(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getSubtitle(): string;
    setSubtitle(value: string): void;

    getBlocker(): Card.Blocker | undefined;
    setBlocker(value?: Card.Blocker): void;
    hasBlocker(): boolean;
    clearBlocker(): void;

    getChip(): Chip | undefined;
    setChip(value?: Chip): void;
    hasChip(): boolean;
    clearChip(): void;

    getPurchaseInfo(): PurchaseInfo | undefined;
    setPurchaseInfo(value?: PurchaseInfo): void;
    hasPurchaseInfo(): boolean;
    clearPurchaseInfo(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Video.AsObject;
    static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
    static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Video;
    static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
  }

  export namespace Video {
    export type AsObject = {
      formId: number,
      scenarioId: number,
      imageUrl: string,
      iconUrl: string,
      title: string,
      subtitle: string,
      blocker?: Card.Blocker.AsObject,
      chip?: Chip.AsObject,
      purchaseInfo?: PurchaseInfo.AsObject,
    }
  }


  export class Call extends jspb.Message {
    getFormId(): number;
    setFormId(value: number): void;

    getScenarioId(): number;
    setScenarioId(value: number): void;

    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): void;
    hasDuration(): boolean;
    clearDuration(): void;

    getTitle(): string;
    setTitle(value: string): void;

    getPreviewUrl(): string;
    setPreviewUrl(value: string): void;

    getChip(): Chip | undefined;
    setChip(value?: Chip): void;
    hasChip(): boolean;
    clearChip(): void;

    getPurchaseInfo(): PurchaseInfo | undefined;
    setPurchaseInfo(value?: PurchaseInfo): void;
    hasPurchaseInfo(): boolean;
    clearPurchaseInfo(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Call.AsObject;
    static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
    static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Call;
    static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
  }

  export namespace Call {
    export type AsObject = {
      formId: number,
      scenarioId: number,
      duration?: google_protobuf_duration_pb.Duration.AsObject,
      title: string,
      previewUrl: string,
      chip?: Chip.AsObject,
      purchaseInfo?: PurchaseInfo.AsObject,
    }
  }


  export class Blocker extends jspb.Message {
    getIconUrl(): string;
    setIconUrl(value: string): void;

    getLabel(): string;
    setLabel(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blocker.AsObject;
    static toObject(includeInstance: boolean, msg: Blocker): Blocker.AsObject;
    static serializeBinaryToWriter(message: Blocker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blocker;
    static deserializeBinaryFromReader(message: Blocker, reader: jspb.BinaryReader): Blocker;
  }

  export namespace Blocker {
    export type AsObject = {
      iconUrl: string,
      label: string,
    }
  }


  export enum Type { 
    FOLDER = 0,
    VIDEO = 1,
    CALL = 2,
  }

  export enum Action { 
    NONE = 0,
    FORM = 1,
    CAPTURE_EMAIL = 2,
    BUY_DIRECT = 3,
    PRODUCT_DETAILS = 4,
    VIDEO_DETAILS = 5,
    FOLDER_DETAILS = 6,
  }

  export enum CardCase { 
    CARD_NOT_SET = 0,
    FOLDER = 8,
    VIDEO = 9,
    CALL = 10,
  }
}

export class VideoDetails extends jspb.Message {
  getFormId(): number;
  setFormId(value: number): void;

  getScenarioId(): number;
  setScenarioId(value: number): void;

  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasDuration(): boolean;
  clearDuration(): void;

  getTitle(): string;
  setTitle(value: string): void;

  getPosterUrl(): string;
  setPosterUrl(value: string): void;

  getPreviewUrl(): string;
  setPreviewUrl(value: string): void;

  getShortDescription(): string;
  setShortDescription(value: string): void;

  getLongDescription(): string;
  setLongDescription(value: string): void;

  getPurchaseInfo(): PurchaseInfo | undefined;
  setPurchaseInfo(value?: PurchaseInfo): void;
  hasPurchaseInfo(): boolean;
  clearPurchaseInfo(): void;

  getPersoDescriptionsList(): Array<VideoDetails.PersoDescription>;
  setPersoDescriptionsList(value: Array<VideoDetails.PersoDescription>): void;
  clearPersoDescriptionsList(): void;
  addPersoDescriptions(value?: VideoDetails.PersoDescription, index?: number): VideoDetails.PersoDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoDetails.AsObject;
  static toObject(includeInstance: boolean, msg: VideoDetails): VideoDetails.AsObject;
  static serializeBinaryToWriter(message: VideoDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoDetails;
  static deserializeBinaryFromReader(message: VideoDetails, reader: jspb.BinaryReader): VideoDetails;
}

export namespace VideoDetails {
  export type AsObject = {
    formId: number,
    scenarioId: number,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    title: string,
    posterUrl: string,
    previewUrl: string,
    shortDescription: string,
    longDescription: string,
    purchaseInfo?: PurchaseInfo.AsObject,
    persoDescriptionsList: Array<VideoDetails.PersoDescription.AsObject>,
  }

  export class PersoDescription extends jspb.Message {
    getIcon(): string;
    setIcon(value: string): void;

    getLabel(): string;
    setLabel(value: string): void;

    getPictureCount(): number;
    setPictureCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersoDescription.AsObject;
    static toObject(includeInstance: boolean, msg: PersoDescription): PersoDescription.AsObject;
    static serializeBinaryToWriter(message: PersoDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersoDescription;
    static deserializeBinaryFromReader(message: PersoDescription, reader: jspb.BinaryReader): PersoDescription;
  }

  export namespace PersoDescription {
    export type AsObject = {
      icon: string,
      label: string,
      pictureCount: number,
    }
  }

}

export class ProductDetails extends jspb.Message {
  getRecommended(): boolean;
  setRecommended(value: boolean): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDisplayPrice(): string;
  setDisplayPrice(value: string): void;

  getPurchaseCode(): PurchaseCodes | undefined;
  setPurchaseCode(value?: PurchaseCodes): void;
  hasPurchaseCode(): boolean;
  clearPurchaseCode(): void;

  getProductDescriptionsList(): Array<ProductDetails.ProductDescription>;
  setProductDescriptionsList(value: Array<ProductDetails.ProductDescription>): void;
  clearProductDescriptionsList(): void;
  addProductDescriptions(value?: ProductDetails.ProductDescription, index?: number): ProductDetails.ProductDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDetails): ProductDetails.AsObject;
  static serializeBinaryToWriter(message: ProductDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDetails;
  static deserializeBinaryFromReader(message: ProductDetails, reader: jspb.BinaryReader): ProductDetails;
}

export namespace ProductDetails {
  export type AsObject = {
    recommended: boolean,
    title: string,
    displayPrice: string,
    purchaseCode?: PurchaseCodes.AsObject,
    productDescriptionsList: Array<ProductDetails.ProductDescription.AsObject>,
  }

  export class ProductDescription extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    getTextColor(): string;
    setTextColor(value: string): void;

    getExtraText(): string;
    setExtraText(value: string): void;

    getIconLeading(): string;
    setIconLeading(value: string): void;

    getIconTrailing(): string;
    setIconTrailing(value: string): void;

    getChip(): Chip | undefined;
    setChip(value?: Chip): void;
    hasChip(): boolean;
    clearChip(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductDescription.AsObject;
    static toObject(includeInstance: boolean, msg: ProductDescription): ProductDescription.AsObject;
    static serializeBinaryToWriter(message: ProductDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductDescription;
    static deserializeBinaryFromReader(message: ProductDescription, reader: jspb.BinaryReader): ProductDescription;
  }

  export namespace ProductDescription {
    export type AsObject = {
      text: string,
      textColor: string,
      extraText: string,
      iconLeading: string,
      iconTrailing: string,
      chip?: Chip.AsObject,
    }
  }

}

export class Chip extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getTextColor(): string;
  setTextColor(value: string): void;

  getBgColor(): string;
  setBgColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chip.AsObject;
  static toObject(includeInstance: boolean, msg: Chip): Chip.AsObject;
  static serializeBinaryToWriter(message: Chip, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chip;
  static deserializeBinaryFromReader(message: Chip, reader: jspb.BinaryReader): Chip;
}

export namespace Chip {
  export type AsObject = {
    label: string,
    textColor: string,
    bgColor: string,
  }
}

export class PurchaseInfo extends jspb.Message {
  getDisplayPrice(): string;
  setDisplayPrice(value: string): void;

  getDirectCode(): PurchaseCodes | undefined;
  setDirectCode(value?: PurchaseCodes): void;
  hasDirectCode(): boolean;
  clearDirectCode(): void;

  getAllCodesList(): Array<PurchaseCodes>;
  setAllCodesList(value: Array<PurchaseCodes>): void;
  clearAllCodesList(): void;
  addAllCodes(value?: PurchaseCodes, index?: number): PurchaseCodes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseInfo): PurchaseInfo.AsObject;
  static serializeBinaryToWriter(message: PurchaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseInfo;
  static deserializeBinaryFromReader(message: PurchaseInfo, reader: jspb.BinaryReader): PurchaseInfo;
}

export namespace PurchaseInfo {
  export type AsObject = {
    displayPrice: string,
    directCode?: PurchaseCodes.AsObject,
    allCodesList: Array<PurchaseCodes.AsObject>,
  }
}

export class PurchaseCodes extends jspb.Message {
  getPnpCode(): string;
  setPnpCode(value: string): void;

  getGoogleCode(): string;
  setGoogleCode(value: string): void;

  getAppleCode(): string;
  setAppleCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseCodes.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseCodes): PurchaseCodes.AsObject;
  static serializeBinaryToWriter(message: PurchaseCodes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseCodes;
  static deserializeBinaryFromReader(message: PurchaseCodes, reader: jspb.BinaryReader): PurchaseCodes;
}

export namespace PurchaseCodes {
  export type AsObject = {
    pnpCode: string,
    googleCode: string,
    appleCode: string,
  }
}

