webpackJsonp([91],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LISTMENUHOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LISTMENUCOMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LISTMENULOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LISTMENUSLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LISTMENUFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LISTMENUCRUD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LISTMENUNATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LISTMENUMISCELLANEOUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LISTMENUPROFIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LISTMENUFIREBASEUNLOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LISTMENUFIREBASELOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LISTMENUSETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LISTAVAILABLELANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCORDIONMENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//USED for Menu
var LISTMENUHOME = [
    { title: 'Dashboard v1', component: 'Homev1Page' },
    { title: 'Dashboard v2', component: 'Homev2Page' },
];
// set our app's menu list component
var LISTMENUCOMPONENT = [
    { title: 'Action Sheets', component: 'ActionSheetsPage' },
    { title: 'Alert', component: 'AlertPage' },
    { title: 'FABs', component: 'FabPage' },
    { title: 'Segment', component: 'SegmentPage' },
    { title: 'Toast', component: 'ToastPage' },
    { title: 'Modals', component: 'ModalsPage' },
    { title: 'Popovers', component: 'PopoversPage' },
    { title: 'Searchbar', component: 'SearchbarPage' },
];
var LISTMENULOGIN = [
    { title: 'Login Instagram Style', component: 'LoginInstagramPage' },
    { title: 'Login with Image Background', component: 'LoginOnePage' },
    { title: 'Login with Slider Text', component: 'LoginSliderPage' },
    { title: 'Login with Video Background', component: 'LoginBackgroundVideoPage' },
    { title: 'Login with Slider Background', component: 'LoginBackgroundSliderPage' },
];
var LISTMENUSLIDE = [
    { title: 'Ionic Slide', component: 'SlidePage' },
    { title: 'Slide with Color Changing', component: 'SlideColorChangingPage' },
    { title: 'Slide with Free Mode', component: 'SlideFreeModePage' },
    { title: 'Multiple Slides', component: 'SliderListPage' },
    { title: 'Nested Slides', component: 'SlideNestedPage' },
    { title: 'Slide Transitions', component: 'SlideTransitionsPage' },
    { title: 'Slide Right to Left', component: 'SlideRightToLeftPage' },
    { title: 'Slide with Pagination Arrows', component: 'SliderWithArrowsPage' },
    { title: 'Slide Walkthrough', component: 'SlideWalkthroughPage' }
];
// set our app's menu list form
var LISTMENUFORM = [
    { title: 'Checkbox', component: 'CheckboxPage' },
    { title: 'Date Time', component: 'DatetimePage' },
    { title: 'Select', component: 'SelectPage' },
    { title: 'Radio', component: 'RadioPage' },
    { title: 'Toggle', component: 'TogglePage' },
    { title: 'Range', component: 'RangePage' },
];
var LISTMENUCRUD = [
    { title: 'CRUD HTTP (Notes)', component: 'CrudHttpListPage' },
    { title: 'CRUD Firebase (Notes)', component: 'CrudFirebaseListPage' },
    { title: 'CRUD Storage (Notes)', component: 'CrudStorageListPage' },
];
// set our app's menu list native
var LISTMENUNATIVE = [
    { title: 'Action Sheet', component: 'NativeActionSheetPage' },
    // { title: 'App Rate', component: NativeAppRatePage },
    { title: 'Camera', component: 'NativeCameraPage' },
    { title: 'Call Number', component: 'NativeCallNumberPage' },
    { title: 'Crop Image', component: 'NativeCropPage' },
    { title: 'Date Picker', component: 'NativeDatePickerPage' },
    { title: 'Email Composer', component: 'NativeEmailComposerPage' },
    { title: 'Geolocation', component: 'NativeGeolocationPage' },
    { title: 'Instagram', component: 'NativeInstagramPage' },
    { title: 'Launch Navigator', component: 'NativeLaunchNavigatorPage' },
    { title: 'Photo Library', component: 'NativePhotoLibraryPage' },
    { title: 'SMS', component: 'NativeSmsPage' },
    { title: 'Social Sharing', component: 'NativeSocialSharingPage' },
    { title: 'Youtube Player', component: 'NativeYoutubePlayerPage' },
];
var LISTMENUMISCELLANEOUS = [
    { title: 'Accordion', component: 'AccordionPage' },
    { title: 'Infinite Scroll', component: 'FeatureInfiniteScrollPage' },
    { title: 'Pull to Refresh', component: 'FeaturePullToRefreshPage' },
    { title: 'Google Map', component: 'FeatureGoogleMapPage' },
    { title: 'Autosizing Textarea', component: 'AutosizingTextarea' },
    { title: 'Blog Post', component: 'BlogPostPage' },
    { title: 'Countdown', component: 'CountdownPage' },
    { title: 'Expandable Header', component: 'ExpandableHeaderPage' },
    { title: 'Flash Card', component: 'FlashCardPage' },
    { title: 'Pinterest Masonry Cards', component: 'MasonryCardsPage' },
    { title: 'Testimonials', component: 'TestimonialsPage' },
    { title: 'Timeline', component: 'TimelinePage' },
    { title: 'Tinder Cards', component: 'TinderCardsPage' }
];
var LISTMENUPROFIL = [
    { title: 'Profile Type 1', component: 'ProfileOnePage' },
    { title: 'Profile Type 2', component: 'ProfileThreePage' },
    { title: 'Profile Type 3', component: 'ProfileFourPage' },
    { title: 'Profile Setting', component: 'ProfileSettingsPage' },
];
var LISTMENUFIREBASEUNLOGIN = [
    { title: 'Login / Register', component: 'FirebaseAuthPage' },
    { title: 'Upload File', component: 'FirebaseUploadFilePage' },
];
var LISTMENUFIREBASELOGIN = [
    { title: 'Logout', component: 'logout' },
    { title: 'Upload File', component: 'FirebaseUploadFilePage' },
];
var LISTMENUSETTING = [
    { title: 'Language', component: 'LanguagePage' },
    { title: 'Theme', component: 'ThemingPage' },
];
var LISTAVAILABLELANGUAGE = [
    { title: 'English', value: 'en' },
    { title: 'France', value: 'fr' },
    { title: 'Turkey', value: 'tr' },
    { title: 'Hindi', value: 'hi' },
    { title: 'China', value: 'ch' },
];
//Main Menu1
var PAGES = [
    { icon: 'apps', title: 'Home', page: 'HomeListPage', active: true, },
    { icon: 'cube', title: 'Components', page: 'ComponentListPage', active: false, },
    { icon: 'paper', title: 'CRUD', page: 'CrudListPage', active: false, },
    { icon: 'document', title: 'Forms', page: 'FormListPage', active: false, },
    { icon: 'bonfire', title: 'Firebase', page: 'FirebaseListPage', active: false, },
    { icon: 'contact', title: 'Login', page: 'LoginListPage', active: false, },
    { icon: 'browsers', title: 'Side Menu', page: 'SideMenuPage', active: false, },
    { icon: 'ribbon', title: 'Miscellaneous', page: 'MiscellaneousListPage', active: false, },
    { icon: 'switch', title: 'Native', page: 'NativeListPage', active: false, },
    { icon: 'person', title: 'Profile', page: 'ProfileListPage', active: false, },
    { icon: 'film', title: 'Slides', page: 'SlidesListPage', active: false, },
    { icon: 'settings', title: 'Setting', page: 'SettingListPage', active: false },
];
//Main Menu Accordion, Next Update
var ACCORDIONMENU = [
    { icon: 'apps', title: 'Home', children: LISTMENUHOME, active: true, },
    { icon: 'cube', title: 'Components', children: LISTMENUCOMPONENT, active: false, },
    { icon: 'paper', title: 'CRUD', children: LISTMENUCRUD, active: false, },
    { icon: 'document', title: 'Forms', children: LISTMENUFORM, active: false, },
    { icon: 'bonfire', title: 'Firebase', children: LISTMENUFIREBASEUNLOGIN, active: false, },
    { icon: 'contact', title: 'Login', children: LISTMENULOGIN, active: false, },
    { icon: 'ribbon', title: 'Miscellaneous', children: LISTMENUMISCELLANEOUS, active: false, },
    { icon: 'switch', title: 'Native', children: LISTMENUNATIVE, active: false, },
    { icon: 'person', title: 'Profile', children: LISTMENUPROFIL, active: false, },
    { icon: 'film', title: 'Slides', children: LISTMENUSLIDE, active: false, },
    { icon: 'settings', title: 'Setting', children: LISTMENUSETTING, active: false },
];

var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=global.setting.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseAuthProvider = /** @class */ (function () {
    function FirebaseAuthProvider(afAuth, afd) {
        var _this = this;
        this.afAuth = afAuth;
        this.afd = afd;
        this.afAuth.authState.subscribe(function (result) {
            if (result !== null) {
                _this.currentUser = result;
                _this.getUserDB(result).snapshotChanges().subscribe(function (result) {
                    console.log("$key : ", result[0].key);
                    _this.currentUserKey = result[0].key;
                    var newObject = Object.assign({}, _this.currentUser, result[0]);
                    _this.currentUser = newObject;
                    console.log("new Current User : ", _this.currentUser);
                });
            }
        });
    }
    FirebaseAuthProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    FirebaseAuthProvider.prototype.getUserDB = function (data) {
        if (data === null) {
            return this.afd.list('ionium2/user/');
        }
        else {
            console.log("aaa");
            //Angular fire < 5
            // return this.afd.list('ionium2/user/', {
            //   query:{
            //     orderByChild:'email',            
            //     equalTo: data.email,
            //   }
            // });
            //Angular fire >= 5
            return this.afd.list('ionium2/user/', function (ref) {
                return ref.orderByChild('email').equalTo(data.email);
            });
        }
    };
    FirebaseAuthProvider.prototype.saveUserDB = function (proses, datas) {
        var _this = this;
        return new Promise(function (resolve) {
            var sendDatas = {
                photo: datas.photo,
                photoName: datas.photoName
            };
            if (proses == "update") {
                _this.afd.list('ionium2/user/').update(_this.currentUserKey, sendDatas);
            }
            else {
                _this.afd.list('ionium2/user/').push(datas);
            }
            resolve(true);
        });
    };
    FirebaseAuthProvider.prototype.doLogin = function (credentials) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
                .then(function (result) {
                var dataProses = [true, result];
                resolve(dataProses);
            }, function (error) {
                var dataProses = [false, error];
                resolve(dataProses);
            })
                .catch(function (e) {
                var dataProses = [false, e];
                resolve(dataProses);
            });
        });
    };
    FirebaseAuthProvider.prototype.doLogout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.afAuth.auth.signOut();
            observer.next(true);
            observer.complete();
        });
    };
    FirebaseAuthProvider.prototype.doRegister = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
                .then(function (result) {
                console.log("Register Result: ", result);
                //proses input to DB
                var dataUser = {
                    name: credentials.name,
                    email: credentials.email,
                    photo: "",
                    uid: result.uid,
                    emailVerified: result.emailVerified,
                };
                _this.saveUserDB("push", dataUser);
                observer.next(result);
                observer.complete();
            }, function (error) {
                observer.next(error);
                observer.complete();
            })
                .catch(function (e) {
                observer.next(e);
                observer.complete();
            });
        });
    };
    FirebaseAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseAuthProvider);
    return FirebaseAuthProvider;
}());

