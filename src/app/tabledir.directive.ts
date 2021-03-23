import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTabledir]'
})
export class TabledirDirective {

  @HostBinding('style.color') color: string;

  constructor(private _elementRef: ElementRef) {
    //_elementRef.nativeElement.style.color = 'darkblue',
    //  _elementRef.nativeElement.style.backgroundColor = 'yellow';
    //_elementRef.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseover') onMouseOver() {
    this.color = '#0A2033';
    this._elementRef.nativeElement.style.background = 'lightblue';
    this._elementRef.nativeElement.style.fontSize = '25px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = '#0A2033';
    this._elementRef.nativeElement.style.background = '#A9D0F2';
    this._elementRef.nativeElement.style.fontSize = '20px';
  }

}
