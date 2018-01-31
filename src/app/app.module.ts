import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { ClienteModule } from './cliente/cliente.module';
import { ImcModule } from './imc/imc.module';
import {IrendaModule } from './irenda/irenda.module';
//import { CrenataComponent } from './crenata/crenata.component';
//import { ClienteComponent } from './cliente/cliente.component';

import { MrenataModule } from './crenata/mrenata.module'

import { AlertModule } from 'ngx-bootstrap';
import { InputOutputComponent } from './input-output/input-output.component';
import { AlterarCorDirective } from './diretivas/alterar-cor.directive';
import { DiretivasCorComponent } from './diretivas-cor/diretivas-cor.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ElvisComponent } from './elvis/elvis.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasClassStyleComponent } from './diretivas-class-style/diretivas-class-style.component';
import { HttpReqComponent } from './http-req/http-req.component';
import { HttpModule } from '@angular/http';
//import { MeuformComponent } from './meuform/meuform.component';
//import { ReactiveFormsModule } from '@angular/forms';


//import { PipeMinusculoPipe } from './pipes/pipe-minusculo.pipe';
//import { MeuPipePipe } from './pipes/meu-pipe.pipe';
//import { IrendaComponent } from './irenda/irenda.component';
//import { ImcComponent } from './imc/imc.component';

import {HttpReqService} from './http-req/http-req.service';
// import { FormDebugComponent } from './form-debug/form-debug.component';
// import { TarefaFormDebugComponent } from './tarefa-form-debug/tarefa-form-debug.component';
import {AppRoutingModule} from './app.routing.module';

//import { ClienteDetalheComponent } from './cliente/cliente-detalhe/cliente-detalhe.component';

//import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { AlunoModule } from './aluno/aluno.module';
import { FormReativoModule } from './form-reativo/form-reativo.module';
import { MeuformModule } from './meuform/meuform.module';
import { FormCadastroModule } from './form-cadastro/form-cadastro.module';

//import { ClienteNaoEncontradoComponent } from './cliente/cliente-nao-encontrado/cliente-nao-encontrado.component';
//import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    InputOutputComponent,
    AlterarCorDirective,
    DiretivasCorComponent,
    NgContentComponent,
    ElvisComponent,
    CicloComponent,
    DiretivasClassStyleComponent,
    HttpReqComponent,
  //  MeuformComponent,
    // FormDebugComponent,
    // TarefaFormDebugComponent,
    //ClienteDetalheComponent,
    //FormCadastroComponent,
    //ClienteNaoEncontradoComponent,



    //PipeMinusculoPipe,
    //MeuPipePipe,
    //IrendaComponent,
    //ImcComponent,
    //CrenataComponent,
    //ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClienteModule,
    MrenataModule,
    AlertModule.forRoot(),
    ImcModule,
    IrendaModule,
    HttpModule,
    AppRoutingModule,
    AlunoModule,
    FormReativoModule,
    MeuformModule,
    FormCadastroModule

  ],
  providers: [HttpReqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
