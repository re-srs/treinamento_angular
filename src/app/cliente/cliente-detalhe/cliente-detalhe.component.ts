import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  idCliente: any;
  inscricao: Subscription;
  cliente: any;
  idEmpresa: string;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService,
  private router: Router) {
    console.log(route);
    //this.idCliente = this.route.snapshot.params['idCliente'];

    //this.idEmpresa = this.route.snapshot.params['idEmpresa'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any)=>{
      this.idCliente = params['idCliente'];
      this.cliente = this.clienteService.
      getCliente(this.idCliente);

      if(this.cliente == null){
          this.router.navigate(['/cliente-nao-encontrado',this.idCliente]);
      }
      //this.idEmpresa = params['idEmpresa'];
    });
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
