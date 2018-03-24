import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeCropPage } from './native-crop';

@NgModule({
  declarations: [
    NativeCropPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeCropPage),
  ],
  exports: [
    NativeCropPage
  ]
})
export class NativeCropPageModule {}
