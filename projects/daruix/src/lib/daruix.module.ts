import { NgModule } from '@angular/core';
import { DaruixComponent } from './daruix.component';
import { DrxButtonModule} from "./button/button.module";
import { DrxCheckboxModule} from './checkbox/checkbox.module';
import { DrxSelectModule } from "./select/select.module";
import { DrxInputModule } from "./input/input.module";


@NgModule({
  declarations: [
    DaruixComponent,
  ],
  imports: [
    DrxButtonModule,
    DrxCheckboxModule,
    DrxSelectModule,
    DrxInputModule
  ],
  exports: [
    DaruixComponent,
    DrxButtonModule,
    DrxCheckboxModule,
    DrxSelectModule,
    DrxInputModule
  ]
})
export class DaruixModule { }
