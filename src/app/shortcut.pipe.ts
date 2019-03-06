import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(title:string ,length:number): any {
    return title.substr(0,length) + '....';
  }

}
