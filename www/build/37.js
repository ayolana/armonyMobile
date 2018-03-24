webpackJsonp([37],{

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeActionSheetPage; });
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


// import { ActionSheet  } from '@ionic-native/action-sheet';
var NativeActionSheetPage = /** @class */ (function () {
    function NativeActionSheetPage(
        // private actionSheet: ActionSheet, 
        platform, alertCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // if (!this.platform.is('cordova')) {
        //   console.warn('Cordova is not available');
        //   const alert = this.alertCtrl.create({
        //     title: 'Attention!',
        //     subTitle: 'Cordova is not available',
        //     buttons: ['Close']
        //   });
        //   alert.present();
        // }
    }
    NativeActionSheetPage.prototype.showAction = function () {
        // this.buttonLabels = ['Share via Facebook', 'Share via Twitter'];
        // this.actionSheet.show({
        //   title: 'What do you want with this image?',
        //   subtitle: 'Choose an action',
        //   buttonLabels: this.buttonLabels,
        //   addCancelButtonWithLabel: 'Cancel',
        //   addDestructiveButtonWithLabel: 'Delete',
        //   androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
        //   destructiveButtonLast: true
        // }).then(
        //   (buttonIndex: number) => {
        //     console.log('Button pressed: ' + buttonIndex);
        //   },
        //   (err) => { 
        //     this.errorMessage = err; 
        //     console.log(err);
        //     const alert = this.alertCtrl.create({
        //       title: 'Attention!',
        //       subTitle: 'Only works in real device',
        //       buttons: ['Close']
        //     });
        //     alert.present();
        //    }
        // );
    };
    NativeActionSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-action-sheet',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-action-sheet/native-action-sheet.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Action Sheet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="showAction()"> Show Action Sheet </button>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-action-sheet/native-action-sheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativeActionSheetPage);
    return NativeActionSheetPage;
}());

//# sourceMappingURL=native-action-sheet.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeActionSheetPageModule", function() { return NativeActionSheetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_action_sheet__ = __webpack_require__(1252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeActionSheetPageModule = /** @class */ (function () {
    function NativeActionSheetPageModule() {
    }
    NativeActionSheetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_action_sheet__["a" /* NativeActionSheetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_action_sheet__["a" /* NativeActionSheetPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_action_sheet__["a" /* NativeActionSheetPage */]
            ]
        })
    ], NativeActionSheetPageModule);
    return NativeActionSheetPageModule;
}());

//# sourceMappingURL=native-action-sheet.module.js.map

/***/ })

});
//# sourceMappingURL=37.js.map