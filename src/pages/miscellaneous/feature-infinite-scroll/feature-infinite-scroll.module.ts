import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeatureInfiniteScrollPage } from './feature-infinite-scroll';

@NgModule({
  declarations: [
    FeatureInfiniteScrollPage,
  ],
  imports: [
    IonicPageModule.forChild(FeatureInfiniteScrollPage),
  ],
  exports: [
    FeatureInfiniteScrollPage
  ]
})
export class FeatureInfiniteScrollPageModule {}
