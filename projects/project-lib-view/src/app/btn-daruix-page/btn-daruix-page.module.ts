import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnDaruixPageRoutingModule } from './btn-daruix-page-routing.module';
import {BtnDaruixPageComponent} from "./btn-daruix-page.component";
import {DaruixModule} from "../../../../daruix/src/lib/daruix.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    BtnDaruixPageComponent
  ],
  imports: [
    CommonModule,
    BtnDaruixPageRoutingModule,
    DaruixModule,
    MatCardModule
  ],
  exports:[
    BtnDaruixPageComponent
  ]
})
export class BtnDaruixPageModule { }
