webpackJsonp([65],{

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RadioPage = /** @class */ (function () {
    function RadioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.langForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            "langs": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: 'rust', disabled: false })
        });
    }
    RadioPage.prototype.doSubmit = function (event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    };
    RadioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-radio',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/radio/radio.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Radio Button</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <form (submit)="doSubmit($event)" [formGroup]="langForm">\n    <ion-list radio-group formControlName="langs">\n\n      <ion-list-header>\n        Language\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Go</ion-label>\n        <ion-radio value="golang" checked="true"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Rust</ion-label>\n        <ion-radio value="rust"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Python</ion-label>\n        <ion-radio value="python"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Ruby</ion-label>\n        <ion-radio value="ruby"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Clojure</ion-label>\n        <ion-radio value="clojure"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Java</ion-label>\n        <ion-radio value="java"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>PHP</ion-label>\n        <ion-radio value="php"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>.NET</ion-label>\n        <ion-radio value="dotnet"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>C++</ion-label>\n        <ion-radio value="cplusplus"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Scala</ion-label>\n        <ion-radio value="scala"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Haskell</ion-label>\n        <ion-radio value="haskell"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Erlang</ion-label>\n        <ion-radio value="erlang"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/form/radio/radio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPageModule", function() { return RadioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio__ = __webpack_require__(1176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioPageModule = /** @class */ (function () {
    function RadioPageModule() {
    }
    RadioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio__["a" /* RadioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__radio__["a" /* RadioPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio__["a" /* RadioPage */]
            ]
        })
    ], RadioPageModule);
    return RadioPageModule;
}());

//# sourceMappingURL=radio.module.js.map

/***/ })

});
//# sourceMappingURL=65.js.map