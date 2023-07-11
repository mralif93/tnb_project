
export class FeederSetDesign {

  soWorkType: string;
  feederExisting: boolean;
  nFeederStatus: boolean = false;
  eFeederStatus: boolean = false;

  eFeederVoltage: number;
  nFeederVoltage: number;

  nMeter: string;
  nMeterSerialNum: string;
  nMeterCtrl: string;
  nMeterIndex: number;
  nMeterAllocationType: string;
  nMeterFunctionClass: string = '';
  nMeterRegisterStatus: string = 'Y';
  nMeterSilStatus: string = 'Y';
  nMeterTestStatus: string = 'Y';
  nMeterInstallInd: boolean;
  nMeterRemoveInd: boolean;
  nMeterReplaceInd: boolean;

  nMeterModem: string;
  nMeterModemSerialNum: string;
  nMeterModemCtrl: string;
  nMeterModemIndex: number;
  nMeterModemAllocationType: string;
  nMeterModemRegisterStatus: string = 'Y';
  nMeterModemTestStatus: string = 'Y';
  nMeterModemInstallInd: boolean;
  nMeterModemRemoveInd: boolean;
  nMeterModemReplaceInd: boolean;

  nMeterSim: string;
  nMeterSimSerialNum: string;
  nMeterSimCtrl: string;
  nMeterSimIndex: number;
  nMeterSimAllocationType: string;
  nMeterSimRegisterStatus: string = 'Y';
  nMeterSimTestStatus: string = 'Y';
  nMeterSimInstallInd: boolean;
  nMeterSimRemoveInd: boolean;
  nMeterSimReplaceInd: boolean;

  nMainComm: string;
  nMainCommSerialNum: string;
  nMainCommCtrl: string;
  nMainCommIndex: number;
  nMainCommAllocationType: string;
  nMainCommRegisterStatus: string = 'Y';
  nMainCommTestStatus: string = 'Y';
  nMainCommSilStatus: boolean;
  nMainCommRemoveInd: boolean;
  nMainCommReplaceInd: boolean;

  nCheck: string;
  nCheckSerialNum: string;
  nCheckCtrl: string;
  nCheckIndex: number;
  nCheckAllocationType: string;
  nCheckFunctionClass: string = '';
  nCheckRegisterStatus: string = 'Y';
  nCheckSilStatus: string = 'Y';
  nCheckTestStatus: string = 'Y';
  nCheckInstallInd: boolean;
  nCheckRemoveInd: boolean;
  nCheckReplaceInd: boolean;

  nCheckModem: string;
  nCheckModemSerialNum: string;
  nCheckModemCtrl: string;
  nCheckModemIndex: number;
  nCheckModemAllocationType: string;
  nCheckModemRegisterStatus: string = 'Y';
  nCheckModemTestStatus: string = 'Y';
  nCheckModemInstallInd: boolean;
  nCheckModemRemoveInd: boolean;
  nCheckModemReplaceInd: boolean;

  nCheckSim: string;
  nCheckSimSerialNum: string;
  nCheckSimCtrl: string;
  nCheckSimIndex: number;
  nCheckSimAllocationType: string;
  nCheckSimRegisterStatus: string = 'Y';
  nCheckSimTestStatus: string = 'Y';
  nCheckSimInstallInd: boolean;
  nCheckSimRemoveInd: boolean;
  nCheckSimReplaceInd: boolean;

  nCheckComm: string;
  nCheckCommSerialNum: string;
  nCheckCommCtrl: string;
  nCheckCommIndex: number;
  nCheckCommAllocationType: string;
  nCheckCommRegisterStatus: string = 'Y';
  nCheckCommTestStatus: string = 'Y';
  nCheckCommSilStatus: boolean;
  nCheckCommRemoveInd: boolean;
  nCheckCommReplaceInd: boolean;

  nMeterCtR: string;
  nMeterCtRSerialNum: string;
  nMeterCtRCtrl: string;
  nMeterCtRIndex: number;
  nMeterCtRAllocationType: string;
  nMeterCtRRegisterStatus: string = 'Y';
  nMeterCtRInstallInd: boolean;
  nMeterCtRRemoveInd: boolean;
  nMeterCtRReplaceInd: boolean;

  nMeterCtY: string;
  nMeterCtYSerialNum: string;
  nMeterCtYCtrl: string;
  nMeterCtYIndex: number;
  nMeterCtYAllocationType: string;
  nMeterCtYRegisterStatus: string = 'Y';
  nMeterCtYInstallInd: boolean;
  nMeterCtYRemoveInd: boolean;
  nMeterCtYReplaceInd: boolean;

  nMeterCtB: string;
  nMeterCtBSerialNum: string;
  nMeterCtBCtrl: string;
  nMeterCtBIndex: number;
  nMeterCtBAllocationType: string;
  nMeterCtBRegisterStatus: string = 'Y';
  nMeterCtBInstallInd: boolean;
  nMeterCtBRemoveInd: boolean;
  nMeterCtBReplaceInd: boolean;

