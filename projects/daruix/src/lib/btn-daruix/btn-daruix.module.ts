import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDaruixComponent } from './btn-daruix.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    BtnDaruixComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    BtnDaruixComponent,
    MatButtonModule
  ]
})
export class BtnDaruixModule { }
