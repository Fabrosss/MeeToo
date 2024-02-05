import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  Validator,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appFirstLetter]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FirstLetterDirective,
      multi: true,
    },
  ],
})
export class FirstLetterDirective implements Validator {
  @Input('appFirstLetter') firstLetter = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const forbidden = !new RegExp('[a-zA-Z]', 'i').test(control.value[0]);
      return forbidden ? { firstLetter: { value: control.value } } : null;
    }
    return null;
  }
}
