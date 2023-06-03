
export enum DeviceConstants {

    DEV_ALLOC_RIPPLE_CTRL_RECEIVER = '1',
    DEV_ALLOC_TRANSFORMER_GROUP = '2',
    DEV_ALLOC_PRESSURE_REG_REL_BILLING = '3',
    DEV_ALLOC_PRESSURE_REG_NOT_REL_BILLING = '4',
    DEV_ALLOC_POWER_TRANSFORMER = '5',
    DEV_ALLOC_VOLTAGE_CURRENT_TRANSFORMER = '6',
    DEV_ALLOC_BREAKER_ALLOCATION = '7',
    DEV_ALLOC_BACKUP_METER = '80',
    DEV_ALLOC_CHECK_BACKUP_METER = '81',
    DEV_ALLOC_MODEM = '82',
    DEV_ALLOC_SIM_CARD = '83',

    DEV_ALLOC_BACKUP_FEEDER_METER = '84',
    DEV_ALLOC_CHECK_BACKUP_FEEDER_METER = '85',
    DEV_ALLOC_MEASUREMENT_TRANSFEORMER = '86',
    DEV_ALLOC_COMMUNCIATION_MODULE = '87',
    DEV_ALLOC_MAIN_METER = '90',
    DEV_ALLOC_FEEDER_METER = '91',
    DEV_ALLOC_CHECK_METER = '92',
    DEV_ALLOC_CHECK_FEEDER_METER = '93',

    DEV_ALLOC_SUB_METER = '94',
    DEV_ALLOC_CHECK_SUB_METER = '95',
    DEV_ALLOC_SUB_FEEDER_METER = '96',
    DEV_ALLOC_CHECK_SUB_FEEDER_METER = '97',
    DEV_ALLOC_AGGREGATION_SUMMATION = '98',
    DEV_ALLOC_AGGREGATION_SUBTRACTION = '98',

    VOL_LEVEL_OPC_1PH = '01',
    VOL_LEVEL_OPC_3PH = '02',
    VOL_LEVEL_LPC_LV_400V = '03',
    VOL_LEVEL_LPC_MVHV_6kV = '04',
    VOL_LEVEL_LPC_MVHV_11kV = '05',
    VOL_LEVEL_LPC_MVHV_22kV = '06',
    VOL_LEVEL_LPC_MVHV_33kV = '07',
    VOL_LEVEL_LPC_MVHV_66kV = '08',
    VOL_LEVEL_LPC_MVHV_132kV = '09',
    VOL_LEVEL_LPC_MVHV_275kV = '10',
    VOL_LEVEL_LPC_MVHV_500kV = '11',

    ACTION_INSTALL = 'install',
    ACTION_REPLACE = 'replace',
    ACTION_REMOVE = 'remove',

    NETWORK_UNKNOWN = 'unknown',
    NETWORK_ETHERNET = 'ethernet',
    NETWORK_WIFI = 'wifi',
    NETWORK_2G = '2g',
    NETWORK_3G = '3g',
    NETWORK_4G = '4g',
    NETWORK_CELLULAR = 'cellular',
    NETWORK_NONE = 'none',

    DEVICE_TYPE_NAME_MAIN = 'main',
    DEVICE_TYPE_NAME_CHECK = 'check',
    DEVICE_TYPE_NAME_MODEM = 'modem',
    DEVICE_TYPE_NAME_SIMCARD = 'sim',
    DEVICE_TYPE_NAME_COMMMODULE = 'comm',
    DEVICE_TYPE_NAME_CT = 'ct',
    DEVICE_TYPE_NAME_PT = 'pt',

    //alert message
    DEVICE_NOT_FOUND = 'Device Not Found',
    SIMCARD_NOT_FOUND = 'Simcard Not Found',
    MODEM_NOT_FOUND = 'Modem Not Found',


    // constant message
    RESP_SUCCESS_MSG = 'success',
    RESP_FAILURE_MSG = 'failure',


    // Testing  constants
    DATA_TESTING_ACCT = "ACCT",
    DATA_TESTING_VIST = "VIST",
    DATA_TESTING_PCMT = "PCMT",
    DATA_TESTING_PHRT = "PHRT",
    DATA_TESTING_PPTE = "PPTE",
    DATA_TESTING_PING = "PING",
    DATA_TESTING_PNGT = "PNGT",
    DATA_TESTING_MDTT = "MDTT",
    DATA_TESTING_MHMV = "MHMV",
    DATA_TESTING_TNHT = "TNHT",
    DATA_TESTING_PTED = "PTED",
    DATA_TESTING_THGD = "THGD",
    DATA_TESTING_MCRT = "MCRT",
    DATA_TESTING_SRET = "SRET",
    DATA_TESTING_PWCT = "PWCT",
    DATA_TESTING_CTFC = "CTFC",
    DATA_TESTING_REGT = "REGT",
    DATA_TESTING_LEDT = "LEDT",
    DATA_TESTING_ATIA = "ATIA",
    DATA_TESTING_ATIB = "ATIB",
    DATA_TESTING_CCNC = "CCNC",
    DATA_TESTING_HTIE = "HTIE",
    DATA_TESTING_AT1P = "AT1P",
    DATA_TESTING_NEUT = "NEUT",
    DATA_TESTING_TAMP = "TAMP",
    DATA_TESTING_ATCA = "ATCA",
    DATA_TESTING_WTNS = "WTNS",
    DATA_TESTING_CURR = "CURR",
    DATA_TESTING_POLT = "POLT",
    DATA_TESTING_MGNT = "MGNT",
    DATA_TESTING_AC3P = "AC3P",
    DATA_TESTING_AC3P_N = "AC3P_N",
    DATA_TESTING_PHET = "PHET",
    DATA_TESTING_FUSE = "FUSE",
    DATA_TESTING_REMARKS = "REMARKS",
    DATA_TESTING_CUSTOMERTYPE = "CUSTTYPE",
    DATA_TESTING_SOURCECODE = "SOURCECODE",
    DATA_TESTING_INITIATIVE = "INITATIVEPREV",
    DATA_TESTING_DAILTEST = "DAILTEST",


