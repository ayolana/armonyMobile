import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-native-sms',
  templateUrl: 'native-sms.html',
})
export class NativeSmsPage {

  successMessage:string;
  errorMessage:string;

  constructor(
    public sms: SMS, 
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

  sendSMS() {
    // Send a text message using default options
    this.sms.send('+6285 123 123 123', 'Hello world!')
    .then(
      (success) => { this.successMessage = 'SMS send'; console.log('SMS send'); },
      (err) => { 
        this.errorMessage = 'Error send SMS '+err; 
        console.log('Error send SMS', err); 
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
