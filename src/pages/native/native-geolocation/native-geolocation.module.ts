import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeGeolocationPage } from './native-geolocation';

@NgModule({
  declarations: [
    NativeGeolocationPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeGeolocationPage),
  ],
  exports: [
    NativeGeolocationPage
  ]
})
export class NativeGeolocationPageModule {}
