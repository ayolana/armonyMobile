import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUMISCELLANEOUS } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-miscellaneous',
  templateUrl: 'miscellaneous.html',
})
export class MiscellaneousListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'MiscellaneousListPage';
    this.items    = LISTMENUMISCELLANEOUS;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
