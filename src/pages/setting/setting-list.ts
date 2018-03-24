import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { LISTMENUSETTING } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-setting-list',
  templateUrl: 'setting-list.html',
})
export class SettingListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = 'SettingListPage';
    this.menu.enable(true, 'menu-profile');
    this.items = LISTMENUSETTING;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

}
