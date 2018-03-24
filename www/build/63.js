webpackJsonp([63],{

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
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


var SelectPage = /** @class */ (function () {
    function SelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gaming = "n64";
        this.gender = "f";
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }
    SelectPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    SelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/select/select.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Select</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-select [(ngModel)]="notifications" interface="action-sheet">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Operating System</ion-label>\n      <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n        <ion-option value="dos">DOS</ion-option>\n        <ion-option value="lunix">Linux</ion-option>\n        <ion-option value="mac7">Mac OS 7</ion-option>\n        <ion-option value="mac8">Mac OS 8</ion-option>\n        <ion-option value="win3.1">Windows 3.1</ion-option>\n        <ion-option value="win95">Windows 95</ion-option>\n        <ion-option value="win98">Windows 98</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Music</ion-label>\n      <ion-select [(ngModel)]="music" [selectOptions]="musicAlertOpts">\n        <ion-option>Alice in Chains</ion-option>\n        <ion-option>Green Day</ion-option>\n        <ion-option>Nirvana</ion-option>\n        <ion-option>Pearl Jam</ion-option>\n        <ion-option>Smashing Pumpkins</ion-option>\n        <ion-option>Soundgarden</ion-option>\n        <ion-option (select)="stpSelect()">Stone Temple Pilots</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">January</ion-option>\n        <ion-option value="02">February</ion-option>\n        <ion-option value="03">March</ion-option>\n        <ion-option value="04">April</ion-option>\n        <ion-option value="05">May</ion-option>\n        <ion-option value="06">June</ion-option>\n        <ion-option value="07">July</ion-option>\n        <ion-option value="08">August</ion-option>\n        <ion-option value="09">September</ion-option>\n        <ion-option value="10">October</ion-option>\n        <ion-option value="11">November</ion-option>\n        <ion-option value="12" checked="true">December</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n        <ion-option>1989</ion-option>\n        <ion-option>1990</ion-option>\n        <ion-option>1991</ion-option>\n        <ion-option>1992</ion-option>\n        <ion-option>1993</ion-option>\n        <ion-option checked="true">1994</ion-option>\n        <ion-option>1995</ion-option>\n        <ion-option>1996</ion-option>\n        <ion-option>1997</ion-option>\n        <ion-option>1998</ion-option>\n        <ion-option>1999</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/select/select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SelectPage);
    return SelectPage;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageModule", function() { return SelectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__(1178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectPageModule = /** @class */ (function () {
    function SelectPageModule() {
    }
    SelectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectPage */]
            ]
        })
    ], SelectPageModule);
    return SelectPageModule;
}());

//# sourceMappingURL=select.module.js.map

/***/ })

});
//# sourceMappingURL=63.js.map