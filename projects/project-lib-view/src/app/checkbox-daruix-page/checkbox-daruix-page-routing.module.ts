import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxDaruixPageComponent } from './checkbox-daruix-page.component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxDaruixPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxDaruixPageRoutingModule { }
