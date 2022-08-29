import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BtnDaruixPageComponent} from "./btn-daruix-page/btn-daruix-page.component";

const routes: Routes = [
  {
    path: 'daruix-btn',
    component: BtnDaruixPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
