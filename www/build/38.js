webpackJsonp([38],{

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinderCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(57);
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
 * Need Capitalize Pipes
 */


var TinderCardsPage = /** @class */ (function () {
    function TinderCardsPage(navCtrl, http, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.recentCard = '';
        this.stackConfig = {
            throwOutConfidence: function (offset, element) {
                return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
    }
    TinderCardsPage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        this.cards = [{ email: '' }];
        this.addNewCards(1);
    };
    // Called whenever we drag an element
    TinderCardsPage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x > 0) {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        else {
            color = '#FF' + hexCode + hexCode;
        }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    TinderCardsPage.prototype.voteUp = function (like) {
        var removedCard = this.cards.pop();
        this.addNewCards(1);
        if (like) {
            this.toastCtrl.create('You liked: ' + removedCard.email);
        }
        else {
            this.toastCtrl.create('You disliked: ' + removedCard.email);
        }
    };
    // Add new cards to our array
    TinderCardsPage.prototype.addNewCards = function (count) {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=' + count)
            .map(function (data) { return data.json().results; })
            .subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var val = result_1[_i];
                _this.cards.push(val);
            }
        });
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    TinderCardsPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = '0' + hex;
        }
        return hex;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["SwingStackComponent"])
    ], TinderCardsPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
    ], TinderCardsPage.prototype, "swingCards", void 0);
    TinderCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-tinder-cards',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/miscellaneous/tinder-cards/tinder-cards.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Tinder Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let card of cards" class="td-card">\n      <ion-item *ngIf="card.picture">\n        <img *ngIf="card.picture" [src]="card.picture.medium">\n        <h1>{{ card.name.first | capitalize }} {{ card.name.last | capitalize}}</h1>\n        <p>{{ card.email }}</p>\n      </ion-item>\n      <ion-card-content *ngIf="card.location">\n        From {{ card.location.city | capitalize }}, {{ card.location.postcode }}<br> Phone: {{ card.phone }}\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="tinder-footer">\n    <div id="swipe_dislike" class="rate" (click)="voteUp(false)"></div>\n    <div class="info"></div>\n    <div id="swipe_like" class="rate" (click)="voteUp(true)"></div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/miscellaneous/tinder-cards/tinder-cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */]])
    ], TinderCardsPage);
    return TinderCardsPage;
}());

//# sourceMappingURL=tinder-cards.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinderCardsPageModule", function() { return TinderCardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tinder_cards__ = __webpack_require__(1251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TinderCardsPageModule = /** @class */ (function () {
    function TinderCardsPageModule() {
    }
    TinderCardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__tinder_cards__["a" /* TinderCardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__tinder_cards__["a" /* TinderCardsPage */]),
                __WEBPACK_IMPORTED_MODULE_2_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__tinder_cards__["a" /* TinderCardsPage */]
            ]
        })
    ], TinderCardsPageModule);
    return TinderCardsPageModule;
}());

//# sourceMappingURL=tinder-cards.module.js.map

/***/ })

});
//# sourceMappingURL=38.js.map