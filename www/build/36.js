webpackJsonp([36],{

/***/ 1254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeAppRatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeAppRatePage = /** @class */ (function () {
    function NativeAppRatePage(appRate, platform, alertCtrl) {
        // if (!this.platform.is('cordova')) {
        //   console.warn('Cordova is not available');
        //   const alert = this.alertCtrl.create({
        //     title: 'Attention!',
        //     subTitle: 'Cordova is not available',
        //     buttons: ['Close']
        //   });
        //   alert.present();
        // }
        this.appRate = appRate;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // set certain preferences
        this.appRate.preferences.storeAppURL = {
            ios: '<app_id>',
            android: 'market://details?id=<package_name>',
            windows: 'ms-windows-store://review/?ProductId=<store_id>'
        };
        this.appRate.promptForRating(true);
        // or, override the whole preferences object
        this.appRate.preferences = {
            usesUntilPrompt: 3,
            storeAppURL: {
                ios: '<app_id>',
                android: 'market://details?id=<package_name>',
                windows: 'ms-windows-store://review/?ProductId=<store_id>'
            }
        };
        this.appRate.promptForRating(false);
    }
    NativeAppRatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-app-rate',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-app-rate/native-app-rate.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Apprate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-app-rate/native-app-rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeAppRatePage);
    return NativeAppRatePage;
}());

//# sourceMappingURL=native-app-rate.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAppRatePageModule", function() { return NativeAppRatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_app_rate__ = __webpack_require__(1254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeAppRatePageModule = /** @class */ (function () {
    function NativeAppRatePageModule() {
    }
    NativeAppRatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_app_rate__["a" /* NativeAppRatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_app_rate__["a" /* NativeAppRatePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_app_rate__["a" /* NativeAppRatePage */]
            ]
        })
    ], NativeAppRatePageModule);
    return NativeAppRatePageModule;
}());

//# sourceMappingURL=native-app-rate.module.js.map

/***/ })

});
//# sourceMappingURL=36.js.map