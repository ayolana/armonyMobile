import { Component } from '@angular/core';
import { ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'modals.html'
})
export class ModalsPage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {
    let modal = this.modalCtrl.create('ModalContentPage', characterNum);
    modal.present();
  }
}


