import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

//Import Provider File
import { GlobalFunction } from '../../providers/common/global-function';
import { GlobalVars } from '../../providers/common/global-vars';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public loadingCtrl: LoadingController,
    public gv: GlobalVars,
    public gf: GlobalFunction) {
  }

  /**
   * Page Loader...
   */
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.gf.loadingTimer(loader);
  }
}
