import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-feature-google-map',
  templateUrl: 'feature-google-map.html',
})
export class FeatureGoogleMapPage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public loader = this.loadingCtrl.create({content: 'Please wait...', duration: 10000});
  
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public geolocation: Geolocation) { 
  }

  ionViewDidLoad(){
    this.loader.present();
    this.loadMap();
  }
 
  loadMap(){
    this.geolocation.getCurrentPosition()
    .then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      if(this.map) this.loader.dismiss();
      
    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  
    let content = "<h4>Information!</h4>";          
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}