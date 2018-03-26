webpackJsonp([20],{

/***/ 1269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_alert_service__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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




var ProfileSettingsPage = /** @class */ (function () {
    function ProfileSettingsPage(alertService, toastCtrl, camera) {
        this.alertService = alertService;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.placeholderPicture = 'http://api.adorable.io/avatar/200/bob';
        this.enableNotifications = true;
        this.languages = ['English', 'Portuguese', 'French'];
        this.paymentMethods = ['Paypal', 'Credit Card'];
        this.currencies = ['USD', 'BRL', 'EUR'];
        this.user = {
            name: 'Marty Mcfly',
            imageUrl: 'assets/img/avatar/marty-avatar.png'
        };
    }
    ProfileSettingsPage.prototype.toggleNotifications = function () {
        if (this.enableNotifications) {
            this.toastCtrl.create('Notifications enabled.');
        }
        else {
            this.toastCtrl.create('Notifications disabled.');
        }
    };
    ProfileSettingsPage.prototype.updateImage = function (value) {
        this.profilePicture = 'data:image/jpeg;base64,' + value.val();
    };
    ProfileSettingsPage.prototype.updateProfileImage = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 50,
            allowEdit: true,
            cameraDirection: this.camera.Direction.FRONT,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.user.imageUrl = imageData;
        }, function (err) {
            _this.toastCtrl.create('Error: ' + err);
        });
    };
    ProfileSettingsPage.prototype.logOut = function () {
        var _this = this;
        this.alertService.presentAlertWithCallback('Are you sure?', 'This will log you out of this application.').then(function (yes) {
            if (yes) {
                _this.toastCtrl.create('Logged out of the application');
            }
        });
    };
    ProfileSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-profile-settings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/profile/profile-settings/profile-settings.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>User Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-avatar item-start (click)="updateProfileImage()">\n        <img [src]="user.imageUrl ? user.imageUrl : placeholderPicture">\n      </ion-avatar>\n      <p class="username">{{user.name}}</p>\n      <p>Owner</p>\n    </ion-list-header>\n  </ion-list>\n  <ion-list no-border>\n    <ion-list-header>\n      General\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'settings\' item-start></ion-icon>\n      <ion-label>App Language</ion-label>\n      <ion-select [(ngModel)]="language">\n        <ion-option *ngFor="let language of languages" [value]="language">{{language}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-toggle [(ngModel)]="enableNotifications" (click)="toggleNotifications()"></ion-toggle>\n      <ion-label class="label"> Enable notifications </ion-label>\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Currency\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'card\' item-start></ion-icon>\n      <ion-label>Payment Method</ion-label>\n      <ion-select [(ngModel)]="paymentMethod">\n        <ion-option *ngFor="let method of paymentMethods" [value]="method">{{method}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'logo-usd\' item-start></ion-icon>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency">\n        <ion-option *ngFor="let currency of currencies" [value]="currency">{{currency}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Other\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'power\' item-start></ion-icon>\n      <button ion-button (click)="logOut()" item-end>\n      Logout\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/profile/profile-settings/profile-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], ProfileSettingsPage);
    return ProfileSettingsPage;
}());

//# sourceMappingURL=profile-settings.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsPageModule", function() { return ProfileSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_settings__ = __webpack_require__(1269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileSettingsPageModule = /** @class */ (function () {
    function ProfileSettingsPageModule() {
    }
    ProfileSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__profile_settings__["a" /* ProfileSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile_settings__["a" /* ProfileSettingsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__profile_settings__["a" /* ProfileSettingsPage */]
            ]
        })
    ], ProfileSettingsPageModule);
    return ProfileSettingsPageModule;
}());

//# sourceMappingURL=profile-settings.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map