import { Component } from '@angular/core';
import { ModalController, IonicPage, LoadingController } from 'ionic-angular';
import { CrudHttpProvider } from '../../../providers/crud-http/crud-http';

@IonicPage()
@Component({
  selector: 'page-crud-http-list',
  templateUrl: 'crud-http-list.html',
  providers: [CrudHttpProvider],
})
export class CrudHttpListPage {

  notesItems: any;
  dataNotes = {};

  constructor(public loadingCtrl: LoadingController, public modalCtrl: ModalController, private crudHttpProvider:CrudHttpProvider) {

  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({content: 'Please wait...', duration: 10000});
    loader.present();
    this.crudHttpProvider.getNotesDB()
    .then(
      data => {
        this.notesItems = data;
        if(data) loader.dismiss();
      }
    );
  }
  
  addNotes() {
    let modal = this.modalCtrl.create('CrudHttpDetailPage', {charSend: {}});
    modal.present();
    modal.onDidDismiss(data => {
      if (data !== null) {
        this.notesItems.push(data);
      }
    });
  }

  editNotes(event, notesItem) {
    let modal = this.modalCtrl.create('CrudHttpDetailPage', {charSend: notesItem});
    modal.present();
  }

  deleteNotes(id, index) {
    this.notesItems.splice(index, 1);
    this.crudHttpProvider.deleteNotesDB(id);
  }

}

