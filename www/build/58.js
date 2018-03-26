webpackJsonp([58],{

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginBackgroundSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginBackgroundSliderPage = /** @class */ (function () {
    function LoginBackgroundSliderPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required])]
        });
    }
    LoginBackgroundSliderPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginBackgroundSlider Page');
    };
    LoginBackgroundSliderPage.prototype.openResetPassword = function () {
        console.log('Reset password clicked');
    };
    LoginBackgroundSliderPage.prototype.doLogin = function () {
        if (!this.loginForm.valid) {
            console.log('Invalid or empty data');
        }
        else {
            var userEmail = this.loginForm.value.email;
            var userPassword = this.loginForm.value.password;
            console.log('user data', userEmail, userPassword);
        }
    };
    LoginBackgroundSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-background-slider',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/login/login-background-slider/login-background-slider.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n    </ion-slide>\n  </ion-slides>\n  <div class="login-container">\n    <img class="logo" src="assets/img/logo/logo.png" />\n    <form (submit)="doLogin()">\n      <strong>Login:</strong>\n      <ion-item>\n        <ion-input type="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <button ion-button margin color="danger">LOGIN</button>\n      <p (click)="openResetPassword()"><strong>Forgot your password?</strong></p>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/login/login-background-slider/login-background-slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginBackgroundSliderPage);
    return LoginBackgroundSliderPage;
}());

//# sourceMappingURL=login-background-slider.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPageModule", function() { return LoginBackgroundSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_background_slider__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginBackgroundSliderPageModule = /** @class */ (function () {
    function LoginBackgroundSliderPageModule() {
    }
    LoginBackgroundSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_background_slider__["a" /* LoginBackgroundSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_background_slider__["a" /* LoginBackgroundSliderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_background_slider__["a" /* LoginBackgroundSliderPage */]
            ]
        })
    ], LoginBackgroundSliderPageModule);
    return LoginBackgroundSliderPageModule;
}());

//# sourceMappingURL=login-background-slider.module.js.map

/***/ })

});
//# sourceMappingURL=58.js.map