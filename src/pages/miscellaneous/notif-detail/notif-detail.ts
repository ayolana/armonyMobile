import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notif-detail',
  templateUrl: 'notif-detail.html',
})
export class NotifDetailPage {

  pushMessage: string = 'push message will be displayed here';

  constructor(public params: NavParams) {
    if (params.data.message) {
      this.pushMessage = params.data.message;
    }
  }

}
