import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeadComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
