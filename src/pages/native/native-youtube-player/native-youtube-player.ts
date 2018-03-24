import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@IonicPage()
@Component({
  selector: 'page-native-youtube-player',
  templateUrl: 'native-youtube-player.html',
})
export class NativeYoutubePlayerPage {

  successMessage: string; 
  errorMessage: string;

  constructor(
    public youtube: YoutubeVideoPlayer, 
    public platform: Platform,
    public alertCtrl: AlertController
  ) {
    // if (!this.platform.is('cordova')) {
    //   console.warn('Cordova is not available');
    //   const alert = this.alertCtrl.create({
    //     title: 'Attention!',
    //     subTitle: 'Cordova is not available',
    //     buttons: ['Close']
    //   });
    //   alert.present();
    // }
  }

  playVideo() {
    this.youtube.openVideo('2IXvWAd8kG0');    
  }

}