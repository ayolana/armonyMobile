import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeatureGoogleMapPage } from './feature-google-map';

@NgModule({
  declarations: [
    FeatureGoogleMapPage,
  ],
  imports: [
    IonicPageModule.forChild(FeatureGoogleMapPage),
  ],
  exports: [
    FeatureGoogleMapPage
  ]
})
export class FeatureGoogleMapPageModule {}
