import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-native-date-picker',
  templateUrl: 'native-date-picker.html',
})
export class NativeDatePickerPage {

  successMessage: any;
  errorMessage: string;

  constructor(
    public datePicker : DatePicker, 
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

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    })
    .then(
      (date) => { this.successMessage = date; console.log('date: ' + date); },
      (err) => { 
        this.errorMessage = 'Error occurred while getting date:'+err; 
        console.log('Error occurred while getting date:', err); 
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
