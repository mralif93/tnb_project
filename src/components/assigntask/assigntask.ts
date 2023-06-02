import { Component, ViewChild } from '@angular/core';
import { NavParams, App, ViewController, AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/common/global-vars';
import { DataServiceProvider } from './../../providers/data-service/data-service';


import { SelectSearchableComponent } from 'ionic-select-searchable';

/**
 * Generated class for the AssigntaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'assigntask',
  templateUrl: 'assigntask.html'
})
export class AssigntaskComponent {

  @ViewChild('myselect') selectComponent: SelectSearchableComponent;

  public wonum: any;
  public laborItem: any;
  public techName: String;
  public items: any;
  public labourId: any = [];
  public labourName: String;

  constructor(
    public appCtrl: App,
    public params: NavParams, 
    private alertCtrl: AlertController,
    public gv: GlobalVars,
    public viewCtrl: ViewController,
    private dataService: DataServiceProvider) {

      this.getFetchDetails();
      debugger;
      this.wonum = '';
      this.items = [];
      this.wonum = params.get('woNum');
      this.items = params.get('attr');
  }

  // Get Labor Details as List...
  getFetchDetails() {

    this.dataService.fetchLaborDetails().then(results => {
    
      var respResult: any = results;
      this.laborItem = respResult.respObject;
      for(var i = 0; i < this.laborItem.length; i++)
        this.laborItem[i].compositeName = this.laborItem[i].laborcode + ' ( ' + this.laborItem[i].ta0laborname + ' ) ';
    });
    debugger;
    this.laborItem;
  }

  // while selecting the laborcode auto populated labor name
  laborCodeChange(value) {

    var laborName = this.getObjects(this.laborItem, "laborcode", this.labourId.laborcode);
    if(typeof laborName[0].ta0laborname !== 'undefined')
      this.techName = laborName[0].ta0laborname;
    else
      this.techName = "";
  }

  // Assign labor code to workorder
  assignTasktoTechnician() {
    
    if(this.labourId.laborcode !== null && typeof (this.labourId.laborcode) !== 'undefined' && this.labourId.laborcode !== '') {

      var woList: any = this.getValues(this.items, "wonum");
      var cont = woList.toString();
      this.dataService.saveAssignTaskToTechnician(cont, this.labourId.laborcode).then(results => {

        var respObject: any = [];
        respObject = results;
        try {

          if(respObject.processStatus === 'success') {
            
            this.displaySuccessMsg("Success", respObject.respObject);
            this.dismiss();
          }
          else {
    
            this.displaySuccessMsg("Failed", respObject.description);
            this.dismiss();
          }
        }
        catch(err) {
          var message = "Due to some internal error save process is not completed.";
          this.displayErrorAlert(message);
        }
      });
    }
    else {
      this.displaySuccessMsg("Warning", "Kindly select the technician Id...");
    }
  }

  // Display Message Function
  displayErrorAlert(message) {

    let alert = this.alertCtrl.create({
      title: 'Alert !',
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
        }
      }]
    });
    alert.present();
  }

  displaySuccessMsg(msgTitle, message) {

    let alert = this.alertCtrl.create({
      title: msgTitle + " !",
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
        }
      }]
    });
    alert.present();
  }

  // Get Object list by using Key and Value..
  getObjects(obj, key, val) {

    var objects = [];
    for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getObjects(obj[i], key, val));    
      } else 
      if (i == key && obj[i] == val || i == key && val == '') { //
        objects.push(obj);
      } 
      else if (obj[i] == val && key == ''){
        if (objects.lastIndexOf(obj) == -1){
          objects.push(obj);
        }
      }
    }
    return objects;
  }

  // Get Values from Key...
  getValues(obj, key) {

    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(this.getValues(obj[i], key));
        } 
        else if (i == key) {
          objects.push(obj[i]);
        }
    }
    return objects;
  }

  dismiss() {
    
    this.viewCtrl.dismiss();
  }
}
