import { ComponentListPage } from './components';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ComponentListPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentListPage),
  ],
  exports: [
    ComponentListPage
  ]
})

export class ComponentListPageModule { }
