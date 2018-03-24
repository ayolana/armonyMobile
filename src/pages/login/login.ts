import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENULOGIN } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginListPage {
  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'LoginListPage';
    this.items    = LISTMENULOGIN;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