//# sourceMappingURL=firebase-auth.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = createTranslateLoader;
/* unused harmony export firebaseConfigEx */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NATIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PIPES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_variable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_setting__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_swing__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_firebase_firebase_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_crud_http_crud_http__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_crud_storage_crud_storage__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_util_toast_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_util_alert_service__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_action_sheet__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_crop__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_instagram__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_launch_navigator__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_library__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_sms__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_social_sharing__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_youtube_video_player__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_push__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_autosize_autosize__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_countdown_timer_timer__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_timer_progress_timer_progress__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_expandable_header_expandable_header__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_flash_card_flash_card__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_timeline_timeline__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_capitalize_pipe__ = __webpack_require__(863);
//Used for setting

//used for Firebase
var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_0__constant_variable__["a" /* ConstantVariable */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_0__constant_variable__["a" /* ConstantVariable */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_0__constant_variable__["a" /* ConstantVariable */].databaseURL,
    projectId: __WEBPACK_IMPORTED_MODULE_0__constant_variable__["a" /* ConstantVariable */].projectId,
    storageBucket: __WEBPACK_IMPORTED_MODULE_0__constant_variable__["a" /* ConstantVariable */].storageBucket,
    messagingSenderId: __WEBPACK_IMPORTED_MODULE_0__constant_variable__["a" /* ConstantVariable */].messagingSenderId
};
//Used for Theming

//MODULE









//PROVIDER






//NATIVE



// import { NativeAppRatePage } from '../pages/native-app-rate/native-app-rate';














//DIRECTIVES

//COMPONENTS





//PIPES

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var firebaseConfigEx = firebaseConfig;
var MODULES = [
    __WEBPACK_IMPORTED_MODULE_8_angular2_swing__["SwingModule"],
    __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
        loader: {
            provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
            useFactory: (createTranslateLoader),
            deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
        }
    }),
    __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
    __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
    __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
    __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_16__providers_util_alert_service__["a" /* AlertService */],
    __WEBPACK_IMPORTED_MODULE_15__providers_util_toast_service__["a" /* ToastService */],
    __WEBPACK_IMPORTED_MODULE_13__providers_crud_http_crud_http__["a" /* CrudHttpProvider */],
    __WEBPACK_IMPORTED_MODULE_11__providers_firebase_firebase_database__["a" /* FirebaseDatabaseProvider */],
    __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase_auth__["a" /* FirebaseAuthProvider */],
    __WEBPACK_IMPORTED_MODULE_14__providers_crud_storage_crud_storage__["a" /* CrudStorageProvider */],
    __WEBPACK_IMPORTED_MODULE_1__global_setting__["b" /* AppState */],
];
var NATIVES = [
    __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_19__ionic_native_action_sheet__["a" /* ActionSheet */],
    __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__["a" /* AppRate */],
    __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
    __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__["a" /* CallNumber */],
    __WEBPACK_IMPORTED_MODULE_23__ionic_native_crop__["a" /* Crop */],
    __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__["a" /* DatePicker */],
    __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__["a" /* EmailComposer */],
    __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
    __WEBPACK_IMPORTED_MODULE_27__ionic_native_instagram__["a" /* Instagram */],
    __WEBPACK_IMPORTED_MODULE_28__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
    __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_library__["a" /* PhotoLibrary */],
    __WEBPACK_IMPORTED_MODULE_30__ionic_native_sms__["a" /* SMS */],
    __WEBPACK_IMPORTED_MODULE_31__ionic_native_social_sharing__["a" /* SocialSharing */],
    __WEBPACK_IMPORTED_MODULE_32__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
    __WEBPACK_IMPORTED_MODULE_33__ionic_native_push__["a" /* Push */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_35__components_countdown_timer_timer__["a" /* Timer */],
    __WEBPACK_IMPORTED_MODULE_36__components_timer_progress_timer_progress__["a" /* TimerProgress */],
    __WEBPACK_IMPORTED_MODULE_35__components_countdown_timer_timer__["a" /* Timer */],
    __WEBPACK_IMPORTED_MODULE_37__components_expandable_header_expandable_header__["a" /* ExpandableHeader */],
    __WEBPACK_IMPORTED_MODULE_38__components_flash_card_flash_card__["a" /* FlashCardComponent */],
    __WEBPACK_IMPORTED_MODULE_39__components_timeline_timeline__["a" /* TimelineComponent */],
    __WEBPACK_IMPORTED_MODULE_39__components_timeline_timeline__["b" /* TimelineItemComponent */],
    __WEBPACK_IMPORTED_MODULE_39__components_timeline_timeline__["c" /* TimelineTimeComponent */]
];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_34__components_autosize_autosize__["a" /* Autosize */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_40__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantVariable; });
var ConstantVariable = {
    //URL API
    APIURL: "http://www.ionicpremium.com/ionium2/api/",
    //firebaseConfig
    // apiKey: "AIzaSyCgshQZw3-8FBMiQzzRUBq37i37Yur_B84",
    // authDomain: "ionic-premium.firebaseapp.com",
    // databaseURL: "https://ionic-premium.firebaseio.com",
    // projectId: "ionic-premium",
    // storageBucket: "ionic-premium.appspot.com",
    // messagingSenderId: "896704981923"
    apiKey: "AIzaSyAEozTbLYq0EEDfqJRT86zwFjKnpEYz4Os",
    authDomain: "testionic-94fa2.firebaseapp.com",
    databaseURL: "https://testionic-94fa2.firebaseio.com",
    projectId: "testionic-94fa2",
    storageBucket: "testionic-94fa2.appspot.com",
    messagingSenderId: "328405086925"
};
//# sourceMappingURL=constant-variable.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/components/action-sheets/action-sheets.module": [
		865,
		90
	],
	"../pages/components/alert/alert.module": [
		866,
		89
	],
	"../pages/components/checkbox/checkbox.module": [
		867,
		88
	],
	"../pages/components/components.module": [
		868,
		87
	],
	"../pages/components/datetime/datetime.module": [
		869,
		86
	],
	"../pages/components/fab/fab.module": [
		871,
		85
	],
	"../pages/components/modals/modalpopup/modalpopup.module": [
		870,
		84
	],
	"../pages/components/modals/modals.module": [
		872,
		83
	],
	"../pages/components/popovers/popovers.module": [
		873,
		82
	],
	"../pages/components/popovers/show-popover/show-popover.module": [
		874,
		81
	],
	"../pages/components/searchbar/searchbar.module": [
		875,
		80
	],
	"../pages/components/segment/segment.module": [
		877,
		79
	],
	"../pages/components/toast/toast.module": [
		876,
		78
	],
	"../pages/crud/crud-firebase-list/crud-firebase-detail/crud-firebase-detail.module": [
		878,
		77
	],
	"../pages/crud/crud-firebase-list/crud-firebase-list.module": [
		880,
		76
	],
	"../pages/crud/crud-http-list/crud-http-detail/crud-http-detail.module": [
		879,
		75
	],
	"../pages/crud/crud-http-list/crud-http-list.module": [
		881,
		74
	],
	"../pages/crud/crud-storage-list/crud-storage-detail/crud-storage-detail.module": [
		882,
		73
	],
	"../pages/crud/crud-storage-list/crud-storage-list.module": [
		883,
		72
	],
	"../pages/crud/crud.module": [
		884,
		71
	],
	"../pages/firebase/firebase-auth/firebase-auth.module": [
		885,
		70
	],
	"../pages/firebase/firebase-auth/firebase-login/firebase-login.module": [
		886,
		69
	],
	"../pages/firebase/firebase-auth/firebase-register/firebase-register.module": [
		887,
		68
	],
	"../pages/firebase/firebase-list.module": [
		888,
		67
	],
	"../pages/firebase/firebase-upload-file/firebase-upload-file.module": [
		889,
		1
	],
	"../pages/form/form.module": [
		890,
		66
	],
	"../pages/form/radio/radio.module": [
		891,
		65
	],
	"../pages/form/range/range.module": [
		892,
		64
	],
	"../pages/form/select/select.module": [
		893,
		63
	],
	"../pages/form/toggle/toggle.module": [
		894,
		62
	],
	"../pages/home/home.module": [
		895,
		61
	],
	"../pages/home/homev1/homev1.module": [
		896,
		60
	],
	"../pages/home/homev2/homev2.module": [
		897,
		59
	],
	"../pages/login/login-background-slider/login-background-slider.module": [
		898,
		58
	],
	"../pages/login/login-background-video/login-background-video.module": [
		899,
		57
	],
	"../pages/login/login-instagram/login-instagram.module": [
		900,
		56
	],
	"../pages/login/login-one/login-one.module": [
		901,
		55
	],
	"../pages/login/login-slider/login-slider.module": [
		902,
		54
	],
	"../pages/login/login.module": [
		903,
		53
	],
	"../pages/miscellaneous/accordion/accordion.module": [
		904,
		52
	],
	"../pages/miscellaneous/autosizing-textarea/autosizing-textarea.module": [
		905,
		51
	],
	"../pages/miscellaneous/blog-post/blog-post.module": [
		906,
		50
	],
	"../pages/miscellaneous/charts/charts.module": [
		907,
		0
	],
	"../pages/miscellaneous/countdown/countdown.module": [
		908,
		49
	],
	"../pages/miscellaneous/expandable-header/expandable-header.module": [
		909,
		48
	],
	"../pages/miscellaneous/feature-google-map/feature-google-map.module": [
		910,
		47
	],
	"../pages/miscellaneous/feature-infinite-scroll/feature-infinite-scroll.module": [
		911,
		46
	],
	"../pages/miscellaneous/feature-pull-to-refresh/feature-pull-to-refresh.module": [
		912,
		45
	],
	"../pages/miscellaneous/flash-card/flash-card.module": [
		913,
		44
	],
	"../pages/miscellaneous/masonry-cards/masonry-cards.module": [
		914,
		43
	],
	"../pages/miscellaneous/miscellaneous.module": [
		915,
		42
	],
	"../pages/miscellaneous/notif-detail/notif-detail.module": [
		916,
		41
	],
	"../pages/miscellaneous/testimonials/testimonials.module": [
		917,
		40
	],
	"../pages/miscellaneous/timeline/timeline.module": [
		918,
		39
	],
	"../pages/miscellaneous/tinder-cards/tinder-cards.module": [
		919,
		38
	],
	"../pages/native/native-action-sheet/native-action-sheet.module": [
		920,
		37
	],
	"../pages/native/native-app-rate/native-app-rate.module": [
		922,
		36
	],
	"../pages/native/native-call-number/native-call-number.module": [
		921,
		35
	],
	"../pages/native/native-camera/native-camera.module": [
		923,
		34
	],
	"../pages/native/native-crop/native-crop.module": [
		924,
		33
	],
	"../pages/native/native-date-picker/native-date-picker.module": [
		925,
		32
	],
	"../pages/native/native-email-composer/native-email-composer.module": [
		926,
		31
	],
	"../pages/native/native-geolocation/native-geolocation.module": [
		927,
		30
	],
	"../pages/native/native-instagram/native-instagram.module": [
		928,
		29
	],
	"../pages/native/native-launch-navigator/native-launch-navigator.module": [
		929,
		28
	],
	"../pages/native/native-photo-library/native-photo-library.module": [
		930,
		27
	],
	"../pages/native/native-sms/native-sms.module": [
		931,
		26
	],
	"../pages/native/native-social-sharing/native-social-sharing.module": [
		932,
		25
	],
	"../pages/native/native-youtube-player/native-youtube-player.module": [
		933,
		24
	],
	"../pages/native/native.module": [
		934,
		23
	],
	"../pages/profile/profile-four/profile-four.module": [
		935,
		22
	],
	"../pages/profile/profile-one/profile-one.module": [
		936,
		21
	],
	"../pages/profile/profile-settings/profile-settings.module": [
		937,
		20
	],
	"../pages/profile/profile-three/profile-three.module": [
		938,
		19
	],
	"../pages/profile/profile.module": [
		939,
		18
	],
	"../pages/setting/language/language.module": [
		940,
		17
	],
	"../pages/setting/setting-list.module": [
		943,
		16
	],
	"../pages/setting/theming/theming.module": [
		941,
		15
	],
	"../pages/side-menu/side-menu.module": [
		942,
		14
	],
	"../pages/slide/slide-carousel/slide-carousel.module": [
		945,
		13
	],
	"../pages/slide/slide-color-changing/slide-color-changing.module": [
		944,
		12
	],
	"../pages/slide/slide-free-mode/slide-free-mode.module": [
		946,
		11
	],
	"../pages/slide/slide-ionic/slide.module": [
		947,
		10
	],
	"../pages/slide/slide-nested/slide-nested.module": [
		948,
		9
	],
	"../pages/slide/slide-photo-gallery/slide-photo-gallery.module": [
		949,
		8
	],
	"../pages/slide/slide-rtl/slide-rtl.module": [
		950,
		7
	],
	"../pages/slide/slide-transitions/slide-transitions.module": [
		951,
		6
	],
	"../pages/slide/slide-walkthrough/slide-walkthrough.module": [
		952,
		5
	],
	"../pages/slide/slider-list/slider-list.module": [
		953,
		4
	],
	"../pages/slide/slider-with-arrows/slider-with-arrows.module": [
		954,
		3
	],
	"../pages/slide/slides.module": [
		955,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 409;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_imports__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_imports__["e" /* PIPES */],
                __WEBPACK_IMPORTED_MODULE_0__app_imports__["b" /* DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__app_imports__["e" /* PIPES */],
                __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant_variable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SERVER_URL = {
    getNormal: __WEBPACK_IMPORTED_MODULE_2__app_constant_variable__["a" /* ConstantVariable */].APIURL + 'index.php/tbl_note',
    getLimit: __WEBPACK_IMPORTED_MODULE_2__app_constant_variable__["a" /* ConstantVariable */].APIURL + 'limit.php',
};
var CrudHttpProvider = /** @class */ (function () {
    function CrudHttpProvider(http) {
        this.http = http;
        this.limitData = 10;
        this.datas = [];
        console.log('Hello CrudHttpProvider Provider');
        this.datas = null;
    }
    CrudHttpProvider.prototype.getNotesDB = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(SERVER_URL.getNormal)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // console.log(data);
                _this.datas = data.dataNotes;
                resolve(_this.datas);
            });
        });
    };
    CrudHttpProvider.prototype.getNotesDBLimit = function (start) {
        var _this = this;
        if (start === void 0) { start = 0; }
        return new Promise(function (resolve) {
            _this.http.get(SERVER_URL.getLimit + '?start=' + start + '&limitData=' + _this.limitData)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.datas = data.dataNotes;
                resolve(_this.datas);
            });
        });
    };
    CrudHttpProvider.prototype.saveNotesDB = function (datas) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }), options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (datas.id) {
            return new Promise(function (resolve) {
                _this.http.post(SERVER_URL.getNormal + '/' + datas.id, datas, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    // console.log(data);
                    resolve(data.dataNotes);
                }, function (error) {
                    console.log("error " + error);
                });
            });
        }
        else {
            return new Promise(function (resolve) {
                _this.http.post(SERVER_URL.getNormal, datas, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    // console.log(data);
                    resolve(data.dataNotes[0].id);
                }, function (error) {
                    console.log("error " + error);
                });
            });
        }
    };
    CrudHttpProvider.prototype.deleteNotesDB = function (id) {
        this.http.get(SERVER_URL.getNormal + '/' + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("error " + error);
        });
    };
    CrudHttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CrudHttpProvider);
    return CrudHttpProvider;
}());

