webpackJsonp([43],{

/***/ 1246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonryCardsPage; });
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


var MasonryCardsPage = /** @class */ (function () {
    function MasonryCardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.posts = [];
    }
    MasonryCardsPage.prototype.ionViewDidLoad = function () {
        this.posts = [
            {
                description: 'Trying out digital painting',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/63/b0/d563b08194f0a92cc7d381f7f8582a08.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b586.jpg'
            },
            {
                description: 'Look at this amazing clay humming bird I crafted!',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg'
            },
            {
                description: 'Origami tullip tutorial',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0f82.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e03a.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2bd6.jpg'
            },
            {
                description: 'Delicious chocolate bread recipe!',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb594a4.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c057726800a0.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffdbda.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba1ac.jpg'
            },
            {
                description: 'Fastest car of all times',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg'
            },
        ];
    };
    MasonryCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-masonry-cards',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/miscellaneous/masonry-cards/masonry-cards.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Masonry Cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let post of posts">\n      <img [src]="post.image" />\n      <div *ngIf="post.description" class="post-description">\n        <small>{{ post.description }}</small>\n      </div>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avatar/marty-avatar.png">\n        </ion-avatar>\n        <small>McFly</small>\n        <p><small>Category</small></p>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/miscellaneous/masonry-cards/masonry-cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], MasonryCardsPage);
    return MasonryCardsPage;
}());

//# sourceMappingURL=masonry-cards.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonryCardsPageModule", function() { return MasonryCardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masonry_cards__ = __webpack_require__(1246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MasonryCardsPageModule = /** @class */ (function () {
    function MasonryCardsPageModule() {
    }
    MasonryCardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__masonry_cards__["a" /* MasonryCardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__masonry_cards__["a" /* MasonryCardsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__masonry_cards__["a" /* MasonryCardsPage */]
            ]
        })
    ], MasonryCardsPageModule);
    return MasonryCardsPageModule;
}());

//# sourceMappingURL=masonry-cards.module.js.map

/***/ })

});
//# sourceMappingURL=43.js.map