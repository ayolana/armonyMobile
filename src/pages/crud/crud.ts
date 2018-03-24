import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUCRUD } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html',
})
export class CrudListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'CrudListPage';
    this.items    = LISTMENUCRUD;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

}
