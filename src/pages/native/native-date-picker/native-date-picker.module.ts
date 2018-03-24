import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeDatePickerPage } from './native-date-picker';

@NgModule({
  declarations: [
    NativeDatePickerPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeDatePickerPage),
  ],
  exports: [
    NativeDatePickerPage
  ]
})
export class NativeDatePickerPageModule {}
