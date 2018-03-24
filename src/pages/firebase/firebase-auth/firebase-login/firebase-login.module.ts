import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseLoginPage } from './firebase-login';

@NgModule({
  declarations: [
    FirebaseLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseLoginPage),
  ],
})
export class FirebaseLoginPageModule {}
