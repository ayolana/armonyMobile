import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import { LISTMENUPROFIL } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfileListPage {
  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = 'ProfileListPage';
    this.menu.enable(true, 'menu-profile');
    this.items = LISTMENUPROFIL;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
