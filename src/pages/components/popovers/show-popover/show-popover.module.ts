import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPopoverPage } from './show-popover';

@NgModule({
  declarations: [
    ShowPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPopoverPage),
  ],
  exports: [
    ShowPopoverPage
  ]
})
export class ShowPopoverPageModule {}
