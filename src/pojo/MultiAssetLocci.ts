import { Asset } from './Asset';
import { RegisterGroupDetails } from './RegisterGroupDetails';
import { DeviceTest } from './DeviceTest';
import { SealInfo } from './SealInfo';
import { UserStatus } from './lookup/UserStatus';

export class MultiAssetLocci {

    constructor() {

    }

    assetnum: string;
    location: string;
    movetobin: number;
    movetolocation: string;
    movetoparent: string;
    movetosite: string;
    orgid: string;
    recordclass: string;
    recordkey: string;
    siteid: string;
    ta0estimatedreading: number;
    ta0estimatedreadingdate: string;
    ta0existingdevice: boolean;
    ta0feederid: any;
    ta0installind: boolean;
    ta0reading: number;
    ta0removeind: boolean;
    ta0replaceind: boolean;
    ta0wrgmtrind: boolean;
    ta0controllingdevice: string;
    ta0registers: Array<RegisterGroupDetails>;
    ta0sealinfo: Array<SealInfo>;
    ta0sealdetail: Array<SealInfo>;
    ta0testdetail: Array<DeviceTest>;
    targetdesc: number;
    ta0modelid: string;
    ta0class: string;
    ta0va: string;

    asset: Array<Asset>;

    changeby: string;
    changedate: string;
    description: string;
    devicetype: string;
    href: string;
    itemnum: string;
    itemsetid: string;
    itemtype: string;
    //location: string;
    modelid: number;
    moved: boolean;
    //orgid: string;
    serialnum: string;
    //siteid: string;
    status: number;
    statusdate: string;
    ta0amcg: string;
    ta0ami: string;
    ta0ams: string;
    ta0currentratio: number;
    ta0voltageratio: number;
    ta0mf: number;
    ta0supplierlabel: string;
    ta0ctpttype: string;
    ta0ctptsticker: string;
    ta0ctptphase: string;
    ta0functionclass: string;
    ta0manufacturer: number;
    ta0systemstatus: string;
    ta0devicestatus: Array<UserStatus>;
    ta0ctcontype: string;
    ta0ptcontype: string;
    ta0serialnum: string;
    ta0devicecategory: string;

    //ta0reading: number;
    ta0registers_collectionref: string;
    ta0registergroup: string;
    ta0description: string;
    ta0bcrmuploadindicator: string;
    ta0feederdescription: string;

    ta0simcardip: number;
    ta0userstatus: string;

    warrantyexpdate: string;
    ta0allocationtype: string;
    // add for pulse connection test by shankar 24 Sep 
    ta0summationqty: string;
    ta0existingassets: boolean = false;
    _rowstamp: string;

    loc_validate: boolean = false;
    loc_allocationType: string;
    loc_parentAllocationType: string;

    loc_windingGroup: string;

    ta0registerstatus: string = 'N';
    ta0testingstatus: string = 'N';
    ta0silstickerstatus: string = 'N';

    loc_ta0registers_completed: boolean = false;
    loc_ta0testings_flag: boolean = false;
    loc_ta0silStickers_flag: boolean = false;

    loc_ta0registers_haveChange: boolean = false;
    loc_ta0testings_haveChange: boolean = false;
    loc_ta0silStickers_haveChange: boolean = false;

    loc_ta0currentratio: any;
    loc_ta0class: any;
    loc_ta0voltageratio: any;

    /**
     * Description  : Adding new attribute 'ta4metertype'
     * Created      : Alif (01.11.2019)
     */
    ta4metertype: string;
}