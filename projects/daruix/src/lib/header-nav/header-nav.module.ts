import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrxHeaderNavComponent} from './header-nav.component';



@NgModule({
  declarations: [
    DrxHeaderNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DrxHeaderNavComponent
  ]
})
export class DrxHeaderNavModule { }
