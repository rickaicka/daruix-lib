import { NgModule } from '@angular/core';
import { DaruixComponent } from './daruix.component';
import {ButtonModule} from "./button/button.module";
import { CheckboxModule } from './checkbox/checkbox.module';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    DaruixComponent,
    SelectComponent,
  ],
  imports: [
    ButtonModule,
    CheckboxModule
  ],
  exports: [
    DaruixComponent,
    ButtonModule,
    CheckboxModule
  ]
})
export class DaruixModule { }
