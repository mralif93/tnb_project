import { DateTime } from "ionic-angular";
//import { NumberValueAccessor } from "@angular/forms";

export class DeviceTest {

    assetnum: string;
    description: string;
    orgid: string;
    siteid: string;
    feeder: string;


    ta0at_test4: number;
    ta0at_test5: number;
    ta0at_test6: number;
    ta0at_test7: number;
    ta0at_test8: number;
    ta0at_test9: number;
    ta0at_test10: number;
    ta0existingdevice: boolean;
    ta0feederid: any;
    ta0na: boolean = false;
    ta0naremarks: number;
    ta0pc_contctpt_r: boolean;
    ta0pc_contctpt_y: boolean;
    ta0pc_ctpolar_b: boolean;
    ta0pc_ctpolar_r: boolean;
    ta0pc_ctpolar_y: boolean;
    ta0pc_ctratio_b: boolean;
    ta0pc_ctratio_r: boolean;
    ta0pc_ctratio_y: boolean;
    ta0pc_kio_wirg: boolean;
    ta0pc_nseaptpas: boolean;
    ta0pc_ptpolar: boolean;
    ta0pc_s2_starerh: boolean;

    ta0pingtest: boolean;

    ta0testdetailid: any;
    ta0testtype: string;
    ta0vi_arm_cable_visible: string;
    ta0vi_ct_polarity_label: boolean;
    ta0vi_pt_polarity_label: boolean;
    wonum: string;
    ta0testtype_description: string;
    ta0vi_arm_cable_visible_description: string;

    //lpc mvhv inspection
    ta0md_meterdatetime: string;
    ta0vr_ry: number;
    ta0vr_yb: number;
    ta0vr_rb: number;
    ta0vr_rn: number;
    ta0vr_yn: number;
    ta0vr_bn: number;
    ta0vr_re: number;
    ta0vr_ye: number;
    ta0vr_be: number;
    ta0vr_ne: number;
    ta0ph_rotation: number;
    ta0vr_sg_ir: number;
    ta0vr_sg_iy: number;
    ta0vr_sg_ib: number;
    ta0vr_sg_cal_prim_ir: number;
    ta0vr_sg_cal_prim_iy: number;
    ta0vr_sg_cal_prim_ib: number;
    ta0vr_pte_ir: number;
    ta0vr_pte_iy: number;
    ta0vr_pte_ib: number;
    ta0vr_pte_cal_ctratio_ir: number;
    ta0vr_pte_cal_ctratio_iy: number;
    ta0vr_pte_cal_ctratio_ib: number;
    ta0vr_sg_ctratio: number;
    ta0vr_pte_ctratio: number;
    ta0er_starttime: string;
    ta0er_endtime: string;
    ta0er_duration: number;
    ta0er_registercode: number;
    ta0er_readingafter: number;
    ta0er_readingbefore: number;
    ta0er_rf: number;
    ta0er_mf: number;
    ta0er_usage: number;
    ta0pr_active_r: number;
    ta0pr_reactive_r: number;
    ta0pr_pf_r: number;
    ta0pr_active_y: number;
    ta0pr_reactive_y: number;
    ta0pr_pf_y: number;
    ta0pr_active_b: number;
    ta0pr_reactive_b: number;
    ta0pr_pf_b: number;
    ta0pr_active_total: number;
    ta0pr_reactive_total: number;
    ta0pr_pf_total: number;
    ta0at_test1: number;
    ta0at_test2: number;
    ta0at_test3: number;
    ta0at_avg: number;
    ta0pr_totalpower_sec: number;
    ta0pr_transformationfactor: number;
    ta0pr_totalpower_prim: number;
    ta0pwc_usage: number;
    ta0pwc_nexthour: number;
    ta0pwc_estdemand: number;
    ta0pwc_metereddemand: number;
    ta0pwc_avgvoltage: number;
    ta0pwc_avgamps: number;
    ta0pwc_avgpf: number;
    ta0pwc_p3: number;
    ta0reg_amf: number;
    ta0reg_amb: number;
    ta0reg_amc: number;
    ta0reg_pteread: number;
    ta0reg_pciread: number;
    ta0reg_pciread2: number;
    ta0reg_pcireadings: string;
    ta0reg_pcsread: number;
    ta0reg_pccalc: number;

