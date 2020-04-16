import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pnp_common_v1_locale_pb from '../../../pnp/common/v1/locale_pb';

import {
  CreateRecipientRequest,
  DeleteRecipientRequest,
  GetRecipientRequest,
  ListRecipientsResponse,
  Recipient,
  RecipientData,
  UpdateRecipientRequest} from './recipient_pb';

export class RecipientServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listRecipients(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListRecipientsResponse) => void
  ): grpcWeb.ClientReadableStream<ListRecipientsResponse>;

  getRecipient(
    request: GetRecipientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Recipient) => void
  ): grpcWeb.ClientReadableStream<Recipient>;

  getRecipientData(
    request: GetRecipientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: RecipientData) => void
  ): grpcWeb.ClientReadableStream<RecipientData>;

  createRecipient(
    request: CreateRecipientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Recipient) => void
  ): grpcWeb.ClientReadableStream<Recipient>;

  updateRecipient(
    request: UpdateRecipientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Recipient) => void
  ): grpcWeb.ClientReadableStream<Recipient>;

  deleteRecipient(
    request: DeleteRecipientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class RecipientServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listRecipients(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ListRecipientsResponse>;

  getRecipient(
    request: GetRecipientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Recipient>;

  getRecipientData(
    request: GetRecipientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<RecipientData>;

  createRecipient(
    request: CreateRecipientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Recipient>;

  updateRecipient(
    request: UpdateRecipientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Recipient>;

  deleteRecipient(
    request: DeleteRecipientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

