import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDatabaseProvider } from '../../../../providers/firebase/firebase-database';

@IonicPage()
@Component({
  selector: 'page-crud-firebase-detail',
  templateUrl: 'crud-firebase-detail.html',
})
export class CrudFirebaseDetailPage {

  dataNotes: {text:any};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public firebaseDBProvider: FirebaseDatabaseProvider) {
    this.dataNotes = navParams.get('item');
  }

  saveNotes() {
    this.firebaseDBProvider.saveNotesDB(this.dataNotes);
    this.navCtrl.pop();
  }
  
  back() {
    this.navCtrl.pop();
  }

}
