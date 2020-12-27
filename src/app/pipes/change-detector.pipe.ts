import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'changeDetector',
  pure: false
})
export class ChangeDetectorPipe implements PipeTransform {
  count = 0;

  transform(value: any, args?: any): any {
    this.count++;
    console.log(`Licznik uruchomień wykrywania zmian komponentu ${this.count}`);

    return value;
  }

}
