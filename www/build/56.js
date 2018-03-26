webpackJsonp([56],{

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInstagramPage; });
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


var LoginInstagramPage = /** @class */ (function () {
    function LoginInstagramPage(loadingCtrl, alertCtrl, app) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.backgroundImage = 'assets/img/background/background-5.jpg';
        // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
        // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
        // A programmatically way to make a nice rainbow effect, there you go.
        // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/
        this.colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        this.step = 0;
        // color table indices for:
        // [current color left,next color left,current color right,next color right]
        this.colorIndices = [0, 1, 2, 3];
        // transition speed
        this.gradientSpeed = 0.00005;
        this.gradient = '';
    }
    LoginInstagramPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Logged in!',
                subTitle: 'Thanks for logging in.',
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    LoginInstagramPage.prototype.goToSignup = function () {
        // this.navCtrl.push(SignupPage);
    };
    LoginInstagramPage.prototype.updateGradient = function () {
        var _this = this;
        var c00 = this.colors[this.colorIndices[0]];
        var c01 = this.colors[this.colorIndices[1]];
        var c10 = this.colors[this.colorIndices[2]];
        var c11 = this.colors[this.colorIndices[3]];
        var istep = 1 - this.step;
        var r1 = Math.round(istep * c00[0] + this.step * c01[0]);
        var g1 = Math.round(istep * c00[1] + this.step * c01[1]);
        var b1 = Math.round(istep * c00[2] + this.step * c01[2]);
        var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
        var r2 = Math.round(istep * c10[0] + this.step * c11[0]);
        var g2 = Math.round(istep * c10[1] + this.step * c11[1]);
        var b2 = Math.round(istep * c10[2] + this.step * c11[2]);
        var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        this.gradient = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))";
        this.step += this.gradientSpeed;
        if (this.step >= 1) {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3];
            // pick two new target color indices
            // do not pick the same as the current one
            this.colorIndices[1] =
                (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
            this.colorIndices[3] =
                (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
        }
        setInterval(function () { _this.updateGradient(); }, 40);
    };
    LoginInstagramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-instagram',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/login/login-instagram/login-instagram.html"*/'<ion-content padding class="transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <img class="logo" src="assets/img/logo/logo-instagram.png" />\n  <div padding>\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <button ion-button block outline (click)="login()" color="light" class="login-button">Login</button>\n  </div>\n  <div class="strike">\n    <span>OR</span>\n  </div>\n  <button ion-button block clear (click)="login()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="footer">\n    <div (click)="goToSignup()">\n      <span>Don\'t have an account? <strong>Sign up here</strong>.</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/login/login-instagram/login-instagram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], LoginInstagramPage);
    return LoginInstagramPage;
}());

//# sourceMappingURL=login-instagram.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInstagramPageModule", function() { return LoginInstagramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_instagram__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginInstagramPageModule = /** @class */ (function () {
    function LoginInstagramPageModule() {
    }
    LoginInstagramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_instagram__["a" /* LoginInstagramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_instagram__["a" /* LoginInstagramPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_instagram__["a" /* LoginInstagramPage */]
            ]
        })
    ], LoginInstagramPageModule);
    return LoginInstagramPageModule;
}());

//# sourceMappingURL=login-instagram.module.js.map

/***/ })

});
//# sourceMappingURL=56.js.map