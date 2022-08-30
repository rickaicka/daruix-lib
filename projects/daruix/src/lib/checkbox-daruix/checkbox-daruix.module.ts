import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxDaruixComponent } from './checkbox-daruix.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CheckboxDaruixComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    CheckboxDaruixComponent
  ]
})
export class CheckboxDaruixModule { }
