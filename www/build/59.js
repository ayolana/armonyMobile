webpackJsonp([59],{

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homev2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global_setting__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Homev2Page = /** @class */ (function () {
    function Homev2Page(navCtrl) {
        this.navCtrl = navCtrl;
        //Main Menu
        this.pages = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["p" /* PAGES */];
    }
    Homev2Page.prototype.showList = function (pages) {
        this.navCtrl.setRoot(pages.page);
    };
    Homev2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-homev2',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/home/homev2/homev2.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Dashboard v2 </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-slides pager autoplay="1000" loop="true" speed="1000">\n    <ion-slide>\n      <div class="slide-item" style="background-image: url(assets/img/home/2.jpg)"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class="slide-item" style="background-image: url(assets/img/home/3.jpg)"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class="slide-item" style="background-image: url(assets/img/home/4.jpg)"></div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list>\n    <div *ngFor="let item of pages; let i = index">\n      <ion-item (click)="showList(item)">\n        <ion-icon color="primary" name="{{item.icon}}" item-start></ion-icon>\n        {{ item.title }}\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/home/homev2/homev2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], Homev2Page);
    return Homev2Page;
}());

//# sourceMappingURL=homev2.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginListPageModule", function() { return LoginListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homev2__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginListPageModule = /** @class */ (function () {
    function LoginListPageModule() {
    }
    LoginListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__homev2__["a" /* Homev2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__homev2__["a" /* Homev2Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__homev2__["a" /* Homev2Page */]
            ]
        })
    ], LoginListPageModule);
    return LoginListPageModule;
}());

//# sourceMappingURL=homev2.module.js.map

/***/ })

});
//# sourceMappingURL=59.js.map