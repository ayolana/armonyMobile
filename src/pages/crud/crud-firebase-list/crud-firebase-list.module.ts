import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudFirebaseListPage } from './crud-firebase-list';

@NgModule({
  declarations: [
    CrudFirebaseListPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudFirebaseListPage),
  ],
  exports: [
    CrudFirebaseListPage
  ]
})
export class CrudFirebaseListPageModule {}