    ta0led_r: string;
    ta0led_ind_r: string;
    ta0led_y: string;
    ta0led_ind_y: string;
    ta0led_b: string;
    ta0led_ind_b: string;
    ta0mv_metertestprocedure: string;
    ta0th_mintemp: number;
    ta0th_minmoist: number;
    ta0th_maxtemp: number;
    ta0th_maxmoist: number;
    ta0tp_brand: string;
    ta0tp_model: string;
    ta0tp_serialnum: string;
    ta0tp_traceability: string;
    ta0tp_calibration: string;

    //CE inspection
    ta0ip: number;
    ta0data: string;
    ta0pt_hyprtminal: boolean;
    ta0pt_iee: boolean;
    ta0cc_addaptor_modem: boolean;
    ta0cc_addaptor_cas: boolean;
    ta0cc_antenna: boolean;
    ta0cc_cas_2p: boolean;
    ta0cc_cas_4p: boolean;
    ta0cc_converter: boolean;
    ta0cc_data_cable: boolean;
    ta0cc_rccb: boolean;
    ta0cc_surge: boolean;
    ta0cc_timer: boolean;
    ta0cc_modem: boolean;
    ta0cc_simcard: boolean;
    ta0cc_clear_simcard: boolean;
    ta0cc_reset_modem: boolean;
    ta0cc_set_cas: boolean;
    ta0cc_set_baudrate: boolean;
    ta0cc_ifc: boolean;
    ta0cc_set_timer: boolean;
    ta0cc_set_watchdog: boolean;
    ta0cc_bypass_timer: boolean;
    ta0cc_recall: boolean;
    ta0cc_update_msn: boolean;
    ta0cc_update_ip: boolean;
    ta0cc_rccb_trip: boolean;


    ta0vr_sg_ctratio_n: number;
    ta0vr_sg_ctratio_d: number;

    ta0vr_pte_ctratio_n: number;
    ta0vr_pte_ctratio_d: number;



    /* tnb_testtype: 'string',
    tnb_feeder: 'string',
    tnb_vi_arm_cabel_visible: 'string',
    tnb_vi_ct_polarity_label: 'string',
    tnb_devicetestid: 'integer',
    tnb_remarks: 'string',
    tnb_at_test3: 'number',
    orgid: 'string',
    tnb_testtype_description: 'string',
    tnb_at_test2: 'number',
    tnb_at_test1: 'number',
    tnb_vi_pt_polarity_label: 'string',
    tnb_at_average: 'number',
    tnb_serialnum: 'string',

    href: 'string',
    localref: 'string',
    _rowstamp: 'integer',*/
    ta0at_sticker;
    ta0at_correctionfactor;

    // local variable.
    // local variable.
    loc_test_ta0na: string = 'N';
    loc_test_changeValue: 'string';
    loc_test_haveChange: 'boolean';
    loc_test_changeType: 'string';

    //Lpc-Lv
    ta0fc_maincurrent_bb_r: number;
    ta0fc_maincurrent_bb_y: number;
    ta0fc_maincurrent_bb_b: number;
    ta0fc_maincurrent_dm_r: number;
    ta0fc_maincurrent_dm_y: number;
    ta0fc_maincurrent_dm_b: number;
    ta0fc_dupcurrent_ct_r: number;
    ta0fc_dupcurrent_ct_y: number;
    ta0fc_dupcurrent_ct_b: number;
    ta0fc_dupcurrent_tm_r: number;
    ta0fc_dupcurrent_tm_y: number;
    ta0fc_dupcurrent_tm_b: number;
    ta0fc_ctratio_r: number;
    ta0fc_ctratio_y: number;
    ta0fc_ctratio_b: number;
    ta0fc_per_diff_main_r: number;
    ta0fc_per_diff_main_y: number;
    ta0fc_per_diff_main_b: number;
    ta0fc_per_diff_dup_r: number;
    ta0fc_per_diff_dup_y: number;
    ta0fc_per_diff_dup_b: number;
    ta0at_voltage_r: number;
    ta0at_voltage_y: number;
    ta0at_voltage_b: number;
    ta0at_current_r: number;
    ta0at_current_y: number;
    ta0at_current_b: number;
    ta0at_power_r: number;
    ta0at_power_y: number;
    ta0at_power_b: number;
    ta0at_powerfactor_r: number;
    ta0at_powerfactor_y: number;
    ta0at_powerfactor_b: number;
    ta0reg_ptread: number;
    ta0reg_pterror: number;

    swit1: number;
    swit2: number;

    meter: number;
    meter1: number;
    meter2: number;
    meter3: number;

