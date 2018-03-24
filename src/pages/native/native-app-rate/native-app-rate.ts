import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';

@IonicPage()
@Component({
  selector: 'page-native-app-rate',
  templateUrl: 'native-app-rate.html',
})
export class NativeAppRatePage {

  constructor(
    public appRate: AppRate,
    public platform: Platform,
    public alertCtrl: AlertController,
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
    
    // set certain preferences
    this.appRate.preferences.storeAppURL = {
      ios: '<app_id>',
      android: 'market://details?id=<package_name>',
      windows: 'ms-windows-store://review/?ProductId=<store_id>'
    };

    this.appRate.promptForRating(true);

    // or, override the whole preferences object
    this.appRate.preferences = {
      usesUntilPrompt: 3,
      storeAppURL: {
      ios: '<app_id>',
      android: 'market://details?id=<package_name>',
      windows: 'ms-windows-store://review/?ProductId=<store_id>'
      }
    };

    this.appRate.promptForRating(false);

  }

}
