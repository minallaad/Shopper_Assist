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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/stores/stores.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    // {path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'Messenger', component: _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_3__["MessengerComponent"] },
    { path: 'Stores-near-me', component: _stores_stores_component__WEBPACK_IMPORTED_MODULE_4__["StoresComponent"] },
    { path: 'Recipe', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: false })],
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main class=\"container\" >\n    <!--<div class = \"onload\" *ngIf=\"!auth.isAuthenticated()\">-->\n        <!--<li><a *ngIf=\"!auth.isAuthenticated()\">Log In-->\n        <!--<li><a [routerLink]=\"auth.login()\" *ngIf=\"!auth.isAuthenticated()\">Log In</a></li>-->\n        <!--</a>-->\n        <!--</li>-->\n    <!--</div>-->\n    <!--<div class = \"afterload\" *ngIf=\"auth.isAuthenticated()\">-->\n<app-header></app-header>\n\n    <button\n            class=\"btn btn-primary btn-margin\"\n            *ngIf=\"!auth.isAuthenticated()\"\n            (click)=\"auth.login()\">\n        Log In\n    </button>\n\n    <button\n            class=\"btn btn-primary btn-margin\"\n            *ngIf=\"auth.isAuthenticated()\"\n            (click)=\"auth.logout()\">\n        Log Out\n    </button>\n    <router-outlet></router-outlet>\n    <!--</div>-->\n</main>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_kafka_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/kafka.services */ "./src/app/services/kafka.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/stores/stores.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
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
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_11__["MessengerComponent"],
                _stores_stores_component__WEBPACK_IMPORTED_MODULE_12__["StoresComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_13__["RecipesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]
            ],
            providers: [
                _services_kafka_services__WEBPACK_IMPORTED_MODULE_6__["KafkaService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed-bottom\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header {\n    float: left;\n    padding: 15px;\n    text-align: center;\n    width: 100%;\n}\n.navbar-brand {float:none;}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">\n        Grocery Assist\n      </a>\n    </div>\n\n    <div class=\"navbar-default\">\n        <ul class=\"nav nav-tabs\">\n        <li>\n          <a [routerLink]=\"['/Messenger'] \"*ngIf=\"auth.isAuthenticated()\">\n            <span class=\"glyphicon glyphicon-comment\"></span> Messenger\n          </a>\n        </li>\n        <li><a [routerLink]=\"['/list']\" *ngIf=\"auth.isAuthenticated()\">My List</a></li>\n        <li><a [routerLink]=\"['/Stores-near-me']\" *ngIf=\"auth.isAuthenticated()\">Stores</a></li>\n        <li><a [routerLink]=\"['/Recipe']\" *ngIf=\"auth.isAuthenticated()\">Recipes</a></li>\n\n        <!--<li class=\"dropdown\">-->\n          <!--<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"> My Profile <span class=\"caret\"></span></a>-->\n          <!--<ul class=\"dropdown-menu\">-->\n            <!--<li><a href=\"#\">Account Settings</a></li>-->\n            <!--<li><a href=\"#\">Logout</a></li>-->\n          <!--</ul>-->\n        <!--</li>-->\n      </ul>\n    </div>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();
        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <div class=\"example-sidenav-content\">\n      <section>\n        <form class=\"example-form\">\n        <!--<mat-form-field class=\"example-full-width\">-->\n          <input matInput placeholder=\"Enter Item\" #box (keyup.enter)=\"addItemtoList(box.value);\"  class=\"form-control\" >\n        <!--</mat-form-field>-->\n      </form>\n        <br>\n        <div *ngFor=\"let item of list\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngIf=\"item.isPresent\" ng-model =\"item.name\" (click)=\"removeFromlist(item.name)\"  >\n              <h4><b>{{item.name}}</b></h4>\n            </li>\n            <li class=\"list-group-item\" ng-model =\"item.name\" *ngIf=\"!item.isPresent\" (click)=\"addItemtoList(item.name)\"  >\n              <s> <b><h4 >{{item.name}}</h4></b></s>\n            </li>\n          </ul>\n        </div>\n      </section>\n      </div>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kafka_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kafka.services */ "./src/app/services/kafka.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Item } from 'list.component.spec';

var Item = /** @class */ (function () {
    function Item(name, isPresent) {
        this.name = name;
        this.isPresent = isPresent;
    }
    return Item;
}());
var ListComponent = /** @class */ (function () {
    function ListComponent(chartService, http, auth) {
        this.chartService = chartService;
        this.http = http;
        this.auth = auth;
        this.list = [];
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();
        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in list");
        this.connection = this.chartService.getMessage().subscribe(function (message) {
            console.log(message);
            console.log(typeof message);
            _this.list = JSON.parse(message.toString());
            console.log(_this.list);
        });
    };
    ListComponent.prototype.addItemtoList = function (itemName) {
        var flag = 0;
        for (var i in this.list) {
            console.log(this.list[i].name);
            if (this.list[i].name === itemName) {
                this.list[i].isPresent = true;
                flag = 1;
            }
        }
        if (flag === 0) {
            var item = new Item(itemName, true);
            this.list.push(item);
            console.log(this.list);
        }
        this.http.post('http://localhost:8092/postData', JSON.stringify(this.list), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
        })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ListComponent.prototype.removeFromlist = function (item) {
        console.log(item);
        for (var i in this.list) {
            console.log(this.list[i].name);
            if (this.list[i].name === item) {
                this.list[i].isPresent = false;
                console.log(this.list[i].isPresent);
            }
        }
        console.log(this.list);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kafka_services__WEBPACK_IMPORTED_MODULE_1__["KafkaService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger.component.css":
/*!***************************************************!*\
  !*** ./src/app/messenger/messenger.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messenger/messenger.component.html":
/*!****************************************************!*\
  !*** ./src/app/messenger/messenger.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n         <section  class=\"fixed-bottom\">\n          <form class=\"example-form \">\n            <!--<mat-form-field class=\"example-full-width\">-->\n            <input matInput placeholder=\" \" #box (keyup.enter)=\"sendMessage(box.value);\"  class=\"form-control\" >\n            <!--</mat-form-field>-->\n          </form>\n          <br>\n          <!--<div *ngFor=\"let item of list\">-->\n            <!--<ul class=\"list-group\">-->\n              <!--<li class=\"list-group-item\" ng-model =\"item.value\" (click)=\"removeFromlist(item)\"  >-->\n                <!--<h4>{{item}}</h4>-->\n              <!--</li>-->\n            <!--</ul>-->\n          <!--</div>-->\n        </section>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/messenger/messenger.component.ts":
/*!**************************************************!*\
  !*** ./src/app/messenger/messenger.component.ts ***!
  \**************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(http) {
        this.http = http;
        this.Messages = [];
    }
    MessengerComponent.prototype.ngOnInit = function () {
    };
    MessengerComponent.prototype.sendMessage = function (message) {
        this.Messages.push(message);
        // this.http.post('http://localhost:8092/postMessage', JSON.stringify(this.Messages), {
        //     headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
        // })
        //     .subscribe(data => {
        //         console.log(data);
        //     });
    };
    MessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.css */ "./src/app/messenger/messenger.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <h3> Recipes</h3>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-variables */ "./src/app/services/auth0-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-lock */ "./node_modules/auth0-lock/lib/index.js");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth0_lock__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.lock = new auth0_lock__WEBPACK_IMPORTED_MODULE_4___default.a(_auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].clientID, _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain, {
            autoclose: true,
            auth: {
                redirectUrl: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].callbackURL,
                responseType: 'token id_token',
                audience: "https://" + _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain + "/userinfo",
                params: {
                    scope: 'openid'
                }
            }
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    // Call this method in app.component.ts
    // if using path-based routing
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.lock.on('authenticated', function (authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/']);
            }
        });
        this.lock.on('authorization_error', function (err) {
            _this.router.navigate(['/']);
            console.log(err);
            alert("Error: " + err.error + ". Check the console for further details.");
        });
    };
    // Call this method in app.component.ts
    // if using hash-based routing
    AuthService.prototype.handleAuthenticationWithHash = function () {
        var _this = this;
        this
            .router
            .events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return (/access_token|id_token|error/).test(event.url); }))
            .subscribe(function () {
            _this.lock.resumeAuth(window.location.hash, function (err, authResult) {
                if (err) {
                    _this.router.navigate(['/']);
                    console.log(err);
                    alert("Error: " + err.error + ". Check the console for further details.");
                    return;
                }
                _this.setSession(authResult);
                _this.router.navigate(['/']);
            });
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth0-variables.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth0-variables.ts ***!
  \*********************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'Rui1Byfw9ntfNYWWQMHBqXXwid4eQadp',
    domain: 'gclistings.auth0.com',
    callbackURL: 'http://localhost:4200'
};


/***/ }),

