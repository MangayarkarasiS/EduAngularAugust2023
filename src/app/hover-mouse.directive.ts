import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverMouse]'
})
export class HoverMouseDirective {

  constructor(private element:ElementRef) { }
 
  @HostListener('mouseenter')
  HMouseEnter(){
    this.element.nativeElement.style.backgroundColor="yellow";
  }
  @HostListener('mouseleave')
  HMouseLeave(){
    this.element.nativeElement.style.backgroundColor="initial";
  }
}
