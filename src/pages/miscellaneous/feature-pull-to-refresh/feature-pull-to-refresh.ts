import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { CrudHttpProvider } from '../../../providers/crud-http/crud-http';

@IonicPage()
@Component({
  selector: 'page-feature-pull-to-refresh',
  templateUrl: 'feature-pull-to-refresh.html',
  providers: [CrudHttpProvider],
})
export class FeaturePullToRefreshPage {

  notesItems: any;
  dataNotes = {id:null};

  constructor(public loadingCtrl: LoadingController, public crudHttpProvider:CrudHttpProvider) {
    
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.crudHttpProvider.getNotesDB()
    .then(data => {
      console.log('Async operation has ended');
      this.notesItems = data;
      refresher.complete();
    });
  }

}
