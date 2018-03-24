import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { Instagram } from '@ionic-native/instagram';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-native-instagram',
  templateUrl: 'native-instagram.html',
})
export class NativeInstagramPage {

  errorMessageTP:any; //TP : Take Picture
  successMessageIG:any; //IG : Instagram
  errorMessageIG:any;
  taked_picture: string;
  has_taked_picture: boolean = false;
  caption: string;
  readonly DEFAULT_IMAGE: string = 'http://placehold.it/500x500';

  constructor(
    public camera:Camera, 
    public instagram: Instagram, 
    public platform: Platform,
    public alertCtrl: AlertController
  ) {
    this.taked_picture = this.DEFAULT_IMAGE;
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

  takePicture() {
      this.camera.getPicture({
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          quality: 100,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
          // imageData is a base64 encoded string
          this.has_taked_picture = true;
          this.taked_picture     = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
          this.errorMessageTP = err;
          const alert = this.alertCtrl.create({
            title: 'Attention!',
            subTitle: 'Only works in real device',
            buttons: ['Close']
          });
          alert.present();
      });
  }

  shareImage() {
    this.instagram.share(this.taked_picture, this.caption)
    .then(
      (success) => { 
        this.taked_picture = this.DEFAULT_IMAGE;
        this.has_taked_picture = false; 
        this.successMessageIG = success;
        console.log('Shared!', success);
      },
      (err) => 
      {
        this.errorMessageIG = err; 
        console.log(err);
        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: 'Only works in real device',
          buttons: ['Close']
        });
        alert.present();
       }
    )
    .catch((error: any) => {
      console.error(error); 
      this.errorMessageIG = error;
      console.log(error);
        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: 'Only works in real device',
          buttons: ['Close']
        });
        alert.present(); 
    });
  }

}
