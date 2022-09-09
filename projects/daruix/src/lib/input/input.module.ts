import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { DrxInputComponent } from './input.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DrxInputComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    DrxInputComponent,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class DrxInputModule { }
