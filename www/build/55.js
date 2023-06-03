webpackJsonp([55],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadLookUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_structure__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoadLookUpPage = /** @class */ (function () {
    function LoadLookUpPage(navCtrl, navParams, jsonStoreCurd, jsonStoreStructure, dataService, loadingCtrl, gv, gf) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jsonStoreCurd = jsonStoreCurd;
        this.jsonStoreStructure = jsonStoreStructure;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.gv = gv;
        this.gf = gf;
        this.isAssetDetails = false;
        this.isAlDomain = false;
        this.isWindingGroup = false;
        this.isAmiData = false;
        this.isZone = false;
        this.isSnCode = false;
        this.isMaterialData = false;
        this.isUserStatus = false;
        this.isUserStatusDetails = false;
        this.isCustomerData = false;
        this.isExecutiveList = false;
        this.isTeamMemberList = false;
        this.isSiteIDList = false;
    }
    /**
     * Descriptiom: Searching local LoadLookUp
     * Created    : Alif (24.02.2020)
     */
    LoadLookUpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("enter loadlookup data..");
        this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails).then(function (success) {
            _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain).then(function (success) {
                _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup).then(function (success) {
                    _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData).then(function (success) {
                        _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode).then(function (success) {
                            //this.getDetailOfflineCount(Domains.MaterialData).then((success) => {
                            _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData).then(function (success) {
                                _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus).then(function (success) {
                                    _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone).then(function (success) {
                                        _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Executive).then(function (success) {
                                            _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers).then(function (success) {
                                                _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SiteID).then(function (success) {
                                                    _this.getDetailOfflineCount(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserDetails);
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
    };
    /**
     * Load All Values...
     */
    LoadLookUpPage.prototype.getAllLoading = function () {
        var _this = this;
        this.getAssetDetailCount().then(function (success) {
            _this.getAlnDomainDetailCount().then(function (success) {
                _this.getWindingDetailCount().then(function (success) {
                    _this.getAmiDataDetailCount().then(function (success) {
                        _this.getSnCodeDetailCount().then(function (success) {
                            //this.getMaterialDetailCount().then((success) => {//ERMS tobe
                            _this.getCustomerTypeCount().then(function (success) {
                                _this.getUserDetailCount().then(function (success) {
                                    _this.getZoneDataDetailsCount().then(function (success) {
                                        _this.getExecutiveListCount().then(function (success) {
                                            _this.getTeamMemberListCount().then(function (success) {
                                                _this.getSiteIDListCount().then(function (success) {
                                                    _this.getUserStatusDetailCount();
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
    };
    // Asset Details Re Initialization...
    LoadLookUpPage.prototype.getAssetDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isAssetDetails = true;
            _this.jsonStoreStructure.initAssetDetails().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails);
                _this.jsonStoreStructure.initAssetDetails().then(function (success) {
                    _this.dataService.loadAssetDetailsLoadJava().then(function (results) {
                        var fullItems;
                        fullItems = results;
                        _this.putIntoJsonStoring(fullItems.member, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails).then(function (storeResult) {
                            resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            _this.isAssetDetails = false;
                        }, function (error) {
                            _this.gv.assetDetailCount = 0;
                            _this.isAssetDetails = false;
                        });
                    });
                }, function (error) {
                    reject();
                });
            });
        });
    };
    // Asset Details Re Initialization Offline...
    LoadLookUpPage.prototype.getDetailOfflineCount = function (collectionName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Default loading spinner..
            if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails) {
                _this.isAssetDetails = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain) {
                _this.isAlDomain = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup) {
                _this.isWindingGroup = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData) {
                _this.isAmiData = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode) {
                _this.isSnCode = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData) {
                _this.isCustomerData = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus) {
                _this.isUserStatus = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone) {
                _this.isZone = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserDetails) {
                _this.isUserStatusDetails = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Executive) {
                _this.isExecutiveList = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers) {
                _this.isTeamMemberList = true;
            }
            else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SiteID) {
                _this.isSiteIDList = true;
            }
            _this.jsonStoreCurd.getAllCountRecord(collectionName).then(function (result) {
                console.log("result >>> " + JSON.stringify(result));
                if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails) {
                    _this.gv.assetDetailCount = Number(result);
                    _this.isAssetDetails = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain) {
                    _this.gv.alnDetailCount = Number(result);
                    _this.isAlDomain = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup) {
                    _this.gv.windDetailCount = Number(result);
                    _this.isWindingGroup = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData) {
                    _this.gv.amiDetailCount = Number(result);
                    _this.isAmiData = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode) {
                    _this.gv.snCodeDetailCount = Number(result);
                    _this.isSnCode = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData) {
                    _this.gv.customerDetailCount = Number(result);
                    _this.isCustomerData = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus) {
                    _this.gv.userDetailCount = Number(result);
                    _this.isUserStatus = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone) {
                    _this.gv.zoneDetailCount = Number(result);
                    _this.isZone = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserDetails) {
                    _this.gv.userStatusDetailCount = Number(result);
                    _this.isUserStatusDetails = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Executive) {
                    _this.gv.executiveListCount = Number(result);
                    _this.isExecutiveList = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers) {
                    _this.gv.teamMemberListCount = Number(result);
                    _this.isTeamMemberList = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SiteID) {
                    _this.gv.siteIDListCount = Number(result);
                    _this.isSiteIDList = false;
                }
                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
            }, function (error) {
                console.log("error >>> " + JSON.stringify(error));
                if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails) {
                    _this.gv.assetDetailCount = 0;
                    _this.isAssetDetails = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain) {
                    _this.gv.alnDetailCount = 0;
                    _this.isAlDomain = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup) {
                    _this.gv.windDetailCount = 0;
                    _this.isWindingGroup = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData) {
                    _this.gv.amiDetailCount = 0;
                    _this.isAmiData = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode) {
                    _this.gv.snCodeDetailCount = 0;
                    _this.isSnCode = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData) {
                    _this.gv.customerDetailCount = 0;
                    _this.isCustomerData = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus) {
                    _this.gv.userStatusDetailCount = 0;
                    _this.isUserStatus = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone) {
                    _this.gv.zoneDetailCount = 0;
                    _this.isZone = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserDetails) {
                    _this.gv.userDetailCount = 0;
                    _this.isUserStatusDetails = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Executive) {
                    _this.gv.executiveListCount = 0;
                    _this.isExecutiveList = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers) {
                    _this.gv.teamMemberListCount = 0;
                    _this.isTeamMemberList = false;
                }
                else if (collectionName === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SiteID) {
                    _this.gv.siteIDListCount = 0;
                    _this.isSiteIDList = false;
                }
                reject();
            });
        });
    };
    /**
     * Aln Domain Re Initialization...
     */
    LoadLookUpPage.prototype.getAlnDomainDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isAlDomain = true;
            _this.jsonStoreStructure.initAlnDomain().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain);
                _this.jsonStoreStructure.initAlnDomain().then(function (success) {
                    _this.dataService.loadLoadJavaToGetRecords("alnDomain").then(function (results) {
                        var fullItems;
                        fullItems = results;
                        _this.putIntoJsonStoring(fullItems.member, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain).then(function (storeResult) {
                            resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            _this.isAlDomain = false;
                        }, function (error) {
                            _this.gv.alnDetailCount = 0;
                            _this.isAlDomain = false;
                            reject();
                        });
                    });
                }, function (error) {
                    reject();
                });
            });
        });
    };
    /**
     * Winding Details Initialization...
     */
    LoadLookUpPage.prototype.getWindingDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isWindingGroup = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup).then(function (storeResult) {
                                _this.isWindingGroup = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.windDetailCount = 0;
                                _this.isWindingGroup = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0windinggroup, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup).then(function (storeResult) {
                                _this.isWindingGroup = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.windDetailCount = 0;
                                _this.isWindingGroup = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Ami Details Data Initialization...
     */
    LoadLookUpPage.prototype.getAmiDataDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isAmiData = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData).then(function (storeResult) {
                                _this.isAmiData = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.amiDetailCount = 0;
                                _this.isAmiData = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0amidata, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AmiData).then(function (storeResult) {
                                _this.isAmiData = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.amiDetailCount = 0;
                                _this.isAmiData = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Created: Ameer(29/9/2019)
     * Zone Details Data
     */
    LoadLookUpPage.prototype.getZoneDataDetailsCount = function () {
        var _this = this;
        debugger;
        return new Promise(function (resolve, reject) {
            _this.isZone = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone).then(function (storeResult) {
                                _this.isZone = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.zoneDetailCount = 0;
                                _this.isZone = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0zone, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Zone).then(function (storeResult) {
                                _this.isZone = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.zoneDetailCount = 0;
                                _this.isZone = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Sncode details Result Initialization...
     */
    LoadLookUpPage.prototype.getSnCodeDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isSnCode = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode).then(function (storeResult) {
                                _this.isSnCode = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.snCodeDetailCount = 0;
                                _this.isSnCode = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0sncode, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SnCode).then(function (storeResult) {
                                _this.isSnCode = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.snCodeDetailCount = 0;
                                _this.isSnCode = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Material details Result Initialization...
     */
    LoadLookUpPage.prototype.getMaterialDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isMaterialData = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].MaterialData);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].MaterialData).then(function (storeResult) {
                                _this.isMaterialData = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.materialDetailCount = 0;
                                _this.isMaterialData = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0material, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].MaterialData).then(function (storeResult) {
                                _this.isMaterialData = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.materialDetailCount = 0;
                                _this.isMaterialData = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Material details Result Initialization...
     */
    LoadLookUpPage.prototype.getCustomerTypeCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isCustomerData = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData).then(function (storeResult) {
                                _this.isCustomerData = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.customerDetailCount = 0;
                                _this.isCustomerData = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0custtype, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData).then(function (storeResult) {
                                _this.isCustomerData = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.customerDetailCount = 0;
                                _this.isCustomerData = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Get User Details Initialization...
     */
    LoadLookUpPage.prototype.getUserDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isUserStatus = true;
            _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus);
                _this.jsonStoreStructure.initMasterDataLoad().then(function (success) {
                    _this.dataService.loadMasterDataLoadJava().then(function (results) {
                        var record;
                        record = results;
                        if (record.member.length === 0) {
                            _this.putIntoJsonStoring([], __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus).then(function (storeResult) {
                                _this.isUserStatus = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.userDetailCount = 0;
                                _this.isUserStatus = false;
                                reject(error);
                            });
                        }
                        else {
                            var fullItems = record.member[0];
                            _this.putIntoJsonStoring(fullItems.ta0userstatus, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus).then(function (storeResult) {
                                _this.isUserStatus = false;
                                resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            }, function (error) {
                                _this.gv.userDetailCount = 0;
                                _this.isUserStatus = false;
                                reject(error);
                            });
                        }
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * User Details Re Initialization...
     */
    LoadLookUpPage.prototype.getUserStatusDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isUserStatusDetails = true;
            _this.jsonStoreStructure.initUserDetails().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserDetails);
                _this.jsonStoreStructure.initUserDetails().then(function (success) {
                    _this.dataService.loadUserDetailsLoadJava().then(function (results) {
                        var fullItems;
                        fullItems = results;
                        _this.gv.personid = fullItems.member[0].person[0].personid;
                        _this.gv.employeetype = fullItems.member[0].person[0].employeetype;
                        _this.gv.department = fullItems.member[0].person[0].department;
                        _this.gv.ta0defsiteid = fullItems.member[0].defsite;
                        _this.gv.displayname = fullItems.member[0].person[0].displayname;
                        _this.gv.departContent = _this.gv.department === 'RMR' ? 'lpc' : _this.gv.department === 'MVHV' ? 'lpc' : _this.gv.department === 'LV' ? 'lpc' : _this.gv.department === 'SEALDETC' ? 'seal' : _this.gv.department === 'SEALDETR' ? 'seal' : _this.gv.department === 'SEALHQ' ? 'seal' : _this.gv.department === 'SEAL' ? 'seal' : _this.gv.department === 'SB' ? 'opc' : 'opc';
                        _this.gv.departmentCode = _this.gv.department === 'RMR' ? '00' : _this.gv.department === 'MVHV' ? '04' : _this.gv.department === 'LV' ? '03' : _this.gv.department === 'OPC' ? '02' : '01';
                        if (_this.gv.employeetype === 'SUPERVISOR' || _this.gv.employeetype === 'EXECUTIVE') {
                            _this.gv.employeeTypeLogin = true;
                        }
                        else {
                            _this.gv.employeeTypeLogin = false;
                        }
                        _this.putIntoJsonStoring(fullItems.member, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].UserDetails).then(function (storeResult) {
                            _this.isUserStatusDetails = false;
                            resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                        }, function (error) {
                            _this.gv.userStatusDetailCount = 0;
                            _this.isUserStatusDetails = false;
                            reject(error);
                        });
                    });
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Description: Load executive data into local storage
     * Edited: Andy (28/02/2020)
     */
    LoadLookUpPage.prototype.getExecutiveListCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isExecutiveList = true;
            _this.jsonStoreStructure.initExecutiveList().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Executive);
                _this.jsonStoreStructure.initExecutiveList().then(function (success) {
                    _this.dataService.fetchExecutiveDetails().then(function (results) {
                        var executiveList;
                        executiveList = results;
                        _this.putIntoJsonStoring(executiveList, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].Executive).then(function (storeResult) {
                            _this.isExecutiveList = false;
                            resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                        }, function (error) {
                            _this.gv.executiveListCount = 0;
                            _this.isExecutiveList = false;
                            reject(error);
                        });
                    });
                }, function (error) {
                    console.log('Error : ' + JSON.stringify(error));
                    reject(error);
                });
            });
        });
    };
    /**
     * Description  : Load List of Team Members data into local storage.
     * Created      : Alif (06/03/2020)
     */
    LoadLookUpPage.prototype.getTeamMemberListCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isTeamMemberList = true;
            _this.jsonStoreStructure.initTeamMemberList().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers);
                _this.jsonStoreStructure.initTeamMemberList().then(function (success) {
                    _this.dataService.fetchLaborDetails().then(function (results) {
                        var respResult = results;
                        var teamMemberList;
                        teamMemberList = respResult.respObject;
                        _this.putIntoJsonStoring(teamMemberList, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers).then(function (storeResult) {
                            _this.isTeamMemberList = false;
                            resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                        }, function (error) {
                            _this.gv.teamMemberListCount = 0;
                            _this.isTeamMemberList = false;
                            reject(error);
                        });
                    });
                });
            });
        });
    };
    /**
    * Description  : Load List of Team Members data into local storage.
    * Created      : Alif (09/03/2020)
    */
    LoadLookUpPage.prototype.getSiteIDListCount = function () {
        var _this = this;
        console.log("Inside getSiteIDListCount");
        return new Promise(function (resolve, reject) {
            _this.isSiteIDList = true;
            _this.jsonStoreStructure.initSiteIDList().then(function (success) {
                _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SiteID);
                _this.jsonStoreStructure.initSiteIDList().then(function (success) {
                    _this.dataService.fetchSiteParticularUser().then(function (results) {
                        console.log("getSiteIDListCount results : " + JSON.stringify(results));
                        var respResult = results;
                        var siteID = respResult.respObject;
                        _this.putIntoJsonStoring(siteID, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].SiteID).then(function (storeResult) {
                            resolve(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG);
                            _this.isSiteIDList = false;
                        }, function (error) {
                            _this.gv.siteIDListCount = 0;
                            _this.isSiteIDList = false;
                            reject(error);
                        });
                    });
                });
            });
        });
    };
    /**
     * Take it as a Json Storage Capable...
     * @param jsonData
     * @param collectionName
     */
    LoadLookUpPage.prototype.putIntoJsonStoring = function (jsonData, collectionName) {
        var _this = this;
        var options = {
            username: this.gv.loginUserId,
            password: this.gv.password,
            push: true,
            markDirty: false
        };
        return new Promise(function (resolve) {
            debugger;
            WL.JSONStore.get(collectionName).add(jsonData, options).then(function (success) {
                if (collectionName == 'ASSETDETAILS')
                    _this.gv.assetDetailCount = success;
                if (collectionName == 'ALNDOMAIN')
                    _this.gv.alnDetailCount = success;
                if (collectionName == 'SNCODE')
                    _this.gv.snCodeDetailCount = success;
                if (collectionName == 'WINDINGGROUP')
                    _this.gv.windDetailCount = success;
                if (collectionName == 'AMIDATA')
                    _this.gv.amiDetailCount = success;
                if (collectionName == 'MATERIALDATA')
                    _this.gv.materialDetailCount = success;
                if (collectionName == 'CUSTOMERDATA')
                    _this.gv.customerDetailCount = success;
                if (collectionName == 'USERSTATUS')
                    _this.gv.userDetailCount = success;
                if (collectionName == 'ZONE')
                    _this.gv.zoneDetailCount = success;
                if (collectionName == 'USERDETAILS')
                    _this.gv.userStatusDetailCount = success;
                if (collectionName == 'TA4SEALEXECUTIVE')
                    _this.gv.executiveListCount = success;
                if (collectionName == 'TA4MEMBERS')
                    _this.gv.teamMemberListCount = success;
                if (collectionName == 'SITEID')
                    _this.gv.siteIDListCount = success;
                resolve(success);
            }, function (error) {
                if (collectionName == 'ASSETDETAILS') {
                    _this.gv.assetDetailCount = 0;
                    _this.isAssetDetails = false;
                    _this.getAlnDomainDetailCount().then(function (success) {
                        _this.getWindingDetailCount().then(function (success) {
                            _this.getAmiDataDetailCount().then(function (success) {
                                _this.getSnCodeDetailCount().then(function (success) {
                                    _this.getMaterialDetailCount().then(function (success) {
                                        _this.getCustomerTypeCount().then(function (success) {
                                            _this.getUserDetailCount().then(function (success) {
                                                _this.getUserStatusDetailCount().then(function (success) {
                                                    _this.getZoneDataDetailsCount().then(function (success) {
                                                        _this.getExecutiveListCount();
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
                    _this.gv.alnDetailCount = 0;
                    _this.isAlDomain = false;
                    _this.getWindingDetailCount().then(function (success) {
                        _this.getAmiDataDetailCount().then(function (success) {
                            _this.getSnCodeDetailCount().then(function (success) {
                                _this.getMaterialDetailCount().then(function (success) {
                                    _this.getCustomerTypeCount().then(function (success) {
                                        _this.getUserDetailCount().then(function (success) {
                                            _this.getUserStatusDetailCount().then(function (success) {
                                                _this.getZoneDataDetailsCount().then(function (success) {
                                                    _this.getExecutiveListCount();
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
                    _this.gv.snCodeDetailCount = 0;
                    _this.isSnCode = false;
                    _this.getSnCodeDetailCount().then(function (success) {
                        _this.getMaterialDetailCount().then(function (success) {
                            _this.getCustomerTypeCount().then(function (success) {
                                _this.getUserDetailCount().then(function (success) {
                                    _this.getUserStatusDetailCount().then(function (success) {
                                        _this.getZoneDataDetailsCount().then(function (success) {
                                            _this.getExecutiveListCount();
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
                if (collectionName == 'WINDINGGROUP') {
                    _this.gv.windDetailCount = 0;
                    _this.isWindingGroup = false;
                    _this.getAmiDataDetailCount().then(function (success) {
                        _this.getSnCodeDetailCount().then(function (success) {
                            _this.getMaterialDetailCount().then(function (success) {
                                _this.getCustomerTypeCount().then(function (success) {
                                    _this.getUserDetailCount().then(function (success) {
                                        _this.getUserStatusDetailCount().then(function (success) {
                                            _this.getZoneDataDetailsCount().then(function (success) {
                                                _this.getExecutiveListCount();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
                if (collectionName == 'AMIDATA') {
                    _this.gv.amiDetailCount = 0;
                    _this.isAmiData = false;
                    _this.getSnCodeDetailCount().then(function (success) {
                        _this.getMaterialDetailCount().then(function (success) {
                            _this.getCustomerTypeCount().then(function (success) {
                                _this.getUserDetailCount().then(function (success) {
                                    _this.getUserStatusDetailCount().then(function (success) {
                                        _this.getZoneDataDetailsCount().then(function (success) {
                                            _this.getExecutiveListCount();
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
                if (collectionName == 'MATERIALDATA') {
                    _this.gv.materialDetailCount = 0;
                    _this.isMaterialData = false;
                    _this.getCustomerTypeCount().then(function (success) {
                        _this.getUserDetailCount().then(function (success) {
                            _this.getUserStatusDetailCount().then(function (success) {
                                _this.getZoneDataDetailsCount().then(function (success) {
                                    _this.getExecutiveListCount();
                                });
                            });
                        });
                    });
                }
                if (collectionName == 'CUSTOMERDATA') {
                    _this.gv.customerDetailCount = 0;
                    _this.isCustomerData = false;
                    _this.getUserDetailCount().then(function (success) {
                        _this.getUserStatusDetailCount();
                    });
                }
                if (collectionName == 'USERSTATUS') {
                    _this.gv.userDetailCount = 0;
                    _this.isUserStatus = false;
                    _this.getUserStatusDetailCount().then(function (success) {
                        _this.getZoneDataDetailsCount().then(function (success) {
                            _this.getExecutiveListCount();
                        });
                    });
                }
                if (collectionName == 'USERDETAILS') {
                    _this.gv.userStatusDetailCount = 0;
                    _this.isUserStatusDetails = false;
                    _this.getZoneDataDetailsCount().then(function (success) {
                        _this.getExecutiveListCount();
                    });
                }
                if (collectionName == 'TA4SEALEXECUTIVE') {
                    _this.gv.executiveListCount = 0;
                    _this.isExecutiveList = false;
                    _this.getZoneDataDetailsCount();
                }
                if (collectionName == 'ZONE') {
                    _this.gv.zoneDetailCount = 0;
                    _this.isZone = false;
                }
                if (collectionName == 'TA4MEMBERS') {
                    _this.gv.teamMemberListCount = 0;
                    _this.isTeamMemberList = false;
                }
                if (collectionName == 'SITEID') {
                    _this.gv.siteIDListCount = 0;
                    _this.isSiteIDList = false;
                }
            });
        });
    };
    LoadLookUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-load-look-up',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/load-look-up/load-look-up.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Load Look Up Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- Start: All Collections -->\n    <ion-item>\n      <ion-icon name="md-cube" item-start></ion-icon>\n      <h2>All Collections Details</h2>\n      <p text-wrap>Load all collections at one time.</p>\n      <button mode="md" item-end ion-button (click)="getAllLoading()" [disabled]="isAssetDetails || gv.testMobile">\n        Load All\n      </button>\n    </ion-item>\n    <!-- End: All Collections -->\n    <!-- Start: Asset Details -->\n    <ion-item>\n      <ion-icon name="md-briefcase" item-start></ion-icon>\n      <h2>Asset Details</h2>\n      <p>Count: {{ gv.assetDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isAssetDetails === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isAssetDetails || gv.testMobile"\n        (click)="getAssetDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Asset Details -->\n    <!-- Start: Lookup Values -->\n    <ion-item>\n      <ion-icon name="md-filing" item-start></ion-icon>\n      <h2>Lookup Values</h2>\n      <p>Count: {{ gv.alnDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isAlDomain === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isAlDomain || gv.testMobile"\n        (click)="getAlnDomainDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Lookup Values -->\n    <!-- Start: Winding Group -->\n    <ion-item>\n      <ion-icon name="md-film" item-start></ion-icon>\n      <h2>Winding Group</h2>\n      <p>Count: {{ gv.windDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isWindingGroup === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isWindingGroup || gv.testMobile"\n        (click)="getWindingDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Winding Group -->\n    <!-- Start: AMI Data -->\n    <ion-item>\n      <ion-icon name="md-flag" item-start></ion-icon>\n      <h2>AMI Data</h2>\n      <p>Count: {{ gv.amiDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isAmiData === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isAmiData || gv.testMobile" (click)="getAmiDataDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: AMI Data -->\n    <!-- Start: SN Code -->\n    <ion-item>\n      <ion-icon name="md-list-box" item-start></ion-icon>\n      <h2>SN Code</h2>\n      <p>Count: {{ gv.snCodeDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isSnCode === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isSnCode || gv.testMobile" (click)="getSnCodeDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: SN Code -->\n    <!-- Start: Customer Data -->\n    <ion-item>\n      <ion-icon name="md-stats" item-start></ion-icon>\n      <h2>Customer Data</h2>\n      <p>Count: {{ gv.customerDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isCustomerData === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isCustomerData || gv.testMobile"\n        (click)="getCustomerTypeCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Customer Data -->\n    <!-- Start: SO User Status -->\n    <ion-item>\n      <ion-icon name="md-chatbubbles" item-start></ion-icon>\n      <h2>SO User Status</h2>\n      <p>Count: {{ gv.userDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isUserStatus === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isUserStatus || gv.testMobile" (click)="getUserDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: SO User Status -->\n    <!-- Start: Zone Details -->\n    <ion-item>\n      <ion-icon name="md-map" item-start></ion-icon>\n      <h2>Zone Details</h2>\n      <p>Count: {{ gv.zoneDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isZone === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isZone || gv.testMobile" (click)="getZoneDataDetailsCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Zone Details -->\n    <!-- Start: Executive List -->\n    <ion-item>\n      <ion-icon name="md-contacts" item-start></ion-icon>\n      <h2>List of Executive\'s</h2>\n      <p>Count: {{ gv.executiveListCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isExecutiveList === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isExecutiveList || gv.testMobile"\n        (click)="getExecutiveListCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Executive List -->\n    <!-- Start: Team Member List -->\n    <ion-item>\n      <ion-icon name="md-people" item-start></ion-icon>\n      <h2>List of Team Member\'s</h2>\n      <p>Count: {{ gv.teamMemberListCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isTeamMemberList === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isTeamMemberList || gv.testMobile"\n        (click)="getTeamMemberListCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Team Member List -->\n    <!-- Start: Site ID List -->\n    <ion-item>\n      <ion-icon name="md-compass" item-start></ion-icon>\n      <h2>List of Site ID\'s</h2>\n      <p>Count: {{ gv.siteIDListCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isSiteIDList === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isSiteIDList || gv.testMobile" (click)="getSiteIDListCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Site ID List -->\n    <!-- Start: Login User Details -->\n    <ion-item>\n      <ion-icon name="md-contact" item-start></ion-icon>\n      <h2>Login User Details</h2>\n      <p>Count: {{ gv.userStatusDetailCount || 0 }}</p>\n      <ion-spinner name="bubbles" item-end *ngIf="isUserStatusDetails === true"></ion-spinner>\n      <button mode="md" item-end ion-button [disabled]="isUserStatusDetails || gv.testMobile"\n        (click)="getUserStatusDetailCount()">\n        Load\n      </button>\n    </ion-item>\n    <!-- End: Login User Details -->\n  </ion-list>\n\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center><strong>S.No</strong></ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center><strong>Collections</strong></ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center><strong>Count</strong></ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;">\n          <button ion-button [disabled]="gv.testMobile ?  true : false" (click)="getAllLoading();">Load All</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>1.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>Asset Details</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isAssetDetails === true"></ion-spinner><span\n            *ngIf="isAssetDetails === false">\n            {{ gv.assetDetailCount }} </span>\n        </ion-col>\n        <ion-col style="text-align: right;"> <button ion-button [disabled]="isAssetDetails || gv.testMobile"\n            (click)="getAssetDetailCount();">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>2.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>Lookup Values</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isAlDomain === true"></ion-spinner><span *ngIf="isAlDomain === false">{{\n            gv.alnDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isAlDomain || gv.testMobile" (click)="getAlnDomainDetailCount();">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>3.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>Winding Group</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isWindingGroup === true"></ion-spinner><span\n            *ngIf="isWindingGroup === false">{{\n            gv.windDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isWindingGroup || gv.testMobile" (click)="getWindingDetailCount()">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>4.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>AMI Data</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isAmiData === true"></ion-spinner><span *ngIf="isAmiData === false">{{\n            gv.amiDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isAmiData || gv.testMobile" (click)="getAmiDataDetailCount();">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>5.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>SN Code</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isSnCode === true"></ion-spinner><span *ngIf="isSnCode === false">{{\n            gv.snCodeDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isSnCode || gv.testMobile" (click)="getSnCodeDetailCount()">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>6.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>Material Data</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isMaterialData === true"></ion-spinner><span\n            *ngIf="isMaterialData === false">{{\n            gv.materialDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isMaterialData || gv.testMobile" (click)="getMaterialDetailCount()">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>7.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>Customer Data</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isCustomerData === true"></ion-spinner><span\n            *ngIf="isCustomerData === false">{{\n            gv.customerDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isCustomerData || gv.testMobile" (click)="getCustomerTypeCount()">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>8.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>SO User Status</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isUserStatus === true"></ion-spinner><span *ngIf="isUserStatus === false">{{\n            gv.userDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isUserStatus || gv.testMobile" (click)="getUserDetailCount()">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>9.</ion-col>\n        <ion-col col-6 col-md-6 col-sm-6 align-self-center>Login User Details</ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-spinner name="bubbles" *ngIf="isUserStatusDetails === true"></ion-spinner>\n          <span *ngIf="isUserStatusDetails === false">{{ gv.userStatusDetailCount }}</span>\n        </ion-col>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: right;"> <button ion-button\n            [disabled]="isUserStatusDetails || gv.testMobile" (click)="getUserStatusDetailCount()">Load</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n  </ion-list> -->\n</ion-content>\n<!--\n<ion-content padding *ngIf="gv.testMobile" style="background-color:  rgba(0,0,0,0.3);">\n  <h1 class="centered">\n      No Network Connection...\n  </h1>\n</ion-content>-->'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/load-look-up/load-look-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_structure__["a" /* JsonStoreStructureProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */]])
    ], LoadLookUpPage);
    return LoadLookUpPage;
}());

//# sourceMappingURL=load-look-up.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadLookUpPageModule", function() { return LoadLookUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__load_look_up__ = __webpack_require__(1008);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadLookUpPageModule = /** @class */ (function () {
    function LoadLookUpPageModule() {
    }
    LoadLookUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__load_look_up__["a" /* LoadLookUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__load_look_up__["a" /* LoadLookUpPage */]),
            ],
        })
    ], LoadLookUpPageModule);
    return LoadLookUpPageModule;
}());

//# sourceMappingURL=load-look-up.module.js.map

/***/ })

});
//# sourceMappingURL=55.js.map