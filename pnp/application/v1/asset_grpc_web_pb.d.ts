import * as grpcWeb from 'grpc-web';

import {
  ListAssetsRequest,
  ListAssetsResponse} from './asset_pb';

export class AssetServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listAssets(
    request: ListAssetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListAssetsResponse) => void
  ): grpcWeb.ClientReadableStream<ListAssetsResponse>;

}

export class AssetServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listAssets(
    request: ListAssetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListAssetsResponse>;

}

