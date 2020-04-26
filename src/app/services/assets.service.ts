import { Observable, Observer } from 'rxjs';
import { AssetServiceClient, ListAssetsRequest, ListAssetsResponse, Asset } from './../../../pnp-sdk';
import { Injectable } from '@angular/core';

import * as grpcWeb from 'grpc-web';

export type Assets = [string, Asset.AsObject][];

@Injectable()
export class AssetsService {
  constructor(private assetsServiceClient: AssetServiceClient) {}

  listAssets(name: string): Observable<Assets> {
    // const enableDevTools = window['__GRPCWEB_DEVTOOLS__'] || (() => {});
    const listAssetsRequest = new ListAssetsRequest();
    // enableDevTools([listAssetsRequest]);
    listAssetsRequest.setName(name);
    const metaData = {
       'accept-language': 'en',
       'x-pnp-client-platform': 'web_app_desktop'
    };
    return Observable.create((observer: Observer<Assets>) => {
      this.assetsServiceClient.listAssets(listAssetsRequest, metaData, (err: grpcWeb.Error, listAssetsResponse: ListAssetsResponse ) => {
        // this code not excuting !!
        if(err) {
          observer.error(new Error(err.message));
        } else {
          observer.next(listAssetsResponse.toObject().assetsMap);
          observer.complete();
        }
      });
    });

  }
}
