import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeActionSheetPage } from './native-action-sheet';

@NgModule({
  declarations: [
    NativeActionSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeActionSheetPage),
  ],
  exports: [
    NativeActionSheetPage
  ]
})
export class NativeActionSheetPageModule {}
