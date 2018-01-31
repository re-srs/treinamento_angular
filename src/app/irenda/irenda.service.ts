import { Injectable } from '@angular/core';

@Injectable()
export class IrendaService {

  constructor() { }


  calcularIrenda(salario: number){

    let calculo_ir: number;

    if(salario > 0 && salario <=1900){
    calculo_ir = salario * 0;

    }
    else if(salario >= 1901 && salario <= 2800){
      calculo_ir = salario * 0.075;
    }
    else if(salario > 2800 && salario <= 3750){
        calculo_ir = salario * 0.15;
    }
    else if(salario > 3750 && salario <= 4700){
        calculo_ir = salario * 0.225;
    }
    else if(salario > 4700){
        calculo_ir = salario * 0.275;
    }
    return calculo_ir;

  }

}
