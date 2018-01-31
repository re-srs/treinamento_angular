import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormReativoRoutingModule } from './form-reativo-routing.module';
import { FormReativoComponent } from './form-reativo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormReativoRoutingModule,
    SharedModule

  ],
  declarations: [FormReativoComponent]
})
export class FormReativoModule { }
