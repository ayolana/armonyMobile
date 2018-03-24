webpackJsonp([21],{

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileOnePage; });
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


var ProfileOnePage = /** @class */ (function () {
    function ProfileOnePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.posts = [];
        this.imageUrl = 'assets/img/profile/profile-cover.jpg';
        for (var i = 0; i < 10; i++) {
            this.posts[i] = {
                text: 'Post text ' + i,
                created_at: (i + 1),
            };
        }
    }
    ProfileOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-one',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/profile/profile-one/profile-one.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Profile Page</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}"></div>\n  <div id="content">\n    <div id="profile-info">\n      <img id="profile-image" src="assets/img/profile/profile-2.jpg">\n      <h3 id="profile-name">John</h3>\n      <span id="profile-description">Traveler, geek and animal lover.</span>\n      <p>Follow my <a href="http://twitter.com/ionicframework">@facebook</a> and\n        <a href="http://twitter.com/ionicframework">@twitter</a> accounts.</p>\n    </div>\n    <ion-list>\n      <ion-item *ngFor="let post of posts">\n        <img class="post-profile-image" src="assets/img/misc/cat.jpg"> {{post.text}}\n        <div class="post-time">{{post.created_at}} something</div>\n        <div class="post-options">\n          <ion-icon name="undo"></ion-icon>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/profile/profile-one/profile-one.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], ProfileOnePage);
    return ProfileOnePage;
}());

//# sourceMappingURL=profile-one.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOnePageModule", function() { return ProfileOnePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_one__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileOnePageModule = /** @class */ (function () {
    function ProfileOnePageModule() {
    }
    ProfileOnePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__profile_one__["a" /* ProfileOnePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile_one__["a" /* ProfileOnePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__profile_one__["a" /* ProfileOnePage */]
            ]
        })
    ], ProfileOnePageModule);
    return ProfileOnePageModule;
}());

//# sourceMappingURL=profile-one.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map