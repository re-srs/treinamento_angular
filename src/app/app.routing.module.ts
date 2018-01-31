import { NgModule,ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { HttpReqComponent } from './http-req/http-req.component';
import { MeuformComponent } from './meuform/meuform.component';
import { IrendaComponent } from './irenda/irenda.component';
import { ImcComponent } from './imc/imc.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';



const APP_ROUTES: Routes = [{path: '', component: HttpReqComponent},
                            //{path: 'form', component: MeuformComponent},
                            {path: 'http', component: HttpReqComponent},
                            {path: 'irenda', component: IrendaComponent},
                            {path: 'imc', component: ImcComponent},
                            //{path: 'form-cadastro', component: FormCadastroComponent},
                            {path: '', loadChildren: 'app/aluno/aluno.module#AlunoModule'},


];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  declarations: [],
  providers: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
