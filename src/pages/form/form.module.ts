import { FormListPage } from './form';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FormListPage,
  ],
  imports: [
    IonicPageModule.forChild(FormListPage),
  ],
  exports: [
    FormListPage
  ]
})

export class FormListPageModule { }
