import { Directive, ElementRef, HostListener, Renderer,HostBinding } from '@angular/core';

@Directive({
  selector: '[appAlterarCor]'
})
export class AlterarCorDirective {

  @HostBinding('style.background-color')
  cor: string ;

  @HostListener('mouseenter') meuMouseIn(){
    //  alert('MouseEnter');
          this.cor = 'yellow';
         //  this.renderer.setElementStyle(
         //  this.elementRef.nativeElement,
         // 'background-color', 'yellow');

  }

  @HostListener('mouseleave') meuMouseOut(){
         this.cor = 'white';
       //  this.renderer.setElementStyle(
       //  this.elementRef.nativeElement,
       // 'background-color', 'white');
       //    //alert('MouseLeave');
  }

  @HostListener('click') meuClick(){
      alert('HostListener1');
  }


  constructor(private elementRef : ElementRef,
   private renderer: Renderer) {

     this.cor = 'orange';
   }
  //
//   //
//   //   let color: string;
//   //   let display;
//   //
//   //   // switch(Math.floor(Math.random() * 10)){
//   //   //   case 0: color = 'blue'; break;
//   //   //   case 1: color = 'green'; break;
//   //   //   case 2: color = 'red'; break;
//   //   //   case 3: color = 'gray'; break;
//   //   //   case 4: color = 'yellow'; break;
//   //   //   case 5: color = 'black'; break;
//   //   //   case 6: color = 'orange'; break;
//   //   //   case 7: color = 'pink'; break;
//   //   //   case 8: color = 'BROWN'; break;
//   //   //
//   //   //
//   //   //
//   //   // }
//   //
//   //   renderer.setElementStyle(
//   //     elementRef.nativeElement,
//   //     'background-color', color);
//   //
//    }

 }
