import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetsPage } from './action-sheets';

@NgModule({
  declarations: [
    ActionSheetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetsPage),
  ],
  exports: [
    ActionSheetsPage
  ]
})
export class ActionSheetsPageModule {}
