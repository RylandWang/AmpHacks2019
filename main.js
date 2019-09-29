(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accelerometer/accelerometer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background-color: #201F35;\r\n  color: #fff;\r\n  padding: 30px;\r\n}\r\n\r\n\r\n.garden {\r\n    position: relative;\r\n    width : 200px;\r\n    height: 200px;\r\n    border: 5px solid #CCC;\r\n    border-radius: 10px;\r\n  }\r\n\r\n\r\n.ball {\r\n    position: absolute;\r\n    top   : 90px;\r\n    left  : 90px;\r\n    width : 20px;\r\n    height: 20px;\r\n    background: green;\r\n    border-radius: 100%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZWxlcm9tZXRlci9hY2NlbGVyb21ldGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7O0FBR0Q7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0dBQ3JCOzs7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtHQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FjY2VsZXJvbWV0ZXIvYWNjZWxlcm9tZXRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFGMzU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuXHJcbi5nYXJkZW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGggOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjQ0NDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhbGwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wICAgOiA5MHB4O1xyXG4gICAgbGVmdCAgOiA5MHB4O1xyXG4gICAgd2lkdGggOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/accelerometer/accelerometer.component.html":
/*!************************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Learn about this code on MDN: https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation -->\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n<div class=\"body\" style=\"margin-left: 2em\">\r\n\r\n<p> Build number: 21</p>\r\n<h1> Your acceleration: </h1>\r\n\r\n<h3>x: {{xAccBS | async}} m/s^2</h3>\r\n<h3>y: {{yAccBS | async}} m/s^2</h3>\r\n<h3>Aggregate: {{totalAccBS | async}}/h3>\r\n\r\n<h1 style=\"color:darkgreen; margin-top:1em;\">Bus stops left: {{stopsLeftBS | async}}</h1>\r\n<h2 style=\"color:dodgerblue; margin-top:1em;\">Time elapsed: {{timeElapsed | async}}</h2>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/accelerometer/accelerometer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.component.ts ***!
  \**********************************************************/
/*! exports provided: AccelerometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccelerometerComponent", function() { return AccelerometerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccelerometerComponent = /** @class */ (function () {
    function AccelerometerComponent() {
        // absolute acceleration
        this.xAcc = 0;
        this.yAcc = 0;
        this.totalAcc = 0;
        this.xAccBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.yAccBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.totalAccBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.stopsLeft = 3;
        this.stopsLeftBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](3);
        this.consistentDecceleration = 0;
        this.timeElapsed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
    }
    Object.defineProperty(AccelerometerComponent.prototype, "xAcceleration", {
        get: function () {
            return this.xAcc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccelerometerComponent.prototype, "yAcceleration", {
        get: function () {
            return this.yAcc;
        },
        enumerable: true,
        configurable: true
    });
    AccelerometerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var start = new Date().getTime();
        console.log('Engage');
        window.addEventListener('devicemotion', motion, false);
        var lastX = 0, lastY = 0, lastZ = 0;
        var moveCounter = 0;
        var ERROR_MARGIN = 0.16;
        var xbs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        var ybs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        var totalAccbs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        var stopsbs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.stopsLeftBS.value);
        var consistentDeccelerationbs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        var timeElapsed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        xbs.subscribe(function (x) {
            console.log("subscribe: ", x);
            _this.xAccBS.next(x);
        });
        ybs.subscribe(function (x) {
            console.log("subscribe: ", x);
            _this.yAccBS.next(x);
        });
        totalAccbs.subscribe(function (x) {
            console.log("subscribe: ", x);
            _this.totalAccBS.next(x);
        });
        stopsbs.subscribe(function (x) {
            console.log("subscribe: ", x);
            _this.stopsLeftBS.next(x);
        });
        consistentDeccelerationbs.subscribe(function (x) {
            console.log("decceleration in a row: ", x);
            _this.consistentDecceleration = x;
        });
        timeElapsed.subscribe(function (x) {
            _this.timeElapsed.next(x);
        });
        function motion(e) {
            var acc = e.acceleration;
            // if (!acc.hasOwnProperty('x')) {
            //   acc = e.accelerationIncludingGravity;
            // }
            var elapsed = new Date().getTime() - start;
            console.log(elapsed);
            timeElapsed.next(elapsed);
            var accx = acc.x;
            var accy = acc.y;
            // calibrate for stationary device
            // reset within margin of error
            if (Math.abs(accx) < ERROR_MARGIN) {
                accx = 0;
            }
            if (Math.abs(accy) < ERROR_MARGIN) {
                accy = 0;
            }
            accx = Math.round(accx * 10000) / 10000;
            accy = Math.round(accy * 10000) / 10000;
            xbs.next(accx);
            ybs.next(accy);
            var totalAcc = Math.round((accx + accy) * 10000) / 10000;
            totalAccbs.next(totalAcc);
            // gradual decceleration before eventual stop
            if (totalAccbs.value < 0) {
                this.consistentDecceleration += 1;
                consistentDeccelerationbs.next(consistentDeccelerationbs.value + 1);
            }
            else {
                consistentDeccelerationbs.next(0);
            }
            // eventual stop ie complete zero accleration after gradual decceleration
            if (consistentDeccelerationbs.value >= 39 && Math.abs(totalAccbs.value) <= ERROR_MARGIN) {
                this.stopsLeft -= 1;
                stopsbs.next(stopsbs.value - 1);
                consistentDeccelerationbs.next(0);
                console.log("stop detected");
                if (stopsbs.value <= 0) {
                    window.alert("You have arrived at your stop");
                    stopsbs.next(3);
                    timeElapsed.next(0);
                }
            }
            // if (!acc.x) return;
            //only log if x,y,z > 1
            if (Math.abs(acc.x) >= 1 &&
                Math.abs(acc.y) >= 1 &&
                Math.abs(acc.z) >= 1) {
                if (!lastX) {
                    lastX = acc.x;
                    lastY = acc.y;
                    lastZ = acc.z;
                    return;
                }
                var deltaX = Math.abs(acc.x - lastX);
                var deltaY = Math.abs(acc.y - lastY);
                var deltaZ = Math.abs(acc.z - lastZ);
                if (deltaX + deltaY + deltaZ > 3) {
                    moveCounter++;
                }
                else {
                    moveCounter = Math.max(0, --moveCounter);
                }
            }
        }
    };
    AccelerometerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accelerometer',
            template: __webpack_require__(/*! ./accelerometer.component.html */ "./src/app/accelerometer/accelerometer.component.html"),
            styles: [__webpack_require__(/*! ./accelerometer.component.css */ "./src/app/accelerometer/accelerometer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccelerometerComponent);
    return AccelerometerComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<app-accelerometer></app-accelerometer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Aweary';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accelerometer_accelerometer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accelerometer/accelerometer.component */ "./src/app/accelerometer/accelerometer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _accelerometer_accelerometer_component__WEBPACK_IMPORTED_MODULE_4__["AccelerometerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ryland\DEV\AmpHacks2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map