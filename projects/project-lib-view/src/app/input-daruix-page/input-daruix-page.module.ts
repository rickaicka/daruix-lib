import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputDaruixPageRoutingModule } from './input-daruix-page-routing.module';
import { InputDaruixPageComponent } from './input-daruix-page.component';
import { MatCardModule } from '@angular/material/card';
import {DrxInputModule} from "daruix";


@NgModule({
  declarations: [
    InputDaruixPageComponent
  ],
  imports: [
    CommonModule,
    InputDaruixPageRoutingModule,
    DrxInputModule,
    MatCardModule
  ],
  exports: [
    InputDaruixPageComponent
  ]
})
export class InputDaruixPageModule { }
