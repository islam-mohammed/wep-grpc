import { Component, OnInit } from '@angular/core';
import * as grpcWeb from "grpc-web"
import { AssetServiceClient, ListAssetsRequest, ListAssetsResponse } from 'pnp-sdk';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gRPC';

  ngOnInit() {
    const assetsService = new AssetServiceClient(environment.pnp_grpc_api);
    const request = new ListAssetsRequest();
    request.setName("APP_ASSETS");
    const meta = {
       'accept-language': 'en',
       'x-pnp-client-platform': 'web_app_desktop'
    }
    assetsService.listAssets(request, meta, (err, response: ListAssetsResponse) => {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(response.toObject().assetsMap);
      }
    });
  }
}
