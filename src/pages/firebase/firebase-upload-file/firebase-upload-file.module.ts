import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseUploadFilePage } from './firebase-upload-file';

@NgModule({
  declarations: [
    FirebaseUploadFilePage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseUploadFilePage),
  ],
})
export class FirebaseUploadFilePageModule {}
