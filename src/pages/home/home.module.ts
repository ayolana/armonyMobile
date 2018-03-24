import { HomeListPage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomeListPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeListPage),
  ],
  exports: [
    HomeListPage
  ]
})

export class HomeListPageModule { }
