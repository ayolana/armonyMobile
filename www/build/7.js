webpackJsonp([7],{

/***/ 1282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideRightToLeftPage; });
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


var SlideRightToLeftPage = /** @class */ (function () {
    function SlideRightToLeftPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            }
        ];
    }
    SlideRightToLeftPage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SlideRightToLeftPage.prototype, "slider", void 0);
    SlideRightToLeftPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-rtl',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slide-rtl/slide-rtl.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Right to Left Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides #slider pager autoplay="2000" (ionSlideDidChange)="onSlideChanged()" dir="rtl">\n    <ion-slide *ngFor="let slide of slides"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slide-rtl/slide-rtl.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideRightToLeftPage);
    return SlideRightToLeftPage;
}());

//# sourceMappingURL=slide-rtl.js.map

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideRightToLeftPageModule", function() { return SlideRightToLeftPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_rtl__ = __webpack_require__(1282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideRightToLeftPageModule = /** @class */ (function () {
    function SlideRightToLeftPageModule() {
    }
    SlideRightToLeftPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_rtl__["a" /* SlideRightToLeftPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_rtl__["a" /* SlideRightToLeftPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_rtl__["a" /* SlideRightToLeftPage */]
            ]
        })
    ], SlideRightToLeftPageModule);
    return SlideRightToLeftPageModule;
}());

//# sourceMappingURL=slide-rtl.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map