import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { CrudHttpProvider } from '../../../providers/crud-http/crud-http';

@IonicPage()
@Component({
  selector: 'page-feature-infinite-scroll',
  templateUrl: 'feature-infinite-scroll.html',
  providers: [CrudHttpProvider],
})
export class FeatureInfiniteScrollPage {

  public notesItems: any = [];
  private start:number = 0;
  public loader = this.loadingCtrl.create({content: 'Please wait...', duration: 10000});

  constructor(public loadingCtrl: LoadingController, public crudHttpProvider:CrudHttpProvider) {

  }
  
  ionViewDidLoad() {
    this.loader.present();
    this.loadData().then(data => 
      { if(data) this.loader.dismiss(); }      
    );
  }

  loadData() {
    return new Promise(resolve => {
      this.crudHttpProvider.getNotesDBLimit(this.start)
      .then(datas => {
        for (let data in datas) {
          this.notesItems.push(datas[data]);
        }
        resolve(true);
      });
    });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    console.log('doInfinite, start is currently '+this.start);
    this.start+=10;

    this.loadData().then(()=>{
      console.log('Async operation has ended');
      infiniteScroll.complete();
    });
  }

}
