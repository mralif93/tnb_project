import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AttachmentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'photo',
})
export class AttachmentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any[]) {
    if (typeof (value) !== 'undefined') {
      let filterItem: any = value.filter(item => item.describedBy.docType === "AI" || item.describedBy.docType === "RI" || item.describedBy.docType === "PI");
      return filterItem;
    }
  }
}
