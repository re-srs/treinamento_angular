import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImcService } from './imc.service';
import { ImcComponent } from './imc.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ImcComponent],
  exports: [ImcComponent],
  providers: [ImcService]
})
export class ImcModule { }
