import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeCallNumberPage } from './native-call-number';

@NgModule({
  declarations: [
    NativeCallNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeCallNumberPage),
  ],
  exports: [
    NativeCallNumberPage
  ]
})
export class NativeCallNumberPageModule {}
