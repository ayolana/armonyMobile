import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-native-geolocation',
  templateUrl: 'native-geolocation.html',
})
export class NativeGeolocationPage {

  successMessage: string;
  errorMessage: string;
  realTimeLocation: string;

  constructor(
    public platform: Platform, 
    public geolocation: Geolocation, 
    public alertCtrl: AlertController) {

    let watch = this.geolocation.watchPosition({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
    watch.subscribe(
      (data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
        this.realTimeLocation = data.coords.latitude +', '+data.coords.longitude;
      },
      (err) => { 
        this.errorMessage = err; 
        console.log('Error get data', err);
        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: 'Cordova is not available',
          buttons: ['Close']
        });
        alert.present();
      }
      );

  }

  getLocation() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition({
        // timeout: 5000,
        // maximumAge: 0
      })
      .then(
        (resp) => {
          // resp.coords.latitude
          // resp.coords.longitude
          this.successMessage = resp.coords.latitude+', '+resp.coords.longitude;
          console.log('Your Location : ', this.successMessage);
        },
        (err) => { 
          this.errorMessage = 'Error : '+err; 
          console.log('Error : ', err);
          const alert = this.alertCtrl.create({
            title: 'Attention!',
            subTitle: 'Only works in real device',
            buttons: ['Close']
          });
          alert.present(); 
        }
      ).catch((error) => {
        this.errorMessage = error;
        console.log('Error : ', error);
        const alert = this.alertCtrl.create({
            title: 'Attention!',
            subTitle: 'Only works in real device',
            buttons: ['Close']
          });
          alert.present(); 
      });
    });
  }
}
