import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrxCheckboxComponent } from './checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    DrxCheckboxComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    DrxCheckboxComponent,
    MatCheckboxModule
  ]
})
export class DrxCheckboxModule { }
