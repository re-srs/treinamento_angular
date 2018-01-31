import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuformRoutingModule } from './meuform-routing.module';
import { MeuformComponent } from './meuform.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    MeuformRoutingModule,
    SharedModule
  ],
  declarations: [MeuformComponent]
})
export class MeuformModule { }
