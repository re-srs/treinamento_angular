import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {

  constructor() { }

  getAlunos(){

    return[
      {id: 1,nome: 'Aluno 1', email: 'a1@gmail.com'},
      {id: 2,nome: 'Aluno 2', email: 'a1@gmai2.com'},
      {id: 3,nome: 'Aluno 3', email: 'a1@gmail3.com'},

    ];
  }

  getAluno(id){

    let alunos = this.getAlunos();

    for (let i=0; i< alunos.length; i++){
      let aluno = alunos[i];

      if(aluno.id == id){
        return aluno;
      }
    }

    return null;



  }

}
