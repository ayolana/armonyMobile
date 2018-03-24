import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudStorageDetailPage } from './crud-storage-detail';

@NgModule({
  declarations: [
    CrudStorageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudStorageDetailPage),
  ],
  exports: [
    CrudStorageDetailPage
  ]
})
export class CrudStorageDetailPageModule {}