//# sourceMappingURL=crud-http.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseDatabaseProvider = /** @class */ (function () {
    function FirebaseDatabaseProvider(afd) {
        this.afd = afd;
        console.log('Hello FirebaseProvider Provider');
        this.itemsRef = this.afd.list('ionium2/notes/');
    }
    FirebaseDatabaseProvider.prototype.getNotesDB = function () {
        return this.itemsRef;
    };
    FirebaseDatabaseProvider.prototype.saveNotesDB = function (datas) {
        console.log(datas);
        if (datas.key) {
            var tmp = datas.key;
            datas.key = {};
            console.log(datas);
            this.itemsRef.update(tmp, datas);
        }
        else {
            this.itemsRef.push(datas);
        }
    };
    FirebaseDatabaseProvider.prototype.deleteNotesDB = function (id) {
        this.itemsRef.remove(id);
    };
    FirebaseDatabaseProvider.prototype.cleanData = function (data) {
        // data.forEach(element => {
        // });
    };
    FirebaseDatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDatabaseProvider);
    return FirebaseDatabaseProvider;
}());

//# sourceMappingURL=firebase-database.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudStorageProvider = /** @class */ (function () {
    function CrudStorageProvider(storage) {
        this.storage = storage;
        console.log('Hello CrudStorageProvider Provider');
        this.datas = null;
    }
    CrudStorageProvider.prototype.getNotesDB = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('notes')
                .then(function (data) {
                console.log(data);
                _this.datas = JSON.parse(data);
                console.log(_this.datas);
                resolve(_this.datas);
            });
        });
    };
    CrudStorageProvider.prototype.saveNotesDB = function (datas) {
        this.storage.set('notes', JSON.stringify(datas))
            .then(function (data) {
            console.log("save success. Data : ", data);
        });
    };
    CrudStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CrudStorageProvider);
    return CrudStorageProvider;
}());

