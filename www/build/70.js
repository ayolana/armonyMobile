webpackJsonp([70],{

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseAuthPage; });
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


var FirebaseAuthPage = /** @class */ (function () {
    function FirebaseAuthPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.backgroundImage = 'assets/img/background/background-2.jpg';
    }
    FirebaseAuthPage.prototype.goToLogin = function () {
        this.navCtrl.push('FirebaseLoginPage');
    };
    FirebaseAuthPage.prototype.goToSignup = function () {
        this.navCtrl.push('FirebaseRegisterPage');
    };
    FirebaseAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-firebase-auth',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/firebase/firebase-auth/firebase-auth.html"*/'<ion-content class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">    \n  <ion-header no-border>\n    <ion-navbar transparent>\n    </ion-navbar>\n  </ion-header>\n  <div class="login-container">\n    <img class="logo" src="assets/img/logo/logo.png" />\n    <ion-row>\n      <ion-col text-center>\n        <h3>Welcome to Ionium 2</h3>\n        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block color="primary" outline (click)="goToLogin()">Log in</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block (click)="goToSignup()">Create Account</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/firebase/firebase-auth/firebase-auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], FirebaseAuthPage);
    return FirebaseAuthPage;
}());

//# sourceMappingURL=firebase-auth.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthPageModule", function() { return FirebaseAuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_auth__ = __webpack_require__(1135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirebaseAuthPageModule = /** @class */ (function () {
    function FirebaseAuthPageModule() {
    }
    FirebaseAuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firebase_auth__["a" /* FirebaseAuthPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firebase_auth__["a" /* FirebaseAuthPage */]),
            ],
        })
    ], FirebaseAuthPageModule);
    return FirebaseAuthPageModule;
}());

//# sourceMappingURL=firebase-auth.module.js.map

/***/ })

});
//# sourceMappingURL=70.js.map