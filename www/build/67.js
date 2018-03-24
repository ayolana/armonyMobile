webpackJsonp([67],{

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global_setting__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase_auth__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseListPage = /** @class */ (function () {
    function FirebaseListPage(navCtrl, fireAuthService, alertCtrl, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireAuthService = fireAuthService;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.rootPage = 'HomeListPage';
        this.items = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["g" /* LISTMENUFIREBASEUNLOGIN */];
        this.fireAuthService.afAuth.authState.subscribe(function (result) {
            if (result !== null) {
                _this.items = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["f" /* LISTMENUFIREBASELOGIN */];
            }
            else {
                _this.items = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["g" /* LISTMENUFIREBASEUNLOGIN */];
            }
        });
    }
    FirebaseListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.component);
    };
    FirebaseListPage.prototype.doLogout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure to logout',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.fireAuthService.doLogout()
                            .subscribe(function (allowed) {
                            console.log(allowed);
                            // Enables then open the selected menu
                            _this.menuCtrl.enable(true, 'menu-avatar');
                            _this.menuCtrl.open('menu-avatar');
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    FirebaseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-firebase-list',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/firebase/firebase-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Firebase</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <div *ngFor="let item of items">\n      <div *ngIf="item.component == \'logout\'">\n        <button ion-item (click)="doLogout($event)">\n          {{item.title}}\n        </button>\n      </div>\n      <div *ngIf="item.component != \'logout\'">\n        <button ion-item (click)="itemTapped($event, item)">\n          {{item.title}}\n        </button>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/firebase/firebase-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase_auth__["a" /* FirebaseAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], FirebaseListPage);
    return FirebaseListPage;
}());

//# sourceMappingURL=firebase-list.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListPageModule", function() { return FirebaseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_list__ = __webpack_require__(1138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirebaseListPageModule = /** @class */ (function () {
    function FirebaseListPageModule() {
    }
    FirebaseListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firebase_list__["a" /* FirebaseListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firebase_list__["a" /* FirebaseListPage */]),
            ],
        })
    ], FirebaseListPageModule);
    return FirebaseListPageModule;
}());

//# sourceMappingURL=firebase-list.module.js.map

/***/ })

});
//# sourceMappingURL=67.js.map