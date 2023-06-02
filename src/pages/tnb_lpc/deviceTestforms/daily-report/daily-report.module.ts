import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyMaintenanceReport } from './daily-report';

@NgModule({
  declarations: [
    DailyMaintenanceReport,
  ],
  imports: [
    IonicPageModule.forChild(DailyMaintenanceReport),
  ],
})
export class DailyReportPageModule {}
