import {NgModule} from '@angular/core';
import {ProfileLayoutComponent} from "./components/profile-layout/profile-layout.component";
import {ProfileLayoutRoutingModule} from "./profile-layout-routing.module";
import {SharedModule} from "../../../shared.module";


@NgModule({
  declarations: [
    ProfileLayoutComponent
  ],
  imports: [
    ProfileLayoutRoutingModule,
    SharedModule
  ]
})
export class ProfileLayoutModule { }
