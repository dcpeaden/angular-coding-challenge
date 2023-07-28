import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:resize')
  onResize() {
    const element = this.el.nativeElement;
    element.style.width = window.innerWidth + 'px';
    element.style.height = window.innerHeight + 'px';
  }
}
