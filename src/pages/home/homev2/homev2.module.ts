import { Homev2Page } from './homev2';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Homev2Page,
  ],
  imports: [
    IonicPageModule.forChild(Homev2Page),
  ],
  exports: [
    Homev2Page
  ]
})

export class LoginListPageModule { }
