import * as grpcWeb from 'grpc-web';

import {
  File,
  GetFileRequest,
  UploadFileRequest,
  UploadFileResponse} from './file_pb';

export class FileServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getFile(
    request: GetFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: File) => void
  ): grpcWeb.ClientReadableStream<File>;

}

export class FileServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getFile(
    request: GetFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<File>;

}

