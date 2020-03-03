import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private vc: ViewContainerRef,
    private tr: TemplateRef<any>

  ) { }


  @Input() set appDelay(time) {
    let delayTimeout = setTimeout(() => {
      clearTimeout(delayTimeout);
      this.vc.createEmbeddedView(this.tr);

    }, time);
  }

}
