import { SlidesListPage } from './slides';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlidesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesListPage),
  ],
  exports: [
    SlidesListPage
  ]
})

export class SlidesListPageModule { }
