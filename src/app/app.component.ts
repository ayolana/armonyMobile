
import { Component, ViewChild } from '@angular/core';
import { Events, Config, AlertController, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { ConstantVariable } from './constant-variable';
import { AppState, PAGES } from './global.setting';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseAuthProvider } from '../providers/firebase/firebase-auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'Homev1Page';
  pages:any[];
  activePage = new Subject();
  userData:any;
  isLogin:boolean = false;

  constructor(
    public platform: Platform,
    public events: Events,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public push: Push,
    public global: AppState,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public translate:TranslateService,
    public config:Config,
    // public navCtrl: NavController, 
    public fireAuthService:FirebaseAuthProvider,
  ) {
    this.initTranslate();
    this.initializeApp();

    //Main Menu
    this.pages = PAGES;
    //user data after login
    this.userData = {
      name:"Ionium 2",
      email:"ionicpremium@gmail.com",
      photo:""
    }

    this.fireAuthService.afAuth.authState.subscribe(
      result => {
        if(result !== null) {
          console.log(result);
          this.fireAuthService.getUserDB(result).snapshotChanges().subscribe(result=>{
            this.userData = result[0].payload.val();
            console.log("new Current User : ", this.userData);
            // Enables then open the selected menu
            this.menuCtrl.enable(true, 'menu-avatar');
            this.menuCtrl.open('menu-avatar');
            this.isLogin = true;
          });
        }
        else{
          this.isLogin = false;
          this.userData = {
            name:"Ionium 2",
            email:"ionicpremium@gmail.com",
            photo:""
          };
        }
      }
    );

    this.events.subscribe('photo:selected', (photo) => {
      console.log(photo);
    });

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });      
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      //  Set your language here
       this.translate.use('en');
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      this.initPushNotification();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // firebase.initializeApp(firebaseConfigEx);
  }

  openPage(pages) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(pages.page);
    this.activePage.next(pages);
  }

  doLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure to logout',
      buttons: [
        {
          text: 'No',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.fireAuthService.doLogout()
            .subscribe(allowed => {
              console.log(allowed);
              // Enables then open the selected menu
              this.menuCtrl.enable(true, 'menu-avatar');
              this.menuCtrl.open('menu-avatar');
            });
          }
        }
      ]
    });
    confirm.present();
  }

  //PUSH NOTIFICATION
  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {},
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token -> ' + data.registrationId);
      //TODO - send device token to server
    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              this.nav.push('NotifDetailPage', { message: data.message });
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        this.nav.push('NotifDetailPage', { message: data.message });
        console.log('Push notification clicked');
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }
  
}

