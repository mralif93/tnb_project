import { Component } from '@angular/core';
import { NotifierService } from "angular-notifier";
/**
 * Generated class for the ToasterNotificationsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toaster-notifications',
  templateUrl: 'toaster-notifications.html'
})
export class ToasterNotificationsComponent {
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    debugger;
    console.log("Enter toaster notification");
    this.notifier = notifierService;
  }
  success() {
    debugger;
    this.notifier.notify("success", "You are awesome! I mean it!");
  }
  failure(type: string, message: string) {
    debugger;
    this.notifier.notify(type, message);
  }

}