    PAGE_ACTION_MULTIASSETLOCCI = 'multiassetlocci',
    PAGE_ACTION_MULTIASSETLOCCI_NEW = 'multiassetloccinewdevice',
    PAGE_ACTION_REGISTERS = 'registers',
    PAGE_ACTION_TESTINGS = 'testings',
    PAGE_ACTION_SILSTICKERS = 'silStickers',
    PAGE_ACTION_SILSWORKORDER = 'silsworkorder', //Crimpless Seal CR
    PAGE_ACTION_FEEDER = 'feeder',
    PAGE_ACTION_ATTACHMENT = 'attachment',


    // Old Version
    BCRM_EXISTING_INDICATOR_MAIN = 'METER_EQUIP',
    BCRM_EXISTING_INDICATOR_MAIN_MD = 'M_MD_EQUIP',
    BCRM_EXISTING_INDICATOR_MAIN_SIM = 'M_SIM_EQUIP',
    BCRM_EXISTING_INDICATOR_MAIN_COMM = 'M_CM_EQUIP',
    BCRM_EXISTING_INDICATOR_CHECK = 'CM_EQUIP',
    BCRM_EXISTING_INDICATOR_CHECK_MD = 'CM_MD_EQUIP',
    BCRM_EXISTING_INDICATOR_CHECK_SIM = 'CM_SIM_EQUIP',
    BCRM_EXISTING_INDICATOR_CHECK_COMM = 'CM_CM_EQUIP',
    BCRM_EXISTING_INDICATOR_MAIN_PT = 'M_PT_EQUIP',
    BCRM_EXISTING_INDICATOR_MAIN_CT = 'M_CT_EQUIP',

    BCRM_NEW_INDICATOR_MAIN = 'M_N_EQUIP',
    BCRM_NEW_INDICATOR_MAIN_MD = 'M_N_MD_EQUIP',
    BCRM_NEW_INDICATOR_MAIN_SIM = 'M_N_SIM_EQUIP',
    BCRM_NEW_INDICATOR_MAIN_COMM = 'M_N_CM_EQUIP',
    BCRM_NEW_INDICATOR_CHECK = 'CM_N_EQUIP',
    BCRM_NEW_INDICATOR_CHECK_MD = 'CM_N_MD_EQUIP',
    BCRM_NEW_INDICATOR_CHECK_SIM = 'CM_N_SIM_EQUIP',
    BCRM_NEW_INDICATOR_CHECK_COMM = 'CM_N_CM_EQUIP',
    BCRM_NEW_INDICATOR_MAIN_PT = 'M_N_PT_EQUIP',
    BCRM_NEW_INDICATOR_MAIN_CT = 'M_N_CT_EQUIP',

    // BCRM_NEW_INDICATOR_MAIN = 'METER_EQUIP',
    // BCRM_NEW_INDICATOR_MAIN_MD = 'M_MD_EQUIP',
    // BCRM_NEW_INDICATOR_MAIN_SIM = 'M_SIM_EQUIP',
    // BCRM_NEW_INDICATOR_CHECK = 'CM_EQUIP',
    // BCRM_NEW_INDICATOR_CHECK_MD = 'CM_MD_EQUIP',
    // BCRM_NEW_INDICATOR_CHECK_SIM = 'CM_SIM_EQUIP',
    // BCRM_NEW_INDICATOR_MAIN_PT = 'M_PT_EQUIP',
    // BCRM_NEW_INDICATOR_MAIN_CT = 'M_CT_EQUIP',  

    // New Version
    // BCRM_EXISTING_NEW_INDICATOR_MAIN = 'METER_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_MAIN_MD = 'M_MD_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_MAIN_SIM = 'M_SIM_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_CHECK = 'CM_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_CHECK_MD = 'CM_MD_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_CHECK_SIM = 'CM_SIM_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_MAIN_PT = 'M_PT_EQUIP',
    // BCRM_EXISTING_NEW_INDICATOR_MAIN_CT = 'M_CT_EQUIP',

    // BCRM_REPLACE_INDICATOR_MAIN = 'METER_N_EQUIP',
    // BCRM_REPLACE_INDICATOR_MAIN_MD = 'M_N_MD_EQUIP',
    // BCRM_REPLACE_INDICATOR_MAIN_SIM = 'M_N_SIM_EQUIP',
    // BCRM_REPLACE_INDICATOR_CHECK = 'CM_N_EQUIP',
    // BCRM_REPLACE_INDICATOR_CHECK_MD = 'CM_N_MD_EQUIP',
    // BCRM_REPLACE_INDICATOR_CHECK_SIM = 'CM_N_SIM_EQUIP',
    // BCRM_REPLACE_INDICATOR_MAIN_PT = 'M_N_PT_EQUIP',
    // BCRM_REPLACE_INDICATOR_MAIN_CT = 'M_N_CT_EQUIP',  

}