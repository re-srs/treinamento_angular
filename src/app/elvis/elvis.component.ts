import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {

  constructor() {

      // testar: string = 'a';
      // if(testar == 'a'){
      //
      //   return 110;
      // }
      // else{
      //   return 1;
      // }
      // // é o mesmo que:
      //
      // testar == 'a' ? return 110 : return 1
  }


  aluno: any = {
    nome : 'Renata',
    idade : 29,
    nota: {valor:10},
    cursos: {
      nome: 'Angular 2',
    professores: {
      nome: 'Alexandre',
      endereco: {
        rua: 'Av. Guido Caloi,1000'
    }//endereco
  }//professores
}//cursos

}//aluno;


  indra : any = {
    pais: {
        nome_pais: 'Brasil',
        unidade: {
          endereco: {
            rua: 'Guido Caloi',
            tel: '0000-0000',
            setor:{
              qtde_func: 30,
              projeto: {
                nome_proj:    'Angular 2',
                cliente_nome: 'Santander',

                funcionario:{
                  0:{
                    nome_func: 'Renata',
                    idade: 31
                  },
                  1:{
                    nome_func: 'Maria',
                    idade: 20
                  }
                }//funcionario
              }//projeto
          }//setor
          },//endereco


    }//unidade
  }//pais

};//indra


  ngOnInit() {
  }

}
