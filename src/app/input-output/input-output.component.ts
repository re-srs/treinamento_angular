import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],

})
export class InputOutputComponent implements OnInit {

  @Input()  endereco: any;

  @Output()
  meuclique = new EventEmitter();

  @Output()
  meumostre = new EventEmitter();

  clique(){

      this.meuclique.emit('Indra Company');

  }
  mostre(){

    //this.meumostre.emit(document.getElementById('mt').value);  //pega o id criado qdo vc digita na tela e passa aqui

  }
  constructor() { }

  ngOnInit() {
  }



}
