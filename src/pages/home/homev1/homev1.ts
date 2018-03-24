import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PAGES } from '../../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-homev1',
  templateUrl: 'homev1.html'
})
export class Homev1Page {

  pages:any[];

  constructor( public navCtrl: NavController ) {
    
    //Main Menu
    this.pages = PAGES;
  }

  showList(pages) {   
    this.navCtrl.setRoot(pages.page);
  }

}
