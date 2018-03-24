import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-native-launch-navigator',
  templateUrl: 'native-launch-navigator.html',
})
export class NativeLaunchNavigatorPage {

  successMessage:string;
  errorMessage:string;

  constructor(
    public launchNavigator: LaunchNavigator, 
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

  showLaunchNavigator() {

    this.launchNavigator.navigate('Toronto, ON',
      {
        start: 'London, ON',
      }
    )
    .then(
      (success) => { this.successMessage = success; console.log('Launched navigator'); },
      (err) => { 
        this.errorMessage = 'Error launching navigator. '+err; 
        console.log('Error launching navigator', err);
        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: 'Only works in real device',
          buttons: ['Close']
        });
        alert.present();
      }
    );
  }

}
