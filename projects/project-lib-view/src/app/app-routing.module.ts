import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxDaruixComponent } from 'daruix';
import {BtnDaruixPageComponent} from "./btn-daruix-page/btn-daruix-page.component";

const routes: Routes = [
  {
    path: 'daruix-btn',
    component: BtnDaruixPageComponent
  },
  {
    path: 'daruix-checkout',
    component: CheckboxDaruixComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
