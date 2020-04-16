import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Config,
  GetConfigRequest} from './config_pb';

export class ConfigServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getConfig(
    request: GetConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Config) => void
  ): grpcWeb.ClientReadableStream<Config>;

}

export class ConfigServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getConfig(
    request: GetConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Config>;

}

