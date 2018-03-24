import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturePullToRefreshPage } from './feature-pull-to-refresh';

@NgModule({
  declarations: [
    FeaturePullToRefreshPage,
  ],
  imports: [
    IonicPageModule.forChild(FeaturePullToRefreshPage),
  ],
  exports: [
    FeaturePullToRefreshPage
  ]
})
export class FeaturePullToRefreshPageModule {}
