import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {

  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }

}
