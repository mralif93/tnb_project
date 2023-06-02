import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../../../providers/data-service/data-service';

/**
 * Generated class for the SealTeamMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-team-members',
  templateUrl: 'seal-team-members.html',
})
export class SealTeamMembersPage {

  item: any;
  itemsOri: any;

  listOfMembers: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider) {
    // Getting value list of members
    this.getLabourDetails();

    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealTeamMembersPage');
  }


  getLabourDetails() {
    this.dataService.fetchLaborDetails().then(results => {

      var respResult: any = results;
      this.listOfMembers = respResult.respObject;
      for (var i = 0; i < this.listOfMembers.length; i++)
        this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
    });
  }

}
