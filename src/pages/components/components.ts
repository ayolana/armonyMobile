import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUCOMPONENT } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentListPage {
  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'ComponentListPage';
    this.items    = LISTMENUCOMPONENT;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
