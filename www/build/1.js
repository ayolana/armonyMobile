webpackJsonp([1],{

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseUploadFilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FirebaseUploadFilePage = /** @class */ (function () {
    function FirebaseUploadFilePage(loadingCtrl, navCtrl, events, camera, platform, afAuth, fbAuth, alertCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.events = events;
        this.camera = camera;
        this.platform = platform;
        this.afAuth = afAuth;
        this.fbAuth = fbAuth;
        this.alertCtrl = alertCtrl;
        this.afAuth.authState.subscribe(function (result) {
            if (result !== null) {
                _this.loginStatus = true;
            }
            else {
                _this.loginStatus = false;
            }
        });
        this.imageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('ionium2/files/');
        this.userData = this.fbAuth.getUserInfo();
    }
    FirebaseUploadFilePage.prototype.makeFileIntoBlob = function (imagePath) {
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise(function (resolve, reject) {
            window.resolveLocalFileSystemURL(imagePath, function (fileEntry) {
                fileEntry.file(function (resFile) {
                    console.log("resFile : ", resFile);
                    console.log("fileEntry : ", fileEntry);
                    console.log("imagePath : " + imagePath);
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                        imgBlob.name = 'sample.jpg';
                        resolve(imgBlob);
                    };
                    reader.onerror = function (e) {
                        console.log('Failed file read: ' + e.toString());
                        reject(e);
                    };
                    reader.readAsArrayBuffer(resFile);
                });
            });
        });
    };
    // Return a promise to catch errors while loading image
    FirebaseUploadFilePage.prototype.getMedia = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.showLoading();
            _this.camera.getPicture({
                destinationType: _this.camera.DestinationType.FILE_URI,
                encodingType: _this.camera.EncodingType.JPEG,
                // mediaType: this.camera.MediaType.PICTURE,
                mediaType: _this.camera.MediaType.ALLMEDIA,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                quality: 80,
                correctOrientation: true
            })
                .then(function (imagePath) {
                if (_this.platform.is('android')) {
                    // Modify fileUri format, may not always be necessary
                    imagePath = 'file://' + imagePath;
                }
                console.log("imagePath : ", imagePath);
                // convert picture to blob
                return _this.makeFileIntoBlob(imagePath);
            }, function (err) {
                console.log(err);
                _this.errorMessage = err;
                var alert = _this.alertCtrl.create({
                    title: 'Attention!',
                    subTitle: 'Only works on real device',
                    buttons: ['Close']
                });
                alert.present();
                return false;
            })
                .then(function (imageBlob) {
                console.log("imageBlob : ", imageBlob);
                if (imageBlob)
                    return _this.uploadToFirebase(imageBlob);
                return false;
            })
                .then(function (uploadSnapshot) {
                console.log("uploadSnapshot : ", uploadSnapshot);
                if (uploadSnapshot) {
                    _this.uploadedImage = uploadSnapshot.photo;
                    _this.events.publish('photo:selected', uploadSnapshot.photo);
                    return _this.saveToDB(uploadSnapshot);
                }
                else {
                    return false;
                }
            })
                .then(function (uploadSnapshot) {
                _this.loading.dismiss();
                if (uploadSnapshot === false)
                    console.log("Ups!! Something wrong");
                else
                    console.log("Success All");
            })
                .catch(function (error) {
                console.log(error);
                _this.loading.dismiss();
                return false;
            });
        });
    };
    FirebaseUploadFilePage.prototype.uploadToFirebase = function (fileUri) {
        // Create a timestamp as filename
        var filename = new Date().getTime() + '.jpg';
        console.log("filename: ", filename);
        if (this.userData.photo !== "") {
            var desertRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('ionium2/files/' + this.userData.photoName);
            // Delete Old file
            desertRef.delete().then(function () {
                // Old File deleted successfully
            }).catch(function (error) {
                // Uh-oh, an error occurred!
            });
        }
        return new Promise(function (resolve, reject) {
            // Upload file
            var doUpload = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('ionium2/files/' + filename).put(fileUri);
            console.log("doUpload: ", doUpload);
            doUpload.on('state_changed', function (snapshot) {
                console.log('snapshot progess ' + snapshot);
                //make progress
                // We could log the progress here IF necessary
                // console.log('snapshot progess ' + snapshot);
            }, function (error) {
                reject(error);
            }, function () {
                var imageData = {
                    photo: doUpload.snapshot.downloadURL,
                    photoName: filename
                };
                resolve(imageData);
            });
        });
    };
    FirebaseUploadFilePage.prototype.saveToDB = function (imageData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("imageData: ", imageData);
            _this.fbAuth.saveUserDB("update", imageData)
                .then(function (status) {
                if (status)
                    resolve();
                else
                    reject();
            });
        });
    };
    FirebaseUploadFilePage.prototype.itemTapped = function (event, destination) {
        this.navCtrl.push(destination);
    };
    FirebaseUploadFilePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FirebaseUploadFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-firebase-upload-file',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/firebase/firebase-upload-file/firebase-upload-file.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Firebase Upload File</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n      <div *ngIf="loginStatus">\n          <button ion-button block color="primary" (click)="getMedia()" > Get Picture and Upload</button>          \n      </div>\n      <div *ngIf="!loginStatus">\n        Please Login Before Upload Your Profil Photo\n        <button ion-button block color="primary" (click)="itemTapped($event, \'FirebaseAuthPage\')" > Login / Register</button>\n      </div>\n      <br>\n      <div  *ngIf="uploadedImage">\n          Uploaded Image : <Br>\n          <img [src]="uploadedImage" *ngIf="uploadedImage" />\n          <br>\n          <span *ngIf="uploadedImage">Image Url : {{ uploadedImage }}</span>\n      </div>\n\n    \n    \n    </ion-content>\n    '/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/codegate/mobileApp/src/pages/firebase/firebase-upload-file/firebase-upload-file.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase_auth__["a" /* FirebaseAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FirebaseUploadFilePage);
    return FirebaseUploadFilePage;
}());

//# sourceMappingURL=firebase-upload-file.js.map

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var firebase = __webpack_require__(1141);
__webpack_require__(1147);
__webpack_require__(1148);
__webpack_require__(1149);
__webpack_require__(1158);

module.exports = firebase;


/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(1142);
module.exports = __webpack_require__(58).default;


/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shims_Array__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shims_Array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_shims_Array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shims_String__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shims_String___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_shims_String__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __global = (function () {
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    throw new Error('unable to locate global object');
})();
// Polyfill Promise
if (typeof Promise === 'undefined') {
    // HACK: TS throws an error if I attempt to use 'dot-notation'
    __global['Promise'] = Promise = __webpack_require__(1144);
}

//# sourceMappingURL=promise.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(114).setImmediate))

/***/ }),

/***/ 1145:
/***/ (function(module, exports) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the Array.prototype.find polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * https://tc39.github.io/ecma262/#sec-array.prototype.find
 */
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        }
    });
}
/**
 * This is the Array.prototype.findIndex polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
 */
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        }
    });
}

//# sourceMappingURL=Array.js.map


/***/ }),

