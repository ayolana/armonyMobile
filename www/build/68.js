webpackJsonp([68],{

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseRegisterPage = /** @class */ (function () {
    function FirebaseRegisterPage(loadingCtrl, alertCtrl, fireAuthService, navCtrl, navParams, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fireAuthService = fireAuthService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.backgroundImage = 'assets/img/background/background-2.jpg';
        this.regisForm = this.formBuilder.group({
            'nameRegister': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            'emailRegister': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'passwordRegister': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1)])]
        });
        this.nameRegister = this.regisForm.controls['nameRegister'];
        this.emailRegister = this.regisForm.controls['emailRegister'];
        this.passwordRegister = this.regisForm.controls['passwordRegister'];
    }
    FirebaseRegisterPage.prototype.doRegister = function () {
        var _this = this;
        this.showLoading();
        var credentials = ({ name: this.nameRegister.value, email: this.emailRegister.value, password: this.passwordRegister.value });
        this.fireAuthService.doRegister(credentials).subscribe(function (result) {
            console.log(result);
            if (_this.loading) {
                _this.loading.dismiss().then(function () {
                    _this.alert = _this.alertCtrl.create({
                        title: (result.message ? 'Error' : 'Success'),
                        message: (result.message ? result.message : 'Register Success. You are automatically logged in'),
                        buttons: ['OK']
                    });
                    _this.alert.present().then(function () {
                        if (result.uid)
                            _this.navCtrl.setRoot('FirebaseListPage');
                    });
                });
                _this.loading = null;
            }
        }, function (error) {
            _this.loading.dismiss();
            _this.showError(error);
        });
    };
    FirebaseRegisterPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FirebaseRegisterPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    FirebaseRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-firebase-register',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/firebase/firebase-auth/firebase-register/firebase-register.html"*/'<ion-content padding class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">    \n  <ion-header no-border>\n    <ion-navbar transparent>\n    </ion-navbar>\n  </ion-header>\n  <div class="login-container">\n    <img class="logo" src="assets/img/logo/logo.png" />\n    <h2>Register</h2>\n    <ion-row>\n      <form [formGroup]="regisForm" (ngSubmit)="doRegister()" #registerForm="ngForm">                \n        <ion-item padding-right>\n          <ion-label>Nama</ion-label>\n          <ion-input type="text" formControlName="nameRegister" ></ion-input>                \n        </ion-item>\n        <ion-item padding-right>\n          <ion-label>Email</ion-label>\n          <ion-input type="text" formControlName="emailRegister" ></ion-input>                \n        </ion-item>\n        <ion-item padding-right>\n          <ion-label>Password</ion-label>\n          <ion-input type="password" formControlName="passwordRegister" ></ion-input>                \n        </ion-item>\n        <div>\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">SIGN UP</button>\n        </div>\n      </form>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/firebase/firebase-auth/firebase-register/firebase-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase_auth__["a" /* FirebaseAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], FirebaseRegisterPage);
    return FirebaseRegisterPage;
}());

//# sourceMappingURL=firebase-register.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseRegisterPageModule", function() { return FirebaseRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_register__ = __webpack_require__(1137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirebaseRegisterPageModule = /** @class */ (function () {
    function FirebaseRegisterPageModule() {
    }
    FirebaseRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firebase_register__["a" /* FirebaseRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firebase_register__["a" /* FirebaseRegisterPage */]),
            ],
        })
    ], FirebaseRegisterPageModule);
    return FirebaseRegisterPageModule;
}());

//# sourceMappingURL=firebase-register.module.js.map

/***/ })

});
//# sourceMappingURL=68.js.map