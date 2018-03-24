import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeAppRatePage } from './native-app-rate';

@NgModule({
  declarations: [
    NativeAppRatePage,
  ],
  imports: [
    IonicPageModule.forChild(NativeAppRatePage),
  ],
  exports: [
    NativeAppRatePage
  ]
})
export class NativeAppRatePageModule {}
