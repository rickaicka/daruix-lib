import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BtnDaruixPageComponent} from "./btn-daruix-page.component";

const routes: Routes = [
  {
    path:'',
    component: BtnDaruixPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtnDaruixPageRoutingModule { }
