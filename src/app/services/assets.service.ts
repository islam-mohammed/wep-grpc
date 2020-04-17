import { Observable, Observer } from 'rxjs';
import { AssetServiceClient, ListAssetsRequest, ListAssetsResponse, Asset } from './../../../pnp-sdk';
import { Injectable } from '@angular/core';

import * as grpcWeb from 'grpc-web';

export type Assets = [string, Asset.AsObject][];

@Injectable()
export class AssetsService {
  constructor(private assetsServiceClient: AssetServiceClient) {}

  listAssets(name: string): Observable<Assets> {
    const listAssetsRequest = new ListAssetsRequest();
    listAssetsRequest.setName(name);
    const metaData = {
       'accept-language': 'en',
       'x-pnp-client-platform': 'web_app_desktop'
    };
    return Observable.create((observer: Observer<Assets>) => {
      this.assetsServiceClient.listAssets(listAssetsRequest, metaData, (err: grpcWeb.Error, listAssetsResponse: ListAssetsResponse ) => {
        if(err) {
          console.log(err.code);
          console.log(err.message);
          observer.error(new Error(err.message));
        } else {
          console.log(listAssetsResponse.toObject().assetsMap);
          observer.next(listAssetsResponse.toObject().assetsMap);
          observer.complete();
        }
      });
    });

  }
}
