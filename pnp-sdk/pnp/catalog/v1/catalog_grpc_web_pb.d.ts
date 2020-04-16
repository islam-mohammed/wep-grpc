import * as grpcWeb from 'grpc-web';

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  FolderDetails,
  GetFolderDetailsRequest,
  GetVideoDetailsRequest,
  ListProductsResponse,
  ListSectionsResponse,
  VideoDetails} from './catalog_pb';

export class CatalogServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listSections(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListSectionsResponse) => void
  ): grpcWeb.ClientReadableStream<ListSectionsResponse>;

  getFolderDetails(
    request: GetFolderDetailsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FolderDetails) => void
  ): grpcWeb.ClientReadableStream<FolderDetails>;

  getVideoDetails(
    request: GetVideoDetailsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: VideoDetails) => void
  ): grpcWeb.ClientReadableStream<VideoDetails>;

  listProducts(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListProductsResponse) => void
  ): grpcWeb.ClientReadableStream<ListProductsResponse>;

}

export class CatalogServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listSections(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ListSectionsResponse>;

  getFolderDetails(
    request: GetFolderDetailsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FolderDetails>;

  getVideoDetails(
    request: GetVideoDetailsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<VideoDetails>;

  listProducts(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ListProductsResponse>;

}

