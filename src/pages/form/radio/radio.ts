import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  langs;
  langForm;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({
          "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}
