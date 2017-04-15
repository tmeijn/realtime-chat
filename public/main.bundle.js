webpackJsonp([1,4],{

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 131;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(143);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(259),
        styles: [__webpack_require__(210)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_extended_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routing_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* routedComponents */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_app_routing_module__["b" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], useClass: __WEBPACK_IMPORTED_MODULE_0__core_services_extended_http_service__["a" /* ExtendedHttpService */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(_socketService, _restService) {
        var _this = this;
        this._socketService = _socketService;
        this._restService = _restService;
        // Let's get both the socket.io and REST feathers services for messages!
        this._rest = _restService.getService('api/messages');
        this._socket = _socketService.getService('api/messages');
        this._socket.on('created', function (message) { return _this.onCreated(message); });
        this._socket.on('updated', function (message) { return _this.onUpdated(message); });
        this._socket.on('removed', function (message) { return _this.onRemoved(message); });
        this.messages$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) { return _this.messagesObserver = observer; });
        this.dataStore = { messages: [] };
    }
    MessageService.prototype.find = function (query) {
        return this._rest.find(query);
    };
    MessageService.prototype.get = function (id, query) {
        return this._rest.get(id, query);
    };
    MessageService.prototype.create = function (message) {
        return this._rest.create(message);
    };
    MessageService.prototype.remove = function (id, query) {
        return this._socket.remove(id, query);
    };
    MessageService.prototype.getIndex = function (id) {
        var foundIndex = -1;
        for (var i = 0; i < this.dataStore.messages.length; i++) {
            if (this.dataStore.messages[i].id === id) {
                foundIndex = i;
            }
        }
        return foundIndex;
    };
    MessageService.prototype.onCreated = function (message) {
        console.log('New message:', message);
        this.dataStore.messages.push(message);
        this.messagesObserver.next(message);
    };
    MessageService.prototype.onUpdated = function (message) {
        var index = this.getIndex(message.id);
        this.dataStore.messages[index] = message;
        this.messagesObserver.next(this.dataStore.messages);
    };
    MessageService.prototype.onRemoved = function (message) {
        var index = this.getIndex(message.id);
        this.dataStore.messages.splice(index, 1);
        this.messagesObserver.next(this.dataStore.messages);
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["b" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["b" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["a" /* RestService */]) === "function" && _b || Object])
], MessageService);

