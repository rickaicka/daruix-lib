import { NgModule } from '@angular/core';
import { DaruixComponent } from './daruix.component';
import { DrxButtonModule} from "./button/button.module";
import { DrxCheckboxModule} from './checkbox/checkbox.module';
import { DrxSelectModule } from "./select/select.module";
import { DrxInputModule } from "./input/input.module";
import {DrxHeaderNavModule} from "./header-nav/header-nav.module";


@NgModule({
  declarations: [
    DaruixComponent,
  ],
  imports: [
    DrxButtonModule,
    DrxCheckboxModule,
    DrxSelectModule,
    DrxInputModule,
    DrxHeaderNavModule
  ],
  exports: [
    DaruixComponent,
    DrxButtonModule,
    DrxCheckboxModule,
    DrxSelectModule,
    DrxInputModule,
    DrxHeaderNavModule
  ]
})
export class DaruixModule { }
