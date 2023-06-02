import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateReservationPage } from './create-reservation';

import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    CreateReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateReservationPage),
    SelectSearchableModule
  ],
})
export class CreateReservationPageModule {}
