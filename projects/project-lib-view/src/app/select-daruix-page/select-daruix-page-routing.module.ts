import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelectDaruixPageComponent} from "./select-daruix-page.component";

const routes: Routes = [
  {
    path: '',
    component: SelectDaruixPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectDaruixPageRoutingModule { }
