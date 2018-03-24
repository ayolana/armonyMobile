webpackJsonp([35],{

/***/ 1253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeCallNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeCallNumberPage = /** @class */ (function () {
    function NativeCallNumberPage(callNumber, platform, alertCtrl) {
        this.callNumber = callNumber;
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
    NativeCallNumberPage.prototype.doCall = function (phoneNumber) {
        var _this = this;
        this.callNumber
            .callNumber(phoneNumber, true)
            .then(function (msg) { _this.successMessage = msg; console.log(msg); }, function (err) {
            _this.errorMessage = err;
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works in real device',
                buttons: ['Close']
            });
            alert.present();
        });
    };
    NativeCallNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-call-number',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-call-number/native-call-number.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Call Number</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="doCall(\'+6285123123123\')"> Call : +6285 123 123 123 </button>\n\n  <p> {{ successMessage }} </p>\n  <p> {{ errorMessage }} </p>\n  \n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-call-number/native-call-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeCallNumberPage);
    return NativeCallNumberPage;
}());

//# sourceMappingURL=native-call-number.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeCallNumberPageModule", function() { return NativeCallNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_call_number__ = __webpack_require__(1253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeCallNumberPageModule = /** @class */ (function () {
    function NativeCallNumberPageModule() {
    }
    NativeCallNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_call_number__["a" /* NativeCallNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_call_number__["a" /* NativeCallNumberPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_call_number__["a" /* NativeCallNumberPage */]
            ]
        })
    ], NativeCallNumberPageModule);
    return NativeCallNumberPageModule;
}());

//# sourceMappingURL=native-call-number.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map