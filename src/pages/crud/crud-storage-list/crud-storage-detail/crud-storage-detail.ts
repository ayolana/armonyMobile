import { Component } from '@angular/core';
import { Platform, IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>
      crud storage detail
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
export class CrudStorageDetailPage {
  dataNotes: {id:any, title:any, text:any};

  constructor(
    public platform: Platform,  
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.dataNotes = this.navParams.get('charSend');

    if (this.dataNotes.id === null) {
      this.dataNotes.id = new Date().getTime();
    }
  }

  saveNotes() {
    this.viewCtrl.dismiss(this.dataNotes);
  }

  back() {
    this.viewCtrl.dismiss(null);
  }
}