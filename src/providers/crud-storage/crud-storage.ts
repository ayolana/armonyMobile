import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudStorageProvider {

    datas: any;

    constructor(private storage: Storage) {
        console.log('Hello CrudStorageProvider Provider');
        this.datas = null;
    }

    getNotesDB() {
        return new Promise(resolve => {
          this.storage.get('notes')
          .then(data => {
              console.log(data);
              this.datas = JSON.parse(data);
              console.log(this.datas);
              resolve(this.datas);
          });
        });
    }

    saveNotesDB(datas) {

        this.storage.set('notes', JSON.stringify(datas))
            .then(data => {
              console.log("save success. Data : ", data);
            });
    }

}
