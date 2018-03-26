webpackJsonp([12],{

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideColorChangingPage; });
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


var SlideColorChangingPage = /** @class */ (function () {
    function SlideColorChangingPage(navCtrl) {
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
        this.colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];
        this.color = this.colors[0];
    }
    SlideColorChangingPage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.color = this.colors[currentIndex];
        console.log('Slide changed! Current index is', currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SlideColorChangingPage.prototype, "slider", void 0);
    SlideColorChangingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-color-changing',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slide-color-changing/slide-color-changing.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>Color Changing Slide</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-slides #slider pager\n              (ionSlideDidChange)="onSlideChanged()">\n    <ion-slide [style.background-color]="color">\n      <div class="container">\n        <h1>\n          <span>Love </span>\n          <ul>\n            <li>him</li>\n            <li>her</li>\n            <li>you</li>\n            <li>me</li>\n            <li>them</li>\n            <li>everyone</li>\n          </ul>\n        </h1>\n      </div>\n    </ion-slide>\n    <ion-slide *ngFor="let slide of slides" [style.background-color]="color">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slide-color-changing/slide-color-changing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideColorChangingPage);
    return SlideColorChangingPage;
}());

//# sourceMappingURL=slide-color-changing.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideColorChangingPageModule", function() { return SlideColorChangingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_color_changing__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideColorChangingPageModule = /** @class */ (function () {
    function SlideColorChangingPageModule() {
    }
    SlideColorChangingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_color_changing__["a" /* SlideColorChangingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_color_changing__["a" /* SlideColorChangingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_color_changing__["a" /* SlideColorChangingPage */]
            ]
        })
    ], SlideColorChangingPageModule);
    return SlideColorChangingPageModule;
}());

//# sourceMappingURL=slide-color-changing.module.js.map

/***/ })

});
//# sourceMappingURL=12.js.map