/***/ 1146:
/***/ (function(module, exports) {

/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the String.prototype.startsWith polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 */
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
}

//# sourceMappingURL=String.js.map


/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(461);


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = __webpack_require__(460);


/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(1150);


/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerMessaging"] = registerMessaging;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__(58);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function (app) {
        if (self && 'ServiceWorkerGlobalScope' in self) {
            return new __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__["a" /* default */](app);
        }
        // Assume we are in the window context.
        return new __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */](app);
    };
    var namespaceExports = {
        // no-inline
        Messaging: __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */]
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(__WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_interface__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_default_sw__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_fcm_details__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_base64_to_array_buffer__ = __webpack_require__(1156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__firebase_util__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var WindowController = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     * @param {!firebase.app.App} app
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        _this.messageObserver_ = null;
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        /**
         * @private
         * @type {ServiceWorkerRegistration}
         */
        _this.registrationToUse_;
        /**
         * @private
         * @type {Promise}
         */
        _this.manifestCheckPromise_;
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.messageObserver_ = null;
        /**
         * @private {!firebase.Subscribe} The subscribe function to the onMessage
         * observer.
         */
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise the
     * resolves to an FCM token or null if permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        var _this = this;
        // Check that the required API's are available
        if (!this.isSupported_()) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.UNSUPPORTED_BROWSER));
        }
        return this.manifestCheck_().then(function () {
            return _super.prototype.getToken.call(_this);
        });
    };
    /**
     * The method checks that a manifest is defined and has the correct GCM
     * sender ID.
     * @private
     * @return {Promise} Returns a promise that resolves if the manifest matches
     * our required sender ID
     */
    WindowController.prototype.manifestCheck_ = function () {
        var _this = this;
        if (this.manifestCheckPromise_) {
            return this.manifestCheckPromise_;
        }
        var manifestTag = document.querySelector('link[rel="manifest"]');
        if (!manifestTag) {
            this.manifestCheckPromise_ = Promise.resolve();
        }
        else {
            this.manifestCheckPromise_ = fetch(manifestTag.href)
                .then(function (response) {
                return response.json();
            })
                .catch(function () {
                // If the download or parsing fails allow check.
                // We only want to error if we KNOW that the gcm_sender_id is incorrect.
            })
                .then(function (manifestContent) {
                if (!manifestContent) {
                    return;
                }
                if (!manifestContent['gcm_sender_id']) {
                    return;
                }
                if (manifestContent['gcm_sender_id'] !== '103953800507') {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.INCORRECT_GCM_SENDER_ID);
                }
            });
        }
        return this.manifestCheckPromise_;
    };
    /**
     * Request permission if it is not currently granted
     * @export
     * @returns {Promise} Resolves if the permission was granted, otherwise
     * rejects
     */
    WindowController.prototype.requestPermission = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                if (Notification.permission === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].granted) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var managePermissionResult = function (result) {
                            if (result === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].granted) {
                                return resolve();
                            }
                            else if (result === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].denied) {
                                return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.PERMISSION_BLOCKED));
                            }
                            else {
                                return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.PERMISSION_DEFAULT));
                            }
                        };
                        // The Notification.requestPermission API was changed to
                        // return a promise so now have to handle both in case
                        // browsers stop support callbacks for promised version
                        var permissionPromise = Notification.requestPermission(managePermissionResult);
                        if (permissionPromise) {
                            // Prefer the promise version as it's the future API.
                            permissionPromise.then(managePermissionResult);
                        }
                    })];
            });
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     * @export
     * @param {!ServiceWorkerRegistration} registration The service worker
     * registration that should be used to receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SW_REGISTRATION_EXPECTED);
        }
        if (typeof this.registrationToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse_ = registration;
    };
    /**
     * This method allows a developer to override the default vapid key
     * and instead use a custom VAPID public key.
     * @export
     * @param {!string} publicKey A URL safe base64 encoded string.
     */
    WindowController.prototype.usePublicVapidKey = function (publicKey) {
        if (typeof publicKey !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.INVALID_PUBLIC_VAPID_KEY);
        }
        if (typeof this.publicVapidKeyToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);
        }
        var parsedKey = Object(__WEBPACK_IMPORTED_MODULE_7__helpers_base64_to_array_buffer__["a" /* default */])(publicKey);
        if (parsedKey.length !== 65) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.PUBLIC_KEY_DECRYPTION_FAILED);
        }
        this.publicVapidKeyToUse_ = parsedKey;
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver An observer object
     * or a function triggered on message.
     * @param {function(!Error)=} optError Optional A function triggered on
     * message error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        return this.onMessage_(nextOrObserver, optError, optCompleted);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        return this.onTokenRefresh_(nextOrObserver, optError, optCompleted);
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @private
     * @param  {ServiceWorkerRegistration} registration Registration to wait
     * for service worker to become active
     * @return {Promise<!ServiceWorkerRegistration>} Wait for service worker
     * registration to become active
     */
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var _this = this;
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function () {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                }
                else if (serviceWorker.state === 'redundant') {
                    reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                }
                else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will regiater the default service worker and return the registration
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse_) {
            return this.waitForRegistrationToActivate_(this.registrationToUse_);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse_ is no longer undefined
        this.registrationToUse_ = null;
        return navigator.serviceWorker
            .register(__WEBPACK_IMPORTED_MODULE_4__models_default_sw__["a" /* default */].path, {
            scope: __WEBPACK_IMPORTED_MODULE_4__models_default_sw__["a" /* default */].scope
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        })
            .then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse_ = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the public VAPID key
     * provided by the developer.
     * @private
     */
    WindowController.prototype.getPublicVapidKey_ = function () {
        if (this.publicVapidKeyToUse_) {
            return Promise.resolve(this.publicVapidKeyToUse_);
        }
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_6__models_fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY);
    };
    /**
     * Gets a PushSubscription for the current user.
     * @private
     * @param {ServiceWorkerRegistration} registration
     * @return {Promise<PushSubscription>}
     */
    WindowController.prototype.getPushSubscription_ = function (swRegistration, publicVapidKey) {
        // Check for existing subscription first
        var subscription;
        var fcmTokenDetails;
        return swRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicVapidKey
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     *
     * @private
     */
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                case __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                case __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].PARAMS.DATA];
                    if (_this.messageObserver_) {
                        _this.messageObserver_.next(pushMessage);
                    }
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    /**
     * Checks to see if the required API's are valid or not.
     * @private
     * @return {boolean} Returns true if the desired APIs are available.
     */
    WindowController.prototype.isSupported_ = function () {
        return ('serviceWorker' in navigator &&
            'PushManager' in window &&
            'Notification' in window &&
            'fetch' in window &&
            ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
            PushSubscription.prototype.hasOwnProperty('getKey'));
    };
    return WindowController;
}(__WEBPACK_IMPORTED_MODULE_1__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (WindowController);

//# sourceMappingURL=window-controller.js.map


/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_interface__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clean_v1_undefined__ = __webpack_require__(1153);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var FCM_TOKEN_OBJ_STORE = 'fcm_token_object_Store';
var DB_NAME = 'fcm_token_details_db';
var DB_VERSION = 2;
/** @record */
function ValidateInput() { }
/** @type {string|undefined} */
ValidateInput.prototype.fcmToken;
/** @type {string|undefined} */
ValidateInput.prototype.swScope;
/** @type {string|undefined} */
ValidateInput.prototype.vapidKey;
/** @type {PushSubscription|undefined} */
ValidateInput.prototype.subscription;
/** @type {string|undefined} */
ValidateInput.prototype.fcmSenderId;
/** @type {string|undefined} */
ValidateInput.prototype.fcmPushSet;
var TokenDetailsModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](TokenDetailsModel, _super);
    function TokenDetailsModel() {
        return _super.call(this, DB_NAME, DB_VERSION) || this;
    }
    TokenDetailsModel.prototype.onDBUpgrade = function (db, evt) {
        if (evt.oldVersion < 1) {
            // New IDB instance
            var objectStore = db.createObjectStore(FCM_TOKEN_OBJ_STORE, {
                keyPath: 'swScope'
            });
            // Make sure the sender ID can be searched
            objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                unique: false
            });
            objectStore.createIndex('fcmToken', 'fcmToken', {
                unique: true
            });
        }
        if (evt.oldVersion < 2) {
            // Prior to version 2, we were using either 'fcm_token_details_db'
            // or 'undefined' as the database name due to bug in the SDK
            // So remove the old tokens and databases.
            Object(__WEBPACK_IMPORTED_MODULE_4__clean_v1_undefined__["a" /* cleanV1 */])();
        }
    };
    /**
     * This method takes an object and will check for known arguments and
     * validate the input.
     * @private
     * @param {!ValidateInput} input
     * @return {!Promise} Returns promise that resolves if input is valid,
     * rejects otherwise.
     */
    TokenDetailsModel.prototype.validateInputs_ = function (input) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                if (input.fcmToken) {
                    if (typeof input.fcmToken !== 'string' || input.fcmToken.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_TOKEN))];
                    }
                }
                if (input.swScope) {
                    if (typeof input.swScope !== 'string' || input.swScope.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE))];
                    }
                }
                if (input.vapidKey) {
                    if (!(input.vapidKey instanceof Uint8Array) ||
                        input.vapidKey.length !== 65) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_VAPID_KEY))];
                    }
                }
                if (input.subscription) {
                    if (!(input.subscription instanceof PushSubscription)) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SUBSCRIPTION))];
                    }
                }
                if (input.fcmSenderId) {
                    if (typeof input.fcmSenderId !== 'string' ||
                        input.fcmSenderId.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SENDER_ID))];
                    }
                }
                if (input.fcmPushSet) {
                    if (typeof input.fcmPushSet !== 'string' ||
                        input.fcmPushSet.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_PUSH_SET))];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     * @param {string} fcmToken
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromToken = function (fcmToken) {
        var _this = this;
        if (!fcmToken) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_TOKEN));
        }
        return this.validateInputs_({ fcmToken: fcmToken })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var index = objectStore.index('fcmToken');
                var request = index.get(fcmToken);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    var result = event.target.result
                        ? event.target.result
                        : null;
                    resolve(result);
                };
            });
        });
    };
    /**
     * Given a service worker scope, this method will look up the details in
     * indexedDB.
     * @public
     * @param {string} swScope
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromSWScope = function (swScope) {
        var _this = this;
        if (!swScope) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        return this.validateInputs_({ swScope: swScope })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                scopeRequest.onsuccess = function (event) {
                    var result = event.target.result
                        ? event.target.result
                        : null;
                    resolve(result);
                };
            });
        });
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @param {{swScope: !string, vapidKey: !string,
     * subscription: !PushSubscription, fcmSenderId: !string, fcmToken: !string,
     * fcmPushSet: !string}} input A plain js object containing args to save.
     * @return {Promise<void>}
     */
    TokenDetailsModel.prototype.saveTokenDetails = function (_a) {
        var _this = this;
        var swScope = _a.swScope, vapidKey = _a.vapidKey, subscription = _a.subscription, fcmSenderId = _a.fcmSenderId, fcmToken = _a.fcmToken, fcmPushSet = _a.fcmPushSet;
        if (!swScope) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        if (!vapidKey) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_VAPID_KEY));
        }
        if (!subscription) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SUBSCRIPTION));
        }
        if (!fcmSenderId) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SENDER_ID));
        }
        if (!fcmToken) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_TOKEN));
        }
        if (!fcmPushSet) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_PUSH_SET));
        }
        return this.validateInputs_({
            swScope: swScope,
            vapidKey: vapidKey,
            subscription: subscription,
            fcmSenderId: fcmSenderId,
            fcmToken: fcmToken,
            fcmPushSet: fcmPushSet
        })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            /**
             * @dict
             */
            var details = {
                swScope: swScope,
                vapidKey: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__["a" /* default */])(vapidKey),
                endpoint: subscription.endpoint,
                auth: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth')),
                p256dh: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh')),
                fcmSenderId: fcmSenderId,
                fcmToken: fcmToken,
                fcmPushSet: fcmPushSet,
                createTime: Date.now()
            };
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve();
                };
            });
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     * @return {Promise<Object>} Resolves once the FCM token details have been
     * deleted and returns the deleted details.
     */
    TokenDetailsModel.prototype.deleteToken = function (token) {
        var _this = this;
        if (typeof token !== 'string' || token.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.INVALID_DELETE_TOKEN));
        }
        return this.getTokenDetailsFromToken(token).then(function (details) {
            if (!details) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.DELETE_TOKEN_NOT_FOUND);
            }
            return _this.openDatabase().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                    var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                    var request = objectStore.delete(details['swScope']);
                    request.onerror = function (event) {
                        reject(event.target.error);
                    };
                    request.onsuccess = function (event) {
                        if (event.target.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.FAILED_TO_DELETE_TOKEN));
                            return;
                        }
                        resolve(details);
                    };
                });
            });
        });
    };
    return TokenDetailsModel;
}(__WEBPACK_IMPORTED_MODULE_1__db_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TokenDetailsModel);

//# sourceMappingURL=token-details-model.js.map


/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cleanV1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_iid_model__ = __webpack_require__(981);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * There seems to have been a bug in the messaging SDK versions <= 4.9.x
 * where the IndexedDB model was using a database name of 'undefined'.
 *
 * In 4.10.x we changed the model implementation, but kept the database
 * name as it should have been. This however introduced an issue where
 * two tokens were pointing to the same underlying PushSubscription.
 *
 * This code will look for the undefined database and delete any of the
 * underlying tokens.
 */

var OLD_DB_NAME = 'undefined';
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function handleDb(db) {
    if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
        // We found a database with the name 'undefined', but our expected object
        // store isn't defined.
        return;
    }
    var transaction = db.transaction(OLD_OBJECT_STORE_NAME);
    var objectStore = transaction.objectStore(OLD_OBJECT_STORE_NAME);
    var iidModel = new __WEBPACK_IMPORTED_MODULE_0__models_iid_model__["a" /* default */]();
    var openCursorRequest = objectStore.openCursor();
    openCursorRequest.onerror = function (event) {
        // NOOP - Nothing we can do.
        console.warn('Unable to cleanup old IDB.', event);
    };
    openCursorRequest.onsuccess = function () {
        var cursor = openCursorRequest.result;
        if (cursor) {
            // cursor.value contains the current record being iterated through
            // this is where you'd do something with the result
            var tokenDetails = cursor.value;
            iidModel.deleteToken(tokenDetails.fcmSenderId, tokenDetails.fcmToken, tokenDetails.fcmPushSet);
            cursor.continue();
        }
        else {
            db.close();
            indexedDB.deleteDatabase(OLD_DB_NAME);
        }
    };
}
function cleanV1() {
    var request = indexedDB.open(OLD_DB_NAME);
    request.onerror = function (event) {
        // NOOP - Nothing we can do.
    };
    request.onsuccess = function (event) {
        var db = request.result;
        handleDb(db);
    };
}


