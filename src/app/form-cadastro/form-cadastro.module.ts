import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCadastroRoutingModule } from './form-cadastro-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormCadastroComponent } from './form-cadastro.component';


@NgModule({
  imports: [
    CommonModule,
    FormCadastroRoutingModule,
    SharedModule
  ],
  declarations: [FormCadastroComponent]
})
export class FormCadastroModule { }
