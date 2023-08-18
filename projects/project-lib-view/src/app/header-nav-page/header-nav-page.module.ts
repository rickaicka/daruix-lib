import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavPageComponent } from './header-nav-page.component';
import {HeaderNavPageRoutingModule} from "./header-nav-page-routing.module";
import {DrxHeaderNavModule} from "../../../../daruix/src/lib/header-nav/header-nav.module";



@NgModule({
  declarations: [
    HeaderNavPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavPageRoutingModule,
    DrxHeaderNavModule
  ]
})
export class HeaderNavPageModule { }
