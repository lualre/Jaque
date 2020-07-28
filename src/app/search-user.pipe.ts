import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: any[], keyword: any, properties: string[]): any[] {
    if (!items) { return []; }
    if (!keyword) { return items; }
    return items.filter(item => {
      let itemFound: boolean;
      let i = 0;
      for (const iterator of properties) {
        if (item[properties[i]].toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
          itemFound = true;
          break;
        }
        i++;
      }
      return itemFound;
    });

  }
}

