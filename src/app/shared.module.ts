import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ],
})

export class SharedModule { }
