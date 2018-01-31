import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuformComponent } from './meuform.component';

const routes: Routes = [
  {path: 'form', component: MeuformComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeuformRoutingModule { }
