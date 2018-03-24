import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PAGES } from '../../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-homev2',
  templateUrl: 'homev2.html'
})
export class Homev2Page {

  pages:any[];

  constructor( public navCtrl: NavController ) {
    
    //Main Menu
    this.pages = PAGES;
  }

  showList(pages) {
    this.navCtrl.setRoot(pages.page);
  }

}
