import { DeviceDetails } from './DeviceDetails';
import { MultiAssetLocci } from './MultiAssetLocci';
import { FeederSetDesign } from './design/feederSetDesign';
//import { Asset } from './Asset';

export class FeederDetails {

  description: string;
  multiAssetLocci: Array<MultiAssetLocci>;
  orgid: string;
  siteid: string;
  //ta0asset: Array<Asset>;
  ta0feedercode: string;
  ta0feederid: any;
  wonum: string;
  ta0existing: boolean;

  nFeederVoltage: any;
  eFeederVoltage: any;

  nFeederMainDeviceAllocationType: any;
  eFeederMainDeviceAllocationType: any;

  loc_ta0installationvoltage: string;
  loc_createCT: boolean = false;

  loc_feederSetDesign: Array<FeederSetDesign>;
  loc_haveNewDevice: boolean = false;
  /*
   tnb_feeder: string;
    _rowstamp: any;
    orgid: string;
    tnb_devicedetail_collectionref: string;
    tnb_feederid: any;
    localref: string;
    href: string;
    multiAssetLocci: Array<MultiAssetLocci>;
    tnb_devicedetail: Array<DeviceDetails>; 
    */

  // local variable.
  loc_multiassetlocci_haveChange: boolean = false;
}