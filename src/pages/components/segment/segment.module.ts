import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentPage } from './segment';

@NgModule({
  declarations: [
    SegmentPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentPage),
  ],
  exports: [
    SegmentPage
  ]
})
export class SegmentPageModule {}
