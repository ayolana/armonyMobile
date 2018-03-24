import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

/**
 * This Component need :
 * - timer components. Load it in component 
 * - timer-progress components. Load it in component
 */

@IonicPage()
@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html'
})
export class CountdownPage {

  constructor(
      public navCtrl: NavController,
      public menu: MenuController
  ) { }
}
