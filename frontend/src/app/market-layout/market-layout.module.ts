import {NgModule} from '@angular/core';
import {MarketLayoutComponent} from "./components/market-layout/market-layout.component";
import {MarketLayoutRoutingModule} from "./market-layout-routing.module";
import {SharedModule} from "../shared.module";
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { GoodsItemComponent } from './components/goods-list/components/goods-item/goods-item.component';


@NgModule({
  declarations: [MarketLayoutComponent, GoodsListComponent, GoodsItemComponent],
  imports: [
    MarketLayoutRoutingModule,
    SharedModule
  ]
})
export class MarketLayoutModule { }
