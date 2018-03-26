webpackJsonp([3],{

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderWithArrowsPage; });
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


var SliderWithArrowsPage = /** @class */ (function () {
    function SliderWithArrowsPage(navCtrl) {
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
        this.currentIndex = 0;
    }
    SliderWithArrowsPage.prototype.nextSlide = function () {
        this.slider.slideNext();
    };
    SliderWithArrowsPage.prototype.previousSlide = function () {
        this.slider.slidePrev();
    };
    SliderWithArrowsPage.prototype.onSlideChanged = function () {
        this.currentIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', this.currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SliderWithArrowsPage.prototype, "slider", void 0);
    SliderWithArrowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slider-with-arrows',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slider-with-arrows/slider-with-arrows.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Slider with arrows</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slider effect="fade" (ionSlideWillChange)="onSlideChanged()">\n    <ion-slide *ngFor="let slide of slides"\n               class="swiper-no-swiping"\n               [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n    <!-- Add Pagination -->\n    <div *ngIf="currentIndex > 0"\n         class="swiper-button-prev swiper-button-white"\n         (click)="previousSlide()"></div>\n    <div *ngIf="currentIndex < slides.length-1"\n         class="swiper-button-next swiper-button-white"\n         (click)="nextSlide()"></div>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slider-with-arrows/slider-with-arrows.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SliderWithArrowsPage);
    return SliderWithArrowsPage;
}());

//# sourceMappingURL=slider-with-arrows.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderWithArrowsPageModule", function() { return SliderWithArrowsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_with_arrows__ = __webpack_require__(1286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderWithArrowsPageModule = /** @class */ (function () {
    function SliderWithArrowsPageModule() {
    }
    SliderWithArrowsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slider_with_arrows__["a" /* SliderWithArrowsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slider_with_arrows__["a" /* SliderWithArrowsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__slider_with_arrows__["a" /* SliderWithArrowsPage */]
            ]
        })
    ], SliderWithArrowsPageModule);
    return SliderWithArrowsPageModule;
}());

//# sourceMappingURL=slider-with-arrows.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map