//# sourceMappingURL=crud-storage.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
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


var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    AlertService.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(481);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_imports__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 //enableProdMode : make development faster



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__app_imports__["c" /* MODULES */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/components/action-sheets/action-sheets.module#ActionSheetsPageModule', name: 'ActionSheetsPage', segment: 'action-sheets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/checkbox/checkbox.module#CheckboxPageModule', name: 'CheckboxPage', segment: 'checkbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/components.module#ComponentListPageModule', name: 'ComponentListPage', segment: 'components', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/datetime/datetime.module#DatetimePageModule', name: 'DatetimePage', segment: 'datetime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/modals/modalpopup/modalpopup.module#ModalContentPageModule', name: 'ModalContentPage', segment: 'modalpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/fab/fab.module#FabPageModule', name: 'FabPage', segment: 'fab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/modals/modals.module#ModalsPageModule', name: 'ModalsPage', segment: 'modals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/popovers/popovers.module#PopoversPageModule', name: 'PopoversPage', segment: 'popovers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/popovers/show-popover/show-popover.module#ShowPopoverPageModule', name: 'ShowPopoverPage', segment: 'show-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/searchbar/searchbar.module#SearchbarPageModule', name: 'SearchbarPage', segment: 'searchbar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/toast/toast.module#ToastPageModule', name: 'ToastPage', segment: 'toast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/segment/segment.module#SegmentPageModule', name: 'SegmentPage', segment: 'segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud-firebase-list/crud-firebase-detail/crud-firebase-detail.module#CrudFirebaseDetailPageModule', name: 'CrudFirebaseDetailPage', segment: 'crud-firebase-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud-http-list/crud-http-detail/crud-http-detail.module#CrudHttpDetailPageModule', name: 'CrudHttpDetailPage', segment: 'crud-http-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud-firebase-list/crud-firebase-list.module#CrudFirebaseListPageModule', name: 'CrudFirebaseListPage', segment: 'crud-firebase-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud-http-list/crud-http-list.module#CrudHttpListPageModule', name: 'CrudHttpListPage', segment: 'crud-http-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud-storage-list/crud-storage-detail/crud-storage-detail.module#CrudStorageDetailPageModule', name: 'CrudStorageDetailPage', segment: 'crud-storage-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud-storage-list/crud-storage-list.module#CrudStorageListPageModule', name: 'CrudStorageListPage', segment: 'crud-storage-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crud/crud.module#CrudListPageModule', name: 'CrudListPage', segment: 'crud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firebase/firebase-auth/firebase-auth.module#FirebaseAuthPageModule', name: 'FirebaseAuthPage', segment: 'firebase-auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firebase/firebase-auth/firebase-login/firebase-login.module#FirebaseLoginPageModule', name: 'FirebaseLoginPage', segment: 'firebase-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firebase/firebase-auth/firebase-register/firebase-register.module#FirebaseRegisterPageModule', name: 'FirebaseRegisterPage', segment: 'firebase-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firebase/firebase-list.module#FirebaseListPageModule', name: 'FirebaseListPage', segment: 'firebase-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firebase/firebase-upload-file/firebase-upload-file.module#FirebaseUploadFilePageModule', name: 'FirebaseUploadFilePage', segment: 'firebase-upload-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/form.module#FormListPageModule', name: 'FormListPage', segment: 'form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/radio/radio.module#RadioPageModule', name: 'RadioPage', segment: 'radio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/range/range.module#RangePageModule', name: 'RangePage', segment: 'range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/select/select.module#SelectPageModule', name: 'SelectPage', segment: 'select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/toggle/toggle.module#TogglePageModule', name: 'TogglePage', segment: 'toggle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeListPageModule', name: 'HomeListPage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/homev1/homev1.module#LoginListPageModule', name: 'Homev1Page', segment: 'homev1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/homev2/homev2.module#LoginListPageModule', name: 'Homev2Page', segment: 'homev2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-background-slider/login-background-slider.module#LoginBackgroundSliderPageModule', name: 'LoginBackgroundSliderPage', segment: 'login-background-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-background-video/login-background-video.module#LoginBackgroundVideoPageModule', name: 'LoginBackgroundVideoPage', segment: 'login-background-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-instagram/login-instagram.module#LoginInstagramPageModule', name: 'LoginInstagramPage', segment: 'login-instagram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-one/login-one.module#LoginOnePageModule', name: 'LoginOnePage', segment: 'login-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-slider/login-slider.module#LoginSliderPageModule', name: 'LoginSliderPage', segment: 'login-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginListPageModule', name: 'LoginListPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/accordion/accordion.module#AccordionPageModule', name: 'AccordionPage', segment: 'accordion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/autosizing-textarea/autosizing-textarea.module#AutosizingTextareaPageModule', name: 'AutosizingTextarea', segment: 'autosizing-textarea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/blog-post/blog-post.module#BlogPostPageModule', name: 'BlogPostPage', segment: 'blog-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/charts/charts.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/countdown/countdown.module#CountdownPageModule', name: 'CountdownPage', segment: 'countdown', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/expandable-header/expandable-header.module#ExpandableHeaderPageModule', name: 'ExpandableHeaderPage', segment: 'expandable-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/feature-google-map/feature-google-map.module#FeatureGoogleMapPageModule', name: 'FeatureGoogleMapPage', segment: 'feature-google-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/feature-infinite-scroll/feature-infinite-scroll.module#FeatureInfiniteScrollPageModule', name: 'FeatureInfiniteScrollPage', segment: 'feature-infinite-scroll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/feature-pull-to-refresh/feature-pull-to-refresh.module#FeaturePullToRefreshPageModule', name: 'FeaturePullToRefreshPage', segment: 'feature-pull-to-refresh', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/flash-card/flash-card.module#FlashCardPageModule', name: 'FlashCardPage', segment: 'flash-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/masonry-cards/masonry-cards.module#MasonryCardsPageModule', name: 'MasonryCardsPage', segment: 'masonry-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/miscellaneous.module#MiscellaneousListPageModule', name: 'MiscellaneousListPage', segment: 'miscellaneous', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/notif-detail/notif-detail.module#NotifDetailPageModule', name: 'NotifDetailPage', segment: 'notif-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/testimonials/testimonials.module#TestimonialsPageModule', name: 'TestimonialsPage', segment: 'testimonials', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miscellaneous/tinder-cards/tinder-cards.module#TinderCardsPageModule', name: 'TinderCardsPage', segment: 'tinder-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-action-sheet/native-action-sheet.module#NativeActionSheetPageModule', name: 'NativeActionSheetPage', segment: 'native-action-sheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-call-number/native-call-number.module#NativeCallNumberPageModule', name: 'NativeCallNumberPage', segment: 'native-call-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-app-rate/native-app-rate.module#NativeAppRatePageModule', name: 'NativeAppRatePage', segment: 'native-app-rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-camera/native-camera.module#NativeCameraPageModule', name: 'NativeCameraPage', segment: 'native-camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-crop/native-crop.module#NativeCropPageModule', name: 'NativeCropPage', segment: 'native-crop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-date-picker/native-date-picker.module#NativeDatePickerPageModule', name: 'NativeDatePickerPage', segment: 'native-date-picker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-email-composer/native-email-composer.module#NativeEmailComposerPageModule', name: 'NativeEmailComposerPage', segment: 'native-email-composer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-geolocation/native-geolocation.module#NativeGeolocationPageModule', name: 'NativeGeolocationPage', segment: 'native-geolocation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-instagram/native-instagram.module#NativeInstagramPageModule', name: 'NativeInstagramPage', segment: 'native-instagram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-launch-navigator/native-launch-navigator.module#NativeLaunchNavigatorPageModule', name: 'NativeLaunchNavigatorPage', segment: 'native-launch-navigator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-photo-library/native-photo-library.module#NativePhotoLibraryPageModule', name: 'NativePhotoLibraryPage', segment: 'native-photo-library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-sms/native-sms.module#NativeSmsPageModule', name: 'NativeSmsPage', segment: 'native-sms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-social-sharing/native-social-sharing.module#NativeSocialSharingPageModule', name: 'NativeSocialSharingPage', segment: 'native-social-sharing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native-youtube-player/native-youtube-player.module#NativeYoutubePlayerPageModule', name: 'NativeYoutubePlayerPage', segment: 'native-youtube-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native/native.module#NativeListPageModule', name: 'NativeListPage', segment: 'native', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-four/profile-four.module#ProfileFourPageModule', name: 'ProfileFourPage', segment: 'profile-four', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-one/profile-one.module#ProfileOnePageModule', name: 'ProfileOnePage', segment: 'profile-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-settings/profile-settings.module#ProfileSettingsPageModule', name: 'ProfileSettingsPage', segment: 'profile-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile-three/profile-three.module#ProfileThreePageModule', name: 'ProfileThreePage', segment: 'profile-three', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfileListPageModule', name: 'ProfileListPage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/theming/theming.module#ThemingPageModule', name: 'ThemingPage', segment: 'theming', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/side-menu/side-menu.module#SideMenuPageModule', name: 'SideMenuPage', segment: 'side-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting-list.module#SettingListPageModule', name: 'SettingListPage', segment: 'setting-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-color-changing/slide-color-changing.module#SlideColorChangingPageModule', name: 'SlideColorChangingPage', segment: 'slide-color-changing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-carousel/slide-carousel.module#SlideCarouselPageModule', name: 'SlideCarouselPage', segment: 'slide-carousel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-free-mode/slide-free-mode.module#SlideFreeModePageModule', name: 'SlideFreeModePage', segment: 'slide-free-mode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-ionic/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-nested/slide-nested.module#SlideNestedPageModule', name: 'SlideNestedPage', segment: 'slide-nested', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-photo-gallery/slide-photo-gallery.module#SlidePhotoGalleryPageModule', name: 'SlidePhotoGalleryPage', segment: 'slide-photo-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-rtl/slide-rtl.module#SlideRightToLeftPageModule', name: 'SlideRightToLeftPage', segment: 'slide-rtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-transitions/slide-transitions.module#SlideTransitionsPageModule', name: 'SlideTransitionsPage', segment: 'slide-transitions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-walkthrough/slide-walkthrough.module#SlideWalkthroughPageModule', name: 'SlideWalkthroughPage', segment: 'slide-walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slider-list/slider-list.module#SliderListPageModule', name: 'SliderListPage', segment: 'slider-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slider-with-arrows/slider-with-arrows.module#SliderWithArrowsPageModule', name: 'SliderWithArrowsPage', segment: 'slider-with-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slides.module#SlidesListPageModule', name: 'SlidesListPage', segment: 'slides', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__app_imports__["f" /* PROVIDERS */],
                __WEBPACK_IMPORTED_MODULE_4__app_imports__["d" /* NATIVES */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = /** @class */ (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Timer = /** @class */ (function () {
    function Timer() {
    }
    Timer.prototype.ngOnInit = function () {
        this.initTimer();
    };
    Timer.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    Timer.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    Timer.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    Timer.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    Timer.prototype.resumeTimer = function () {
        this.startTimer();
    };
    Timer.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    Timer.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], Timer.prototype, "timeInSeconds", void 0);
    Timer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/countdown-timer/timer.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n		<button ion-button *ngIf="timeInSeconds && timeInSeconds > 0" large block clear class="timer-button x-large">{{timer.displayTime}}</button>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/countdown-timer/timer.html"*/
        })
    ], Timer);
    return Timer;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerProgress = /** @class */ (function () {
    // private fixTransform;
    function TimerProgress(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TimerProgress.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerProgress.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerProgress.prototype.initProgressBar = function () {
        this.percent = 100;
        this.increment = 180 / 100;
        var progress = 'rotate(' + this.increment * this.percent + 'deg)';
        var transform = this.sanitizer.bypassSecurityTrustStyle(progress);
        console.log(transform);
        var fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
        console.log(fixTransform);
    };
    TimerProgress.prototype.initTimer = function () {
        this.initProgressBar();
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerProgress.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerProgress.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerProgress.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerProgress.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            _this.percent = _this.timer.secondsRemaining / _this.timer.seconds * 100;
            _this.increment = 180 / 100;
            var progress = 'rotate(' + _this.increment * _this.percent + 'deg)';
            var transform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            console.log(transform);
            var fixTransform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            console.log(fixTransform);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerProgress.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TimerProgress.prototype, "timeInSeconds", void 0);
    TimerProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer-progress',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/timer-progress/timer-progress.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n         <div class="radial-progress" data-progress="0">\n            <div class="circle">\n                <div class="mask full" [style.transform]="transform">\n                <div class="fill" [style.transform]="transform"></div>\n                </div>\n                <div class="mask half">\n                <div class="fill" [style.transform]="transform"></div>\n                <div class="fill fix" [style.transform]="fixTransform"></div>\n                </div>\n                <div class="shadow"></div>\n            </div>\n            <div class="inset">\n                <div class="percentage">{{timer.displayTime}}</div>\n            </div>\n        </div>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/timer-progress/timer-progress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TimerProgress);
    return TimerProgress;
}());

//# sourceMappingURL=timer-progress.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableHeader = /** @class */ (function () {
    function ExpandableHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ExpandableHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeader.prototype, "headerHeight", void 0);
    ExpandableHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable-header',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/expandable-header/expandable-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/expandable-header/expandable-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableHeader);
    return ExpandableHeader;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = /** @class */ (function () {
    function FlashCardComponent() {
        this.toggled = false;
    }
    FlashCardComponent.prototype.ngAfterViewChecked = function () {
        var frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
        var backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
        var h = ((frontH > backH) ? frontH : backH) + 'px';
        this.fcContainer.nativeElement.style.height = h;
        this.fcBack.nativeElement.style.height = h;
        this.fcFront.nativeElement.style.height = h;
    };
    FlashCardComponent.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fcContainer'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('front'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcFront", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('back'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcBack", void 0);
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flash-card',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/flash-card/flash-card.html"*/'<ion-card class="fc-container" (click)="toggle()" [class.fc-back]="toggled" #fcContainer>\n    <div class="front" #front>\n        <ng-content class="" select=".fc-front"></ng-content>\n    </div>\n \n    <div class="back" #back>\n        <ng-content select=".fc-back"></ng-content>\n    </div>\n</ion-card>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/flash-card/flash-card.html"*/
        })
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.endIcon = "ionic";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endIcon'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "endIcon", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/timeline/timeline.html"*/'<div class="timeline">\n  <ng-content></ng-content>\n\n  <timeline-item>\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n  </timeline-item>\n\n</div>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/components/timeline/timeline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