//# sourceMappingURL=clean-v1-undefined.js.map


/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_interface__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(963);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var FCM_VAPID_OBJ_STORE = 'fcm_vapid_object_Store';
var DB_NAME = 'fcm_vapid_details_db';
var DB_VERSION = 1;
var UNCOMPRESSED_PUBLIC_KEY_SIZE = 65;
var VapidDetailsModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](VapidDetailsModel, _super);
    function VapidDetailsModel() {
        return _super.call(this, DB_NAME, DB_VERSION) || this;
    }
    /**
     * @override
     * @param {IDBDatabase} db
     */
    VapidDetailsModel.prototype.onDBUpgrade = function (db) {
        db.createObjectStore(FCM_VAPID_OBJ_STORE, {
            keyPath: 'swScope'
        });
    };
    /**
     * Given a service worker scope, this method will look up the vapid key
     * in indexedDB.
     */
    VapidDetailsModel.prototype.getVapidFromSWScope = function (swScope) {
        if (typeof swScope !== 'string' || swScope.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        return this.openDatabase().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_VAPID_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function () {
                    reject(scopeRequest.error);
                };
                scopeRequest.onsuccess = function () {
                    var result = scopeRequest.result;
                    var vapidKey = null;
                    if (result) {
                        vapidKey = result.vapidKey;
                    }
                    resolve(vapidKey);
                };
            });
        });
    };
    /**
     * Save a vapid key against a swScope for later date.
     */
    VapidDetailsModel.prototype.saveVapidDetails = function (swScope, vapidKey) {
        var _this = this;
        if (typeof swScope !== 'string' || swScope.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        if (vapidKey === null || vapidKey.length !== UNCOMPRESSED_PUBLIC_KEY_SIZE) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_VAPID_KEY));
        }
        var details = {
            swScope: swScope,
            vapidKey: vapidKey
        };
        return this.openDatabase().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_VAPID_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function () {
                    reject(request.error);
                };
                request.onsuccess = function () {
                    resolve();
                };
            });
        });
    };
    /**
     * This method deletes details of the current FCM VAPID key for a SW scope.
     * Resolves once the scope/vapid details have been deleted and returns the
     * deleted vapid key.
     */
    VapidDetailsModel.prototype.deleteVapidDetails = function (swScope) {
        var _this = this;
        return this.getVapidFromSWScope(swScope).then(function (vapidKey) {
            if (!vapidKey) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.DELETE_SCOPE_NOT_FOUND);
            }
            return _this.openDatabase().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_VAPID_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                    var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                    var request = objectStore.delete(swScope);
                    request.onerror = function () {
                        reject(request.error);
                    };
                    request.onsuccess = function () {
                        if (request.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.FAILED_DELETE_VAPID_KEY));
                            return;
                        }
                        resolve(vapidKey);
                    };
                });
            });
        });
    };
    return VapidDetailsModel;
}(__WEBPACK_IMPORTED_MODULE_1__db_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (VapidDetailsModel);

//# sourceMappingURL=vapid-details-model.js.map


/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/firebase-messaging-sw.js',
    scope: '/firebase-cloud-messaging-push-scope'
});

//# sourceMappingURL=default-sw.js.map


/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* harmony default export */ __webpack_exports__["a"] = (function (base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
});

//# sourceMappingURL=base64-to-array-buffer.js.map


/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_interface__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_fcm_details__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__ = __webpack_require__(983);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var FCM_MSG = 'FCM_MSG';
var SWController = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SWController, _super);
    function SWController(app) {
        var _this = _super.call(this, app) || this;
        self.addEventListener('push', function (e) { return _this.onPush_(e); }, false);
        self.addEventListener('pushsubscriptionchange', function (e) { return _this.onSubChange_(e); }, false);
        self.addEventListener('notificationclick', function (e) { return _this.onNotificationClick_(e); }, false);
        /**
         * @private
         * @type {function(Object)|null}
         */
        _this.bgMessageHandler_ = null;
        return _this;
    }
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     * @private
     */
    SWController.prototype.onPush_ = function (event) {
        var _this = this;
        var msgPayload;
        try {
            msgPayload = event.data.json();
        }
        catch (err) {
            // Not JSON so not an FCM message
            return;
        }
        var handleMsgPromise = this.hasVisibleClients_().then(function (hasVisibleClients) {
            if (hasVisibleClients) {
                // Do not need to show a notification.
                if (msgPayload.notification || _this.bgMessageHandler_) {
                    // Send to page
                    return _this.sendMessageToWindowClients_(msgPayload);
                }
                return;
            }
            var notificationDetails = _this.getNotificationData_(msgPayload);
            if (notificationDetails) {
                var notificationTitle_1 = notificationDetails.title || '';
                return _this.getSWRegistration_().then(function (reg) {
                    return reg.showNotification(notificationTitle_1, notificationDetails);
                });
            }
            else if (_this.bgMessageHandler_) {
                return _this.bgMessageHandler_(msgPayload);
            }
        });
        event.waitUntil(handleMsgPromise);
    };
    /**
     * @private
     */
    SWController.prototype.onSubChange_ = function (event) {
        var _this = this;
        var promiseChain = this.getSWRegistration_()
            .then(function (registration) {
            return registration.pushManager
                .getSubscription()
                .then(function (subscription) {
                // TODO: Check if it's still valid
                // TODO: If not, then update token
            })
                .catch(function (err) {
                // The best thing we can do is log this to the terminal so
                // developers might notice the error.
                var tokenDetailsModel = _this.getTokenDetailsModel();
                return tokenDetailsModel
                    .getTokenDetailsFromSWScope(registration.scope)
                    .then(function (tokenDetails) {
                    if (!tokenDetails) {
                        // This should rarely occure, but could if indexedDB
                        // is corrupted or wiped
                        throw err;
                    }
                    // Attempt to delete the token if we know it's bad
                    return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                        throw err;
                    });
                });
            });
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.UNABLE_TO_RESUBSCRIBE, {
                message: err
            });
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     */
    SWController.prototype.onNotificationClick_ = function (event) {
        var _this = this;
        if (!(event.notification &&
            event.notification.data &&
            event.notification.data[FCM_MSG])) {
            // Not an FCM notification, do nothing.
            return;
        }
        // Prevent other listeners from receiving the event
        event.stopImmediatePropagation();
        event.notification.close();
        var msgPayload = event.notification.data[FCM_MSG];
        if (!msgPayload['notification']) {
            // Nothing to do.
            return;
        }
        var clickAction = msgPayload['notification']['click_action'];
        if (!clickAction) {
            // Nothing to do.
            return;
        }
        var promiseChain = this.getWindowClient_(clickAction)
            .then(function (windowClient) {
            if (!windowClient) {
                // Unable to find window client so need to open one.
                return self.clients.openWindow(clickAction);
            }
            return windowClient.focus();
        })
            .then(function (windowClient) {
            if (!windowClient) {
                // Window Client will not be returned if it's for a third party origin.
                return;
            }
            // Delete notification data from payload before sending to the page.
            var notificationData = msgPayload['notification'];
            delete msgPayload['notification'];
            var internalMsg = __WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED, msgPayload);
            // Attempt to send a message to the client to handle the data
            // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
            return _this.attemptToMessageClient_(windowClient, internalMsg);
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     * @param {Object} msgPayload
     * @return {NotificationOptions|undefined}
     */
    SWController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (typeof msgPayload.notification !== 'object') {
            return;
        }
        var notificationInformation = Object.assign({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation['data'] = (_a = {},
            _a[FCM_MSG] = msgPayload,
            _a);
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     * @export
     * @param {function(Object)} callback The callback to be called when a push
     * message is received and a notification must be shown. The callback will
     * be given the data from the push message.
     */
    SWController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler_ = callback;
    };
    /**
     * @private
     * @param {string} url The URL to look for when focusing a client.
     * @return {Object} Returns an existing window client or a newly opened
     * WindowClient.
     */
    SWController.prototype.getWindowClient_ = function (url) {
        // Use URL to normalize the URL when comparing to windowClients.
        // This at least handles whether to include trailing slashes or not
        var parsedURL = new URL(url, self.location).href;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var suitableClient = null;
            for (var i = 0; i < clientList.length; i++) {
                var parsedClientUrl = new URL(clientList[i].url, self.location).href;
                if (parsedClientUrl === parsedURL) {
                    suitableClient = clientList[i];
                    break;
                }
            }
            if (suitableClient) {
                return suitableClient;
            }
            return null;
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @private
     * @param {Object} client The WindowClient to send the message to.
     * @param {Object} message The message to send to the client.
     * @returns {Promise} Returns a promise that resolves after sending the
     * message. This does not guarantee that the message was successfully
     * received.
     */
    SWController.prototype.attemptToMessageClient_ = function (client, message) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                // NOTE: This returns a promise in case this API is abstracted later on to
                // do additional work
                if (!client) {
                    return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.NO_WINDOW_CLIENT_TO_MSG))];
                }
                client.postMessage(message);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @returns {Promise<boolean>} If there is currently a visible WindowClient,
     * this method will resolve to true, otherwise false.
     */
    SWController.prototype.hasVisibleClients_ = function () {
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            return clientList.some(function (client) { return client.visibilityState === 'visible'; });
        });
    };
    /**
     * @private
     * @param {Object} msgPayload The data from the push event that should be sent
     * to all available pages.
     * @returns {Promise} Returns a promise that resolves once the message
     * has been sent to all WindowClients.
     */
    SWController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        var _this = this;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var internalMsg = __WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED, msgPayload);
            return Promise.all(clientList.map(function (client) {
                return _this.attemptToMessageClient_(client, internalMsg);
            }));
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    SWController.prototype.getSWRegistration_ = function () {
        return Promise.resolve(self.registration);
    };
    /**
     * This will return the default VAPID key or the uint8array version of the
     * public VAPID key provided by the developer.
     */
    SWController.prototype.getPublicVapidKey_ = function () {
        var _this = this;
        return this.getSWRegistration_()
            .then(function (swReg) {
            return _this.getVapidDetailsModel().getVapidFromSWScope(swReg.scope);
        })
            .then(function (vapidKeyFromDatabase) {
            if (vapidKeyFromDatabase === null) {
                return __WEBPACK_IMPORTED_MODULE_3__models_fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY;
            }
            return vapidKeyFromDatabase;
        });
    };
    return SWController;
}(__WEBPACK_IMPORTED_MODULE_1__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SWController);

