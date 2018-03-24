import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { FirebaseDatabaseProvider } from '../../../providers/firebase/firebase-database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-crud-firebase-list',
  templateUrl: 'crud-firebase-list.html',
})
export class CrudFirebaseListPage {
  
  // notesItems: FirebaseListObservable<any[]>;
  notesItemsRef: AngularFireList<any>;
  notesItems: Observable<any[]>;
  dataNotes = {};

  constructor(
    public loadingCtrl: LoadingController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public firebaseDBProvider: FirebaseDatabaseProvider
  ) {
    this.notesItemsRef = this.firebaseDBProvider.getNotesDB();
    this.notesItems = this.notesItemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
    console.log(this.notesItems);
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({content: 'Please wait...', duration: 10000});
    loader.present();
    if(this.notesItems) loader.dismiss();
  }

  addNotes(event) {
    this.navCtrl.push('CrudFirebaseDetailPage', {
      item: {}
    });
  }

  editNotes(event, notesItem) {
    this.navCtrl.push('CrudFirebaseDetailPage', {
      item: notesItem
    });
  }

  deleteNotes(id) {
    this.firebaseDBProvider.deleteNotesDB(id);
  }
  
}
