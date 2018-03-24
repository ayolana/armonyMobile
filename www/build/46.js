webpackJsonp([46],{

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureInfiniteScrollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeatureInfiniteScrollPage = /** @class */ (function () {
    function FeatureInfiniteScrollPage(loadingCtrl, crudHttpProvider) {
        this.loadingCtrl = loadingCtrl;
        this.crudHttpProvider = crudHttpProvider;
        this.notesItems = [];
        this.start = 0;
        this.loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 10000 });
    }
    FeatureInfiniteScrollPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader.present();
        this.loadData().then(function (data) { if (data)
            _this.loader.dismiss(); });
    };
    FeatureInfiniteScrollPage.prototype.loadData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.crudHttpProvider.getNotesDBLimit(_this.start)
                .then(function (datas) {
                for (var data in datas) {
                    _this.notesItems.push(datas[data]);
                }
                resolve(true);
            });
        });
    };
    FeatureInfiniteScrollPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        console.log('doInfinite, start is currently ' + this.start);
        this.start += 10;
        this.loadData().then(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        });
    };
    FeatureInfiniteScrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feature-infinite-scroll',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/feature-infinite-scroll/feature-infinite-scroll.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Feature Infinite Scroll</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of notesItems; let i = index">\n      <ion-item>\n        {{ item.title }}\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/feature-infinite-scroll/feature-infinite-scroll.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]])
    ], FeatureInfiniteScrollPage);
    return FeatureInfiniteScrollPage;
}());

//# sourceMappingURL=feature-infinite-scroll.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureInfiniteScrollPageModule", function() { return FeatureInfiniteScrollPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_infinite_scroll__ = __webpack_require__(1243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeatureInfiniteScrollPageModule = /** @class */ (function () {
    function FeatureInfiniteScrollPageModule() {
    }
    FeatureInfiniteScrollPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feature_infinite_scroll__["a" /* FeatureInfiniteScrollPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feature_infinite_scroll__["a" /* FeatureInfiniteScrollPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__feature_infinite_scroll__["a" /* FeatureInfiniteScrollPage */]
            ]
        })
    ], FeatureInfiniteScrollPageModule);
    return FeatureInfiniteScrollPageModule;
}());

//# sourceMappingURL=feature-infinite-scroll.module.js.map

/***/ })

});
//# sourceMappingURL=46.js.map