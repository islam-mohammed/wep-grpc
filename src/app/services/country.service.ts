import { Country, ListCountriesResponse, CountryServiceClient } from './../../../pnp-sdk/';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import * as grpcWeb from 'grpc-web';

export type Countries = Country.AsObject[];

@Injectable()
export class CountryService {
  constructor(private countryServiceClient: CountryServiceClient) {}

  listCountries(): Observable<Countries> {
    const metaData = {
       'accept-language': 'en',
       'x-pnp-client-platform': 'web_app_desktop'
    };
    return Observable.create((observer: Observer<Countries>) => {
      this.countryServiceClient.listCountries(google_protobuf_empty_pb.Empty, {}, (err: grpcWeb.Error, listCountriesResponse: ListCountriesResponse ) => {
        if(err) {
          observer.error(new Error(err.message));
        } else {
          observer.next(listCountriesResponse.toObject().countriesList);
          observer.complete();
        }
      });
    });

  }
}
