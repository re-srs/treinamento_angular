import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 numero: number = 10;

 destruirCiclo: boolean = false;


 somaMaisUm(){

   this.numero++;
 }


  clicar(evento){
    alert('Olá ' + evento);

  }

  destruirCicloClick(){
    //primeira maneira
    // if(this.destruirCiclo == true){
    //   this.destruirCiclo = false;
    // }
    // else{
    //   this.destruirCiclo = true;
    // }
    // //segunda maneira de escrever o código com menos linha de código(ternário)
    // this.destruirCiclo == true ? false: true;
    //terceira maneira de escrever o código
    this.destruirCiclo = !this.destruirCiclo;

  }

  mostrar(event){
    alert(event);

  }
}
