import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpReqService {

  // projects : any[] ;
  // total = 0;
  // searchField: string = '';

  constructor(private http: Http) { }

  searchProjetsService(searchField){
    var url = 'https://api.github.com/search/repositories?q=' + searchField;
    if(searchField){ // se for diferente de nulo, entra no if
      return this.http.get(url)
              .map(response => response.json());


    }

  }

}
