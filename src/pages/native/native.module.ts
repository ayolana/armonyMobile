import { NativeListPage } from './native';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    NativeListPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeListPage),
  ],
  exports: [
    NativeListPage
  ]
})

export class NativeListPageModule { }
