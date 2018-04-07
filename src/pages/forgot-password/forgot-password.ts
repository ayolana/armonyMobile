import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, AlertController,  LoadingController, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FlashProvider } from '../../providers/flash/flash';

@IonicPage()
@Component({
  selector: 'page-login-background-slider',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  data: any;
  loading: any;

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  private forgotForm: FormGroup;


  constructor(public formBuilder: FormBuilder, private flashProvider: FlashProvider, public alertCtrl: AlertController, public authProvider: AuthProvider, public loadingCtrl: LoadingController, private menu: MenuController, public navCtrl: NavController) {
    this.forgotForm = formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello ForgotPasswordPage');
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }

  presentLoading(message, title) {
    const loading = this.loadingCtrl.create({
      duration: 10
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  doForgotPassword() {
    if (!this.forgotForm.valid) {
      // console.log('Invalid or empty data');
      this.flashProvider.show('Email cannot be empty!', 4000, 'danger');
    }else{
      console.log(this.forgotForm.value);
      this.showLoader();

      this.authProvider.forgot(this.forgotForm.value.email).then((result) => {
        this.loading.dismiss();
        console.log(result)
        // this.presentLoading('Email cannot be empty', 'Error')
        
      }, (err) => {
        this.loading.dismiss();
        console.log(err)
        this.presentLoading('The credentials do not match our records', 'Error');
      });

      
    }
  }

  openLogin(){
    console.log('redirecting to login page')
    this.navCtrl.push('AuthPage');
  }

 

}
