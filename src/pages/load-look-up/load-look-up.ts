import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { JsonStoreCrudProvider } from './../../providers/common/json-store/json-store-crud';
import { Domains } from '../../pojo/commonEnum/Domains';
import { GlobalVars } from '../../providers/common/global-vars';
import { GlobalFunction } from '../../providers/common/global-function';
import { JsonStoreStructureProvider } from '../../providers/common/json-store/json-store-structure';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { DeviceConstants } from '../../pojo/commonEnum/DeviceConstants';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-load-look-up',
  templateUrl: 'load-look-up.html',
})
export class LoadLookUpPage {

  public assetDetailItems: any;
  public collectionList: string[];
  public itemArray: any[];
  public isAssetDetails: boolean = false;
  public isAlDomain: boolean = false;
  public isWindingGroup: boolean = false;
  public isAmiData: boolean = false;
  public isZone: boolean = false;
  public isSnCode: boolean = false;
  public isMaterialData: boolean = false;
  public isUserStatus: boolean = false;
  public isUserStatusDetails: boolean = false;
  public isCustomerData: boolean = false;
  public isExecutiveList: boolean = false;
  public isTeamMemberList: boolean = false;
  public isSiteIDList: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public jsonStoreStructure: JsonStoreStructureProvider,
    private dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    private gv: GlobalVars,
    private gf: GlobalFunction) {

  }

  /**
   * Descriptiom: Searching local LoadLookUp
   * Created    : Alif (24.02.2020)
   */
  ionViewDidLoad() {
    console.log("enter loadlookup data..");

    this.getDetailOfflineCount(Domains.AssetDetails).then((success) => {
      this.getDetailOfflineCount(Domains.AlnDomain).then((success) => {
        this.getDetailOfflineCount(Domains.WindingGroup).then((success) => {
          this.getDetailOfflineCount(Domains.AmiData).then((success) => {
            this.getDetailOfflineCount(Domains.SnCode).then((success) => {
              //this.getDetailOfflineCount(Domains.MaterialData).then((success) => {
                this.getDetailOfflineCount(Domains.CustomerData).then((success) => {
                  this.getDetailOfflineCount(Domains.UserStatus).then((success) => {
                    this.getDetailOfflineCount(Domains.Zone).then((success) => {
                      this.getDetailOfflineCount(Domains.Executive).then((success) => {
                        this.getDetailOfflineCount(Domains.TeamMembers).then((success) => {
                          this.getDetailOfflineCount(Domains.SiteID).then((success) => {
                            this.getDetailOfflineCount(Domains.UserDetails);
                          });
                        });
                      });
                    });
                  });
                });
              //});
            });
          });
        });
      });
    });
  }

  /**
   * Load All Values...
   */
  getAllLoading() {
    this.getAssetDetailCount().then((success) => {
      this.getAlnDomainDetailCount().then((success) => {
        this.getWindingDetailCount().then((success) => {
          this.getAmiDataDetailCount().then((success) => {
            this.getSnCodeDetailCount().then((success) => {
              //this.getMaterialDetailCount().then((success) => {//ERMS tobe
                this.getCustomerTypeCount().then((success) => {
                  this.getUserDetailCount().then((success) => {
                    this.getZoneDataDetailsCount().then((success) => {
                      this.getExecutiveListCount().then((success) => {
                        this.getTeamMemberListCount().then((success) => {
                          this.getSiteIDListCount().then((success) => {
                            this.getUserStatusDetailCount();
                          });
                        });
                      });
                    });
                  });
                });
              //});
            });
          });
        });
      });
    });
  }

  // Asset Details Re Initialization...
  getAssetDetailCount() {
    return new Promise((resolve, reject) => {
      this.isAssetDetails = true;
      this.jsonStoreStructure.initAssetDetails().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.AssetDetails);
        this.jsonStoreStructure.initAssetDetails().then((success) => {
          this.dataService.loadAssetDetailsLoadJava().then((results) => {
            var fullItems: any;
            fullItems = results;
            this.putIntoJsonStoring(fullItems.member, Domains.AssetDetails).then((storeResult) => {
              resolve(DeviceConstants.RESP_SUCCESS_MSG);
              this.isAssetDetails = false;
            },
              (error) => {
                this.gv.assetDetailCount = 0;
                this.isAssetDetails = false;
              });
          });
        },
          (error) => {
            reject();
          });
      });
    });
  }

  // Asset Details Re Initialization Offline...
  getDetailOfflineCount(collectionName) {
    return new Promise((resolve, reject) => {
      // Default loading spinner..
      if (collectionName === Domains.AssetDetails) {
        this.isAssetDetails = true;
      } else if (collectionName === Domains.AlnDomain) {
        this.isAlDomain = true;
      } else if (collectionName === Domains.WindingGroup) {
        this.isWindingGroup = true;
      } else if (collectionName === Domains.AmiData) {
        this.isAmiData = true;
      } else if (collectionName === Domains.SnCode) {
        this.isSnCode = true;
      } else if (collectionName === Domains.CustomerData) {
        this.isCustomerData = true;
      } else if (collectionName === Domains.UserStatus) {
        this.isUserStatus = true;
      } else if (collectionName === Domains.Zone) {
        this.isZone = true;
      } else if (collectionName === Domains.UserDetails) {
        this.isUserStatusDetails = true;
      } else if (collectionName === Domains.Executive) {
        this.isExecutiveList = true;
      } else if (collectionName === Domains.TeamMembers) {
        this.isTeamMemberList = true;
      } else if (collectionName === Domains.SiteID) {
        this.isSiteIDList = true;
      }

      this.jsonStoreCurd.getAllCountRecord(collectionName).then(result => {
        console.log("result >>> " + JSON.stringify(result));

        if (collectionName === Domains.AssetDetails) {
          this.gv.assetDetailCount = Number(result);
          this.isAssetDetails = false;
        } else if (collectionName === Domains.AlnDomain) {
          this.gv.alnDetailCount = Number(result);
          this.isAlDomain = false;
        } else if (collectionName === Domains.WindingGroup) {
          this.gv.windDetailCount = Number(result);
          this.isWindingGroup = false;
        } else if (collectionName === Domains.AmiData) {
          this.gv.amiDetailCount = Number(result);
          this.isAmiData = false;
        } else if (collectionName === Domains.SnCode) {
          this.gv.snCodeDetailCount = Number(result);
          this.isSnCode = false;
        } else if (collectionName === Domains.CustomerData) {
          this.gv.customerDetailCount = Number(result);
          this.isCustomerData = false;
        } else if (collectionName === Domains.UserStatus) {
          this.gv.userDetailCount = Number(result);
          this.isUserStatus = false;
        } else if (collectionName === Domains.Zone) {
          this.gv.zoneDetailCount = Number(result);
          this.isZone = false;
        } else if (collectionName === Domains.UserDetails) {
          this.gv.userStatusDetailCount = Number(result);
          this.isUserStatusDetails = false;
        } else if (collectionName === Domains.Executive) {
          this.gv.executiveListCount = Number(result);
          this.isExecutiveList = false;
        } else if (collectionName === Domains.TeamMembers) {
          this.gv.teamMemberListCount = Number(result);
          this.isTeamMemberList = false;
        } else if (collectionName === Domains.SiteID) {
          this.gv.siteIDListCount = Number(result);
          this.isSiteIDList = false;
        }

        resolve(DeviceConstants.RESP_SUCCESS_MSG);
      }, (error) => {
        console.log("error >>> " + JSON.stringify(error));

        if (collectionName === Domains.AssetDetails) {
          this.gv.assetDetailCount = 0;
          this.isAssetDetails = false;
        } else if (collectionName === Domains.AlnDomain) {
          this.gv.alnDetailCount = 0;
          this.isAlDomain = false;
        } else if (collectionName === Domains.WindingGroup) {
          this.gv.windDetailCount = 0;
          this.isWindingGroup = false;
        } else if (collectionName === Domains.AmiData) {
          this.gv.amiDetailCount = 0;
          this.isAmiData = false;
        } else if (collectionName === Domains.SnCode) {
          this.gv.snCodeDetailCount = 0;
          this.isSnCode = false;
        } else if (collectionName === Domains.CustomerData) {
          this.gv.customerDetailCount = 0;
          this.isCustomerData = false;
        } else if (collectionName === Domains.UserStatus) {
          this.gv.userStatusDetailCount = 0;
          this.isUserStatus = false;
        } else if (collectionName === Domains.Zone) {
          this.gv.zoneDetailCount = 0;
          this.isZone = false;
        } else if (collectionName === Domains.UserDetails) {
          this.gv.userDetailCount = 0;
          this.isUserStatusDetails = false;
        } else if (collectionName === Domains.Executive) {
          this.gv.executiveListCount = 0;
          this.isExecutiveList = false;
        } else if (collectionName === Domains.TeamMembers) {
          this.gv.teamMemberListCount = 0;
          this.isTeamMemberList = false;
        } else if (collectionName === Domains.SiteID) {
          this.gv.siteIDListCount = 0;
          this.isSiteIDList = false;
        }

        reject();
      });
    });
  }

  /**
   * Aln Domain Re Initialization...
   */
  getAlnDomainDetailCount() {

    return new Promise((resolve, reject) => {
      this.isAlDomain = true;
      this.jsonStoreStructure.initAlnDomain().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.AlnDomain);
        this.jsonStoreStructure.initAlnDomain().then((success) => {
          this.dataService.loadLoadJavaToGetRecords("alnDomain").then((results) => {
            var fullItems: any;
            fullItems = results;
            this.putIntoJsonStoring(fullItems.member, Domains.AlnDomain).then((storeResult) => {
              resolve(DeviceConstants.RESP_SUCCESS_MSG);
              this.isAlDomain = false;
            },
              (error) => {
                this.gv.alnDetailCount = 0;
                this.isAlDomain = false;
                reject();
              });
          });
        },
          (error) => {
            reject();
          });
      });
    });
  }

  /**
   * Winding Details Initialization...
   */
  getWindingDetailCount() {

    return new Promise((resolve, reject) => {
      this.isWindingGroup = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.WindingGroup);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {            
            var record: any;
            record = results;
            if(record.member.length === 0){
                this.putIntoJsonStoring([], Domains.WindingGroup).then((storeResult) => {
                this.isWindingGroup = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.windDetailCount = 0;
                this.isWindingGroup = false;
                reject(error);
              });
            }else{
              var fullItems = record.member[0];
              this.putIntoJsonStoring(fullItems.ta0windinggroup, Domains.WindingGroup).then((storeResult) => {
                this.isWindingGroup = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.windDetailCount = 0;
                this.isWindingGroup = false;
                reject(error);
              });
            }
            
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * Ami Details Data Initialization...
   */
  getAmiDataDetailCount() {

    return new Promise((resolve, reject) => {
      this.isAmiData = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.AmiData);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {
            var record: any;
            record = results;
            if(record.member.length === 0 ){
              this.putIntoJsonStoring([], Domains.AmiData).then((storeResult) => {
                this.isAmiData = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.amiDetailCount = 0;
                this.isAmiData = false;
                reject(error);
              });
            } else {
                var fullItems = record.member[0];
                this.putIntoJsonStoring(fullItems.ta0amidata, Domains.AmiData).then((storeResult) => {
                this.isAmiData = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.amiDetailCount = 0;
                this.isAmiData = false;
                reject(error);
              });
            }
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * Created: Ameer(29/9/2019)
   * Zone Details Data
   */
  getZoneDataDetailsCount() {
    debugger;
    return new Promise((resolve, reject) => {
      this.isZone = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.Zone);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {
            var record: any;
            record = results;
            if(record.member.length === 0 ){
              this.putIntoJsonStoring([], Domains.Zone).then((storeResult) => {
                this.isZone = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.zoneDetailCount = 0;
                this.isZone = false;
                reject(error);
              });
            } else {
              var fullItems = record.member[0];
              this.putIntoJsonStoring(fullItems.ta0zone, Domains.Zone).then((storeResult) => {
                this.isZone = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.zoneDetailCount = 0;
                this.isZone = false;
                reject(error);
              });
            }
          });
        },(error) => {
          reject(error);
        });
      });
    });
  }

  /**
   * Sncode details Result Initialization...
   */
  getSnCodeDetailCount() {

    return new Promise((resolve, reject) => {
      this.isSnCode = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.SnCode);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {
            var record: any;
            record = results;
            if(record.member.length === 0 ){
                this.putIntoJsonStoring([], Domains.SnCode).then((storeResult) => {
                this.isSnCode = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.snCodeDetailCount = 0;
                this.isSnCode = false;
                reject(error);
              });
            } else {
              var fullItems = record.member[0];            
              this.putIntoJsonStoring(fullItems.ta0sncode, Domains.SnCode).then((storeResult) => {
                this.isSnCode = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.snCodeDetailCount = 0;
                this.isSnCode = false;
                reject(error);
              });
            }            
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * Material details Result Initialization...
   */
  getMaterialDetailCount() {

    return new Promise((resolve, reject) => {
      this.isMaterialData = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.MaterialData);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {
            var record: any;
            record = results;
            if(record.member.length === 0 ){
                this.putIntoJsonStoring([], Domains.MaterialData).then((storeResult) => {
                this.isMaterialData = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.materialDetailCount = 0;
                this.isMaterialData = false;
                reject(error);
              });
            } else {
              var fullItems = record.member[0];
              this.putIntoJsonStoring(fullItems.ta0material, Domains.MaterialData).then((storeResult) => {
                this.isMaterialData = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.materialDetailCount = 0;
                this.isMaterialData = false;
                reject(error);
              });
            }            
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * Material details Result Initialization...
   */
  getCustomerTypeCount() {
    return new Promise((resolve, reject) => {
      this.isCustomerData = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.CustomerData);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {
            var record: any;
            record = results;
            if(record.member.length === 0 ){
              this.putIntoJsonStoring([], Domains.CustomerData).then((storeResult) => {
                this.isCustomerData = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.customerDetailCount = 0;
                this.isCustomerData = false;
                reject(error);
              });
            }else{
              var fullItems = record.member[0];
              this.putIntoJsonStoring(fullItems.ta0custtype, Domains.CustomerData).then((storeResult) => {
                this.isCustomerData = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.customerDetailCount = 0;
                this.isCustomerData = false;
                reject(error);
              });
            }
            
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * Get User Details Initialization...
   */
  getUserDetailCount() {
    return new Promise((resolve, reject) => {
      this.isUserStatus = true;
      this.jsonStoreStructure.initMasterDataLoad().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.UserStatus);
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
          this.dataService.loadMasterDataLoadJava().then((results) => {
            var record: any;
            record = results;
            if(record.member.length === 0 ){
              this.putIntoJsonStoring([], Domains.UserStatus).then((storeResult) => {
                this.isUserStatus = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.userDetailCount = 0;
                this.isUserStatus = false;
                reject(error);
              });
            } else {
              var fullItems = record.member[0];
              this.putIntoJsonStoring(fullItems.ta0userstatus, Domains.UserStatus).then((storeResult) => {
                this.isUserStatus = false;
                resolve(DeviceConstants.RESP_SUCCESS_MSG);
              },(error) => {
                this.gv.userDetailCount = 0;
                this.isUserStatus = false;
                reject(error);
              });
            }            
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * User Details Re Initialization...
   */
  getUserStatusDetailCount() {

    return new Promise((resolve, reject) => {
      this.isUserStatusDetails = true;
      this.jsonStoreStructure.initUserDetails().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.UserDetails);
        this.jsonStoreStructure.initUserDetails().then((success) => {
          this.dataService.loadUserDetailsLoadJava().then((results) => {
            var fullItems: any;
            fullItems = results;

            this.gv.personid = fullItems.member[0].person[0].personid;
            this.gv.employeetype = fullItems.member[0].person[0].employeetype;
            this.gv.department = fullItems.member[0].person[0].department;
            this.gv.ta0defsiteid = fullItems.member[0].defsite;
            this.gv.displayname = fullItems.member[0].person[0].displayname;
            this.gv.departContent = this.gv.department === 'RMR' ? 'lpc' : this.gv.department === 'MVHV' ? 'lpc' : this.gv.department === 'LV' ? 'lpc' : this.gv.department === 'SEALDETC' ? 'seal' : this.gv.department === 'SEALDETR' ? 'seal' : this.gv.department === 'SEALHQ' ? 'seal' : this.gv.department === 'SEAL' ? 'seal' : this.gv.department === 'SB' ? 'opc' : 'opc';
            this.gv.departmentCode = this.gv.department === 'RMR' ? '00' : this.gv.department === 'MVHV' ? '04' : this.gv.department === 'LV' ? '03' : this.gv.department === 'OPC' ? '02' : '01';
            if (this.gv.employeetype === 'SUPERVISOR' || this.gv.employeetype === 'EXECUTIVE') {
              this.gv.employeeTypeLogin = true;
            }
            else {
              this.gv.employeeTypeLogin = false;
            }
            this.putIntoJsonStoring(fullItems.member, Domains.UserDetails).then((storeResult) => {
              this.isUserStatusDetails = false;
              resolve(DeviceConstants.RESP_SUCCESS_MSG);
            },(error) => {
              this.gv.userStatusDetailCount = 0;
              this.isUserStatusDetails = false;
              reject(error);
            });
          });
        },
          (error) => {
            reject(error);
          });
      });
    });
  }

  /**
   * Description: Load executive data into local storage
   * Edited: Andy (28/02/2020)
   */
  getExecutiveListCount() {
    return new Promise((resolve, reject) => {
      this.isExecutiveList = true;
      this.jsonStoreStructure.initExecutiveList().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.Executive);
        this.jsonStoreStructure.initExecutiveList().then((success) => {
          this.dataService.fetchExecutiveDetails().then(results => {
            var executiveList: any;
            executiveList = results;
            this.putIntoJsonStoring(executiveList, Domains.Executive).then((storeResult) => {
              this.isExecutiveList = false;
              resolve(DeviceConstants.RESP_SUCCESS_MSG);              
            },(error) => {
              this.gv.executiveListCount = 0;
              this.isExecutiveList = false;
              reject(error);
            });
          });

        },
          (error) => {
            console.log('Error : ' + JSON.stringify(error));
            reject(error);
          });
      });
    });
  }

  /**
   * Description  : Load List of Team Members data into local storage.
   * Created      : Alif (06/03/2020)
   */
  getTeamMemberListCount() {
    return new Promise((resolve, reject) => {
      this.isTeamMemberList = true;
      this.jsonStoreStructure.initTeamMemberList().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.TeamMembers);
        this.jsonStoreStructure.initTeamMemberList().then((success) => {
          this.dataService.fetchLaborDetails().then(results => {
            var respResult: any = results;
            var teamMemberList: any;
            teamMemberList = respResult.respObject;
            this.putIntoJsonStoring(teamMemberList, Domains.TeamMembers).then((storeResult) => {
              this.isTeamMemberList = false;
              resolve(DeviceConstants.RESP_SUCCESS_MSG);                            
            }, (error) => {
              this.gv.teamMemberListCount = 0;
              this.isTeamMemberList = false;
              reject(error);
            });
          });
        });
      });
    });
  }

  /**
  * Description  : Load List of Team Members data into local storage.
  * Created      : Alif (09/03/2020)
  */
  getSiteIDListCount() {
    console.log("Inside getSiteIDListCount");
    return new Promise((resolve, reject) => {
      this.isSiteIDList = true;
      this.jsonStoreStructure.initSiteIDList().then((success) => {
        this.jsonStoreCurd.removeCollection(Domains.SiteID);
        this.jsonStoreStructure.initSiteIDList().then((success) => {
          this.dataService.fetchSiteParticularUser().then(results => {
            console.log("getSiteIDListCount results : "+JSON.stringify(results));
            var respResult: any = results;
            var siteID = respResult.respObject;
            this.putIntoJsonStoring(siteID, Domains.SiteID).then((storeResult) => {
              resolve(DeviceConstants.RESP_SUCCESS_MSG);                            
              this.isSiteIDList = false;
            }, (error) => {
              this.gv.siteIDListCount = 0;
              this.isSiteIDList = false;
              reject(error);
            });
          });
        });
      });
    });
  }

  /**
   * Take it as a Json Storage Capable...
   * @param jsonData 
   * @param collectionName 
   */
  putIntoJsonStoring(jsonData, collectionName) {

    var options = {
      username: this.gv.loginUserId,
      password: this.gv.password,
      push: true,
      markDirty: false
    };
    return new Promise(resolve => {
      debugger;
      WL.JSONStore.get(collectionName).add(jsonData, options).then((success) => {
        if (collectionName == 'ASSETDETAILS')
          this.gv.assetDetailCount = success;
        if (collectionName == 'ALNDOMAIN')
          this.gv.alnDetailCount = success;
        if (collectionName == 'SNCODE')
          this.gv.snCodeDetailCount = success;
        if (collectionName == 'WINDINGGROUP')
          this.gv.windDetailCount = success;
        if (collectionName == 'AMIDATA')
          this.gv.amiDetailCount = success;
        if (collectionName == 'MATERIALDATA')
          this.gv.materialDetailCount = success;
        if (collectionName == 'CUSTOMERDATA')
          this.gv.customerDetailCount = success;
        if (collectionName == 'USERSTATUS')
          this.gv.userDetailCount = success;
        if (collectionName == 'ZONE')
          this.gv.zoneDetailCount = success;
        if (collectionName == 'USERDETAILS')
          this.gv.userStatusDetailCount = success;
        if (collectionName == 'TA4SEALEXECUTIVE')
          this.gv.executiveListCount = success;
        if (collectionName == 'TA4MEMBERS')
          this.gv.teamMemberListCount = success;
        if (collectionName == 'SITEID')
          this.gv.siteIDListCount = success;
        resolve(success);
      },
        (error) => {
          if (collectionName == 'ASSETDETAILS') {
            this.gv.assetDetailCount = 0;
            this.isAssetDetails = false;
            this.getAlnDomainDetailCount().then((success) => {
              this.getWindingDetailCount().then((success) => {
                this.getAmiDataDetailCount().then((success) => {
                  this.getSnCodeDetailCount().then((success) => {
                    this.getMaterialDetailCount().then((success) => {
                      this.getCustomerTypeCount().then((success) => {
                        this.getUserDetailCount().then((success) => {
                          this.getUserStatusDetailCount().then((success) => {
                            this.getZoneDataDetailsCount().then((success) => {
                              this.getExecutiveListCount()
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          }
          if (collectionName == 'ALNDOMAIN') {
            this.gv.alnDetailCount = 0;
            this.isAlDomain = false;
            this.getWindingDetailCount().then((success) => {
              this.getAmiDataDetailCount().then((success) => {
                this.getSnCodeDetailCount().then((success) => {
                  this.getMaterialDetailCount().then((success) => {
                    this.getCustomerTypeCount().then((success) => {
                      this.getUserDetailCount().then((success) => {
                        this.getUserStatusDetailCount().then((success) => {
                          this.getZoneDataDetailsCount().then((success) => {
                            this.getExecutiveListCount()
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          }
          if (collectionName == 'SNCODE') {
            this.gv.snCodeDetailCount = 0;
            this.isSnCode = false;
            this.getSnCodeDetailCount().then((success) => {
              this.getMaterialDetailCount().then((success) => {
                this.getCustomerTypeCount().then((success) => {
                  this.getUserDetailCount().then((success) => {
                    this.getUserStatusDetailCount().then((success) => {
                      this.getZoneDataDetailsCount().then((success) => {
                        this.getExecutiveListCount()
                      });
                    });
                  });
                });
              });
            });
          }
          if (collectionName == 'WINDINGGROUP') {
            this.gv.windDetailCount = 0;
            this.isWindingGroup = false;
            this.getAmiDataDetailCount().then((success) => {
              this.getSnCodeDetailCount().then((success) => {
                this.getMaterialDetailCount().then((success) => {
                  this.getCustomerTypeCount().then((success) => {
                    this.getUserDetailCount().then((success) => {
                      this.getUserStatusDetailCount().then((success) => {
                        this.getZoneDataDetailsCount().then((success) => {
                          this.getExecutiveListCount()
                        });
                      });
                    });
                  });
                });
              });
            });
          }
          if (collectionName == 'AMIDATA') {
            this.gv.amiDetailCount = 0;
            this.isAmiData = false;
            this.getSnCodeDetailCount().then((success) => {
              this.getMaterialDetailCount().then((success) => {
                this.getCustomerTypeCount().then((success) => {
                  this.getUserDetailCount().then((success) => {
                    this.getUserStatusDetailCount().then((success) => {
                      this.getZoneDataDetailsCount().then((success) => {
                        this.getExecutiveListCount()
                      });
                    });
                  });
                });
              });
            });
          }
          if (collectionName == 'MATERIALDATA') {
            this.gv.materialDetailCount = 0;
            this.isMaterialData = false;
            this.getCustomerTypeCount().then((success) => {
              this.getUserDetailCount().then((success) => {
                this.getUserStatusDetailCount().then((success) => {
                  this.getZoneDataDetailsCount().then((success) => {
                    this.getExecutiveListCount()
                  });
                });
              });
            });
          }
          if (collectionName == 'CUSTOMERDATA') {
            this.gv.customerDetailCount = 0;
            this.isCustomerData = false;
            this.getUserDetailCount().then((success) => {
              this.getUserStatusDetailCount();
            });
          }
          if (collectionName == 'USERSTATUS') {
            this.gv.userDetailCount = 0;
            this.isUserStatus = false;
            this.getUserStatusDetailCount().then((success) => {
              this.getZoneDataDetailsCount().then((success) => {
                this.getExecutiveListCount()
              });
            });
          }
          if (collectionName == 'USERDETAILS') {
            this.gv.userStatusDetailCount = 0;
            this.isUserStatusDetails = false;
            this.getZoneDataDetailsCount().then((success) => {
              this.getExecutiveListCount()
            });
          }
          if (collectionName == 'TA4SEALEXECUTIVE') {
            this.gv.executiveListCount = 0;
            this.isExecutiveList = false;
            this.getZoneDataDetailsCount();
          }
          if (collectionName == 'ZONE') {
            this.gv.zoneDetailCount = 0;
            this.isZone = false;
          }
          if (collectionName == 'TA4MEMBERS') {
            this.gv.teamMemberListCount = 0;
            this.isTeamMemberList = false;
          }
          if (collectionName == 'SITEID') {
            this.gv.siteIDListCount = 0;
            this.isSiteIDList = false;
          }
        });
    });
  }
}
