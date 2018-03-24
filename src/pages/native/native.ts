import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUNATIVE } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-native',
  templateUrl: 'native.html',
})
export class NativeListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'NativeListPage';
    this.items    = LISTMENUNATIVE;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

}
