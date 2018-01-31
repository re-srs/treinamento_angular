import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';



const routes: Routes = [
      {path:'aluno', component: AlunoComponent, children : [

        //{path: '', component : AlunoComponent },
        {path: ':idAluno', component : AlunoDetalheComponent },
        {path: ':idAluno/editar', component : AlunoFormComponent }
      ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: [],
  exports:[RouterModule]
})
export class AlunoRoutingModule { }
