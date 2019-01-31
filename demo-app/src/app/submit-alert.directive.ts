import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubmitAlert]'
})
export class SubmitAlertDirective {

  constructor() { }

  @HostListener('click')
  onclick() {
    alert('The value will be applied into service');
  }

}
