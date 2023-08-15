import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputDaruixPageRoutingModule } from './input-daruix-page-routing.module';
import { DrxInputModule } from 'projects/daruix/src/lib/input/input.module';
import { InputDaruixPageComponent } from './input-daruix-page.component';
import { MatCardModule } from '@angular/material/card';


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
