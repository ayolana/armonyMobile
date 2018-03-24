webpackJsonp([77],{

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudFirebaseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase_database__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudFirebaseDetailPage = /** @class */ (function () {
    function CrudFirebaseDetailPage(navCtrl, navParams, firebaseDBProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseDBProvider = firebaseDBProvider;
        this.dataNotes = navParams.get('item');
    }
    CrudFirebaseDetailPage.prototype.saveNotes = function () {
        this.firebaseDBProvider.saveNotesDB(this.dataNotes);
        this.navCtrl.pop();
    };
    CrudFirebaseDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CrudFirebaseDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crud-firebase-detail',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/crud/crud-firebase-list/crud-firebase-detail/crud-firebase-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CRUD Firebase Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="dataNotes.title" placeholder="New Note Title"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-textarea [(ngModel)]="dataNotes.text" placeholder="Your Text Here"></ion-textarea>\n  </ion-item>\n  <ion-col>\n    <button ion-button color="primary" (click)="saveNotes()">Save</button>\n    <button ion-button color="danger" (click)="back()">Back</button>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/crud/crud-firebase-list/crud-firebase-detail/crud-firebase-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase_database__["a" /* FirebaseDatabaseProvider */]])
    ], CrudFirebaseDetailPage);
    return CrudFirebaseDetailPage;
}());

//# sourceMappingURL=crud-firebase-detail.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudFirebaseDetailPageModule", function() { return CrudFirebaseDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_firebase_detail__ = __webpack_require__(1128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrudFirebaseDetailPageModule = /** @class */ (function () {
    function CrudFirebaseDetailPageModule() {
    }
    CrudFirebaseDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crud_firebase_detail__["a" /* CrudFirebaseDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crud_firebase_detail__["a" /* CrudFirebaseDetailPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__crud_firebase_detail__["a" /* CrudFirebaseDetailPage */]
            ]
        })
    ], CrudFirebaseDetailPageModule);
    return CrudFirebaseDetailPageModule;
}());

//# sourceMappingURL=crud-firebase-detail.module.js.map

/***/ })

});
//# sourceMappingURL=77.js.map