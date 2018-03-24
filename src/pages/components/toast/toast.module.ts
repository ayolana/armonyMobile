import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastPage } from './toast';

@NgModule({
  declarations: [
    ToastPage,
  ],
  imports: [
    IonicPageModule.forChild(ToastPage),
  ],
  exports: [
    ToastPage
  ]
})
export class ToastPageModule {}
