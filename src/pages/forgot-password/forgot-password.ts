import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-background-slider',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  public loginForm: any;

  constructor(public formBuilder: FormBuilder, private menu: MenuController, public navCtrl: NavController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('Hello ForgotPasswordPage');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }

  doForgotPassword() {
    console.log('Forgot password clicked');
  }

  openLogin(){
    console.log('redirecting to login page')
    this.navCtrl.push('AuthPage');
  }

 

}
