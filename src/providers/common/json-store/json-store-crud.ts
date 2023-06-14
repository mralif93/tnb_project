/* 
 * Modification History :
 * Date         version     Modified By   Method                    Description
 * 2020-09-21   001         Andy Chang    getSearchOfficeAddress    download indstrydesc to SITEID jsonstore and use for RA Address
 * 
 * 
 */

/// <reference path="../../../../plugins/cordova-plugin-mfp-jsonstore/typings/jsonstore.d.ts" />
/// <reference path="../../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />
import { Injectable } from '@angular/core';
import { Domains } from '../../../pojo/commonEnum/Domains';
import { GlobalVars } from "../../../providers/common/global-vars";
import { DeviceConstants } from '../../../pojo/commonEnum/DeviceConstants';
import { JsonStoreHandlerProvider } from './../../json-store-handler/json-store-handler';
import { DataServiceProvider } from '../../data-service/data-service';

/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var WL;

@Injectable()
export class JsonStoreCrudProvider {

    constructor(
        public gv: GlobalVars,
        private dataService: DataServiceProvider) {
    }

    putIntoJsonStore(jsonData, collectionName) {
        console.log('>JsonStoreCrudProvider >>putIntoJsonStore >>>collectionName : '+collectionName);
        var options = {
            // Mark data as dirty (true = yes, false = no), default true.
            username: this.gv.loginUserId,
            password: this.gv.password,
            push: true,
            markDirty: false
        };        

        return new Promise(resolve => {
            WL.JSONStore.get(collectionName).add(jsonData, options).then((success) => {                
                console.log('>JsonStoreCrudProvider >>putIntoJsonStore >>>data store ' + collectionName + ' success  ' + success);
                resolve('success');
            }, (failure) => {                
                console.log('>JsonStoreCrudProvider >>putIntoJsonStore >>>data store ' + collectionName + ' failure  ' + JSON.stringify(failure));
            });
        });
    }

