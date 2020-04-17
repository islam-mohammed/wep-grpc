import { AssetsService, Assets } from './services/assets.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  assetsListSubscription: Subscription;
  title = '';

  constructor(private assetsService: AssetsService) {}

  ngOnInit() {
   this.assetsListSubscription = this.assetsService.listAssets('APP_ASSETS').pipe(
     catchError(error => {
        this.title= error?.message;
        return of(error?.message);
      })
   ).subscribe((assets: Assets) => {
    assets.forEach(asset => {
      this.title += asset[0] + '<br>';
    })
   }) ;
  }
}

