import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})

// Great a pipe to control in string length

export class ShortcutPipe implements PipeTransform {

  transform(title:string ,length:number): any {
    return title.substr(0,length) + '....';
  }

}
