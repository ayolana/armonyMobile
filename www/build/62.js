webpackJsonp([62],{

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TogglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TogglePage = /** @class */ (function () {
    function TogglePage() {
    }
    TogglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-toggle',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/toggle/toggle.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Toggle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Frodo Baggins</ion-label>\n      <ion-toggle value="foo" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sam</ion-label>\n      <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Éowyn</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Legolas</ion-label>\n      <ion-toggle color="royal" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gimli</ion-label>\n      <ion-toggle color="danger"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Saruman</ion-label>\n      <ion-toggle color="dark" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gandalf</ion-label>\n      <ion-toggle color="energized" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arwen</ion-label>\n      <ion-toggle color="royal"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Treebeard</ion-label>\n      <ion-toggle color="secondary" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Boromir</ion-label>\n      <ion-toggle color="royal"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gollum</ion-label>\n      <ion-toggle color="dark" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Galadriel</ion-label>\n      <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/toggle/toggle.html"*/,
        })
    ], TogglePage);
    return TogglePage;
}());

//# sourceMappingURL=toggle.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePageModule", function() { return TogglePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle__ = __webpack_require__(1179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TogglePageModule = /** @class */ (function () {
    function TogglePageModule() {
    }
    TogglePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toggle__["a" /* TogglePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toggle__["a" /* TogglePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toggle__["a" /* TogglePage */]
            ]
        })
    ], TogglePageModule);
    return TogglePageModule;
}());

//# sourceMappingURL=toggle.module.js.map

/***/ })

});
//# sourceMappingURL=62.js.map