import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (value != null) {
      value = value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
      console.log(value);
    }
    return value;
  }

}
