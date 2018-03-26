webpackJsonp([54],{

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { FormBuilder, FormControl, Validator } from '@angular/forms';


var LoginSliderPage = /** @class */ (function () {
    function LoginSliderPage(loadingCtrl, alertCtrl, app) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    LoginSliderPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginSliderPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginSliderPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginSliderPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginSliderPage.prototype.presentLoading = function (message) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Success',
                subTitle: message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    LoginSliderPage.prototype.login = function () {
        this.presentLoading('Thanks for signing up!');
        // this.navCtrl.push(HomePage);
    };
    LoginSliderPage.prototype.signup = function () {
        this.presentLoading('Thanks for signing up!');
        // this.navCtrl.push(HomePage);
    };
    LoginSliderPage.prototype.resetPassword = function () {
        this.presentLoading('An e-mail was sent with your new password.');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], LoginSliderPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('innerSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], LoginSliderPage.prototype, "innerSlider", void 0);
    LoginSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-slider',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/login/login-slider/login-slider.html"*/'<ion-content class="transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <ion-slides #slider  direction="vertical">\n      <ion-slide class="swiper-no-swiping">\n        <div padding>\n          <img class="logo" src="assets/img/logo/logo.png" width="100"/>\n          <ion-slides class="text-slider" autoplay="2000" loop="true">\n            <ion-slide>\n              <h3>Welcome to Shopair</h3>\n              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>\n            </ion-slide>\n            <ion-slide>\n              <h3>Beautifull shop app</h3>\n              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>\n            </ion-slide>\n            <ion-slide>\n              <h3>Easy to customized</h3>\n              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>\n            </ion-slide>\n          </ion-slides>\n          <ion-row>\n            <ion-col col-6>\n              <button ion-button block color="primary" outline (click)="goToLogin()">Log in</button>\n            </ion-col>\n            <ion-col col-6>\n              <button ion-button block (click)="goToSignup()">Create Account</button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-slide>\n      <ion-slide class="zoom swiper-no-swiping">\n        <ion-slides #innerSlider class="content-slider">\n          <ion-slide class="swiper-no-swiping">\n            <div padding-left padding-right text-left>\n              <h1 padding-horizontal>Login</h1>\n              <ion-item padding-right>\n                <ion-label floating>Username</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n              <ion-item padding-right>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password"></ion-input>\n              </ion-item>\n              <div padding>\n                <button ion-button block (click)="login()">Login</button>\n                <button no-padding ion-button clear (click)="slideNext()" color="light">FORGOT PASSWORD?</button>\n              </div>\n              <button small clear text-left margin-top ion-button icon-right clear (click)="goToSignup()">\n                GO TO SIGNUP\n                <ion-icon end name="arrow-down"></ion-icon>\n              </button>\n            </div>\n          </ion-slide>\n          <ion-slide class="swiper-no-swiping">\n            <div padding>\n              <h1 text-left padding-horizontal>Forgot Password?</h1>\n              <p text-left padding-horizontal>We will send the confirmation link to reset your password.</p>\n              <ion-item padding-right>\n                <ion-label floating>E-mail</ion-label>\n                <ion-input type="email"></ion-input>\n              </ion-item>\n              <div padding>\n                <button ion-button block (click)="resetPassword()">RESET PASSWORD</button>\n                <button small ion-button icon-left float-left no-padding clear (click)="slidePrevious()" color="light"><ion-icon name="arrow-back"></ion-icon> GO BACK</button>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </ion-slide>\n      <ion-slide class="zoom swiper-no-swiping">\n        <div padding-left padding-right text-left>\n          <button small text-left margin-bottom ion-button icon-right clear (click)="goToLogin()">\n            GO TO LOGIN\n            <ion-icon end name="arrow-up"></ion-icon>\n          </button>\n          <h1 padding-horizontal>Create account</h1>\n          <p padding-horizontal>Lets join us to get tons of features.</p>\n          <ion-item padding-right>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n          <ion-item padding-right>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password"></ion-input>\n          </ion-item>\n          <ion-item padding-right>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password"></ion-input>\n          </ion-item>\n          <div padding>\n            <button ion-button block (click)="signup()">SIGN UP</button>\n          </div>\n          </div>\n      </ion-slide>\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/login/login-slider/login-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], LoginSliderPage);
    return LoginSliderPage;
}());

//# sourceMappingURL=login-slider.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSliderPageModule", function() { return LoginSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_slider__ = __webpack_require__(1187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginSliderPageModule = /** @class */ (function () {
    function LoginSliderPageModule() {
    }
    LoginSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_slider__["a" /* LoginSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_slider__["a" /* LoginSliderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_slider__["a" /* LoginSliderPage */]
            ]
        })
    ], LoginSliderPageModule);
    return LoginSliderPageModule;
}());

//# sourceMappingURL=login-slider.module.js.map

/***/ })

});
//# sourceMappingURL=54.js.map