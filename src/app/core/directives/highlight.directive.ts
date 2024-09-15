import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  ngOnHover() {
    this.el.nativeElement.style.backgroundColor = '#3f51b573';
  }

  @HostListener('mouseleave')
  ngOnUnHover() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
