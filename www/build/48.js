webpackJsonp([48],{

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeaderPage; });
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


/**
 * This Component need :
 * - expandable-header components. Load it in component
 */
var ExpandableHeaderPage = /** @class */ (function () {
    function ExpandableHeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExpandableHeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expandable-header',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/expandable-header/expandable-header.html"*/'<ion-header color="primary">\n  <expandable-header [scrollArea]="myContent" headerHeight="125">\n    <ion-item>\n        <ion-label><ion-icon name="search"></ion-icon></ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label><ion-icon name="funnel"></ion-icon></ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n  </expandable-header>\n  <ion-navbar color="primary">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Expandable Header</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen #myContent padding>\n   <header>\n    <h1>Dummy Title</h1>\n  </header>\n  <main>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta dolor urna, quis iaculis eros tincidunt sed.\n      Nunc tempor porttitor lacus, non ultrices sapien interdum non. Curabitur tempor efficitur tellus, id convallis felis varius eu.\n      Pellentesque quis velit metus. Nam quis dictum quam. Integer ut mauris augue. Nulla at convallis mauris. Sed vel faucibus odio. \n      Proin eu ante in massa scelerisque auctor. Nulla at sapien id lectus ultricies dapibus at eu augue. Morbi ac volutpat nulla. \n      Morbi elit ex, accumsan vitae tincidunt eget, posuere id sem. Sed cursus sem ante, non fringilla augue mattis ac.</p>\n    <p>Vestibulum finibus mi lacus, eget condimentum diam consequat eu. Donec fermentum accumsan libero, a fermentum ante faucibus vel.\n       Etiam euismod mi nec efficitur tincidunt. Nulla facilisi. Vivamus nec malesuada turpis. Nulla ultricies non lacus vel scelerisque.\n        Integer vulputate ex non rutrum scelerisque. Sed ac dapibus risus. Fusce blandit, mauris at semper venenatis, metus ipsum ultricies \n        lacus, quis suscipit nunc nibh ut tellus. Cras varius quam vel libero scelerisque accumsan. Pellentesque at luctus tortor. \n        In eleifend neque justo, porttitor auctor augue rhoncus ac. \n      Mauris ut eros eu sapien aliquet lacinia. Donec fringilla velit diam, eu maximus felis lacinia vel.</p>\n    <p>Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis. \n      Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit. \n      Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit \n      amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis tortor, \n      sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat.\n      In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate.</p>\n    <p>Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis. \n      Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit. \n      Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit \n      amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis tortor, \n      sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat.\n      In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate.</p>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/expandable-header/expandable-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ExpandableHeaderPage);
    return ExpandableHeaderPage;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderPageModule", function() { return ExpandableHeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expandable_header__ = __webpack_require__(1241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExpandableHeaderPageModule = /** @class */ (function () {
    function ExpandableHeaderPageModule() {
    }
    ExpandableHeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__expandable_header__["a" /* ExpandableHeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__expandable_header__["a" /* ExpandableHeaderPage */]),
                __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__expandable_header__["a" /* ExpandableHeaderPage */]
            ]
        })
    ], ExpandableHeaderPageModule);
    return ExpandableHeaderPageModule;
}());

//# sourceMappingURL=expandable-header.module.js.map

/***/ })

});
//# sourceMappingURL=48.js.map