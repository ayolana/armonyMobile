webpackJsonp([15],{

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global_setting__ = __webpack_require__(198);
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



var ThemingPage = /** @class */ (function () {
    /*
      Thanks to Scott: https://github.com/ScottMBerger for this feature!
    */
    function ThemingPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
    }
    ThemingPage.prototype.changeTheme = function (theme) {
        this.global.set('theme', theme);
    };
    ThemingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-theming',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/setting/theming/theming.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Theming</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h3>Setting theme</h3>\n  <button class="pop-in" ion-button (click)="changeTheme(\'\')">Default</button>\n  <button class="pop-in" ion-button color="dark" (click)="changeTheme(\'theme-dark\')">Dark</button>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/setting/theming/theming.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__app_global_setting__["b" /* AppState */]])
    ], ThemingPage);
    return ThemingPage;
}());

//# sourceMappingURL=theming.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingPageModule", function() { return ThemingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theming__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemingPageModule = /** @class */ (function () {
    function ThemingPageModule() {
    }
    ThemingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__theming__["a" /* ThemingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__theming__["a" /* ThemingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__theming__["a" /* ThemingPage */]
            ]
        })
    ], ThemingPageModule);
    return ThemingPageModule;
}());

//# sourceMappingURL=theming.module.js.map

/***/ })

});
//# sourceMappingURL=15.js.map