import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IonicPage, LoadingController, AlertController, NavController, NavParams, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { ConstantVariable } from "../../app/constant-variable";

const SERVER_URL: any = {
  getNormal: ConstantVariable.APIURL + 'auth/config/settings',
  getImageUrl: ConstantVariable.IMAGEURL,
};

@IonicPage()
@Component({
  selector: 'page-login-background-slider',
  templateUrl: 'auth.html'
})
export class AuthPage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  public loginForm: any;
  films: Observable<any>;
  settings: any;
  coop_details: any;
  data: any;
  loading: any;
  isLogin: any;
  imageUrl: String;
  private login: FormGroup;
  loginData = { username: '', password: '' };

  constructor(public formBuilder: FormBuilder,
              public navCtrl: NavController,
              public navParams: NavParams,
              private menu: MenuController,
              public alertCtrl: AlertController,
              public httpClient: HttpClient,
              public loadingCtrl: LoadingController,
              public authProvider: AuthProvider) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });

    this.isLogin = true;
    this.settings = this.authProvider.getConfigData()
      .then(
        data => {
          this.settings = data
          this.coop_details = this.settings.coop_details
          // console.log(data)
          console.log(this.settings.coop_details)
        }
      );
    this.imageUrl = (SERVER_URL.getImageUrl);

    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  ionViewDidLoad() {
    console.log('Hello Auth Page');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }

  logForm() {
    console.log(this.login.value)
  }

  openResetPassword() {
    console.log('Reset password clicked');
    this.navCtrl.push('ForgotPasswordPage');
  }

  presentLoading(message, title) {
    const loading = this.loadingCtrl.create({
      duration: 500
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


  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }

  doLogin() {
    console.log(this.login)
    console.log(this.login.value)

    if (!this.login.valid) {
      console.log('Invalid or empty data');
      this.presentLoading('Username or Password cannot be empty', 'Error')
      // this.loading.dismiss();
    } else {
      console.log('Passed');
      const userEmail = this.login.value.username;
      const userPassword = this.login.value.password;

      console.log('user data', userEmail, userPassword);

      this.showLoader();
      this.authProvider.login(this.login.value).then((result) => {
        this.loading.dismiss();
        this.data = result;
        this.authProvider.storeUser(this.data.user).then(storedUser => {
          this.navCtrl.setRoot('Homev1Page')
        })
      }, (err) => {
        this.loading.dismiss();
        console.log(err)
        this.presentLoading('The credentials do not match our records', 'Error');
      });
    }
  }

}
