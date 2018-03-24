import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUFORM } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'FormListPage';
    this.items    = LISTMENUFORM;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

}
