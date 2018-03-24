import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseDatabaseProvider {

  itemsRef:AngularFireList<any>;

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.itemsRef = this.afd.list('ionium2/notes/');
  }

  getNotesDB() {
   return this.itemsRef;
  }

  saveNotesDB(datas) {
    console.log(datas);
    if (datas.key) {
      let tmp = datas.key;
      datas.key = {};
      console.log(datas);
      this.itemsRef.update(tmp, datas);
    }
    else {
      this.itemsRef.push(datas); 
    }
  }
 
  deleteNotesDB(id) {
    this.itemsRef.remove(id);
  }

  cleanData(data) {
    // data.forEach(element => {
      
    // });
  }

}
