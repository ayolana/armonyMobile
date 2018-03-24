webpackJsonp([45],{

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturePullToRefreshPage; });
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



var FeaturePullToRefreshPage = /** @class */ (function () {
    function FeaturePullToRefreshPage(loadingCtrl, crudHttpProvider) {
        this.loadingCtrl = loadingCtrl;
        this.crudHttpProvider = crudHttpProvider;
        this.dataNotes = { id: null };
    }
    FeaturePullToRefreshPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 10000 });
        loader.present();
        this.crudHttpProvider.getNotesDB()
            .then(function (data) {
            _this.notesItems = data;
            if (data)
                loader.dismiss();
        });
    };
    FeaturePullToRefreshPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.crudHttpProvider.getNotesDB()
            .then(function (data) {
            console.log('Async operation has ended');
            _this.notesItems = data;
            refresher.complete();
        });
    };
    FeaturePullToRefreshPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feature-pull-to-refresh',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/feature-pull-to-refresh/feature-pull-to-refresh.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Feature Pull to Refresh</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of notesItems; let i = index">\n      <ion-item>\n        {{ item.title }}\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/feature-pull-to-refresh/feature-pull-to-refresh.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]])
    ], FeaturePullToRefreshPage);
    return FeaturePullToRefreshPage;
}());

//# sourceMappingURL=feature-pull-to-refresh.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturePullToRefreshPageModule", function() { return FeaturePullToRefreshPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_pull_to_refresh__ = __webpack_require__(1244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeaturePullToRefreshPageModule = /** @class */ (function () {
    function FeaturePullToRefreshPageModule() {
    }
    FeaturePullToRefreshPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feature_pull_to_refresh__["a" /* FeaturePullToRefreshPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feature_pull_to_refresh__["a" /* FeaturePullToRefreshPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__feature_pull_to_refresh__["a" /* FeaturePullToRefreshPage */]
            ]
        })
    ], FeaturePullToRefreshPageModule);
    return FeaturePullToRefreshPageModule;
}());

//# sourceMappingURL=feature-pull-to-refresh.module.js.map

/***/ })

});
//# sourceMappingURL=45.js.map