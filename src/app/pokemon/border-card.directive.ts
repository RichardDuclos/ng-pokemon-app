import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5'
  private defaultColor: string = '#009688'
  private defaultHeight: number = 180

  @Input('pkmnBorderCard') borderColor: string;

  constructor(private el: ElementRef) {
        this.setHeight(this.defaultHeight);
        this.setBorder(this.initialColor);
        this.setTransition();
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

  setTransition() {
    this.el.nativeElement.style.transition = 'border 0.2s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

}
