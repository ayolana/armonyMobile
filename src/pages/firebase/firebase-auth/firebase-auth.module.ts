import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseAuthPage } from './firebase-auth';

@NgModule({
  declarations: [
    FirebaseAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseAuthPage),
  ],
})
export class FirebaseAuthPageModule {}
