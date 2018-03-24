import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeSmsPage } from './native-sms';

@NgModule({
  declarations: [
    NativeSmsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeSmsPage),
  ],
  exports: [
    NativeSmsPage
  ]
})
export class NativeSmsPageModule {}
