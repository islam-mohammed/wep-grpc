import { AssetServiceClient } from './../../pnp-sdk';
import { AssetsServiceClientFactory } from './providers/assets.service.provider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssetsService } from './services/assets.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AssetsService,
    {
      provide: AssetServiceClient,
      useFactory: AssetsServiceClientFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
