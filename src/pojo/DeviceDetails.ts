import { DeviceTest } from './DeviceTest';
import { RegisterGroupDetails } from './RegisterGroupDetails';

export class DeviceDetails {

    tnb_feeder: string;
    orgid: string;
    tnb_devicedetailid: any;
    tnb_serialnum: string;
    tnb_controlling_device: string;
    tnb_device_allocation: string;

    _rowstamp: any;
    localref: string;
    tnb_registergroup_collectionref: string;
    tnb_devicetest_collectionref: string;
    href: string;

    tnb_registergroup: Array<RegisterGroupDetails>;
    tnb_devicetest: Array<DeviceTest>;

    // local variable. 
    loc_changeValue: string;
    loc_haveChange: boolean;
    loc_changeType: string;

    loc_ta0reg_pcireadtotal: number;
}