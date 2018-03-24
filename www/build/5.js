webpackJsonp([5],{

/***/ 1284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideWalkthroughPage; });
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


var SlideWalkthroughPage = /** @class */ (function () {
    function SlideWalkthroughPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideIndex = 0;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                description: 'Take a look at our amazing options',
            }
        ];
    }
    SlideWalkthroughPage.prototype.onSlideChanged = function () {
        this.slideIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', this.slideIndex);
    };
    SlideWalkthroughPage.prototype.goToApp = function () {
        console.log('Go to App clicked');
    };
    SlideWalkthroughPage.prototype.skip = function () {
        console.log('Skip clicked');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SlideWalkthroughPage.prototype, "slider", void 0);
    SlideWalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-walkthrough',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-walkthrough/slide-walkthrough.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-buttons right>\n      <button ion-button color="light"\n              *ngIf="slideIndex < slides.length - 1"\n              class="skip-button"\n              (click)="skip()">SKIP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen="true" class="no-padding-top">\n  <ion-slides #slider pager="true" autoplay="3000" (ionSlideWillChange)="onSlideChanged()">\n    <ion-slide *ngFor="let slide of slides"\n               class="slide-background"\n               [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n      <div class="text-wrapper">\n        <div class="slide-text">\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n          <p [innerHTML]="slide.description"></p>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class="floating-buttons pop-in" *ngIf="slideIndex >= slides.length - 1">\n    <button ion-button clear large full (click)="goToApp()">Let\'s go!</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-walkthrough/slide-walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideWalkthroughPage);
    return SlideWalkthroughPage;
}());

//# sourceMappingURL=slide-walkthrough.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPageModule", function() { return SlideWalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_walkthrough__ = __webpack_require__(1284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideWalkthroughPageModule = /** @class */ (function () {
    function SlideWalkthroughPageModule() {
    }
    SlideWalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide_walkthrough__["a" /* SlideWalkthroughPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_walkthrough__["a" /* SlideWalkthroughPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__slide_walkthrough__["a" /* SlideWalkthroughPage */]
            ]
        })
    ], SlideWalkthroughPageModule);
    return SlideWalkthroughPageModule;
}());

//# sourceMappingURL=slide-walkthrough.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map