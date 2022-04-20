import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LoginLayoutComponent} from "./shared/layouts/login-layout/login-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";

const routes: Routes = [
  {
   path: '', component: LoginLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },


  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'market', loadChildren: () => import('./shared/layouts/market-layout/market-layout.module').then(mod => mod.MarketLayoutModule)},
  {path: 'profile', loadChildren: () => import('./shared/layouts/profile-layout/profile-layout.module').then(mod => mod.ProfileLayoutModule)},
  {path: '**', redirectTo: '/'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