/***/ "./src/app/services/kafka.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/kafka.services.ts ***!
  \********************************************/
/*! exports provided: KafkaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KafkaService", function() { return KafkaService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);


var KafkaService = /** @class */ (function () {
    function KafkaService() {
        this.url = 'http://localhost:8092';
        // User2() {
        //   let observable = new Observable(observer => {
        //     this.socket = io(this.url2);
        //     this.socket.on('sampleMessage', (data) => {
        //
        //       observer.next(data);
        //     });
        //     return () => {
        //       this.socket.disconnect();
        //     }
        //   })
        //   return observable;
        // }
    }
    KafkaService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
        console.log("MESSAGE SENT");
    };
    KafkaService.prototype.getMessage = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return KafkaService;
}());



/***/ }),

/***/ "./src/app/stores/stores.component.css":
/*!*********************************************!*\
  !*** ./src/app/stores/stores.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stores/stores.component.html":
/*!**********************************************!*\
  !*** ./src/app/stores/stores.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <h3> Stores</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/stores/stores.component.ts":
/*!********************************************!*\
  !*** ./src/app/stores/stores.component.ts ***!
  \********************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoresComponent = /** @class */ (function () {
    function StoresComponent() {
    }
    StoresComponent.prototype.ngOnInit = function () {
    };
    StoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stores',
            template: __webpack_require__(/*! ./stores.component.html */ "./src/app/stores/stores.component.html"),
            styles: [__webpack_require__(/*! ./stores.component.css */ "./src/app/stores/stores.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoresComponent);
    return StoresComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/minal/Documents/grocery_assisst/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map