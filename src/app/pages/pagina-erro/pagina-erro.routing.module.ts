import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaErroComponent } from './pagina-erro.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaErroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaErroRoutingModule { }
