import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalContentPage } from './modalpopup';

@NgModule({
  declarations: [
    ModalContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalContentPage),
  ],
  exports: [
    ModalContentPage
  ]
})
export class ModalContentPageModule {}
