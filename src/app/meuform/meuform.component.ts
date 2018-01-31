import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-meuform',
  templateUrl: './meuform.component.html',
  styleUrls: ['./meuform.component.css']
})
export class MeuformComponent implements OnInit {

  constructor() { }

  onSubmit(f : NgForm){
    console.log(f);

  }

  isSuccess(campo){
    return (campo.valid == true && campo.touched == true);

  }
  isError(campo){
    return (campo.valid == false && campo.touched == true);

  }

  aplicarValidacaoCss(campo){

    return({'has-error': this.isError(campo),
            'has-success': this.isSuccess(campo)});
  }

  ngOnInit() {
  }

}
