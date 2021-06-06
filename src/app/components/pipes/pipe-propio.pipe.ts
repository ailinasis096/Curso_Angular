import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePropio'
})
export class PipePropioPipe implements PipeTransform {

  transform(value: string, character: string): string {
    {value.toString().length >140 ? value = value.substring(0,140) + character: value}
    return value.replace(character,"   asd");
  }

}
