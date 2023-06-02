import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceExecutionPage } from './service-execution';
import { GlobalFunction } from "../../../providers/common/global-function";

@NgModule({
  declarations: [
    ServiceExecutionPage
  ],
  imports: [
    IonicPageModule.forChild(ServiceExecutionPage),
  ],
  providers: [
    GlobalFunction,
  ]
})
export class ServiceExecutionPageModule { }
