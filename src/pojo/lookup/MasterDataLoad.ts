import { WindingGroup } from "./WindingGroup";
import { AmiData } from "./AmiData";
import { SnCode } from "./SnCode";
import { UserStatus } from "./UserStatus";

export class MasterDataLoad {

    _rowstamp: string;
    orgid: string;

    
    ta0userstatus_collectionref: string;
    ta0windinggroup_collectionref: string;
    ta0amidata_collectionref: string;
    ta0sncode_collectionref: string;
    ta0windinggroup: Array<WindingGroup>;
    ta0amidata: Array<AmiData>;
    ta0sncode: Array<SnCode>;
    ta0userstatus: Array<UserStatus>;
}