import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseAuthProvider } from '../../../../providers/firebase/firebase-auth';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-firebase-login',
  templateUrl: 'firebase-login.html',
})
export class FirebaseLoginPage {

  loginForm: FormGroup;
  loading: any;
  alert: any;
  email: AbstractControl;
  password: AbstractControl;

  backgroundImage = 'assets/img/background/background-2.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public fireAuthService: FirebaseAuthProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({  
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });

    this.email    = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];

  }

  public doLogin() {
    this.showLoading();

    var credentials = ({email: this.email.value, password: this.password.value});
    this.fireAuthService.doLogin(credentials).then(
      allowed => {
        console.log(allowed);
        if(this.loading || this.alert){ 
          this.loading.dismiss().then(()=>{
            if (allowed[0]) {
              this.navCtrl.setRoot('FirebaseListPage');
            } else {
              this.showError(allowed[1]);
            }
          });
        }
      },
      error => {
        this.showError(error);
        this.loading.dismiss();        
      }
    );
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