//# sourceMappingURL=sw-controller.js.map


/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(1159);


/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerStorage"] = registerStorage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_implementation_string__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_implementation_xhriopool__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_reference__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_service__ = __webpack_require__(1169);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(app, unused, opt_url) {
    return new __WEBPACK_IMPORTED_MODULE_5__src_service__["a" /* Service */](app, new __WEBPACK_IMPORTED_MODULE_3__src_implementation_xhriopool__["a" /* XhrIoPool */](), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__["c" /* TaskState */],
        TaskEvent: __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__["b" /* TaskEvent */],
        StringFormat: __WEBPACK_IMPORTED_MODULE_1__src_implementation_string__["a" /* StringFormat */],
        Storage: __WEBPACK_IMPORTED_MODULE_5__src_service__["a" /* Service */],
        Reference: __WEBPACK_IMPORTED_MODULE_4__src_reference__["a" /* Reference */]
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined, 
    // Allow multiple storage instances per app.
    true);
}
registerStorage(__WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XhrIoPool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xhrio_network__ = __webpack_require__(1161);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__xhrio_network__["a" /* NetworkXhrIo */]();
    };
    return XhrIoPool;
}());


//# sourceMappingURL=xhriopool.js.map


/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkXhrIo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promise_external__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xhrio__ = __webpack_require__(984);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].NO_ERROR;
        this.sendPromise_ = __WEBPACK_IMPORTED_MODULE_2__promise_external__["a" /* make */](function (resolve, reject) {
            _this.xhr_.addEventListener('abort', function (event) {
                _this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function (event) {
                _this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function (event) {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, opt_body, opt_headers) {
        var _this = this;
        if (this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](opt_headers)) {
            var headers = opt_headers;
            __WEBPACK_IMPORTED_MODULE_1__object__["b" /* forEach */](headers, function (key, val) {
                _this.xhr_.setRequestHeader(key, val.toString());
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](opt_body)) {
            this.xhr_.send(opt_body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());


//# sourceMappingURL=xhrio_network.js.map


/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonObjectOrNull;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(959);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (__WEBPACK_IMPORTED_MODULE_0__type__["f" /* isNonArrayObject */](obj)) {
        return obj;
    }
    else {
        return null;
    }
}

//# sourceMappingURL=json.js.map


/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBlob;
/* harmony export (immutable) */ __webpack_exports__["b"] = sliceBlob;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(959);

function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < var_args.length; i++) {
            bb.append(var_args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (__WEBPACK_IMPORTED_MODULE_0__type__["e" /* isNativeBlobDefined */]()) {
            return new Blob(var_args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

//# sourceMappingURL=fs.js.map


/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInfo; });
var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());


//# sourceMappingURL=requestinfo.js.map


/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_observer__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasksnapshot__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_args__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_array__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__implementation_async__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__implementation_error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implementation_promise_external__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__implementation_requests__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__implementation_type__ = __webpack_require__(959);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines types for interacting with blob transfer tasks.
 */












/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        if (metadata === void 0) { metadata = null; }
        var _this = this;
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(__WEBPACK_IMPORTED_MODULE_6__implementation_error__["a" /* Code */].CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(__WEBPACK_IMPORTED_MODULE_6__implementation_error__["a" /* Code */].CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
            }
        };
        this.promise_ = __WEBPACK_IMPORTED_MODULE_7__implementation_promise_external__["a" /* make */](function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded, total) {
            _this.updateProgress_(sizeBefore + loaded);
        };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                    callback(authToken);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED);
                    break;
                default:
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["c" /* createResumableUpload */](_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["f" /* getResumableUploadStatus */](_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["h" /* resumableUploadChunkSize */] * this.chunkMultiplier_;
        var status = new __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["a" /* ResumableUploadStatus */](this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["b" /* continueResumableUpload */](_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["h" /* resumableUploadChunkSize */] * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["e" /* getMetadata */](_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["g" /* multipartUpload */](_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = __WEBPACK_IMPORTED_MODULE_6__implementation_error__["c" /* canceled */]();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                this.start_();
                break;
            default:
                // TODO(andysoto): assert(false);
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_);
            return new __WEBPACK_IMPORTED_MODULE_2__tasksnapshot__["a" /* UploadTaskSnapshot */](this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        if (nextOrObserver === void 0) { nextOrObserver = undefined; }
        if (error === void 0) { error = undefined; }
        if (completed === void 0) { completed = undefined; }
        function typeValidator(_p) {
            if (type !== __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["b" /* TaskEvent */].STATE_CHANGED) {
                throw "Expected one of the event types: [" + __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["b" /* TaskEvent */].STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true).validator;
        var observerValidator = __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](null, true).validator;
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['next']) ||
                    __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['error']) ||
                    __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["e" /* stringSpec */](typeValidator),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](nextOrObserverValidator, true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true)
        ];
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, opt_complete) {
                if (specs !== null) {
                    __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('on', specs, arguments);
                }
                var observer = new __WEBPACK_IMPORTED_MODULE_1__implementation_observer__["a" /* Observer */](nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](binderNextOrObserverValidator),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true)
        ];
        var typeOnly = !(__WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](nextOrObserver) ||
            __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](error) ||
            __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        __WEBPACK_IMPORTED_MODULE_4__implementation_array__["c" /* remove */](this.observers_, observer);
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = __WEBPACK_IMPORTED_MODULE_4__implementation_array__["a" /* clone */](this.observers_);
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_)) {
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].SUCCESS:
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(this.resolve_.bind(null, this.snapshot))();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].CANCELED:
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].ERROR:
                    var toCall = this.reject_;
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_);
        switch (externalState) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].RUNNING:
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].PAUSED:
                if (observer.next !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].SUCCESS:
                if (observer.complete !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.complete.bind(observer))();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].CANCELED:
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].ERROR:
                if (observer.error !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('resume', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED ||
            this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('pause', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('cancel', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING ||
            this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());


//# sourceMappingURL=task.js.map


/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(959);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = __WEBPACK_IMPORTED_MODULE_0__type__["b" /* isFunction */](nextOrObserver) ||
            __WEBPACK_IMPORTED_MODULE_0__type__["a" /* isDef */](opt_error) ||
            __WEBPACK_IMPORTED_MODULE_0__type__["a" /* isDef */](opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());


//# sourceMappingURL=observer.js.map


/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTaskSnapshot; });
var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshot.prototype, "downloadURL", {
        get: function () {
            if (this.metadata !== null) {
                var urls = this.metadata['downloadURLs'];
                if (urls != null && urls[0] != null) {
                    return urls[0];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return UploadTaskSnapshot;
}());


//# sourceMappingURL=tasksnapshot.js.map


/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = async;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_external__ = __webpack_require__(964);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Method for invoking a callback asynchronously.
 */

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        __WEBPACK_IMPORTED_MODULE_0__promise_external__["c" /* resolve */](true).then(function () {
            f.apply(null, argsToForward);
        });
    };
}

//# sourceMappingURL=async.js.map


/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* unused harmony export ServiceInternals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_args__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_authwrapper__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implementation_location__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_promise_external__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_request__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reference__ = __webpack_require__(985);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var Service = /** @class */ (function () {
    function Service(app, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](authWrapper, loc);
        }
        this.authWrapper_ = new __WEBPACK_IMPORTED_MODULE_1__implementation_authwrapper__["a" /* AuthWrapper */](app, maker, __WEBPACK_IMPORTED_MODULE_4__implementation_request__["a" /* makeRequest */], this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */].makeFromBucketSpec(url);
        }
        else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */](authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('ref', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */].makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('refFromURL', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](validator, false)], arguments);
        return new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('setMaxUploadRetryTime', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["c" /* nonNegativeNumberSpec */]()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.authWrapper_.maxOperationRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxOperationRetryTime = function (time) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('setMaxOperationRetryTime', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["c" /* nonNegativeNumberSpec */]()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());

/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return __WEBPACK_IMPORTED_MODULE_3__implementation_promise_external__["c" /* resolve */](undefined);
    };
    return ServiceInternals;
}());


//# sourceMappingURL=service.js.map


/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__failrequest__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__promise_external__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestmap__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(959);







/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = /** @class */ (function () {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (__WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* defaultMaxOperationRetryTime */];
        this.maxUploadRetryTime_ = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* defaultMaxUploadRetryTime */];
        this.requestMap_ = new __WEBPACK_IMPORTED_MODULE_5__requestmap__["a" /* RequestMap */]();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* configOption */]] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = __WEBPACK_IMPORTED_MODULE_3__location__["a" /* Location */].makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null &&
            __WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](this.app_.INTERNAL) &&
            __WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                }
                else {
                    return null;
                }
            }, function (_error) {
                return null;
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__promise_external__["c" /* resolve */](null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw __WEBPACK_IMPORTED_MODULE_1__error__["b" /* appDeleted */]();
        }
        else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2__failrequest__["a" /* FailRequest */](__WEBPACK_IMPORTED_MODULE_1__error__["b" /* appDeleted */]());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}());


//# sourceMappingURL=authwrapper.js.map


/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_external__ = __webpack_require__(964);

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = __WEBPACK_IMPORTED_MODULE_0__promise_external__["b" /* reject */](error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) { appDelete = false; }
    };
    return FailRequest;
}());


//# sourceMappingURL=failrequest.js.map


/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(970);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @struct
 */
var RequestMap = /** @class */ (function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* minSafeInteger */];
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     * @param r The request to register.
     */
    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        __WEBPACK_IMPORTED_MODULE_0__object__["b" /* forEach */](this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}());


//# sourceMappingURL=requestmap.js.map


/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestEndStatus */
/* unused harmony export addAuthHeader_ */
/* unused harmony export addVersionHeader_ */
/* harmony export (immutable) */ __webpack_exports__["a"] = makeRequest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backoff__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promise_external__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__url__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__xhrio__ = __webpack_require__(984);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines methods used to actually send HTTP requests from
 * abstract representations.
 */









