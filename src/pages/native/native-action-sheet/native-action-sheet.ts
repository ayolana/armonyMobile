import { Component  } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
// import { ActionSheet  } from '@ionic-native/action-sheet';

@IonicPage()
@Component({
  selector: 'page-native-action-sheet',
  templateUrl: 'native-action-sheet.html',
})
export class NativeActionSheetPage {

  buttonLabels: any;
  errorMessage: string;

  constructor(
    // private actionSheet: ActionSheet, 
    public platform: Platform,
    public alertCtrl: AlertController
  ) {
    // if (!this.platform.is('cordova')) {
    //   console.warn('Cordova is not available');
    //   const alert = this.alertCtrl.create({
    //     title: 'Attention!',
    //     subTitle: 'Cordova is not available',
    //     buttons: ['Close']
    //   });
    //   alert.present();
    // }
  }

  showAction() {
    // this.buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    // this.actionSheet.show({
    //   title: 'What do you want with this image?',
    //   subtitle: 'Choose an action',
    //   buttonLabels: this.buttonLabels,
    //   addCancelButtonWithLabel: 'Cancel',
    //   addDestructiveButtonWithLabel: 'Delete',
    //   androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
    //   destructiveButtonLast: true
    // }).then(
    //   (buttonIndex: number) => {
    //     console.log('Button pressed: ' + buttonIndex);
    //   },
    //   (err) => { 
    //     this.errorMessage = err; 
    //     console.log(err);
    //     const alert = this.alertCtrl.create({
    //       title: 'Attention!',
    //       subTitle: 'Only works in real device',
    //       buttons: ['Close']
    //     });
    //     alert.present();
    //    }
    // );
  }

}
