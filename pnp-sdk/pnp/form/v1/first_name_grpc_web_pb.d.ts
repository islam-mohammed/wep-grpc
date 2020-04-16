import * as grpcWeb from 'grpc-web';

import {
  FirstName,
  FirstNameMatches,
  GetFirstNameRequest,
  MatchFirstNameRequest} from './first_name_pb';

export class FirstNameServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  matchFirstName(
    request: MatchFirstNameRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FirstName) => void
  ): grpcWeb.ClientReadableStream<FirstName>;

  getFirstName(
    request: GetFirstNameRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FirstName) => void
  ): grpcWeb.ClientReadableStream<FirstName>;

  listFirstNameMatches(
    request: MatchFirstNameRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FirstNameMatches) => void
  ): grpcWeb.ClientReadableStream<FirstNameMatches>;

}

export class FirstNameServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  matchFirstName(
    request: MatchFirstNameRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FirstName>;

  getFirstName(
    request: GetFirstNameRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FirstName>;

  listFirstNameMatches(
    request: MatchFirstNameRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FirstNameMatches>;

}

