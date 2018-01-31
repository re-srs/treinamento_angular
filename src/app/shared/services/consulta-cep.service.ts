import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ConsultaCepService {

  constructor(private http: Http) {

   }

   consultarCEP(cep){
     var cep = cep.replace(/\D/g,'');

     if( cep!= ""){
       var validacep = /^[0-9]{8}$/;

       //valida o formato do cep
       if(validacep.test(cep)){
         return this.http.get('https://viacep.com.br/ws/' +
         cep + '/json/').map(response => response.json() );
       }
     }
   }

}
