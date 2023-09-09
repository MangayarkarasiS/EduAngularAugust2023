import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {
 
  transform(value: number): number {
    return value*value;
  }

}
