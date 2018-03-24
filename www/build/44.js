webpackJsonp([44],{

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardPage; });
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


/**
 * This Component need :
 * - flash-card components. Load it in component
 */
var FlashCardPage = /** @class */ (function () {
    // private flashCards = [];
    function FlashCardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var flashCards = [
            {
                front: { image: 'assets/img/flashcards/namaste.jpg', title: 'Namaste', subtitle: 'नमस्ते' },
                back: {
                    title: 'meaning',
                    subtitle: 'Hello, Greetings, I bless the divine in you',
                    content: 'It is used to greet people every time they meet. It is usually initiated by the juniors'
                }
            },
            {
                front: {
                    image: 'assets/img/flashcards/how_are_you.jpg',
                    title: '(Tapailai) Kasto chha?',
                    subtitle: '( तपाईंलाई ) कस्तो छ ?'
                },
                back: {
                    title: 'meaning',
                    subtitle: 'How are you?',
                    content: 'It is used to ask people how they are doing or feeling.'
                }
            },
            {
                front: {
                    image: 'assets/img/flashcards/sorry.jpg',
                    title: 'Maaph garnuhos',
                    subtitle: 'माफ गर्नुहोस्'
                },
                back: {
                    title: 'meaning',
                    subtitle: 'Excuse me/ pardon me / Sorry',
                    content: 'It is used to ask for forgiveness when you do make mistakes.'
                }
            }
        ];
        console.log(flashCards);
    }
    FlashCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlashCardPage');
    };
    FlashCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flash-card',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/flash-card/flash-card.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FlashCard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <flash-card *ngFor="let card of flashCards" >\n        <div class="fc-front">\n          <img *ngIf="card.front.image"  [src]="card.front.image" />\n          <h2 text-center>{{card.front.title}}</h2>\n          <h3 text-center>{{card.front.subtitle}}</h3>\n          <hr />\n          <p *ngIf="card.front.title" >{{card.front.content}}</p>\n        </div>\n        <div class="fc-back">\n          <img *ngIf="card.back.image"  [src]="card.back.image" />\n          <h2 text-center>{{card.back.title}}</h2>\n          <h3 text-center>{{card.back.subtitle}}</h3>\n          <hr />\n          <p *ngIf="card.back.title" >{{card.back.content}}</p>\n        </div>\n      </flash-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/flash-card/flash-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], FlashCardPage);
    return FlashCardPage;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardPageModule", function() { return FlashCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flash_card__ = __webpack_require__(1245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FlashCardPageModule = /** @class */ (function () {
    function FlashCardPageModule() {
    }
    FlashCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__flash_card__["a" /* FlashCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__flash_card__["a" /* FlashCardPage */]),
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__flash_card__["a" /* FlashCardPage */]
            ]
        })
    ], FlashCardPageModule);
    return FlashCardPageModule;
}());

//# sourceMappingURL=flash-card.module.js.map

/***/ })

});
//# sourceMappingURL=44.js.map