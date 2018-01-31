import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-nao-encontrado',
  templateUrl: './cliente-nao-encontrado.component.html',
  styleUrls: ['./cliente-nao-encontrado.component.css']
})
export class ClienteNaoEncontradoComponent implements OnInit {

  inscricao: Subscription;

  idCliente: any;
  cliente: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe((params: any)=>{
      this.idCliente = params['idCliente'];



      //this.idEmpresa = params['idEmpresa'];
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


}
