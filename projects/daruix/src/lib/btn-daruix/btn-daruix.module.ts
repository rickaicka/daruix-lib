import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDaruixComponent } from './btn-daruix.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    BtnDaruixComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BtnDaruixComponent,
    MatButtonModule,
    MatIconModule
  ]
})
export class BtnDaruixModule { }
