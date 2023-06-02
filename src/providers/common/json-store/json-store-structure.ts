
/// <reference path="../../../../plugins/cordova-plugin-mfp-jsonstore/typings/jsonstore.d.ts" />
/// <reference path="../../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GlobalVars } from "../../../providers/common/global-vars";

/*
  Generated class for the JsonStoreStructureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var WL;

@Injectable()
export class JsonStoreStructureProvider {

  constructor(public http: HttpClient, public gv: GlobalVars) {
    console.log('Hello JsonStoreStructureProvider Provider');
  }

  // init the workorder for LPC 
  initLpcWorkOrder() {    
    let collections = {
      LPCWORKORDER: {

        searchFields: { ta0sncode: 'string', worktype: 'string', wonum: 'string', ta0favourite: 'string', status: 'string', ta0bcrmnum: 'number', siteid: 'string', reportdate: 'string', woeq13: 'string' },

        ta0favourite: 'string',
        workorderid: 'number',
        actfinish: 'string',
        actstart: 'string',
        woeq13: 'string',
        ta0customertype: 'string',
        ta0anomalymain: 'string',
        ta0sourcecode: 'string',
        ta0anomalycategory: 'string',
        ta0correctivecode: 'string',
        ta0plandiscondate: 'string',
        ta0disconnectiondoc: 'string',
        ta0initprev: [{
          ta0initprevcode: 'string',
          description: 'string'
        }],
        ta0anomalytype: 'string',
        ta4premisetyperemarks: 'string',
        ta4correctiveactionremarks: 'string',
        // Created by Alif (28.11.2019)
        ta0contractorname: 'string',
        ta0contractorphonenum: 'string',
        assignment: [{
          changeby: 'string',
          changedate: 'string',
          craft: 'string',
          finishdate: 'string',
          laborcode: 'string',
          laborhrs: 'string',
          orgid: 'string',
          scheduledate: 'string',
          siteid: 'string',
          skilllevel: 'string',
          startdate: 'string',
          status: 'string',
          vendor: 'string',
          wonum: 'string',
          workdate: 'string',
        }],
        changeby: 'string',
        changedate: 'string',
        description: 'number',
        doclinks: [{
          href: 'string',
          tnb_testtype: 'string',
          tnb_feeder: 'string',
          localref: 'string',
          describedBy: {
            docinfoid: 'any',
            docType: 'string',
            addinfo: 'boolean',
            changeby: 'string',
            createby: 'string',
            copylinktowo: 'boolean',
            show: 'boolean',
            format: {
              label: 'string',
              href: 'string',
            },
            getlatestversion: 'boolean',
            ownerid: 'any',
            printthrulink: 'boolean',
            urlType: 'string',
            upload: 'string',
            attachmentSize: 'any',
            modified: 'string',
            title: 'string',
            created: 'string',
            description: 'string',
            fileName: 'string',
            ownertable: 'string',
            tnb_delete: 'boolean',
            href: 'string',
            identifier: 'string',
          }
        }],
        estdur: 'string',
        wolo10: 'string',
        wolo1: 'string',
        estlabhrs: 'string',
        hasfollowupwork: 'boolean',
        location: 'string',
        orgid: 'string',
        origrecordclass: 'string',
        origrecordid: 'string',
        owner: 'string',
        parent: 'string',
        phone: 'number',
        reportdate: 'string',
        reportedby: 'number',
        schedfinish: 'string',
        schedstart: 'string',
        siteid: 'string',
        sneconstraint: 'string',
        status: 'string',
        statusdate: 'string',
        supervisor: 'string',
        ta0accountnum: 'number',
        ta0bcrmnum: 'number',
        ta0billingclass: 'number',
        ta0bpname: 'number',
        ta0bptenantname: 'number',
        ta0configcode: 'number',
        ta0devicelocation: 'number',
        ta0elementnum: 'number',
        ta0feeder: [{
          description: 'string',
          orgid: 'string',
          siteid: 'string',
          ta0feedercode: 'string',
          ta0feederid: 'number',
          wonum: 'string',
          _rowstamp: 'integer',
          localref: 'string',
          href: 'string',
          multiAssetLocci: [{
            assetnum: 'string',
            location: 'string',
            movetobin: 'number',
            movetolocation: 'string',
            movetoparent: 'string',
            movetosite: 'string',
            orgid: 'string',
            recordclass: 'string',
            recordkey: 'string',
            siteid: 'string',
            ta0feedercode: 'string',
            ta0feederdescription: 'string',
            ta0estimatedreading: 'number',
            ta0estimatedreadingdate: 'string',
            ta0existingdevice: 'boolean',
            ta0feederid: 'integer',
            ta0installind: 'boolean',
            ta0reading: 'number',
            ta0removeind: 'boolean',
            ta0replaceind: 'boolean',
            ta0wrgmtrind: 'boolean',
            ta0controllingdevice: 'string',
            targetdesc: 'number',
            changeby: 'string',
            changedate: 'string',
            description: 'string',
            devicetype: 'string',
            href: 'string',
            itemnum: 'string',
            itemsetid: 'string',
            itemtype: 'string',
            modelid: 'number',
            moved: 'boolean',
            serialnum: 'string',
            status: 'number',
            statusdate: 'string',
            ta0amcg: 'number',
            ta0ami: 'number',
            ta0ams: 'number',
            ta0currentratio: 'number',
            ta0functionclass: 'number',
            ta0manufacturer: 'number',
            ta0mf: 'number',
            ta0registers_collectionref: 'string',
            ta0registergroup: 'string',
            ta0description: 'string',
            ta0bcrmuploadindicator: 'string',
            ta0simcardip: 'number',
            ta0userstatus: 'string',
            ta0voltageratio: 'number',
            warrantyexpdate: 'string',
            _rowstamp: 'string',
            asset: [{
              assetnum: 'string',
              changeby: 'string',
              changedate: 'string',
              description: 'string',
              devicetype: 'string',
              href: 'string',
              itemnum: 'string',
              itemsetid: 'string',
              itemtype: 'string',
              location: 'string',
              modelid: 'number',
              moved: 'boolean',
              orgid: 'string',
              serialnum: 'string',
              siteid: 'string',
              status: 'number',
              statusdate: 'string',
              ta0amcg: 'number',
              ta0ami: 'number',
              ta0ams: 'number',
              ta0currentratio: 'number',
              ta0functionclass: 'number',
              ta0manufacturer: 'number',
              ta0mf: 'number',
              ta0reading: 'number',
              ta0registers_collectionref: 'string',
              ta0registergroup: 'string',
              ta0simcardip: 'number',
              ta0userstatus: 'string',
              ta0voltageratio: 'number',
              warrantyexpdate: 'string',
              _rowstamp: 'string',
              loc_asset_changeValue: 'string',
              loc_asset_haveChange: 'boolean',
              loc_asset_changeType: 'string',
            }],
            ta0testdetail: [{
              assetnum: 'string',
              description: 'number',
              orgid: 'string',
              siteid: 'string',
              ta0at_avg: 'number',
              ta0at_test1: 'number',
              ta0at_test2: 'number',
              ta0at_test3: 'number',
              ta0at_test4: 'number',
              ta0at_test5: 'number',
              ta0at_test6: 'number',
              ta0at_test7: 'number',
              ta0at_test8: 'number',
              ta0at_test9: 'number',
              ta0at_test10: 'number',
              ta0existingdevice: 'boolean',
              ta0feederid: 'integer',
              ta0na: 'boolean',
              ta0naremarks: 'number',
              ta0pc_contctpt_r: 'boolean',
              ta0pc_contctpt_y: 'boolean',
              ta0pc_ctpolar_b: 'boolean',
              ta0pc_ctpolar_r: 'boolean',
              ta0pc_ctpolar_y: 'boolean',
              ta0pc_ctratio_b: 'boolean',
              ta0pc_ctratio_r: 'boolean',
              ta0pc_ctratio_y: 'boolean',
              ta0pc_kio_wirg: 'boolean',
              ta0pc_nseaptpas: 'boolean',
              ta0pc_ptpolar: 'boolean',
              ta0pc_s2_starerh: 'boolean',
              ta0ph_rotation: 'number',
              ta0pingtest: 'boolean',
              ta0pr_active_b: 'number',
              ta0pr_active_r: 'number',
              ta0pr_active_total: 'number',
              ta0pr_active_y: 'number',
              ta0pr_pf_b: 'number',
              ta0pr_pf_r: 'number',
              ta0pr_pf_total: 'number',
              ta0pr_pf_y: 'number',
              ta0pr_reactive_b: 'number',
              ta0pr_reactive_r: 'number',
              ta0pr_reactive_total: 'number',
              ta0pr_reactive_y: 'number',
              ta0testdetailid: 'integer',
              ta0testtype: 'string',
              ta0vi_arm_cabel_visible: 'boolean',
              ta0vi_ct_polarity_label: 'boolean',
              ta0vi_pt_polarity_label: 'boolean',
              ta0vr_be: 'number',
              ta0vr_bn: 'number',
              ta0vr_rb: 'number',
              ta0vr_re: 'number',
              ta0vr_rn: 'number',
              ta0vr_ry: 'number',
              ta0vr_yb: 'number',
              ta0vr_ye: 'number',
              ta0vr_yn: 'number',
              wonum: 'string',
              loc_test_changeValue: 'string',
              loc_test_haveChange: 'boolean',
              loc_test_changeType: 'string',
            }],
            ta0registers: [{

              assetnum: 'string',
              href: 'string',
              localref: 'string',
              orgid: 'string',
              siteid: 'string',
              ta0dialafter: 'number',
              ta0dialbefore: 'number',
              ta0registerfactor: 'number',
              ta0registergroup: 'number',
              ta0registernum: 'number',
              ta0registersid: 'integer',
              ta0registertype: 'number',
              ta0registertypedesc: 'number',
              ta0proposedreading: 'number',
              ta0uom: 'number',
              _rowstamp: 'string',

              loc_reg_changeValue: 'string',
              loc_reg_haveChange: 'boolean',
              loc_reg_changeType: 'string',

              ta0meterreading: [{

                loc_reading_changeValue: 'string',
                loc_reading_haveChange: 'boolean',
                loc_reading_changeType: 'string',
              }]
            }],
            sealinfo: [{
              ta0sealnum: 'number',
              ta0seallocation: 'string',

              loc_seal_changeValue: 'string',
              loc_seal_haveChange: 'boolean',
              loc_seal_changeType: 'string',
            }],
            stickerinfo: [{
              ta0stickernum: 'number',
              ta0stickerlocation: 'string',

              loc_sticker_changeValue: 'string',
              loc_sticker_haveChange: 'boolean',
              loc_sticker_changeType: 'string',
            }],
            loc_multi_changeValue: 'string',
            loc_multi_haveChange: 'boolean',
            loc_multi_changeType: 'string',
          }],

          // local variable.
          loc_feeder_changeValue: 'string',
          loc_feeder_haveChange: 'boolean',
          loc_feeder_changeType: 'string',
        }],
        ta0feedernum: 'number',
        ta0installationnum: 'number',
        ta0installationservice: 'string',
        ta0installationvoltage: 'number',
        ta0key: 'number',
        ta0lastbilldate: 'string',
        ta0mru: 'number',
        ta0newmaxdemand: 'number',
        ta0newvoltage: 'number',
        ta0newwindinggroup: 'number',
        ta0polenum: 'number',
        ta0premisetype: 'number',
        ta0ratecategory: 'number',
        ta0remarks: 'string',
        ta0serviceflag: 'boolean',
        ta0signalstrength: 'number',
        ta0sncode: 'string',
        ta0sntype: 'number',
        ta0subsoindicator: 'boolean',
        ta0userstatus1: 'string',
        ta0userstatus2: 'string',
        ta0userstatus3: 'string',
        ta0userstatus4: 'string',
        ta0workcentervoltage: 'number',
        vendor: 'string',
        woclass: 'string',
        wonum: 'string',
        wopriority: 'integer',
        worklocation: 'string',
        worktype: 'string',
        woserviceaddress: [{
          addressline2: 'number',
          addressline3: 'number',
          city: 'string',
          country: 'string',
          description: 'number',
          formattedaddress: 'string',
          latitudey: 'number',
          longitudex: 'number',
          orgid: 'string',
          postalcode: 'number',
          regiondistrict: 'number',
          siteid: 'string',
          stateprovince: 'string',
          streetaddress: 'number',
          wonum: 'string'
        }],

        loc_wo_changeValue: 'string',
        loc_wo_haveChange: 'boolean',
        loc_wo_changeType: 'string',

        ta0srnum: "string",
        ta0crmdoctype: "string",
        ta0billingind: "string"

      }
    }

    //console.log(JSON.stringify(collections));
    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }

      WL.JSONStore.init(collections, options).then((success) => { 
        console.log('>JsonStoreStructureProvider >>initLpcWorkOrder >>>jsonstore LpcWorkOrder init success');      
        resolve('success');
      },
      (failure) => {          
        console.log('>JsonStoreStructureProvider >>initLpcWorkOrder >>>jsonstore LpcWorkOrder init failure');      
        resolve('failure');
      });
    });
  }

  initcreditNote() {

    let collections = {

      CREDITNOTE: {

        searchFields: { creditnum: 'string' },

        changedate: 'string',
        creditnum: 'string',
        status_description: 'string',
        statusdate: 'string',
        status: 'string',
        changeby: 'string',
        category_description: 'string',
        ta0cnline: [
          {
            ta0cnlineid: 'string',
            _rowstamp: 'string',
            orgid: 'string',
            cnlinenum: 'string',
            iswarranty: 'string',
            localref: 'string',
            href: 'string',
          }
        ],
        returntype_description: 'string',
        returntype: 'string',
        ta0creditnoteid: 'string',
        _rowstamp: 'string',
        category: 'string',
        orgid: 'string',
        siteid: 'string',
        ta0cnline_collectionref: 'string',
        href: 'string'
      }
    }
    console.log(JSON.stringify(collections));
    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }

      WL.JSONStore.init(collections, options).then((success) => {        
        console.log('>JsonStoreStructureProvider >>initcreditNote >>>jsonstore creditNote init success');      
        resolve('success');
      },
      (failure) => {    
        console.log('>JsonStoreStructureProvider >>initcreditNote >>>jsonstore creditNote init failure');      
        resolve('failure');
      });
    });
  }

  initWoNumActive() {

    let collections = {
      WONUMACTIVE: {
        searchFields: { wonum: 'string' },
        wonum: 'string'
      }
    }
    console.log(JSON.stringify(collections));
    return new Promise(resolve => {
      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }

      WL.JSONStore.init(collections, options).then((success) => {        
        console.log('>JsonStoreStructureProvider >>initWoNumActive >>>jsonstore initWoNumActive init success');      
        resolve('success');
      }, (failure) => {        
        console.log('>JsonStoreStructureProvider >>initWoNumActive >>>jsonstore initWoNumActive init failure');      
        resolve('failure');
      });
    });
  }

  /*   initDocLinks() {
      let collections = {
        WoDocLinks: {
          searchFields: { wonum: 'string' },
  
          wonum: 'string',
          href: 'string',
          localref: 'string',
          describedBy: {
            docinfoid: 'an',
            docType: 'string',
            addinfo: 'boolean',
            changeby: 'string',
            createby: 'string',
            copylinktowo: 'boolean',
            show: 'boolean',
            format: {
                label: 'string',
                href: 'string',
            },
            getlatestversion: 'boolean',
            ownerid: 'any',
            printthrulink: 'boolean',
            urlType: 'string',
            upload: 'string',
            attachmentSize: 'any',
            modified: 'string',
            title: 'string',
            created: 'string',
            description: 'string',
            fileName: 'string',
            ownertable: 'string',
            tnb_delete: 'boolean',
            href: 'string',
            identifier: 'string',
          }
        }
      }
      console.log(JSON.stringify(collections));
      return new Promise(resolve => {
        WL.JSONStore.init(collections).then((success) => {
          console.log(' --> jsonstore AlnDomain init success ');
          resolve('success');
        }, (failure) => {
          console.log(' -->  AlnDomain init failure ..');
          resolve('failure');
        });
      });
    } */

  initAlnDomain() {
    let collections = {
      ALNDOMAIN: {
        searchFields: { domainid: 'string' },
        _rowstamp: 'string',
        alndomainid: 'number',
        description: 'string',
        value: 'string',
        domainid: 'string',
        ta0reporting: 'string',
        ta0ermszone: 'string',
        href: 'string',
      }
    }
    //console.log(JSON.stringify(collections));
    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }

      WL.JSONStore.init(collections, options).then((success) => {
        console.log('>JsonStoreStructureProvider >>initAlnDomain >>>jsonstore AlnDomain init success');
        resolve('success');
      }, (failure) => {
        console.log('>JsonStoreStructureProvider >>initAlnDomain >>>jsonstore AlnDomain init failure');
        resolve('failure');
      });
    });
  }

  initAssetDetails() {

    debugger;
    let collections = {
      ASSETDETAILS:  //(Asset) 
      {
        searchFields: { serialnum: 'string', assetnum: 'string', siteid: 'string', ta0functionclass: 'string', status: 'string', ta0devicevoltage: 'string' },

        assetnum: 'string',
        changeby: 'string',
        changedate: 'string',
        description: 'string',
        devicetype: 'string',
        href: 'string',
        itemnum: 'string',
        itemsetid: 'string',
        itemtype: 'string',
        location: 'string',
        modelid: 'number',
        moved: 'boolean',
        orgid: 'string',
        serialnum: 'string',
        siteid: 'string',
        status: 'number',
        statusdate: 'string',
        ta0amcg: 'number',
        ta0ami: 'number',
        ta0ams: 'number',
        ta0currentratio: 'number',
        ta0functionclass: 'string',
        ta0manufacturer: 'number',
        ta0mf: 'number',
        ta0reading: 'number',
        ta0registers_collectionref: 'string',
        ta0registergroup: 'string',
        ta0allocationtype: 'string',
        ta0devicevoltage: 'string',
        ta0registers: [{

          assetnum: 'string',
          href: 'string',
          localref: 'string',
          orgid: 'string',
          siteid: 'string',
          ta0dialafter: 'number',
          ta0dialbefore: 'number',
          ta0registerfactor: 'number',
          ta0registergroup: 'number',
          ta0registernum: 'number',
          ta0registersid: 'integer',
          ta0registertype: 'number',
          ta0registertypedesc: 'number',
          ta0proposedreading: 'number',
          ta0uom: 'number',
          _rowstamp: 'string',
        }],
        ta0simcardip: 'number',
        ta0userstatus: 'string',
        ta0voltageratio: 'number',
        warrantyexpdate: 'string',
        _rowstamp: 'string'
      }
    }
    debugger;
    //console.log('asset init : ' + JSON.stringify(collections));
    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }

      WL.JSONStore.init(collections, options).then((success) => {        
        console.log('>JsonStoreStructureProvider >>initAssetDetails >>>jsonstore AssetDetails init success');
        resolve('success');
      },
      (failure) => {
        console.log('>JsonStoreStructureProvider >>initAssetDetails >>>jsonstore AssetDetails init failure');
        resolve('failure');
      });
    });
  }

  // User Details... 
  initUserDetails() {

    let collections = {

      USERDETAILS: {

        searchFields: { personid: 'string', employeetype: 'string', supervisor: 'string', userid: 'string' },

        person: [{
          _rowstamp: 'string',
          status_description: 'string',
          supervisor: 'string',
          status: 'string',
          personid: 'string',
          localref: 'string',
          employeetype: 'string',
          href: 'string',
          employeetype_description: 'string',
        }],
        defsite: 'string',
        userid: 'string',
        loginid: 'string',
        type: 'string',
        groupuser: [{
          siteauth_collectionref: 'string',
          _rowstamp: 'string',
          localref: 'string',
          groupname: 'string',
          href: 'string',
          siteauth: [{
            _rowstamp: 'string',
            localref: 'string',
            siteid: 'string',
            href: 'string',
          }],
        }],
        defstoreroom: 'string',
        _rowstamp: 'string',
        emailpswd: 'boolean',
        person_collectionref: 'string',
        groupuser_collectionref: 'string',
        personid: 'string',
        type_description: 'string',
        href: 'string'
      }
    }

    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }
      WL.JSONStore.init(collections, options).then((success) => {
        console.log('>JsonStoreStructureProvider >>initUserDetails >>>jsonstore UserDetails init success');      
        resolve('success');
      },
        (failure) => {
          console.log('>JsonStoreStructureProvider >>initUserDetails >>>jsonstore UserDetails init failure');
          resolve('failure');
        });
    });
  }

  /**
   * Edited: Ameer (25/9/2019)
   * Description: Add Zone load data
   */
  initMasterDataLoad() {

    let userStatus = {
      USERSTATUS: {
        searchFields: { worktype: 'string' },

        description: 'string',
        localref: 'string',
        worktype: 'string',
        ta0kiv: 'string',
        _rowstamp: 'string',
        href: 'string'
      }
    }

    let snCode = {
      SNCODE: {
        searchFields: { worktype: 'string', ta0sncode: 'string' },

        ta0sntypedesc: 'string',
        ta0sncodedesc: 'string',
        ta0sntype: 'string',
        localref: 'string',
        worktype: 'string',
        ta0sncode: 'string',
        _rowstamp: 'string',
        href: 'string'
      }
    }

    let windingGroup = {
      WINDINGGROUP: {
        searchFields: { ta0transformertype: 'string' },

        description: 'string',
        ta0transformertype: 'string',
        ta0windinggroup: 'string',
        localref: 'string',
        _rowstamp: 'string',
        href: 'string'
      }
    }

    let zone = {
      ZONE: {
        searchFields: { siteid: 'string', description: 'string', ta0zone: 'string' },
        _rowstamp: 'string',
        description: 'string',
        siteid: 'string',
        localref: 'string',
        ta0shiftnum: 'string',
        ta0zone: 'string',
        ta0zoneid: 'string',
        href: 'string'
      }
    }

    let amiData = {
      AMIDATA: {
        searchFields: { ta0ami: 'string', ta0ams: 'string' },

        ta0amcg: 'string',
        ta0ams: 'string',
        ta0ami: 'string',
        localref: 'string',
        _rowstamp: 'string',
        href: 'string'
      }
    }

    let materialData = {

      MATERIALDATA: {
        searchFields: { ta0materialnum: 'string', ta0devicephaseind: 'string' },

        ta0materialnum: 'string',
        description: 'string',
        ta0devicephaseind: 'string',
      }
    }

    let customerData = {

      CUSTOMERDATA: {
        searchFields: { anomalycategory: 'string', anomalytype: 'string', anomalymain: 'string', customertype: 'string', worktype: 'string' },

        anomalycategory: 'string',
        anomalytype: 'string',
        anomalymain: 'string',
        customertype: 'string',
        worktype: 'string'
      }
    }

    let executive = {
      TA4SEALEXECUTIVE: {
        searchFields: { department: 'string', userid: 'string', zone: 'string' },
        _rowstamp: 'string',
        department: 'string',
        name: 'string',
        signature: 'string',
        ta4sealexecutiveid: 'string',
        userid: 'string',
        zone: 'string',
        position: 'string',
        href: 'string'
      }
    }

    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }

      WL.JSONStore.init(userStatus, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });

      WL.JSONStore.init(snCode, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });


      WL.JSONStore.init(windingGroup, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });


      WL.JSONStore.init(amiData, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });

      WL.JSONStore.init(zone, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });

      WL.JSONStore.init(materialData, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });

      WL.JSONStore.init(customerData, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });

      WL.JSONStore.init(executive, options).then((success) => {
        resolve('success');
      },
        (error) => {
          resolve('failure');
        });
    });
  }

  /**
   * Edited: Andy (28/02/2020)
   * Description: Executive list structure
   */
  initExecutiveList() {
    let collections = {
      TA4SEALEXECUTIVE: {
        searchFields: { department: 'string', userid: 'string', zone: 'string' },
        _rowstamp: 'string',
        department: 'string',
        name: 'string',
        signature: 'string',
        ta4sealexecutiveid: 'string',
        userid: 'string',
        zone: 'string',
        position: 'string',
        href: 'string'
      }
    }

    return new Promise(resolve => {

      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }
      WL.JSONStore.init(collections, options).then(
        (success) => {          
          console.log('>JsonStoreStructureProvider >>initExecutiveList >>>jsonstore Executive init success');      
          resolve('success');
        },
        (failure) => {          
          console.log('>JsonStoreStructureProvider >>initExecutiveList >>>jsonstore Executive init failure');      
          resolve('failure');
        });
    });
  }

  /**
   * Description  : Team Members list structure
   * Created      : 06.03.2020
   */
  initTeamMemberList() {
    let collections = {
      TA4MEMBERS: {
        searchFields: { laborcode: 'string' },
        _rowstamp: 'string',
        skilllevel: 'string',
        rate: 'number',
        inherit: 'boolean',
        craft: 'string',
        personuid: 'string',
        laborcraftrateid: 'number',
        defaultcraft: 'boolean',
        calnum: 'string',
        status_description: 'string',
        status: 'string',
        labor: 'string',
        displayname: 'string',
        ta0laborname: 'string',
        labor_collectionref: 'string',
        href: 'string',
        orgid: 'string',
        laborcode: 'string',
        personid: 'string'
      }
    }

    return new Promise(resolve => {
      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }
      WL.JSONStore.init(collections, options).then(
        (success) => {          
          console.log('>JsonStoreStructureProvider >>initTeamMemberList >>>jsonstore Team Member List init success');      
          resolve('success');
        },
        (failure) => {          
          console.log('>JsonStoreStructureProvider >>initTeamMemberList >>>jsonstore Team Member List init failure');      
          resolve('failure');
        });
    });
  }

  /**
   * Description  : Team Members list structure
   * Created      : 06.03.2020
   */
  initSiteIDList() {
    let collections = {
      SITEID: {
        "_rowstamp": "string",
        "siteuid": "number",
        "enterby": "string",
        "enterdate": "string",
        "changeby": "string",
        "description": "string",
        "active": "boolean",
        "siteid": "string",
        "plusgopenomuid": "number",
        "changedate": "string",
        "href": "string",
        "orgid": "TNB",
        "indstrydesc":"string"
      }
    }

    return new Promise(resolve => {
      let options = {
        username: this.gv.loginUserId,
        password: this.gv.password,
        localKeyGen: true
      }
      WL.JSONStore.init(collections, options).then(
        (success) => {
          console.log('>JsonStoreStructureProvider >>initSiteIDList >>>jsonstore Site ID List init success');      
          resolve('success');
        },
        (failure) => {          
          console.log('>JsonStoreStructureProvider >>initSiteIDList >>>jsonstore Site ID List init failure');      
          resolve('failure');
        });
    });
  }

}
