webpackJsonp([30],{

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeGeolocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeGeolocationPage = /** @class */ (function () {
    function NativeGeolocationPage(platform, geolocation, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        var watch = this.geolocation.watchPosition({
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            _this.realTimeLocation = data.coords.latitude + ', ' + data.coords.longitude;
        }, function (err) {
            _this.errorMessage = err;
            console.log('Error get data', err);
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Cordova is not available',
                buttons: ['Close']
            });
            alert.present();
        });
    }
    NativeGeolocationPage.prototype.getLocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition({})
                .then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
                _this.successMessage = resp.coords.latitude + ', ' + resp.coords.longitude;
                console.log('Your Location : ', _this.successMessage);
            }, function (err) {
                _this.errorMessage = 'Error : ' + err;
                console.log('Error : ', err);
                var alert = _this.alertCtrl.create({
                    title: 'Attention!',
                    subTitle: 'Only works in real device',
                    buttons: ['Close']
                });
                alert.present();
            }).catch(function (error) {
                _this.errorMessage = error;
                console.log('Error : ', error);
                var alert = _this.alertCtrl.create({
                    title: 'Attention!',
                    subTitle: 'Only works in real device',
                    buttons: ['Close']
                });
                alert.present();
            });
        });
    };
    NativeGeolocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-geolocation',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-geolocation/native-geolocation.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Geolocation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  Real Time Location : {{ realTimeLocation }}\n\n  <button ion-button block color="primary" (click)="getLocation()"> Get Location </button>\n\n  <p> {{ successMessage }} </p>\n  <p> {{ errorMessage }} </p>\n  \n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-geolocation/native-geolocation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeGeolocationPage);
    return NativeGeolocationPage;
}());

//# sourceMappingURL=native-geolocation.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeGeolocationPageModule", function() { return NativeGeolocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_geolocation__ = __webpack_require__(1259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeGeolocationPageModule = /** @class */ (function () {
    function NativeGeolocationPageModule() {
    }
    NativeGeolocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_geolocation__["a" /* NativeGeolocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_geolocation__["a" /* NativeGeolocationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_geolocation__["a" /* NativeGeolocationPage */]
            ]
        })
    ], NativeGeolocationPageModule);
    return NativeGeolocationPageModule;
}());

//# sourceMappingURL=native-geolocation.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map