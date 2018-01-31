import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  constructor(private http:Http) { }

  isSuccess(campo){
    return (campo.valid == true && campo.touched == true);

  }
  isError(campo){
    return (campo.valid == false && campo.touched == true);

  }

  ngOnInit() {
  }

  consultarCEP(cep,formulario){
    var cep = cep.replace(/\D/g,'');

    if( cep!= ""){
      var validacep = /^[0-9]{8}$/;

      //valida o formato do cep
      if(validacep.test(cep)){
        return this.http.get('https://viacep.com.br/ws/' +
        cep + '/json/').map(response => response.json() ).subscribe(response =>{


          formulario.form.patchValue({endereco  : response.logradouro,
                                      estado    : response.uf,
                                      bairro    : response.bairro,
                                      cidade    : response.localidade});
        });
        ;
      }
    }
  }

  onSubmit(formulario:NgForm){

    this.http.post('https://httpbin.org/post',
    JSON.stringify(formulario.value))
    .map(response => response)
    .subscribe(dados => {console.log(dados);
    alert(JSON.stringify(dados));
    })

    ;
  }
}
