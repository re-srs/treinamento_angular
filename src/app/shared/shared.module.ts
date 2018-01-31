import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { TarefaFormDebugComponent } from './tarefa-form-debug/tarefa-form-debug.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConsultaCepService } from './services/consulta-cep.service';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [FormDebugComponent,TarefaFormDebugComponent],
  exports: [
    FormDebugComponent,
    TarefaFormDebugComponent,
    ReactiveFormsModule,
    FormDebugComponent,
    TarefaFormDebugComponent,
    FormsModule,
    HttpModule
  ],
  providers: [ConsultaCepService]
})
export class SharedModule { }
