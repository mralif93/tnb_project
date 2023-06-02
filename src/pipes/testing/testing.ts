import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
/**
 * Generated class for the TestingPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortPeople',
})
export class TestingPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  /*   transform(value: string, ...args) {
      return value.toLowerCase();
    }
   */
  transform(value: any[], by: string, direction: "asc" | "desc"): any[] {
    debugger;
    value = _.orderBy(value, [by], direction);
    return value;
  }
}
