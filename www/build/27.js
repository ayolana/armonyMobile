webpackJsonp([27],{

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativePhotoLibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_library__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CDVPhotoLibraryPipe } from '../../app/pipes/cdvphotolibrary.pipe';
var NativePhotoLibraryPage = /** @class */ (function () {
    function NativePhotoLibraryPage(photoLibrary, platform, alertCtrl) {
        this.photoLibrary = photoLibrary;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        if (!this.platform.is('cordova')) {
            console.warn('Cordova is not available');
            var alert_1 = this.alertCtrl.create({
                title: 'Attention!',
                subTitle: 'Only works in real device',
                buttons: ['Close']
            });
            alert_1.present();
        }
        else {
            this.openPhotoLibrary();
        }
    }
    NativePhotoLibraryPage.prototype.openPhotoLibrary = function () {
        var _this = this;
        this.photoLibrary.requestAuthorization().then(function () {
            _this.photoLibrary.getLibrary().subscribe({
                next: function (library) {
                    var newLibrary = new Array();
                    library.forEach(function (libraryItem) {
                        // console.log(libraryItem.id);          // ID of the photo
                        // console.log(libraryItem.photoURL);    // Cross-platform access to photo
                        // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                        // console.log(libraryItem.fileName);
                        // console.log(libraryItem.width);
                        // console.log(libraryItem.height);
                        // console.log(libraryItem.creationDate);
                        // console.log(libraryItem.latitude);
                        // console.log(libraryItem.longitude);
                        // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
                        var step1 = libraryItem.photoURL.split('%2F').join('/').split('storage');
                        var step2 = "storage" + step1[1];
                        var newUrl = "file:///" + step2;
                        console.log(newUrl);
                        var newData = {
                            id: libraryItem.id,
                            photoURL: newUrl,
                            thumbnailURL: libraryItem.thumbnailURL,
                            fileName: libraryItem.fileName,
                            width: libraryItem.width,
                            height: libraryItem.height,
                            creationDate: libraryItem.creationDate,
                            latitude: libraryItem.latitude,
                            longitude: libraryItem.longitude,
                            albumIds: libraryItem.albumIds,
                        };
                        newLibrary.push(newData);
                    });
                    _this.showPhoto = newLibrary;
                    console.log(_this.showPhoto);
                },
                error: function (err) { _this.errorMessage = err; }
            });
        })
            .catch(function (err) { _this.errorMessage = err; console.log('permissions weren\'t granted'); });
    };
    NativePhotoLibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-native-photo-library',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-photo-library/native-photo-library.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Native Photo Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid class="form-container">\n      <ion-row>\n        <ion-col *ngFor="let item of showPhoto; let i = index" col-6 col-sm-4 col-md-6 col-lg-4 col-xl-2>\n          <img [src]="item.photoURL" />\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <p> {{ successMessage }} </p>\n  <p> {{ errorMessage }} </p>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/native/native-photo-library/native-photo-library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_library__["a" /* PhotoLibrary */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NativePhotoLibraryPage);
    return NativePhotoLibraryPage;
}());

//# sourceMappingURL=native-photo-library.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativePhotoLibraryPageModule", function() { return NativePhotoLibraryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_photo_library__ = __webpack_require__(1262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativePhotoLibraryPageModule = /** @class */ (function () {
    function NativePhotoLibraryPageModule() {
    }
    NativePhotoLibraryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_photo_library__["a" /* NativePhotoLibraryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_photo_library__["a" /* NativePhotoLibraryPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_photo_library__["a" /* NativePhotoLibraryPage */]
            ]
        })
    ], NativePhotoLibraryPageModule);
    return NativePhotoLibraryPageModule;
}());

//# sourceMappingURL=native-photo-library.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map