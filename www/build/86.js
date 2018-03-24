webpackJsonp([86],{

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatetimePage = /** @class */ (function () {
    function DatetimePage() {
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    DatetimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-datetime',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/components/datetime/datetime.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Datetime</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Location"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Start Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ends</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n    </ion-item>\n\n    <button ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-note item-end>Never</ion-note>\n    </button>\n\n    <button ion-item>\n      <ion-label>Travel Time</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <button ion-item>\n      <ion-label>Alert</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/components/datetime/datetime.html"*/,
        })
    ], DatetimePage);
    return DatetimePage;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageModule", function() { return DatetimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datetime__ = __webpack_require__(1119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DatetimePageModule = /** @class */ (function () {
    function DatetimePageModule() {
    }
    DatetimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* DatetimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* DatetimePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* DatetimePage */]
            ]
        })
    ], DatetimePageModule);
    return DatetimePageModule;
}());

//# sourceMappingURL=datetime.module.js.map

/***/ })

});
//# sourceMappingURL=86.js.map