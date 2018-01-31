import { Component, OnInit } from '@angular/core';
import {IrendaService} from './irenda.service';

@Component({
  selector: 'app-irenda',
  templateUrl: './irenda.component.html',
  styleUrls: ['./irenda.component.css']
})
export class IrendaComponent implements OnInit {

salario: number;
calculo_ir: number;

nome: string = 'Renata Lobato. Curso Indra. Janeiro 2018. Ok';
data_nascimento = Date();

  constructor(private irendaService: IrendaService) { }

  calcularButton(){
      this.calculo_ir = this.irendaService.calcularIrenda( this.salario);
  }

  ngOnInit() {
  }



}
