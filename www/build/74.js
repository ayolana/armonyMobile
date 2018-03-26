webpackJsonp([74],{

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudHttpListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudHttpListPage = /** @class */ (function () {
    function CrudHttpListPage(loadingCtrl, modalCtrl, crudHttpProvider) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.crudHttpProvider = crudHttpProvider;
        this.dataNotes = {};
    }
    CrudHttpListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 10000 });
        loader.present();
        this.crudHttpProvider.getNotesDB()
            .then(function (data) {
            _this.notesItems = data;
            if (data)
                loader.dismiss();
        });
    };
    CrudHttpListPage.prototype.addNotes = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CrudHttpDetailPage', { charSend: {} });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data !== null) {
                _this.notesItems.push(data);
            }
        });
    };
    CrudHttpListPage.prototype.editNotes = function (event, notesItem) {
        var modal = this.modalCtrl.create('CrudHttpDetailPage', { charSend: notesItem });
        modal.present();
    };
    CrudHttpListPage.prototype.deleteNotes = function (id, index) {
        this.notesItems.splice(index, 1);
        this.crudHttpProvider.deleteNotesDB(id);
    };
    CrudHttpListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crud-http-list',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/crud/crud-http-list/crud-http-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CRUD HTTP (Notes)</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addNotes()" icon-only color="royal">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n \n  <ion-list>\n    <ion-item-sliding *ngFor="let item of notesItems; let i = index">\n      <ion-item (click)="editNotes($event, item)">\n        {{ item.title }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="deleteNotes(item.id, i)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/crud/crud-http-list/crud-http-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_crud_http_crud_http__["a" /* CrudHttpProvider */]])
    ], CrudHttpListPage);
    return CrudHttpListPage;
}());

//# sourceMappingURL=crud-http-list.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudHttpListPageModule", function() { return CrudHttpListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_http_list__ = __webpack_require__(1131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrudHttpListPageModule = /** @class */ (function () {
    function CrudHttpListPageModule() {
    }
    CrudHttpListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crud_http_list__["a" /* CrudHttpListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crud_http_list__["a" /* CrudHttpListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__crud_http_list__["a" /* CrudHttpListPage */]
            ]
        })
    ], CrudHttpListPageModule);
    return CrudHttpListPageModule;
}());

//# sourceMappingURL=crud-http-list.module.js.map

/***/ })

});
//# sourceMappingURL=74.js.map