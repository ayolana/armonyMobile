import { SettingListPage } from './setting-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SettingListPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingListPage),
  ],
  exports: [
    SettingListPage
  ]
})

export class SettingListPageModule { }