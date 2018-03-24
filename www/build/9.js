webpackJsonp([9],{

/***/ 1280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideNestedPage; });
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


var SlideNestedPage = /** @class */ (function () {
    function SlideNestedPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [{
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
            }
        ];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SlideNestedPage.prototype, "slider", void 0);
    SlideNestedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-nested',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-nested/slide-nested.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Nested Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides #slider pager>\n    <ion-slide *ngFor="let slide of slides"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n    <ion-slides pager direction="vertical">\n      <ion-slide *ngFor="let slide of slides"\n                  [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n        <h2>{{slide.title}}</h2>\n      </ion-slide>\n    </ion-slides>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-nested/slide-nested.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideNestedPage);
    return SlideNestedPage;
}());

//# sourceMappingURL=slide-nested.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideNestedPageModule", function() { return SlideNestedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_nested__ = __webpack_require__(1280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideNestedPageModule = /** @class */ (function () {
    function SlideNestedPageModule() {
    }
    SlideNestedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_nested__["a" /* SlideNestedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_nested__["a" /* SlideNestedPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_nested__["a" /* SlideNestedPage */]
            ]
        })
    ], SlideNestedPageModule);
    return SlideNestedPageModule;
}());

//# sourceMappingURL=slide-nested.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map