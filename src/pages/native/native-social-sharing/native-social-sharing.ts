import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-native-social-sharing',
  templateUrl: 'native-social-sharing.html',
})
export class NativeSocialSharingPage {
  
  successMessage:string;
  errorMessage:string;

  constructor(
    public socialSharing: SocialSharing, 
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

  doSosialSharing() {
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail()
    .then(() => {
      // Sharing via email is possible
      this.shareVia("email");
    }).catch((err) => {
      // Sharing via email is not possible
      this.errorMessage = 'can\'t share via email '+err; 
      console.log('Can\'t share via email', err);
      const alert = this.alertCtrl.create({
        title: 'Attention!',
        subTitle: 'Only works on real device',
        buttons: ['Close']
      });
      alert.present();
    });
  }

  shareVia(shareVia) {

    if (shareVia === "email") {
      // Share via email
      this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org'])
      .then(
        (success) => { this.successMessage = success; console.log('Share Via Email'); },
        (err) => { 
          this.errorMessage = 'Error send via Email '+err; 
          console.log('Error send via Email', err); 
          const alert = this.alertCtrl.create({
            title: 'Attention!',
            subTitle: 'Only works on real device',
            buttons: ['Close']
          });
          alert.present();
        }
      );
    }

  }

}
