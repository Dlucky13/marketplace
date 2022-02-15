import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'market', loadChildren: () => import('./market-layout/market-layout.module').then(mod => mod.MarketLayoutModule)},
  {path: 'profile', loadChildren: () => import('./profile-layout/profile-layout.module').then(mod => mod.ProfileLayoutModule)},
  {path: '**', redirectTo: '/'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
