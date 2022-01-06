import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MarketLayoutComponent} from "./components/market-layout/market-layout.component";

const routes: Routes = [
  {path: '', component: MarketLayoutComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MarketLayoutRoutingModule { }
