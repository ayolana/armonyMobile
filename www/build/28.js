webpackJsonp([28],{

/***/ 1261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeLaunchNavigatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeLaunchNavigatorPage = /** @class */ (function () {
    function NativeLaunchNavigatorPage(launchNavigator, platform, alertCtrl) {
        this.launchNavigator = launchNavigator;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
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
    NativeLaunchNavigatorPage.prototype.showLaunchNavigator = function () {
        var _this = this;
        this.launchNavigator.navigate('Toronto, ON', {
            start: 'London, ON',
        })
            .then(function (success) { _this.successMessage = success; console.log('Launched navigator'); }, function (err) {
            _this.errorMessage = 'Error launching navigator. ' + err;
            console.log('Error launching navigator', err);
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works in real device',
                buttons: ['Close']
            });
            alert.present();
        });
    };
    NativeLaunchNavigatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-launch-navigator',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-launch-navigator/native-launch-navigator.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Launch Navigator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="showLaunchNavigator()"> Launch Navigator </button>\n  \n  <p> {{ successMessage }} </p>\n  <p> {{ errorMessage }} </p>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-launch-navigator/native-launch-navigator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeLaunchNavigatorPage);
    return NativeLaunchNavigatorPage;
}());

//# sourceMappingURL=native-launch-navigator.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeLaunchNavigatorPageModule", function() { return NativeLaunchNavigatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_launch_navigator__ = __webpack_require__(1261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeLaunchNavigatorPageModule = /** @class */ (function () {
    function NativeLaunchNavigatorPageModule() {
    }
    NativeLaunchNavigatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_launch_navigator__["a" /* NativeLaunchNavigatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_launch_navigator__["a" /* NativeLaunchNavigatorPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_launch_navigator__["a" /* NativeLaunchNavigatorPage */]
            ]
        })
    ], NativeLaunchNavigatorPageModule);
    return NativeLaunchNavigatorPageModule;
}());

//# sourceMappingURL=native-launch-navigator.module.js.map

/***/ })

});
//# sourceMappingURL=28.js.map