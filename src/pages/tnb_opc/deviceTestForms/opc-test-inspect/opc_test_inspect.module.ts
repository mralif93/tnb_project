import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcTestInspectPage } from './opc_test_inspect';

@NgModule({
    declarations: [
        OpcTestInspectPage,
    ],
    imports: [
        IonicPageModule.forChild(OpcTestInspectPage),
    ],
    exports: [
        OpcTestInspectPage
    ]
})
export class OpcTestInspectPageModule { }