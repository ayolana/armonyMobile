import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TogglePage } from './toggle';

@NgModule({
  declarations: [
    TogglePage,
  ],
  imports: [
    IonicPageModule.forChild(TogglePage),
  ],
  exports: [
    TogglePage
  ]
})
export class TogglePageModule {}
