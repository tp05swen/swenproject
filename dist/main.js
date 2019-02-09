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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background: rgba(0, 0, 0,0.7);\r\n    margin: auto;\r\n    padding: 15px;\r\n    \r\n}\r\n\r\n\r\n\r\n.container2  {\r\n    height: 500px;\r\n    z-index: 15;\r\n    margin: auto;\r\n    background: white;\r\n    padding: 25px;\r\n    text-align: center;\r\n\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n<div class=\"container2\">\n    What is Lorem Ipsum?\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    \n    Why do we use it?\n    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n    \n    \n    Where does it come from?\n    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n    \n    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\r\n    float: left;\r\n    list-style: none;\r\n    position: relative;\r\n    text-align: center; \r\n    margin: 0 auto;\r\n    \r\n\r\n}\r\n\r\n.nav-link{\r\n    padding-right: 25px;\r\n    padding-left: 25px;\r\n    display:inline;\r\n    font-size: 18px;\r\n    font-family:Raleway;\r\n    color:white;\r\n}\r\n\r\n.site-heading {\r\n    font-weight: 1;\r\n    line-height: 3rem;\r\n  \r\n  }\r\n\r\nbody {\r\n    background-image: url(\"https://www.barcelo.com/en-us/images/265-swimming-pool-22-hotel-barcelo-costa-cancun_tcm21-126728.jpg\");\r\n      background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;\r\n      height:100rem;\r\n  }\r\n\r\n.logintext{\r\n    position: absolute;\r\n    right:97%;\r\n    bottom:95%;\r\n    font-size: 15px;\r\n    font-family: Raleway;\r\n}\r\n\r\n.registertext{\r\n    position: absolute;\r\n    right:92%;\r\n    bottom:95%;\r\n    font-size: 15px;\r\n    font-family: Raleway;\r\n}\r\n\r\n.usertext{\r\n    position: absolute;\r\n    right:88%;\r\n    bottom:95%;\r\n    font-size: 15px;\r\n    font-family: Raleway;\r\n}\r\n\r\n.admintext{\r\n    position: absolute;\r\n    right:83%;\r\n    bottom:95%;\r\n    font-size: 15px;\r\n    font-family: Raleway;\r\n}\r\n\r\n.logouttext{\r\n    position: absolute;\r\n    right:8%;\r\n    bottom:95%;\r\n    font-size: 15px;\r\n    font-family: Raleway;\r\n}\r\n\r\n.loggedin{\r\n    position: absolute;\r\n    right:1%;\r\n    bottom:95%;\r\n    font-size: 15px;\r\n    font-family: Raleway;\r\n}\r\n\r\n/* footer {\r\n    background : rgba(0, 0, 0,0.7);\r\n    opacity: 0.7;\r\n} */\r\n\r\n.footer {\r\n    background: rgba(0, 0, 0,0.7);\r\n    position: fixed;\r\n    bottom:0;\r\n    width: 100%;\r\n    z-index: 20000;\r\n    color: white;\r\n}\r\n\r\n.hidden{\r\n    display:none;\r\n}\r\n\r\n.show{\r\n    display:block;\r\n}\r\n\r\n#modal-container {\r\n    position:  fixed;\r\n    top: 300px;\r\n    left: 50%;\r\n    width: 375px;\r\n    background: white;\r\n    margin-left: -187.5px;\r\n    text-align: center;\r\n    box-shadow: 0px 0px 2px 1px black;\r\n    z-index: 100;\r\n}\r\n\r\n#loginoverlay {\r\n    position: absolute;\r\n    top: 0px;\r\n    left:  0px;\r\n    z-index:  99;\r\n    background:  rgba(0,0,0,0.8);\r\n    width:  100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n    <link href=\"https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\" rel=\"stylesheet\">\n\n\n\n\n<h1 class=\"site-heading text-center\" style=\"color:white; background-color: #000000; opacity: 0.7;  padding:25px;\">\n  <b class=\"logintext\" routerLink=\"/login\" routerLinkActive=\"active\">Login</b>\n  <b class=\"registertext\" routerLink=\"/register\" routerLinkActive=\"active\">Register</b>\n  <!--<b class=\"usertext\" routerLink=\"/user\" routerLinkActive=\"active\">User</b>\n  <b class=\"admintext\" routerLink=\"/admin\" routerLinkActive=\"active\">Admin</b>-->\n  <b class=\"logouttext\" *ngIf=\"login == 1\" routerLink=\"/logout\" routerLinkActive=\"active\">Logout</b>\n \n  <b class=\"loggedin\">{{loggedin}}</b>\n  <span class=\"site-heading-heading\" style=\"font-family:Raleway; font-size:80px;\">SUNNY VILLE</span><br>\n  <a class=\"title1\" style=\"font-family:Raleway; font-size:35px; margin-bottom: 50px;\">HOTEL</a>\n\n</h1>\n\n<nav class=\"navbar navbar-expand-md\" style=\"opacity:0.7; background-color: #000000;\"  >\n  <div class=\"container\" >\n\n  <ul class=\"nav\" id=\"nav\">\n    <li><a class=\"nav-link\" routerLink=\"/home\"\n      routerLinkActive=\"active\">HOME</a></li>\n      <li><a class=\"nav-link\" routerLink=\"/booking\"\n        routerLinkActive=\"active\">BOOKING</a></li>\n        <li><a class=\"nav-link\" routerLink=\"/about\"\n          routerLinkActive=\"active\">ABOUT</a></li>\n          <li><a class=\"nav-link\" routerLink=\"/contactus\"\n            routerLinkActive=\"active\">CONTACT US</a></li>\n            <li><a *ngIf=\"isadmin\" class=\"nav-link\" routerLink=\"/generatereport\"\n              routerLinkActive=\"active\">GENERATE REPORT</a></li>\n  </ul>\n  </div>\n </nav>\n <div class=\"container\">\n  <div class=\"row\">\n  <!-- routing here -->\n  <router-outlet></router-outlet>\n  </div>\n </div>\n\n\n\n <footer>\n  <div class=\"footer\" >\n   <p>Posted by: Hege Refsnes</p>\n   <p>Contact information: <a href=\"mailto:someone@example.com\">\n   someone@example.com</a>.</p>\n </div>\n </footer> \n\n  \n\n\n</body>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: loggedin, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedin", function() { return loggedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var loggedin;
var AppComponent = /** @class */ (function () {
    function AppComponent(postsService, auth) {
        var _this = this;
        this.postsService = postsService;
        this.auth = auth;
        this.title = 'Sunny Ville';
        this.isadmin = false;
        this.login = 0;
        this.posts = [];
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.isLoggedIn()) {
            this.loggedin = this.auth.getUser();
            this.login += 1;
        }
        else {
            this.loggedin = "Not Logged In";
            this.login == 0;
        }
        this.isAdmin();
    };
    AppComponent.prototype.changeStatus = function () {
        this.loggedin = this.auth.getUser();
    };
    AppComponent.prototype.isAdmin = function () {
        this.isadmin = this.auth.isAdmin();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _generatereport_generatereport_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./generatereport/generatereport.component */ "./src/app/generatereport/generatereport.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_13__["BookingComponent"],
                _generatereport_generatereport_component__WEBPACK_IMPORTED_MODULE_22__["GeneratereportComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _posts_service__WEBPACK_IMPORTED_MODULE_19__["PostsService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatLabel"],
                _auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _generatereport_generatereport_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generatereport/generatereport.component */ "./src/app/generatereport/generatereport.component.ts");

//import home components











var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], data: { permission: { only: ["admin"] } } },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], data: { permission: { only: ["user", "admin"] } } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'booking', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_4__["BookingComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], data: { permission: { only: ["user", "admin"] } } },
    { path: 'generatereport', component: _generatereport_generatereport_component__WEBPACK_IMPORTED_MODULE_11__["GeneratereportComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], data: { permission: { only: ["admin"] } } },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__["ContactusComponent"] },
    // redirect to home page on load
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var permission = next.data["permission"];
        if (this.authService.isLoggedIn() &&
            permission.only.includes(this.authService.getUserRole())) {
            return true;
        }
        else {
            this.router.navigateByUrl('/logout');
            alert("Please login to access this Page.");
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.regUser = function (username, email, pw, role) {
        return this.http.get('/api/reguser/' + username + "/" + email + "/" + pw + "/" + role);
    };
    AuthService.prototype.authUser = function (username, pw) {
        return this.http.get('/api/authuser/' + username + "/" + pw);
    };
    AuthService.prototype.setSecureToken = function (secure_token) {
        sessionStorage.setItem("LoggedIn", secure_token);
    };
    AuthService.prototype.getSecureToken = function () {
        return sessionStorage.getItem("LoggedIn");
    };
    AuthService.prototype.setUserRole = function (role) {
        sessionStorage.setItem("UserRole", role);
    };
    AuthService.prototype.getUserRole = function () {
        return sessionStorage.getItem("UserRole");
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem("LoggedIn");
        sessionStorage.removeItem("UserRole");
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getSecureToken() !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return (this.getUserRole() == "admin");
    };
    AuthService.prototype.isUser = function () {
        return (this.getUserRole() == "user" || this.getUserRole() == "admin");
    };
    AuthService.prototype.setUser = function (name) {
        sessionStorage.setItem("Username", name);
    };
    AuthService.prototype.getUser = function () {
        return sessionStorage.getItem("Username");
    };
    AuthService.prototype.setUserID = function (id) {
        sessionStorage.setItem("uid", id);
    };
    AuthService.prototype.getUserID = function () {
        return sessionStorage.getItem("uid");
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/booking.service.ts":
/*!************************************!*\
  !*** ./src/app/booking.service.ts ***!
  \************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
    }
    BookingService.prototype.bookRoom = function (fromdate, enddate, roomtype, userid, special) {
        return this.http.get('/api/bookroom/' + fromdate + "/" + enddate + "/" + roomtype + "/" + userid + "/" + special);
    };
    BookingService.prototype.retrieveBookings = function (userid) {
        return this.http.get('/api/retrievebookings/' + userid);
    };
    BookingService.prototype.deleteBooking = function (bookingid) {
        return this.http.get('/api/deletebooking/' + bookingid);
    };
    BookingService.prototype.updateBooking = function (bookingid, fromdate, enddate, roomtype, special) {
        return this.http.get('/api/updatebooking/' + bookingid + "/" + fromdate + "/" + enddate + "/" + roomtype + "/" + special);
    };
    BookingService.prototype.getAllBookings = function () {
        return this.http.get('/api/getallbookings');
    };
    BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div  {\r\n    position: absolute;\r\n    width: 1000px;\r\n    height: 1000px;\r\n    z-index: 15;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -230px 0 0 -500px;\r\n    background: white;\r\n}\r\nbutton{\r\n\r\n    font-weight: bold;\r\n    border-color: black;\r\n    background: none;\r\n    color:black;\r\n    font-family: Raleway;\r\n    padding: 5px;\r\n    }"

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  Welcome {{loggedin}}!<br>\n  Here are your lists of bookings<br><br><br>\n  <p *ngFor=\"let b of bookings\">\n  <b>Room ID:</b> {{b._id}} <br>\n  <b>From Date:</b> {{b.fromdate}}<br>\n  <b>To Date:</b> {{b.enddate}}<br>\n  <b>Room Type:</b> {{b.roomtype}}<br>\n  <b>Special Requests:</b> {{b.special}}<br>\n  <button (click)=\"deleteBooking(b._id)\">DELETE BOOKING</button>\n  <br>\n  <hr>\n  <br> \n\n    <br>\n    \n    <form [formGroup]=\"bookingForm\" novalidate>\n      <p><input formControlName=\"bookingid\" id=\"bookingid\" placeholder=\"bookingid\"/></p>\n      <p><input formControlName=\"fromdate\" id=\"fromdate\" placeholder=\"fromdate\" /></p>\n      <p><input formControlName=\"enddate\" id=\"enddate\" placeholder=\"enddate\" /></p>\n      <p><select formControlName=\"roomtype\" id=\"roomtype\" >\n          <option value =\"Single\" selected >Single</option>\n          <option value =\"Twin\" >Twin</option>\n          <option value =\"Queen\" >Queen</option>\n        </select>\n      </p>\n        <p><input formControlName=\"special\" id=\"special\" placeholder=\"Special request\"/></p>\n        <br><br>\n      <p><button (click)=\"updateBooking()\" >UPDATE BOOKING</button></p></form>\n    "

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking.service */ "./src/app/booking.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var BookingComponent = /** @class */ (function () {
    function BookingComponent(booking, auth, fb) {
        this.booking = booking;
        this.auth = auth;
        this.fb = fb;
    }
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booking.retrieveBookings(this.auth.getUserID()).subscribe(function (data) {
            _this.bookings = data;
        });
        this.bookingForm = this.fb.group({
            fromdate: '',
            enddate: '',
            roomtype: '',
            bookingid: '',
            special: '',
        });
    };
    BookingComponent.prototype.deleteBooking = function (bookingid) {
        console.log(bookingid);
        this.booking.deleteBooking(bookingid).subscribe();
    };
    BookingComponent.prototype.updateBooking = function () {
        console.log(this.bookingForm.value.bookingid);
        this.booking.updateBooking(this.bookingForm.value.bookingid, this.bookingForm.value.fromdate, this.bookingForm.value.enddate, this.bookingForm.value.roomtype, this.bookingForm.value.special).subscribe();
    };
    BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background: rgba(0, 0, 0,0.7);\r\n    margin: auto;\r\n    padding: 15px;\r\n    \r\n}\r\n\r\n\r\n\r\n.container2  {\r\n    height: 500px;\r\n    z-index: 15;\r\n    margin: auto;\r\n    background: white;\r\n    padding: 25px;\r\n    text-align: center;\r\n\r\n}"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n<div class=\"container2\">\n    What is Lorem Ipsum?\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    \n    Why do we use it?\n    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n    \n    \n    Where does it come from?\n    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n    \n    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n  Contact\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/generatereport/generatereport.component.css":
/*!*************************************************************!*\
  !*** ./src/app/generatereport/generatereport.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background: rgba(0, 0, 0,0.7);\r\n    margin: auto;\r\n    padding: 15px;\r\n    \r\n}\r\n\r\n\r\n\r\n.container2  {\r\n    height: 2000px;\r\n    z-index: 15;\r\n    margin: auto;\r\n    background: white;\r\n    padding: 25px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\nbutton{\r\n\r\n    font-weight: bold;\r\n    border-color: black;\r\n    background: none;\r\n    color:black;\r\n    font-family: Raleway;\r\n    padding: 5px\r\n    }\r\n\r\n\r\n\r\nhr{\r\n    border-top: 1px solid black;\r\n}"

/***/ }),

/***/ "./src/app/generatereport/generatereport.component.html":
/*!**************************************************************!*\
  !*** ./src/app/generatereport/generatereport.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n<div class=\"container2\">\n\n<button (click)=\"generateReport()\">Generate Report</button>\n<br><br>\nLists of total booking in the Database.\n<br><br>\n<div *ngFor=\"let a of displaybooking\">\n  <p>{{a.userid}}</p>\n  <p>{{a.fromdate}}</p>\n  <p>{{a.enddate}}</p>\n  <p>{{a.roomtype}}</p>\n  <p>{{a.special}}\n  <hr>\n    <br>\n\n</div>  </div>\n</div>"

/***/ }),

