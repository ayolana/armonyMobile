import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-firebase-auth',
  templateUrl: 'firebase-auth.html'
})
export class FirebaseAuthPage {

  backgroundImage = 'assets/img/background/background-2.jpg';
  public loginForm: any;

  constructor(public navCtrl: NavController) {  }

  goToLogin() {
    this.navCtrl.push('FirebaseLoginPage');
  }

  goToSignup() {
    this.navCtrl.push('FirebaseRegisterPage');
  }

}
