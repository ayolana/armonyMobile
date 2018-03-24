webpackJsonp([88],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckboxPage = /** @class */ (function () {
    function CheckboxPage() {
    }
    CheckboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkbox',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/components/checkbox/checkbox.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Checkbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Jon Snow</ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Daenerys Targaryen</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arya Stark</ion-label>\n      <ion-checkbox value="cherry" disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tyrion Lannister</ion-label>\n      <ion-checkbox color="secondary"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sansa Stark</ion-label>\n      <ion-checkbox color="danger" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Khal Drogo</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cersei Lannister</ion-label>\n      <ion-checkbox color="energized" checked="true" color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stannis Baratheon</ion-label>\n      <ion-checkbox color="royal" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Petyr Baelish</ion-label>\n      <ion-checkbox disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hodor</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catelyn Stark</ion-label>\n      <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bronn</ion-label>\n      <ion-checkbox color="royal"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/components/checkbox/checkbox.html"*/,
        })
    ], CheckboxPage);
    return CheckboxPage;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageModule", function() { return CheckboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__(1117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckboxPageModule = /** @class */ (function () {
    function CheckboxPageModule() {
    }
    CheckboxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* CheckboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* CheckboxPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* CheckboxPage */]
            ]
        })
    ], CheckboxPageModule);
    return CheckboxPageModule;
}());

//# sourceMappingURL=checkbox.module.js.map

/***/ })

});
//# sourceMappingURL=88.js.map