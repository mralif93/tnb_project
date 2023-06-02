import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { GlobalFunction } from "../../../providers/common/global-function";

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
  ],
  providers: [
    GlobalFunction
  ]
})
export class TestPageModule { }
