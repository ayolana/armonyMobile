webpackJsonp([31],{

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeEmailComposerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeEmailComposerPage = /** @class */ (function () {
    function NativeEmailComposerPage(emailComposer, platform, alertCtrl) {
        var _this = this;
        this.emailComposer = emailComposer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.emailComposer.isAvailable()
            .then(function (available) {
            if (available) {
                //Now we know we can send
            }
        }, function (err) {
            _this.errorMessage = err;
            console.log(err);
        });
        this.email = {
            to: 'ionicpremium@gmail.com',
            //cc: 'info@ionicpremium.com',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [
                'file://img/logo.png',
                'res://icon.png',
                'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                'file://README.pdf'
            ],
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
    }
    NativeEmailComposerPage.prototype.sendMail = function () {
        var _this = this;
        // Send a text message using default options
        this.emailComposer.open(this.email)
            .then(function (email) { _this.successMessage = email; console.log(email); }, function (err) {
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
    NativeEmailComposerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-email-composer',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-email-composer/native-email-composer.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Email Composer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="sendMail()"> Send Mail </button>\n\n  <p> {{ successMessage }} </p>\n  <p> {{ errorMessage }} </p>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-email-composer/native-email-composer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeEmailComposerPage);
    return NativeEmailComposerPage;
}());

//# sourceMappingURL=native-email-composer.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeEmailComposerPageModule", function() { return NativeEmailComposerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_email_composer__ = __webpack_require__(1258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeEmailComposerPageModule = /** @class */ (function () {
    function NativeEmailComposerPageModule() {
    }
    NativeEmailComposerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_email_composer__["a" /* NativeEmailComposerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_email_composer__["a" /* NativeEmailComposerPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_email_composer__["a" /* NativeEmailComposerPage */]
            ]
        })
    ], NativeEmailComposerPageModule);
    return NativeEmailComposerPageModule;
}());

//# sourceMappingURL=native-email-composer.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map