import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LISTMENUCONTRIBUTIONS } from '../../app/global.setting';

/**
 * Generated class for the ContributionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contributions',
  templateUrl: 'contributions.html',
})
export class ContributionsListPage {
  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.items = LISTMENUCONTRIBUTIONS;
    this.rootPage = 'ContributionsListPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contributions List Page');
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

}
