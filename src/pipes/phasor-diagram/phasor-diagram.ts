import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PhasorDiagramPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'phasorDiagram',
})
export class PhasorDiagramPipe implements PipeTransform {

  transform(value: any[]) {
    if (typeof (value) !== 'undefined') {
      let filterItem: any = value.filter(item => item.describedBy.docType === "PD" || item.describedBy.docType === "DD");
      return filterItem;
    }
  }
}
