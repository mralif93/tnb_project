import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealOpcInspectPage } from './seal-opc-inspect';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    SealOpcInspectPage,
  ],
  imports: [
    IonicPageModule.forChild(SealOpcInspectPage),
    SignaturePadModule,
  ],
})
export class SealOpcInspectPageModule { }