/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        var self = this;
        this.promise_ = __WEBPACK_IMPORTED_MODULE_5__promise_external__["a" /* make */](function (resolve, reject) {
            self.resolve_ = resolve;
            self.reject_ = reject;
            self.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === __WEBPACK_IMPORTED_MODULE_8__xhrio__["a" /* ErrorCode */].NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === __WEBPACK_IMPORTED_MODULE_8__xhrio__["a" /* ErrorCode */].ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](self.successCodes_, status);
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (__WEBPACK_IMPORTED_MODULE_6__type__["c" /* isJustDef */](result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = __WEBPACK_IMPORTED_MODULE_3__error__["s" /* unknown */]();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_
                            ? __WEBPACK_IMPORTED_MODULE_3__error__["b" /* appDeleted */]()
                            : __WEBPACK_IMPORTED_MODULE_3__error__["c" /* canceled */]();
                        reject(err);
                    }
                    else {
                        var err = __WEBPACK_IMPORTED_MODULE_3__error__["o" /* retryLimitExceeded */]();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = __WEBPACK_IMPORTED_MODULE_2__backoff__["a" /* start */](doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            __WEBPACK_IMPORTED_MODULE_2__backoff__["b" /* stop */](this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](extraRetryCodes, status);
        var isRequestSpecificRetryCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](this.additionalRetryCodes_, status);
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, opt_canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!opt_canceled;
    }
    return RequestEndStatus;
}());

function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var number = typeof __WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"] !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"].SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + number;
}
/**
 * @template T
 */
function makeRequest(requestInfo, authToken, pool) {
    var queryPart = __WEBPACK_IMPORTED_MODULE_7__url__["c" /* makeQueryString */](requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = __WEBPACK_IMPORTED_MODULE_4__object__["a" /* clone */](requestInfo.headers);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

//# sourceMappingURL=request.js.map


/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = start;
/* harmony export (immutable) */ __webpack_exports__["b"] = stop;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, arguments);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.apply(null, arguments);
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.apply(null, arguments);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

//# sourceMappingURL=backoff.js.map


/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUploadFilePageModule", function() { return FirebaseUploadFilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_upload_file__ = __webpack_require__(1139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirebaseUploadFilePageModule = /** @class */ (function () {
    function FirebaseUploadFilePageModule() {
    }
    FirebaseUploadFilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firebase_upload_file__["a" /* FirebaseUploadFilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firebase_upload_file__["a" /* FirebaseUploadFilePage */]),
            ],
        })
    ], FirebaseUploadFilePageModule);
    return FirebaseUploadFilePageModule;
}());

