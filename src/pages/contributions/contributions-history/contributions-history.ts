import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ContributionProvider } from '../../../providers/contribution/contribution';
import { FlashProvider } from '../../../providers/flash/flash';

/**
 * Generated class for the ContributionsHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contributions-history',
  templateUrl: 'contributions-history.html',
})
export class ContributionsHistoryPage {
  pet: string = "history";
  contributions: any;
  isAndroid: boolean = false;

  constructor(platform: Platform, public flashProvider:FlashProvider, public contP:ContributionProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContributionsHistoryPage');

    this.contributions = (this.contP.history());
    console.log(this.contributions);
      // this.contP.history().then((result) => {
      //   console.log(result)
      //   // this.authProvider.storeUser(this.data.user).then(storedUser => {
      //     // this.navCtrl.setRoot('Homev1Page')
      // }, (err) => {
      //   console.log(err)
      //   this.flashProvider.show('The credentials do not match our records!', 4000, 'danger');
      // });
  }

  
}
