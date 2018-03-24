import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudHttpListPage } from './crud-http-list';

@NgModule({
  declarations: [
    CrudHttpListPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudHttpListPage),
  ],
  exports: [
    CrudHttpListPage
  ]
})
export class CrudHttpListPageModule {}
