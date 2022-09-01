import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxDaruixPageRoutingModule } from './checkbox-daruix-page-routing.module';
import {CheckboxDaruixPageComponent} from "./checkbox-daruix-page.component";
import {DaruixModule} from "../../../../daruix/src/lib/daruix.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CheckboxDaruixPageComponent
  ],
  imports: [
    CommonModule,
    CheckboxDaruixPageRoutingModule,
    DaruixModule,
    MatCardModule
  ],
  exports:[
    CheckboxDaruixPageComponent
  ]
})
export class CheckboxDaruixPageModule { }
