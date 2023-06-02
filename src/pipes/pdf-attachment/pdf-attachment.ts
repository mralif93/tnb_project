import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PdfAttachmentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pdfAttachment',
})
export class PdfAttachmentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any[]) {
    if (typeof (value) !== 'undefined') {
      let filterItem: any = value.filter(item => item.describedBy.docType === "CF");
      return filterItem;
    }
  }
}
