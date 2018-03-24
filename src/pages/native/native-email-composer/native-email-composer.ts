import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-native-email-composer',
  templateUrl: 'native-email-composer.html',
})
export class NativeEmailComposerPage {

  email: any;
  successMessage: string;
  errorMessage: string;

  constructor(
    public emailComposer:EmailComposer, 
    public platform: Platform,
    public alertCtrl: AlertController
  ) {  
    this.emailComposer.isAvailable()
    .then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
    },
    (err) => { 
        this.errorMessage = err; 
        console.log(err);
      }
    );

    this.email = {
      to: 'ionicpremium@gmail.com',
      //cc: 'info@ionicpremium.com',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

  }

  sendMail() {
    // Send a text message using default options
    this.emailComposer.open(this.email)
    .then(
      (email) => { this.successMessage = email; console.log(email); },
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
