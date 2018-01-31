import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tarefa-form-debug',
  templateUrl: './tarefa-form-debug.component.html',
  styleUrls: ['./tarefa-form-debug.component.css']
})
export class TarefaFormDebugComponent implements OnInit {

  @Input()
  mensagem: any;
  @Input()
  mostrarErro : boolean;

  constructor() { }


  ngOnInit() {
  }

}
