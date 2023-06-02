import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // Itera sobre todos los atributos del objeto
      for (const key in item) {
        if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
          const value = item[key].toLowerCase();
          if (value.includes(searchText)) {
            return true;
          }
        }
      }
      return false;
    });
  }

}
