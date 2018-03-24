import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ACCORDIONMENU } from '../../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html',
})
export class AccordionPage {

  pages:any;

  constructor() {

    this.pages = ACCORDIONMENU;
    console.log(this.pages);
  }

  toggleSection(i) {
    console.log(this.pages[i]);
    console.log(this.pages[i].children);
    this.pages[i].open = !this.pages[i].open;
  }

}
