import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: any, sort: boolean): any {
    if (sort) {
      return values.sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
    return values.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x > y) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  }

}
