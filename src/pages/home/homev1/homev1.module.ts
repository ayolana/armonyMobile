import { Homev1Page } from './homev1';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Homev1Page,
  ],
  imports: [
    IonicPageModule.forChild(Homev1Page),
  ],
  exports: [
    Homev1Page
  ]
})

export class LoginListPageModule { }
