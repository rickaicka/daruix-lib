import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDaruixComponent } from './btn-daruix.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    BtnDaruixComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    BtnDaruixComponent,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class BtnDaruixModule { }
