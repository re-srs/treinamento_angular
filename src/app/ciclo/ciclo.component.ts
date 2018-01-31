import { Component, OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit,
         AfterContentChecked, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,
                                       OnDestroy,
                                       DoCheck,
                                       OnChanges,
                                       AfterContentInit,
                                       AfterContentChecked,
                                       AfterViewChecked {

  @Input()
  contador: number = 0;


  @Input()
  nome:string;

  @Input()
  mensagem: string;

  constructor() {
  console.log('constructor');


  }

  ngOnInit() {
    console.log('ngOnInit');
    }

  ngDoCheck(){

    console.log('ngDoCheck');


  }

  ngOnChanges(){
    console.log('ngOnChanges');
    if( this.contador > 20){
    alert('ATENCAO!!!');
    }
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    
  }


}
