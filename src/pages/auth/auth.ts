import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthProvider} from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private menu: MenuController, public httpClient: HttpClient, public authProvider: AuthProvider) {
    // this.menuCtrl.enable(false, 'menu-avatar');
    // this.menuCtrl.enable(false);
    // this.settings = this.httpClient.get('https://swapi.co/api/films');
    this.settings = this.authProvider.getConfigData()
      .then(
        data => {
          this.settings = data
        }
      );
    
      console.log(this.settings);

    // this.films = this.httpClient.get('https://swapi.co/api/films');
    // this.films
    //   .subscribe(data => {
    //     console.log('my data: ', data);
    //   })

  }

  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
    
    this.storage.set('name', 'Max');

    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });

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

}
