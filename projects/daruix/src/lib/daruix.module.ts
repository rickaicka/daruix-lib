import { NgModule } from '@angular/core';
import { DaruixComponent } from './daruix.component';
import { BtnDaruixComponent } from './btn-daruix/btn-daruix.component';
import {BtnDaruixModule} from "./btn-daruix/btn-daruix.module";
import { CheckboxDaruixComponent } from './checkbox-daruix/checkbox-daruix.component';
import { CheckboxDaruixModule } from './checkbox-daruix/checkbox-daruix.module';



@NgModule({
  declarations: [
    DaruixComponent,
  ],
  imports: [
    BtnDaruixModule,
    CheckboxDaruixModule
  ],
  exports: [
    DaruixComponent,
    BtnDaruixModule,
    CheckboxDaruixModule
  ]
})
export class DaruixModule { }
