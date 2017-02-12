import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterTextPipe implements PipeTransform {

  transform(value: any, filterText?: any): any {
    // return name
    let title;
    if (!value) {
      title = '无标题'
    }
    if (value && filterText) {
      title = value.replace(filterText, `<strong class="filter-text">${filterText}</strong>`);
    } else {
      title = value;
    }
    return title;
  }

}
