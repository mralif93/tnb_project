

export class SealInfo {
    constructor() {

    }
    //Meter Sil
    serialnum : string;
    ta0removeind: boolean = false;   
    ta0sealremreason: string;   //CR002 Crimpless Seal
    ta0seallocation: string;
    ta0seallocation_description : string;
    ta0existingseal : boolean = false;
    devicecategory : string;
    ta0sealindicator : string;    
    ta0sealnum: string;
    ta0feedercode : string;
    ta0installind : boolean = false;
    devicelocind : boolean = false;
    loc_ta0removeind : boolean;
    loc_seal_haveChange: boolean;
    ta0newsealnum: string;    
    ta0sealcondition: string;    
    loc_seal_changeValue: string;    
    loc_seal_changeType: string;
    wonum: string;
    orgid: string;
    assetnum: string;
    siteid: string;
    parent: string;
    ta0updateflag: boolean = false;
}
