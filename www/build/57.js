webpackJsonp([57],{

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginBackgroundVideoPage; });
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


var LoginBackgroundVideoPage = /** @class */ (function () {
    function LoginBackgroundVideoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // It's interesting to remove the src and put it back
    // when entering and leaving the page so there are no memory leaks.
    LoginBackgroundVideoPage.prototype.ionViewWillLeave = function () {
        // the .nativeElement property of the ViewChild is the reference to the tag <video>
        this.player.nativeElement.src = '';
        this.player.nativeElement.load();
    };
    LoginBackgroundVideoPage.prototype.ionViewWillEnter = function () {
        this.player.nativeElement.src = 'assets/video/background-480.mp4';
        this.player.nativeElement.load();
    };
    LoginBackgroundVideoPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginBackgroundVideo Page');
    };
    LoginBackgroundVideoPage.prototype.goToSignup = function () {
        console.log('Signup clicked');
    };
    LoginBackgroundVideoPage.prototype.goToLogin = function () {
        console.log('Login clicked');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('player'),
        __metadata("design:type", Object)
    ], LoginBackgroundVideoPage.prototype, "player", void 0);
    LoginBackgroundVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-background-video',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/login/login-background-video/login-background-video.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen padding text-center>\n  <img class="logo" src="assets/img/logo/logo.png" />\n  <div class="buttons">\n    <button ion-button class="login-button facebook" (click)="goToLogin()">Continue with Facebook</button>\n    <button ion-button class="login-button google" (click)="goToLogin()">Login</button>\n    <button ion-button class="login-button" color="dark" (click)="goToSignup()">Create account</button>\n  </div>\n  <video #player playsinline autoplay muted loop poster="assets/video-cover.jpg" id="bgvid">\n    <source src="assets/video/background-480.mp4" type="video/mp4"> Your browser does not support the video tag.\n  </video>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/login/login-background-video/login-background-video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], LoginBackgroundVideoPage);
    return LoginBackgroundVideoPage;
}());

//# sourceMappingURL=login-background-video.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundVideoPageModule", function() { return LoginBackgroundVideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_background_video__ = __webpack_require__(1184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginBackgroundVideoPageModule = /** @class */ (function () {
    function LoginBackgroundVideoPageModule() {
    }
    LoginBackgroundVideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_background_video__["a" /* LoginBackgroundVideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_background_video__["a" /* LoginBackgroundVideoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_background_video__["a" /* LoginBackgroundVideoPage */]
            ]
        })
    ], LoginBackgroundVideoPageModule);
    return LoginBackgroundVideoPageModule;
}());

//# sourceMappingURL=login-background-video.module.js.map

/***/ })

});
//# sourceMappingURL=57.js.map