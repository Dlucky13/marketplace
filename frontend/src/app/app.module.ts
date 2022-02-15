import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainPageComponent} from './components/main-page/main-page.component';
import {SharedModule} from "./shared.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {GOODS_DATA, goodsData} from "./fakeData/rest-data";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NoopAnimationsModule
  ],
  providers: [{
    provide: GOODS_DATA,
    useValue: goodsData
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
