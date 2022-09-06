import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'daruix-btn',
    pathMatch: 'full'
  },
  {
    path: 'daruix-btn',
    loadChildren: () =>
      import("./btn-daruix-page/btn-daruix-page.module").then(
        (btn) => btn.BtnDaruixPageModule
      ),
  },
  {
    path: 'daruix-checkbox',
    loadChildren: () =>
      import("./checkbox-daruix-page/checkbox-daruix-page.module").then(
        (che) => che.CheckboxDaruixPageModule
      ),

  },
  {
    path: 'daruix-select',
    loadChildren: () =>
      import("./select-daruix-page/select-daruix-page.module").then(
        (sl) => sl.SelectDaruixPageModule
      ),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
