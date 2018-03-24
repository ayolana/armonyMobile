import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LISTMENUSLIDE } from '../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesListPage {
  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'SlidesListPage';
    this.items = LISTMENUSLIDE;
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
