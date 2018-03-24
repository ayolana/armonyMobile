import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseListPage } from './firebase-list';

@NgModule({
  declarations: [
    FirebaseListPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseListPage),
  ],
})
export class FirebaseListPageModule {}
