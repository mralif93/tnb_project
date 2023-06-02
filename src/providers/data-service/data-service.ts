/// <reference path="../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { GlobalVars } from "../common/global-vars";

declare var WL;

@Injectable()
export class DataServiceProvider {
  data: any;
  executiveData: any;
  requestStatus: any;

  constructor(
    public http: Http,
    public gv: GlobalVars) {
  }

  /**
   * Get Header Details Work Order Latest
   * @param wonum 
   */
  fetchWorkOrderSingleHeaderDetails(wonum) {
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrderSingleHeaderDetails/" + wonum, WLResourceRequest.GET);
      //WL.Logger.info("fetchWorkorder scope  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setTimeout(300000);

      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          console.log(' error  : ' + error);
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * Fetching Workorder Details...
   * @param savedQuery
   */
  fetchWorkOrderUsingSavedQuery(savedQuery) {

    if (this.data)
      return Promise.resolve(this.data);

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrder/" + savedQuery, WLResourceRequest.GET);
      //WL.Logger.info("fetchWorkorder scope  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      });
    });
  }

  /**
   * Fetching result records with comparing...
   * Difference of Success, Error and Deleted Records...
   * @param savedQuery 
   * @param woList 
   */
  fetchWorkOrderWithCompareListUsingSavedQuery(savedQuery, woList) {
    console.log("Inside fetchWorkOrderWithCompareListUsingSavedQuery");
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrderWithCompareList/" + savedQuery, WLResourceRequest.GET);

      WL.Logger.info("fetchWorkOrderWithCompareListUsingSavedQuery >>> dataRequest : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);

      /*
      if (woList.length === 0)
        dataRequest.setQueryParameter("woList", '');
      else
        dataRequest.setQueryParameter("woList", woList);
      */
      let formParameters = {"woList": ''};
      if(woList.length > 0){
        formParameters = { "woList": JSON.stringify(woList) };
      }
      
      WL.Logger.info("fetchWorkOrderWithCompareListUsingSavedQuery >>> formParameters : " + JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
      //dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * 
   * @param savedQuery 
   * @param woList 
   * Fetch the record for header details to compare list work order have in local.
   */
  fetchWorkOrderHeaderWithCompareList(savedQuery, woList) {
    console.log(">DataServiceProvider >>fetchWorkOrderHeaderWithCompareList");
    console.log(">DataServiceProvider >>fetchWorkOrderHeaderWithCompareList >>>savedQuery : "+JSON.stringify(savedQuery));
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrderHeaderActiveErrorExpiry/" + savedQuery, WLResourceRequest.GET);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      console.log(">DataServiceProvider >>fetchWorkOrderHeaderWithCompareList >>>set timeout 300000ms");
      dataRequest.setTimeout(300000);
      
      if (woList.length === 0)
        dataRequest.setQueryParameter("woList", '');
      else
        dataRequest.setQueryParameter("woList", woList);

      dataRequest.send().then(response => {
        console.log(">DataServiceProvider >>fetchWorkOrderHeaderWithCompareList >>>Success");
        
      /*
      let formParameters = {"woList": ''};
      if(woList.length > 0){
        formParameters = { "woList": woList };
      }
      console.log("fetchWorkOrderHeaderWithCompareList >>> formParameters : " + JSON.stringify(formParameters));      
      dataRequest.sendFormParameters(formParameters).then(response => {
      */
        //console.log("fetchWorkOrderHeaderWithCompareList >>> response : "+response);
        this.data = response.responseJSON;
        resolve(this.data);
      },
      (error => {
        console.log(">DataServiceProvider >>fetchWorkOrderHeaderWithCompareList >>>Error : "+JSON.stringify(error));        
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * 
   * @param savedQuery 
   * @param woList 
   * Fetch the record for header details to compare list work order have in local.
   */
  fetchWorkOrderFeederMultiDetails(savedQuery, woList) {
    console.log(">DataServiceProvider >>fetchWorkOrderFeederMultiDetails");
    console.log(">DataServiceProvider >>fetchWorkOrderFeederMultiDetails >>>savedQuery : "+JSON.stringify(savedQuery));

    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrderFeederMultiDetails/" + savedQuery, WLResourceRequest.GET);
      WL.Logger.info("fetchWorkOrderFeederMultiDetails >>> dataRequest : " + JSON.stringify(dataRequest));

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      
      if (woList.length === 0)
        dataRequest.setQueryParameter("woList", '');
      else
        dataRequest.setQueryParameter("woList", woList);
      
      dataRequest.send().then(response => {
        console.log(">DataServiceProvider >>fetchWorkOrderFeederMultiDetails >>>response : "+JSON.stringify(response));
        this.data = response.responseJSON;
        resolve(this.data);
      },
      (error => {
        console.log(">DataServiceProvider >>fetchWorkOrderFeederMultiDetails >>>error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * 
   * @param assetnum 
   * @param readingType 
   * Fetch the record for header details to compare list work order have in local.
   */
  fetchPMRDeviceDetails(serialNum, assetNum, readingType) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/getDeviceStatus", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "serialNum": serialNum, "deviceNum": assetNum, "readingType": readingType };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * 
   *  @param savedQuery 
   * Fetch the record for header details to compare list work order have in local.
   */
  fetchSealSweepMSOKList(savedQuery) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchSealSweepMSOK/" + savedQuery, WLResourceRequest.GET);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }


  /**
   * Seal Sweep for create new workorder...
   */
  sealSweep(jsonSeal) {
    console.log("Inside sealSweep");
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/sealSweep", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      
      //dataRequest.setQueryParameter("newItem", jsonSeal);
      //dataRequest.send().then(response => {
      let formParameters = { "newItem": JSON.stringify(jsonSeal) };        
      console.log("sealSweep >>> formParameters : " + JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("sealSweep >>> response : "+JSON.stringify(response));
        this.data = response.responseJSON;
        resolve(this.data);
      },
      (error => {
        console.log("sealSweep >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * GIR Process Storage Location Fetching...
   * Fetch the record for header details to compare list work order have in local...
   */
  fetchSiteParticularUser() {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchSiteParticularUser", WLResourceRequest.GET);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  fetchSiteLocationParticularUser() {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/siteLocationParticularUser", WLResourceRequest.GET);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  sealFetchZoneBySiteId(callName, jsonString) {
    console.log("Inside sealFetchZoneBySiteId");
    return new Promise(resolve => {
      debugger;
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/ZoneWithSiteId", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      //dataRequest.setQueryParameter("jsonString", jsonString);

      var formParameters = { "callName": callName, "jsonString": JSON.stringify(jsonString) };
      console.log("sealFetchZoneBySiteId >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("sealFetchZoneBySiteId >>> response : "+JSON.stringify(response));        
        this.data = response.responseJSON.respObject[0];
        resolve(this.data);
      },
      (error => {
        console.log("sealFetchZoneBySiteId >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  fetchZoneBySiteId(callName, jsonString) {

    return new Promise(resolve => {
      debugger;
      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsZoneCheckBusArea", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("jsonString", jsonString);
      var formParameters = { "callName": callName };

      dataRequest.sendFormParameters(formParameters).then(response => {
        debugger;
        this.data = response.responseJSON.respObject[0];
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  disconnectDateValidation(callName, jsonString) {
    console.log("Inside disconnectDateValidation");
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/disconnectDateValidation", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      //dataRequest.setQueryParameter("jsonString", jsonString);
      var formParameters = { "callName": callName,"jsonString": JSON.stringify(jsonString) };
      console.log("disconnectDateValidation >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("disconnectDateValidation >>> response : "+JSON.stringify(response));
        this.data = response.responseJSON.respObject[0];
        resolve(this.data);
      },
      (error => {
        console.log("disconnectDateValidation >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * GIR Process Storage Location Fetching...
   * Fetch the record for header details to compare list work order have in local.
   */
  fetchingGirRecords() {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/fetchingGirRecords", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {

        this.data = response.responseJSON;
        resolve(this.data.respObject);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * GIR Scanning Device...
   * @param ind 
   * @param reservationnum 
   * @param itemLineNum 
   * @param siteId 
   * @param serialno 
   * @param valuationType 
   */
  scanningGirDevices(ind, reservationnum, itemLineNum, siteId, serialno, valuationType) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/ermsScanningStatus", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = {
        "ind": ind,
        "ta0reservationnum": reservationnum,
        "ta0itemlinenum": itemLineNum,
        "siteid": siteId,
        "ta0serialnum": serialno,
        "ta0valuationtype": valuationType
      };

      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data.respObject);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * GIR Process Creation...
   * Fetch the record for header details to compare list work order have in local.
   * @param ind 
   * @param ta0reservationnum 
   * @param ta0itemlinenum 
   * @param siteid 
   * @param ta0quantity 
   */
  storeGirProcessCreation(ind, ta0reservationnum, ta0itemlinenum, siteid, ta0quantity, slocation) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/ermsValidationNoCreateWoLocation", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "ind": ind, "ta0reservationnum": ta0reservationnum, "ta0itemlinenum": ta0itemlinenum, "siteid": siteid, "ta0quantity": ta0quantity, "location": slocation };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * Quanitity Check with Gir Process Setup...
   * @param ind 
   * @param ta0reservationnum 
   * @param ta0itemlinenum 
   * @param siteid 
   * @param ta0quantity 
   */
  quantityChangeIIBCall(ind, ta0reservationnum, ta0itemlinenum, siteid, ta0quantity, slocation) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/quantityChangeIIBCall", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "ind": ind, "ta0reservationnum": ta0reservationnum, "ta0itemlinenum": ta0itemlinenum, "siteid": siteid, "ta0quantity": ta0quantity, "location": slocation };
      dataRequest.sendFormParameters(formParameters).then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * Gir Process Saving Function...
   * @param updateItem 
   * @param ta0girnum 
   */
  fetchtoSaveGIRProcess(updateItem, ta0girnum) {
    console.log("Inside fetchtoSaveGIRProcess");
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/updateGIRDevices", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      //dataRequest.setQueryParameter("updateItem", updateItem);
      var formParameters = { "ta0girnum": ta0girnum, "updateItem": JSON.stringify(updateItem) };
      console.log("fetchtoSaveGIRProcess >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("fetchtoSaveGIRProcess >>> response : "+JSON.stringify(response));
        this.data = response.responseJSON;
        resolve(this.data);
      },
      (error => {
        console.log("fetchtoSaveGIRProcess >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * Gir Process Saving Function...
   * @param updateItem 
   * @param ta0girnum 
   */
  ermsMaterialValidationCheck(matItem) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsValidation", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("matItem", matItem);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * Gir Process Saving Function...
   * @param updateItem 
   * @param ta0girnum 
   */
  ermsZoneWithSiteId(jsonString) {

    debugger;
    return new Promise(resolve => {

      debugger;
      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsZoneWithSiteId", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("jsonString", jsonString);
      dataRequest.send().then(response => {
        debugger;
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * ERMS 2B Process Saving Function...
   * @param updateItem 
   * @param ta0girnum 
   */
  ermsMaterialDisplayInfo(matItem) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsDisplayResInfo", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("matItem", matItem);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  ermsChangeResv(matItem) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsChangeResv", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("matItem", matItem);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * ERMS 2B Process Saving Function...
   * @param updateItem 
   * @param ta0girnum 
   */
  ermsValidationReservNumber(matItem) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsResrValidation", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("matItem", matItem);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }


  /**
   * Gir Process Saving Function...
   * @param updateItem 
   * @param ta0girnum 
   */
  ermsMaterialSubmitCheck(matItem) {

    debugger;
    console.log("Shandeep Kumar --> " + JSON.stringify(matItem));
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsCreateResv", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("matItem", matItem);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * 
   *
   * Fetch the record for header details to compare list work order have in local.
   * Author Shandeep Kumar
   */
  saveAssignTaskToTechnician(wonum, laborcode) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/assignmentWorkOrder",
        WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);

      var formParameters = { "wonum": wonum, "laborcode": laborcode };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * GIR Process labour Details...
   * 
   * Fetch the record for header details to compare list work order have in local.
   */
  fetchLaborDetails() {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchLaborDetails", WLResourceRequest.GET);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * GIR Process cancelGirProcess...
   * Author Shandeep Kumar
   */
  cancelGirProcess(ta0girnum, ta0status) {
    console.log("Inside cancelGirProcess");
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/cancelGirProcess", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      //dataRequest.setQueryParameter("status", ta0status);
      var formParameters = { "ta0girnum": ta0girnum, "status": JSON.stringify(ta0status) };
      console.log("cancelGirProcess >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("cancelGirProcess >>> response : "+JSON.stringify(response));
        this.data = response.responseJSON;
        resolve(this.data);
      },
      (error => {
        console.log("cancelGirProcess >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
        }));
    });
  }

  /**
   * cancel multi gir proces... 
   * @param ta0girnum 
   * @param ta0status 
   */
  cancelMultiGirProcess(ta0girnum, ta0status) {


    return new Promise(resolve => {


      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/GIRresource/multipleCancelGirProcess", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("ta0girnum", ta0girnum);
      dataRequest.setQueryParameter("status", ta0status);
      dataRequest.send().then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * 
   * @param assetnum 
   * @param siteId 
   * 
   * Fetch the record for header details to compare list work order have in local.
   */
  updateAssetDetails(assetnum, siteId) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/updateAssetDetails", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "assetnum": assetnum, "siteId": siteId };
      dataRequest.sendFormParameters(formParameters).then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * 
   * @param siteId 
   * @param serialNum
   * 
   * Fetch the record for header details to fetching device details for zisr...
   */
  fetchDeviceDetailsZISR(siteId, serialNum) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/getDeviceDetailsZISR", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "siteId": siteId, "serialNum": serialNum };
      dataRequest.sendFormParameters(formParameters).then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * 
   * @param siteid
   * @param serialNum 
   * getDeviceStatus(@FormParam("serialNum") String serialNum, 
   * @FormParam("siteid") String siteid,
     @HeaderParam("userName") String userName, 
     @HeaderParam("password") String password)
   * Fetch the record for header details to compare list work order have in local.
   * Author Shandeep Kumar
   */
  getDeviceDetailsZISR(siteid, serialNum) {

    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/getDeviceDetailsZISR",
        WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);

      var formParameters = { "siteid": siteid, "serialNum": serialNum };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  /**
   * /**
   * Sync Up Functionality...
   * @param newItem 
   */
  getSyncUpDataDetails(newItem) {
    console.log('Inside getSyncUpDataDetails');
    return new Promise((resolve, reject) => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/syncWorkOrderMultiWonum", WLResourceRequest.POST, this.gv.timeout);
      var convertIntoArry: any = [];
      convertIntoArry.push(newItem);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);

      //var sendResult = '{ "member": ' + JSON.stringify(convertIntoArry) + '}';
      //dataRequest.setQueryParameter("newItem", sendResult);
      // resolve(dataRequest.send());

      var sendResult = '{ "member": ' + convertIntoArry + '}';
      var formParameters = { "newItem": JSON.stringify(sendResult) };
      console.log("newItem : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(result => {
      //dataRequest.send().then(result => {
        console.log("getSyncUpDataDetails >>> result : "+JSON.stringify(result));
        // this.data = response.responseJSON;
        // var responseRecordWorkOrder: string = this.data.processAction;
        // // var responseMessage: string = ResponseData.processStatus;
        // var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", responseRecordWorkOrder);
        var response = {
          processStatus: 'success',
          respObject: result,
          description: 'Success sync service order..'
        }
        resolve(response);
      }, (error => {
        console.log("getSyncUpDataDetails >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        reject(response);
      }));
    });
  }
  /**
   * Create: Ameer (17/12/2019)
   * Description: wait activity until it's complete then it will proceed to next activity
   */
  async getRespondData(newItem) {
    console.log("Access getRespondData");
    console.log("newItem : "+JSON.stringify(newItem));
    debugger;
    let response: any;
    var ArryResponse: any = [];
    for (const data of newItem) {
      try {

        if (this.gv.departContent === 'seal') {
          // Sync Compliance PDF is available
          if (typeof (data.json.complaince) !== "undefined") {
            let itemVal = data;
            let objCopy = JSON.parse(JSON.stringify(itemVal));
            delete objCopy.json['ta0feeder'];
            delete objCopy.json['docLinksL'];
            delete objCopy.json['labtrans'];

            // change the name of compliance
            for (var j = 0; j < objCopy.json.complaince.length; j++) {
              if (objCopy.json.complaince[j].name === 'Inspection and Testing') {
                objCopy.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
              }

              if (objCopy.json.complaince[j].name === 'Installation Inspection') {
                objCopy.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
              }

              if (objCopy.json.complaince[j].name === 'Evidence collection') {
                objCopy.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
              }

              if (objCopy.json.complaince[j].name === 'Supply Cessation' || objCopy.json.complaince[j].name === 'Form B') {
                objCopy.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
              }

              if (objCopy.json.complaince[j].name === 'Form A Staff' || objCopy.json.complaince[j].name === 'Disconnection' ||
                objCopy.json.complaince[j].name === 'Reconnection' || objCopy.json.complaince[j].name === 'Delivery') {
                objCopy.json.complaince[j].name = 'Borang A TNB';
              }

              if (objCopy.json.complaince[j].name === 'Form A Customer') {
                objCopy.json.complaince[j].name = "Borang A Pengguna";
              }

              if (objCopy.json.complaince[j].name === 'Prejudice') {
                objCopy.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
              }

              delete objCopy.json.complaince[j].data;
            }

            let remove = [];

            for (var i = 0; i < objCopy.json.complaince.length; i++) {
              // Remove no need to update
              if (typeof (objCopy.json.complaince[i].pdfFile) !== "undefined") {
                // Empty Array
                if (objCopy.json.complaince[i].pdfFile.length === 0) {
                  remove.push(i);
                }
              } else {
                remove.push(i);
              }
            }

            let copy = [];

            if (remove.length > 0) {
              for (var k = 0; k < remove.length; k++) {
                delete objCopy.json.complaince[remove[k]];
              }
            }

            for (var i = 0; i < objCopy.json.complaince.length; i++) {
              if (typeof (objCopy.json.complaince[i]) !== "undefined") {
                copy.push(objCopy.json.complaince[i]);
              }
            }

            if (copy.length > 0) {
              data.json.complaince = JSON.parse(JSON.stringify(copy));
            }
          }

          // Changing ta4testdata into string
          if (typeof (data.json.ta0feeder) !== "undefined" && data.json.ta0feeder !== null && data.json.ta0feeder !== "") {
            var fLength: any;
            var mLength: any;

            fLength = data.json.ta0feeder.length;
            for (var i = 0; i < fLength; i++) {
              mLength = data.json.ta0feeder[i].multiassetlocci.length;

              for (var k = 0; k < mLength; k++) {
                if (data.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                  // Convert String to JSON Array
                  var ta4testdata_temp: any;
                  // Checking whether is string or array
                  if (Array.isArray((data.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                    ta4testdata_temp = data.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                  } else {
                    ta4testdata_temp = JSON.parse(data.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                  }

                  while (!Array.isArray(ta4testdata_temp)) {
                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                  }

                  // Convert ta4testdata into string data type before sync is running.
                  // Created : Alif (10.03.2020)
                  let testdata = (JSON.stringify(ta4testdata_temp)).toString();
                  data.json.ta0feeder[i].multiassetlocci[k].ta4testdata = testdata;
                }
              }
            }
          }
        }

        console.log("data : "+JSON.stringify(data));
        response = await this.getSyncUpDataDetails(data);
        ArryResponse.push(response);

        console.log("ArryResponse : "+JSON.stringify(ArryResponse));
        console.log("finish");
      } catch (err) {
        console.log("Error Message: ", err);
        response = {
          processStatus: 'failure',
          respObject: err,
          description: 'Internal error ' + err.errorCode + ' from server.'
        }
        ArryResponse.push(response);
      }
    }
    console.log("Response Message: ", response);

    /* var workOrderNumber = this.data.processAction;
    var responseMessage: string = this.data.processStatus;
    var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", workOrderNumber); */
    return ArryResponse;
  }

  /**
   * 
   * @param sweepType 
   * @param newItem
   * 
   * Store the record for header details to compare seal sweep in local.
   * Author Shandeep Kumar
   */
  storeSealSweepDetails(sweepType, newItem) {
    console.log("Inside storeSealSweepDetails");
    console.log("newItem : "+JSON.stringify(newItem));
    
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/createSealSweep", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");
      //dataRequest.setQueryParameter("newItem", newItem);
      //dataRequest.sendFormParameters({ "sweepType": sweepType }).then(response => {
      let formParameters = { "sweepType": sweepType, "newItem": JSON.stringify(newItem) };

      console.log("formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("storeSealSweepDetails >>> response : " + JSON.stringify(response));
        resolve(response);
      },
      (error => {
        console.log("storeSealSweepDetails >>> error : " + JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * 
   * @param savedQuery 
   * @param woList 
   * 
   * Fecth workorder feeder detsils 
   */
  fetchWorkOrderFeederDetails(savedQuery, woList) {
    console.log("Inside fetchWorkOrderFeederDetails");
    console.log("fetchWorkOrderFeederDetails >>> savedQuery : "+savedQuery);
    //console.log("fetchWorkOrderFeederDetails >>> woList : "+woList);
    console.log("fetchWorkOrderFeederDetails >>> woList : "+JSON.stringify(woList));
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrderFeederDetails/" + savedQuery,
        WLResourceRequest.GET
      );
      //WL.Logger.info("fetchWorkOrderFeederDetails >>> dataRequest : " + JSON.stringify(dataRequest));

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("woList", woList);
      dataRequest.send().then(response => {
        WL.Logger.info("fetchWorkOrderFeederDetails >>> response : " + JSON.stringify(response));        
        this.data = response.responseJSON;
        resolve(this.data);
      }, 
      (error => {
        WL.Logger.info("fetchWorkOrderFeederDetails >>> error : " + JSON.stringify(error));        
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }


  changeStatus(newStatusVal, wonumVal, item, formType) {
    console.log("Inside changeStatus");
    //console.log("changeStatus : "+newStatusVal);
    //console.log("wonumVal : "+wonumVal);
    console.log("item : "+JSON.stringify(item.json));
    //console.log("formType : "+formType);

    return new Promise(resolve => {
      
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/saveStatus",
        WLResourceRequest.POST
      );

      //WL.Logger.info("changeStatus >>> dataRequest : " + JSON.stringify(dataRequest));      
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      //dataRequest.setQueryParameter("newItem", item.json);
      let formParameters = { "newStatus": newStatusVal, "wonum": wonumVal, "formType": formType, "newItem": JSON.stringify(item.json) };
      console.log("changeStatus >>> formParameters : " + JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("changeStatus >>> response : " + JSON.stringify(response));
        resolve(response.responseJSON);
      },
      (error => {
        console.log("changeStatus >>> error : " + JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  changeSnCode(wonum, ta0sncode, ta0sntype) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/SWEEPresource/updateSnCodeStatus", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      let formParameters = { "wonum": wonum, "ta0sncode": ta0sncode, "ta0sntype": ta0sntype };

      dataRequest.sendFormParameters(formParameters).then(response => {

        resolve(response.responseJSON);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }


  saveChangesPageAction(item, wonumVal, pageAction) {
    console.log("Inside saveChangesPageAction");
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/saveChangesPageAction",
        WLResourceRequest.POST
      );

      //console.log("saveChangesPageAction >>> dataRequest  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      //dataRequest.setQueryParameter("newItem", item.json);

      var formParameters = { "wonum": wonumVal, "pageAction": pageAction, "newItem": JSON.stringify(item.json) };
      console.log("saveChangesPageAction >>> formParameters  : " + JSON.stringify(formParameters));

      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("saveChangesPageAction >>> response  : " + JSON.stringify(response));
        WL.Logger.info("Success: " + response.responseText);
        resolve(response);
      }),
      (error) => {
        console.log("saveChangesPageAction >>> error  : " + JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }});
  }


  /**
   * 
   * @param item 
   * @param wonumVal 
   * @param pageAction 
   * @param feederCode 
   * @param workOrderType 
   * @Deprecated
   * 
   * Save Record with Type, this method assit to save record for feeder, multiassetlocci, test details, register details, sil & stickers details. 
   * 
   */
  saveRecordWithType(item, wonumVal, pageAction, feederCode, workOrderType) {
    return new Promise(resolve => {
      console.log('Inside saveRecordWithType');        

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/saveRecordWithType",
        WLResourceRequest.POST
      );

      //console.log("saveRecordWithType >>> dataRequest  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");
      
      //dataRequest.setQueryParameter("newItem", item);
      var formParameters = { "wonum": wonumVal, "actionType": pageAction, "feederCode": feederCode, "workOrderType": workOrderType, "newItem": JSON.stringify(item) };
      console.log('saveRecordWithType >>> formParameters : ' + JSON.stringify(formParameters));

      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("saveRecordWithType >>> response : "+ JSON.stringify(response));
        resolve(response);
      }, (error => {
        console.log("saveRecordWithType >>> error : "+ JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * 
   * @param item 
   * @param wonumVal 
   * @param pageAction 
   * @param feederCode 
   * @param workOrderType 
   * 
   *  New function return for deprecated the above function saveRecordWithType.
   * 
   */
  
  saveRecordWithNewType(item, wonumVal, pageAction, feederCode, workOrderType) {
    console.log('Inside saveRecordWithNewType');
    return new Promise(resolve => {
      
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/saveRecordWithNewType",
        WLResourceRequest.POST
      );
      console.log('saveRecordWithNewType >>> dataRequest : '+JSON.stringify(dataRequest));

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
    
      //dataRequest.setQueryParameter("newItem", item);
      //console.log('saveRecordWithNewType -----> item :   ' + JSON.stringify(item));

      var formParameters = { "wonum": wonumVal, "actionType": pageAction, "feederCode": feederCode, "workOrderType": workOrderType, "newItem": JSON.stringify(item) };
      console.log('saveRecordWithNewType -----> value form parameter : ' + JSON.stringify(formParameters));

      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log('saveRecordWithNewType -----> Success: ' + JSON.stringify(response));
        resolve(response.responseText);
      }, (error => {
        console.log('saveRecordWithNewType -----> error  : ' + JSON.stringify(error));
        var errorResponse = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(errorResponse);
      }));
    });
  }

  /**
   * 
   * @param item 
   * @param wonumVal 
   * @param pageAction 
   * @param feederCode 
   * @param type
   * @param workOrderType 
   * 
   *  New function return for deprecated the above function saveRecordWithNewAttachType.
   * 
   */
  saveRecordWithNewAttachType(item, wonumVal, pageAction, feederCode, type, workOrderType) {
    return new Promise(resolve => {
      console.log("Inside saveRecordWithNewAttachType");

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/saveRecordWithNewAttachType",
        WLResourceRequest.POST
      );

      console.log("saveRecordWithNewAttachType >>> dataRequest  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      //dataRequest.setQueryParameter("newItem", item);
      var formParameters = { "wonum": wonumVal, "actionType": pageAction, "feederCode": feederCode, "type": type, "workOrderType": workOrderType, "newItem": JSON.stringify(item) };
      console.log('saveRecordWithNewAttachType >>> formParameters : ' + JSON.stringify(formParameters));

      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("saveRecordWithNewAttachType >>> response : "+JSON.stringify(response));
        resolve(response.responseText);
      }, (error => {
        console.log("saveRecordWithNewAttachType >>> error : "+JSON.stringify(error));
        //console.log("saveRecordWithNewAttachType >>> status : "+error.status);
        //console.log("saveRecordWithNewAttachType >>> errorCode : "+error.errorCode);
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        console.log("saveRecordWithNewAttachType >>> response : "+JSON.stringify(response));
        resolve(response);
      }));
    });
  }


  /**
   * Adhoc creation for ZINL (ZISR & ZRCE process LPC project)
   * @param item 
   * @param wonumVal 
   * @param sideId 
   * @param actionType 
   */
  createAdHocWorkOrder(item, wonumVal, siteId, actionType, parentWoType) {
    console.log("Inside createAdHocWorkOrder");
    return new Promise(resolve => {
    
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/createAdHocWorkOrder",
        WLResourceRequest.POST
      );

      console.log("createAdHocWorkOrder >>> dataRequest  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      //dataRequest.setQueryParameter("newItem", item);
      var formParameters = { "wonum": wonumVal, "siteId": siteId, "actionType": actionType, "parentWoType": parentWoType, "newItem": JSON.stringify(item) };
      console.log('createAdHocWorkOrder >>> formParameters : ' + JSON.stringify(formParameters));

      dataRequest.sendFormParameters(formParameters).then(response => {        
        WL.Logger.info("createAdHocWorkOrder >>> response : " + JSON.stringify(response));
        resolve(response.responseJSON);
      }, (error => {
        WL.Logger.info("createAdHocWorkOrder >>> error : " + JSON.stringify(error));        
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }


  /**
   * Adhoc creation for ZINL (ZISR & ZRCE process LPC project)
   * @param newItem 
   * @param wonum 
   * @param siteId 
   * @param deviceDetailWonum
   * @param actionType 
   * @param parentWoType
   */
  createAdHocUsingChildDeviceDetails(newItem, wonum, siteId, deviceDetailWonum, actionType, parentWoType, wolo10) {
    console.log("Inside createAdHocUsingChildDeviceDetails");

    return new Promise(resolve => {
    
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/createAdHocUsingChildDeviceDetails",
        WLResourceRequest.POST
      );

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");



      //dataRequest.setQueryParameter("newItem", newItem);

      var formParameters = { "wonum": wonum, "siteId": siteId, "deviceDetailWonum": deviceDetailWonum, "actionType": actionType, "parentWoType": parentWoType, "wolo10": wolo10, "newItem": JSON.stringify(newItem) };
      console.log("createAdHocUsingChildDeviceDetails >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("createAdHocUsingChildDeviceDetails >>> response : "+JSON.stringify(response));
        resolve(response.responseJSON);
      }, 
      (error => {
        console.log("createAdHocUsingChildDeviceDetails >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  // java side. deleteMultiAssetLocci(req, newItem, wonum, deviceId, actionType)
  //Deprecated Method
  deleteDevice(item, wonumVal, deviceId, actionType) {
    console.log("Inside deleteDevice");

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/deleteDevice",
        WLResourceRequest.POST
      );

      //console.log(" data request  : " + dataRequest);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      //dataRequest.setQueryParameter("newItem", item);

      var formParameters = { "wonum": wonumVal, "actionType": actionType, "deviceId": deviceId, "newItem": JSON.stringify(item) };
      console.log('deleteDevice >>> formParameters : ' + JSON.stringify(formParameters));

      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log('deleteDevice >>> response : ' + JSON.stringify(response));        
        resolve(response.responseJSON);
      }, (error => {
        console.log('deleteDevice >>> error : ' + JSON.stringify(error));        
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  //Delete the list of devices...
  deleteDeviceList(item, wonumVal, actionType) {
    console.log("Inside deleteDeviceList");

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/deleteDeviceList", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");
      //dataRequest.setQueryParameter("newItem", item);
      var formParameters = { "wonum": wonumVal, "actionType": actionType, "newItem": JSON.stringify(item) };
      console.log("deleteDeviceList >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("deleteDeviceList >>> response : "+JSON.stringify(response));
        resolve(response.responseText);
      },
      (error => {
        console.log("deleteDeviceList >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  loadLanguageData(langType) {
    console.log("Access loadLanguageData "+langType);
    return new Promise(resolve => {

      //this.http.get('../assets/data/workorderdata.json')
      var url = null;
      if ('bhs' == langType) {
        url = '../www/assets/data/libBahasa.json';
      } else {
        url = '../www/assets/data/libEnglish.json';
      }
      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = data;
          console.log("data of load java LPC : " + data.length);
          console.log('date json..  ' + JSON.stringify(this.requestStatus));
          resolve(this.requestStatus);
        });
    });
  }

  loadLpcJava() {

    console.log("Access loadLpcJava");
    return new Promise(resolve => {

      //this.http.get('../assets/data/workorderdata.json')
      this.http
        .get("../www/assets/data/workorderdata.json")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = {
            processStatus: 'success',
            description: 'success',
            respObject: data
          }
          console.log("data of load java LPC : " + data.length);
          resolve(this.requestStatus);
        });
    });
  }

  loadAssetJava() {

    console.log("Access loadAssetJava");
    return new Promise(resolve => {

      //this.http.get('../assets/data/workorderdata.json')
      this.http
        .get("../www/assets/data/assetDetails.json")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = {
            processStatus: 'success',
            description: 'success',
            respObject: data
          }
          console.log("data of load java Asset Details : " + data.length);
          resolve(this.requestStatus);
        });
    });
  }

  loadAlnDomainJava() {
    console.log("Access loadAlnDomainJava");
    return new Promise(resolve => {


      this.http
        .get("../www/assets/data/alnDomain.json")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = data;
          //console.log("data of load java : " + data);
          resolve(this.requestStatus);
        });
    });
  }

  loadUserStatusJava() {
    console.log("Access loadUserStatusJava");
    return new Promise(resolve => {


      this.http
        .get("../www/assets/data/masterDataLoad.json")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = data;
          console.log("data of load java : User status  " + data.length);
          resolve(this.requestStatus);
        });
    });
  }

  loadMasterDataLoadJava() {
    console.log(">DataServiceProvider >>>loadMasterDataLoadJava");
    return new Promise(resolve => {
      
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/masterDataLoad",
        WLResourceRequest.GET
      );

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);

      dataRequest.send().then(response => {        
        this.data = response.responseJSON;
        //console.log(">DataServiceProvider >>>loadMasterDataLoadJava >>> Response Data : " + JSON.stringify(this.data));
        resolve(this.data);
      },
      (error) => {
        console.log(">DataServiceProvider >>>loadMasterDataLoadJava >>> Error : " + JSON.stringify(error));        
      });
    });
  }


  loadAlnDomainLoadJava() {
    console.log("Access loadAlnDomainLoadJava");
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/alnDomain",
        WLResourceRequest.GET
      );

      //WL.Logger.info("fetchWorkorder scope  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        //console.log(" --> adapter response ", response.responseJSON);
        this.data = response.responseJSON;
        resolve(this.data);
      });
    });
  }

  // Load Java to get Records 
  loadLoadJavaToGetRecords(GetDataDetails) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/" + GetDataDetails, WLResourceRequest.GET);
      //WL.Logger.info("fetchWorkorder scope  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      });
    });
  }

  loadAssetDetailsLoadJava() {
    console.log(">DataServiceProvider >>>loadAssetDetailsLoadJava");
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/assetDataLoad",
        WLResourceRequest.GET
      );
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {        
        this.data = response.responseJSON;
        ///console.log(">DataServiceProvider >>>loadAssetDetailsLoadJava >>>Response Data  : " + JSON.stringify(this.data));
        resolve(this.data);
      },
      (error) => {
        console.log(">DataServiceProvider >>>loadAssetDetailsLoadJava >>>Error : " + JSON.stringify(error));
      });
    });
  }

  loadUserDetailsLoadJava() {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchUserDetails", WLResourceRequest.GET);
     // WL.Logger.info("fetchWorkorder scope  : " + JSON.stringify(dataRequest));
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      });
    });
  }

  loadUserDetails() {


    return new Promise(resolve => {
      console.log("Came to load user details from json...");

      this.http
        .get("../www/assets/data/userDetails.json")
        .map(res => res.json())
        .subscribe(data => {

          resolve(data);
        });
    });
  }

  loadAssetDetailsJava() {
    console.log("Access loadAssetDetailsJava");
    return new Promise(resolve => {

      this.http
        .get("../www/assets/data/assetDetails.json")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = data;
          console.log("data of load java : Asset Details java :  " + data.length);
          resolve(this.requestStatus);
        });
    });
  }

  destoryCollection(collectionName) {
    let options = {};
    return new Promise(resolve => {
      WL.JSONStore.destroy(options).then(
        success => {
          console.log("-- > remove data success.." + success);
          resolve("success");
        },
        failure => {

          console.log("-- > remove data failure.." + failure);
          resolve("failure");
        }
      );
    });
  }

  changePassword(username, oldPassword, newPassword, confirmPassword) {

    console.log("change password");
    return new Promise((resolve, reject) => {
      let dataRequest = new WLResourceRequest("/adapters/UserLogin/changePassword", WLResourceRequest.POST);
      dataRequest.setHeader("username", username);
      dataRequest.setHeader("oldPassword", oldPassword);
      dataRequest.setHeader("newPassword", newPassword);
      dataRequest.setHeader("confirmPassword", confirmPassword);
      console.log("Change Password Request  : " + JSON.stringify(dataRequest));
      dataRequest.send().then(response => {        
        console.log('response : '+JSON.stringify(response));
        this.data = response.responseText
        console.log('response : '+this.data);
        resolve(this.data);
      }, (error) => {
        console.log('Error : '+JSON.stringify(error));
        reject(error);
      });
    });
  }


  /**
   * 
   * @param item 
   * @param wonumVal 
   * @param pageAction 
   * @param feederCode 
   * @param workOrderType 
   * @Deprecated
   * 
   * Save Record with Type, this method assit to save record for feeder, multiassetlocci, test details, register details, sil & stickers details. 
   * 
   */
  testPostHuge(item, wonumVal, pageAction, feederCode, workOrderType) {
    return new Promise(resolve => {
      console.log(
        "came inside to load java promise adapter call.. adapter . --- >>>."
      );

      let dataRequest = new WLResourceRequest(
        "/adapters/tnbSpringXmlAdapter/resource/testPostHuge",
        WLResourceRequest.POST
      );

      //console.log(" data request  : " + dataRequest);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("Content-Type", "Text");

      dataRequest.setQueryParameter("newItem", item);


      var formParameters = { "wonum": wonumVal, "actionType": pageAction, "feederCode": feederCode, "workOrderType": workOrderType };
      console.log('value form parameter : ' + formParameters);

      dataRequest.sendFormParameters(formParameters).then(response => {
        //console.log(" --> adapter response ", response);
        WL.Logger.info("Success: " + response.responseText);
        resolve(response);
      }, (error => {
        console.log(' error  : ' + error);
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * Create: Ameer - Save Seal Image
   * Date : 22/2/2019
   */
  saveSealRecordImage(item, wonumVal, pageAction, feederCode, workOrderType, doctype) {
    console.log('Inside saveSealRecordImage');
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/attachmentDocument", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");

      //dataRequest.setQueryParameter("newItem", item);
      var formParameters = {
        "wonum": wonumVal,
        "actionType": pageAction,
        "feederCode": feederCode,
        "docType": doctype,
        "workOrderType": workOrderType,
        "newItem": JSON.stringify(item)
      };
      console.log('saveSealRecordImage >>> formParameters : '+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log('saveSealRecordImage >>> response : '+JSON.stringify(response));
        this.data = response.responseJSON;
        resolve(this.data);
      }, (error => {
        console.log('saveSealRecordImage >>> error : '+JSON.stringify(error));
        resolve(error);
      }));
    });
  }

  /**
   * Reason   : Method to sending data for generate into pdf.
   * Created  : 23/03/2019
   */
  saveDataToGeneratePdf(wonum,category) {
    console.log("Inside saveDataToGeneratePdf");
    console.log(wonum+" : "+category);
    //this.previewPDF('BPM');
    //this.previewPDF('IT');
    debugger;
    return new Promise(resolve => {
      let dataRequest;
      if(category === 'BPM') {
        dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/pdfBPMGeneration", WLResourceRequest.POST);
      } else if(category === 'IT') {
        dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/pdfITGeneration", WLResourceRequest.POST);
      }

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");

      var formParameters = {
        "wonum": wonum
      };
      console.log("saveDataToGeneratePdf >>> formParameters : "+JSON.stringify(formParameters));
      dataRequest.sendFormParameters(formParameters).then(response => {
        console.log("saveDataToGeneratePdf >>> response : "+JSON.stringify(response));
        this.data = response.responseJSON;
        resolve(this.data);
      }, (error => {
        console.log("saveDataToGeneratePdf >>> error : "+JSON.stringify(error));
        var response = {
          processStatus: 'failure',
          respObeject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * Reason   : 
   * Created  : Mark
   */
  fetchCnReturnType() {

    return new Promise(resolve => {


      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/fetchCreditNoteReturnType", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  fetchCnCategory() {

    return new Promise(resolve => {


      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/fetchCreditNoteCategoryType", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.send().then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }



  storeCNCreation(returnCategory, returnType, resrNumber, resrItemNumber, siteid, ta0divlimit, loadValue) {
    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsCreateCreditNote", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("loadValue", loadValue);

      var formParameters = {
        "returnCategory": returnCategory,
        "returnType": returnType,
        "resrNumber": resrNumber,
        "resrItemNumber": resrItemNumber,
        "siteid": siteid,
        "ta0divlimit": returnCategory !== 'D1' ? 500 : ta0divlimit
      };

      dataRequest.sendFormParameters(formParameters).then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }
  // @QueryParam("loadValue") String loadValue,
  // @FormParam("creditnum") String creditnum,
  // @HeaderParam("userName") String userName, 
  // @HeaderParam("password") String password)

  fetchtoSaveCn(loadValue, creditnum) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/updateCreditNote", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("loadValue", loadValue);
      var formParameters = { "creditnum": creditnum };

      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  fetchingAllCreditNoteRecords(creditNotestatus) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/fetchAllResultCreditNote", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "status": creditNotestatus };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  fetchParticularCreditNote(creditNote) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/fetchParticularCreditNote", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "creditnum": creditNote };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  fetchDeviceDetailIib(assetnum) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/getIibDeviceDetail", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "assetnum": assetnum };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  ermsValidationCreditNote(reqItem) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsValidationCreditNote", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("reqItem", reqItem);

      dataRequest.send().then(response => {

        this.data = response.responseJSON;

        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }


  ermsValidationCreditNoteProcess(reqItem, siteid) {

    return new Promise(resolve => {

      debugger;
      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/ermsValidationCreditNoteProcess", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setQueryParameter("jsonData", reqItem);

      var formParameters = {
        "siteid": siteid
      };


      dataRequest.sendFormParameters(formParameters).then(response => {

        debugger;
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }

  ermsValidationReservation(returnCategory, siteID, resrNumber, resrItemNumber) {

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("adapters/tnbErmsXmlAdapter/ERMSresource/RCNResvValidation", WLResourceRequest.POST);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "returnCategory": returnCategory, "siteID": siteID, "resrNumber": resrNumber, "resrItemNumber": resrItemNumber };
      dataRequest.sendFormParameters(formParameters).then(response => {

        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }



  /**
   * 
   * @param assetnum 
   * @param siteId 
   * 
   * Fetch the record for header details to compare list work order have in local.
   */
  bcrmAssetDetails(assetnum, siteId) {

    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/updateAssetDetails", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      var formParameters = { "assetnum": assetnum, "siteId": siteId };
      dataRequest.sendFormParameters(formParameters).then(response => {
        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {
          var response = {
            processStatus: 'failure',
            respObeject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
    });
  }


  /**
   * Created By:Ameer (4/7/2019)
   * Description: Get Executive Details by siteId
   * Updated by: Andy 28/02/2020
   * Description : Load all executive in localstorage an filter by app
   */
  //fetchExecutiveDetails(callName, jsonString) {
  fetchExecutiveDetails() {
    debugger;
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/sealExecutiveList", WLResourceRequest.GET);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");
      var formParameters = { "department": "", "zone": "" };
      dataRequest.sendFormParameters(formParameters).then(resp => {
        debugger;
        //console.log("fetchExecutiveDetails resp : "+JSON.stringify(resp));
        if(resp.responseJSON.processStatus === 'failure') {
          this.executiveData = {};  
          resolve(this.executiveData);
        } else {
          this.executiveData = resp.responseJSON.respObject.executivelist;
          resolve(this.executiveData);
        }        
      }, (error => {
        var response = {
          processStatus: 'Failure',
          respObject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
      /*this.sealFetchZoneBySiteId('TA0ZONELIST', jsonString).then(result => {
        let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/ZoneWithSiteId", WLResourceRequest.POST);
        dataRequest.setHeader("userName", this.gv.username);
        dataRequest.setHeader("password", this.gv.password);
        dataRequest.setQueryParameter("jsonString", jsonString);
        var formParameters = { "callName": callName };

        dataRequest.sendFormParameters(formParameters).then(response => {
          debugger;
          this.data = response.responseJSON.respObject[0];

          let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/fetchSealExecutiveDetails", WLResourceRequest.POST);
          dataRequest.setHeader("userName", this.gv.username);
          dataRequest.setHeader("password", this.gv.password);
          var formParameters = { "department": this.gv.department, "zone": this.data.zonecode };
          dataRequest.sendFormParameters(formParameters).then(resp => {
            debugger;
            this.executiveData = resp.responseJSON.respObject;
            resolve(this.executiveData);
          }, (error => {
            var response = {
              processStatus: 'Failure',
              respObject: error,
              description: 'Internal error ' + error.errorCode + ' from server.'
            }
            resolve(response);
          }));
        },
          (error => {

            var response = {
              processStatus: 'failure',
              respObeject: error,
              description: 'Internal error ' + error.errorCode + ' from server.'
            }
            resolve(response);
          }));
      })*/
    })
  }

  attachmentRCNDocument(item, rcnVal) {
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbErmsXmlAdapter/ERMSresource/attachmentRCNDocument", WLResourceRequest.POST);
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");

      dataRequest.setQueryParameter("newItem", item);
      var formParameters = {
        "creditnum": rcnVal,

      };
      dataRequest.sendFormParameters(formParameters).then(response => {


        this.data = response.responseJSON;
        resolve(this.data);
      },
        (error => {

          resolve(error);
        }));
    });
  }

  /**
   * Checking WorkOrder Status in BCRM
   * @param wonum
   * @param siteid
   */
  checkingWorkOrderStatus(wonum, siteid) {
    console.log("checkingWorkOrderStatus -----> called work order service adapter calling..");

    return new Promise(resolve => {
      console.log("checkingWorkOrderStatus -----> came inside to load java promise adapter call");

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/installationStatus", WLResourceRequest.GET);
      console.log("checkingWorkOrderStatus -----> dataRequest  : " + JSON.stringify(dataRequest));

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");

      dataRequest.setQueryParameter("wonum", wonum);
      dataRequest.setQueryParameter("siteId", siteid);

      dataRequest.send().then(response => {
        console.log('checkingWorkOrderStatus ----->  : response : '+JSON.stringify(response));
        var respResult: any, response: any;
        respResult = response;

        response = {
          processStatus: 'success',
          respObject: respResult.responseJSON.member[0],
          description: 'Successfully checking ' + respResult.responseJSON.member[0].wonum + ' from server.'
        }
        console.log('checkingWorkOrderStatus ----->  : response : '+JSON.stringify(response));
        resolve(response);
      }, (error => {
        console.log('checkingWorkOrderStatus ----->  : error : '+JSON.stringify(error));
        var response = {
          processStatus: 'Failure',
          respObject: error,
          description: 'Internal error ' + error.errorCode + ' from server.'
        }
        resolve(response);
      }));
    });
  }

  /**
   * Updating GPS location/coordinate into Maximo
   * @param latitude
   * @param longitude
   * @param lobarcode
   */
  updatingGpsCoordinate(location) {
    console.log("--> called gps update live location service adapter calling..");

    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/updateLocation", WLResourceRequest.GET);
      //console.log("data request  : " + dataRequest);

      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("contentType", "application/json");

      dataRequest.setQueryParameter("location", location);
      dataRequest.send().then(response => {
        //console.log(" --> adapter response ", response.responseJSON);
        this.data = response.responseJSON;
        resolve(this.data);
      });
    });
  }

  /**
   * Crimpless Seal validation
   */
   sealValidation(firstSEALCode,lastSEALCode,singleSEALCode,requestIndicator) {
    console.log("Inside sealValidation");
    return new Promise(resolve => {
      console.log("FirstSEALCode : "+firstSEALCode);
      console.log("LastSEALCode : "+lastSEALCode);
      console.log("SingleSEALCode : "+singleSEALCode);
      console.log("RequestIndicator : "+requestIndicator);

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/sealResource/sealValidation", WLResourceRequest.POST);
      if(requestIndicator === 'SIN' ) {
        let formParameters = { "RequestIndicator": requestIndicator,"SingleSEALCode":singleSEALCode };
        console.log("sealValidation >>> formParameters : " + JSON.stringify(formParameters));
        dataRequest.sendFormParameters(formParameters).then(response => {
          //console.log("sealValidation >>> response : "+JSON.stringify(response));
          this.data = response.responseJSON;
          resolve(this.data);
        },
        (error => {
          console.log("sealValidation >>> error : "+JSON.stringify(error));
          var response = {
            processStatus: 'failure',
            respObject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
      }else if(requestIndicator === 'RNG' ) {
        let formParameters = { "RequestIndicator": requestIndicator,"FirstSEALCode":firstSEALCode,"LastSEALCode":lastSEALCode };
        console.log("sealValidation >>> formParameters : " + JSON.stringify(formParameters));
        dataRequest.sendFormParameters(formParameters).then(response => {
          //console.log("sealValidation >>> response : "+JSON.stringify(response));
          this.data = response.responseJSON;
          resolve(this.data);
        },
        (error => {
          console.log("sealValidation >>> error : "+JSON.stringify(error));
          var response = {
            processStatus: 'failure',
            respObject: error,
            description: 'Internal error ' + error.errorCode + ' from server.'
          }
          resolve(response);
        }));
      }
    });
  }

  /*
   * IEE status
   * CR004
   */
  IEEStatus(wonum,siteid,assetnum) {
    console.log(">DataServiceProvider >>IEEStatus");
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/ieestatus", WLResourceRequest.GET);    
      dataRequest.setHeader("userName", this.gv.username);
      dataRequest.setHeader("password", this.gv.password);
      dataRequest.setHeader("wonum", wonum);
      dataRequest.setHeader("siteid", siteid);
      dataRequest.setHeader("assetnum", assetnum);
      dataRequest.setHeader("contentType", "application/json; charset=UTF-8");
      dataRequest.send().then(response => {
      	console.log(">DataServiceProvider >>IEEStatus >>>Adapter response : "+JSON.stringify(response));        
	this.data = response.responseJSON;
        resolve(this.data);
      });

    });

  }

}
