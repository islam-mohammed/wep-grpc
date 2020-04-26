import { ListPersoItemsResponse } from './../../../pnp-sdk/pnp/perso_item/v1/perso_item_pb.d';
import { PersoItemServiceClient, ListPersoItemsRequest, ListAssetsResponse, PersoItem } from './../../../pnp-sdk';

import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

import * as grpcWeb from 'grpc-web';


@Injectable()
export class PersoItemService {
  constructor(private persoItemServiceClient: PersoItemServiceClient) {}

  listPersoItem(persoItemType: PersoItem.Type[]): Observable<PersoItem.AsObject[]> {
    const listPersoItemRequest = new ListPersoItemsRequest();
    listPersoItemRequest.setTypesList(persoItemType);
    const metaData = {
      'accept-language': 'en',
      'x-pnp-client-platform': 'web_app_desktop',
      'authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODc3NTI1NzEsImV4cCI6MTU4Nzc1MzQ3MSwiaWQiOjE1ODM1ODcwLCJ1c2VybmFtZSI6InFhK21hZ2ljQHVncm91cG1lZGlhLmNvbSIsInRlcm1zT2ZVc2VBY2NlcHRlZERhdGUiOiIyMDIwLTA0LTIyIiwicHJvdmlkZXJOYW1lIjoicG5wIn0.WqwOSPy4FA6Cx5Ew3rkSaAcmAFa1c1zQ1lCshHShoZlUMkMD9grGQ-VETCcfvfKVcagVMRjkJGDHuScy9DpVf1U0cbiuEkbc9yM_i8DeuY-nRAXpNtCwaBbVtn0EkWnnXkftxU-fZ4Ncm4NhWyDFPeaVxDxc3FdqKHGM7s7bDSR7q5Z7tDdEzFMBOCKDWn3584DLs4pRI43ylNnrYu47TLl3A2sXp4xwcRPTFJWjfNhFrcRcs7S_sKY1PFb1rfar5g-5k_HF0GViEkeh5lyBxxeslu7mbwAUYQrbQXHaGKLQDx8EtWjIYzqkE3Hdbq-ZGbmU0z5MvveB_adzZf7fiV-sTkMoVImgknWkZX3b5rN49w8ZB1GIfQUYTozgmrqJO-njOkUu9zvSUV2T18GGu89N3YMqCxu4dV6ZxV5RCQHGaZ1s6V_5ZdRBIb6ejByG1PnQ2UUmY_icv5eRfa5Atbpft4HujOvCSX2n_4_ba9u_oxiHVpIOsfzJ-H4w56A_LWIDj1A4mWxapUW5SYIOFBc1Vupy6ARHZ5UUxYUXF5O7RGRG4n-SFUpw6t-s7GLXEhNpZ95xOVFCPU-O1Nln1rpKSnwQaLLrmzByAVDICUmPi--Tub4Hh3poBkoya5cfhCn2GdQaSC2_Zdp54ETcqHVtVz1RpduT5o_8dX54b0w`
    };
    return Observable.create((observer: Observer<PersoItem.AsObject[]>) => {
      this.persoItemServiceClient.listPersoItems(listPersoItemRequest, metaData, (err: grpcWeb.Error, listPersoItemResponse: ListPersoItemsResponse ) => {
        if(err) {
          console.log(err.code);
          console.log(err.message);
          observer.error(new Error('Just Error'));
        } else {
          console.log(listPersoItemResponse.toObject().persoItemsList);
          observer.next(listPersoItemResponse.toObject().persoItemsList);
          observer.complete();
        }
      });
    });

  }
}