//# sourceMappingURL=firebase-upload-file.module.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDef;
/* harmony export (immutable) */ __webpack_exports__["c"] = isJustDef;
/* harmony export (immutable) */ __webpack_exports__["b"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["i"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = isNonNullObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNonArrayObject;
/* harmony export (immutable) */ __webpack_exports__["j"] = isString;
/* harmony export (immutable) */ __webpack_exports__["h"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNativeBlob;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNativeBlobDefined;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

//# sourceMappingURL=type.js.map


/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirebaseStorageError */
/* unused harmony export errors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Code; });
/* unused harmony export prependCode */
/* harmony export (immutable) */ __webpack_exports__["s"] = unknown;
/* harmony export (immutable) */ __webpack_exports__["m"] = objectNotFound;
/* unused harmony export bucketNotFound */
/* unused harmony export projectNotFound */
/* harmony export (immutable) */ __webpack_exports__["n"] = quotaExceeded;
/* harmony export (immutable) */ __webpack_exports__["q"] = unauthenticated;
/* harmony export (immutable) */ __webpack_exports__["r"] = unauthorized;
/* harmony export (immutable) */ __webpack_exports__["o"] = retryLimitExceeded;
/* unused harmony export invalidChecksum */
/* harmony export (immutable) */ __webpack_exports__["c"] = canceled;
/* unused harmony export invalidEventName */
/* harmony export (immutable) */ __webpack_exports__["k"] = invalidUrl;
/* harmony export (immutable) */ __webpack_exports__["h"] = invalidDefaultBucket;
/* unused harmony export noDefaultBucket */
/* harmony export (immutable) */ __webpack_exports__["d"] = cannotSliceBlob;
/* harmony export (immutable) */ __webpack_exports__["p"] = serverFileWrongSize;
/* harmony export (immutable) */ __webpack_exports__["l"] = noDownloadURL;
/* harmony export (immutable) */ __webpack_exports__["f"] = invalidArgument;
/* harmony export (immutable) */ __webpack_exports__["g"] = invalidArgumentCount;
/* harmony export (immutable) */ __webpack_exports__["b"] = appDeleted;
/* harmony export (immutable) */ __webpack_exports__["j"] = invalidRootOperation;
/* harmony export (immutable) */ __webpack_exports__["i"] = invalidFormat;
/* harmony export (immutable) */ __webpack_exports__["e"] = internalError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(970);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}());

var errors = {};
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function bucketNotFound(bucket) {
    return new FirebaseStorageError(Code.BUCKET_NOT_FOUND, "Bucket '" + bucket + "' does not exist.");
}
function projectNotFound(project) {
    return new FirebaseStorageError(Code.PROJECT_NOT_FOUND, "Project '" + project + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function invalidChecksum(path, checksum, calculated) {
    return new FirebaseStorageError(Code.INVALID_CHECKSUM, "Uploaded/downloaded object '" +
        path +
        "' has checksum '" +
        checksum +
        "' which does not match '" +
        calculated +
        "'. Please retry the upload/download.");
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidEventName(name) {
    return new FirebaseStorageError(Code.INVALID_EVENT_NAME, "Invalid event name '" + name + "'.");
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError(Code.NO_DEFAULT_BUCKET, 'No default bucket ' +
        "found. Did you set the '" +
        __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* configOption */] +
        "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

//# sourceMappingURL=error.js.map


/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    TOKEN_UNSUBSCRIBE_FAILED: 'token-unsubscribe-failed',
    TOKEN_UPDATE_FAILED: 'token-update-failed',
    TOKEN_UPDATE_NO_TOKEN: 'token-update-no-token',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key',
    INVALID_PUBLIC_VAPID_KEY: 'invalid-public-vapid-key',
    USE_PUBLIC_KEY_BEFORE_GET_TOKEN: 'use-public-key-before-get-token',
    PUBLIC_KEY_DECRYPTION_FAILED: 'public-vapid-key-decryption-failed'
};
var ERROR_MAP = (_a = {},
    _a[CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.',
    _a[CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.',
    _a[CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.',
    _a[CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " +
        'correctly in the options passed into firebase.initializeApp().',
    _a[CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.',
    _a[CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.',
    _a[CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " +
        'required to use the firebase SDK.',
    _a[CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.',
    _a[CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' +
        'default service worker. {$browserErrorMessage}',
    _a[CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.',
    _a[CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' +
        'any existing Push Subscriptions.',
    _a[CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.',
    _a[CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.',
    _a[CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}',
    _a[CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.',
    _a[CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.',
    _a[CODES.TOKEN_UNSUBSCRIBE_FAILED] = 'A problem occured while unsubscribing the ' + 'user from FCM: {$message}',
    _a[CODES.TOKEN_UPDATE_FAILED] = 'A problem occured while updating the ' + 'user from FCM: {$message}',
    _a[CODES.TOKEN_UPDATE_NO_TOKEN] = 'FCM returned no token when updating ' + 'the user to push.',
    _a[CODES.USE_SW_BEFORE_GET_TOKEN] = 'You must call useServiceWorker() before ' +
        'calling getToken() to ensure your service worker is used.',
    _a[CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' +
        'deleteToken(), i.e. the token from getToken().',
    _a[CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' +
        'be performed as the token was not found.',
    _a[CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' +
        'scope could not be performed as the scope was not found.',
    _a[CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.',
    _a[CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.',
    _a[CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' +
        'the FCM token for push messaging. Will have to resubscribe the ' +
        'user on next visit. {$message}',
    _a[CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' +
        'and as a result, unable to resubscribe. Will have to resubscribe the ' +
        'user on next visit.',
    _a[CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.',
    _a[CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' +
        'successful, there was a problem accessing the service worker itself.',
    _a[CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " +
        "'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
    _a[CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' +
        'least one character.',
    _a[CODES.BAD_VAPID_KEY] = 'The public VAPID key is not a Uint8Array with 65 bytes.',
    _a[CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.',
    _a[CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' +
        'a valid token string.',
    _a[CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' +
        'not a valid push set string.',
    _a[CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.',
    _a[CODES.INVALID_PUBLIC_VAPID_KEY] = 'The public VAPID key must be a string.',
    _a[CODES.PUBLIC_KEY_DECRYPTION_FAILED] = 'The public VAPID key did not equal ' + '65 bytes when decrypted.',
    _a);
/* harmony default export */ __webpack_exports__["a"] = ({
    codes: CODES,
    map: ERROR_MAP
});
var _a;

//# sourceMappingURL=errors.js.map


/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = make;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolve;
/* harmony export (immutable) */ __webpack_exports__["b"] = reject;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Implements the promise abstraction interface for external
 * (public SDK) packaging, which just passes through to the firebase-app impl.
 */
/**
 * @template T
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
function make(resolver) {
    return new Promise(resolver);
}
/**
 * @template T
 */
function resolve(value) {
    return Promise.resolve(value);
}
function reject(error) {
    return Promise.reject(error);
}

//# sourceMappingURL=promise_external.js.map


/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export contains */
/* harmony export (immutable) */ __webpack_exports__["b"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains methods for working with objects.
 */
function contains(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function forEach(obj, f) {
    for (var key in obj) {
        if (contains(obj, key)) {
            f(key, obj[key]);
        }
    }
}
function clone(obj) {
    if (obj == null) {
        return {};
    }
    var c = {};
    forEach(obj, function (key, val) {
        c[key] = val;
    });
    return c;
}

//# sourceMappingURL=object.js.map


/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFormat; });
/* harmony export (immutable) */ __webpack_exports__["c"] = formatValidator;
/* unused harmony export StringData */
/* harmony export (immutable) */ __webpack_exports__["b"] = dataFromString;
/* unused harmony export utf8Bytes_ */
/* unused harmony export percentEncodedBytes_ */
/* unused harmony export base64Bytes_ */
/* unused harmony export dataURLBytes_ */
/* unused harmony export dataURLContentType_ */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(961);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].';
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, opt_contentType) {
        this.data = data;
        this.contentType = opt_contentType || null;
    }
    return StringData;
}());

function dataFromString(format, string) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(string));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, string));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(string), dataURLContentType_(string));
    }
    // assert(false);
    throw __WEBPACK_IMPORTED_MODULE_0__error__["s" /* unknown */]();
}
function utf8Bytes_(string) {
    var b = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) == 55296) {
                    // The start of a surrogate pair.
                    var valid = i < string.length - 1 &&
                        (string.charCodeAt(i + 1) & 64512) == 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = string.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) == 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(string) {
    var decoded;
    try {
        decoded = decodeURIComponent(string);
    }
    catch (e) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, string) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = string.indexOf('-') !== -1;
            var hasUnder = string.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = string.indexOf('+') !== -1;
            var hasSlash = string.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            string = string.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
    }
    var bytes;
    try {
        bytes = atob(string);
    }
    catch (e) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(string) {
    var parts = new DataURLParts(string);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(string) {
    var parts = new DataURLParts(string);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

//# sourceMappingURL=string.js.map


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TaskEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalTaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TaskState; });
/* harmony export (immutable) */ __webpack_exports__["d"] = taskStateFromInternalTaskState;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

//# sourceMappingURL=taskenums.js.map


/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return domainBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return downloadBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiUploadBaseUrl; });
/* unused harmony export setDomainBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configOption; });
/* unused harmony export shortMaxOperationRetryTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultMaxOperationRetryTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultMaxUploadRetryTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return minSafeInteger; });
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain and scheme for API calls.
 */
var domainBase = 'https://firebasestorage.googleapis.com';
/**
 * Domain and scheme for object downloads.
 */
var downloadBase = 'https://firebasestorage.googleapis.com';
/**
 * Base URL for non-upload calls to the API.
 */
var apiBaseUrl = '/v0';
/**
 * Base URL for upload calls to the API.
 */
var apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
    domainBase = domainBase;
}
var configOption = 'storageBucket';
/**
 * 1 minute
 */
var shortMaxOperationRetryTime = 1 * 60 * 1000;
/**
 * 2 minutes
 */
var defaultMaxOperationRetryTime = 2 * 60 * 1000;
/**
 * 10 minutes
 */
var defaultMaxUploadRetryTime = 10 * 60 * 100;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var minSafeInteger = -9007199254740991;

//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(961);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Functionality related to the parsing/composition of bucket/
 * object location.
 */

/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["h" /* invalidDefaultBucket */](bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var path = '(/([^?#]*).*)?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' +
            version +
            '/b/' +
            bucketDomain +
            '/o' +
            path, 'i');
        var httpIndices = { bucket: 1, path: 3 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            { regex: httpRegex, indices: httpIndices, postModify: httpModify }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["k" /* invalidUrl */](url);
        }
        return location;
    };
    return Location;
}());


//# sourceMappingURL=location.js.map


/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return window.btoa(String.fromCharCode.apply(null, uint8Version));
}
/* harmony default export */ __webpack_exports__["a"] = (function (arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
});

//# sourceMappingURL=array-buffer-to-base64.js.map


/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DEFAULT_PUBLIC_VAPID_KEY = new Uint8Array([
    0x04,
    0x33,
    0x94,
    0xf7,
    0xdf,
    0xa1,
    0xeb,
    0xb1,
    0xdc,
    0x03,
    0xa2,
    0x5e,
    0x15,
    0x71,
    0xdb,
    0x48,
    0xd3,
    0x2e,
    0xed,
    0xed,
    0xb2,
    0x34,
    0xdb,
    0xb7,
    0x47,
    0x3a,
    0x0c,
    0x8f,
    0xc4,
    0xcc,
    0xe1,
    0x6f,
    0x3c,
    0x8c,
    0x84,
    0xdf,
    0xab,
    0xb6,
    0x66,
    0x3e,
    0xf2,
    0x0c,
    0xd4,
    0x8b,
    0xfe,
    0xe3,
    0xf9,
    0x76,
    0x2f,
    0x14,
    0x1c,
    0x63,
    0x08,
    0x6a,
    0x6f,
    0x2d,
    0xb1,
    0x1a,
    0x95,
    0xb0,
    0xce,
    0x37,
    0xc0,
    0x9c,
    0x6e
]);
var SUBSCRIPTION_DETAILS = {
    userVisibleOnly: true,
    applicationServerKey: DEFAULT_PUBLIC_VAPID_KEY
};
/* harmony default export */ __webpack_exports__["a"] = ({
    DEFAULT_PUBLIC_VAPID_KEY: DEFAULT_PUBLIC_VAPID_KEY,
    SUBSCRIPTION_DETAILS: SUBSCRIPTION_DETAILS,
    ENDPOINT: 'https://fcm.googleapis.com'
    // ENDPOINT: 'https://jmt17.google.com'
});

//# sourceMappingURL=fcm-details.js.map


/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = validate;
/* unused harmony export ArgSpec */
/* unused harmony export and_ */
/* harmony export (immutable) */ __webpack_exports__["e"] = stringSpec;
/* harmony export (immutable) */ __webpack_exports__["f"] = uploadDataSpec;
/* harmony export (immutable) */ __webpack_exports__["b"] = metadataSpec;
/* harmony export (immutable) */ __webpack_exports__["c"] = nonNegativeNumberSpec;
/* harmony export (immutable) */ __webpack_exports__["a"] = looseObjectSpec;
/* harmony export (immutable) */ __webpack_exports__["d"] = nullFunctionSpec;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(959);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["g" /* invalidArgumentCount */](minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw __WEBPACK_IMPORTED_MODULE_0__error__["f" /* invalidArgument */](i, name, e.message);
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_0__error__["f" /* invalidArgument */](i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, opt_optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !__WEBPACK_IMPORTED_MODULE_2__type__["c" /* isJustDef */](p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!opt_optional;
    }
    return ArgSpec;
}());

function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(opt_validator, opt_optional) {
    function stringValidator(p) {
        if (!__WEBPACK_IMPORTED_MODULE_2__type__["j" /* isString */](p)) {
            throw 'Expected string.';
        }
    }
    var validator;
    if (opt_validator) {
        validator = and_(stringValidator, opt_validator);
    }
    else {
        validator = stringValidator;
    }
    return new ArgSpec(validator, opt_optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (__WEBPACK_IMPORTED_MODULE_2__type__["e" /* isNativeBlobDefined */]() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(opt_optional) {
    return new ArgSpec(__WEBPACK_IMPORTED_MODULE_1__metadata__["c" /* metadataValidator */], opt_optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = __WEBPACK_IMPORTED_MODULE_2__type__["h" /* isNumber */](p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(opt_validator, opt_optional) {
    function validator(p) {
        var isLooseObject = p === null || (__WEBPACK_IMPORTED_MODULE_2__type__["a" /* isDef */](p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (opt_validator !== undefined && opt_validator !== null) {
            opt_validator(p);
        }
    }
    return new ArgSpec(validator, opt_optional);
}
function nullFunctionSpec(opt_optional) {
    function validator(p) {
        var valid = p === null || __WEBPACK_IMPORTED_MODULE_2__type__["b" /* isFunction */](p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, opt_optional);
}

//# sourceMappingURL=args.js.map


/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noXform_ */
/* unused harmony export Mapping */
/* unused harmony export xformPath */
/* harmony export (immutable) */ __webpack_exports__["b"] = getMappings;
/* unused harmony export addRef */
/* unused harmony export fromResource */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromResourceString;
/* harmony export (immutable) */ __webpack_exports__["d"] = toResourceString;
/* harmony export (immutable) */ __webpack_exports__["c"] = metadataValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__(977);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, opt_local, opt_writable, opt_xform) {
        this.server = server;
        this.local = opt_local || server;
        this.writable = !!opt_writable;
        this.xform = opt_xform || noXform_;
    }
    return Mapping;
}());

var mappings_ = null;
function xformPath(fullPath) {
    var valid = __WEBPACK_IMPORTED_MODULE_3__type__["j" /* isString */](fullPath);
    if (!valid || fullPath.length < 2) {
        return fullPath;
    }
    else {
        fullPath = fullPath;
        return __WEBPACK_IMPORTED_MODULE_2__path__["b" /* lastComponent */](fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(metadata, size) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](size)) {
            return +size;
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    /**
     * Transforms a comma-separated string of tokens into a list of download
     * URLs.
     */
    function xformTokens(metadata, tokens) {
        var valid = __WEBPACK_IMPORTED_MODULE_3__type__["j" /* isString */](tokens) && tokens.length > 0;
        if (!valid) {
            // This can happen if objects are uploaded through GCS and retrieved
            // through list, so we don't want to throw an Error.
            return [];
        }
        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
            var base = __WEBPACK_IMPORTED_MODULE_4__url__["a" /* makeDownloadUrl */](urlPart);
            var queryString = __WEBPACK_IMPORTED_MODULE_4__url__["c" /* makeQueryString */]({
                alt: 'media',
                token: token
            });
            return base + queryString;
        });
        return urls;
    }
    mappings.push(new Mapping('downloadTokens', 'downloadURLs', false, xformTokens));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new __WEBPACK_IMPORTED_MODULE_1__location__["a" /* Location */](bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = __WEBPACK_IMPORTED_MODULE_0__json__["a" /* jsonObjectOrNull */](resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    var validType = p && __WEBPACK_IMPORTED_MODULE_3__type__["i" /* isObject */](p);
    if (!validType) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        var val = p[key];
        if (key === 'customMetadata') {
            if (!__WEBPACK_IMPORTED_MODULE_3__type__["i" /* isObject */](val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
            }
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__type__["g" /* isNonNullObject */](val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
            }
        }
    }
}

//# sourceMappingURL=metadata.js.map


/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = makeNormalUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = makeDownloadUrl;
/* harmony export (immutable) */ __webpack_exports__["d"] = makeUploadUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = makeQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(965);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Functions to create and manipulate URLs for the server API.
 */


function makeNormalUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* domainBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* apiBaseUrl */] + urlPart;
}
function makeDownloadUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* downloadBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* apiBaseUrl */] + urlPart;
}
function makeUploadUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* domainBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* apiUploadBaseUrl */] + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    __WEBPACK_IMPORTED_MODULE_1__object__["b" /* forEach */](params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

//# sourceMappingURL=url.js.map


/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = contains;
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/* harmony export (immutable) */ __webpack_exports__["c"] = remove;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}

//# sourceMappingURL=array.js.map


/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_EXPIRATION_MILLIS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_token_details_model__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_vapid_details_model__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_iid_model__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_array_buffer_to_base64__ = __webpack_require__(973);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var SENDER_ID_OPTION_NAME = 'messagingSenderId';
// Database cache should be invalidated once a week.
var TOKEN_EXPIRATION_MILLIS = 7 * 24 * 60 * 60 * 1000; // 7 days
var ControllerInterface = /** @class */ (function () {
    /**
     * An interface of the Messaging Service API
     * @param {!firebase.app.App} app
     */
    function ControllerInterface(app) {
        var _this = this;
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].map);
        if (!app.options[SENDER_ID_OPTION_NAME] ||
            typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.BAD_SENDER_ID);
        }
        this.messagingSenderId_ = app.options[SENDER_ID_OPTION_NAME];
        this.tokenDetailsModel_ = new __WEBPACK_IMPORTED_MODULE_2__models_token_details_model__["a" /* default */]();
        this.vapidDetailsModel_ = new __WEBPACK_IMPORTED_MODULE_3__models_vapid_details_model__["a" /* default */]();
        this.iidModel_ = new __WEBPACK_IMPORTED_MODULE_5__models_iid_model__["a" /* default */]();
        this.app = app;
        this.INTERNAL = {};
        this.INTERNAL.delete = function () { return _this.delete(); };
    }
    /**
     * @export
     */
    ControllerInterface.prototype.getToken = function () {
        var _this = this;
        // Check with permissions
        var currentPermission = this.getNotificationPermission_();
        if (currentPermission !== __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].granted) {
            if (currentPermission === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].denied) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NOTIFICATIONS_BLOCKED));
            }
            // We must wait for permission to be granted
            return Promise.resolve(null);
        }
        var swReg;
        return this.getSWRegistration_()
            .then(function (reg) {
            swReg = reg;
            return _this.tokenDetailsModel_.getTokenDetailsFromSWScope(swReg.scope);
        })
            .then(function (tokenDetails) {
            if (tokenDetails) {
                return _this.manageExistingToken(tokenDetails, swReg);
            }
            return _this.getNewToken(swReg);
        });
    };
    /**
     * manageExistingToken is triggered if there's an existing FCM token in the
     * database and it can take 3 different actions:
     * 1) Retrieve the existing FCM token from the database.
     * 2) If VAPID details have changed: Delete the existing token and create a
     * new one with the new VAPID key.
     * 3) If the database cache is invalidated: Send a request to FCM to update
     * the token, and to check if the token is still valid on FCM-side.
     */
    ControllerInterface.prototype.manageExistingToken = function (tokenDetails, swReg) {
        var _this = this;
        return this.isTokenStillValid(tokenDetails).then(function (isValid) {
            if (isValid) {
                var now = Date.now();
                if (now < tokenDetails['createTime'] + TOKEN_EXPIRATION_MILLIS) {
                    return tokenDetails['fcmToken'];
                }
                else {
                    return _this.updateToken(tokenDetails, swReg);
                }
            }
            else {
                // If the VAPID details are updated, delete the existing token,
                // and create a new one.
                return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                    return _this.getNewToken(swReg);
                });
            }
        });
    };
    /*
     * Checks if the tokenDetails match the details provided in the clients.
     */
    ControllerInterface.prototype.isTokenStillValid = function (tokenDetails) {
        // TODO Validate rest of the details.
        return this.getPublicVapidKey_().then(function (publicKey) {
            if (Object(__WEBPACK_IMPORTED_MODULE_6__helpers_array_buffer_to_base64__["a" /* default */])(publicKey) !== tokenDetails['vapidKey']) {
                return false;
            }
            return true;
        });
    };
    ControllerInterface.prototype.updateToken = function (tokenDetails, swReg) {
        var _this = this;
        var publicVapidKey;
        var updatedToken;
        var subscription;
        return this.getPublicVapidKey_()
            .then(function (publicKey) {
            publicVapidKey = publicKey;
            return _this.getPushSubscription_(swReg, publicVapidKey);
        })
            .then(function (pushSubscription) {
            subscription = pushSubscription;
            return _this.iidModel_.updateToken(_this.messagingSenderId_, tokenDetails['fcmToken'], tokenDetails['fcmPushSet'], subscription, publicVapidKey);
        })
            .catch(function (err) {
            return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                throw err;
            });
        })
            .then(function (token) {
            updatedToken = token;
            var allDetails = {
                swScope: swReg.scope,
                vapidKey: publicVapidKey,
                subscription: subscription,
                fcmSenderId: _this.messagingSenderId_,
                fcmToken: updatedToken,
                fcmPushSet: tokenDetails['fcmPushSet']
            };
            return _this.tokenDetailsModel_.saveTokenDetails(allDetails);
        })
            .then(function () {
            return _this.vapidDetailsModel_.saveVapidDetails(swReg.scope, publicVapidKey);
        })
            .then(function () {
            return updatedToken;
        });
    };
    ControllerInterface.prototype.getNewToken = function (swReg) {
        var _this = this;
        var publicVapidKey;
        var subscription;
        var tokenDetails;
        return this.getPublicVapidKey_()
            .then(function (publicKey) {
            publicVapidKey = publicKey;
            return _this.getPushSubscription_(swReg, publicVapidKey);
        })
            .then(function (pushSubscription) {
            subscription = pushSubscription;
            return _this.iidModel_.getToken(_this.messagingSenderId_, subscription, publicVapidKey);
        })
            .then(function (iidTokenDetails) {
            tokenDetails = iidTokenDetails;
            var allDetails = {
                swScope: swReg.scope,
                vapidKey: publicVapidKey,
                subscription: subscription,
                fcmSenderId: _this.messagingSenderId_,
                fcmToken: tokenDetails['token'],
                fcmPushSet: tokenDetails['pushSet']
            };
            return _this.tokenDetailsModel_.saveTokenDetails(allDetails);
        })
            .then(function () {
            return _this.vapidDetailsModel_.saveVapidDetails(swReg.scope, publicVapidKey);
        })
            .then(function () {
            return tokenDetails['token'];
        });
    };
    /**
     * This method deletes tokens that the token manager looks after,
     * unsubscribes the token from FCM  and then unregisters the push
     * subscription if it exists. It returns a promise that indicates
     * whether or not the unsubscribe request was processed successfully.
     * @export
     */
    ControllerInterface.prototype.deleteToken = function (token) {
        var _this = this;
        return this.tokenDetailsModel_
            .deleteToken(token)
            .then(function (details) {
            return _this.iidModel_.deleteToken(details['fcmSenderId'], details['fcmToken'], details['fcmPushSet']);
        })
            .then(function () {
            return _this.getSWRegistration_()
                .then(function (registration) {
                if (registration) {
                    return registration.pushManager.getSubscription();
                }
            })
                .then(function (subscription) {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            });
        });
    };
    ControllerInterface.prototype.getSWRegistration_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    ControllerInterface.prototype.getPublicVapidKey_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    //
    // The following methods should only be available in the window.
    //
    ControllerInterface.prototype.requestPermission = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    ControllerInterface.prototype.getPushSubscription_ = function (registration, publicVapidKey) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!ServiceWorkerRegistration} registration
     */
    ControllerInterface.prototype.useServiceWorker = function (registration) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!string} b64PublicKey
     */
    ControllerInterface.prototype.usePublicVapidKey = function (b64PublicKey) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver
     * @param {function(!Error)=} optError
     * @param {function()=} optCompleted
     * @return {!function()}
     */
    ControllerInterface.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    ControllerInterface.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    /**
     * @export
     * @param {function(Object)} callback
     */
    ControllerInterface.prototype.setBackgroundMessageHandler = function (callback) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    ControllerInterface.prototype.delete = function () {
        return Promise.all([
            this.tokenDetailsModel_.closeDatabase(),
            this.vapidDetailsModel_.closeDatabase()
        ]);
    };
    /**
     * Returns the current Notification Permission state.
     * @private
     * @return {string} The currenct permission state.
     */
    ControllerInterface.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    ControllerInterface.prototype.getTokenDetailsModel = function () {
        return this.tokenDetailsModel_;
    };
    ControllerInterface.prototype.getVapidDetailsModel = function () {
        return this.vapidDetailsModel_;
    };
    /**
     * @protected
     * @returns {IIDModel}
     */
    ControllerInterface.prototype.getIIDModel = function () {
        return this.iidModel_;
    };
    return ControllerInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (ControllerInterface);

//# sourceMappingURL=controller-interface.js.map


/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(963);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var DBInterface = /** @class */ (function () {
    /**
     * @param {string} dbName
     * @param {number} dbVersion
     */
    function DBInterface(dbName, dbVersion) {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
        this.DB_NAME_ = dbName;
        this.dbVersion_ = dbVersion;
        this.openDbPromise_ = null;
        this.TRANSACTION_READ_WRITE = 'readwrite';
    }
    /**
     * Get the indexedDB as a promsie.
     * @protected
     * @return {!Promise<!IDBDatabase>} The IndexedDB database
     */
    DBInterface.prototype.openDatabase = function () {
        var _this = this;
        if (this.openDbPromise_) {
            return this.openDbPromise_;
        }
        this.openDbPromise_ = new Promise(function (resolve, reject) {
            var request = indexedDB.open(_this.DB_NAME_, _this.dbVersion_);
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onupgradeneeded = function (event) {
                try {
                    var db = event.target.result;
                    _this.onDBUpgrade(db, event);
                }
                catch (err) {
                    // close the database as it can't be used.
                    db.close();
                    reject(err);
                }
            };
        });
        return this.openDbPromise_;
    };
    /**
     * Close the currently open database.
     * @return {!Promise} Returns the result of the promise chain.
     */
    DBInterface.prototype.closeDatabase = function () {
        var _this = this;
        return Promise.resolve().then(function () {
            if (_this.openDbPromise_) {
                return _this.openDbPromise_.then(function (db) {
                    db.close();
                    _this.openDbPromise_ = null;
                });
            }
        });
    };
    /**
     * @protected
     * @param {!IDBDatabase} db
     */
    DBInterface.prototype.onDBUpgrade = function (db, event) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    return DBInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (DBInterface);

//# sourceMappingURL=db-interface.js.map


/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fcm_details__ = __webpack_require__(974);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var IIDModel = /** @class */ (function () {
    function IIDModel() {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
    }
    /**
     * Given a PushSubscription and messagingSenderId, get an FCM token.
     * @public
     * @param  {string} senderId The 'messagingSenderId' to tie the token to.
     * @param  {PushSubscription} subscription The PushSusbcription to "federate".
     * @param  {Uint8Array} publicVapidKey The public VAPID key.
     * @return {Promise<!Object>} Returns the FCM token to be used in place
     * of the PushSubscription.
     */
    IIDModel.prototype.getToken = function (senderId, subscription, publicVapidKey) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmSubscribeBody = "authorized_entity=" + senderId + "&" +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (publicVapidKey !== __WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY) {
            var applicationPubKey = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey);
            fcmSubscribeBody += "&application_pub_key=" + applicationPubKey;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmSubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', subscribeOptions)
            .then(function (response) { return response.json(); })
            .catch(function () {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED);
        })
            .then(function (response) {
            var fcmTokenResponse = response;
            if (fcmTokenResponse['error']) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_TOKEN);
            }
            if (!fcmTokenResponse['pushSet']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
            }
            return {
                token: fcmTokenResponse['token'],
                pushSet: fcmTokenResponse['pushSet']
            };
        });
    };
    /**
     * Update the underlying token details for fcmToken.
     */
    IIDModel.prototype.updateToken = function (senderId, fcmToken, fcmPushSet, subscription, publicVapidKey) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmUpdateBody = "push_set=" + fcmPushSet + "&" +
            ("token=" + fcmToken + "&") +
            ("authorized_entity=" + senderId + "&") +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (publicVapidKey !== __WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY) {
            var applicationPubKey = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey);
            fcmUpdateBody += "&application_pub_key=" + applicationPubKey;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var updateOptions = {
            method: 'POST',
            headers: headers,
            body: fcmUpdateBody
        };
        var updateFetchRes;
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', updateOptions)
            .then(function (fetchResponse) {
            updateFetchRes = fetchResponse;
            return fetchResponse.json();
        })
            .catch(function () {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_FAILED);
        })
            .then(function (fcmTokenResponse) {
            if (!updateFetchRes.ok) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_NO_TOKEN);
            }
            return fcmTokenResponse['token'];
        });
    };
    /**
     * Given a fcmToken, pushSet and messagingSenderId, delete an FCM token.
     */
    IIDModel.prototype.deleteToken = function (senderId, fcmToken, fcmPushSet) {
        var _this = this;
        var fcmUnsubscribeBody = "authorized_entity=" + senderId + "&" +
            ("token=" + fcmToken + "&") +
            ("pushSet=" + fcmPushSet);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var unsubscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmUnsubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/unsubscribe', unsubscribeOptions).then(function (fetchResponse) {
            if (!fetchResponse.ok) {
                return fetchResponse.json().then(function (fcmTokenResponse) {
                    if (fcmTokenResponse['error']) {
                        var message = fcmTokenResponse['error']['message'];
                        throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UNSUBSCRIBE_FAILED, {
                            message: message
                        });
                    }
                }, function (err) {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UNSUBSCRIBE_FAILED);
                });
            }
        });
    };
    return IIDModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (IIDModel);

