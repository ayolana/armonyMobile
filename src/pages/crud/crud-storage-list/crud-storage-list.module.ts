import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudStorageListPage } from './crud-storage-list';

@NgModule({
  declarations: [
    CrudStorageListPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudStorageListPage),
  ],
  exports: [
    CrudStorageListPage
  ]
})
export class CrudStorageListPageModule {}