    checkPulseCalculate: number;
    correctFactor: number;

    noSiri: string;

    // OPC
    ta0at_ptserialnum: any; //Added by Ameer(15/10/2018)
    ta0at_pteserialnum: any; // Created by Ameer (24/10/2018)
    ta0mt_magnet_result: any;
    ta0at_constant_1: number;
    ta0at_constant_2: number;
    ta0at_constant_3: number;
    ta0at_timecalc_1: any;
    ta0at_timecalc_2: any;
    ta0at_timecalc_3: any;
    ta0at_timemeas_1: any;
    ta0at_timemeas_2: any;
    ta0at_timemeas_3: any;

    ta0nt_phase: any;
    ta0nt_neutral: any;

    ta0nt_in_life: any;
    ta0nt_in_neutral: any;

    ta0nt_out_life: any;
    ta0nt_out_neutral: any;

    ta0ts_anamoly: any;
    ta0ts_meter: string;
    ta0ts_emdisplay: string;

    ta0at_corrective_action: any;

    ta0witnessname: string;
    ta0witnessicpassport: string;
    ta0witnessphone: string;


    ta0cu_actual_r: any;
    ta0cu_actual_y: any;
    ta0cu_actual_b: any;
    ta0cu_actual_total: any;
    ta0cu_disp_r: any;
    ta0cu_disp_y: any;
    ta0cu_disp_b: any;
    ta0cu_disp_total: any;
    ta0cu_difference: any;

    ta0po_tm_r: any;
    ta0po_tm_y: any;
    ta0po_tm_b: any;
    ta0po_tm_n: any;

    ta0testind: any;

    ta0sealcondition: any;
    ta0stickercondition: any;

    ta4dailindicator: any;

    /**
     * Reason   : Seal LV Inspection Variables
     * Created  : Alif (27-01-2019)
     */
    ta0fc_maincurrent_bb_total: any;
    ta0fc_maincurrent_dm_total: any;
    ta0fc_dupcurrent_ct_total: any;
    ta0fc_dupcurrent_tm_total: any;
    ta0fc_per_diff_main: any;
    ta0fc_per_diff_sec: any;

    ta0po_mech_r: any;
    ta0po_elec_y: any;
    ta0po_elec_b: any;
    ta0po_gen_r: boolean;
    ta0po_gen_y: boolean;
    ta0po_gen_b: boolean;

    // ta0ts__meter: any;
    ta0ts_fuse: any;
    ta0ts_ttb: any;
    ta0ts_ct: any;
    ta0ts_wiring: any;

    ta0ts_anomaly_remarks: any;

    ta0ft_fuse_contact: any;
    ta0ft_neon_glow: any;
    ta0mt_meter: any;
    ta0mt_fuse_carrie: any;
    ta0mt_fuse_cartridge: any;

    // Additional for local
    loc_ta0at_corrective_action_desc: any;

    /**
     * Reason   : Seal Test Data Variables
     * Created  : Alif (16-01-2019)
     */
    ta4mct_loc_test_ta0na: any;
    ta4mct_ta0na: any;
    ta4mct_ta0naremarks: any;
    ta4mct_md: any;
    ta4mct_vt: any;
    ta4mct_pf: any;
    ta4mct_ac: any;
    ta4mct_cl: any;

    ta4vrph_loc_test_ta0na: any;
    ta4vrph_ta0na: any;
    ta4vrph_ta0naremarks: any;
    ta4vrph_ry: any;
    ta4vrph_yb: any;
    ta4vrph_rb: any;
    ta4vrph_rn: any;
    ta4vrph_yn: any;
    ta4vrph_bn: any;
    ta4vrph_re: any;
    ta4vrph_ye: any;
    ta4vrph_be: any;
    ta4vrph_ne: any;
    ta4vrph_ph: any;

    ta4ma_loc_test_ta0na: any;
    ta4ma_ta0na: any;
    ta4ma_ta0naremarks: any;

    ta4ma_brand: any;
    ta4ma_serialnum: any;
    ta4ma_calibration: any;

    ta4ma_test1: any;
    ta4ma_test2: any;
    ta4ma_test3: any;
    ta4ma_avg: any;
    ta4ma_reg_start: any;
    ta4ma_reg_stop: any;
    ta4ma_reg_usage: any;
    ta4ma_reg_error: any;
    type: any;

    ta4ma_read_start: any;
    ta4ma_read_end: any;
    ta4ma_read_diff: any;
    ta4ma_time_start: any;
    ta4ma_time_end: any;
    ta4ma_time_duration: any;

