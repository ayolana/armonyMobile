webpackJsonp([19],{

/***/ 1270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileThreePage = /** @class */ (function () {
    function ProfileThreePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.posts = [
            {
                postImageUrl: 'assets/img/background/background-2.jpg',
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
                date: 'November 5, 2016',
                likes: 12,
                comments: 4,
                timestamp: '11h ago'
            },
            {
                postImageUrl: 'assets/img/background/background-3.jpg',
                text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
                date: 'October 23, 2016',
                likes: 30,
                comments: 64,
                timestamp: '30d ago'
            },
            {
                postImageUrl: 'assets/img/background/background-4.jpg',
                date: 'June 28, 2016',
                likes: 46,
                text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
                comments: 66,
                timestamp: '4mo ago'
            },
        ];
        this.user = {
            name: 'Ionic 2',
            twitter: '@ionicpremium',
            profileImage: 'assets/img/logo/logo.png',
            followers: 456,
            following: 1052,
            tweets: 35
        };
    }
    ProfileThreePage.prototype.ionViewDidLoad = function () {
        console.log('Hello ProfileThree Page');
    };
    ProfileThreePage.prototype.imageTapped = function (post) {
        this.toastCtrl.create('Post image clicked');
    };
    ProfileThreePage.prototype.comment = function (post) {
        this.toastCtrl.create('Comments clicked');
    };
    ProfileThreePage.prototype.like = function (post) {
        this.toastCtrl.create('Like clicked');
    };
    ProfileThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-profile-three',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/profile/profile-three/profile-three.html"*/'<ion-content class="container transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div class="card-profile">\n    <div class="card-profile_visual"></div>\n    <div class="card-profile_user-infos">\n      <span class="infos_name">{{user.name}}</span>\n      <span class="infos_nick">{{user.twitter}}</span>\n      <a href="#"></a>\n    </div>\n    <div class="card-profile_user-stats">\n      <div class="stats-holder">\n        <div class="user-stats">\n          <strong>Tweets</strong>\n          <span>{{user.tweets}}</span>\n        </div>\n        <div class="user-stats">\n          <strong>Following</strong>\n          <span>{{user.following}}</span>\n        </div>\n        <div class="user-stats">\n          <strong>Followers</strong>\n          <span>{{user.followers}}</span>\n        </div>\n      </div>\n    </div>\n    <div id="posts">\n      <ion-card *ngFor="let post of posts">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="user.profileImage">\n          </ion-avatar>\n          <h2 class="sticky">{{user.name}}</h2>\n          <p>{{post.date}}</p>\n        </ion-item>\n        <img [src]="post.postImageUrl" (click)="imageTapped(post)">\n        <ion-card-content>\n          <p>{{post.text}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button color="purple" clear small icon-left (click)="like(post)">\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n                {{post.likes}} Likes\n              </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="purple" clear small icon-left (click)="comment(post)">\n                <ion-icon name=\'text\'></ion-icon>\n                {{post.comments}} Comments\n              </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <p>\n              {{post.timestamp}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/profile/profile-three/profile-three.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */]])
    ], ProfileThreePage);
    return ProfileThreePage;
}());

//# sourceMappingURL=profile-three.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileThreePageModule", function() { return ProfileThreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_three__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileThreePageModule = /** @class */ (function () {
    function ProfileThreePageModule() {
    }
    ProfileThreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__profile_three__["a" /* ProfileThreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile_three__["a" /* ProfileThreePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__profile_three__["a" /* ProfileThreePage */]
            ]
        })
    ], ProfileThreePageModule);
    return ProfileThreePageModule;
}());

//# sourceMappingURL=profile-three.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map