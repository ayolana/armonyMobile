import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativePhotoLibraryPage } from './native-photo-library';

@NgModule({
  declarations: [
    NativePhotoLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(NativePhotoLibraryPage),
  ],
  exports: [
    NativePhotoLibraryPage
  ]
})
export class NativePhotoLibraryPageModule {}
