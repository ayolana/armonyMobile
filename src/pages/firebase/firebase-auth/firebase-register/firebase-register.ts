import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseAuthProvider } from '../../../../providers/firebase/firebase-auth';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-firebase-register',
  templateUrl: 'firebase-register.html',
})
export class FirebaseRegisterPage {

  loading: any;
  alert: any;
  regisForm: FormGroup;    
  nameRegister: AbstractControl;
  emailRegister: AbstractControl;
  passwordRegister: AbstractControl;

  backgroundImage = 'assets/img/background/background-2.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public fireAuthService: FirebaseAuthProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {

    this.regisForm = this.formBuilder.group({  
      'nameRegister': ['', Validators.compose([Validators.required])],
      'emailRegister': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'passwordRegister': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });

    this.nameRegister = this.regisForm.controls['nameRegister'];
    this.emailRegister = this.regisForm.controls['emailRegister'];
    this.passwordRegister = this.regisForm.controls['passwordRegister'];

  }

  doRegister() {
    this.showLoading();
    var credentials = ({name: this.nameRegister.value, email: this.emailRegister.value, password: this.passwordRegister.value});
    this.fireAuthService.doRegister(credentials).subscribe(
      result => {
        console.log(result);        
        if(this.loading){
          this.loading.dismiss().then(()=>{
            this.alert = this.alertCtrl.create({
              title: (result.message ? 'Error' : 'Success'),
              message: (result.message ? result.message : 'Register Success. You are automatically logged in'),
              buttons: ['OK']
            });
            this.alert.present().then(()=>{
              if(result.uid) this.navCtrl.setRoot('FirebaseListPage');
            });
          });
          this.loading = null; 
        }
      },
      error => {
        this.loading.dismiss();
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
