import { Component } from '@angular/core';
import { Platform, AlertController, IonicPage } from 'ionic-angular';
import { Crop } from '@ionic-native/crop';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-native-crop',
  templateUrl: 'native-crop.html',
})
export class NativeCropPage {

  successMessage: string; 
  errorMessage: string;
  croped_image: string;
  
  constructor(
    public camera:Camera, 
    public crop:Crop, 
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

  // Return a promise to catch errors while loading image
  getMedia(): Promise<any> {
    // Get Image from ionic-native's built in camera plugin
    return this.camera.getPicture({
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      mediaType: this.camera.MediaType.ALLMEDIA,
      destinationType: this.camera.DestinationType.FILE_URI
    })
    .then((fileUri) => {
      // Crop Image, on android this returns something like, '/storage/emulated/0/Android/...'
      // Only giving an android example as ionic-native camera has built in cropping ability
      if (this.platform.is('ios')) {
        return this.crop.crop(fileUri, { quality: 100 });
      } else if (this.platform.is('android')) {
        // Modify fileUri format, may not always be necessary
        fileUri = 'file://' + fileUri;

        /* Using cordova-plugin-crop starts here */
        return this.crop.crop(fileUri, { quality: 100 });
      }
    })
    .then(
      (path) => {
        // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
        this.croped_image = path;
        this.successMessage = path;
        console.log('Cropped Image Path!: ' + path);
        return path;
      },
      (err) => { 
        this.errorMessage = err; 
        console.log('Error cropping image', err);
        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: 'Only works in real device',
          buttons: ['Close']
        });
        alert.present(); 
      }
    )
  }

}
