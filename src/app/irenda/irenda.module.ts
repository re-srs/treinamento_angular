import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrendaService } from './irenda.service';
import { IrendaComponent } from './irenda.component';
import { FormsModule } from '@angular/forms';
import { MeuPipePipe } from '../pipes/meu-pipe.pipe';
import { PipeMinusculoPipe } from '../pipes/pipe-minusculo.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IrendaComponent,MeuPipePipe,PipeMinusculoPipe],
  exports: [IrendaComponent],
  providers: [IrendaService]
})
export class IrendaModule { }
