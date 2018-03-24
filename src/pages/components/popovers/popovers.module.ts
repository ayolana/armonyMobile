import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoversPage } from './popovers';

@NgModule({
  declarations: [
    PopoversPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoversPage),
  ],
  exports: [
    PopoversPage
  ]
})
export class PopoversPageModule {}
