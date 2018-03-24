import { Component } from '@angular/core';
import { MenuController, AlertController, NavController, IonicPage } from 'ionic-angular';
import { LISTMENUFIREBASELOGIN, LISTMENUFIREBASEUNLOGIN } from '../../app/global.setting';
import { FirebaseAuthProvider } from '../../providers/firebase/firebase-auth';

@IonicPage()
@Component({
  selector: 'page-firebase-list',
  templateUrl: 'firebase-list.html',
})
export class FirebaseListPage {

  rootPage: any;
  items: Array<{ title: string, component: any }>;

  constructor(
    public navCtrl: NavController,
    public fireAuthService: FirebaseAuthProvider,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
  ) {
    this.rootPage = 'HomeListPage';
    this.items    = LISTMENUFIREBASEUNLOGIN;

    this.fireAuthService.afAuth.authState.subscribe(
      result=>
      {
        if(result !== null) {
          this.items    = LISTMENUFIREBASELOGIN;
        }
        else {
          this.items    = LISTMENUFIREBASEUNLOGIN;
        }
      }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
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
            .subscribe(
            allowed => {
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
}
