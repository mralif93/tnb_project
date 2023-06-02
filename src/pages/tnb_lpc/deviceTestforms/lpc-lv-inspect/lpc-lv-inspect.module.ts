import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LpcLvInspectPage } from './lpc-lv-inspect';
import { ComponentsModule } from '../../../../components/components.module';
import { ToasterNotificationsComponent } from '../../../../components/toaster-notifications/toaster-notifications';
import { NotifierModule, NotifierOptions } from 'angular-notifier';


/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 500,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 500,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 500,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    LpcLvInspectPage,
  ],
  imports: [
    IonicPageModule.forChild(LpcLvInspectPage),
    ComponentsModule, NotifierModule.withConfig(customNotifierOptions)
  ], providers: [
    ToasterNotificationsComponent
  ],
})
export class LpcLvInspectPageModule { }
