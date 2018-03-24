webpackJsonp([8],{

/***/ 1281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePhotoGalleryPage; });
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


var SlidePhotoGalleryPage = /** @class */ (function () {
    function SlidePhotoGalleryPage(navCtrl) {
        this.navCtrl = navCtrl;
        // ngOnInit() {
        //   let el1 = document.getElementById('gallery-top');
        //   let el2 = document.getElementById('gallery-thumbs');
        //   console.log(el1, el2);
        //   let galleryTop = null;
        //   let galleryThumbs = null;
        //   galleryTop = new Swiper(el1, {
        //     nextButton: '.swiper-button-next',
        //     prevButton: '.swiper-button-prev',
        //     spaceBetween: 10,
        //     control: galleryTop
        //   });
        //   galleryThumbs = new Swiper(el2, {
        //     spaceBetween: 10,
        //     centeredSlides: true,
        //     slidesPerView: 'auto',
        //     touchRatio: 0.2,
        //     slideToClickedSlide: true,
        //     control: galleryThumbs
        //   });
        // }
        this.slides = [
            {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/1',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/2',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/3',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/4',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/5',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/6',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/7',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/8',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/9',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/10',
            },
        ];
    }
    SlidePhotoGalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-photo-gallery',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-photo-gallery/slide-photo-gallery.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Photo Gallery</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- Swiper -->\n  <div id="gallery-top" class="swiper-container gallery-top">\n    <div class="swiper-wrapper">\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/8)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/9)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/10)"></div>\n    </div>\n    <!-- Add Arrows -->\n    <div class="swiper-button-next swiper-button-white"></div>\n    <div class="swiper-button-prev swiper-button-white"></div>\n  </div>\n  <div id="gallery-thumbs" class="swiper-container gallery-thumbs">\n    <div class="swiper-wrapper">\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/8)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/9)"></div>\n      <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/10)"></div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/slide/slide-photo-gallery/slide-photo-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlidePhotoGalleryPage);
    return SlidePhotoGalleryPage;
}());

//# sourceMappingURL=slide-photo-gallery.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePhotoGalleryPageModule", function() { return SlidePhotoGalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_photo_gallery__ = __webpack_require__(1281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidePhotoGalleryPageModule = /** @class */ (function () {
    function SlidePhotoGalleryPageModule() {
    }
    SlidePhotoGalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_photo_gallery__["a" /* SlidePhotoGalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_photo_gallery__["a" /* SlidePhotoGalleryPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_photo_gallery__["a" /* SlidePhotoGalleryPage */]
            ]
        })
    ], SlidePhotoGalleryPageModule);
    return SlidePhotoGalleryPageModule;
}());

//# sourceMappingURL=slide-photo-gallery.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map