  nMeterCtSealR: string;
  nMeterCtSealRSerialNum: string;
  nMeterCtSealRCtrl: string;
  nMeterCtSealRIndex: number;
  nMeterCtSealRAllocationType: string;
  nMeterCtSealRStatus: boolean = false;
  nMeterCtSealRRegisterStatus: string = 'Y';
  nMeterCtSealRInstallInd: boolean;
  nMeterCtSealRRemoveInd: boolean;
  nMeterCtSealRReplaceInd: boolean;

  nMeterCtSealY: string;
  nMeterCtSealYSerialNum: string;
  nMeterCtSealYCtrl: string;
  nMeterCtSealYIndex: number;
  nMeterCtSealYAllocationType: string;
  nMeterCtSealYStatus: boolean = false;
  nMeterCtSealYRegisterStatus: string = 'Y';
  nMeterCtSealYInstallInd: boolean;
  nMeterCtSealYRemoveInd: boolean;
  nMeterCtSealYReplaceInd: boolean;

  nMeterCtSealB: string;
  nMeterCtSealBSerialNum: string;
  nMeterCtSealBCtrl: string;
  nMeterCtSealBIndex: number;
  nMeterCtSealBAllocationType: string;
  nMeterCtSealBStatus: boolean = false;
  nMeterCtSealBRegisterStatus: string = 'Y';
  nMeterCtSealBInstallInd: boolean;
  nMeterCtSealBRemoveInd: boolean;
  nMeterCtSealBReplaceInd: boolean;

  nMeterPtR: string;
  nMeterPtRSerialNum: string;
  nMeterPtRCtrl: string;
  nMeterPtRIndex: number;
  nMeterPtRAllocationType: string;
  nMeterPtRRegisterStatus: string = 'Y';
  nMeterPtRInstallInd: string = 'Y';
  nMeterPtRRemoveInd: boolean;
  nMeterPtRReplaceInd: boolean;

  nMeterPtY: string;
  nMeterPtYSerialNum: string;
  nMeterPtYCtrl: string;
  nMeterPtYIndex: number;
  nMeterPtYAllocationType: string;
  nMeterPtYRegisterStatus: string = 'Y';
  nMeterPtYInstallInd: boolean;
  nMeterPtYRemoveInd: boolean;
  nMeterPtYReplaceInd: boolean;

  nMeterPtB: string;
  nMeterPtBSerialNum: string;
  nMeterPtBCtrl: string;
  nMeterPtBIndex: number;
  nMeterPtBAllocationType: string;
  nMeterPtBRegisterStatus: string = 'Y';
  nMeterPtBInstallInd: boolean;
  nMeterPtBRemoveInd: boolean;
  nMeterPtBReplaceInd: boolean;


  eMeter: string;
  eMeterSerialNum: string;
  eMeterCtrl: string;
  eMeterIndex: number;
  eMeterAllocationType: string;
  eMeterFunctionClass: string = '';
  eMeterRegisterStatus: string = 'Y';
  eMeterSilStatus: string = 'Y';
  eMeterTestStatus: string = 'Y';
  eMeterInstallInd: boolean;
  eMeterRemoveInd: boolean;
  eMeterReplaceInd: boolean;

  eMeterModem: string;
  eMeterModemSerialNum: string;
  eMeterModemCtrl: string;
  eMeterModemIndex: number;
  eMeterModemAllocationType: string;
  eMeterModemRegisterStatus: string = 'Y';
  eMeterModemTestStatus: string = 'Y';
  eMeterModemInstallInd: boolean;
  eMeterModemRemoveInd: boolean;
  eMeterModemReplaceInd: boolean;

  eMeterSim: string;
  eMeterSimSerialNum: string;
  eMeterSimCtrl: string;
  eMeterSimIndex: number;
  eMeterSimAllocationType: string;
  eMeterSimRegisterStatus: string = 'Y';
  eMeterSimTestStatus: string = 'Y';
  eMeterSimInstallInd: boolean;
  eMeterSimRemoveInd: boolean;
  eMeterSimReplaceInd: boolean;

  eMainComm: string;
  eMainCommSerialNum: string;
  eMainCommCtrl: string;
  eMainCommIndex: number;
  eMainCommAllocationType: string;
  eMainCommRegisterStatus: string = 'Y';
  eMainCommTestStatus: string = 'Y';
  eMainCommSilStatus: boolean;
  eMainCommRemoveInd: boolean;
  eMainCommReplaceInd: boolean;

