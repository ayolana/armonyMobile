import { Component } from '@angular/core';
import { ModalController, IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { CrudStorageProvider } from '../../../providers/crud-storage/crud-storage';

@IonicPage()
@Component({
  selector: 'page-crud-storage-list',
  templateUrl: 'crud-storage-list.html',
  providers: [CrudStorageProvider],
})
export class CrudStorageListPage {

  notesItems: any;        //item list
  dataNotes = {id:null};  //for form

  constructor(public loadingCtrl: LoadingController, public modalCtrl: ModalController, public navParams: NavParams, private crudStorageProvider:CrudStorageProvider) {

  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({content: 'Please wait...', duration: 10000});
    loader.present();
    this.crudStorageProvider.getNotesDB()
    .then(
      data => {
        this.notesItems = data;
        if(data) loader.dismiss();
      }
    );
  }

  addNotes() {
    let modal = this.modalCtrl.create('CrudStorageDetailPage', {charSend: {}});
    modal.present();

    modal.onDidDismiss(data => {
      if (data !== null) {
        if (this.notesItems === null){ this.notesItems = []; }
        this.notesItems.push(data);
        this.crudStorageProvider.saveNotesDB(this.notesItems);
      }
    });
  }

  editNotes(event, notesItem) {
    let modal = this.modalCtrl.create('CrudStorageDetailPage', {charSend: notesItem});
    modal.present();

    modal.onDidDismiss(data => {
      this.crudStorageProvider.saveNotesDB(this.notesItems);
    });
  }

  deleteNotes(id, index) {
    this.notesItems.splice(index, 1);
    this.crudStorageProvider.saveNotesDB(this.notesItems);
  }

}