//# sourceMappingURL=iid-model.js.map


/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    granted: 'granted',
    default: 'default',
    denied: 'denied'
});

//# sourceMappingURL=notification-permission.js.map


/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// These fields are strings to prevent closure from thinking goog.getMsg
// should be used to initialise the values
var PARAMS = {
    TYPE_OF_MSG: 'firebase-messaging-msg-type',
    DATA: 'firebase-messaging-msg-data'
};
// This value isn't using the TYPE_OF_MSG short hand as closure
// expects the variable to be defined via goog.getMsg
var msgType = {
    PUSH_MSG_RECEIVED: 'push-msg-received',
    NOTIFICATION_CLICKED: 'notification-clicked'
};
var createNewMsg = function (msgType, msgData) {
    var message = (_a = {},
        _a[PARAMS.TYPE_OF_MSG] = msgType,
        _a[PARAMS.DATA] = msgData,
        _a);
    return message;
    var _a;
};
/* harmony default export */ __webpack_exports__["a"] = ({
    PARAMS: PARAMS,
    TYPES_OF_MSG: msgType,
    createNewMsg: createNewMsg
});

//# sourceMappingURL=worker-page-message.js.map


/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCode; });
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

//# sourceMappingURL=xhrio.js.map


/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_args__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_blob__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implementation_error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_location__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_metadata__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__implementation_object__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__implementation_path__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implementation_requests__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__implementation_string__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__implementation_type__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task__ = __webpack_require__(1165);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines the Firebase Storage Reference class.
 */