  eCheck: string;
  eCheckSerialNum: string;
  eCheckCtrl: string;
  eCheckIndex: number;
  eCheckAllocationType: string;
  eCheckFunctionClass: string = '';
  eCheckRegisterStatus: string = 'Y';
  eCheckSilStatus: string = 'Y';
  eCheckTestStatus: string = 'Y';
  eCheckInstallInd: boolean;
  eCheckRemoveInd: boolean;
  eCheckReplaceInd: boolean;

  eCheckModem: string;
  eCheckModemSerialNum: string;
  eCheckModemCtrl: string;
  eCheckModemIndex: number;
  eCheckModemAllocationType: string;
  eCheckModemRegisterStatus: string = 'Y';
  eCheckModemTestStatus: string = 'Y';
  eCheckModemInstallInd: boolean;
  eCheckModemRemoveInd: boolean;
  eCheckModemReplaceInd: boolean;

  eCheckSim: string;
  eCheckSimSerialNum: string;
  eCheckSimCtrl: string;
  eCheckSimIndex: number;
  eCheckSimAllocationType: string;
  eCheckSimRegisterStatus: string = 'Y';
  eCheckSimTestStatus: string = 'Y';
  eCheckSimInstallInd: boolean;
  eCheckSimRemoveInd: boolean;
  eCheckSimReplaceInd: boolean;

  eCheckComm: string;
  eCheckCommSerialNum: string;
  eCheckCommCtrl: string;
  eCheckCommIndex: number;
  eCheckCommAllocationType: string;
  eCheckCommRegisterStatus: string = 'Y';
  eCheckCommTestStatus: string = 'Y';
  eCheckCommSilStatus: boolean;
  eCheckCommRemoveInd: boolean;
  eCheckCommReplaceInd: boolean;

  eMeterCtR: string;
  eMeterCtRSerialNum: string;
  eMeterCtRCtrl: string;
  eMeterCtRIndex: number;
  eMeterCtRAllocationType: string;
  eMeterCtRRegisterStatus: string = 'Y';
  eMeterCtRInstallInd: boolean;
  eMeterCtRRemoveInd: boolean;
  eMeterCtRReplaceInd: boolean;

  eMeterCtY: string;
  eMeterCtYSerialNum: string;
  eMeterCtYCtrl: string;
  eMeterCtYIndex: number;
  eMeterCtYAllocationType: string;
  eMeterCtYRegisterStatus: string = 'Y';
  eMeterCtYInstallInd: boolean;
  eMeterCtYRemoveInd: boolean;
  eMeterCtYReplaceInd: boolean;

  eMeterCtB: string;
  eMeterCtBSerialNum: string;
  eMeterCtBCtrl: string;
  eMeterCtBIndex: number;
  eMeterCtBAllocationType: string;
  eMeterCtBRegisterStatus: string = 'Y';
  eMeterCtBInstallInd: boolean;
  eMeterCtBRemoveInd: boolean;
  eMeterCtBReplaceInd: boolean;

  eMeterCtSealR: string;
  eMeterCtSealRSerialNum: string;
  eMeterCtSealRStatus: boolean = false;
  eMeterCtSealRInstallInd: boolean;
  eMeterCtSealRRemoveInd: boolean;
  eMeterCtSealRReplaceInd: boolean;

  eMeterCtSealY: string;
  eMeterCtSealYSerialNum: string;
  eMeterCtSealYStatus: boolean = false;
  eMeterCtSealYInstallInd: boolean;
  eMeterCtSealYRemoveInd: boolean;
  eMeterCtSealYReplaceInd: boolean;

  eMeterCtSealB: string;
  eMeterCtSealBSerialNum: string;
  eMeterCtSealBStatus: boolean = false;
  eMeterCtSealBInstallInd: boolean;
  eMeterCtSealBRemoveInd: boolean;
  eMeterCtSealBReplaceInd: boolean;

  eMeterPtR: string;
  eMeterPtRSerialNum: string;
  eMeterPtRCtrl: string;
  eMeterPtRIndex: number;
  eMeterPtRAllocationType: string;
  eMeterPtRRegisterStatus: string = 'Y';
  eMeterPtRInstallInd: boolean;
  eMeterPtRRemoveInd: boolean;
  eMeterPtRReplaceInd: boolean;

  eMeterPtY: string;
  eMeterPtYSerialNum: string;
  eMeterPtYCtrl: string;
  eMeterPtYIndex: number;
  eMeterPtYAllocationType: string;
  eMeterPtYRegisterStatus: string = 'Y';
  eMeterPtYInstallInd: boolean;
  eMeterPtYRemoveInd: boolean;
  eMeterPtYReplaceInd: boolean;

  eMeterPtB: string;
  eMeterPtBSerialNum: string;
  eMeterPtBCtrl: string;
  eMeterPtBIndex: number;
  eMeterPtBAllocationType: string;
  eMeterPtBRegisterStatus: string = 'Y';
  eMeterPtBInstallInd: boolean;
  eMeterPtBRemoveInd: boolean;
  eMeterPtBReplaceInd: boolean;

}