import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeYoutubePlayerPage } from './native-youtube-player';

@NgModule({
  declarations: [
    NativeYoutubePlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeYoutubePlayerPage),
  ],
  exports: [
    NativeYoutubePlayerPage
  ]
})
export class NativeYoutubePlayerPageModule {}
