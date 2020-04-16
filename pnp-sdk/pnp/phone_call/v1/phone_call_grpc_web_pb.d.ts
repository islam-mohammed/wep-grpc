import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreatePhoneCallRequest,
  DeletePhoneCallRequest,
  GetPhoneCallRequest,
  ListPhoneCallsRequest,
  ListPhoneCallsResponse,
  PhoneCall,
  UpdatePhoneCallRequest,
  VerifyPhoneNumberRequest,
  VerifyPhoneNumberResponse} from './phone_call_pb';

export class PhoneCallServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listPhoneCalls(
    request: ListPhoneCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListPhoneCallsResponse) => void
  ): grpcWeb.ClientReadableStream<ListPhoneCallsResponse>;

  getPhoneCall(
    request: GetPhoneCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PhoneCall) => void
  ): grpcWeb.ClientReadableStream<PhoneCall>;

  createPhoneCall(
    request: CreatePhoneCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PhoneCall) => void
  ): grpcWeb.ClientReadableStream<PhoneCall>;

  updatePhoneCall(
    request: UpdatePhoneCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PhoneCall) => void
  ): grpcWeb.ClientReadableStream<PhoneCall>;

  deletePhoneCall(
    request: DeletePhoneCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  verifyPhoneNumber(
    request: VerifyPhoneNumberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: VerifyPhoneNumberResponse) => void
  ): grpcWeb.ClientReadableStream<VerifyPhoneNumberResponse>;

}

export class PhoneCallServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listPhoneCalls(
    request: ListPhoneCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListPhoneCallsResponse>;

  getPhoneCall(
    request: GetPhoneCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PhoneCall>;

  createPhoneCall(
    request: CreatePhoneCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PhoneCall>;

  updatePhoneCall(
    request: UpdatePhoneCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PhoneCall>;

  deletePhoneCall(
    request: DeletePhoneCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  verifyPhoneNumber(
    request: VerifyPhoneNumberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<VerifyPhoneNumberResponse>;

}

