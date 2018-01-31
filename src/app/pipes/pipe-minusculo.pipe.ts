import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMinusculo'
})
export class PipeMinusculoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let quebra = value.split('.');

    for(let i=0; i < quebra.length; i++){
      if(i%2 == 0){
        quebra[i] = quebra[i].toLowerCase();
      }
      else {
        quebra[i] = quebra[i].toUpperCase();

      }


    }

    return quebra.join('');

  }



}
