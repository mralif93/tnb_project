import { Injectable } from '@angular/core';
import { User } from "../../interfaces/user";
import { Events } from 'ionic-angular';
import * as moment from 'moment';

import { Complaints } from './../../pojo/Complaints';

@Injectable()
export class GlobalVars {

    public woItems: any;
    public favItems: any;
    public pendItems: any;
    public refSegment: string;
    public count: number;
    public items: any;
    public ptitems: any;
    public offset: number;
    public pagectrl: number;
    public limit: number;
    public pageCount: number;
    public pageCurrentIndex: number;
    public pages: any[];
    public sortOrder: any = [{ "wonum": "asc" }];
    public totalCount: number = 0;
    public searchGirTerm: String;
    public searchCnTerm: String;
    public girItems: any = [];
    public cnItems: any = [];
    public loginUserId: string;
    public orgId: string;
    public username: string;
    public password: string;
    public imageServletUrl: string;
    public profileImageServletUrl: string;
    public senderID: string = "1077450771480";
    public lookupLoad: boolean = true;
    public assetDetailItems: any;
    public apacheImageUrl: String = "http://www.ksasb.com.my/FileStore/Support/"
    public apacheMenuImageUrl: String = "http://www.ksasb.com.my/FileStore/Menu/"
    public apacheLogoImageUrl: String = "http://www.ksasb.com.my/FileStore/images/"
    public loginNickName: string;
    public deviceName: string;
    public currentPage: string;
    // Current Version for SIT = 0.1.28 (12/12/2018)
    // Current Version for UAT = 0.1.26 (18/12/2018)
    public version: String = '2.2.5.3';
    public appName: String;
    public name: String;
    public openPage: String;
    public loginUser: User;
    public accId: any;
    public pdpa: String;
    public regionId: any;
    public myCommunityRefresh: boolean;
    public deviceTokenId: string;
    public foodCount: any = 0;
    public svDeliveryPojo: any;
    public stateDetail: string;
    public anamoly: string;
    public loc_woComplaints = new Map();
    public initItems: any;
    public initWorkType: string;
    public worktypeList: any = [];
    public newWorktype: any;
    public soType: any = 'ALL';
    public countALL: number;
    public countZUDN: number;
    public countZSRO: number;
    public countZRPM: number;
    public countZRPC: number;
    public countZRMV: number;
    public countZRCE: number;
    public countZIST: number;
    public countZISR: number;
    public countZINR: number;
    public countZINL: number;
    public countZCER: number;
    public countZMMR: number;
    public countZISO: number;
    public countZISP: number;
    public countZDCN: number;
    public countZRCN: number;
    public assetDetailCount: number;
    public creditNoteCount: number;
    public alnDetailCount: number;
    public userDetailCount: number;
    public amiDetailCount: number;
    public materialDetailCount: number;
    public customerDetailCount: number;
    public windDetailCount: number;
    public snCodeDetailCount: number;
    public userStatusDetailCount: number;
    public zoneDetailCount: number;
    public employeetype: String;
    public personid: String;
    public displayname: String;
    public department: String;
    public departmentCode: String;
    public testType: boolean = false;
    public testMobile: boolean;
    public deviceSignal: number = 2;
    public maxPhotoChooseGallery: number = 3;
    public storeImageInGallery: boolean = true;
    public ctrl_limitPagination: number = 25;
    public ctrl_assetPagination: number = 50;
    public ctrl_creditlimitPage: number = 50;
    public ctrl_dropdownHomePage: boolean = true;
    public ctrl_automaticDownload: boolean = true;
    public dateFormat: string = 'dd/MM/y';
    public timeFormat: string = 'shortTime';
    public time24Format: string = 'HH:mm';
    public loadingContent: string = 'Loading Please wait..'
    public saveSuccessfully: string = 'Changes save successfully.';
    public notSaveSuccessfully: string = 'Changes failed to save. Report Administrator.';
    public saveLocallySuccessfully: string = 'Changes save locally.';
    public year = moment().add('year', 5).format('YYYY');
    public settingDateMonth = '-12-31';
    public maxDate: any = this.year + this.settingDateMonth;
    public employeeTypeLogin: boolean = false;
    public ta0defsiteid: String;
    public currentRatio: String = '0';
    public plant: String = "6000";
    // public departContent: String = 'seal';
    public departContent: String;
    public syncCheck: boolean = false;
    public syncIndicator: boolean = false;
    public syncRefreshIndicator: boolean = false;
    public loginCheck: boolean = false;
    // Lookup Executive List (Andy - 04.03.2020)
    public executiveListCount: number;
    // Lookup Team Member List (Alif - 06.03.2020)
    public teamMemberListCount: number;
    // Lookup Team Member List (Alif - 09.03.2020)
    public siteIDListCount: number;

    public exeDept: String = "SEAL Section, Metering Unit, Distribution Network Department, Distribution Division, TNB";

    public statusListTech = ["APPR", "INPRG", "KIV", "PCBNT"];
    public statusListExec = ["COMP"];
    public statusListSupv = ["APPR", "INPRG", "KIV", "PSTSC", "PSTSV", "PCBNT"];

    public simulationInd: boolean = false;
    public timeout: Number = 120000;

    //validate against SQLite
    public validateDBSeal: boolean = false;

    //IEE Status Map
    public ieeMap = new Map<string, boolean>();

    // Crimpless Seal Reasin
    public crimplessSealReason: String;

    constructor(public events: Events) {

        var ipAddress = 'kgen.ksasb.com.my:9093';
        this.imageServletUrl = 'http://' + ipAddress + '/KGenApp/ImageServlet?imageName=';
        this.profileImageServletUrl = 'http://' + ipAddress + '/KGenApp/ImageServletProfile?imageName='
    }

    setVersion(version) {
        this.version = 'Ver=2.2.2';
    }

    setAppName(appName) {
        this.appName = 'Condominium Community by KSA';
    }

    setLoginUserId(loginUserId) {
        this.loginUserId = loginUserId;
    }

    setName(name) {
        this.name = name;
    }

    setCurrentPage(currentPage) {
        this.currentPage = currentPage;
    }

    setPassword(password) {
        this.password = password;
    }

    setLoginUser(loginUser) {
        console.info(' user name  : ' + loginUser.userName);
        this.loginUser = loginUser;
    }

    setOrgId(orgId) {
        this.orgId = orgId;
    }

    setAccId(accId) {
        this.accId = accId;
    }

    setMyCommunityRefresh(myCommunityRefresh) {
        this.myCommunityRefresh = myCommunityRefresh
    }

    setDeviceTokenId(deviceTokenId) {
        this.deviceTokenId = deviceTokenId
    }

    setDeviceName(deviceName) {
        this.deviceName = deviceName
    }

    setFoodCount(foodCount) {
        this.foodCount = foodCount;
    }

    setLoginNickName(loginNickName) {
        this.loginNickName = loginNickName;
    }

    setUsername(username: string): void {
        this.username = username;
    };

    setPdpa(pdpa: string): void {
        this.pdpa = pdpa;
    };

    setLookupLoad(lookup: boolean) {
        this.lookupLoad = lookup;
    }
}