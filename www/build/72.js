webpackJsonp([72],{

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudStorageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_storage_crud_storage__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudStorageListPage = /** @class */ (function () {
    function CrudStorageListPage(loadingCtrl, modalCtrl, navParams, crudStorageProvider) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.crudStorageProvider = crudStorageProvider;
        this.dataNotes = { id: null }; //for form
    }
    CrudStorageListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 10000 });
        loader.present();
        this.crudStorageProvider.getNotesDB()
            .then(function (data) {
            _this.notesItems = data;
            if (data)
                loader.dismiss();
        });
    };
    CrudStorageListPage.prototype.addNotes = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CrudStorageDetailPage', { charSend: {} });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data !== null) {
                if (_this.notesItems === null) {
                    _this.notesItems = [];
                }
                _this.notesItems.push(data);
                _this.crudStorageProvider.saveNotesDB(_this.notesItems);
            }
        });
    };
    CrudStorageListPage.prototype.editNotes = function (event, notesItem) {
        var _this = this;
        var modal = this.modalCtrl.create('CrudStorageDetailPage', { charSend: notesItem });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.crudStorageProvider.saveNotesDB(_this.notesItems);
        });
    };
    CrudStorageListPage.prototype.deleteNotes = function (id, index) {
        this.notesItems.splice(index, 1);
        this.crudStorageProvider.saveNotesDB(this.notesItems);
    };
    CrudStorageListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crud-storage-list',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/crud/crud-storage-list/crud-storage-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CRUD Storage (Notes)</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addNotes()" icon-only color="royal">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n \n  <ion-list>\n    <ion-item-sliding *ngFor="let item of notesItems; let i = index">\n      <ion-item (click)="editNotes($event, item)">\n        {{ item.title }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="deleteNotes(item.id, i)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/crud/crud-storage-list/crud-storage-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_crud_storage_crud_storage__["a" /* CrudStorageProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_storage_crud_storage__["a" /* CrudStorageProvider */]])
    ], CrudStorageListPage);
    return CrudStorageListPage;
}());

//# sourceMappingURL=crud-storage-list.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudStorageListPageModule", function() { return CrudStorageListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_storage_list__ = __webpack_require__(1133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrudStorageListPageModule = /** @class */ (function () {
    function CrudStorageListPageModule() {
    }
    CrudStorageListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crud_storage_list__["a" /* CrudStorageListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crud_storage_list__["a" /* CrudStorageListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__crud_storage_list__["a" /* CrudStorageListPage */]
            ]
        })
    ], CrudStorageListPageModule);
    return CrudStorageListPageModule;
}());

//# sourceMappingURL=crud-storage-list.module.js.map

/***/ })

});
//# sourceMappingURL=72.js.map