import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseRegisterPage } from './firebase-register';

@NgModule({
  declarations: [
    FirebaseRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseRegisterPage),
  ],
})
export class FirebaseRegisterPageModule {}
