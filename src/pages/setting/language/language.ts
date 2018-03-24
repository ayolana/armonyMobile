import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LISTAVAILABLELANGUAGE } from '../../../app/global.setting';

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  rootPage: any;
  items: Array<{ title: string, value: string }>;

  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController, 
    public translate: TranslateService
  ) {
    this.items = LISTAVAILABLELANGUAGE;
  }

  itemTapped(event, item) {
    console.log(item.value);
    this.translate.use(item.value); // Set your language 

    this.menuCtrl.open();
  }

}