/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */]) {
            this.location = location;
        }
        else {
            this.location = __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */].makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return __WEBPACK_IMPORTED_MODULE_4__implementation_metadata__["b" /* getMappings */]();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('child', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */]()], arguments);
        var newPath = __WEBPACK_IMPORTED_MODULE_6__implementation_path__["a" /* child */](this.location.path, childPath);
        var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = __WEBPACK_IMPORTED_MODULE_6__implementation_path__["c" /* parent */](this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_6__implementation_path__["b" /* lastComponent */](this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('put', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["f" /* uploadDataSpec */](), __WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */](true)], arguments);
        this.throwIfRoot_('put');
        return new __WEBPACK_IMPORTED_MODULE_10__task__["a" /* UploadTask */](this, this.authWrapper, this.location, this.mappings(), new __WEBPACK_IMPORTED_MODULE_1__implementation_blob__["a" /* FbsBlob */](data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param string The string to upload.
     * @param opt_format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (string, format, opt_metadata) {
        if (format === void 0) { format = __WEBPACK_IMPORTED_MODULE_8__implementation_string__["a" /* StringFormat */].RAW; }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('putString', [
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](),
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](__WEBPACK_IMPORTED_MODULE_8__implementation_string__["c" /* formatValidator */], true),
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */](true)
        ], arguments);
        this.throwIfRoot_('putString');
        var data = __WEBPACK_IMPORTED_MODULE_8__implementation_string__["b" /* dataFromString */](format, string);
        var metadata = __WEBPACK_IMPORTED_MODULE_5__implementation_object__["a" /* clone */](opt_metadata);
        if (!__WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](metadata['contentType']) && __WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](data.contentType)) {
            metadata['contentType'] = data.contentType;
        }
        return new __WEBPACK_IMPORTED_MODULE_10__task__["a" /* UploadTask */](this, this.authWrapper, this.location, this.mappings(), new __WEBPACK_IMPORTED_MODULE_1__implementation_blob__["a" /* FbsBlob */](data.data, true), metadata);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('delete', [], arguments);
        this.throwIfRoot_('delete');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["d" /* deleteObject */](self.authWrapper, self.location);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["e" /* getMetadata */](self.authWrapper, self.location, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('updateMetadata', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */]()], arguments);
        this.throwIfRoot_('updateMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["i" /* updateMetadata */](self.authWrapper, self.location, metadata, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.getMetadata().then(function (metadata) {
            var url = metadata['downloadURLs'][0];
            if (__WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](url)) {
                return url;
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_2__implementation_error__["l" /* noDownloadURL */]();
            }
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw __WEBPACK_IMPORTED_MODULE_2__implementation_error__["j" /* invalidRootOperation */](name);
        }
    };
    return Reference;
}());


//# sourceMappingURL=reference.js.map


/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parent;
/* harmony export (immutable) */ __webpack_exports__["a"] = child;
/* harmony export (immutable) */ __webpack_exports__["b"] = lastComponent;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length == 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) {
        return component.length > 0;
    })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

//# sourceMappingURL=path.js.map


/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsBlob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fs__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(959);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file Provides a Blob-like wrapper for various binary types (including the
 * native Blob type). This makes it possible to upload types like ArrayBuffers,
 * making uploads possible in environments without the native Blob type.
 */




/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, opt_elideCopy) {
        var size = 0;
        var blobType = '';
        if (__WEBPACK_IMPORTED_MODULE_2__type__["d" /* isNativeBlob */](data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (__WEBPACK_IMPORTED_MODULE_2__type__["d" /* isNativeBlob */](this.data_)) {
            var realBlob = this.data_;
            var sliced = __WEBPACK_IMPORTED_MODULE_0__fs__["b" /* sliceBlob */](realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_2__type__["e" /* isNativeBlobDefined */]()) {
            var blobby = var_args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(__WEBPACK_IMPORTED_MODULE_0__fs__["a" /* getBlob */].apply(null, blobby));
        }
        else {
            var uint8Arrays = var_args.map(function (val) {
                if (__WEBPACK_IMPORTED_MODULE_2__type__["j" /* isString */](val)) {
                    return __WEBPACK_IMPORTED_MODULE_1__string__["b" /* dataFromString */](__WEBPACK_IMPORTED_MODULE_1__string__["a" /* StringFormat */].RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());


//# sourceMappingURL=blob.js.map


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handlerCheck */
/* unused harmony export metadataHandler */
/* unused harmony export sharedErrorHandler */
/* unused harmony export objectErrorHandler */
/* harmony export (immutable) */ __webpack_exports__["e"] = getMetadata;
/* harmony export (immutable) */ __webpack_exports__["i"] = updateMetadata;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteObject;
/* unused harmony export determineContentType_ */
/* unused harmony export metadataForUpload_ */
/* harmony export (immutable) */ __webpack_exports__["g"] = multipartUpload;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumableUploadStatus; });
/* unused harmony export checkResumeHeader_ */
/* harmony export (immutable) */ __webpack_exports__["c"] = createResumableUpload;
/* harmony export (immutable) */ __webpack_exports__["f"] = getResumableUploadStatus;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resumableUploadChunkSize; });
/* harmony export (immutable) */ __webpack_exports__["b"] = continueResumableUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blob__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestinfo__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__url__ = __webpack_require__(977);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["s" /* unknown */]();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* fromResourceString */](authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = __WEBPACK_IMPORTED_MODULE_2__error__["q" /* unauthenticated */]();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = __WEBPACK_IMPORTED_MODULE_2__error__["n" /* quotaExceeded */](location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = __WEBPACK_IMPORTED_MODULE_2__error__["r" /* unauthorized */](location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = __WEBPACK_IMPORTED_MODULE_2__error__["m" /* objectNotFound */](location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'PATCH';
    var body = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(xhr, text) { }
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, opt_metadata) {
    var metadata = __WEBPACK_IMPORTED_MODULE_4__object__["a" /* clone */](opt_metadata);
    metadata['fullPath'] = location.path;
    metadata['size'] = blob.size();
    if (!metadata['contentType']) {
        metadata['contentType'] = determineContentType_(null, blob);
    }
    return metadata;
}
function multipartUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str =
                str +
                    Math.random()
                        .toString()
                        .slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var metadataString = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = __WEBPACK_IMPORTED_MODULE_1__blob__["a" /* FbsBlob */].getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["d" /* cannotSliceBlob */]();
    }
    var urlParams = { name: metadata['fullPath'] };
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["d" /* makeUploadUrl */](urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());

function checkResumeHeader_(xhr, opt_allowed) {
    var status;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowed = opt_allowed || ['active'];
    handlerCheck(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* contains */](allowed, status));
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var urlParams = { name: metadata['fullPath'] };
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["d" /* makeUploadUrl */](urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadata['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr, text) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(__WEBPACK_IMPORTED_MODULE_6__type__["j" /* isString */](url));
        return url;
    }
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr, text) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        var size = parseInt(sizeString, 10);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param opt_status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, opt_status, opt_progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status = new ResumableUploadStatus(0, 0);
    if (opt_status) {
        status.current = opt_status.current;
        status.total = opt_status.total;
    }
    else {
        status.current = 0;
        status.total = blob.size();
    }
    if (blob.size() !== status.total) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["p" /* serverFileWrongSize */]();
    }
    var bytesLeft = status.total - status.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["d" /* cannotSliceBlob */]();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = opt_progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

//# sourceMappingURL=requests.js.map


/***/ })

});
//# sourceMappingURL=1.js.map