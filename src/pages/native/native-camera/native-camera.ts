import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-native-camera',
  templateUrl: 'native-camera.html',
})
export class NativeCameraPage {
    public base64Image: string;
    errorMessage: string;

    constructor(
        public camera: Camera, 
        public platform: Platform,
        public alertCtrl: AlertController,
    ) {
        // if (!this.platform.is('cordova')) {
        //     console.warn('Cordova is not available');
        //     const alert = this.alertCtrl.create({
        //         title: 'Attention!',
        //         subTitle: 'Cordova is not available',
        //         buttons: ['Close']
        //     });
        //     alert.present();
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
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
            this.errorMessage = err;
            const alert = this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works on real device',
                buttons: ['Close']
            });
            alert.present();
        });
    }
}
