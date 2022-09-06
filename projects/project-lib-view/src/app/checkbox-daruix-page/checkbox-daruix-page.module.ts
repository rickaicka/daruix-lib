import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxDaruixPageRoutingModule } from './checkbox-daruix-page-routing.module';
import {CheckboxDaruixPageComponent} from "./checkbox-daruix-page.component";
import {MatCardModule} from "@angular/material/card";
import {DrxCheckboxModule} from "daruix";


@NgModule({
  declarations: [
    CheckboxDaruixPageComponent
  ],
  imports: [
    CommonModule,
    CheckboxDaruixPageRoutingModule,
    DrxCheckboxModule,
    MatCardModule
  ],
  exports:[
    CheckboxDaruixPageComponent
  ]
})
export class CheckboxDaruixPageModule { }
