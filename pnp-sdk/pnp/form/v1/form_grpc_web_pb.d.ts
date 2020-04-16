import * as grpcWeb from 'grpc-web';

import {
  Form,
  GetFormRequest} from './form_pb';

export class FormServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getForm(
    request: GetFormRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Form) => void
  ): grpcWeb.ClientReadableStream<Form>;

}

export class FormServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getForm(
    request: GetFormRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Form>;

}

