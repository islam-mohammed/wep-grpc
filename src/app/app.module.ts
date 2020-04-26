import { CountryService } from './services/country.service';
import { CountryServiceClientFactory } from './providers/country.service.provider';
import { PersoItemServiceClient, AssetServiceClient, CountryServiceClient} from './../../pnp-sdk';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssetsService } from './services/assets.service';
import { PersoItemService } from './services/persoitem.service';
import { PersoItemServiceClientFactory } from './providers/persoitem.service.provider';
import { AssetsServiceClientFactory } from './providers/assets.service.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AssetsService,
    PersoItemService,
    CountryService,
    {
      provide: AssetServiceClient,
      useFactory: AssetsServiceClientFactory
    },
    {
      provide: PersoItemServiceClient,
      useFactory: PersoItemServiceClientFactory
    },
    {
      provide: CountryServiceClient,
      useFactory: CountryServiceClientFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
