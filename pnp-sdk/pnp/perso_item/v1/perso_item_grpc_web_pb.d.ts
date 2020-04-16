import * as grpcWeb from 'grpc-web';

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pnp_phone_call_v1_phone_call_pb from '../../../pnp/phone_call/v1/phone_call_pb';

import {
  CreatePersoItemRequest,
  CreateReactionRequest,
  DeletePersoItemRequest,
  FlattenPersoItemRequest,
  FlattenPersoItemResponse,
  GetEmailTemplatesRequest,
  GetEmailTemplatesResponse,
  GetPersoDataRequest,
  GetPersoDataResponse,
  GetPersoItemRequest,
  IncrementViewRequest,
  ListPersoItemsRequest,
  ListPersoItemsResponse,
  PersoItem,
  SendEmailRequest,
  SharedItemRequest,
  SharedItemResponse,
  ToggleKidSectionRequest,
  ToggleKidSectionResponse,
  UpdatePersoDataRequest} from './perso_item_pb';

export class PersoItemServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listPersoItems(
    request: ListPersoItemsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListPersoItemsResponse) => void
  ): grpcWeb.ClientReadableStream<ListPersoItemsResponse>;

  getPersoItem(
    request: GetPersoItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PersoItem) => void
  ): grpcWeb.ClientReadableStream<PersoItem>;

  getPersoData(
    request: GetPersoDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetPersoDataResponse) => void
  ): grpcWeb.ClientReadableStream<GetPersoDataResponse>;

  createPersoItem(
    request: CreatePersoItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PersoItem) => void
  ): grpcWeb.ClientReadableStream<PersoItem>;

  updatePersoData(
    request: UpdatePersoDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PersoItem) => void
  ): grpcWeb.ClientReadableStream<PersoItem>;

  deletePersoItem(
    request: DeletePersoItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  incrementView(
    request: IncrementViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  toggleKidSection(
    request: ToggleKidSectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ToggleKidSectionResponse) => void
  ): grpcWeb.ClientReadableStream<ToggleKidSectionResponse>;

  flattenPersoItem(
    request: FlattenPersoItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FlattenPersoItemResponse) => void
  ): grpcWeb.ClientReadableStream<FlattenPersoItemResponse>;

  createReaction(
    request: CreateReactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PersoItem) => void
  ): grpcWeb.ClientReadableStream<PersoItem>;

  getEmailTemplates(
    request: GetEmailTemplatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetEmailTemplatesResponse) => void
  ): grpcWeb.ClientReadableStream<GetEmailTemplatesResponse>;

  sendEmail(
    request: SendEmailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getSharedItem(
    request: SharedItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SharedItemResponse) => void
  ): grpcWeb.ClientReadableStream<SharedItemResponse>;

  flattenSharedItem(
    request: SharedItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SharedItemResponse) => void
  ): grpcWeb.ClientReadableStream<SharedItemResponse>;

}

export class PersoItemServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listPersoItems(
    request: ListPersoItemsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListPersoItemsResponse>;

  getPersoItem(
    request: GetPersoItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PersoItem>;

  getPersoData(
    request: GetPersoDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetPersoDataResponse>;

  createPersoItem(
    request: CreatePersoItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PersoItem>;

  updatePersoData(
    request: UpdatePersoDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PersoItem>;

  deletePersoItem(
    request: DeletePersoItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  incrementView(
    request: IncrementViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  toggleKidSection(
    request: ToggleKidSectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ToggleKidSectionResponse>;

  flattenPersoItem(
    request: FlattenPersoItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FlattenPersoItemResponse>;

  createReaction(
    request: CreateReactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PersoItem>;

  getEmailTemplates(
    request: GetEmailTemplatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetEmailTemplatesResponse>;

  sendEmail(
    request: SendEmailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getSharedItem(
    request: SharedItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SharedItemResponse>;

  flattenSharedItem(
    request: SharedItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SharedItemResponse>;

}

