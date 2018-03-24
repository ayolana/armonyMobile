webpackJsonp([40],{

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsPage; });
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


var TestimonialsPage = /** @class */ (function () {
    function TestimonialsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.testimonials = [
            {
                imageUrl: 'assets/img/misc/testimonial-1.jpg',
                quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
                name: 'Sue Shei',
                position: 'Founder'
            },
            {
                imageUrl: 'assets/img/misc/testimonial-2.jpg',
                quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
                name: 'Will Barrow',
                position: 'Web Designer'
            },
            {
                imageUrl: 'assets/img/misc/testimonial-3.jpg',
                quote: 'The only skills I have the patience to learn are those that have no real application in life.',
                name: 'Indigo Violet',
                position: 'Public Relations'
            },
            {
                imageUrl: 'assets/img/misc/testimonial-1.jpg',
                quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
                name: 'Sue Shei',
                position: 'Founder'
            },
            {
                imageUrl: 'assets/img/misc/testimonial-2.jpg',
                quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
                name: 'Will Barrow',
                position: 'Web Designer'
            },
            {
                imageUrl: 'assets/img/misc/testimonial-3.jpg',
                quote: 'The only skills I have the patience to learn are those that have no real application in life.',
                name: 'Indigo Violet',
                position: 'Public Relations'
            },
        ];
    }
    TestimonialsPage.prototype.ionViewDidLoad = function () {
        console.log('Hello Testimonials Page');
    };
    TestimonialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testimonials',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/testimonials/testimonials.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Testimonials</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<div *ngFor="let testimonial of testimonials">\n		<figure class="snip1574">\n			<img [src]="testimonial.imageUrl" alt="profile-sample2" />\n			<figcaption>\n				<blockquote>\n					<p>{{testimonial.quote}}</p>\n				</blockquote>\n				<h3>{{testimonial.name}}</h3>\n				<h5>{{testimonial.position}}</h5>\n			</figcaption>\n		</figure>\n	</div>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/pages/miscellaneous/testimonials/testimonials.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], TestimonialsPage);
    return TestimonialsPage;
}());

//# sourceMappingURL=testimonials.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsPageModule", function() { return TestimonialsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__testimonials__ = __webpack_require__(1249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestimonialsPageModule = /** @class */ (function () {
    function TestimonialsPageModule() {
    }
    TestimonialsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__testimonials__["a" /* TestimonialsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__testimonials__["a" /* TestimonialsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__testimonials__["a" /* TestimonialsPage */]
            ]
        })
    ], TestimonialsPageModule);
    return TestimonialsPageModule;
}());

//# sourceMappingURL=testimonials.module.js.map

/***/ })

});
//# sourceMappingURL=40.js.map