
/// <reference path="../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />

import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var WL;

@Injectable()
export class DataServiceProvider {


    data: any;
    requestStatus: any;

    constructor(public http: Http) {
        console.log('Hello DataServiceProvider Provider');
    }


    loadAlnDomain() {
        console.log('Access loadAlnDomain');
        return new Promise(resolve => {
            console.log('came inside to load java promise adapter call.. adapter . --- >>>.');
            let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/alnDomain", WLResourceRequest.POST)

            //console.log(' data request  : ' + dataRequest);
            dataRequest.setHeader("userName", 'U6121_01');
            dataRequest.setHeader("password", 'password');
            debugger;
            dataRequest.send().then((response) => {
                //console.log(' --> adapter response ', response);

                resolve(response);
            })

            // this.http.get('../www/assets/data/alnDomain.json')
            //     .map(res => res.json())
            //     .subscribe(data => {
            //         // we've got back the raw data, now generate the core schedule data
            //         // and save the data for later reference
            //         this.requestStatus = data;
            //         console.log('data of load java : ' + data);
            //         resolve(this.requestStatus);
            //     });
        });

    }

    loadMasterDataLoadDomain() {
        console.log('Access loadMasterDataLoadDomain');
        return new Promise(resolve => {
            console.log('came inside to load java promise adapter call.. adapter . --- >>>.');
            let dataRequest = new WLResourceRequest("/adapters/tnbSpringXmlAdapter/resource/masterDataLoad", WLResourceRequest.POST)

            //console.log(' data request  : ' + dataRequest);
            dataRequest.setHeader("userName", 'U6121_01');
            dataRequest.setHeader("password", 'password');
            debugger;
            dataRequest.send().then((response) => {
                //console.log(' --> adapter response ', response);

                resolve(response);
            })

            // this.http.get('../www/assets/data/masterDataLoad.json')
            //     .map(res => res.json())
            //     .subscribe(data => {
            //         // we've got back the raw data, now generate the core schedule data
            //         // and save the data for later reference
            //         this.requestStatus = data;
            //         console.log('data of load java : ' + data);
            //         resolve(this.requestStatus);
            //     });
        });

    }


    loadMasterDataLoadJava() {
        console.log('Access loadMasterDataLoadJava');
        return new Promise(resolve => {
            
            //this.http.get('../assets/data/workorderdata.json')
            this.http.get('../www/assets/data/alnDomain.json')
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




    destoryCollection(collectionName) {
        let options = {};
        return new Promise(resolve => {
            WL.JSONStore.destroy(options).then((success) => {
                console.log('-- > remove data success..' + success);
                resolve('success');
            }, (failure) => {
                debugger;
                console.log('-- > remove data failure..' + failure);
                resolve('failure');
            })
        });

    }

}