var _a, _b;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_extended_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_feathers_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__navbar_component__["a" /* NavbarComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__navbar_component__["a" /* NavbarComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3_app_core_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_extended_http_service__["a" /* ExtendedHttpService */],
            __WEBPACK_IMPORTED_MODULE_6__services_feathers_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_6__services_feathers_service__["b" /* SocketService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(_router) {
        this._router = _router;
        this.isActive = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onMobileNavClick = function () {
        this.isActive ? this.isActive = false : this.isActive = true;
        console.log(this.isActive);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(261),
        styles: ["\n    a.nav-item {\n      color: black;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(_formBuilder, _authservice, _router) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this._authservice = _authservice;
        this._router = _router;
        this.postingForm = false;
        //Declare form entries and corresponding error messages here
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'pattern': 'Please enter a valid email',
                'maxlength': 'Email is too long.'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password must be at least 7 characters long.',
                'pattern': 'Password must contain at least 1 numeric digit.'
            }
        };
        // Build the form group
        this.form = this._formBuilder.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(24),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(7),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?=.*\d).{7,99}$/)
                ]]
        });
        this.form.valueChanges
            .debounceTime(500)
            .subscribe(function (data) { return _this.onValueChanged(data); });
    }
    SignupComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // TODO: Logic when form is not valid
        if (!this.form.valid) {
            console.log('Not valid');
            return;
        }
        this.postingForm = true;
        // Handle the submitted data
        var user = {
            email: this.form.value['email'],
            password: this.form.value['password'],
        };
        this._authservice.registerUser(user).subscribe(function (data) {
            console.log('User registered', data);
            setTimeout(function () { return _this._router.navigate(['login']); }, 1000);
            _this.postingForm = false;
        }, function (err) {
            console.log('error:', err.message);
            _this.form.controls['email'].patchValue(err.message);
            _this.postingForm = false;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(263),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3030/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"section\">\n  <div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n    <div *ngFor=\"let message of messages\">\n        <div class=\"box\">\n            <article class=\"media\">\n                <div class=\"media-left\">\n                    <figure class=\"image is-64x64\">\n                        <img [src]=\"message.sentBy.avatar\" alt=\"Image\">\n                    </figure>\n                </div>\n                <div class=\"media-content\">\n                    <div class=\"content\">\n                        <p>\n                            <strong>{{ message.sentBy.email }}</strong>\n                            <br>\n                            {{message.text}}\n                        </p>\n                    </div>\n                </div>\n            </article>\n        </div>\n    </div>\n    <div style=\"padding-top: 40px\">\n        <form (ngSubmit)=\"sendMessage()\">\n            <div class=\"field\">\n                <label for=\"\" class=\"label\">Enter message:</label>\n                <p>\n                    <input class=\"input\" type=\"text\" [(ngModel)]=\"newMessage\" name=\"model\">\n                </p>\n            </div>\n        </form>\n    </div>\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav has-shadow\">\r\n  <div class=\"container\">\r\n    <div class=\"nav-left\">\r\n      <a class=\"nav-item\">\r\n        <strong style=\"color: black \">FEATHERS REALTIME CHAT</strong>\r\n      </a>\r\n      <a \r\n        class=\"nav-item is-tab is-hidden-mobile\"\r\n        [routerLinkActive]=\"['is-active']\"\r\n        [routerLinkActiveOptions]= \"{exact: true}\"\r\n        [routerLink]=\"['/chat']\">\r\n        Chat\r\n      </a>\r\n      <a \r\n        class=\"nav-item is-tab is-hidden-mobile\"\r\n        [routerLinkActive]=\"['is-active']\"\r\n        [routerLinkActiveOptions]= \"{exact: true}\"\r\n        [routerLink]=\"['/profile']\">\r\n        Profile\r\n      </a>\r\n    </div>\r\n    <span id=\"nav-toggle\" class=\"nav-toggle\" (click)=\"onMobileNavClick()\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </span>\r\n    <div id=\"nav-menu\" class=\"nav-right nav-menu\" [class.is-active]=\"isActive\">\r\n      <a \r\n        class=\"nav-item is-tab\"\r\n        [routerLinkActive]=\"['is-active']\"\r\n        (click)=\"onMobileNavClick()\"\r\n        [routerLinkActiveOptions]= \"{exact: true}\"\r\n        [routerLink]=\"['/chat']\">\r\n        Chat\r\n      </a>\r\n      <a \r\n        class=\"nav-item is-tab\"\r\n        [routerLinkActive]=\"['is-active']\"\r\n        (click)=\"onMobileNavClick()\"\r\n        [routerLinkActiveOptions]= \"{exact: true}\"\r\n        [routerLink]=\"['/profile']\">\r\n        Profile\r\n      </a>\r\n      <a \r\n        class=\"nav-item is-tab\" \r\n        [routerLinkActive]=\"['is-active']\"\r\n        (click)=\"onMobileNavClick()\"\r\n        [routerLinkActiveOptions]= \"{exact: true}\"\r\n        [routerLink]=\"['/login']\">\r\n        Login\r\n      </a>\r\n      <a \r\n        class=\"nav-item is-tab\"\r\n        [routerLinkActive]=\"['is-active']\"\r\n        (click)=\"onMobileNavClick()\"\r\n        [routerLinkActiveOptions]= \"{exact: true}\"\r\n        [routerLink]=\"['/signup']\">\r\n        Signup\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h1>Login</h1>\n</div>\n<hr />\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\" novalidate>\n  <label class=\"label\">Username</label>\n    <p class=\"control has-icon\">\n      <input \n        class=\"input\" \n        type=\"text\" \n        placeholder=\"Username\"\n        formControlName=\"username\">\n      <span class=\"icon is-small\">\n        <i class=\"fa fa-user\"></i>\n      </span>\n    </p>\n  <label class=\"label\">Password</label>\n    <p class=\"control has-icon\">\n      <input \n        class=\"input\" \n        type=\"password\" \n        placeholder=\"Password\"\n        formControlName=\"password\">\n      <span class=\"icon is-small\">\n        <i class=\"fa fa-key\"></i>\n      </span>\n    </p>\n  <div class=\"control is-grouped\">\n    <p class=\"control\">\n      <button class=\"button is-primary\" [disabled]=\"!form.valid\">Submit</button>\n    </p>\n    <p class=\"control\">\n      <button class=\"button is-link\">Cancel</button>\n    </p>\n  </div>\n</form>\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h1>Register</h1>\n</div>\n<hr />\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n  <label class=\"label\">Email</label>\n  <p class=\"control has-icon has-icon-right\">\n    <input \n      class=\"input\" \n      [ngClass]=\"{\n        'is-danger': !form.controls['email'].valid && form.controls['email'].touched,\n        'is-success': form.controls['email'].valid\n      }\"\n      type=\"email\" \n      placeholder=\"Enter email\"\n      formControlName=\"email\">\n    <span *ngIf=\"form.controls['email'].valid\" class=\"icon is-small\">\n      <i class=\"fa fa-check\"></i>\n    </span>\n    <span *ngIf=\"formErrors.email\" class=\"help is-danger\">\n      {{ formErrors.email }}\n    </span>\n  </p>\n  <label class=\"label\">Password</label>\n  <p class=\"control has-icon has-icon-right\">\n    <input \n      class=\"input\" \n      [ngClass]=\"{\n        'is-danger': !form.controls['password'].valid && form.controls['password'].touched,\n        'is-success': form.controls['password'].valid\n      }\"\n      type=\"password\" \n      placeholder=\"Enter password\"\n      formControlName=\"password\">\n    <span *ngIf=\"form.controls['password'].valid\" class=\"icon is-small\">\n        <i class=\"fa fa-check\"></i>\n      </span>\n      <span *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n      </span>\n  </p>\n  <div class=\"control is-grouped\">\n    <p class=\"control\">\n      <button class=\"button is-primary\" [disabled]=\"!form.valid\" [class.is-loading]=\"postingForm\">Submit</button>\n    </p>\n    <p class=\"control\">\n      <button class=\"button is-link\" (click)=\"form.reset()\">Reset</button>\n    </p>\n  </div>\n</form>\n<pre>\n  Form: {{ form.value | json}}\n  Valid: {{form.valid }}\n</pre>\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feathers_client__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feathers_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_feathers_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feathers_socketio_client__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feathers_socketio_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_feathers_socketio_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_feathers_hooks__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_feathers_hooks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_feathers_hooks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_feathers_rest_client__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_feathers_rest_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_feathers_rest_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_feathers_authentication_client__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_feathers_authentication_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_feathers_authentication_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_superagent__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_superagent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HOST = __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].apiBaseUrl; // Your base server URL here
var RestService = (function () {
    function RestService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(HOST);
        this._app = __WEBPACK_IMPORTED_MODULE_1_feathers_client__() // Initialize feathers
            .configure(__WEBPACK_IMPORTED_MODULE_5_feathers_rest_client__(HOST).superagent(__WEBPACK_IMPORTED_MODULE_8_superagent___default.a)) // Fire up rest
            .configure(__WEBPACK_IMPORTED_MODULE_4_feathers_hooks__()) // Configure feathers-hooks
            .configure(__WEBPACK_IMPORTED_MODULE_6_feathers_authentication_client__({
            storage: window.localStorage // Set storage of token
        }));
    }
    RestService.prototype.authenticate = function (email, password) {
        var _this = this;
        var isAuthenticated = false;
        return this._app.authenticate({
            strategy: 'local',
            email: email,
            password: password
        }).then(function (response) {
            console.log('Authenticated!', response);
            isAuthenticated = true;
            return _this._app.passport.verifyJWT(response.accessToken);
        })
            .then(function (payload) {
            console.log('JWT Payload', payload);
            return _this._app.service('users').get(payload.userId);
        })
            .then(function (user) {
            _this._app.set('user', user);
            console.log('User', _this._app.get('user'));
            return isAuthenticated = true;
        })
            .catch(function (err) {
            return false;
        });
    };
    RestService.prototype.getService = function (service) {
        return this._app.service(service);
    };
    return RestService;
}());
RestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RestService);

var SocketService = (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(HOST);
        this._app = __WEBPACK_IMPORTED_MODULE_1_feathers_client__()
            .configure(__WEBPACK_IMPORTED_MODULE_2_feathers_socketio_client__(this.socket))
            .configure(__WEBPACK_IMPORTED_MODULE_4_feathers_hooks__());
        // .configure(authentication({
        //   storage: window.localStorage
        // }));
        // this._app.authenticate({
        //   strategy: 'local',
        //   email: 'tyrone_meijn@hotmail',
        //   password : 'test1'
        // }).then(result => console.log(result)).catch(err => console.error('Error authenticating!', err));
    }
    SocketService.prototype.getService = function (service) {
        return this._app.service(service);
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=feathers.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_chat_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_0__chat_chat_component__["a" /* ChatComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
    })
], AppRoutingModule);

var routedComponents = [__WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_0__chat_chat_component__["a" /* ChatComponent */]];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(_messageService, _restService) {
        this._messageService = _messageService;
        this._restService = _restService;
        this.title = 'CHAT LOBBY';
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._messageService.messages$.subscribe(function (messages) {
            _this.messages.push(messages);
        }, function (err) { console.error(err); });
        this.retreive();
    };
    ChatComponent.prototype.retreive = function () {
        var _this = this;
        this._messageService.find({ query: { $limit: 24, $sort: { createdAt: -1 } } }).then(function (messages) {
            _this.messages = messages.data;
            console.log(messages);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this._messageService.create({
            text: this.newMessage
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(260),
        styles: [__webpack_require__(211)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["a" /* RestService */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].apiBaseUrl;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.baseUrl + 'users', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedHttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from './auth/auth.service';


var ExtendedHttpService = (function (_super) {
    __extends(ExtendedHttpService, _super);
    function ExtendedHttpService(backend, defaultOptions, router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        return _this;
    }
    ExtendedHttpService.prototype.request = function (url, options) {
        //do whatever 
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]() };
            }
            this.setHeaders(options);
        }
        else {
            this.setHeaders(url);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchErrors);
    };
    ExtendedHttpService.prototype.catchErrors = function (err) {
        // 
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            if (err.status === 401 || err.status === 403) {
                //handle authorization errors
                //TODO: Navigate to logout page.
                var navigationExtras = {
                    queryParams: { 'reason': 'unauthorized', 'status': err.status }
                };
                this.router.navigate(['signup'], navigationExtras);
            }
            // Format response to JSON, if possible
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json() || 'Backend server error');
        }
        else {
            // Error is not an instance of Response:
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err || 'Backend server error');
        }
    };
    ExtendedHttpService.prototype.setHeaders = function (objectToSetHeadersTo) {
        // Function can be used to provide additional headers on every request
    };
    return ExtendedHttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
ExtendedHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ExtendedHttpService);

var _a, _b, _c;
//# sourceMappingURL=extended-http.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_formBuilder, _restService, _router, _flash) {
        this._formBuilder = _formBuilder;
        this._restService = _restService;
        this._router = _router;
        this._flash = _flash;
        // Build the form group
        this.form = this._formBuilder.group({
            username: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required
                ]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.form.value['username'],
            password: this.form.value['password']
        };
        this._restService.authenticate(user.username, user.password).then(function (data) {
            if (data) {
                _this._flash.show('You\'re now logged in', { cssClass: 'notification is-success', time: 3000 });
                _this._router.navigate(['chat']);
            }
            else {
                console.log(data);
                _this._flash.show('Login failed', { cssClass: 'notification is-danger', time: 3000 });
            }
        }).catch(function (err) { return console.log(err); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(262),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_feathers_service__["a" /* RestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiBaseUrl: '' // should be relative on the prod server
};
//# sourceMappingURL=environment.prod.js.map

/***/ })

},[318]);
//# sourceMappingURL=main.bundle.js.map