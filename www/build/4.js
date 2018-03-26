webpackJsonp([4],{

/***/ 1285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderListPage; });
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


var SliderListPage = /** @class */ (function () {
    function SliderListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            {
                name: 'one',
                slides: [{
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
                    }]
            },
            {
                name: 'one',
                slides: [
                    {
                        title: 'My Trip',
                        imageUrl: 'assets/img/lists/wishlist-4.jpg',
                        songs: 12,
                        private: true
                    },
                    {
                        title: 'Dream\'s Adventure',
                        imageUrl: 'assets/img/lists/wishlist-1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'Family Time',
                        imageUrl: 'assets/img/lists/wishlist-3.jpg',
                        songs: 5,
                        private: true
                    },
                ]
            },
            {
                name: 'one',
                slides: [
                    {
                        title: 'For the Weekend',
                        imageUrl: 'assets/img/lists/wishlist-2.jpg',
                        songs: 4,
                        private: false
                    },
                    {
                        title: 'Dream\'s Adventure',
                        imageUrl: 'assets/img/lists/wishlist-1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'Dream\'s Adventure',
                        imageUrl: 'assets/img/lists/wishlist-1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'Family Time',
                        imageUrl: 'assets/img/lists/wishlist-3.jpg',
                        songs: 5,
                        private: true
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
                    }
                ]
            }
        ];
    }
    SliderListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slider-list',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slider-list/slider-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Slider List</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list no-margin *ngFor="let item of items">\n    <ion-slides pager>\n      <ion-slide *ngFor="let slide of item.slides"\n                 class="text-center slider-item"\n                 [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n        <div class="slide-text">\n          <h2>{{slide.title}}</h2>\n          <p>{{slide.songs}} songs</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slider-list/slider-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SliderListPage);
    return SliderListPage;
}());

//# sourceMappingURL=slider-list.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderListPageModule", function() { return SliderListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_list__ = __webpack_require__(1285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderListPageModule = /** @class */ (function () {
    function SliderListPageModule() {
    }
    SliderListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slider_list__["a" /* SliderListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slider_list__["a" /* SliderListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slider_list__["a" /* SliderListPage */]
            ]
        })
    ], SliderListPageModule);
    return SliderListPageModule;
}());

//# sourceMappingURL=slider-list.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map