var TimelineItemComponent = /** @class */ (function () {
    function TimelineItemComponent() {
    }
    TimelineItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-item',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineItemComponent);
    return TimelineItemComponent;
}());

var TimelineTimeComponent = /** @class */ (function () {
    function TimelineTimeComponent() {
        this.time = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
        __metadata("design:type", Object)
    ], TimelineTimeComponent.prototype, "time", void 0);
    TimelineTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-time',
            template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words = value.split(' ');
            value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_setting__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase_auth__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ConstantVariable } from './constant-variable';




var MyApp = /** @class */ (function () {
    function MyApp(platform, events, menu, statusBar, splashScreen, push, global, alertCtrl, menuCtrl, translate, config, 
        // public navCtrl: NavController, 
        fireAuthService) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.config = config;
        this.fireAuthService = fireAuthService;
        this.rootPage = 'Homev1Page';
        this.activePage = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.isLogin = false;
        this.initTranslate();
        this.initializeApp();
        //Main Menu
        this.pages = __WEBPACK_IMPORTED_MODULE_5__global_setting__["p" /* PAGES */];
        //user data after login
        this.userData = {
            name: "Ionium 2",
            email: "ionicpremium@gmail.com",
            photo: ""
        };
        this.fireAuthService.afAuth.authState.subscribe(function (result) {
            if (result !== null) {
                console.log(result);
                _this.fireAuthService.getUserDB(result).snapshotChanges().subscribe(function (result) {
                    _this.userData = result[0].payload.val();
                    console.log("new Current User : ", _this.userData);
                    // Enables then open the selected menu
                    _this.menuCtrl.enable(true, 'menu-avatar');
                    _this.menuCtrl.open('menu-avatar');
                    _this.isLogin = true;
                });
            }
            else {
                _this.isLogin = false;
                _this.userData = {
                    name: "Ionium 2",
                    email: "ionicpremium@gmail.com",
                    photo: ""
                };
            }
        });
        this.events.subscribe('photo:selected', function (photo) {
            console.log(photo);
        });
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            //  Set your language here
            this.translate.use('en');
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.global.set('theme', '');
            _this.initPushNotification();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        // firebase.initializeApp(firebaseConfigEx);
    };
    MyApp.prototype.openPage = function (pages) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(pages.page);
        this.activePage.next(pages);
    };
    MyApp.prototype.doLogout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure to logout',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.fireAuthService.doLogout()
                            .subscribe(function (allowed) {
                            console.log(allowed);
                            // Enables then open the selected menu
                            _this.menuCtrl.enable(true, 'menu-avatar');
                            _this.menuCtrl.open('menu-avatar');
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    //PUSH NOTIFICATION
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            //TODO - send device token to server
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                                _this.nav.push('NotifDetailPage', { message: data.message });
                            }
                        }]
                });
                confirmAlert.present();
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                _this.nav.push('NotifDetailPage', { message: data.message });
                console.log('Push notification clicked');
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/app/app.html"*/'\n<div class="{{global.state[\'theme\']}}">\n  <!--Default Menu-->\n  <ion-menu [content]="content" id="menu-components">\n    <ion-header color="primary">\n      <ion-toolbar>\n        <ion-title> {{ \'MENU\' | translate }} </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" [class.highlight]="p.active" (click)="openPage(p)">\n        {{ p.title | translate }}\n      </button>\n      <button *ngIf="isLogin" menuClose="left" ion-item detail-none (click)="doLogout()">\n        {{ \'LOGOUT\' | translate}}\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Side Menu with avatar-->\n  <ion-menu [content]="content" id="menu-avatar">\n    <ion-content>\n      <div #header>\n        <ion-row style="align-items:center;">\n          <ion-col col-3>\n            <img src="assets/icon/icon-email.svg" />\n            <span class="icon-badge">4</span>\n          </ion-col>\n          <ion-col col-6>\n            <img class="user-avatar round" [src]="userData.photo || placeholder" onerror="this.src=\'assets/img/logo/logo.png\'"\n            />\n          </ion-col>\n          <ion-col col-3>\n            <img src="assets/icon/icon-calendar.svg" />\n          </ion-col>\n        </ion-row>\n        <div style="text-align: center;">\n          <p class="name">{{ userData.name  }}</p>\n          <p class="e-mail">{{ userData.email  }}</p>       \n        </div>\n      </div>\n      <ion-list no-lines>\n        <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n          <!--<ion-icon [name]="p.icon" item-left></ion-icon>-->\n          {{ p.title | translate }}\n        </button>\n        <button *ngIf="isLogin" menuClose="left" ion-item detail-none (click)="doLogout()">\n          {{ \'LOGOUT\' | translate}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Material Design Menu-->\n  <ion-menu [content]="content" id="menu-material">\n    <ion-content>\n      <div class="menu-header">\n        <!--material-design-background-->\n        <img class="user-avatar round" [src]="userData.photo  || placeholder" onerror="this.src=\'assets/img/logo/logo.png\'"/>\n        <p class="name">{{ userData.name  }}</p>\n        <p class="e-mail">{{ userData.email  }}</p>\n      </div>\n      <ion-list no-lines>\n        <button menuClose="left" ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n          {{p.title | translate}}\n        </button>\n        <button *ngIf="isLogin" menuClose="left" ion-item detail-none (click)="doLogout()">\n            <ion-icon tem-left></ion-icon>\n            {{ \'LOGOUT\' | translate}}\n          </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_5__global_setting__["b" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase_auth__["a" /* FirebaseAuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[476]);
//# sourceMappingURL=main.js.map