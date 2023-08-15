import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrxButtonComponent} from './button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    DrxButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    DrxButtonComponent,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class DrxButtonModule { }
