webpackJsonp([29],{

/***/ 1260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeInstagramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_instagram__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NativeInstagramPage = /** @class */ (function () {
    function NativeInstagramPage(camera, instagram, platform, alertCtrl) {
        this.camera = camera;
        this.instagram = instagram;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.has_taked_picture = false;
        this.DEFAULT_IMAGE = 'http://placehold.it/500x500';
        this.taked_picture = this.DEFAULT_IMAGE;
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
    NativeInstagramPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.has_taked_picture = true;
            _this.taked_picture = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
            _this.errorMessageTP = err;
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works in real device',
                buttons: ['Close']
            });
            alert.present();
        });
    };
    NativeInstagramPage.prototype.shareImage = function () {
        var _this = this;
        this.instagram.share(this.taked_picture, this.caption)
            .then(function (success) {
            _this.taked_picture = _this.DEFAULT_IMAGE;
            _this.has_taked_picture = false;
            _this.successMessageIG = success;
            console.log('Shared!', success);
        }, function (err) {
            _this.errorMessageIG = err;
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works in real device',
                buttons: ['Close']
            });
            alert.present();
        })
            .catch(function (error) {
            console.error(error);
            _this.errorMessageIG = error;
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works in real device',
                buttons: ['Close']
            });
            alert.present();
        });
    };
    NativeInstagramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-instagram',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-instagram/native-instagram.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Instagram</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="takePicture()"> Take Picture </button>\n  \n  <ion-card text-center>\n    <img [src]="taked_picture" />\n  </ion-card>\n\n  <div class="form-container" [hidden]="!has_taked_picture">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked> Caption </ion-label>\n        <ion-input type="text" [value]="caption" [(ngModel)]="caption"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button full color="secondary" (click)=\'shareImage();\'>Share Image</button>\n    </div>\n  </div>\n  \n  <p> {{ errorMessageTP }} </p>\n  <p> {{ successMessageIG }} </p>\n  <p> {{ errorMessageIG }} </p>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-instagram/native-instagram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_instagram__["a" /* Instagram */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeInstagramPage);
    return NativeInstagramPage;
}());

//# sourceMappingURL=native-instagram.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeInstagramPageModule", function() { return NativeInstagramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_instagram__ = __webpack_require__(1260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeInstagramPageModule = /** @class */ (function () {
    function NativeInstagramPageModule() {
    }
    NativeInstagramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_instagram__["a" /* NativeInstagramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_instagram__["a" /* NativeInstagramPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_instagram__["a" /* NativeInstagramPage */]
            ]
        })
    ], NativeInstagramPageModule);
    return NativeInstagramPageModule;
}());

//# sourceMappingURL=native-instagram.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map