import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangePage } from './range';

@NgModule({
  declarations: [
    RangePage,
  ],
  imports: [
    IonicPageModule.forChild(RangePage),
  ],
  exports: [
    RangePage
  ]
})
export class RangePageModule {}
