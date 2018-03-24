import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeCameraPage } from './native-camera';

@NgModule({
  declarations: [
    NativeCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeCameraPage),
  ],
  exports: [
    NativeCameraPage
  ]
})
export class NativeCameraPageModule {}
