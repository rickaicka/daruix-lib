import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDaruixPageRoutingModule } from './select-daruix-page-routing.module';
import {SelectDaruixPageComponent} from "./select-daruix-page.component";
import {DrxSelectModule} from "daruix";


@NgModule({
  declarations: [SelectDaruixPageComponent],
  imports: [
    CommonModule,
    SelectDaruixPageRoutingModule,
    DrxSelectModule
  ],
  exports: [
    SelectDaruixPageComponent
  ]
})
export class SelectDaruixPageModule { }
