import { Component } from '@angular/core';
import { IonicPage, Platform, ViewController, NavParams } from 'ionic-angular';
import { CrudHttpProvider } from '../../../../providers/crud-http/crud-http';

@IonicPage()
@Component({
  template: `
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>
      crud http detail
    </ion-title>
    <ion-buttons end (click)="back()">
        <span ion-text showWhen="ios"> Cancel </span>
        <button ion-button icon-only color="royal">
            <ion-icon name="close"></ion-icon>
        </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-item>
    <ion-input type="text" [(ngModel)]="dataNotes.title" placeholder="New Note Title"></ion-input>
  </ion-item>
  <ion-item>
    <ion-textarea [(ngModel)]="dataNotes.text" placeholder="Your Text Here"></ion-textarea>
  </ion-item>
  <ion-col>
    <button ion-button color="primary" (click)="saveNotes()"> Save </button>
    <button ion-button color="danger" (click)="back()"> Back </button>
  </ion-col>
</ion-content>
` 
})
export class CrudHttpDetailPage {
  dataNotes: {id:any, title:any, text:any};

  constructor(
    public platform: Platform,  
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private crudHttpProvider:CrudHttpProvider
  ) {
    this.dataNotes = this.navParams.get('charSend');
  }

  saveNotes() {
    this.crudHttpProvider.saveNotesDB(this.dataNotes)
    .then(data => {
      this.dataNotes.id = data;
      this.viewCtrl.dismiss(this.dataNotes);
    })
    .catch(err => {
      this.viewCtrl.dismiss(null);
    });
  }

  back() {
    this.viewCtrl.dismiss(null);
  }
}
