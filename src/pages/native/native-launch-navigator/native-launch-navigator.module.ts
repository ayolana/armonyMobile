import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeLaunchNavigatorPage } from './native-launch-navigator';

@NgModule({
  declarations: [
    NativeLaunchNavigatorPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeLaunchNavigatorPage),
  ],
  exports: [
    NativeLaunchNavigatorPage
  ]
})
export class NativeLaunchNavigatorPageModule {}
