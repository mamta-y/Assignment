import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef) { }
@HostListener('mouseover') onmouseover(){
  this.el.nativeElement.style.color  ="red"
}
@HostListener('mouseleave') onmouseleave(){
  this.el.nativeElement.style.color  ="black"
}
}
