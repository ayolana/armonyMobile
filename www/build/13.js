webpackJsonp([13],{

/***/ 1276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideCarouselPage; });
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


var SlideCarouselPage = /** @class */ (function () {
    function SlideCarouselPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mySlideOptions = {
            slidesPerView: 'auto',
            // watchSlidesVisibility: true,
            centeredSlides: true,
            // observer: true,
            // passiveListeners: false,
            // loop: true,
            // lazyLoading: true,
            spaceBetween: 9
        };
        this.city1 = {
            name: 'Paris',
            favorited: false,
            image: 'http://bit.ly/2aXzczV',
            authorPic: 'http://bit.ly/2dMCa9y',
            favoriteCount: 10,
            comments: [1, 2, 3],
        };
        this.city2 = {
            name: 'London',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'http://bit.ly/26lzMu0',
            favoriteCount: 10,
            comments: [1, 2, 3],
        };
        this.city3 = {
            name: 'Gramalote',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'http://bit.ly/2dW9ZEl',
            favoriteCount: 10,
            comments: [1, 2, 3],
        };
        this.city4 = {
            name: 'Vladivostok',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'http://bit.ly/2e0NFe4',
            favoriteCount: 10,
            comments: [1, 2, 3],
        };
        this.water1 = {
            name: 'Water1',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 10,
            comments: [1, 2, 3],
        };
        this.water2 = {
            name: 'Water2',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 5,
            comments: [1],
        };
        this.water3 = {
            name: 'Water3',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 2,
            comments: [1],
        };
        this.water4 = {
            name: 'Water4',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 8,
            comments: [1, 4, 2, 3],
        };
        this.water5 = {
            name: 'Water5',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 4,
            comments: [1, 4, 2],
        };
        this.water6 = {
            name: 'Water6',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 7,
            comments: [1, 4],
        };
        this.water7 = {
            name: 'Water7',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'https://placeimg.com/600/400/nature',
            favoriteCount: 8,
            comments: [1, 4, 2, 3],
        };
        // Starting with an empty slider
        this.citiesSlides = [];
        // cities: any = {city1, city2, city3, city4};
        this.cities = [];
        // water: any = {water1, water2, water3, water4, water5, water6, water7};
        this.water = [];
        this.toggle = 0;
        this.cities = [this.city1, this.city2, this.city3, this.city4];
        this.citiesSlides = this.cities;
        this.water = [this.water1, this.water2, this.water3, this.water4, this.water5, this.water6, this.water7];
    }
    SlideCarouselPage.prototype.addingNewCity = function () {
        var newCity = {
            name: 'NewCity',
            favorited: false,
            authorPic: 'http://bit.ly/2dMCa9y',
            image: 'http://placekitten.com/g/900/550',
            favoriteCount: 0,
            comments: [],
        };
        this.cities.push(newCity);
    };
    SlideCarouselPage.prototype.changeCities = function () {
        if (this.toggle === 0) {
            this.toggle = 1;
            this.citiesSlides = this.cities;
        }
        else if (this.toggle === 1) {
            this.toggle = 2;
            this.citiesSlides = this.water;
        }
        else {
            this.toggle = 0;
            this.citiesSlides = [];
        }
    };
    SlideCarouselPage.prototype.goToCityPage = function (city, event) {
        console.log('Going to city' + city);
    };
    SlideCarouselPage.prototype.goToProfilePage = function () {
        // this.navCtrl.push(ContactPage)
    };
    SlideCarouselPage.prototype.toggleFavorite = function (city, event) {
        console.log('in the ToggleFavorite() with ', city.name);
        event.preventDefault();
        city.favorited = !city.favorited;
        if (city.favorited) {
            city.favoriteCount++;
        }
        else {
            city.favoriteCount--;
        }
    };
    SlideCarouselPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-carousel',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slide-carousel/slide-carousel.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Sliders</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h2>Welcome to Sliders!</h2>\n\n	<ion-slides #mySlider class="outerSlide">\n\n		<ion-slide class="innerSlides" *ngFor="let city of citiesSlides">\n			<ion-item class="outerIonItem">\n				<div class="favImgDiv">\n					<div class="imgDiv">\n						<img (click)="goToCityPage(city, $event)" src="{{city.image}}"/>\n					</div>\n\n					<button ion-button (click)="toggleFavorite(city, $event)" clear color="danger" class="favDiv">\n						<ion-icon ios="ios-heart" md="md-heart" *ngIf="city.favorited"></ion-icon>\n						<ion-icon  class="favDivInactiveHeart" ios="ios-heart-outline" md="md-heart-outline" *ngIf="!city.favorited"></ion-icon>\n					</button>\n\n				</div>\n\n				<ion-item no-lines class="profilePicCityName">\n					<h2>\n						{{city.name}}\n					</h2>\n					<ion-avatar (click)="goToProfilePage()" item-end class="profilePicAvatar">\n							<img class="profilePic" src="{{city.authorPic}}"/>\n					</ion-avatar>\n				</ion-item>\n\n				<ion-row no-padding>\n					<ion-col>\n\n						<button ion-button icon-left (click)="toggleFavorite(city, $event)" clear small color="primary">\n							<ion-icon ios="ios-heart" md="md-heart" *ngIf="city.favorited"></ion-icon>\n							<ion-icon ios="ios-heart-outline" md="md-heart-outline" *ngIf="!city.favorited"></ion-icon>\n							<label text-capitalize>{{city.favoriteCount}}</label>\n						</button>\n\n					</ion-col>\n					<ion-col text-center>\n						<button ion-button icon-left clear small color="primary">\n							<ion-icon name="chatbubbles"></ion-icon>\n							<label text-capitalize>{{" " + city.comments.length}}</label>\n						</button>\n					</ion-col>\n					<ion-col text-right>\n						<button ion-button icon-left clear small color="primary">\n							<ion-icon name=\'share-alt\'></ion-icon>\n							<label text-capitalize>Share</label>\n						</button>\n					</ion-col>\n				</ion-row>\n\n			</ion-item>\n		</ion-slide>\n\n	</ion-slides>\n\n	<button ion-button (click)="addingNewCity()">\n		New Slide\n	</button>\n\n	<button ion-button (click)="changeCities()">\n		Exchange Sliders\n	</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/slide/slide-carousel/slide-carousel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlideCarouselPage);
    return SlideCarouselPage;
}());

//# sourceMappingURL=slide-carousel.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideCarouselPageModule", function() { return SlideCarouselPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_carousel__ = __webpack_require__(1276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideCarouselPageModule = /** @class */ (function () {
    function SlideCarouselPageModule() {
    }
    SlideCarouselPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slide_carousel__["a" /* SlideCarouselPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slide_carousel__["a" /* SlideCarouselPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slide_carousel__["a" /* SlideCarouselPage */]
            ]
        })
    ], SlideCarouselPageModule);
    return SlideCarouselPageModule;
}());

//# sourceMappingURL=slide-carousel.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map