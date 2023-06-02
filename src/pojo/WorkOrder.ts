
import { FeederDetails } from './FeederDetails';
import { DocLinkDetails } from './DocLinkDetails';
import { WoServiceAddress } from './WoServiceAddress';
import { Assignment } from './Assignment';
import { Complaints } from './complaints';
import { UserStatus } from './UserStatus';
import { RelatedRecord } from './ReleatedRecord';

export class WorkorderPojo {

    ta0favourite: string;
    actfinish: string;
    actstart: string;
    assignment: Array<Assignment>;
    changeby: string;
    changedate: string;
    description: number;
    doclinks: {
        href: string;
    };
    estdur: string;
    estlabhrs: string;
    hasfollowupwork: boolean;
    location: string;
    orgid: string;
    origrecordclass: string;
    origrecordid: string;
    owner: string;
    parent: string;
    phone: number;
    reportdate: number;
    reportedby: string;
    schedfinish: string;
    schedstart: string;
    siteid: string;
    sneconstraint: string;
    status: string;
    statusdate: string;
    supervisor: string;
    ta0accountnum: number;
    ta0bcrmnum: number;
    ta0bcrmresponsecode: string;
    ta0bcrmresponsestatus: string;
    ta0billingclass: number;
    ta0bpname: number;
    ta0bptenantname: number;
    ta0configcode: number;
    ta0devicelocation: number;
    ta0elementnum: number;
    ta0feeder: Array<FeederDetails>;
    ta0feedernum: number;
    ta0installationnum: number;
    ta0installationservice: string;
    ta0installationvoltage: number;
    ta0key: number;
    ta0lastbilldate: string;
    ta0mru: number;
    ta0newmaxdemand: number;
    ta0newvoltage: number;
    ta0newwindinggroup: number;
    ta0polenum: number;
    ta0premisetype: number;
    ta0ratecategory: number;
    ta0remarks: string;
    ta0signalstrength: number;
    ta0serviceflag: boolean;
    ta0sncode: number;
    ta0sntype: number;
    ta0subsoindicator: boolean;
    ta0suppliers: number;
    ta0userstatus1: string;
    ta0userstatus2: string;
    ta0userstatus3: string;
    ta0userstatus4: string;
    ta0workcentervoltage: number;
    vendor: string;
    woclass: string;
    wonum: string;
    wopriority: any;
    worklocation: string;
    worktype: string;
    woserviceaddress: Array<WoServiceAddress>;
    ta0wouserstatus: Array<UserStatus>;
    relatedrecord: Array<RelatedRecord>;
    ta0ctlocation: string;
    ta0ptlocation: string;
    ta0stdkey: string;
    ta0download: string;
    ta4reviewrequired: boolean;

    // Created by Alif (28.11.2019)
    ta0contractorname: string;
    ta0contractorphonenum: string;
    // Created by Alif (30.03/2020)
    wol4: string;

    // Created by Alif (18/12/2019)
    ta0tecoind: boolean;
    ta0clsdind: boolean;
    ta0inststatus: string;
    ta0inststatusdate: string;

    //Created By Ameer (To add controlling Device Serial Number) - 5/10/2018 
    loc_controllingDeviceList: any = [];

    // local variable.
    loc_adhocReplacement: any;
    loc_removedevice: any;
    loc_attachmentCount: number = 0;
    loc_woComplaints: Array<Complaints>;
    loc_docDetails: Array<DocLinkDetails>;
    loc_t_feeder: string = 'notActive';
    loc_t_meters: string = 'notActive';
    loc_t_register: string = 'notActive';
    loc_t_testing: string = 'notActive';
    loc_t_silSticker: string = 'notActive';
    loc_t_closeSo: string = 'notActive';
    loc_ta0feeder_haveChange: boolean = false;
    loc_wo_haveChange: boolean;
    loc_multiassetlocci_haveRemove: boolean;
    loc_feeder_haveRemove: boolean;
    loc_saveStatus: boolean;
}