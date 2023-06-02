/// <reference path="../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />

import { Http, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';

import 'rxjs/add/operator/map';

/*
  Generated class for the WorkOrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare var WLResourceRequest;
@Injectable()
export class WorkOrderProvider {

  http: any;
  data: any;
  requestStatus: any;

  baseUrl: string = "http://unasitlpwa01.hq.tnb.com.my:9080/mfp/api/";

  constructor(http: Http) {
    this.http = http;
    //console.log('Hello WorkOrderProvider Provider');
    this.data = null;
  }


  load() {
    console.log(' --> called work order service ');
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/jsonAdapter/getWorkOrder", WLResourceRequest.GET)
      //this.
      dataRequest.send().then((response) => {
        //console.log(' --> adapter response ', response.responseJSON);

        this.data = response.responseJSON.QueryTNB_WOCOMPResponse;
        resolve(this.data);
      })
    });

  }


  loadJava(savedQuery) {
    console.log(' --> called work order service adapter calling ()(()) ');
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      console.log('came inside to load java promise adapter call.. adapter . --- >>>.');

      let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/fetchWorkOrder/"+savedQuery, WLResourceRequest.GET)
      
      //console.log(' data request  : '+dataRequest);
      dataRequest.setHeader("userName", 'U6310_02');
      dataRequest.setHeader("password", 'password');
      
      debugger;
      dataRequest.send().then((response) => {
        //console.log(' --> adapter response ', response.responseJSON);
        this.data = response.responseJSON;
        resolve(this.data);
      })
    });

  } 


  // loadJava() {
  //   console.log('Access loadJava');
  //   return new Promise(resolve => {
  //     console.log(' came to load java application work order ... ');
  //     //this.http.get('../assets/data/workorderdata.json')
  //     this.http.get('../assets/data/workorderdata.json')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         // we've got back the raw data, now generate the core schedule data
  //         // and save the data for later reference
  //         this.requestStatus = data;
  //         console.log('data of load java : '+data);
  //         resolve(this.requestStatus);
  //       });
  //   });

  // } 


  loadLpcJava() {
    console.log('Access loadLpcJava');
    return new Promise(resolve => {
      //console.log(' came to load java application work order ... ');
      //this.http.get('../assets/data/workorderdata.json')
      this.http.get('../www/assets/data/lpcWorkorderdata.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = data;
          console.log('data of load java : ' + data);
          resolve(this.requestStatus);
        });
    });

  } 


  loTestJava() {
    console.log('Access loTestJava');
    return new Promise(resolve => {
      //console.log(' came to load java application work order ... ');
      //this.http.get('../assets/data/workorderdata.json')
      this.http.get('../www/assets/data/information.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.requestStatus = data;
          console.log('data of load java : ' + data);
          resolve(this.requestStatus);
        });
    });

  } 




  uploadNewPhoto(grievance) {

    return new Promise((resolve, reject) => {
      console.log('--> MyWardDataProvider: Uploading following new grievance to server ...\n' + JSON.stringify(grievance));
      // var params = 'photoId:Test001&photoData:' + grievance;

      // let body = {
      //   "photoId": "Test001",
      //   "photoData": "aaa"
      // }

      let dataRequest = new WLResourceRequest("/adapters/javaAdapter/resource/receivePo", WLResourceRequest.POST);
      //dataRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
      //var formParams = {"photoId": "value1", "data": grievance};
      console.log(dataRequest);

      var formParameters = { photoId: '', photoData: '' };
      formParameters.photoId = 'height';
      formParameters.photoData = grievance;
      //dataRequest.(formParams)
      //dataRequest.setQueryParameters(body);
      //dataRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");

      //var paramJson = JSON.stringify({ "photoId": "value1", "photoData": grievance });
      //var formParams = {"photoId": "value1", "photoData": grievance};
      //console.log('data :  '+formParams);

      //dataRequest.setQueryParameterValue('photoId', 'Test001');
      //dataRequest.setQueryParameterValue('photoData', grievance);

      //console.log('dataRequest :  '+dataRequest.urlencoded);

      //dataRequest.setQueryParameters(paramJson);
      //console.log('form :   '+grievance);
      dataRequest.sendFormParameters(formParameters).then(
        (response) => {
          console.log('--> MyWardDataProvider: Upload successful:\n', response.message);
          resolve(response)
        }, (failure) => {
          console.log('--> MyWardDataProvider: Upload failed:\n', failure);
          console.log('--> MyWardDataProvider: Upload failed:\n', JSON.stringify(failure));
          reject(failure)
        })
    });
  }

  uploadImageHttp(bash64Image) {

    var params = 'photoId=Test001&photoData=' + bash64Image;

    let header = { "Content-Type": "application/x-www-form-urlencoded" }

    let body = {
      "photoId": 'Test001',
      "photoData": bash64Image
    }

    //HTTP.post('https://ex.com/api/somethig', JSON.stringify(body), header)
    console.log('params add ::' + params);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log('came to add..  ' + this.baseUrl + '/adapters/javaAdapter/resource/addPhoto');
    return this.http.post(this.baseUrl + '/adapters/javaAdapter/resource/addPhoto', JSON.stringify(body), header).then(data => {
      console.log(data.data);
    }).catch(error => {
      console.log(error.status);
    });

  }



}
