import { NgModule } from '@angular/core';
import { DaruixComponent } from './daruix.component';
import {BtnDaruixModule} from "./btn-daruix/btn-daruix.module";



@NgModule({
  declarations: [
    DaruixComponent,
  ],
  imports: [
    BtnDaruixModule
  ],
  exports: [
    DaruixComponent,
    BtnDaruixModule
  ]
})
export class DaruixModule { }
