import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-class-style',
  templateUrl: './diretivas-class-style.component.html',
  styleUrls: ['./diretivas-class-style.component.css']
})
export class DiretivasClassStyleComponent implements OnInit {

  sucesso: boolean = false;
  random: number = this.doRandom(10);
  cor: string = "rgb(0,255,0)";

  constructor() { }

  alterarSucesso(){

    this.sucesso = !this.sucesso;
  }

  doRandom(max){
    return Math.floor(Math.random() * max );

  }

  ngOnInit() {
  }

}
