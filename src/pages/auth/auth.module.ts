import { AuthPage } from './auth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AuthPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthPage),
  ],
  exports: [
    AuthPage
  ]
})

export class AuthPageModule { }
