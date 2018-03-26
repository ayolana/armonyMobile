webpackJsonp([52],{

/***/ 1189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global_setting__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionPage = /** @class */ (function () {
    function AccordionPage() {
        this.pages = __WEBPACK_IMPORTED_MODULE_1__app_global_setting__["a" /* ACCORDIONMENU */];
        console.log(this.pages);
    }
    AccordionPage.prototype.toggleSection = function (i) {
        console.log(this.pages[i]);
        console.log(this.pages[i].children);
        this.pages[i].open = !this.pages[i].open;
    };
    AccordionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accordion',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/miscellaneous/accordion/accordion.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>accordion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n    <ion-content>\n    \n      <ion-list>\n        <div *ngFor="let item of pages; let i = index">\n          <!-- First Level -->\n          <ion-item (click)="toggleSection(i)"  [ngClass]="{\'section-active\':item.open, \'section\': item.open}">\n            <ion-icon color="primary" name="{{item.icon}}" item-start></ion-icon>\n              {{ item.title }}\n            <ion-icon name="arrow-forward" item-end *ngIf="!item.open"></ion-icon>\n            <ion-icon name="arrow-down" item-end *ngIf="item.open"></ion-icon>\n          </ion-item>\n\n          <ion-list *ngIf="item.children && item.open">\n              <!-- Second Level -->\n              <ion-item *ngFor="let child of item.children; let j = index" >\n                {{ child.title }}\n              </ion-item>\n          </ion-list>\n\n        </div>\n      </ion-list>\n      \n    </ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/miscellaneous/accordion/accordion.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], AccordionPage);
    return AccordionPage;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageModule", function() { return AccordionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(1189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccordionPageModule = /** @class */ (function () {
    function AccordionPageModule() {
    }
    AccordionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionPage */]
            ]
        })
    ], AccordionPageModule);
    return AccordionPageModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ })

});
//# sourceMappingURL=52.js.map