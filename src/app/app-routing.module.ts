import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {
      path: '',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: '**' ,
      loadChildren: () => import('./pages/pagina-erro/pagina-erro.module').then(m => m.PaginaErroModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
