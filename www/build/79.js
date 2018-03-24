webpackJsonp([79],{

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentPage; });
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



var SegmentPage = /** @class */ (function () {
    function SegmentPage(platform, navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = "puppies";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    SegmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-segment',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/components/segment/segment.html"*/'<ion-header >\n\n  <ion-navbar color="primary" no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Segments\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-puppy-2.jpg">\n        </ion-thumbnail>\n        <h2>Oscar</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-puppy-4.jpg">\n        </ion-thumbnail>\n        <h2>Zoey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-puppy-3.jpg">\n        </ion-thumbnail>\n        <h2>Otto</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-kitten-3.jpg">\n        </ion-thumbnail>\n        <h2>Milo</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-kitten-4.jpg">\n        </ion-thumbnail>\n        <h2>Bandit</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-kitten-2.jpg">\n        </ion-thumbnail>\n        <h2>Nala</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ducklings\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-duckling-1.jpg">\n        </ion-thumbnail>\n        <h2>Daffy</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-duckling-2.jpg">\n        </ion-thumbnail>\n        <h2>Huey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-duckling-3.jpg">\n        </ion-thumbnail>\n        <h2>Dewey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/segment/thumbnail-duckling-4.jpg">\n        </ion-thumbnail>\n        <h2>Louie</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/components/segment/segment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SegmentPage);
    return SegmentPage;
}());

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function() { return SegmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__segment__ = __webpack_require__(1127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SegmentPageModule = /** @class */ (function () {
    function SegmentPageModule() {
    }
    SegmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__segment__["a" /* SegmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__segment__["a" /* SegmentPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__segment__["a" /* SegmentPage */]
            ]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
}());

//# sourceMappingURL=segment.module.js.map

/***/ })

});
//# sourceMappingURL=79.js.map