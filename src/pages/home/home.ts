import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUHOME } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomeListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'HomeListPage';
    this.items    = LISTMENUHOME;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

}
