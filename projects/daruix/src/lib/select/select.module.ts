import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrxSelectComponent} from "./select.component";



@NgModule({
  declarations: [
    DrxSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DrxSelectComponent
  ]
})
export class DrxSelectModule { }
