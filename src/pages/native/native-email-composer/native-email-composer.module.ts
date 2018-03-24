import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeEmailComposerPage } from './native-email-composer';

@NgModule({
  declarations: [
    NativeEmailComposerPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeEmailComposerPage),
  ],
  exports: [
    NativeEmailComposerPage
  ]
})
export class NativeEmailComposerPageModule {}
