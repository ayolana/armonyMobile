import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudHttpDetailPage } from './crud-http-detail';

@NgModule({
  declarations: [
    CrudHttpDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudHttpDetailPage),
  ],
  exports: [
    CrudHttpDetailPage
  ]
})
export class CrudHttpDetailPageModule {}
