import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealSweepListPage } from './seal-sweep-list';

@NgModule({
  declarations: [
    SealSweepListPage,
  ],
  imports: [
    IonicPageModule.forChild(SealSweepListPage),
  ],
})
export class SealSweepListPageModule {}
