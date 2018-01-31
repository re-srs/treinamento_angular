import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import{ HttpReqService } from './http-req.service';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.css']
})
export class HttpReqComponent implements OnInit {

  projects : any[] ;
  total = 0;
  searchField: string = '';

  constructor(private httpReqService : HttpReqService) {}

  searchProjets(searchField){
      //this. = this.HttpReqService.searchProjets();

      this.httpReqService.searchProjetsService(this.searchField)
        .subscribe(response => {
          this.projects = response.items;
          this.total = response.total_count;
        });
   }





  //
  // searchProjets(){
  //   var url = 'https://api.github.com/search/repositories?q=' + this.searchField;
  //   if(this.searchField){ // se for diferente de nulo, entra no if
  //     return this.http.get(url)
  //             .map(response => response.json())
  //             .subscribe(response => {
  //                 this.projects = response.items;
  //                 this.total = response.total_count;
  //             })
  //
  //   }
  //
  // }
  ngOnInit() {
  }

}
