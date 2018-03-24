import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeSocialSharingPage } from './native-social-sharing';

@NgModule({
  declarations: [
    NativeSocialSharingPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeSocialSharingPage),
  ],
  exports: [
    NativeSocialSharingPage
  ]
})
export class NativeSocialSharingPageModule {}