    getAllRecord(collectionName) {
        console.log('>JsonStoreCrudProvider >>getAllRecord >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password
            };
            WL.JSONStore.get(collectionName).findAll(options).then(function (arrayResults) {
                console.log('>JsonStoreCrudProvider >>getAllRecord >>>Success get all records ');
                resolve(arrayResults);
            })
            .fail(function (errorObject) {
                console.log('>JsonStoreCrudProvider >>getAllRecord >>>error get all records ' + JSON.stringify(errorObject));
            });
        })
    }

    getAllRecordWithSorting(collectionName) {
        console.log('>JsonStoreCrudProvider >>getAllRecordWithSorting >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                sort: [{ ta0materialnum: WL.constant.ASCENDING }]
            };
            WL.JSONStore.get(collectionName).findAll(options).then(function (arrayResults) {
                console.log('>JsonStoreCrudProvider >>getAllRecordWithSorting >>>Success get all records');
                resolve(arrayResults);
            })
            .fail(function (errorObject) {                
                console.log('>JsonStoreCrudProvider >>getAllRecordWithSorting >>>Error get all records : '+JSON.stringify(errorObject));
            });
        })
    }

    getRecordsPageLimit(collectionName, offsetValue, limitValue) {
        console.log('>JsonStoreCrudProvider >>getRecordsPageLimit >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                offset: offsetValue,
                limit: limitValue
            };
            WL.JSONStore.get(collectionName).findAll(options).then(function (arrayResults) {
                console.log('>JsonStoreCrudProvider >>getRecordsPageLimit >>>Success get all records');
                resolve(arrayResults);
            })
            .fail(function (errorObject) {
                console.log('>JsonStoreCrudProvider >>getRecordsPageLimit >>>Error get all records : '+JSON.stringify(errorObject));
            });
        })
    }

    getRecordsAssetDetails(collectionName, queryPart) {
        console.log('>JsonStoreCrudProvider >>getRecordsAssetDetails >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password
            };
            WL.JSONStore.get(collectionName).advancedFind(queryPart, options).then(function (arrayResults) {
                console.log('>JsonStoreCrudProvider >>getRecordsAssetDetails >>>Success get all records');
                resolve(arrayResults);
            })
            .fail(function (errorObject) {                    
                console.log('>JsonStoreCrudProvider >>getRecordsAssetDetails >>>Error get all records : '+JSON.stringify(errorObject));
            });
        })
    }

    getAllJsonRecord(collectionName) {
        console.log('>JsonStoreCrudProvider >>getAllJsonRecord >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                markDirty: false
            };

            WL.JSONStore.get(collectionName).findAll(options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getAllJsonRecord >>>Success get all records');
                for (let key in results) {
                    let value = results[key];
                }
                resolve(results);
            },
            (failure) => {                                    
                console.log('>JsonStoreCrudProvider >>getAllJsonRecord >>>Error get all records : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            })
        })
    }

    getAllRecordRemoveOnlyWonum(collectionName) {
        console.log('>JsonStoreCrudProvider >>getAllRecordRemoveOnlyWonum >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                markDirty: false,
                filter: ['_id', 'json']
            };

            WL.JSONStore.get(collectionName).findAll(options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getAllRecordRemoveOnlyWonum >>>Success get all records');
                let value = [];
                for (let key in results) {
                    var local = {
                        wonum: results[key].json.wonum,
                        status: results[key].json.status
                    }
                    value.push(local);                  
                }
                resolve(value);
            }, (failure) => {                
                console.log('>JsonStoreCrudProvider >>getAllRecordRemoveOnlyWonum >>>Error get all records : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            })
        })
    }


    getMarkDirty(collectionName) {
        console.log('>JsonStoreCrudProvider >>getMarkDirty >>>collectionName : '+collectionName);
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password
            };
            WL.JSONStore.get(collectionName).getAllDirty(options).then(result => {
                console.log('>JsonStoreCrudProvider >>getMarkDirty >>>Success get mark dirty records');
                resolve(result);
            }, (failure) => {                
                console.log('>JsonStoreCrudProvider >>getMarkDirty >>>Error get mark dirty records : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            })
        });
    }

    // need to fix this for asset search..
    findRecord(collectionName, queryVal, startLimit) {
        console.log('>JsonStoreCrudProvider >>findRecord(single record) >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>findRecord(single record) >>>queryVal : ' + JSON.stringify(queryVal));
        var query1 = { assetnum: queryVal }; //3182015138
        return new Promise(resolve => {
            // let options = {};
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // Returns a maximum of 10 documents, default no limit.
                limit: 10,
                // Skip 0 documents, default no offset.
                offset: 0,
                // Search fields to return, default: ['_id', 'json'].
                filter: ['_id', 'json']
            };

            WL.JSONStore.get(collectionName).find([queryVal], options).then((results) => {
                console.log('>JsonStoreCrudProvider >>findRecord(single record) >>>Success get record');                
                resolve(results);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>findRecord(single record) >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    getSearchRecord(collectionName, queryVal, startLimit) {
        console.log('>JsonStoreCrudProvider >>getSearchRecord(single record) >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchRecord(single record) >>>query : ' + JSON.stringify(queryVal));        
        var query1 = { assetnum: queryVal }; //3182015138
        return new Promise(resolve => {
            // let options = {};
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // Returns a maximum of 10 documents, default no limit.
                limit: 10,

                // Skip 0 documents, default no offset.
                offset: 0,

                // Search fields to return, default: ['_id', 'json'].
                filter: ['_id', 'json']

                // How to sort the returned values, default no sort.
                //sort: [{ name: WL.constant.ASCENDING }, { age: WL.constant.DESCENDING }]
            };
            WL.JSONStore.get(collectionName).advancedFind([queryVal], options).then((results) => {                
                console.log('>JsonStoreCrudProvider >>getSearchRecord(single record) >>>Success get record');                
                resolve(results);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecord(single record) >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    async getRecordResult(collectionName, queryVal, startLimit) {
        debugger;
        console.log('>JsonStoreCrudProvider >>getRecordResult(single record) >>>collectionName : ' + collectionName);        
        let response: any;
        try {
            response = await this.getSearchRecord(collectionName, queryVal, startLimit);
        } catch (err) {
            console.log('>JsonStoreCrudProvider >>getRecordResult(single record) >>>Error get record : '+JSON.stringify(err));
            response = ('error' + JSON.stringify(err));
        }
        return response;
    }

    getSearchRecordNoLimit(collectionName, query) {
        console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit >>>collectionName : ' + collectionName);
        //query = { 'json:Attributes.TNB_APPROVEDBY.content': 10076076 };
        return new Promise(resolve => {
            // let options = {};
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // Returns a maximum of 10 documents, default no limit.
                //limit: 10,

                // Skip 0 documents, default no offset.
                offset: 0,

                // Search fields to return, default: ['_id', 'json'].
                filter: ['_id', 'json']

                // How to sort the returned values, default no sort.
                //sort: [{ name: WL.constant.ASCENDING }, { age: WL.constant.DESCENDING }]
            };

            var queryL = null;
            /*   var indexVal = 0;
              for(let que of query){
                  if(query.length == 1){
                      queryL = que;
                  }else if(indexVal == 0){
                      queryL = que;
                  }else {
                      queryL = queryL+','+que;
                  }
                  indexVal++;
              } */

            WL.JSONStore.get(collectionName).advancedFind([query], options).then((results) => {                
                console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit >>>Success get record');
                resolve(results);
            }, (failure) => {                
                console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }


    getSearchRecordWithSorting(collectionName, query) {
        console.log('>JsonStoreCrudProvider >>getSearchRecordWithSorting >>>collectionName : ' + collectionName);
        //query = { 'json:Attributes.TNB_APPROVEDBY.content': 10076076 };
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                offset: 0,
                filter: ['_id', 'json'],
                sort: [{ ta0materialnum: WL.constant.ASCENDING }]
            };
            WL.JSONStore.get(collectionName).advancedFind([query], options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordWithSorting >>>Success get record');
                resolve(results);
            },
            (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordWithSorting >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    getAllRecords(collectionName) {
        console.log('>JsonStoreCrudProvider >>getAllRecords >>>collectionName : ' + collectionName);
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                offset: 0,
                filter: ['_id', 'json']
            };
            WL.JSONStore.get(collectionName).count(options)
                .then(function (numberOfDocuments) {
                    //handle success
                    console.log('>JsonStoreCrudProvider >>getAllRecords >>>Success get record');
                    resolve(numberOfDocuments);
                })
                .fail(function (errorObject) {
                    //handle failure
                    console.log('>JsonStoreCrudProvider >>getAllRecords >>>Error get record : '+JSON.stringify(errorObject));
                    resolve('error' + JSON.stringify(errorObject));
                });
        });
    }

    getAllCountRecord(collectionName) {
        console.log('>JsonStoreCrudProvider >>getAllCountRecord >>>collectionName : ' + collectionName);
        return new Promise(resolve => {
            let options = {
                username: this.gv.loginUserId,
                password: this.gv.password
            };
            WL.JSONStore.get(collectionName).findAll(options).then(function (arrayResults) {
                console.log('>JsonStoreCrudProvider >>getAllCountRecord >>>Success get record');
                let count = arrayResults.length;
                resolve(count);
            }).fail(function (errorObject) {
                console.log('>JsonStoreCrudProvider >>getAllCountRecord >>>Error get record : '+JSON.stringify(errorObject));
                resolve('error' + JSON.stringify(errorObject));
            });
        })
    }

    getSearchArrayResult(collectionName, querypart) {        
        console.log('>JsonStoreCrudProvider >>getSearchArrayResult >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchArrayResult >>>querypart : ' + JSON.stringify(querypart));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // limit: limitValue,
                offset: 0
                // filter: ['_id', 'json']
            };
            WL.JSONStore.get(collectionName).advancedFind(querypart, options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getSearchArrayResult >>>Success get record');
                resolve(results);
            },
            (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchArrayResult >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }


    getSearchArraywithSort(collectionName, querypart, sortOrder) {
        console.log('>JsonStoreCrudProvider >>getSearchArraywithSort >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchArraywithSort >>>querypart : '+ JSON.stringify(querypart));
        var query1 = { assetnum: '3182015138' };
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // limit: limitValue,
                offset: 0,
                filter: ['_id', 'json']
                // sort: sortOrder (List error not display)
            };
            var queryL = null;
            WL.JSONStore.get(collectionName).advancedFind(querypart, options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getSearchArraywithSort >>>Success get record');
                resolve(results);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchArraywithSort >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }


    /**
   * @deprecated
   * Remove array box at query section because the parameter already in array.
   * @param collectionName
   * @param query (array)
   */
    getSearchRecordNoLimit_Device(collectionName, query) {
        console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit_Device >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit_Device >>>querypart : '+ JSON.stringify(query));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                offset: 0,
                filter: ['_id', 'json']
            };

            var queryL = null;
            WL.JSONStore.get(collectionName).advancedFind(query, options).then((results) => {                
                console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit_Device >>>Success get record');
                resolve(results);
            },
            (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordNoLimit_Device >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });

    }

    /* Get Search result from Limited Record in Global Variable, Limits parameter set in dynamically... */
    getSearchRecordLimit(collectionName, querypart, offsetValue, limitValue, sortOrder) {
        console.log('>JsonStoreCrudProvider >>getSearchRecordLimit >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchRecordLimit >>>querypart : '+ JSON.stringify(querypart));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                limit: limitValue,
                offset: offsetValue,
                filter: ['_id', 'json'],
                sort: sortOrder
            };
            WL.JSONStore.get(collectionName).advancedFind(querypart, options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordLimit >>>Success get record');
                resolve(results);
            },
            (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordLimit >>>Error get records : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    /* Get Search result from Limited Record in Global Variable, Limits parameter set in dynamically... */
    getSearchAllRecordNoLimit(collectionName, querypart) {
        console.log('>JsonStoreCrudProvider >>getSearchAllRecordNoLimit >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchAllRecordNoLimit >>>querypart : '+ JSON.stringify(querypart));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                filter: ['_id', 'json']
            };
            WL.JSONStore.get(collectionName).advancedFind(querypart, options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getSearchAllRecordNoLimit >>>Success get all records');
                resolve(results);
            },
            (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchAllRecordNoLimit >>>Error get all records : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    /* Get Search result from Limited Record in Global Variable, Limits parameter set in dynamically... */
    getSearchRecordLimits(collectionName, query, limitValue) {
        console.log('>JsonStoreCrudProvider >>getSearchRecordLimits >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchRecordLimits >>>query : '+ JSON.stringify(query));

        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                limit: limitValue,
                offset: 0,
                filter: ['_id', 'json']
            };
            WL.JSONStore.get(collectionName).advancedFind([query], options).then((results) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordLimits >>>Success get record');
                resolve(results);
            },
            (failure) => {
                console.log('>JsonStoreCrudProvider >>getSearchRecordLimits >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    fetchParticularRecord(collectionName, query) {
        console.log('>JsonStoreCrudProvider >>fetchParticularRecord(single record) >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>fetchParticularRecord(single record) >>>query : '+ JSON.stringify(query));
        //query = { 'json:Attributes.TNB_APPROVEDBY.content': 10076076 };
        return new Promise(resolve => {
            // let options = {};
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // Search fields to return, default: ['_id', 'json'].
                filter: ['_id', 'json']
            };
            WL.JSONStore.get(collectionName).find([query], options).then((results) => {
                console.log('>JsonStoreCrudProvider >>fetchParticularRecord >>>Success get record');                         
                resolve(results);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>fetchParticularRecord >>>Error get record : '+JSON.stringify(failure));
                resolve('error' + JSON.stringify(failure));
            });
        });
    }

    syncUpActivitySingle(item) {
        console.log('>JsonStoreCrudProvider >>syncUpActivitySingle');
        
        return new Promise((resolve, reject) => {

            if (this.gv.testType) {


                var sendResult = '{ "member": ' + JSON.stringify(item) + '}';
                if (item.length > 0) {
                    console.log('>JsonStoreCrudProvider >>syncUpActivitySingle >>>trigger this.dataService.getSyncUpDataDetails');
                    this.dataService.getSyncUpDataDetails(sendResult).then((respRecord) => {

                        var respResult: any;
                        respResult = respRecord;

                        if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
                            var fullItems: any;
                            fullItems = respResult.respObject;

                            fullItems.forEach(element => {
                                var workOrderStatus = element.respObject;
                                var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", element.processAction);
                                if (DeviceConstants.RESP_SUCCESS_MSG === element.processStatus) {

                                    this.getSearchRecord(Domains.LPCWORKORDER, queryPart1, "1")
                                        .then(result => {

                                            if (typeof (result[0].json.docLinksL) !== 'undefined' && result[0].json.docLinksL.length !== 0) {
                                                result[0].json.docLinksL.forEach(element => {
                                                    element.describedBy.loc_photoVersion = 'old';
                                                });

                                                this.gv.initItems.forEach(element => {

                                                    if (element.json.wonum === result[0].json.wonum) {
                                                        element = result[0];
                                                    }
                                                });
                                            }
                                            this.replacingData(result[0], "LPCWORKORDER", false);
                                            resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                        });

                                }
                                else {

                                    this.getSearchRecord(Domains.LPCWORKORDER, queryPart1, "1")
                                        .then(result => {

                                            result[0].json.ta0bcrmresponsestatus = 'E'
                                            if (typeof (result[0].json.ta0bcrmresponsecode) !== 'undefined') {
                                                result[0].json.ta0bcrmresponsecode = result[0].json.ta0bcrmresponsecode + ' ' + element.respObject;
                                            }
                                            else {
                                                result[0].json.ta0bcrmresponsecode = element.respObject;
                                            }
                                            this.replacingData(result[0], "LPCWORKORDER", false);
                                            resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                        });
                                }
                            });
                        }
                        else {
                            reject();
                        }
                    })
                }
                else {
                    // result is empty then go head with download functionality...
                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                }

                this.gv.testType = false;
            }
            else {
                // result is empty then go head with download functionality...
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
            }
        });
    }

    replaceWO(item, collectionName, markBoolean) {
        console.log('>JsonStoreCrudProvider >>replaceWO >>>collectionName : '+collectionName);
        console.log('>JsonStoreCrudProvider >>replaceWO >>>item : '+JSON.stringify(item));

        if (markBoolean) {
            // Offline markBoolean value true...
            this.replacingData(item, collectionName, markBoolean);
        } else {
            // Online markBoolean value false...
            this.getDirtyCheck(item, collectionName).then((result) => {
                if (result === 1) {
                    this.syncUpActivitySingle(item).then(() => {
                        this.replacingData(item, collectionName, markBoolean);
                        this.getDirtyClean(item, collectionName);
                    });
                } else {
                    this.replacingData(item, collectionName, markBoolean);
                }
            });
            return true;
        }
    }

    replacingData(item, collectionName, markBoolean) {
        debugger;
        console.log('>JsonStoreCrudProvider >>replacingData >>>collectionName : ' + collectionName);
        console.log('>JsonStoreCrudProvider >>replacingData >>>item : ' + JSON.stringify(item));
        var data = item;
        var options: any;
        if (this.gv.testMobile && markBoolean) {
            debugger;
            options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                push: true,
                markDirty: true
            };
        } else {
            debugger;
            options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                push: true,
                markDirty: false
            };
        }

        WL.JSONStore.get(collectionName).replace(data, options).then((results) => {
            console.log('>JsonStoreCrudProvider >>replacingData >>>results : ' + JSON.stringify(results));
            return true;
        }, (failure) => {
            console.log('>JsonStoreCrudProvider >>replacingData >>>failure : ' + JSON.stringify(failure));
            return false;
        });

    }

    /*
     * Edited: Ameer (17/12/2019) - change data dirty to clean 1 by 1
     */
    getDirtyClean(item, collectionName) {
        debugger;
        console.log('>JsonStoreCrudProvider >>getDirtyClean >>>collectionName : '+collectionName);
        return new Promise((resolve, reject) => {
            var data = item;
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password
            };
            resolve(WL.JSONStore.get(collectionName).markClean([data], options))
            /* .then(function (result) {
                debugger;
                resolve(result);
            })
                .fail(function (error) {
                    reject();
                }); */
        });
    }

    /*
     * Create: Ameer (17/12/2019)
     * Description: wait activity until it's complete then it will proceed to next activity
     */
    async changeDataDirtyToClean(item, collectionName) {
        debugger;
        console.log('>JsonStoreCrudProvider >>changeDataDirtyToClean >>>collectionName : '+collectionName);
        let result;
        try {
            result = await this.getDirtyClean(item, collectionName);
        } catch (err) {
            console.log('>JsonStoreCrudProvider >>changeDataDirtyToClean >>>Error : '+JSON.stringify(err));            
        }
        return result;

    }

    getDirtyCleanAll(collectionName) {
        console.log('>JsonStoreCrudProvider >>getDirtyCleanAll >>>collectionName : '+collectionName);
        return new Promise((resolve, reject) => {

            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                push: true,
                markDirty: false
            };

            WL.JSONStore.get(collectionName).markClean(options).then(function (result) {
                console.log('>JsonStoreCrudProvider >>getDirtyCleanAll >>>Success');
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
            })
            .fail(function (error) {
                console.log('>JsonStoreCrudProvider >>getDirtyCleanAll >>>Error : '+JSON.stringify(error));
                reject(DeviceConstants.RESP_FAILURE_MSG);
            });
        });
    }

    getDirtyCheck(item, collectionName) {
        console.log('>JsonStoreCrudProvider >>getDirtyCheck >>>collectionName : '+collectionName);
        console.log('>JsonStoreCrudProvider >>getDirtyCheck >>>item : '+JSON.stringify(item));
        return new Promise((resolve) => {

            var data = item;
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                markDirty: false
            };

            WL.JSONStore.get(collectionName).isDirty(data, options).then(function (result) {
                console.log('>JsonStoreCrudProvider >>getDirtyCheck >>>result : '+JSON.stringify(result));

                if (result > 0) {
                    // Yes dirty is available
                    resolve(1);
                }
                else {
                    // No Dirty is available
                    resolve(0);
                }
            })
            .fail(function (error) {
                // condition failed 
                console.log('>JsonStoreCrudProvider >>getDirtyCheck >>>Error : '+JSON.stringify(error));
                resolve(2);
            });
        });
    }

    findByWorktype(item, collectionName) {
        console.log('>JsonStoreCrudProvider >>findByWorktype >>>collectionName : '+collectionName);
        return new Promise((resolve) => {
            var query = { worktype: item.json.worktype };
            //check network
            var options = {
                // Mark data as dirty (true = yes, false = no), default true.
                uusername: this.gv.loginUserId,
                password: this.gv.password,
                push: true,
                markDirty: true //no network
            };

            WL.JSONStore.get(collectionName).find(query, options).then(function (results) {
                // handle success
                console.log('>JsonStoreCrudProvider >>findByWorktype >>>Success');    
                resolve(results);        

            }).fail(function (error) {
                // handle failure
                console.log('>JsonStoreCrudProvider >>findByWorktype >>>Error : '+JSON.stringify(error));
                resolve('error' + JSON.stringify(error));
            });
        });
    }

    removeWorkOrderCollectionExpiryRecord(collectionName, query) {
        console.log('>JsonStoreCrudProvider >>removeWorkOrderCollectionExpiryRecord >>>collectionName : '+collectionName);
        console.log('>JsonStoreCrudProvider >>removeWorkOrderCollectionExpiryRecord >>>query : '+JSON.stringify(query));
        //var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", query);
        
        return new Promise(resolve => {
            // let options = {};
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                // Returns a maximum of 10 documents, default no limit.
                limit: 10,

                // How to sort the returned values, default no sort.
                //sort: [{ name: WL.constant.ASCENDING }, { age: WL.constant.DESCENDING }]
            };

            WL.JSONStore.get(collectionName).advancedFind([query], options).then((results) => {
                //var asset = (Asset),results;
                //console.log(' --> success record on work order ... ' + JSON.stringify(results));

                var promises = [];

                WL.JSONStore.get(collectionName).remove(results, options).then((success) => {
                    console.log('success : ' + success);
                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                }, (failure) => {
                    console.log('failure : ' + failure);
                    resolve(DeviceConstants.RESP_FAILURE_MSG);
                });

            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>removeWorkOrderCollectionExpiryRecord >>>Error : '+JSON.stringify(failure));
                resolve(DeviceConstants.RESP_FAILURE_MSG);
            });
        });

    }

    replaceWorkOrderFunctionality(collectionName, replaceWith, query) {
        console.log('>JsonStoreCrudProvider >>replaceWorkOrderFunctionality >>>collectionName : '+collectionName);
        console.log('>JsonStoreCrudProvider >>replaceWorkOrderFunctionality >>>query : '+JSON.stringify(query));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password
            };
            WL.JSONStore.get(collectionName).advancedFind(query, options).then((results) => {
                console.log('>JsonStoreCrudProvider >>replaceWorkOrderFunctionality >>>Success');
                var respResult: any = [];
                respResult = results;
                respResult[0].json = replaceWith;

                this.replaceWO(respResult[0], collectionName, false);
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>replaceWorkOrderFunctionality >>>Error : '+JSON.stringify(failure));
                resolve(DeviceConstants.RESP_FAILURE_MSG);
            });
        });
    }

    removeWorkOrderFunctionality(collectionName, query) {
        console.log('>JsonStoreCrudProvider >>removeWorkOrderFunctionality >>>collectionName : '+collectionName);
        console.log('>JsonStoreCrudProvider >>removeWorkOrderFunctionality >>>query : '+JSON.stringify(query));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                limit: 10,
            };

            WL.JSONStore.get(collectionName).advancedFind(query, options).then((results) => {

                WL.JSONStore.get(collectionName).remove(results, options).then((success) => {
                    console.log('>JsonStoreCrudProvider >>removeWorkOrderFunctionality >>>Success : ' + JSON.stringify(success));
                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                }, (failure) => {
                    console.log('>JsonStoreCrudProvider >>removeWorkOrderFunctionality >>>Failure : ' + JSON.stringify(failure));
                    resolve(DeviceConstants.RESP_FAILURE_MSG);
                });

            }, (failure) => {                
                console.log('>JsonStoreCrudProvider >>removeWorkOrderFunctionality >>>Error : '+JSON.stringify(failure));
                resolve(DeviceConstants.RESP_FAILURE_MSG);
            });
        });

    }

    removeCollection(collectionName) {
        console.log('>JsonStoreCrudProvider >>removeCollection >>>collectionName : '+collectionName);
        var options = {
            // Mark data as dirty (true = yes, false = no), default true.
            username: this.gv.loginUserId,
            password: this.gv.password,
            push: true,
            markDirty: true //no network
        };
        return new Promise(resolve => {
            WL.JSONStore.get(collectionName).removeCollection(options).then((success) => {
                console.log('>JsonStoreCrudProvider >>removeCollection >>>Success');
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>removeCollection >>>Error : '+JSON.stringify(failure));
                resolve('failure' + JSON.stringify(failure));
            })
        });
    }

    destoryCollection(collectionName) {
        console.log('>JsonStoreCrudProvider >>destoryCollection >>>collectionName : '+collectionName);
        let options = {};
        return new Promise(resolve => {
            WL.JSONStore.destroy(options).then((success) => {
                console.log('>JsonStoreCrudProvider >>destoryCollection >>>Success');
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
            }, (failure) => {
                console.log('>JsonStoreCrudProvider >>destoryCollection >>>Error : '+JSON.stringify(failure));
                resolve('failure' + JSON.stringify(failure));
            })
        });

    }
    //001 start
    getSearchOfficeAddress(collectionName: string, query: any) {
        console.log('>JsonStoreCrudProvider >>getSearchOfficeAddress >>>collectionName : '+collectionName);
        console.log('>JsonStoreCrudProvider >>getSearchOfficeAddress >>>query : '+JSON.stringify(query));
        
        return new Promise(resolve => {
            var options = {
                username: this.gv.loginUserId,
                password: this.gv.password,
                offset: 0
            };

            WL.JSONStore.get(collectionName).advancedFind(query, options).then(
            (results: any) => {
                console.log('>JsonStoreCrudProvider >>getSearchOfficeAddress >>>Success');                
                resolve(results);
            }, (failure: any) => {
                console.log('>JsonStoreCrudProvider >>getSearchOfficeAddress >>>Error : ' + JSON.stringify(failure));
                resolve(failure);
            });
        });
    }
    //001 end



}