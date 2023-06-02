import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';

import { GlobalVars } from '../../providers/common/global-vars';
import { ComplianceListComponent } from '../../components/compliance-list/compliance-list'

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html',
})
export class HeaderComponent {
  @Input('master') masterName: string;
  @Input('pageTitle') pageName: string;

  title: string;

  constructor(
    public gv: GlobalVars
  ) {
    console.log('Hello HeaderComponent Component');
  }
  message: string;

  receiveMessage($event) {
    this.message = $event
  }


}
