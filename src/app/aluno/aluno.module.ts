import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoComponent } from './aluno.component';
import { AlunoService } from './aluno.service';
import { AlunoRoutingModule } from './aluno.routing.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule
  ],
  declarations: [AlunoDetalheComponent, AlunoFormComponent, AlunoComponent
  ],
  providers:[AlunoService]
})
export class AlunoModule { }
