import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioPage } from './radio';

@NgModule({
  declarations: [
    RadioPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPage),
  ],
  exports: [
    RadioPage
  ]
})
export class RadioPageModule {}
