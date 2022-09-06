import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDaruixPageComponent } from './input-daruix-page.component';

const routes: Routes = [
  {
    path: '',
    component: InputDaruixPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputDaruixPageRoutingModule { }
