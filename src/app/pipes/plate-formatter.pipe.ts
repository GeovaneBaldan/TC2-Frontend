import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plateFormatter'
})
export class PlateFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