    ta4ma_v_avg: any;
    ta4ma_i_avg: any;
    ta4ma_c_avg: any;
    ta4ma_calc_energy: any;
    ta4ma_diff: any;
    ta4ma_date: any;


    ta4ef_loc_test_ta0na: any;
    ta4ef_ta0na: any;
    ta4ef_ta0naremarks: any;

    ta4ef_led_r: any;
    ta4ef_led_ind_r: any;
    ta4ef_led_y: any;
    ta4ef_led_ind_y: any;
    ta4ef_led_b: any;
    ta4ef_led_ind_b: any;

    ta4ctr_loc_test_ta0na: any;
    ta4ctr_ta0na: any;
    ta4ctr_ta0naremarks: any;

    ta4ctr_ct_ratio: any;
    ta4ctr_ip_r: any;
    ta4ctr_is_r: any;
    ta4ctr_ccr_r: any;
    ta4ctr_cl_r: any;
    ta4ctr_ip_y: any;
    ta4ctr_is_y: any;
    ta4ctr_ccr_y: any;
    ta4ctr_cl_y: any;
    ta4ctr_ip_b: any;
    ta4ctr_is_b: any;
    ta4ctr_ccr_b: any;
    ta4ctr_cl_b: any;
    ta4ctr_avg_ccr: any;
    ta4ctr_avg_cl: any;

    ta4hspe_loc_test_ta0na: any;
    ta4hspe_ta0na: any;
    ta4hspe_ta0naremarks: any;

    ta4hspe_mt_ratio: any;
    ta4hspe_ci_ratio: any;
    ta4hspe_ov_ratio: any;

    ta4hspe_is_mt_r: any;
    ta4hspe_is_ci_r: any;
    ta4hspe_is_ov_r: any;
    ta4hspe_ip_mt_r: any;
    ta4hspe_ip_ci_r: any;
    ta4hspe_ip_ov_r: any;
    ta4hspe_diff_ci_r: any;
    ta4hspe_diff_ov_r: any;

    ta4hspe_is_mt_y: any;
    ta4hspe_is_ci_y: any;
    ta4hspe_is_ov_y: any;
    ta4hspe_ip_mt_y: any;
    ta4hspe_ip_ci_y: any;
    ta4hspe_ip_ov_y: any;
    ta4hspe_diff_ci_y: any;
    ta4hspe_diff_ov_y: any;

    ta4hspe_is_mt_b: any;
    ta4hspe_is_ci_b: any;
    ta4hspe_is_ov_b: any;
    ta4hspe_ip_mt_b: any;
    ta4hspe_ip_ci_b: any;
    ta4hspe_ip_ov_b: any;
    ta4hspe_diff_ci_b: any;
    ta4hspe_diff_ov_b: any;

    ta4hsls_loc_test_ta0na: any;
    ta4hsls_ta0na: any;
    ta4hsls_ta0naremarks: any;

    ta4hsls_c_lv: any;
    ta4hsls_v_hv: any;
    ta4hsls_v_f: any;

    ta4hsls_mpa_r: any;
    ta4hsls_test1_r: any;
    ta4hsls_test2_r: any;
    ta4hsls_test3_r: any;
    ta4hsls_test4_r: any;
    ta4hsls_test5_r: any;
    ta4hsls_test6_r: any;
    ta4hsls_la_r: any;
    ta4hsls_ha_r: any;
    ta4hsls_dma_r: any;

    ta4hsls_mpa_y: any;
    ta4hsls_test1_y: any;
    ta4hsls_test2_y: any;
    ta4hsls_test3_y: any;
    ta4hsls_test4_y: any;
    ta4hsls_test5_y: any;
    ta4hsls_test6_y: any;
    ta4hsls_la_y: any;
    ta4hsls_ha_y: any;
    ta4hsls_dma_y: any;

    ta4hsls_mpa_b: any;
    ta4hsls_test1_b: any;
    ta4hsls_test2_b: any;
    ta4hsls_test3_b: any;
    ta4hsls_test4_b: any;
    ta4hsls_test5_b: any;
    ta4hsls_test6_b: any;
    ta4hsls_la_b: any;
    ta4hsls_ha_b: any;
    ta4hsls_dma_b: any;

    ta4hsio_loc_test_ta0na: any;
    ta4hsio_ta0na: any;
    ta4hsio_ta0naremarks: any;

