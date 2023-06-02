import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Domains } from '../../../../pojo/commonEnum/Domains';
import { JsonStoreCrudProvider } from "../../../../providers/common/json-store/json-store-crud";
import { SoTypes } from '../../../../pojo/commonEnum/SoTypes';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { FeederDetails } from '../../../../pojo/FeederDetails';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { GlobalFunction } from '../../../../providers/common/global-function';


/**
 * Generated class for the SealPhotoAttachmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-photo-attachment',
  templateUrl: 'seal-photo-attachment.html',
})
export class SealPhotoAttachmentPage {
  pageTitle = 'Attachment';
  item;
  attachment;
  segmentSection: string = "Image";

  private optionFeeder = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jsonStore: JsonStoreCrudProvider,
    private gv: GlobalVars,
    private gf: GlobalFunction,
  ) {
  }

  ionViewWillEnter() {
    debugger;
    let wonum = this.navParams.get("wonum");
    var queryPart = WL.JSONStore.QueryPart().equal("wonum", wonum);
    this.jsonStore.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {
      console.info("result Message: ", result);
      this.item = result[0];
      this.findFeederDetails(this.item);
      this.attachment = this.item.json.docLinksL;
      this.attachment.forEach(imageHref => {
        imageHref.href + '?_lid=' + this.gv.username + '&_lpwd=' + this.gv.password;
      });
      console.table(this.attachment);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealPhotoAttachmentPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  findFeederDetails(item: any) {
    let feeder: any;
    let feeder_id_code_exist = [];
    let feeder_id_code_new = [];


    // Checking total feeder for ZISP
    if (item.json.worktype === SoTypes.ZISP || (item.json.worktype === SoTypes.ZIST && item.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
      // Checking Feeder is exist or not
      if (typeof (item.json.ta0feeder) !== "undefined" && item.json.ta0feeder !== null && item.json.ta0feeder !== "") {
        feeder = Number(item.json.ta0feeder.length);

        var mainDevice = [];
        var nMainDevice = [];

        for (var k = 0; k < item.json.ta0feeder.length; k++) {
          // Reset Available Data
          var fci_e = null, fci_n = null;

          // Checking Feeder exist or not
          if (typeof (item.json.ta0feeder[k].multiassetlocci) !== "undefined" && item.json.ta0feeder[k].multiassetlocci !== null && item.json.ta0feeder[k].multiassetlocci !== "") {

            // Collect device which is mvhv..
            var mDevice = item.json.ta0feeder[k].multiassetlocci.find((itemVal) => {
              if (itemVal.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && itemVal.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) {
                fci_e = item.json.ta0feeder[k];
              }
              return itemVal.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && itemVal.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
            });

            if (typeof (mDevice) !== "undefined") {
              mainDevice.push(mDevice);
            }

            if (typeof (fci_e) !== "undefined" && fci_e !== null && fci_e !== "") {
              feeder_id_code_exist.push(fci_e);
            }

            var nmDevice = item.json.ta0feeder[k].multiassetlocci.find((itemVal) => {
              if (itemVal.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && itemVal.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
                fci_n = item.json.ta0feeder[k];
              }
              return itemVal.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && itemVal.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
            });

            if (typeof (nmDevice) !== "undefined") {
              nMainDevice.push(nmDevice);
            }

            if (typeof (fci_n) !== "undefined" && fci_n !== null && fci_n !== "") {
              feeder_id_code_new.push(fci_n);
            }
          }
        }

        mainDevice.sort(this.gf.dynamicSort("ta0allocationtype"));
        nMainDevice.sort(this.gf.dynamicSort("ta0allocationtype"));

        if (item.json.worktype === SoTypes.ZISP) {
          feeder = mainDevice;
        } else {
          feeder = nMainDevice;
        }

        for (var a = 0; a < feeder.length; a++) {

          if (mainDevice.length > 0) {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = feeder_id_code_exist[a].ta0feederid + "B";
            feederVal.description = feeder[a].ta0serialnum;
            feederVal.ta0feedercode = " (Before)";
            this.optionFeeder.push(feederVal);
          }

          if (nMainDevice.length > 0) {
            if (item.json.worktype === SoTypes.ZIST) {
              var feederVal: any;
              feederVal = new FeederDetails();
              feederVal = {};
              feederVal.ta0feederid = feeder_id_code_new[a].ta0feederid + "A";
              feederVal.description = nMainDevice[a].ta0serialnum;
              feederVal.ta0feedercode = " (After)";
              this.optionFeeder.push(feederVal);
            } else {
              if (mainDevice[a].ta0replaceind == true) {
                var feederVal: any;
                feederVal = new FeederDetails();
                feederVal = {};
                feederVal.ta0feederid = feeder_id_code_new[a].ta0feederid + "A";
                feederVal.description = nMainDevice[a].ta0serialnum;
                feederVal.ta0feedercode = " (After)";
                this.optionFeeder.push(feederVal);
              }
            }
          } else {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = feeder_id_code_exist[a].ta0feederid + "A";
            feederVal.description = feeder[a].ta0serialnum;
            feederVal.ta0feedercode = " (After)";
            this.optionFeeder.push(feederVal);
          }

        }

        if (item.json.worktype === SoTypes.ZISP) {
          if (mainDevice.length === 0) {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = null;
            feederVal.description = "MVHV Meter is not available.";
            feederVal.ta0feedercode = "";
            this.optionFeeder.push(feederVal);
          }
        } else {
          if (nMainDevice.length === 0) {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = null;
            feederVal.description = "MVHV Meter is not available.";
            feederVal.ta0feedercode = "";
            this.optionFeeder.push(feederVal);
          }
        }

      } else {
        var feederVal: any;
        feederVal = new FeederDetails();
        feederVal = {};
        feederVal.ta0feederid = null;
        feederVal.description = "No Feeder is available.";
        feederVal.ta0feedercode = "";
        this.optionFeeder.push(feederVal);
      }
    }
  }

  saveAttachment() {

  }

  deletePhoto(href: string) {

  }
}
