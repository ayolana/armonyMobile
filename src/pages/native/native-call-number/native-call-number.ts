import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { CallNumber  } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-native-call-number',
  templateUrl: 'native-call-number.html',
})
export class NativeCallNumberPage {
  
  successMessage: string;
  errorMessage: string;

  constructor(
    public callNumber: CallNumber, 
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
  }

  doCall(phoneNumber:string) {
    this.callNumber
    .callNumber(phoneNumber, true)
    .then(
      (msg) => { this.successMessage = msg; console.log(msg); },
      (err) => { 
        this.errorMessage = err; 
        console.log(err);
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
