import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaErroComponent } from './pagina-erro.component';

import { PaginaErroRoutingModule } from './pagina-erro.routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PaginaErroComponent],
  imports: [
    CommonModule,
    PaginaErroRoutingModule,
    ComponentsModule
  ]
})
export class PaginaErroModule { }
