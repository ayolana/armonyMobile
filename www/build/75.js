webpackJsonp([75],{

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudHttpDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudHttpDetailPage = /** @class */ (function () {
    function CrudHttpDetailPage(platform, navParams, viewCtrl, crudHttpProvider) {
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.crudHttpProvider = crudHttpProvider;
        this.dataNotes = this.navParams.get('charSend');
    }
    CrudHttpDetailPage.prototype.saveNotes = function () {
        var _this = this;
        this.crudHttpProvider.saveNotesDB(this.dataNotes)
            .then(function (data) {
            _this.dataNotes.id = data;
            _this.viewCtrl.dismiss(_this.dataNotes);
        })
            .catch(function (err) {
            _this.viewCtrl.dismiss(null);
        });
    };
    CrudHttpDetailPage.prototype.back = function () {
        this.viewCtrl.dismiss(null);
    };
    CrudHttpDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      crud http detail\n    </ion-title>\n    <ion-buttons end (click)=\"back()\">\n        <span ion-text showWhen=\"ios\"> Cancel </span>\n        <button ion-button icon-only color=\"royal\">\n            <ion-icon name=\"close\"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-input type=\"text\" [(ngModel)]=\"dataNotes.title\" placeholder=\"New Note Title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"dataNotes.text\" placeholder=\"Your Text Here\"></ion-textarea>\n  </ion-item>\n  <ion-col>\n    <button ion-button color=\"primary\" (click)=\"saveNotes()\"> Save </button>\n    <button ion-button color=\"danger\" (click)=\"back()\"> Back </button>\n  </ion-col>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]])
    ], CrudHttpDetailPage);
    return CrudHttpDetailPage;
}());

//# sourceMappingURL=crud-http-detail.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudHttpDetailPageModule", function() { return CrudHttpDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_http_detail__ = __webpack_require__(1130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrudHttpDetailPageModule = /** @class */ (function () {
    function CrudHttpDetailPageModule() {
    }
    CrudHttpDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crud_http_detail__["a" /* CrudHttpDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crud_http_detail__["a" /* CrudHttpDetailPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__crud_http_detail__["a" /* CrudHttpDetailPage */]
            ]
        })
    ], CrudHttpDetailPageModule);
    return CrudHttpDetailPageModule;
}());

//# sourceMappingURL=crud-http-detail.module.js.map

/***/ })

});
//# sourceMappingURL=75.js.map