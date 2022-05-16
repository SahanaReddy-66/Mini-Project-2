import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDesign]'
})
export class DesignDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.backgroundColor="yellow";
   }

}
