import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnDaruixPageRoutingModule } from './btn-daruix-page-routing.module';
import {BtnDaruixPageComponent} from "./btn-daruix-page.component";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {DrxButtonModule} from "daruix";


@NgModule({
  declarations: [
    BtnDaruixPageComponent
  ],
  imports: [
    CommonModule,
    BtnDaruixPageRoutingModule,
    DrxButtonModule,
    MatCardModule
  ],
  exports:[
    BtnDaruixPageComponent
  ]
})
export class BtnDaruixPageModule { }
