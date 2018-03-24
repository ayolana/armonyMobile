webpackJsonp([64],{

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangePage = /** @class */ (function () {
    function RangePage() {
        this.brightness = 20;
        this.contrast = 0;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.text = 0;
    }
    RangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-range',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/range/range.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Range</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n  \n  <ion-list>\n    <ion-list-header>\n      Adjust Display\n    </ion-list-header>\n    <ion-item>\n      <ion-range [(ngModel)]="brightness">\n        <ion-icon range-left small name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n        <ion-icon range-left small name="contrast"></ion-icon>\n        <ion-icon range-right name="contrast"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n        <ion-icon range-left small name="brush"></ion-icon>\n        <ion-icon range-right name="brush"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range min="1000" max="2000" step="100" snaps="true" [(ngModel)]="warmth" color="danger">\n        <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n        <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Adjust Text\n    </ion-list-header>\n    <ion-item>\n      <ion-range min="-100" step="10" snaps="true" [(ngModel)]="text">\n        <ion-label range-left class="small-text">A</ion-label>\n        <ion-label range-right>A</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/range/range.html"*/,
        })
    ], RangePage);
    return RangePage;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePageModule", function() { return RangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangePageModule = /** @class */ (function () {
    function RangePageModule() {
    }
    RangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range__["a" /* RangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range__["a" /* RangePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range__["a" /* RangePage */]
            ]
        })
    ], RangePageModule);
    return RangePageModule;
}());

//# sourceMappingURL=range.module.js.map

/***/ })

});
//# sourceMappingURL=64.js.map