import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traducirBool'
})
export class TraducirBoolPipe implements PipeTransform {

  transform(value: any): any {
    return value ? 'Si' : 'No';;
  }

}
