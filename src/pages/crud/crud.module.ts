import { CrudListPage } from './crud';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CrudListPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudListPage),
  ],
  exports: [
    CrudListPage
  ]
})

export class CrudListPageModule { }