    ta4hsio_ct_iha: any;
    ta4hsio_ct_out1: any;
    ta4hsio_ct_out2: any;
    ta4hsio_ct_out3: any;
    ta4hsio_ct_out4: any;
    ta4hsio_ct_out5: any;
    ta4hsio_ct_out6: any;

    ta4hsio_is_iha_r: any;
    ta4hsio_is_out1_r: any;
    ta4hsio_is_out2_r: any;
    ta4hsio_is_out3_r: any;
    ta4hsio_is_out4_r: any;
    ta4hsio_is_out5_r: any;
    ta4hsio_is_out6_r: any;

    ta4hsio_is_iha_y: any;
    ta4hsio_is_out1_y: any;
    ta4hsio_is_out2_y: any;
    ta4hsio_is_out3_y: any;
    ta4hsio_is_out4_y: any;
    ta4hsio_is_out5_y: any;
    ta4hsio_is_out6_y: any;

    ta4hsio_is_iha_b: any;
    ta4hsio_is_out1_b: any;
    ta4hsio_is_out2_b: any;
    ta4hsio_is_out3_b: any;
    ta4hsio_is_out4_b: any;
    ta4hsio_is_out5_b: any;
    ta4hsio_is_out6_b: any;

    ta4hsio_ip_iha_r: any;
    ta4hsio_ip_out1_r: any;
    ta4hsio_ip_out2_r: any;
    ta4hsio_ip_out3_r: any;
    ta4hsio_ip_out4_r: any;
    ta4hsio_ip_out5_r: any;
    ta4hsio_ip_out6_r: any;
    ta4hsio_ip_total_r: any;
    ta4hsio_ip_diff_r: any;

    ta4hsio_ip_iha_y: any;
    ta4hsio_ip_out1_y: any;
    ta4hsio_ip_out2_y: any;
    ta4hsio_ip_out3_y: any;
    ta4hsio_ip_out4_y: any;
    ta4hsio_ip_out5_y: any;
    ta4hsio_ip_out6_y: any;
    ta4hsio_ip_total_y: any;
    ta4hsio_ip_diff_y: any;

    ta4hsio_ip_iha_b: any;
    ta4hsio_ip_out1_b: any;
    ta4hsio_ip_out2_b: any;
    ta4hsio_ip_out3_b: any;
    ta4hsio_ip_out4_b: any;
    ta4hsio_ip_out5_b: any;
    ta4hsio_ip_out6_b: any;
    ta4hsio_ip_total_b: any;
    ta4hsio_ip_diff_b: any;

    ta4ai_loc_test_ta0na: any;
    ta4ai_ta0na: any;
    ta4ai_ta0naremarks: any;

    ta4ai_key_standard: any;
    ta4ai_key_non_standard: any;
    ta4ai_key_customer: any;
    ta4ai_info_gear: any;
    ta4ai_info_ct: any;
    ta4ai_info_pt: any;
    ta4ai_info_vcb: any;
    ta4ai_meter_cable: any;
    ta4ai_meter_box: any;
    ta4ai_kiosk_pe: any;
    ta4ai_kiosk_sm: any;
    ta4ai_kiosk_su: any;
    ta4ai_kiosk_type: any;
    ta4ai_kiosk_date: any;

    ta4reg_amf: any;
    ta4reg_amb: any;
    ta4reg_amc: any;
    ta4sum_consumption: any;

    ta4sum_end: any;
    ta4sum_start: any;
    ta4sum_sted_diff: any;

    ta4sum_diff: any;


    ta4remarks_insp: any;

    ta4ts_anamoly: any;
    ta4anomalycategory: any;
    ta4anomalytype: any;

    ta4customertype: any;
    ta4correctivecode: any;
    ta4sourcecode: any;
    ta4initprev: any;

    ta4cur_diff_name: any;
    ta4cur_diff_tx: any;

    ta4cur_R_pil: any;
    ta4cur_Y_pil: any;
    ta4cur_B_pil: any;

    ta4cur_R_busbar: any;
    ta4cur_Y_busbar: any;
    ta4cur_B_busbar: any;


    ta4cur_total_pill: any;
    ta4cur_total_bus: any;

    ta4cur_overall_totalpill: any;
    ta4cur_overall_totalbus: any;

    ta4cur_diff_overall: any;

    ta4pts: any;


    // Create By Ameer
    // Edited By Alif
    ta4serialNum: any;
    ta4metertype: any;
}