import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, AlertController, NavController, Slides, NavParams, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthProvider} from '../../providers/auth/auth';
import { ConstantVariable } from "../../app/constant-variable";

const SERVER_URL: any = {
  getNormal: ConstantVariable.APIURL + 'auth/config/settings',
  getImageUrl: ConstantVariable.IMAGEURL,
};
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-slider',
  templateUrl: 'auth.html',
})
export class AuthPage {
  films: Observable<any>;
  settings: any;
  coop_details: any;
  data: any;
  loading: any;
  imageUrl: String;
  loginData = { username: '', password: '' };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private menu: MenuController,
              public alertCtrl: AlertController,
              public httpClient: HttpClient, 
              public loadingCtrl: LoadingController, 
              public authProvider: AuthProvider) {
    
    this.settings = this.authProvider.getConfigData()
      .then(
        data => {
          this.settings = data
          this.coop_details = this.settings.coop_details
        }
      );
    this.imageUrl = (SERVER_URL.getImageUrl);
  }

  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(0);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
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

  login() {
    this.presentLoading('Thanks for signing up!', 'Success');
    // this.navCtrl.push(HomePage);
  }

  doLogin() {
    console.log(this.loginData)
    if(this.loginData.username.length < 1 || this.loginData.password.length < 1){
      this.presentLoading('Username or Password cannot be empty', 'Error')
      // this.loading.dismiss();
    }else{

      this.showLoader();
      this.authProvider.login(this.loginData).then((result) => {
        this.loading.dismiss();
        this.data = result;
        this.authProvider.storeUser(this.data.user).then(storedUser => {
          // console.log('StoredUser :' + storedUser)
          this.navCtrl.push('Homev1Page');
        })
      }, (err) => {
        this.loading.dismiss();
        console.log(err)
        this.presentLoading('The credentials do not match our records', 'Error');
      });
    }
  }


  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  signup() {
    this.presentLoading('Thanks for signing up!', 'Success');
    // this.navCtrl.push(HomePage);
  }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.', 'Success');
  }


}
