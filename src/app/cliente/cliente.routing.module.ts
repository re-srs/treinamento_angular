import { NgModule,ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

import { ClienteNaoEncontradoComponent } from './cliente-nao-encontrado/cliente-nao-encontrado.component';

const ClienteRoutes: Routes = [
                            {path: 'clientes', component: ClienteComponent},
                            {path: 'cliente/:idCliente', component: ClienteDetalheComponent},

                            {path: 'cliente-nao-encontrado/:idCliente', component: ClienteNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ClienteRoutes)],
  declarations: [],
  providers: [],
  exports:[RouterModule]
})
export class ClienteRoutingModule { }
