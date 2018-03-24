import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudFirebaseDetailPage } from './crud-firebase-detail';

@NgModule({
  declarations: [
    CrudFirebaseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudFirebaseDetailPage),
  ],
  exports: [
    CrudFirebaseDetailPage
  ]
})
export class CrudFirebaseDetailPageModule {}