/***/ "./src/app/generatereport/generatereport.component.ts":
/*!************************************************************!*\
  !*** ./src/app/generatereport/generatereport.component.ts ***!
  \************************************************************/
/*! exports provided: GeneratereportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratereportComponent", function() { return GeneratereportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking.service */ "./src/app/booking.service.ts");



var GeneratereportComponent = /** @class */ (function () {
    function GeneratereportComponent(booking) {
        this.booking = booking;
    }
    GeneratereportComponent.prototype.ngOnInit = function () {
    };
    GeneratereportComponent.prototype.generateReport = function () {
        var _this = this;
        this.booking.getAllBookings().subscribe(function (data) {
            _this.displaybooking = data;
            console.log(_this.displaybooking[0]);
        });
    };
    GeneratereportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generatereport',
            template: __webpack_require__(/*! ./generatereport.component.html */ "./src/app/generatereport/generatereport.component.html"),
            styles: [__webpack_require__(/*! ./generatereport.component.css */ "./src/app/generatereport/generatereport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"]])
    ], GeneratereportComponent);
    return GeneratereportComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.div1 {\r\n   \r\nbackground: rgba(0, 0, 0,0.7);\r\n   width:885px;\r\n   height:85px;\r\n   margin: 0 auto;\r\n   position: absolute;\r\n   left: 25%;\r\n   \r\n}\r\n\r\n.div2 {\r\n    background:white;\r\n    position: absolute;\r\n    width: 865px;\r\n    height: 65px;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.div3 {\r\nmargin-left: 5px;\r\nmargin-top: 2px;\r\n\r\n}\r\n\r\n.example-full-width2{\r\n    border-left: thin solid rgba(0, 0, 0,0.3);\r\n    opacity: 1;\r\n    padding-left: 15px;\r\n    \r\n}\r\n\r\nbutton{\r\n\r\nfont-weight: bold;\r\nborder: none;\r\nbackground: none;\r\ncolor:black;\r\nfont-family: Raleway;\r\npadding-bottom: 15px;\r\npadding-top: 15px;\r\npadding-left: 15px;\r\npadding-right: 15px;\r\n}\r\n\r\n.divbookbutton{\r\n    position: absolute;\r\n    left: 89.5%;\r\n    top: 3%;\r\n    padding-left: 5px;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    border-left: thin solid rgba(0, 0, 0,0.3);\r\n    font-family: Raleway;\r\n}\r\n\r\n.container1 {\r\n    background: rgba(0, 0, 0,0.7);\r\n    margin: auto;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n.container2  {\r\n    height: 550px;\r\n    z-index: 10;\r\n    margin: auto;\r\n    background: white;\r\n    padding: 25px;\r\n    text-align: center;\r\n\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <br><br>\n    <div class=\"div1\">\n        <div class=\"div2\">\n          \n            <div class=\"div3\">\n                <form [formGroup]=\"bookingForm\" novalidate (ngSubmit)=\"onSubmit(bookingForm)\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input formControlName=\"fromdate\" id=\"fromdate\" matInput [matDatepicker]=\"picker1\" placeholder=\"From date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                    &nbsp;&nbsp;\n                    <mat-form-field class=\"example-full-width2\">\n                        <input formControlName=\"enddate\" id=\"enddate\" matInput [matDatepicker]=\"picker2\" placeholder=\"To date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker2></mat-datepicker>\n                    </mat-form-field>\n                    &nbsp;&nbsp;\n                    <select formControlName=\"roomtype\" id=\"roomtype\" value=\"Single\">\n                        <option value =\"Single\" selected>Single</option>\n                        <option value =\"Twin\" >Twin</option>\n                        <option value =\"Queen\" >Queen</option>\n                    </select>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input formControlName=\"special\" id=\"special\" placeholder=\"Special request\"/>\n                <div class=\"divbookbutton\">\n                <button class=\"bookbutton\" type=\"submit\" >BOOK</button></div>\n            </form>\n          </div>\n          \n    </div>\n  \n\n    <br><br><br><br><br>\n<div class=\"container1\">\n<div class=\"container2\">\n    What is Lorem Ipsum?\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    \n    Why do we use it?\n    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n    \n    \n    Where does it come from?\n    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n    \n    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n  </div>\n</div>\n\n    <!-- div style=\"text-align:center\">\n        <form action=\"/book\" method=\"POST\">\n       <input type = \"text\" placeholder=\"name\" name=\"name\" />\n       <input type = \"text\" placeholder=\"quote\" name=\"quote\" />\n       <button type=\"submit\">Submit</button>\n        </form>\n  \n       </div>-->\n    \n    \n    \n    <!--\n    <div style=\"text-align:center\">\n        <br><br><br><br><br><br><br><br>\n         </div>\n         <div class=\"container\">\n          <div class=\"row\" *ngFor=\"let post of posts\">\n          <div class=\"card card-block\">\n          <h4 class=\"card-title\">{{ post.title }}</h4>\n          <p class=\"card-text\">{{post.body}}</p>\n          <a href=\"#\" class=\"card-link\">Card link</a>\n          <a href=\"#\" class=\"card-link\">Another link</a>\n          </div>\n          </div>\n         </div>\n    \n     \n    \n    \n     -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking.service */ "./src/app/booking.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






/** @title Datepicker with min & max validation */
var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, booking, auth, router) {
        this.fb = fb;
        this.booking = booking;
        this.auth = auth;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.bookingForm = this.fb.group({
            fromdate: '',
            enddate: '',
            roomtype: '',
            special: '',
        });
    };
    HomeComponent.prototype.onSubmit = function () {
        if (this.auth.isLoggedIn()) {
            this.booking.bookRoom(this.bookingForm.value.fromdate, this.bookingForm.value.enddate, this.bookingForm.value.roomtype, this.auth.getUserID(), this.bookingForm.value.special).subscribe();
            alert("Your booking has been submitted successfully.");
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background: rgba(0, 0, 0,0.7);\r\n    height:300px;\r\n    margin: auto;\r\n    padding: 15px;\r\n    \r\n}\r\n\r\n\r\n\r\n.container2  {\r\n    height: 270px;\r\n    z-index: 15;\r\n    margin: auto;\r\n    background: white;\r\n    padding: 5px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\nbutton{\r\n\r\n    font-weight: bold;\r\n    border-color: black;\r\n    background: none;\r\n    color:black;\r\n    font-family: Raleway;\r\n    padding: 10px\r\n    }\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"container2\">\n    <br><br>\n<form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"onSubmit(myForm)\">\n  <p><input formControlName=\"name\" id=\"name\" placeholder=\"Your name\"/></p>\n  <p><input formControlName=\"password\" id=\"password\" type=\"password\" placeholder=\"Your\n  password\" /></p>\n  <p><button type=\"submit\" >Login</button></p>\n  </form>\n  <p><a routerLink=\"/register\" routerLinkActive=\"active\">Register here!</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.results = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            name: '',
            password: ''
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.authUser(this.myForm.value.name, this.myForm.value.password).subscribe(function (data) {
            _this.results = data;
            if (_this.results[0].auth) {
                _this.authService.setSecureToken(_this.myForm.value.name);
                _this.authService.setUserRole(_this.results[0].role);
                _this.authService.setUserID(_this.results[0].userid);
                _this.authService.setUser(_this.myForm.value.name);
                _this.router.navigateByUrl('/user');
                window.location.reload();
            }
            else {
                alert("Incorrect password or username.");
            }
            ;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        window.location.reload();
        this.router.navigateByUrl('/login');
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/posts.service.ts":
/*!**********************************!*\
  !*** ./src/app/posts.service.ts ***!
  \**********************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('./api/posts');
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background: rgba(0, 0, 0,0.7);\r\n    height:300px;\r\n    margin: auto;\r\n    padding: 15px;\r\n    \r\n}\r\n\r\n\r\n\r\n.container2  {\r\n    height: 270px;\r\n    z-index: 15;\r\n    margin: auto;\r\n    background: white;\r\n    \r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\nbutton{\r\n\r\n    font-weight: bold;\r\n    border-color: black;\r\n    background: none;\r\n    color:black;\r\n    font-family: Raleway;\r\n    padding: 10px\r\n    }\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n\n<div class=\"container2\">\n<br>\n\n<form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"onSubmit(myForm)\">\n  <p><input formControlName=\"name\" id=\"name\" placeholder=\"Your name\"/></p>\n  <p><input formControlName=\"email\" type=\"email\" id=\"email\" placeholder=\"Your email\" /></p>\n  <p><input formControlName=\"password\" id=\"password\" placeholder=\"Your\n  password\" /></p>\n  <p><input formControlName=\"role\" id=\"role\" placeholder=\"user/admin\" /></p>\n  <p><button type=\"submit\" >Register</button></p>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            name: '',
            password: '',
            role: '',
            email: '',
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.authService.regUser(this.myForm.value.name, this.myForm.value.email, this.myForm.value.password, this.myForm.value.role).subscribe();
        this.router.navigateByUrl('/login');
        // alert(this.myForm.value.email);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Toma\angular-apps\swenproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map