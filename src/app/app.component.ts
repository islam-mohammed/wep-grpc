import { CountryService } from './services/country.service';
import { PersoItemService } from './services/persoitem.service';
import { AssetsService } from './services/assets.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, of, combineLatest } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  assetsListSubscription: Subscription;
  title = '';

  constructor(private p: PersoItemService, private a: AssetsService, private c: CountryService) { }

  ngOnInit() {

    combineLatest([
        // this.p.listPersoItem([1, 2]),
        // this.a.listAssets('APP_ASSETS'),
         this.c.listCountries()
    ]).pipe(
      catchError(error => {
        this.title= error?.message;
        return of(error?.message);
      })
    ).subscribe(console.log);
  }
  ngOnDestroy() {
    this.assetsListSubscription.unsubscribe();
  }
}

