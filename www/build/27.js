webpackJsonp([27],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_work_order_work_order__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_json_store_json_store_structure__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_assigntask_assigntask__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_json_store_handler_json_store_handler__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var WoHomePage = /** @class */ (function () {
    /*
    & My Function
    ! Some Alert
    ? Questions
    ^ Some stuff
    * Highlights
    ~ Arrow Function
    TODO Colorful
    */
    function WoHomePage(navCtrl, appCtrl, menuCtrl, dataService, jsonStoreStructure, jsonHandler, jsonStoreCurd, platform, renderer, workOrderService, loadingCtrl, popoverCtrl, params, alertCtrl, modalCtrl, gv, gf, nativeStorage) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.jsonStoreStructure = jsonStoreStructure;
        this.jsonHandler = jsonHandler;
        this.jsonStoreCurd = jsonStoreCurd;
        this.platform = platform;
        this.renderer = renderer;
        this.workOrderService = workOrderService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.gv = gv;
        this.gf = gf;
        this.nativeStorage = nativeStorage;
        this.p = 1;
        this.offset = 0;
        this.isValid = false;
        this.worktypeParam = '';
        this.count = 0;
        this.totalcount = 0;
        this.pageCount = 0;
        this.groupedWorktype = [];
        this.newWorktype = [];
        this.showButtonCover = true;
        this.refSegment = 'workorder';
        this.soType = [];
        this.showDiv = false;
        this.sortOrderList = 'wonum';
        this.sortOrderListdefault = [{ "wonum": "asc" }];
        this.sortOrder = 'asc';
        this.sortTitle = 'arrow-up';
        this.selectedItem = [];
        this.selectCheck = false;
        this.selectText = "md-checkmark-circle";
        this.sendData = [];
        this.selectAllBool = false;
        this.pageSelectCtrl = [];
        this.syncData = [];
        this.filter = false;
        this.statusview = false;
        this.statusIndex = null;
        this.refreshSO = false;
        console.log(">WoHomePage >>constructor");
        //^Start Timer for GPS live update
        /*
        if (!this.gv.testMobile) {
          console.log("WoHomePage >>> Trigger start update for GPS");
          this.gf.startTimer(5);
          this.gf.checkGPSCoordinate();
        } else {
          console.log("WoHomePage >>> Trigger stop update for GPS");
          this.gf.stopTimer();
        }
        */
        console.log(">WoHomePage >>constructor >>>Trigger initializeApp");
        this.gf.initializeApp();
        console.log(">WoHomePage >>constructor >>>Enable Menu");
        this.menuCtrl.enable(true, 'myMenu');
        console.log(">WoHomePage >>constructor >>>Set pagination");
        if (this.gv.ctrl_limitPagination == null) {
            this.gv.ctrl_limitPagination = 25;
        }
    }
    WoHomePage.prototype.nl2br = function (text) {
        return text.replace('\\r\\n', '<br/>');
    };
    WoHomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(">WoHomePage >>ionViewWillEnter");
        console.log(">WoHomePage >>ionViewWillEnter >>>Enable Menu");
        this.menuCtrl.enable(true, 'myMenu');
        console.log(">WoHomePage >>ionViewWillEnter >>>Check Network Connection");
        if (!this.gv.testMobile && !this.gv.syncCheck) {
            this.gv.syncCheck = true;
            //^Sync up data...
            console.log(">WoHomePage >>ionViewWillEnter >>>Trigger this.gf.syncUpActivity");
            this.gf.syncUpActivity().then(function (result) {
                //^Sync Up activity...
                console.info(">WoHomePage >>ionViewWillEnter >>>Response Message:", JSON.stringify(result));
                _this.gf.stopLoading();
            }).catch(function (errorResponse) {
                console.info(">WoHomePage >>ionViewWillEnter >>>Error Message:", JSON.stringify(errorResponse));
                _this.gf.displayToast(errorResponse);
            });
        }
        else {
            this.gv.syncCheck = false;
        }
        //^Update Application
        console.log(">WoHomePage >>ionViewWillEnter >>>Update Application");
        this.updateApplication();
        //^Update Data Locally
        //^Created: Alif (22.01.2020)
        console.log(">WoHomePage >>ionViewWillEnter >>>Set pagination limit");
        if (this.gv.ctrl_limitPagination == null) {
            this.gv.ctrl_limitPagination = 25;
        }
        /*
         * Description  : Remove from list 'ZISR' & 'ZRCE'.
         * Created      : Alif (19.07.2019)
         */
        console.log(">WoHomePage >>ionViewWillEnter >>> departmentCode : " + this.gv.departmentCode);
        if (this.gv.departContent === 'seal') {
            this.worktypeList = [
                'ZISO',
                'ZISP',
                'ZIST',
                'ZDCN',
                'ZRCN',
                'ALL'
            ];
        }
        else if (this.gv.departContent === 'lpc') {
            this.worktypeList = [
                'ZINL',
                'ZINR',
                'ZISR',
                'ZIST',
                'ZRCE',
                'ZRMV',
                'ZRPC',
                'ZSRO',
                'ZUDN',
                'ZMMR',
                'ALL'
            ];
        }
        else {
            this.worktypeList = [
                'ZIST',
                'ZRMV',
                'ZUDN',
                'ZRPC',
                'ZSRO',
                'ZINS',
                'ZRPM',
                'ZSRO',
                'ZSIN',
                'ZSIR',
                'ZSRP',
                'ZINO',
                'ZSIT',
                'ZMMR',
                'ALL'
            ];
        }
        console.log(">WoHomePage >>ionViewWillEnter >>> worktypeList : " + JSON.stringify(this.worktypeList));
        var data = this.params.get('paramIndex');
        console.log(">WoHomePage >>ionViewWillEnter >>> JSON Data : " + JSON.stringify(data));
        if (typeof data !== 'undefined') {
            this.gv.soType = data;
        }
        console.log(">WoHomePage >>ionViewWillEnter >>> JSON Data : " + JSON.stringify(this.gv.initItems));
        if (typeof (this.gv.initItems) !== 'undefined' && this.gv.initItems !== '') {
            console.log(">WoHomePage >>ionViewWillEnter >>> this.gv.initItems is not empty");
            this.newWorktype = this.gv.newWorktype;
            console.log(">WoHomePage >>ionViewWillEnter >>> this.newWorktype size : " + this.newWorktype.length);
            var worktypecode = (typeof this.gv.soType == 'object') ? this.gv.soType : [this.gv.soType];
            this.soType = worktypecode;
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.setpagination");
            this.setpagination(this.gv.pagectrl);
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.goToWorkOrderHome");
            this.goToWorkOrderHome(worktypecode);
        }
        else {
            console.log(">WoHomePage >>ionViewWillEnter >>> this.gv.initItems is empty");
            for (var i = 0; i < this.newWorktype.length; i++) {
                this.newWorktype.push(i);
            }
            console.log(">WoHomePage >>ionViewWillEnter >>> this.newWorktype size : " + this.newWorktype.length);
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.fetchWorkOrderUsingSavedQuery");
            this.fetchWorkOrderUsingSavedQuery();
        }
        //^Refresh based on current tab section
        if (this.refSegment === "workorder") {
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === workorder");
            this.setpagination(this.gv.pagectrl);
        }
        else if (this.refSegment == "pin") {
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === pin");
            var queryPart = WL.JSONStore.QueryPart().equal("ta0favourite", 'Y');
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit with ta0favourite = Y");
            this.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart).then(function (result) {
                _this.items = result;
                _this.gv.initItems = _this.items;
                _this.itemsOriginal = _this.items;
                console.log(">WoHomePage >>ionViewWillEnter >>>this.gv.initItems size : " + _this.gv.initItems.length);
                console.log(">WoHomePage >>ionViewWillEnter >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
                console.log(">WoHomePage >>ionViewWillEnter >>>this.items size : " + _this.items.length);
            });
        }
        else if (this.refSegment == "pending") {
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === pending");
            var searchObj = [];
            searchObj[0] = 'PENDKIV';
            searchObj[1] = 'PENDCLSD';
            searchObj[2] = 'PENDTECO';
            var queryPart = WL.JSONStore.QueryPart().inside('status', searchObj);
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit with status PENDKIV PENDCLSD PENDTECO");
            this.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart)
                .then(function (result) {
                _this.items = result;
                _this.gv.initItems = _this.items;
                _this.itemsOriginal = _this.items;
                console.log(">WoHomePage >>ionViewWillEnter >>>this.gv.initItems size : " + _this.gv.initItems.length);
                console.log(">WoHomePage >>ionViewWillEnter >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
                console.log(">WoHomePage >>ionViewWillEnter >>>this.items size : " + _this.items.length);
            });
        }
        else if (this.refSegment == "pendsyncup") {
            console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === pendsyncup");
            this.jsonStoreCurd.getMarkDirty(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
                _this.syncData = result;
            });
        }
    };
    /*
     * Update the User Application...
     */
    WoHomePage.prototype.updateApplication = function () {
        console.log(">WoHomePage >>updateApplication");
        WLAuthorizationManager.obtainAccessToken().then(function (accessToken) {
            console.log(">WoHomePage >>updateApplication >>>success connect to MobileFirst Server " + JSON.stringify(accessToken));
        }, function (error) {
            console.log(">WoHomePage >>updateApplication >>>fail connect to MobileFirst Server " + JSON.stringify(error));
        });
    };
    /*
     * On View Content Loading...
     */
    WoHomePage.prototype.ionViewDidLoad = function () {
        console.log(">WoHomePage >>ionViewDidLoad");
        console.log(">WoHomePage >>ionViewDidLoad >>>this.gv.lookupLoad : " + this.gv.lookupLoad);
        if (this.gv.lookupLoad) {
            this.gf.loadLookup('load');
            this.gv.lookupLoad = false;
            console.log(">WoHomePage >>ionViewDidLoad >>>employee type : " + this.gv.employeetype);
        }
        else {
            this.jsonStoreStructure.initMasterDataLoad();
            this.jsonStoreStructure.initAssetDetails();
            this.jsonStoreStructure.initAlnDomain();
            this.jsonStoreStructure.initUserDetails();
            this.jsonStoreStructure.initExecutiveList();
            this.jsonStoreStructure.initTeamMemberList();
            this.jsonStoreStructure.initSiteIDList();
        }
    };
    /*
     * Up and Down Refresh page loading event...
     * @param refresher
     */
    WoHomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log(">WoHomePage >>doRefresh");
        setTimeout(function () {
            if (_this.refSegment === 'workorder') {
                console.log(">WoHomePage >>doRefresh >>> trigger this.refSegment === workorder");
                _this.searchTerm = '';
                _this.refreshSO = true;
                refresher.complete();
                console.log(">WoHomePage >>doRefresh >>> trigger this.fetchWorkOrderUsingSavedQuery");
                _this.fetchWorkOrderUsingSavedQuery();
                console.log(">WoHomePage >>doRefresh >>> trigger this.showConfirm(syncData)");
                _this.showConfirm("syncData");
            }
            else if (_this.refSegment === 'pending') {
                console.log(">WoHomePage >>doRefresh >>> trigger this.refSegment === pending");
                _this.segmentClick();
                refresher.complete();
            }
            else if (_this.refSegment === 'pin') {
                console.log(">WoHomePage >>doRefresh >>> trigger this.refSegment === pin");
                refresher.complete();
            }
            else {
                refresher.complete();
            }
        }, 2000);
    };
    /*
     * Scroll the page to top...
     */
    WoHomePage.prototype.scrollToTop = function () {
        console.log(">WoHomePage >>scrollToTop");
        this.content.scrollToTop();
    };
    /*
     * MultiSelect CheckBox to Store Selected Value...
     * @param id
     * @param attr
     */
    WoHomePage.prototype.onChangeCheckBoxes = function (id, attr) {
        console.log(">WoHomePage >>onChangeCheckBoxes");
        if (!this.selectedItem.includes(id)) {
            this.selectedItem.push(id);
            this.sendData.push(attr);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(id), 1);
            this.sendData.splice(this.sendData.indexOf(attr), 1);
        }
    };
    /*
     * Select All Check box...
     */
    WoHomePage.prototype.selectAll = function (value) {
        console.log(">WoHomePage >>selectAll");
        if (!this.selectAllBool) {
            this.pageSelectCtrl.splice(this.gv.pagectrl, 1);
            //~Remove      
            for (var i = 0; i < this.selectAllItems.length; i++) {
                console.log(">WoHomePage >>selectAll >>>unchecked : " + this.selectAllItems[i].json.wonum);
                this.selectedItem.splice(this.selectedItem.indexOf(this.selectAllItems[i].json.wonum), 1);
            }
        }
        else {
            this.pageSelectCtrl.push(this.gv.pagectrl);
            //~Add      
            for (var i = 0; i < this.selectAllItems.length; i++) {
                if ((typeof (this.selectAllItems[i].json.ta0download) === 'undefined')) {
                    console.log(">WoHomePage >>selectAll >>>checked : " + this.selectAllItems[i].json.wonum);
                    this.selectedItem.push(this.selectAllItems[i].json.wonum);
                }
            }
        }
    };
    /*
     * MultiSelect CheckBox to change Icon...
     */
    WoHomePage.prototype.multiSelect = function () {
        console.log(">WoHomePage >>multiSelect");
        if (this.selectText === 'md-checkmark-circle') {
            this.selectText = 'md-close-circle';
            this.selectCheck = true;
        }
        else {
            this.selectText = 'md-checkmark-circle';
            this.selectCheck = false;
            this.selectAllBool = false;
            this.pageSelectCtrl = [];
            this.selectedItem = [];
            this.sendData = [];
        }
    };
    /*
     * Set So Type global is available or not...
     * @param sotype
     */
    WoHomePage.prototype.selectedSoType = function (sotype) {
        console.log(">WoHomePage >>selectedSoType(" + sotype + ")");
        if (this.gv.soType.includes(sotype))
            return true;
        else
            return false;
    };
    /*
     * Section Tabs Changes event trigger...
     */
    WoHomePage.prototype.segmentClick = function () {
        var _this = this;
        console.log(">WoHomePage >>segmentClick");
        var refresh = this.loadingCtrl.create({
            content: 'Refreshing...'
        });
        refresh.present();
        this.gf.loadingTimer(refresh);
        this.count = 0;
        var queryPart;
        if (this.refSegment === 'workorder') {
            console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === workorder");
            this.setpagination(this.gv.pagectrl);
            refresh.dismiss();
        }
        else if (this.refSegment === 'pin') {
            console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === pin");
            queryPart = WL.JSONStore.QueryPart().equal("ta0favourite", 'Y');
            console.log(">WoHomePage >>segmentClick >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit");
            this.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart).then(function (result) {
                _this.items = result;
                _this.gv.initItems = _this.items;
                _this.itemsOriginal = _this.items;
                console.log(">WoHomePage >>segmentClick >>>this.gv.initItems size : " + _this.gv.initItems.length);
                console.log(">WoHomePage >>segmentClick >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
                console.log(">WoHomePage >>segmentClick >>>this.items size : " + _this.items.length);
                refresh.dismiss();
            });
            refresh.dismiss();
        }
        else if (this.refSegment === 'pending') {
            console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === pending");
            var searchObj = [];
            searchObj[0] = 'PENDKIV';
            searchObj[1] = 'PENDCLSD';
            searchObj[2] = 'PENDTECO';
            queryPart = WL.JSONStore.QueryPart().inside('status', searchObj);
            console.log(">WoHomePage >>segmentClick >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit with status PENDKIV PENDCLSD PENDTECO");
            this.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart).then(function (result) {
                _this.items = result;
                _this.gv.initItems = _this.items;
                _this.itemsOriginal = _this.items;
                console.log(">WoHomePage >>segmentClick >>>this.gv.initItems size : " + _this.gv.initItems.length);
                console.log(">WoHomePage >>segmentClick >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
                console.log(">WoHomePage >>segmentClick >>>this.items size : " + _this.items.length);
                refresh.dismiss();
            });
            refresh.dismiss();
        }
        else if (this.refSegment === 'pendsyncup') {
            console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === pendsyncup");
            this.jsonStoreCurd.getMarkDirty(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
                _this.syncData = result;
                refresh.dismiss();
            }, function (error) {
                refresh.dismiss();
            });
        }
        else {
            refresh.dismiss();
        }
    };
    WoHomePage.prototype.removeBcrmNumber = function () {
        console.log(">WoHomePage >>removeBcrmNumber");
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].json.ta0bcrmnum = parseInt(this.items[i].json.ta0bcrmnum, 10);
            console.log(">WoHomePage >>removeBcrmNumber >>>bcrm no : " + this.items[i].json.ta0bcrmnum);
        }
    };
    /*
     * Favorite WorkOrder Selection Event...
     * @param item
     * @param index
     * @param pinType
     */
    WoHomePage.prototype.pinSelectItem = function (item, index, pinType) {
        console.log(">WoHomePage >>pinSelectItem");
        console.log(">WoHomePage >>pinSelectItem >>>pinType : " + pinType);
        if ('pin' === pinType) {
            item.json.ta0favourite = 'Y';
            this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
            this.gf.displayToast('Added in favourite List');
        }
        else {
            this.pinFavor = index;
            item.json.ta0favourite = 'N';
            this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
            this.gf.displayToast('Removed from favourite List');
        }
    };
    /*
     * Default Page loading to get all So Count and WorkOrders...
     */
    WoHomePage.prototype.fetchWorkOrderUsingSavedQuery = function () {
        console.log(">WoHomePage >>fetchWorkOrderUsingSavedQuery");
        console.log(">WoHomePage >>fetchWorkOrderUsingSavedQuery >>>trigger this.getCountSO");
        this.getCountSO();
    };
    /*
     * Searching Loading Result Scernio...
     */
    WoHomePage.prototype.filterSOType = function (param) {
        var _this = this;
        console.log(">WoHomePage >>filterSOType");
        if (this.refSegment === 'workorder') {
            console.log(">WoHomePage >>filterSOType >>> trigger this.refSegment === workorder");
            var param_1 = this.searchTerm;
            var worktypecode = (typeof this.gv.soType == 'object') ? this.gv.soType : [this.gv.soType];
            var querypart = [];
            var count = 0;
            console.log(">WoHomePage >>filterSOType >>>total worktype : " + worktypecode.length);
            console.log(">WoHomePage >>filterSOType >>>worktype : " + JSON.stringify(worktypecode));
            for (var i = 0; i < worktypecode.length; i++) {
                count += this.getCount(worktypecode[i]);
            }
            console.log(">WoHomePage >>filterSOType >>> count : " + count);
            if (param_1.trim() != "") {
                if (worktypecode.indexOf('ALL') > -1) {
                    querypart = [
                        { "$like": [{ "wonum": param_1 }] },
                        { "$equal": [{ "ta0favourite": param_1 }] },
                        { "$like": [{ "status": param_1 }] },
                        { "$like": [{ "ta0bcrmnum": param_1 }] },
                        { "$like": [{ "siteid": param_1 }] },
                        { "$like": [{ "worktype": param_1 }] },
                        { "$like": [{ "ta0sncode": param_1 }] },
                        { "$equal": [{ "worktype": param_1.toUpperCase() }] }
                    ];
                }
                else {
                    for (var k = 0; k < worktypecode.length; k++) {
                        querypart.push({ "$like": [{ "ta0sncode": param_1 }, { "worktype": worktypecode[k] }] });
                        querypart.push({ "$like": [{ "wonum": param_1 }, { "worktype": worktypecode[k] }] });
                        querypart.push({ "$equal": [{ "ta0favourite": param_1 }, { "worktype": worktypecode[k] }] });
                        querypart.push({ "$like": [{ "status": param_1 }, { "worktype": worktypecode[k] }] });
                        querypart.push({ "$like": [{ "ta0bcrmnum": param_1 }, { "worktype": worktypecode[k] }] });
                        querypart.push({ "$like": [{ "siteid": param_1 }, { "worktype": worktypecode[k] }] });
                        querypart.push({ "$like": [{ "worktype": param_1 }, { "worktype": worktypecode[k] }] });
                    }
                }
                this.jsonStoreCurd.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
                    _this.items = result;
                    _this.gv.initItems = _this.items;
                    _this.itemsOriginal = _this.items;
                    console.log(">WoHomePage >>filterSOType >>>this.gv.initItems size : " + _this.gv.initItems.length);
                    console.log(">WoHomePage >>filterSOType >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
                    console.log(">WoHomePage >>filterSOType >>>this.items size : " + _this.items.length);
                });
            }
            else {
                console.log(">WoHomePage >>filterSOType >>> trigger this.goToWorkOrderHome(" + worktypecode + ")");
                this.goToWorkOrderHome(worktypecode);
            }
        }
        else {
            console.log(">WoHomePage >>filterSOType >>>refSegment not support");
        }
    };
    ;
    /*
     * Tab Changes to retain the Value to Pages...
     * @param myEvent
     */
    WoHomePage.prototype.presentPopover = function (myEvent) {
        console.log(">WoHomePage >>presentPopover");
        var popover = this.popoverCtrl.create('WoPopupPage', { 'parentWoValue': this });
        popover.present({
            ev: myEvent
        });
    };
    /*
     * PopMenu Selection Value check with wo-popup page...
     * @param popType
     */
    WoHomePage.prototype.showConfirm = function (popType) {
        var _this = this;
        console.log(">WoHomePage >>showConfirm");
        if (!this.gv.testMobile) {
            this.popupValue = popType;
            if (popType == null || popType == '' || popType == 'undefined') {
                console.log(">WoHomePage >>showConfirm >>>trigger this.fetchWorkOrderUsingSavedQuery");
                this.fetchWorkOrderUsingSavedQuery();
            }
            else if (popType === 'downloadList') {
                console.log(">WoHomePage >>showConfirm >>>trigger popType === downloadList");
                if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() ||
                    __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() ||
                    __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork()) {
                    /*
                     * Description: Change old(swift) to new(objective-c) plugin.
                     * Edited: Alif (16.10.2019)
                     * old --> mobilesignalswift.getSignalStrength
                     * new --> cordova.plugins.MobileSignal.getSignalStrength
                     */
                    cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                        console.log(">WoHomePage >>showConfirm >>>data : " + JSON.stringify(data));
                        console.log(">WoHomePage >>showConfirm >>>deviceSignal : " + _this.gv.deviceSignal);
                        if (_this.gv.deviceSignal <= data) {
                            var loading_1 = _this.loadingCtrl.create({
                                content: 'Loading...'
                            });
                            loading_1.present();
                            _this.gf.loadingTimer(loading_1);
                            var selectItem = _this.selectedItem.toString();
                            if (_this.selectedItem.length > 0) {
                                var innerResult = [];
                                var queryPart = WL.JSONStore.QueryPart().inside("wonum", _this.selectedItem);
                                console.log(">WoHomePage >>showConfirm >>>wonum : " + _this.selectedItem);
                                console.log(">WoHomePage >>showConfirm >>>Domains.LPCWORKORDER");
                                console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.getSearchRecordNoLimit");
                                _this.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart).then(function (result) {
                                    innerResult = result;
                                });
                                console.log(">WoHomePage >>showConfirm >>>Domains.DATA_FETCH_ASSIGNWORK");
                                console.log(">WoHomePage >>showConfirm >>>trigger this.dataService.fetchWorkOrderFeederMultiDetails");
                                _this.dataService.fetchWorkOrderFeederMultiDetails(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].DATA_FETCH_ASSIGNWORK, selectItem).then(function (results) {
                                    var respResult;
                                    respResult = results;
                                    console.log(">WoHomePage >>showConfirm >>>response status : " + respResult.processStatus);
                                    if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                                        respResult = respResult.respObject;
                                        if (respResult.length > 0) {
                                            console.log(">WoHomePage >>showConfirm >>>total service order : " + respResult.length);
                                            for (var i = 0; i < respResult.length; i++) {
                                                for (var j = 0; j < innerResult.length; j++) {
                                                    if (respResult[i].wonum === innerResult[j].json.wonum) {
                                                        innerResult[j].json.ta0feeder = [];
                                                        innerResult[j].json.ta0feeder = respResult[i].ta0feeder;
                                                        innerResult[j].json.ta0download = 'Y';
                                                        if (typeof (innerResult[j].json.docLinksL) !== 'undefined' && innerResult[j].json.docLinksL !== null && innerResult[j].json.docLinksL !== "") {
                                                            //^changing indicator attachment/doclinksL
                                                            for (var m = 0; m < innerResult[j].json.docLinksL.length; m++) {
                                                                if (typeof (innerResult[j].json.docLinksL[m].describedBy.loc_show) === 'undefined' || innerResult[j].json.docLinksL[m].describedBy.loc_photoVersion === "old") {
                                                                    innerResult[j].json.docLinksL[m].describedBy.loc_show = true;
                                                                }
                                                            }
                                                        }
                                                        console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.replaceWO");
                                                        _this.jsonStoreCurd.replaceWO(innerResult[j], "LPCWORKORDER", false);
                                                    }
                                                }
                                            }
                                            console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.replaceWO");
                                            _this.jsonStoreCurd.replaceWO(innerResult, "LPCWORKORDER", false);
                                            for (var i = 0; i < _this.items.length; i++) {
                                                if (_this.selectedItem.includes(_this.items[i].json.wonum)) {
                                                    _this.items[i].json.ta0download = 'Y';
                                                    _this.selectAllItems[i].json.ta0download = 'Y';
                                                }
                                            }
                                            _this.selectedItem = [];
                                            _this.selectText = 'md-checkmark-circle';
                                            _this.selectCheck = false;
                                            loading_1.dismiss();
                                            _this.gf.displayToast("Data downloaded successfully.");
                                        }
                                    }
                                    else {
                                        _this.selectedItem = [];
                                        _this.selectText = 'md-checkmark-circle';
                                        _this.selectCheck = false;
                                        loading_1.dismiss();
                                        _this.gf.warningAlert("Failure ", respResult.description, "close");
                                    }
                                });
                            }
                            else {
                                _this.gf.warningAlert("Failure ", "Kindly select workorder to download", "close");
                            }
                        }
                        else {
                            _this.gf.displayToast("Low Network coverage. Can't synchorize data.");
                        }
                    });
                }
                else {
                    var loading_2 = this.loadingCtrl.create({
                        content: 'Loading...'
                    });
                    loading_2.present();
                    this.gf.loadingTimer(loading_2);
                    var selectItem = this.selectedItem.toString();
                    console.log(">WoHomePage >>showConfirm >>>Domains.DATA_FETCH_ASSIGNWORK" + this.selectedItem.length);
                    if (this.selectedItem.length > 0) {
                        var innerResult = [];
                        var queryPart = WL.JSONStore.QueryPart().inside("wonum", this.selectedItem);
                        console.log(">WoHomePage >>showConfirm >>>wonum" + this.selectedItem);
                        console.log(">WoHomePage >>showConfirm >>>Domains.LPCWORKORDER");
                        console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.getSearchRecordNoLimit");
                        this.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart).then(function (result) {
                            innerResult = result;
                            console.log(">WoHomePage >>showConfirm >>>Domains.DATA_FETCH_ASSIGNWORK");
                            console.log(">WoHomePage >>showConfirm >>>trigger this.dataService.fetchWorkOrderFeederMultiDetails");
                            _this.dataService.fetchWorkOrderFeederMultiDetails(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].DATA_FETCH_ASSIGNWORK, selectItem).then(function (results) {
                                var respResult;
                                respResult = results;
                                console.log(">WoHomePage >>showConfirm >>>response status : " + respResult.processStatus);
                                if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                                    return new Promise(function (resolve, reject) {
                                        respResult = respResult.respObject;
                                        if (respResult.length > 0) {
                                            respResult.forEach(function (element) {
                                                innerResult.forEach(function (innerElement) {
                                                    if (element.wonum === innerElement.json.wonum) {
                                                        innerElement.json.ta0feeder = [];
                                                        innerElement.json.ta0feeder = element.ta0feeder;
                                                        innerElement.json.ta0download = 'Y';
                                                        if (typeof (innerElement.json.docLinksL) !== 'undefined' && innerElement.json.docLinksL !== null && innerElement.json.docLinksL !== "") {
                                                            //^changing indicator attachment/doclinksL
                                                            for (var m = 0; m < innerElement.json.docLinksL.length; m++) {
                                                                if (typeof (innerElement.json.docLinksL[m].describedBy.loc_show) === 'undefined' || innerElement.json.docLinksL[m].describedBy.loc_photoVersion === "old") {
                                                                    innerElement.json.docLinksL[m].describedBy.loc_show = true;
                                                                }
                                                            }
                                                        }
                                                    }
                                                });
                                                _this.items.forEach(function (itemElement) {
                                                    if (element.wonum === itemElement.json.wonum) {
                                                        itemElement.json.ta0feeder = [];
                                                        itemElement.json.ta0feeder = element.ta0feeder;
                                                        itemElement.json.ta0download = 'Y';
                                                    }
                                                });
                                            });
                                            console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.replaceWO");
                                            _this.jsonStoreCurd.replaceWO(innerResult, "LPCWORKORDER", false);
                                            _this.selectedItem = [];
                                            _this.selectText = 'md-checkmark-circle';
                                            _this.selectCheck = false;
                                            loading_2.dismiss();
                                            _this.gf.displayToast("Data downloaded successfully.");
                                        }
                                    });
                                }
                                else {
                                    _this.selectedItem = [];
                                    _this.selectText = 'md-checkmark-circle';
                                    _this.selectCheck = false;
                                    loading_2.dismiss();
                                    _this.gf.warningAlert("Failure ", respResult.description, "close");
                                }
                            });
                        });
                    }
                    loading_2.dismiss();
                }
            }
            else if (popType === 'checkEdit') {
                console.log(">WoHomePage >>showConfirm >>>trigger popType === checkEdit");
                this.listEditRecord();
            }
            else if (popType === 'loadLook') {
                console.log(">WoHomePage >>showConfirm >>>trigger popType === loadLook");
                this.gf.loadLookup('menu');
            }
            else if (popType == 'taskassign') {
                console.log(">WoHomePage >>showConfirm >>>trigger popType === taskassign");
                if (this.selectedItem.length > 0) {
                    this.PresentTaskAssignModel();
                    this.multiSelect();
                }
                else {
                    var loading_3 = this.loadingCtrl.create({
                        content: 'Loading...'
                    });
                    loading_3.present();
                    this.gf.loadingTimer(loading_3);
                    var alert_1 = this.alertCtrl.create({
                        title: 'Alert !',
                        subTitle: 'You are not selected any workorder to assign',
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    loading_3.dismiss();
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
            else if (popType == 'syncData') {
                console.log(">WoHomePage >>showConfirm >>>trigger popType === syncData");
                if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                    this.gf.displayToast("No Network coverage. Can't synchorize data.");
                }
                else if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() ||
                    __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() ||
                    __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork()) {
                    /*
                     * Description: Change old(swift) to new(objective-c) plugin.
                     * Edited: Alif (16.10.2019)
                     * old --> mobilesignalswift.getSignalStrength
                     * new --> cordova.plugins.MobileSignal.getSignalStrength
                     */
                    cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                        if (_this.gv.deviceSignal <= data) {
                            /*
                             * Description  : Adjustment for offline and online function to download or stop workorder from maximo.
                             * Edited       : Ameer (18.12.2019) - Change for Sync data to be completed 1 by 1
                             */
                            console.log(">WoHomePage >>showConfirm >>>trigger this.gf.syncUpActivity");
                            _this.gf.syncUpActivity().then(function (result) {
                                //^Sync Up activity...
                                console.log(">WoHomePage >>showConfirm >>>result : " + JSON.stringify(result));
                                console.log(">WoHomePage >>showConfirm >>>this.refreshSO : " + _this.refreshSO);
                                if (_this.refreshSO === true) {
                                    _this.gf.startLoading();
                                    console.log(">WoHomePage >>showConfirm >>>trigger this.gf.processData");
                                    _this.gf.processData().then(function (result) {
                                        console.log(">WoHomePage >>showConfirm >>>result : " + JSON.stringify(result));
                                        if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === result) {
                                            var worktypecode = (typeof _this.gv.soType == 'object') ? _this.gv.soType : [_this.gv.soType];
                                            _this.soType = worktypecode;
                                            console.log(">WoHomePage >>showConfirm >>>trigger this.goToWorkOrderHome(" + worktypecode + ")");
                                            _this.goToWorkOrderHome(worktypecode);
                                            _this.selectedItem = [];
                                            _this.selectText = 'md-checkmark-circle';
                                            _this.selectCheck = false;
                                            _this.refreshSO = false;
                                            _this.gf.stopLoading();
                                            _this.gf.displayToast("Data downloaded successfully.");
                                        }
                                        else if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_FAILURE_MSG === result) {
                                            _this.selectedItem = [];
                                            _this.selectText = 'md-checkmark-circle';
                                            _this.selectCheck = false;
                                            _this.refreshSO = false;
                                            _this.gf.stopLoading();
                                            _this.gf.displayToast("Data download failure.");
                                        }
                                    });
                                }
                            }).catch(function (error) {
                                _this.gf.displayToast(error);
                                console.log(">WoHomePage >>showConfirm >>>Error Message : " + JSON.stringify(error));
                                _this.gf.stopLoading();
                            });
                        }
                        else {
                            _this.gf.displayToast("Low Network coverage. Can't synchorize data.");
                            _this.gf.stopLoading();
                        }
                    }).catch(function (error) {
                        console.log(">WoHomePage >>showConfirm >>>Error Message : " + JSON.stringify(error));
                        _this.gf.stopLoading();
                    });
                }
                else {
                    /*
                     * Description  : Adjustment for offline and online function to download or stop workorder from maximo.
                     * Edited       : Ameer (18.12.2019) - Change for Sync data to be completed 1 by 1
                     */
                    console.log(">WoHomePage >>showConfirm >>>trigger this.gf.syncUpActivity");
                    this.gf.syncUpActivity().then(function (result) {
                        //^Sync Up activity...
                        console.log(">WoHomePage >>showConfirm >>>result : " + JSON.stringify(result));
                        console.log(">WoHomePage >>showConfirm >>>this.refreshSO : " + _this.refreshSO);
                        if (_this.refreshSO === true) {
                            _this.gf.startLoading();
                            console.log(">WoHomePage >>showConfirm >>>trigger this.gf.processData");
                            _this.gf.processData().then(function (result) {
                                if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === result) {
                                    var worktypecode = (typeof _this.gv.soType == 'object') ? _this.gv.soType : [_this.gv.soType];
                                    _this.soType = worktypecode;
                                    _this.goToWorkOrderHome(worktypecode);
                                    _this.selectedItem = [];
                                    _this.selectText = 'md-checkmark-circle';
                                    _this.selectCheck = false;
                                    _this.refreshSO = false;
                                    _this.gf.stopLoading();
                                    _this.gf.displayToast("Data downloaded successfully.");
                                }
                                else if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_FAILURE_MSG === result) {
                                    _this.refreshSO = false;
                                    _this.gf.stopLoading();
                                    _this.gf.displayToast("Data download failure.");
                                }
                            });
                        }
                    }).catch(function (error) {
                        _this.gf.displayToast(error);
                        console.log(">WoHomePage >>showConfirm >>>Error Message : " + JSON.stringify(error));
                        _this.gf.stopLoading();
                    });
                }
            }
        }
        else {
            this.gf.displayToast('No Network to sync data');
        }
    };
    /*
     * Calling Component to displaying list of task to assign technian...
     */
    WoHomePage.prototype.PresentTaskAssignModel = function () {
        console.log(">WoHomePage >>PresentTaskAssignModel");
        if (!this.gv.testMobile) {
            var taskAssignModel = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_assigntask_assigntask__["a" /* AssigntaskComponent */], { woNum: this.selectedItem, attr: this.sendData });
            taskAssignModel.present();
        }
        else {
            this.gf.displayToast('No Network to assigning data');
        }
    };
    /*
     * Get Dirty Records...
     */
    WoHomePage.prototype.listEditRecord = function () {
        var _this = this;
        console.log(">WoHomePage >>listEditRecord");
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        this.jsonStoreCurd.getMarkDirty("LPCWORKORDER").then(function (results) {
            _this.items = results;
            _this.itemsOriginal = _this.items;
            loading.dismiss();
        });
    };
    /**
    * Syn Up Data...
    * @param synItems
    */
    WoHomePage.prototype.synData = function (synItems) {
        var _this = this;
        console.log(">WoHomePage >>synData");
        var fIndex = 0;
        if ((__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork()) && this.gv.testType) {
            this.gf.displayToast('No Network to sync data');
        }
        else {
            var itemsLength = synItems.length;
            var loopSize = 0;
            var _loop_1 = function (item) {
                ta0feeder = item.json.ta0feeder;
                var _loop_2 = function (ta0feederList) {
                    if (item.json.loc_ta0feeder_haveChange) {
                        var objCopy = Object.assign({}, ta0feederList);
                        delete objCopy['multiassetlocci'];
                    }
                    var multiAssetArray = [];
                    var ta0testingArray = [];
                    var ta0sealStickerArray = [];
                    for (var _i = 0, _a = ta0feederList.multiassetlocci; _i < _a.length; _i++) {
                        var multiList = _a[_i];
                        if (typeof (ta0feederList.loc_multiassetlocci_haveChange) != 'undefined' && ta0feederList.loc_multiassetlocci_haveChange) {
                            var multiAssetVal = Object.assign({}, multiList);
                            delete multiAssetVal['ta0sealdetails'];
                            delete multiAssetVal['ta0stickerdetails'];
                            delete multiAssetVal['ta0testdetail'];
                            multiAssetArray.push(multiAssetVal);
                        }
                        if (typeof (multiList.loc_ta0testings_haveChange) != 'undefined' && multiList.loc_ta0testings_haveChange) {
                            var ta0testingsVal = Object.assign({}, multiList);
                            delete ta0testingsVal['ta0registers'];
                            delete ta0testingsVal['ta0sealdetails'];
                            delete ta0testingsVal['ta0stickerdetails'];
                            ta0testingArray.push(ta0testingsVal);
                        }
                        if (typeof (multiList.loc_ta0silStickers_haveChange) != 'undefined' && multiList.loc_ta0silStickers_haveChange) {
                            var ta0sealStickerVal = Object.assign({}, multiList);
                            delete ta0sealStickerVal['ta0registers'];
                            delete ta0sealStickerVal['ta0testdetail'];
                            ta0sealStickerArray.push(ta0sealStickerVal);
                        }
                    }
                    var objfeeder = Object.assign({}, ta0feederList);
                    objfeeder.multiassetlocci = multiAssetArray;
                    if (multiAssetArray.length != 0) {
                        this_1.dataService
                            .saveRecordWithType(objfeeder, item.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_MULTIASSETLOCCI, objfeeder.ta0feedercode, item.json.worktype)
                            .then(function (results) {
                            item.json.ta0feeder[fIndex].loc_multiassetlocci_haveChange = false;
                            if (ta0sealStickerArray.length != 0) {
                                _this.dataService
                                    .saveRecordWithType(ta0sealStickerArray, item.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, objfeeder.ta0feedercode, item.json.worktype)
                                    .then(function (results) {
                                }).then(function (error) {
                                    _this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                                    _this.gf.stopLoading();
                                });
                            }
                            if (ta0testingArray.length != 0) {
                                _this.dataService
                                    .saveRecordWithType(ta0testingArray, item.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, objfeeder.ta0feedercode, item.json.worktype)
                                    .then(function (results) { }).then(function (error) {
                                    _this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                                    _this.gf.stopLoading();
                                });
                            }
                            _this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
                            _this.gf.displayToast('Data Synchronize for work order ' + item.json.wonum);
                            loopSize++;
                        }).then(function (error) {
                            _this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                            item.json.ta0feeder[fIndex].loc_multiassetlocci_haveChange = true;
                            _this.gf.stopLoading();
                        });
                    }
                };
                for (var _i = 0, ta0feeder_1 = ta0feeder; _i < ta0feeder_1.length; _i++) {
                    var ta0feederList = ta0feeder_1[_i];
                    _loop_2(ta0feederList);
                }
            };
            var this_1 = this, ta0feeder;
            for (var _i = 0, synItems_1 = synItems; _i < synItems_1.length; _i++) {
                var item = synItems_1[_i];
                _loop_1(item);
            }
            if (itemsLength === loopSize) {
                this.listEditRecord();
                this.gf.stopLoading();
            }
        }
    };
    /**
    * After getting all count to store the count of so in seperate Variable...
    * @param workType
    */
    WoHomePage.prototype.getCount = function (workType) {
        console.log(">WoHomePage >>getCount");
        console.log(">WoHomePage >>getCount >>>workType : " + workType);
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
            return this.gv.countZINL;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
            return this.gv.countZINR;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
            return this.gv.countZISR;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
            return this.gv.countZIST;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
            return this.gv.countZRCE;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV) {
            return this.gv.countZRMV;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
            return this.gv.countZRPC;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO) {
            return this.gv.countZSRO;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
            return this.gv.countZUDN;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
            return this.gv.countZMMR;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
            return this.gv.countZISO;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
            return this.gv.countZISP;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN) {
            return this.gv.countZDCN;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) {
            return this.gv.countZRCN;
        }
        if (workType == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ALL) {
            return this.gv.countALL;
        }
    };
    /**
    * Get Each WorkOrder Count...
    */
    WoHomePage.prototype.getCountSO = function () {
        var _this = this;
        console.log(">WoHomePage >>getCountSO");
        var queryPart = [];
        this.count = 0;
        this.newWorktype = [];
        var _loop_3 = function (workVal) {
            console.log(">WoHomePage >>getCountSO >>> workVal : " + workVal);
            if (workVal == 'ALL') {
                queryPart = WL.JSONStore.QueryPart().inside("worktype", this_2.worktypeList);
            }
            else {
                queryPart = WL.JSONStore.QueryPart().equal("worktype", workVal);
            }
            console.log(">WoHomePage >>getCountSO >>>this.jsonStoreCurd.getSearchRecordNoLimit");
            this_2.jsonStoreCurd.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart).then(function (result) {
                _this.items = result;
                _this.selectAllItems = result;
                _this.gv.initItems = _this.items;
                _this.itemsOriginal = _this.items;
                _this.count = _this.items.length;
                console.log(">WoHomePage >>getCountSO >>>this.items size : " + _this.items.length);
                console.log(">WoHomePage >>getCountSO >>>this.selectAllItems size : " + _this.selectAllItems.length);
                console.log(">WoHomePage >>getCountSO >>>this.gv.initItems size : " + _this.gv.initItems.length);
                console.log(">WoHomePage >>getCountSO >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
                console.log(">WoHomePage >>getCountSO >>>this.count : " + _this.count);
                console.log(">WoHomePage >>getCountSO >>>workVal : " + workVal);
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
                    _this.gv.countZINL = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZINL });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
                    _this.gv.countZINR = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZINR });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
                    _this.gv.countZISR = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZISR });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                    _this.gv.countZIST = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZIST });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                    _this.gv.countZRCE = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZRCE });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV) {
                    _this.gv.countZRMV = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZRMV });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
                    _this.gv.countZRPC = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZRPC });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO) {
                    _this.gv.countZSRO = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZSRO });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
                    _this.gv.countZUDN = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZUDN });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
                    _this.gv.countZMMR = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZMMR });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                    _this.gv.countZISO = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZISO });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                    _this.gv.countZISP = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZISP });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN) {
                    _this.gv.countZDCN = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZDCN });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) {
                    _this.gv.countZRCN = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countZRCN });
                }
                if (workVal == __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ALL) {
                    _this.gv.countALL = _this.items.length;
                    _this.newWorktype.push({ key: workVal, value: _this.gv.countALL });
                    _this.gv.soType = ['ALL'];
                    console.log(">WoHomePage >>getCountSO >>>trigger this.goToWorkOrderHome(" + _this.gv.soType + ")");
                    _this.goToWorkOrderHome(_this.gv.soType);
                }
            });
        };
        var this_2 = this;
        for (var _i = 0, _a = this.worktypeList; _i < _a.length; _i++) {
            var workVal = _a[_i];
            _loop_3(workVal);
        }
        this.gv.newWorktype = this.newWorktype;
        console.log(">WoHomePage >>getCountSO >>>total display records : " + this.gv.newWorktype.length);
    };
    /**
    * Switch to Work Order Detail Page...
    * @param attr
    */
    WoHomePage.prototype.goToWorkOrderDetail = function (attr) {
        var _this = this;
        console.log(">WoHomePage >>goToWorkOrderDetail");
        console.log(">WoHomePage >>goToWorkOrderDetail >>>this.gv.ctrl_automaticDownload : " + this.gv.ctrl_automaticDownload);
        console.log(">WoHomePage >>goToWorkOrderDetail >>>attr.json.ta0download : " + attr.json.ta0download);
        if (this.gv.ctrl_automaticDownload) {
            if (typeof (attr.json.ta0download) === 'undefined' || attr.json.ta0download === 'N' || attr.json.ta0download === "") {
                console.log(">WoHomePage >>getCountSO >>>trigger this.downloadFeederDetails(" + attr.json.wonum + ") to download single SO");
                this.downloadFeederDetails(attr, attr.json.wonum, 'single');
            }
        }
        /** Adding loading + timeout before enter work order.
        * Created : Alif
        * Date : 14/12/2018
        */
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var i = 0;
            var interval = setInterval(function () {
                console.log(">WoHomePage >>goToWorkOrderDetail >>>i : " + (i++));
                console.log(">WoHomePage >>goToWorkOrderDetail >>>attr.json.ta0download === Y");
                if (attr.json.ta0download === "Y") {
                    var queryPart = WL.JSONStore.QueryPart().equal("wonum", attr.json.wonum);
                    console.log(">WoHomePage >>getCountSO >>>Domains.LPCWORKORDER");
                    console.log(">WoHomePage >>getCountSO >>>interval : " + interval);
                    console.log(">WoHomePage >>getCountSO >>>department : " + _this.gv.departContent);
                    console.log(">WoHomePage >>getCountSO >>>trigger this.jsonStoreCurd.getSearchRecord(" + attr.json.wonum + ")");
                    _this.jsonStoreCurd.getSearchRecord(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0).then(function (result) {
                        attr = JSON.parse(JSON.stringify(result[0]));
                        var data = {
                            attr: attr,
                            details: _this.feederDetails
                        };
                        clearInterval(interval);
                        if (_this.gv.departContent === 'seal') {
                            var newRootNav = _this.appCtrl.getRootNavById('n4');
                            newRootNav.push("SealServiceDetailsPage", data);
                        }
                        else if (_this.gv.departContent === 'lpc') {
                            var newRootNav = _this.appCtrl.getRootNavById('n4');
                            newRootNav.push("ServiceDetailsPage", attr);
                        }
                        else {
                            var newRootNav = _this.appCtrl.getRootNavById('n4');
                            newRootNav.push("ServiceDetailsPage", attr);
                        }
                        console.log(">WoHomePage >>getCountSO >>>go to ServiceDetailsPage screen");
                        loading.dismiss();
                    });
                }
                if (i > 15) {
                    console.log(">WoHomePage >>getCountSO >>>clear interval");
                    clearInterval(interval);
                }
            }, 500);
        });
        console.log(">WoHomePage >>getCountSO >>>trigger this.gf.loadingTimerDownload(loading)");
        this.gf.loadingTimerDownload(loading);
    };
    /**
    * Sorting the result of json...
    */
    WoHomePage.prototype.makeSortResultFun = function () {
        console.log(">WoHomePage >>makeSortResultFun");
        if (this.sortOrderList == 'wonum')
            this.gv.sortOrder = [{ "wonum": this.sortOrder }];
        if (this.sortOrderList == 'ta0bcrmnum')
            this.gv.sortOrder = [{ "ta0bcrmnum": this.sortOrder }];
        if (this.sortOrderList == 'worktype')
            this.gv.sortOrder = [{ "worktype": this.sortOrder }];
        if (this.sortOrderList == 'status')
            this.gv.sortOrder = [{ "status": this.sortOrder }];
        if (this.sortOrderList == 'reportdate')
            this.gv.sortOrder = [{ 'reportdate': this.sortOrder }];
        if (this.sortOrderList == 'woeq13')
            this.gv.sortOrder = [{ 'woeq13': this.sortOrder }];
        console.log(">WoHomePage >>makeSortResultFun >>>this.goToWorkOrderHome(" + this.gv.soType + ")");
        this.goToWorkOrderHome(this.gv.soType);
    };
    /**
    * Sorting the result in json Asc and Desc...
    */
    WoHomePage.prototype.makeSortOrderChange = function () {
        console.log(">WoHomePage >>makeSortOrderChange");
        if (this.sortOrder == 'asc') {
            this.sortOrder = 'desc';
            this.sortTitle = 'arrow-down';
        }
        else {
            this.sortOrder = 'asc';
            this.sortTitle = 'arrow-up';
        }
        console.log(">WoHomePage >>makeSortOrderChange >>>trigger this.makeSortResultFun");
        this.makeSortResultFun();
    };
    WoHomePage.prototype.changeScenario = function () {
        console.log(">WoHomePage >>changeScenario");
        if (this.gv.testMobile) {
            this.gv.testMobile = false;
            this.gv.testType = true;
        }
        else {
            this.gv.testMobile = true;
            this.gv.testType = false;
        }
    };
    /**
    * Click Work order calling function align order into list...
    * @param worktypecode
    */
    WoHomePage.prototype.goToWorkOrderHome = function (worktypecode) {
        var _this = this;
        console.log(">WoHomePage >>goToWorkOrderHome(" + JSON.stringify(worktypecode) + ")");
        worktypecode = (typeof worktypecode == 'object') ? worktypecode : [worktypecode];
        this.gv.soType = worktypecode;
        this.gv.offset = 0;
        this.gv.pagectrl = 0;
        this.gv.pageCurrentIndex = 1;
        this.gv.limit = this.gv.ctrl_limitPagination;
        this.prevbtndisabled = true;
        var querypart = [];
        this.gv.count = 0;
        if (worktypecode.indexOf('ALL') > -1) {
            console.log(">WoHomePage >>goToWorkOrderHome >>>worktypecode is ALL");
            console.log(">WoHomePage >>goToWorkOrderHome >>>worktypecode size : " + worktypecode.length);
            if (worktypecode.length == 1) {
                this.gv.count = this.gv.countALL;
                this.gv.worktypeList = this.worktypeList;
                this.gv.soType = ['ALL'];
            }
            else {
                worktypecode.splice(worktypecode.indexOf("ALL"), 1);
                for (var i = 0; i < worktypecode.length; i++) {
                    this.gv.count += this.getCount(worktypecode[i]);
                }
                this.gv.worktypeList = worktypecode;
                this.gv.soType = this.gv.worktypeList;
            }
        }
        else {
            console.log(">WoHomePage >>goToWorkOrderHome >>>worktypecode is selected SO Type");
            for (var j = 0; j < worktypecode.length; j++) {
                this.gv.count += this.getCount(worktypecode[j]);
            }
            this.gv.worktypeList = worktypecode;
            this.gv.soType = this.gv.worktypeList;
        }
        this.gv.pageCount = this.gv.count / this.gv.ctrl_limitPagination;
        if (Math.ceil(this.gv.pageCount) - 1 > 0) {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        //~calculate total pages
        console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.setPage(" + this.gv.pageCurrentIndex + ")");
        this.setPage(this.gv.pageCurrentIndex);
        /*
         * Description: Change queryPart to filter so list.
         * Edited     : Alif (24.10.2019)
         */
        //~adding condition checking type of user
        console.log(">WoHomePage >>goToWorkOrderHome >>>employee type : " + this.gv.employeetype);
        console.log(">WoHomePage >>goToWorkOrderHome >>>worktype list : " + JSON.stringify(this.gv.worktypeList));
        if (this.gv.employeetype === "TECHNICIAN") {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListTech }] }];
        }
        else if (this.gv.employeetype === "EXECUTIVE") {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListExec }] }];
        }
        else if (this.gv.employeetype === "SUPERVISOR") {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListSupv }] }];
        }
        else {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }] }];
        }
        console.log(">WoHomePage >>goToWorkOrderHome >>>Domains.LPCWORKORDER");
        console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.jsonStoreCurd.getSearchRecordLimit");
        this.jsonStoreCurd.getSearchRecordLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart, this.gv.offset, this.gv.limit, this.gv.sortOrder)
            .then(function (result) {
            _this.items = result;
            _this.gv.initItems = _this.items;
            _this.itemsOriginal = _this.items;
            console.log(">WoHomePage >>goToWorkOrderHome >>>this.gv.initItems size : " + _this.gv.initItems.length);
            console.log(">WoHomePage >>goToWorkOrderHome >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
            console.log(">WoHomePage >>goToWorkOrderHome >>>this.items size : " + _this.items.length);
            //console.log(">WoHomePage >>goToWorkOrderHome >>>Service Order Data : "+JSON.stringify(this.gv.initItems));       
            console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.removeBcrmNumber");
            _this.removeBcrmNumber();
        });
        console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.jsonStoreCurd.getSearchAllRecordNoLimit");
        this.jsonStoreCurd.getSearchAllRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
            _this.selectAllItems = result;
            console.log(">WoHomePage >>goToWorkOrderHome >>>this.selectAllItems size : " + _this.selectAllItems.length);
            /*
            for (var x = 0; x < this.selectAllItems.length; x++) {
              var obj = this.selectAllItems[x].json;
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" JSON Data : "+JSON.stringify(this.selectAllItems[x]));
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" wonum : "+this.selectAllItems[x].json.wonum);
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" bcrmnum : "+this.selectAllItems[x].json.ta0bcrmnum);
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" siteid : "+this.selectAllItems[x].json.siteid);
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" worktype : "+this.selectAllItems[x].json.worktype);
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" assignment exist ? "+obj.hasOwnProperty('assignment'));
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" woserviceaddress exist ? "+obj.hasOwnProperty('woserviceaddress'));
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" worktype exist ? "+obj.hasOwnProperty('worktype'));
              console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" ta0wouserstatus exist ? "+obj.hasOwnProperty('ta0wouserstatus'));
            }
            */
            console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.gf.stopLoading");
            _this.gf.stopLoading();
        });
    };
    /*
     * Pagination click previous button...
     */
    WoHomePage.prototype.setprevious = function () {
        console.log(">WoHomePage >>setprevious");
        this.gv.pagectrl += -1;
        if (this.gv.pagectrl > 0) {
            this.prevbtndisabled = false;
            this.nextbtndisabled = false;
        }
        else {
            this.prevbtndisabled = true;
            this.gv.pagectrl = 0;
        }
        console.log(">WoHomePage >>setprevious >>>trigger this.callingPagination(" + ((this.gv.pagectrl) * this.gv.ctrl_limitPagination) + "," + (this.gv.pageCurrentIndex - 2) + ")");
        this.callingPagination(((this.gv.pagectrl) * this.gv.ctrl_limitPagination), this.gv.pageCurrentIndex - 2);
    };
    /*
     * Pagination click next button...
     */
    WoHomePage.prototype.setnext = function () {
        console.log(">WoHomePage >>setnext");
        this.gv.pagectrl = this.gv.pageCurrentIndex;
        if (this.gv.pagectrl < Math.ceil(this.gv.pageCount) - 1) {
            this.prevbtndisabled = false;
            this.nextbtndisabled = false;
        }
        else {
            this.nextbtndisabled = true;
            this.gv.pagectrl = Math.ceil(this.gv.pageCount) - 1;
        }
        console.log(">WoHomePage >>setnext >>>trigger this.callingPagination(" + ((this.gv.pagectrl) * this.gv.ctrl_limitPagination) + "," + (this.gv.pageCurrentIndex) + ")");
        this.callingPagination(((this.gv.pagectrl) * this.gv.ctrl_limitPagination), this.gv.pageCurrentIndex);
    };
    /**
    * Pagination click numberical button...
    * @param page
    */
    WoHomePage.prototype.setpagination = function (page) {
        console.log(">WoHomePage >>setpagination");
        if (this.pageSelectCtrl.length > 0) {
            if (this.pageSelectCtrl.includes(page)) {
                this.selectAllBool = true;
            }
            else {
                this.selectAllBool = false;
            }
        }
        else {
            this.selectAllBool = false;
        }
        if (page == 0) {
            this.prevbtndisabled = true;
            this.nextbtndisabled = false;
        }
        else if (page == Math.ceil(this.gv.pageCount - 1)) {
            this.prevbtndisabled = false;
            this.nextbtndisabled = true;
        }
        else {
            this.prevbtndisabled = false;
            this.nextbtndisabled = false;
        }
        this.gv.pagectrl = page;
        console.log(">WoHomePage >>setpagination >>>trigger this.callingPagination(" + ((this.gv.pagectrl) * this.gv.ctrl_limitPagination) + ")");
        this.callingPagination(((this.gv.pagectrl) * this.gv.ctrl_limitPagination), page);
    };
    /*
     * Common function for pagination...
     * @param offset
     * @param limit
     */
    WoHomePage.prototype.callingPagination = function (offset, limit) {
        var _this = this;
        console.log(">WoHomePage >>callingPagination");
        this.gv.offset = offset;
        var worktypecode = [];
        worktypecode = this.gv.soType;
        var querypart = [];
        this.gv.count = 0;
        if (worktypecode.indexOf('ALL') > -1) {
            if (worktypecode.length == 1) {
                this.gv.count = this.gv.countALL;
                this.gv.worktypeList = this.worktypeList;
            }
            else {
                worktypecode.splice(worktypecode.indexOf("ALL"), 1);
                for (var i = 0; i < worktypecode.length; i++) {
                    this.gv.count += this.getCount(worktypecode[i]);
                }
                this.gv.worktypeList = worktypecode;
            }
        }
        else {
            for (var j = 0; j < worktypecode.length; j++) {
                this.gv.count += this.getCount(worktypecode[j]);
            }
            this.gv.worktypeList = worktypecode;
        }
        this.gv.soType = this.gv.worktypeList;
        this.gv.pageCount = this.gv.count / this.gv.ctrl_limitPagination;
        if (Math.ceil(this.gv.pageCount) - 1 > 0)
            this.isValid = true;
        else
            this.isValid = false;
        this.gv.pageCurrentIndex = limit + 1;
        this.setPage(limit);
        /*
         * Description: Change queryPart to filter so list.
         * Edited     : Alif (24.10.2019)
         */
        //^adding condition checking type of user
        if (this.gv.employeetype === "TECHNICIAN") {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListTech }] }];
        }
        else if (this.gv.employeetype === "EXECUTIVE") {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListExec }] }];
        }
        else if (this.gv.employeetype === "SUPERVISOR") {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListSupv }] }];
        }
        else {
            querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }] }];
        }
        console.log(">WoHomePage >>callingPagination >>>trigger this.jsonStoreCurd.getSearchRecordLimit");
        this.jsonStoreCurd.getSearchRecordLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart, this.gv.offset, this.gv.limit, this.gv.sortOrder).then(function (result) {
            _this.items = result;
            _this.gv.initItems = _this.items;
            _this.itemsOriginal = _this.items;
            console.log(">WoHomePage >>callingPagination >>>this.gv.initItems size : " + _this.gv.initItems.length);
            console.log(">WoHomePage >>callingPagination >>>this.itemsOriginal size : " + _this.itemsOriginal.length);
            console.log(">WoHomePage >>callingPagination >>>this.items size : " + _this.items.length);
        });
    };
    /*
     * Download feeder details for the workorder...
     * @param itemValue
     * @param wonum
     * @param downloadType
     */
    WoHomePage.prototype.downloadFeederDetails = function (itemValue, wonum, downloadType) {
        var _this = this;
        console.log(">WoHomePage >>downloadFeederDetails");
        console.log(">WoHomePage >>downloadFeederDetails >>>wonum : " + wonum);
        if (!this.gv.testMobile) {
            if (typeof (itemValue.json.ta0download == 'undefined') || itemValue.json.ta0download == 'N') {
                itemValue.json.ta0download = 'L';
                console.log(">WoHomePage >>downloadFeederDetails >>>Domains.DATA_FETCH_ASSIGNWORK");
                console.log(">WoHomePage >>downloadFeederDetails >>>trigger this.dataService.fetchWorkOrderFeederDetails");
                this.dataService.fetchWorkOrderFeederDetails(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].DATA_FETCH_ASSIGNWORK, wonum).then(function (results) {
                    var respResult;
                    respResult = results;
                    _this.feederDetails = JSON.stringify(results);
                    console.log('this.feederDeatils==>', _this.feederDetails);
                    console.log(">WoHomePage >>downloadFeederDetails >>>response status : " + respResult.processStatus);
                    if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                        debugger;
                        itemValue.json.ta0download = 'Y';
                        var fullItems;
                        fullItems = JSON.parse(respResult.respObject);
                        itemValue.json.ta0feeder = [];
                        itemValue.json.ta0feeder = fullItems.workOrder[0].ta0feeder;
                        /*
                         * IEE CR Code
                         */
                        console.log(">WoHomePage >>downloadFeederDetails >>>ta0billingind : " + fullItems.workOrder[0].ta0billingind);
                        itemValue.json.ta0billingind = fullItems.workOrder[0].ta0billingind;
                        /**
                         * Crimpless Seal CR
                         * map the ta0sealdetail object
                         */
                        itemValue.json.ta0sealdetail = fullItems.workOrder[0].ta0sealdetail;
                        /*
                         * Description: Updating value loc_show inside to 'true' to make it appear.
                         * Created    : Alif (25.09.2019)
                         */
                        if (typeof (itemValue.json.docLinksL) !== 'undefined') {
                            //^Updated loc_show attribute to show the image
                            for (var i = 0; i < itemValue.json.docLinksL.length; i++) {
                                itemValue.json.docLinksL[i].describedBy.loc_show = true;
                            }
                        }
                        console.log(">WoHomePage >>downloadFeederDetails >>>this.jsonStoreCurd.replaceWO");
                        _this.jsonStoreCurd.replaceWO(itemValue, "LPCWORKORDER", false);
                    }
                    else {
                        _this.gf.warningAlert("Failure ", respResult.description, "close");
                        itemValue.json.ta0download = 'N';
                    }
                });
            }
        }
        else {
            this.gf.displayToast('Low or No Network Connection..');
        }
    };
    /*
     * Description : Method to hide/show filtering category.
     * Created     : Alif (11.09.2019)
     */
    WoHomePage.prototype.changeViewFilter = function () {
        console.log(">WoHomePage >>changeViewFilter");
        this.filter = !this.filter;
    };
    /*
     * Created: Ameer (25/11/2019)
     * Description: Pagination Start Index and End Index calculation
     * @param indexValue
     */
    WoHomePage.prototype.setPage = function (indexValue) {
        console.log(">WoHomePage >>setPage");
        //^calculate total pages
        var pageSize = 6;
        var totalPages = Math.ceil(this.gv.count / this.gv.ctrl_limitPagination);
        if (indexValue < 1) {
            indexValue = 1;
        }
        else if (indexValue > totalPages) {
            indexValue = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 6) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (indexValue <= 4) {
                startPage = 1;
                endPage = 6;
            }
            else if (indexValue + 2 >= totalPages) {
                startPage = totalPages - 5;
                endPage = totalPages;
            }
            else {
                startPage = indexValue - 3;
                endPage = indexValue + 3;
            }
        }
        //^calculate start and end item indexes
        var startIndex = (indexValue - 1) * 25;
        var endIndex = Math.min(startIndex + 25 - 1, this.gv.count - 1);
        //^create an array of pages to ng-repeat in the pager control
        this.gv.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    };
    /*
     * Checking status workorder at BRCM
     * @param wonum
     * @param siteid
     */
    WoHomePage.prototype.checkingWorkOrderStatus = function (itemValue, wonum, siteid) {
        var _this = this;
        console.log(">WoHomePage >>checkingWorkOrderStatus");
        console.log(">WoHomePage >>checkingWorkOrderStatus >>>this.gv.testMobile : " + this.gv.testMobile);
        if (!this.gv.testMobile) {
            if (typeof (itemValue.json.ta0checking == 'undefined') || itemValue.json.ta0checking == 'N') {
                itemValue.json.ta0checking = 'L';
                itemValue.json.ta0inststatus = null;
                var ta0responds = {
                    "ta0tecoind": false,
                    "ta0clsdind": false,
                    "ta0inststatus": "",
                    "wonum": "",
                    "ta0inststatusdate": "",
                };
                console.log(">WoHomePage >>checkingWorkOrderStatus >>> Trigger this.dataService.checkingWorkOrderStatus");
                console.log(">WoHomePage >>checkingWorkOrderStatus >>> wonum : " + wonum);
                console.log(">WoHomePage >>checkingWorkOrderStatus >>> siteid : " + siteid);
                this.dataService.checkingWorkOrderStatus(wonum, siteid).then(function (results) {
                    var respResult;
                    respResult = results;
                    console.log(">WoHomePage >>checkingWorkOrderStatus >>>Result : " + JSON.stringify(respResult));
                    console.log(">WoHomePage >>checkingWorkOrderStatus >>>processStatus : " + respResult.processStatus);
                    if (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                        itemValue.json.ta0checking = 'Y';
                        itemValue.json.ta0tecoind = respResult.respObject.ta0tecoind;
                        itemValue.json.ta0clsdind = respResult.respObject.ta0clsdind;
                        itemValue.json.ta0inststatus = respResult.respObject.ta0inststatus;
                        itemValue.json.ta0inststatusdate = respResult.respObject.ta0inststatusdate;
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>description : " + respResult.description);
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0tecoind : " + itemValue.json.ta0tecoind);
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0clsdind : " + itemValue.json.ta0clsdind);
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0inststatus : " + itemValue.json.ta0inststatus);
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0inststatusdate : " + itemValue.json.ta0inststatusdate);
                        /*
                         * Description: Update installtion status inside local.
                         * Created: Alif (14.01.2020)
                         */
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>trigger this.jsonStoreCurd.replaceWO");
                        _this.jsonStoreCurd.replaceWO(itemValue, "LPCWORKORDER", false);
                    }
                    else {
                        console.log(">WoHomePage >>checkingWorkOrderStatus >>>description : " + respResult.description);
                        itemValue.json.ta0checking = 'N';
                        _this.gf.displayToast('Failure : ' + respResult.description);
                    }
                });
            }
        }
        else {
            this.gf.displayToast('No Network Connection.');
        }
    };
    /*
     * Trigger updated location gps coordinates.
     * Created: Alif (20.01.2020)
     */
    WoHomePage.prototype.updateGPSCoordinate = function (value) {
        console.log(">WoHomePage >>updateGPSCoordinate");
        console.log(">WoHomePage >>updateGPSCoordinate >>>trigger this.gf.checkGPSCoordinate");
        //^Trigger to get updated gps coordinates into Maximo
        this.gf.checkGPSCoordinate();
    };
    /*
     * Description: Method to open/close view status 'Service Order".
     * Created    : Alif (26.02.2020)
     */
    WoHomePage.prototype.viewOpenCloseStatus = function (value) {
        console.log(">WoHomePage >>viewOpenCloseStatus");
        console.log(">WoHomePage >>viewOpenCloseStatus >>>enter to change view status SO section : " + this.statusview);
        this.statusIndex = value;
        this.statusview = !this.statusview;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], WoHomePage.prototype, "content", void 0);
    WoHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wo-home',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/wo-home/wo-home.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>My Assigned Work</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="changeScenario()" style="padding-right: 20px;">\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only style="padding-right: 20px;" (click)="updateGPSCoordinate($event)">\n        <ion-icon color="light" name="navigate" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment mode="md" [(ngModel)]="refSegment" (click)="segmentClick()">\n      <ion-segment-button value="workorder" [ngClass]="refSegment == \'workorder\' ? \'Segment-actived\' : \'\'">\n        Service Order\n      </ion-segment-button>\n      <ion-segment-button value="pin" [ngClass]="refSegment == \'pin\' ? \'Segment-actived\' : \'\'">\n        My Favourite\n      </ion-segment-button>\n      <ion-segment-button value="pending" [ngClass]="refSegment == \'pending\'? \'Segment-actived\' : \'\'">\n        Upload BCRM\n      </ion-segment-button>\n      <ion-segment-button value="pendsyncup" [ngClass]="refSegment == \'pendsyncup\'? \'Segment-actived\':\'\'">\n        Pending Sync Up\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar mode="md" color="primary" [showCancelButton]="true" [(ngModel)]="searchTerm"\n      (ionInput)="filterSOType($event.target.value)"\n      placeholder="Search (SO Type, BCRM Number, Site ID, SO Number, Status, SN Code)">\n    </ion-searchbar>\n  </ion-toolbar>\n  <ion-row>\n    <ion-col col-sm-12 col-md-1 col-1 align-self-end>\n      <button ion-button color="light" style="width: 100%;" (click)="multiSelect()">\n        <ion-icon [name]="selectText"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-5 col-5>\n      <ion-item no-lines>\n        <ion-label color="primary" stacked>SO Type</ion-label>\n        <ion-select [(ngModel)]="soType" (ionChange)="goToWorkOrderHome($event)" multiple="{{gv.ctrl_dropdownHomePage}}"\n          [selectOptions]="{ title:\'SO Type\' }">\n          <ion-option *ngFor="let item of gv.newWorktype" [value]="item.key" [selected]="item.key == \'ALL\'">\n            {{item.key}}&nbsp;({{item.value}})</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-5 col-5>\n      <ion-item no-lines>\n        <ion-label color="primary" stacked>Sorting</ion-label>\n        <ion-select [(ngModel)]="sortOrderList" (ionChange)="makeSortResultFun()" multiple="false"\n          [selectOptions]="{ title:\'Sorting\' }">\n          <ion-option value="wonum">SO Number</ion-option>\n          <ion-option value="worktype">SO Type</ion-option>\n          <ion-option value="status">Status</ion-option>\n          <ion-option value="reportdate">Creation Date</ion-option>\n          <ion-option value="woeq13">Assigned Date</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-1 col-1 style="word-wrap: break-all;" align-self-end>\n      <button ion-button color="light" (click)="makeSortOrderChange()" style="width: 100%;">\n        <ion-icon name="{{ sortTitle }}"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle">\n          My Assigned Work\n        </div>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;" (click)="changeScenario()">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;" (click)="presentPopover($event)">\n        <button ion-button icon-only clear>\n          <ion-icon name="more" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="refSegment" (click)="segmentClick()">\n      <ion-segment-button value="workorder" [ngClass]="refSegment == \'workorder\' ? \'Segment-actived\' : \'\'">\n        Service Order </ion-segment-button>\n      <ion-segment-button value="pin" [ngClass]="refSegment == \'pin\' ? \'Segment-actived\' : \'\'">\n        My Favourite\n      </ion-segment-button>\n      <ion-segment-button value="pending" [ngClass]="refSegment == \'pending\'? \'Segment-actived\' : \'\'">\n        Upload BCRM\n      </ion-segment-button>\n      <ion-segment-button value="pendsyncup" [ngClass]="refSegment == \'pendsyncup\'? \'Segment-actived\':\'\'">\n        Pending Sync Up\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <ion-row>\n    <ion-col col-1 col-sm-12 col-md-1 align-self-center justify-content-center *ngIf="selectCheck">\n      <ion-checkbox [(ngModel)]="selectAllBool" (click)="selectAll($event)"\n        style="float: left; margin: 8px 16px 8px 13px;">\n      </ion-checkbox>\n    </ion-col>\n    <ion-col col-2 col-sm-12 col-md-2>\n      <button ion-button color="default" (click)="multiSelect()" style="float: left;">\n        <ion-icon [name]="selectText" style="padding-right: 12px;"></ion-icon>Select\n      </button>\n    </ion-col>\n    <ion-col align-self-center>\n      <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="filterSOType($event.target.value)"\n        placeholder="Search (SO Type, BCRM Number, Site ID, SO Number, Status, SN Code)">\n      </ion-searchbar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-sm-12 col-md-3 col-3>\n      <ion-item no-lines>\n        <ion-label color="primary" stacked>SO Type</ion-label>\n        <ion-select interface="popover" [(ngModel)]="soType" (ionChange)="goToWorkOrderHome($event)"\n          multiple="{{gv.ctrl_dropdownHomePage}}" [selectOptions]="{ title:\'SO Type\' }">\n          <ion-label>Work Order List</ion-label>\n          <ion-option *ngFor="let item of gv.newWorktype" [value]="item.key" [selected]="item.key == \'ALL\'">\n            {{item.key}}&nbsp;({{item.value}})</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 col-sm-12 col-md-5 align-self-center style="padding-top:10px;">\n      <ion-item no-lines>\n        <ion-label color="primary" size="20px;" style="text-align: center;"> Service Order List </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-3 col-3>\n      <ion-item no-lines>\n        <ion-label color="primary" stacked>Sorting</ion-label>\n        <ion-select interface="popover" [(ngModel)]="sortOrderList" (ionChange)="makeSortResultFun()">\n          <ion-option value="wonum">SO Number</ion-option>\n          <ion-option value="worktype">SO Type</ion-option>\n          <ion-option value="status">Status</ion-option>\n          <ion-option value="reportdate">Creation Date</ion-option>\n          <ion-option value="woeq13">Assigned Date</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-sm-12 col-md-1 style="word-wrap: break-all;" align-self-end>\n      <button ion-button color="light" (click)="makeSortOrderChange()" style="width: 100%;">\n        <ion-icon name="{{ sortTitle }}"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-header> -->\n\n<ion-content>\n  <ion-fab bottom right>\n    <button ion-fab mini class="scrollFabButton" color="primary" (click)="scrollToTop()">\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull down to download">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div [ngSwitch]="refSegment">\n    <ion-row>\n      <ion-col ion-col col-md-3 align-self-center>\n        <ion-item no-lines *ngIf="selectCheck">\n          <ion-checkbox item-start [(ngModel)]="selectAllBool" (ionChange)="selectAll($event)"></ion-checkbox>\n          <ion-label>Select All</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-9 [ngClass]="(isValid && refSegment == \'workorder\') ? \'display\':\'non-display\'">\n        <ion-item no-lines class="pagination">\n          <a href="javascript:;" [ngClass]="(prevbtndisabled)?\'disabled\':\'\'" (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" [ngClass]="(page===gv.pageCurrentIndex)?\'active\':\'\'" (click)="setpagination(page -1)"\n            *ngFor="let page of gv.pages; let index = index">{{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextbtndisabled)?\'disabled\':\'\'" (click)="setnext()">&raquo;</a>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-list *ngIf="refSegment != \'pendsyncup\'">\n      <ion-card *ngFor=\'let attr of gv.initItems; let j = index;\'>\n        <ion-item-divider\n          (click)="(!selectCheck && (showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-checkbox *ngIf="selectCheck" (click)="onChangeCheckBoxes(attr.json.wonum, attr)"\n            [checked]="selectedItem.includes(attr.json.wonum)" item-start></ion-checkbox>\n          <ion-label item-start>\n            <strong>\n              {{ gv.offset + j + 1 }}. &nbsp;&nbsp; {{ attr.json.wonum }} - {{ attr.json.ta0bcrmnum }}\n            </strong>\n          </ion-label>\n          <ion-label item-end text-left>\n            <strong>{{ attr.json.worktype }}</strong>\n          </ion-label>\n          <ion-label item-end text-center style="border-radius: 10px;margin: 5px;padding: 5px;"\n            [ngClass]="(attr.json.status == \'APPR\' ? \'classAppr\' : \'\') ||  (attr.json.status == \'INPRG\' ? \'classInprg\' : \'\') || (attr.json.status == \'KIV\' ? \'classKiv\' : \'\') || (attr.json.status == \'PCBNT\' ? \'classPcbnt\' : \'\') || (attr.json.status == \'COMP\' ? \'classReview\' : \'\')">\n            {{ attr.json.status }} -\n            {{ attr.json.status === \'APPR\' ? \'Approved\' : attr.json.status === \'INPRG\' ? \'In Progress\' : attr.json.status === \'CLSD\' ? \'Closed\' : attr.json.status === \'TECO\' ? \'Complete\' : attr.json.status === \'COMP\' ? \'Review\' : attr.json.status === \'KIV\' ? ( attr.json.hasOwnProperty(\'ta0wouserstatus\') ? attr.json.ta0wouserstatus[0].ta0status :\'KIV\') : attr.json.status === \'PCBNT\' ? \'PCBNT\' : \'\' }}\n            {{ attr.json.status === \'KIV\' && attr.json.hasOwnProperty(\'ta0wouserstatus\') && attr.json.ta0wouserstatus.length >1 ? attr.json.ta0wouserstatus[1].ta0status :\'\' }}\n            {{ attr.json.status === \'KIV\' && attr.json.hasOwnProperty(\'ta0wouserstatus\') && attr.json.ta0wouserstatus.length >2 ? attr.json.ta0wouserstatus[2].ta0status :\'\' }}\n            {{ attr.json.status === \'KIV\' && attr.json.hasOwnProperty(\'ta0wouserstatus\') && attr.json.ta0wouserstatus.length >3 ? attr.json.ta0wouserstatus[3].ta0status :\'\' }}\n          </ion-label>\n        </ion-item-divider>\n\n        <ion-item mode="md"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-label *ngIf="attr.json.lead != null">\n            <strong>Assigned : </strong>\n            {{ attr.json.lead }}\n          </ion-label>\n          <ion-label *ngIf="attr.json.lead == null">\n            <strong>Unassigned</strong>\n          </ion-label>\n          <ion-label item-end text-right>\n            <strong>Site ID : </strong>\n            {{attr.json.siteid }}\n          </ion-label>\n          <ion-label item-end text-right>\n            <strong>SN : </strong>\n            {{ attr.json.ta0sncode }}\n          </ion-label>\n        </ion-item>\n\n        <ion-item mode="md" *ngIf="attr.json.ta0srnum != null"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-label>\n            <strong>SR No : </strong>\n            {{ attr.json.ta0srnum }}\n          </ion-label>         \n          <ion-label *ngIf="attr.json.ta0crmdoctype != null" item-end text-left>\n            <strong>CRM Doc Type : </strong>\n            {{ attr.json.ta0crmdoctype }}\n          </ion-label>  \n          <ion-label *ngIf="attr.json.ta0crmapptdate != null" item-end text-right>\n            <strong>CRM Appt. Date : </strong>\n            {{ attr.json.ta0crmapptdate | date: gv.dateFormat }} -\n            {{ attr.json.ta0crmapptdate | date: gv.timeFormat }}\n          </ion-label>         \n        </ion-item>\n\n        <ion-item mode="md"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-label *ngIf="gv.employeeTypeLogin">\n            <strong>Change By : </strong>\n            {{ attr.json.changeby }}\n          </ion-label>\n          <ion-label>\n            <strong>CA No. : </strong>\n            {{ attr.json.ta0accountnum }}\n          </ion-label>\n          <ion-label item-end text-right>\n            <strong>\n              Voltage :\n            </strong>\n            {{ attr.json.ta0installationvoltage == \'01\' ? \'Single Phase\' :\n                 attr.json.ta0installationvoltage == \'02\' ? \'3 Phase\' :\n                 attr.json.ta0installationvoltage == \'03\' ? \'400V LPC\' : \n                 attr.json.ta0installationvoltage == \'04\' ? \'6.6kV LPC\' : \n                 attr.json.ta0installationvoltage == \'05\' ? \'11kV\' :\n                 attr.json.ta0installationvoltage == \'06\' ? \'22kV\' :\n                 attr.json.ta0installationvoltage == \'07\' ? \'33kV\' :\n                 attr.json.ta0installationvoltage == \'08\' ? \'66kV\' :\n                 attr.json.ta0installationvoltage == \'09\' ? \'132kV\' :\n                 attr.json.ta0installationvoltage == \'10\' ? \'275kV\' : \n                 attr.json.ta0installationvoltage == \'11\' ? \'500kV\' : \'\' }}\n          </ion-label>\n        </ion-item>\n\n        <ion-item mode="md"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'"\n          text-wrap style="align-items: center;">\n          <h2><strong>Customer Name : </strong></h2>\n          <h2>{{ attr.json.ta0bpname }}</h2>\n\n          <ion-spinner name="dots" item-end style="zoom: 1;"\n            *ngIf="attr.json.ta0download == \'L\' || attr.json.ta0checking == \'L\'">\n          </ion-spinner>\n        </ion-item>\n\n        <ion-item mode="md" no-lines *ngFor=" let address of attr.json.woserviceaddress;" text-wrap\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <h2 *ngIf="address.formattedaddress != null"><strong>Address: </strong></h2>\n          <h2 *ngIf="address.formattedaddress != null">{{ address.formattedaddress }}</h2>\n        </ion-item>\n\n        <ion-row style="border-top: 1px solid #c8c7cc;">\n          <button ion-item no-lines detail-none col-md-4 style="border-right: 1px solid #c8c7cc;"\n            (click)="(attr.json.ta0download == \'Y\') ? goToWorkOrderDetail(attr) : downloadFeederDetails(attr, attr.json.wonum, \'single\')"\n            [ngClass]="(attr.json.ta0download == \'Y\') ? \'icon-success\' : \'icon-failed\'">\n            <ion-icon [name]="(attr.json.ta0download == \'Y\') ? \'cloud-done\' : \'cloud-download-outline\'" item-start>\n            </ion-icon>\n            Download\n          </button>\n          <button ion-item no-lines detail-none col-md-4 style="border-right: 1px solid #c8c7cc;"\n            (click)="checkingWorkOrderStatus(attr, attr.json.wonum, attr.json.siteid)"\n            [ngClass]="(attr.json.ta0checking == \'Y\') ? \'icon-success\' : \'icon-failed\'">\n            <ion-icon name="md-sync" item-start>\n            </ion-icon>\n            Check Status\n          </button>\n          <button ion-item no-lines detail-none col-md-4\n            (click)="(attr.json.ta0favourite == \'Y\') ? pinSelectItem(attr, j, \'unpin\') : pinSelectItem(attr, j, \'pin\')"\n            [ngClass]="(attr.json.ta0favourite == \'Y\') ? \'icon-success\' : \'icon-failed\'">\n            <ion-icon [name]="(attr.json.ta0favourite == \'Y\') ? \'ios-heart\' : \'ios-heart-outline\'" item-start>\n            </ion-icon>\n            Favourite\n          </button>\n        </ion-row>\n\n        <ion-list-header style="border-top: 1px solid #c8c7cc;background-color: #f7f7f7;"\n          *ngIf="(attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\') || attr.json.ta0bcrmresponsestatus === \'E\'"\n          (click)="viewOpenCloseStatus(j)">\n          <ion-icon name="information-circle" item-start></ion-icon>\n          Responds Status\n          <ion-icon name="arrow-dropright" *ngIf="!statusview" item-end></ion-icon>\n          <ion-icon name="arrow-dropdown" *ngIf="statusview" item-end></ion-icon>\n        </ion-list-header>\n\n        <!-- <span\n          *ngIf="(statusview && statusIndex === j) || (attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')"> -->\n        <ion-item text-wrap\n          *ngIf="(attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')"\n          [ngClass]="(attr.json.ta0checking == \'Y\' || (attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')) ? \'successRespond\' : \'\'">\n          <h2><strong>Installation Status</strong></h2>\n          <p style="color: black;white-space: pre-line;">{{ attr.json.ta0inststatus || "-" }}</p>\n        </ion-item>\n\n        <ion-row\n          *ngIf="(attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')"\n          style="border-bottom: 0.2px solid grey;">\n          <ion-item no-lines\n            [ngClass]="(attr.json.ta0checking == \'Y\' || (attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')) ? \'successRespondLabel\' : \'\'">\n            <ion-label>\n              <strong>Last updated :</strong>&nbsp;\n              {{ attr.json.ta0inststatusdate | date: gv.dateFormat }} -\n              {{ attr.json.ta0inststatusdate | date: gv.timeFormat }}\n            </ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-item text-wrap no-lines *ngIf="attr.json.ta0bcrmresponsestatus === \'E\'"\n          [ngClass]="(attr.json.ta0bcrmresponsestatus === \'E\') ? \'errorRespond\' : \'\'">\n          <h2><strong>BCRM Status</strong></h2>\n          <p style="color:black;text-align:justify;white-space: pre-line;">\n            {{ attr.json.ta0bcrmresponsecode }}\n          </p>\n        </ion-item>\n\n        <ion-list-header style="color: red;background-color: antiquewhite;"\n          *ngIf="attr.json.ta0syncresponsemsg !== null && attr.json.ta0syncresponsemsg !== \'\' && attr.json.ta0syncresponsemsg !== undefined">\n          <ion-icon name="information-circle" item-start></ion-icon>\n          Sync Up Responds\n          <ion-icon name="arrow-dropright" item-end></ion-icon>\n          <!-- <ion-icon name="arrow-dropdown" item-end></ion-icon> -->\n        </ion-list-header>\n\n        <ion-item text-wrap no-lines\n          *ngIf="attr.json.ta0syncresponsemsg !== null && attr.json.ta0syncresponsemsg !== \'\' && attr.json.ta0syncresponsemsg !== undefined">\n          <p style="color:black;text-align:justify;white-space: pre-line;">\n            {{ attr.json.ta0syncresponsemsg }}\n          </p>\n        </ion-item>\n        <!-- </span> -->\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngIf="refSegment == \'pendsyncup\' && (syncData != null && syncData != \'undefined\' && syncData != \'\')">\n      <ion-card *ngFor=\'let attr of syncData; let j = index;\'>\n        <ion-item-divider\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-checkbox *ngIf="selectCheck" (click)="onChangeCheckBoxes(attr.json.wonum, attr)"\n            [checked]="selectedItem.includes(attr.json.wonum)" item-start></ion-checkbox>\n          <ion-label item-start>\n            <strong>\n              {{ gv.offset + j + 1 }}. &nbsp;&nbsp; {{ attr.json.wonum }} - {{ attr.json.ta0bcrmnum }}\n            </strong>\n          </ion-label>\n          <ion-label item-end text-left>\n            <strong>{{ attr.json.worktype }}</strong>\n          </ion-label>\n          <ion-label item-end text-center style="border-radius: 10px;margin: 10px;padding: 5px;"\n            [ngClass]="(attr.json.status == \'APPR\' ? \'classAppr\' : \'\') ||  (attr.json.status == \'INPRG\' ? \'classInprg\' : \'\') || (attr.json.status == \'KIV\' ? \'classKiv\' : \'\') || (attr.json.status == \'PCBNT\' ? \'classPcbnt\' : \'\') || (attr.json.status == \'COMP\' ? \'classReview\' : \'\')">\n            {{ attr.json.status }} -\n            {{ attr.json.status === \'APPR\' ? \'Approved\' : attr.json.status === \'INPRG\' ? \'In Progress\' : attr.json.status === \'CLSD\' ? \'Closed\' : attr.json.status === \'TECO\' ? \'Complete\' : attr.json.status === \'COMP\' ? \'Review\' : attr.json.status === \'KIV\' ? \'KIV\' : attr.json.status === \'PCBNT\' ? \'PCBNT\' : \'\' }}\n          </ion-label>\n        </ion-item-divider>\n\n        <ion-item mode="md"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-label *ngIf="attr.json.lead != null">\n            <strong>Assigned : </strong>\n            {{ attr.json.lead }}\n          </ion-label>\n          <ion-label *ngIf="attr.json.lead == null">\n            <strong>Unassigned</strong>\n          </ion-label>\n          <ion-label item-end text-right>\n            <strong>Site ID : </strong>\n            {{attr.json.siteid }}\n          </ion-label>\n          <ion-label item-end text-right>\n            <strong>SN : </strong>\n            {{ attr.json.ta0sncode }}\n          </ion-label>\n        </ion-item>\n\n        <ion-item mode="md"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <ion-label *ngIf="gv.employeeTypeLogin">\n            <strong>Change By : </strong>\n            {{ attr.json.changeby }}\n          </ion-label>\n          <ion-label>\n            <strong>CA No. : </strong>\n            {{ attr.json.ta0accountnum }}\n          </ion-label>\n          <ion-label item-end text-right>\n            <strong>\n              Voltage :\n            </strong>\n            {{ attr.json.ta0installationvoltage == \'01\' ? \'Single Phase\' :\n                 attr.json.ta0installationvoltage == \'02\' ? \'3 Phase\' :\n                 attr.json.ta0installationvoltage == \'03\' ? \'400V LPC\' : \n                 attr.json.ta0installationvoltage == \'04\' ? \'6.6kV LPC\' : \n                 attr.json.ta0installationvoltage == \'05\' ? \'11kV\' :\n                 attr.json.ta0installationvoltage == \'06\' ? \'22kV\' :\n                 attr.json.ta0installationvoltage == \'07\' ? \'33kV\' :\n                 attr.json.ta0installationvoltage == \'08\' ? \'66kV\' :\n                 attr.json.ta0installationvoltage == \'09\' ? \'132kV\' :\n                 attr.json.ta0installationvoltage == \'10\' ? \'275kV\' : \n                 attr.json.ta0installationvoltage == \'11\' ? \'500kV\' : \'\' }}\n          </ion-label>\n        </ion-item>\n\n        <ion-item mode="md"\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'"\n          text-wrap style="align-items: center;">\n          <h2><strong>Customer Name : </strong></h2>\n          <h2>{{ attr.json.ta0bpname }}</h2>\n\n          <ion-spinner name="dots" item-end style="zoom: 1;"\n            *ngIf="attr.json.ta0download == \'L\' || attr.json.ta0checking == \'L\'">\n          </ion-spinner>\n        </ion-item>\n\n\n        <ion-item mode="md" no-lines *ngFor=" let address of attr.json.woserviceaddress;" text-wrap\n          (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'">\n          <h2 *ngIf="address.formattedaddress != null"><strong>Address: </strong></h2>\n          <h2 *ngIf="address.formattedaddress != null">{{ address.formattedaddress }}</h2>\n        </ion-item>\n\n        <ion-row style="border-top: 1px solid #c8c7cc;">\n          <button ion-item no-lines detail-none col-md-4 style="border-right: 1px solid #c8c7cc;"\n            (click)="(attr.json.ta0download == \'Y\') ? goToWorkOrderDetail(attr) : downloadFeederDetails(attr, attr.json.wonum, \'single\')"\n            [ngClass]="(attr.json.ta0download == \'Y\') ? \'icon-success\' : \'icon-failed\'">\n            <ion-icon [name]="(attr.json.ta0download == \'Y\') ? \'cloud-done\' : \'cloud-download-outline\'" item-start>\n            </ion-icon>\n            Download\n          </button>\n          <button ion-item no-lines detail-none col-md-4 style="border-right: 1px solid #c8c7cc;"\n            (click)="checkingWorkOrderStatus(attr, attr.json.wonum, attr.json.siteid)"\n            [ngClass]="(attr.json.ta0checking == \'Y\') ? \'icon-success\' : \'icon-failed\'">\n            <ion-icon name="md-sync" item-start>\n            </ion-icon>\n            Check Status\n          </button>\n          <button ion-item no-lines detail-none col-md-4\n            (click)="(attr.json.ta0favourite == \'Y\') ? pinSelectItem(attr, j, \'unpin\') : pinSelectItem(attr, j, \'pin\')"\n            [ngClass]="(attr.json.ta0favourite == \'Y\') ? \'icon-success\' : \'icon-failed\'">\n            <ion-icon [name]="(attr.json.ta0favourite == \'Y\') ? \'ios-heart\' : \'ios-heart-outline\'" item-start>\n            </ion-icon>\n            Favourite\n          </button>\n        </ion-row>\n\n\n        <ion-list-header style="border-top: 1px solid #c8c7cc;background-color: #f7f7f7;"\n          *ngIf="(attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\') || attr.json.ta0bcrmresponsestatus === \'E\'">\n          <ion-icon name="information-circle" item-start></ion-icon>\n          Responds Status\n          <!-- <ion-icon name="arrow-dropright" item-end></ion-icon> -->\n          <ion-icon name="arrow-dropdown" item-end></ion-icon>\n        </ion-list-header>\n\n        <ion-item text-wrap\n          *ngIf="(attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')"\n          [ngClass]="(attr.json.ta0checking == \'Y\' || (attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')) ? \'successRespond\' : \'\'">\n          <h2><strong>Installation Status</strong></h2>\n          <p style="color: black;white-space: pre-line;">{{ attr.json.ta0inststatus || "-" }}</p>\n        </ion-item>\n\n        <ion-row\n          *ngIf="(attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')"\n          style="border-bottom: 0.2px solid grey;">\n          <ion-item no-lines\n            [ngClass]="(attr.json.ta0checking == \'Y\' || (attr.json.ta0inststatus !== null && attr.json.ta0inststatus !== undefined && attr.json.ta0inststatus !== \'\')) ? \'successRespondLabel\' : \'\'">\n            <ion-label>\n              <strong>Last updated :</strong>&nbsp;\n              {{ attr.json.ta0inststatusdate | date: gv.dateFormat }} -\n              {{ attr.json.ta0inststatusdate | date: gv.timeFormat }}\n            </ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-item text-wrap no-lines *ngIf="attr.json.ta0bcrmresponsestatus === \'E\'"\n          [ngClass]="(attr.json.ta0bcrmresponsestatus === \'E\') ? \'errorRespond\' : \'\'">\n          <h2><strong>BCRM Status</strong></h2>\n          <p style="color:black;text-align:justify;white-space: pre-line;">\n            {{ attr.json.ta0bcrmresponsecode }}\n          </p>\n        </ion-item>\n\n        <ion-list-header style="color: red;background-color: antiquewhite;"\n          *ngIf="attr.json.ta0syncresponsemsg !== null && attr.json.ta0syncresponsemsg !== \'\' && attr.json.ta0syncresponsemsg !== undefined">\n          <ion-icon name="information-circle" item-start></ion-icon>\n          Sync Up Responds\n          <ion-icon name="arrow-dropright" item-end></ion-icon>\n          <!-- <ion-icon name="arrow-dropdown" item-end></ion-icon> -->\n        </ion-list-header>\n\n        <ion-item text-wrap no-lines\n          *ngIf="attr.json.ta0syncresponsemsg !== null && attr.json.ta0syncresponsemsg !== \'\' && attr.json.ta0syncresponsemsg !== undefined">\n          <p style="color:black;text-align:justify;white-space: pre-line;">\n            {{ attr.json.ta0syncresponsemsg }}\n          </p>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n    <!-- <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n      *ngIf="refSegment != \'pendsyncup\'">\n      <div *ngIf="gv.initItems != null && gv.initItems != \'undefined\' && gv.initItems != \'\';else other_content">\n        <ion-list>\n          <ion-item-sliding #item *ngFor=\'let attr of gv.initItems; let j = index;\'>\n            <ion-item text-wrap detail-push style="padding-left: 5px;"\n              (click)="(!selectCheck && (showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\' || attr.json.ta0checking == \'N\' || attr.json.ta0checking == \'\' || attr.json.ta0checking == \'undefined\' || attr.json.ta0checking == null || attr.json.ta0checking === \'Y\')) ? goToWorkOrderDetail(attr) :  \'\'"\n              [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'">\n              <ion-label style="cursor: pointer;" (click)="onChangeCheckBoxes(attr.json.wonum, attr)">\n                <ion-row>\n                  <ion-col col-12>\n                    <ion-row text-wrap>\n                      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all;">\n                        <h2 (click)="clearonedirtyfile(attr)">\n                          <b> {{ gv.offset + j + 1 }} &nbsp;&nbsp; {{ attr.json.wonum }} -\n                            {{ attr.json.ta0bcrmnum }}</b>\n                        </h2>\n                      </ion-col>\n                      <ion-col col-5 col-sm-5 col-md-2>\n                        <b> {{attr.json.worktype }} </b>\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-3 style="word-wrap:  break-all"\n                        [ngClass]="(attr.json.status == \'APPR\' ? \'classAppr\' : \'\') ||  (attr.json.status == \'INPRG\' ? \'classInprg\' : \'\') || (attr.json.status == \'KIV\' ? \'classKiv\' : \'\') || (attr.json.status == \'PCBNT\' ? \'classPcbnt\' : \'\') || (attr.json.status == \'COMP\' ? \'classReview\' : \'\')">\n                        {{ attr.json.status }} -\n                        {{ attr.json.status === \'APPR\' ? \'Approved\' : attr.json.status === \'INPRG\' ? \'In Progress\' : attr.json.status === \'CLSD\' ? \'Closed\' : attr.json.status === \'TECO\' ? \'Complete\' : attr.json.status === \'COMP\' ? \'Review\' : attr.json.status === \'KIV\' ? \'KIV\' : attr.json.status === \'PCBNT\' ? \'PCBNT\' : \'\'}}\n                      </ion-col>\n                      <ion-col col-1 col-sm-1 col-md-1 style="text-align: right;">\n                        <ion-icon name="pin" *ngIf="attr.json.ta0favourite == \'Y\'"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row text-wrap>\n                      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-top: 20px;">\n                        <span *ngIf="attr.json.lead != null">ASSIGNED - {{ attr.json.lead }}</span>\n                        <span *ngIf="attr.json.lead == null">UNASSIGNED</span>\n                      </ion-col>\n                      <ion-col style="padding-top: 20px;">\n                        SITE-ID - {{attr.json.siteid }}\n                      </ion-col>\n                      <ion-col col-2 col-sm-2 col-md-2 style="text-align: left; padding-top: 20px;">\n                        SN - {{attr.json.ta0sncode }}\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-1 style="text-align: center;">\n                        <ion-icon *ngIf="attr.json.ta0download == \'Y\'"\n                          [ngClass]="(attr.json.ta0download == \'Y\' ? \'iconAfterDownload\' : \'\')" stop-event="click"\n                          name="cloud-done"></ion-icon>\n                        <ion-icon name="cloud-download" stop-event="click" class="iconBeforeDownload"\n                          *ngIf="attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null"\n                          (click)="downloadFeederDetails(attr, attr.json.wonum, \'single\')"></ion-icon>\n                        <ion-spinner name="crescent" [ngClass]="(attr.json.ta0download == \'L\' ? \'iconDownloading\' : \'\')"\n                          *ngIf="attr.json.ta0download == \'L\'"></ion-spinner>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row text-wrap *ngIf="gv.employeeTypeLogin">\n                      <ion-col col-6 col-sm-6 col-md-6><span *ngIf="attr.json.changeby != null">CHANGE BY -\n                          {{ attr.json.changeby }}</span></ion-col>\n                    </ion-row>\n                    <ion-row text-wrap>\n                      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                        CA NUMBER - {{ attr.json.ta0accountnum }}\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-3>\n                        {{ attr.json.ta0installationvoltage == \'01\' ? \'Single Phase\' :\n                        attr.json.ta0installationvoltage == \'02\' ? \'3 Phase\' :\n                        attr.json.ta0installationvoltage == \'03\' ? \'400V LPC\' : \n                        attr.json.ta0installationvoltage == \'04\' ? \'6.6kV LPC\' : \n                        attr.json.ta0installationvoltage == \'05\' ? \'11kV\' :\n                        attr.json.ta0installationvoltage == \'06\' ? \'22kV\' :\n                        attr.json.ta0installationvoltage == \'07\' ? \'33kV\' :\n                        attr.json.ta0installationvoltage == \'08\' ? \'66kV\' :\n                        attr.json.ta0installationvoltage == \'09\' ? \'132kV\' :\n                        attr.json.ta0installationvoltage == \'10\' ? \'275kV\' : \n                        attr.json.ta0installationvoltage == \'11\' ? \'500kV\' : \'\'}}\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-1 style="text-align: center;">\n                        <ion-icon name="md-sync"\n                          *ngIf="attr.json.ta0checking == \'N\' || attr.json.ta0checking == \'\' || attr.json.ta0checking == \'undefined\' || attr.json.ta0checking == null"\n                          class="iconBeforeCheck" stop-event="click">\n                        </ion-icon>\n                        <ion-spinner name="dots" *ngIf="attr.json.ta0checking == \'L\'"\n                          [ngClass]="(attr.json.ta0checking == \'L\' ? \'iconCheck\' : \'\')">\n                        </ion-spinner>\n                        <ion-icon name="md-sync" *ngIf="attr.json.ta0checking == \'Y\'" class="iconAfterCheck"\n                          stop-event="click"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap: break-all; padding-left: 0px;" text-wrap\n                      *ngIf="attr.json.woserviceaddress != null">\n                      <ion-col>CUSTOMER - {{attr.json.ta0bpname}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col>\n                        <div *ngFor="let address of attr.json.woserviceaddress;">\n                          <div *ngIf="address.formattedaddress != null"> {{ address.formattedaddress }} </div>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row text-wrap *ngIf="attr.json.ta0bcrmresponsestatus === \'E\'">\n                      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px; color: red">\n                        <div> {{ attr.json.ta0bcrmresponsecode }} </div>\n                        <div> Sync Up Error : {{ attr.json.ta0syncresponsemsg }} </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-label>\n              <ion-checkbox *ngIf="selectCheck" (click)="onChangeCheckBoxes(attr.json.wonum, attr)"\n                [checked]="selectedItem.includes(attr.json.wonum)"></ion-checkbox>\n            </ion-item>\n            <ion-item-options side="right" class="options-right">\n              <button ion-button (click)="checkingWorkOrderStatus(attr, attr.json.wonum, attr.json.siteid)">\n                <ion-icon name="md-sync" class="pin-icon">Check</ion-icon>\n              </button>\n              <button ion-button *ngIf="attr.json.ta0favourite != \'Y\'" (click)="pinSelectItem(attr, j, \'pin\')">\n                <ion-icon name="pin" class="pin-icon">Pin</ion-icon>\n              </button>\n              <button ion-button *ngIf="attr.json.ta0favourite == \'Y\'" (click)="pinSelectItem(attr, j, \'unpin\')">\n                <ion-icon name="pin" class="pin-icon">Unpin</ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </div>\n      <ng-template #other_content>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>No Record Found!</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ng-template>\n    </ion-grid> -->\n\n    <!-- <ion-grid\n      style="margin-top: 0px; word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n      *ngIf="refSegment == \'pendsyncup\'">\n      <div *ngIf="syncData != null && syncData != \'undefined\' && syncData != \'\';else other_content">\n        <ion-list>\n          <ion-item-sliding #item *ngFor=\'let attr of syncData; let j = index;\'>\n            <ion-item text-wrap detail-push style="padding-left: 5px;"\n              (click)="(!selectCheck && ( showDiv == true || attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null || attr.json.ta0download === \'Y\') ) ? goToWorkOrderDetail(attr) :  \'\'"\n              [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'">\n              <ion-label style="cursor: pointer;" (click)="onChangeCheckBoxes(attr.json.wonum, attr)">\n                <ion-row>\n                  <ion-col col-12>\n                    <ion-row text-wrap>\n                      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all;">\n                        <h2 (click)="clearonedirtyfile(attr)">\n                          <b> {{ gv.offset + j + 1 }} &nbsp;&nbsp; {{ attr.json.wonum }} -\n                            {{ attr.json.ta0bcrmnum }}</b>\n                        </h2>\n                      </ion-col>\n                      <ion-col col-5 col-sm-5 col-md-2>\n                        <b> {{attr.json.worktype }} </b>\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-3 style="word-wrap:  break-all"\n                        [ngClass]="(attr.json.status == \'APPR\' ? \'classAppr\' : \'\') ||  (attr.json.status == \'INPRG\' ? \'classInprg\' : \'\') || (attr.json.status == \'KIV\' ? \'classKiv\' : \'\') || (attr.json.status == \'PCBNT\' ? \'classPcbnt\' : \'\') || (attr.json.status == \'COMP\' ? \'classReview\' : \'\')">\n                        {{ attr.json.status }} -\n                        {{ attr.json.status === \'APPR\' ? \'Approved\' : attr.json.status === \'INPRG\' ? \'In Progress\' : attr.json.status === \'CLSD\' ? \'Closed\' : attr.json.status === \'TECO\' ? \'Complete\' : attr.json.status === \'COMP\' ? \'Review\' : attr.json.status === \'KIV\' ? \'KIV\' : attr.json.status === \'PCBNT\' ? \'PCBNT\' : \'\'}}\n                      </ion-col>\n                      <ion-col col-1 col-sm-1 col-md-1 style="text-align: right;">\n                        <ion-icon name="pin" *ngIf="attr.json.ta0favourite == \'Y\'"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row text-wrap>\n                      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-top: 20px;">\n                        <span *ngIf="attr.json.lead != null">ASSIGNED - {{ attr.json.lead }}</span>\n                        <span *ngIf="attr.json.lead == null">UNASSIGNED</span>\n                      </ion-col>\n                      <ion-col style="padding-top: 20px;">\n                        SITE-ID - {{attr.json.siteid }}\n                      </ion-col>\n                      <ion-col col-2 col-sm-2 col-md-2 style="text-align: left; padding-top: 20px;">\n                        SN - {{attr.json.ta0sncode }}\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-1 style="text-align: right;">\n                        <ion-icon *ngIf="attr.json.ta0download == \'Y\'"\n                          [ngClass]="(attr.json.ta0download == \'Y\' ? \'iconAfterDownload\' : \'\')" stop-event="click"\n                          name="cloud-done"></ion-icon>\n                        <ion-icon name="cloud-download" stop-event="click" class="iconBeforeDownload"\n                          *ngIf="attr.json.ta0download == \'N\' || attr.json.ta0download == \'\' || attr.json.ta0download == \'undefined\' || attr.json.ta0download == null"\n                          (click)="downloadFeederDetails(attr, attr.json.wonum, \'single\')"></ion-icon>\n                        <ion-spinner name="crescent" [ngClass]="(attr.json.ta0download == \'L\' ? \'iconDownloading\' : \'\')"\n                          *ngIf="attr.json.ta0download == \'L\'"></ion-spinner>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row text-wrap *ngIf="gv.employeeTypeLogin">\n                      <ion-col col-6 col-sm-6 col-md-6><span *ngIf="attr.json.changeby != null">CHANGE BY -\n                          {{ attr.json.changeby }}</span></ion-col>\n                    </ion-row>\n                    <ion-row text-wrap>\n                      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                        CA NUMBER - {{ attr.json.ta0accountnum }}\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-3>\n                        {{ attr.json.ta0installationvoltage == \'01\' ? \'Single Phase\' :\n                        attr.json.ta0installationvoltage == \'02\' ? \'3 Phase\' :\n                        attr.json.ta0installationvoltage == \'03\' ? \'400V LPC\' : \n                        attr.json.ta0installationvoltage == \'04\' ? \'6.6kV LPC\' : \n                        attr.json.ta0installationvoltage == \'05\' ? \'11kV\' :\n                        attr.json.ta0installationvoltage == \'06\' ? \'22kV\' :\n                        attr.json.ta0installationvoltage == \'07\' ? \'33kV\' :\n                        attr.json.ta0installationvoltage == \'08\' ? \'66kV\' :\n                        attr.json.ta0installationvoltage == \'09\' ? \'132kV\' :\n                        attr.json.ta0installationvoltage == \'10\' ? \'275kV\' : \n                        attr.json.ta0installationvoltage == \'11\' ? \'500kV\' : \'\'}}\n                      </ion-col>\n                    </ion-row>\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap: break-all; padding-left: 0px;" text-wrap\n                      *ngIf="attr.json.woserviceaddress != null">\n                      <ion-col>CUSTOMER - {{attr.json.ta0bpname}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col>\n                        <div *ngFor="let address of attr.json.woserviceaddress;">\n                          <div *ngIf="address.formattedaddress != null"> {{ address.formattedaddress }} </div>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row text-wrap *ngIf="attr.json.ta0bcrmresponsestatus === \'E\'">\n                      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px; color: red">\n                        <div> {{ attr.json.ta0bcrmresponsecode }} </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-label>\n              <ion-checkbox *ngIf="selectCheck" (click)="onChangeCheckBoxes(attr.json.wonum, attr)"\n                [checked]="selectedItem.includes(attr.json.wonum)"></ion-checkbox>\n            </ion-item>\n            <ion-item-options side=\'right\' class=\'options-right\'>\n              <button ion-button *ngIf="attr.json.ta0favourite != \'Y\'" (click)="pinSelectItem(attr, j, \'pin\')">\n                <ion-icon name="pin" class="pin-icon"> Pin</ion-icon>\n              </button>\n              <button ion-button *ngIf="attr.json.ta0favourite == \'Y\'" (click)="pinSelectItem(attr, j, \'unpin\')">\n                <ion-icon name="pin" class="pin-icon"> Unpin</ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </div>\n      <ng-template #other_content>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>No Record Found!</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ng-template>\n    </ion-grid> -->\n\n    <ion-grid [ngClass]="(isValid && refSegment == \'workorder\')?\'display\':\'non-display\'">\n      <ion-row>\n        <ion-col col-12 col-md-12 col-sm-12>\n          <div class="pagination">\n            <a href="javascript:;" [ngClass]="(prevbtndisabled)?\'disabled\':\'\'" (click)="setprevious()">&laquo;</a>\n            <a href="javascript:;" [ngClass]="(page===gv.pageCurrentIndex)?\'active\':\'\'" (click)="setpagination(page -1)"\n              *ngFor="let page of gv.pages let index = index">{{\n                page}}</a>\n            <a href="javascript:;" [ngClass]="(nextbtndisabled)?\'disabled\':\'\'" (click)="setnext()">&raquo;</a>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer *ngIf="popupValue === \'checkEdit\'">\n  <button ion-button round block (click)="synData(gv.initItems)" class="saveBtn">Synch Data</button>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/wo-home/wo-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_json_store_json_store_structure__["a" /* JsonStoreStructureProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_json_store_handler_json_store_handler__["a" /* JsonStoreHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_6__providers_work_order_work_order__["a" /* WorkOrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], WoHomePage);
    return WoHomePage;
}());

//# sourceMappingURL=wo-home.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoHomePageModule", function() { return WoHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wo_home__ = __webpack_require__(1114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WoHomePageModule = /** @class */ (function () {
    function WoHomePageModule() {
    }
    WoHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wo_home__["a" /* WoHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__wo_home__["a" /* WoHomePage */])
            ],
            providers: []
        })
    ], WoHomePageModule);
    return WoHomePageModule;
}());

//# sourceMappingURL=wo-home.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map