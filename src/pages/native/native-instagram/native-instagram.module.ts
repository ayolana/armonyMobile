import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeInstagramPage } from './native-instagram';

@NgModule({
  declarations: [
    NativeInstagramPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeInstagramPage),
  ],
  exports: [
    NativeInstagramPage
  ]
})
export class NativeInstagramPageModule {}
