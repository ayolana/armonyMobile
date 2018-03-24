webpackJsonp([6],{

/***/ 1283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideTransitionsPage; });
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


var SlideTransitionsPage = /** @class */ (function () {
    function SlideTransitionsPage(navCtrl) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SlideTransitionsPage.prototype, "slider", void 0);
    SlideTransitionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-transitions',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-transitions/slide-transitions.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Slide Transitions</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-center>\n  <h3>Slide (default)</h3>\n  <ion-slides autoplay="2500" loop="true">\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n\n  <h3>Cube</h3>\n  <ion-slides autoplay="2500" loop="true" effect="cube">\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n\n  <h3>Coverflow</h3>\n  <ion-slides autoplay="2500" loop="true" effect="coverflow">\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n\n  <h3>Fade</h3>\n  <ion-slides autoplay="2500" loop="true" effect="fade">\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n      <h2>{{slide.title}}</h2>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-transitions/slide-transitions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideTransitionsPage);
    return SlideTransitionsPage;
}());

//# sourceMappingURL=slide-transitions.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideTransitionsPageModule", function() { return SlideTransitionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_transitions__ = __webpack_require__(1283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideTransitionsPageModule = /** @class */ (function () {
    function SlideTransitionsPageModule() {
    }
    SlideTransitionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_transitions__["a" /* SlideTransitionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_transitions__["a" /* SlideTransitionsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_transitions__["a" /* SlideTransitionsPage */]
            ]
        })
    ], SlideTransitionsPageModule);
    return SlideTransitionsPageModule;
}());

//# sourceMappingURL=slide-transitions.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map