webpackJsonp([81],{

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPopoverPage; });
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


var ShowPopoverPage = /** @class */ (function () {
    function ShowPopoverPage(navParams) {
        this.navParams = navParams;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
    }
    ShowPopoverPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    };
    ShowPopoverPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == background) {
                colorName = key;
            }
        }
        return colorName;
    };
    ShowPopoverPage.prototype.setFontFamily = function () {
        if (this.textEle.style.fontFamily) {
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
        }
    };
    ShowPopoverPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    ShowPopoverPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    ShowPopoverPage.prototype.changeFontFamily = function () {
        if (this.fontFamily)
            this.textEle.style.fontFamily = this.fontFamily;
    };
    ShowPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list radio-group [(ngModel)]=\"fontFamily\" (ionChange)=\"changeFontFamily()\" class=\"popover-page\">\n      <ion-row>\n        <ion-col>\n          <button (click)=\"changeFontSize('smaller')\" ion-item detail-none class=\"text-button text-smaller\">A</button>\n        </ion-col>\n        <ion-col>\n          <button (click)=\"changeFontSize('larger')\" ion-item detail-none class=\"text-button text-larger\">A</button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row-dots\">\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('white')\" class=\"dot-white\" [class.selected]=\"background == 'white'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('tan')\" class=\"dot-tan\" [class.selected]=\"background == 'tan'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('grey')\" class=\"dot-grey\" [class.selected]=\"background == 'grey'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('black')\" class=\"dot-black\" [class.selected]=\"background == 'black'\"></button>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"text-athelas\">\n        <ion-label>Athelas</ion-label>\n        <ion-radio value=\"Athelas\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-charter\">\n        <ion-label>Charter</ion-label>\n        <ion-radio value=\"Charter\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-iowan\">\n        <ion-label>Iowan</ion-label>\n        <ion-radio value=\"Iowan\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-palatino\">\n        <ion-label>Palatino</ion-label>\n        <ion-radio value=\"Palatino\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-san-francisco\">\n        <ion-label>San Francisco</ion-label>\n        <ion-radio value=\"San Francisco\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-seravek\">\n        <ion-label>Seravek</ion-label>\n        <ion-radio value=\"Seravek\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-times-new-roman\">\n        <ion-label>Times New Roman</ion-label>\n        <ion-radio value=\"Times New Roman\"></ion-radio>\n      </ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ShowPopoverPage);
    return ShowPopoverPage;
}());

//# sourceMappingURL=show-popover.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPopoverPageModule", function() { return ShowPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_popover__ = __webpack_require__(1124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowPopoverPageModule = /** @class */ (function () {
    function ShowPopoverPageModule() {
    }
    ShowPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_popover__["a" /* ShowPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_popover__["a" /* ShowPopoverPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__show_popover__["a" /* ShowPopoverPage */]
            ]
        })
    ], ShowPopoverPageModule);
    return ShowPopoverPageModule;
}());

//# sourceMappingURL=show-popover.module.js.map

/***/ })

});
//# sourceMappingURL=81.js.map