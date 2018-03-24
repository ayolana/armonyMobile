import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popovers',
  templateUrl: 'popovers.html',
})
export class PopoversPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(
    private popoverCtrl: PopoverController, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create('ShowPopoverPage', {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

}

