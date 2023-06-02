import { DescribedBy } from "./DescribedBy";

export class DocLinkDetails {
    tnb_testtype: string;
    tnb_feeder: string;

    href: string;
    localref: string;
    describedBy: DescribedBy;


    loc_changeValue: string;
    loc_haveChange: boolean;
    loc_changeType: string
}