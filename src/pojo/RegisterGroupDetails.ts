import { MeterReading } from "./MeterReading";

export class RegisterGroupDetails {

    assetnum: string;
    orgid: string;
    siteid: string;
    ta0dialafter: number;
    ta0dialbefore: number;
    ta0registerfactor: string;
    ta0registergroup: string;
    ta0registernum: number;
    ta0registersid: any;
    ta0registertype: string;
    ta0registertypedesc: string;
    ta0proposedreading: number;
    ta0uom: string;
    ta0meterreading: Array<MeterReading>;

    ta0transformertype: string;
    ta0windinggroup: string;
    ta0windingnumber: string;

    /* tnb_feeder: 'string',
    tnb_register_factor: 'number',
    tnb_total_factor: 'number',
    tnb_register_code: 'integer',
    tnb_reading: 'number',
    tnb_dial_after: 'number',
    tnb_unit: 'integer',
    orgid: 'string',
    tnb_dial_before: 'number',
    tnb_serialnum: 'string',
    tnb_registergroupid: 'integer',
    tnb_register_type: 'string',

    localref: 'string',
    href: 'string',
    _rowstamp: 'integer', */

    loc_reg_totalFactor: string;
    // local variable. 
    loc_reg_changeValue: 'string';
    loc_reg_haveChange: 'boolean';
    loc_reg_changeType: 'string';
}