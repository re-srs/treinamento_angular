import { Component, OnInit } from '@angular/core';
import { ImcService } from './imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

peso: number;
altura: number;
imc: number;

  constructor(private imcService: ImcService) { }

calcularButton(){
    this.imc = this.imcService.calcularImc( this.peso,this.altura);
}

  ngOnInit() {
  }

}
