import { Component, OnInit } from '@angular/core';

import { SegundoService } from './segundo.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  nome;
  sobrenome;

  altura:any;
  peso:any;
  imc:any;
  mensagem: string;

  constructor() {
    //this.imc = segundoService.clicar();
   }

  ngOnInit() {
  }

  clicar(){
  //console.log(this.peso);
    this.imc = (this.peso/(this.altura*this.altura));

    this.mostrar();

  }
  mostrar(){

    if(this.imc <=19.1){
      this.mensagem = "Você está abaixo do peso!";
    }
    else if(this.imc >=19.1 && this.imc <=25.8){
      this.mensagem = "Você está no peso ideal!";
    }
    else if(this.imc >=25.9){
      this.mensagem = "Você está acima do peso!";
    }

}

}
