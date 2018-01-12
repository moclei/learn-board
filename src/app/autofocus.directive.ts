import {Directive, Input, ElementRef, Renderer, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {
  @Input() appAutofocus: boolean;
  private el: any;
  constructor(
    private elementRef:ElementRef,
  ) {
    this.el = this.elementRef.nativeElement;

  }
  ngOnInit(){
    Observable.interval(500).subscribe(x => {
      this.el.focus();
    });
  }
}
