(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login\">\n    \n    <div>\n    \n        <div class=\"login__header\">\n\n            <img class=\"login__header__logo\" src=\"assets/logo-light.png\" />\n\n        </div>\n\n\n\n\n        <form (ngSubmit)=\"login()\">\n            <ion-list class=\"login__form\">\n                <ion-item class=\"login__form__input\">\n                    <ion-label position=\"floating\">Email</ion-label>\n                    <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" color=\"light\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"login__form__input\">\n                    <ion-label position=\"floating\">Password</ion-label>\n                    <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n                </ion-item>\n\n\n                <ion-button color=\"primary\" class=\"login__form__login-button\" type=\"submit\" [disabled]=\"user.loading\">\n                    Login\n                    <ion-spinner *ngIf=\"user.loading\" color=\"primary\"></ion-spinner>\n                </ion-button>\n\n                <p class=\"login__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n\n                <p class=\"login__form__forgot-password\"><a [routerLink]=\"['/forgot-password']\" routerDirection=\"forward\">Forgot Password?</a></p>\n\n\n\n            </ion-list>\n        </form>\n        \n    </div>\n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login > div {\n  color: White;\n  text-align: center;\n  background-color: #444444;\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  min-height: 100%;\n  background-image: url('login.jpg');\n  position: relative;\n}\n.login > div:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.5;\n  z-index: 0;\n}\n.login .login__header {\n  padding-top: 80px;\n  padding-bottom: 40px;\n  position: relative;\n}\n.login .login__header .login__header__logo {\n  max-width: 200px;\n}\n.login ion-list.login__form {\n  background: transparent;\n  max-width: 280px;\n  margin: 0 auto;\n  position: relative;\n}\n.login ion-list.login__form ion-item {\n  --ion-background-color:transparent;\n  color: white;\n  --border-color: white;\n}\n.login ion-list.login__form ion-item.ios {\n  --border-color: rgba(255,255,255,0.5);\n}\n.login ion-list.login__form .login__form__input ion-label {\n  color: white;\n}\n.login ion-list.login__form .login__form__input.item-interactive.ion-invalid {\n  --highlight-background: white !important;\n}\n.login ion-list.login__form .login__form__input.item-interactive.ion-valid {\n  --highlight-background: white !important;\n}\n.login ion-list.login__form .login__form__input.item-interactive {\n  --background-focused: transaprent !important;\n}\n.login .login__form__login-button {\n  margin-top: 30px;\n}\n.login .login__form__login-button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n.login .login__form__error {\n  color: #eb1c24;\n  font-size: 13px;\n  line-height: 16px;\n}\n.login .login__form__forgot-password {\n  font-size: 13px;\n  margin: 0px;\n  margin-top: 15px;\n}\n.login .login__form__forgot-password a {\n  color: white;\n  text-decoration: none;\n}\n.login .login__form__sign-up {\n  margin-top: 80px;\n}\n.login .login__form__sign-up a {\n  color: White;\n  text-decoration: underline;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcaHRraW5nbG9nZ2luZ1xcYXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNEWjtBRE1JO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURLUTtFQUNJLGdCQUFBO0FDSFo7QURTSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNQUjtBRFNRO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ1EscUJBQUE7QUNQcEI7QURTWTtFQUNJLHFDQUFBO0FDUGhCO0FEYVE7RUFDSSxZQUFBO0FDWFo7QURjUTtFQUNJLHdDQUFBO0FDWlo7QURjTztFQUNLLHdDQUFBO0FDWlo7QURlUTtFQUNJLDRDQUFBO0FDYlo7QURvQkk7RUFDSSxnQkFBQTtBQ2xCUjtBRG9CUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbEJaO0FEc0JJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3BCUjtBRHVCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQlI7QURzQlE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNwQlo7QUR5Qkk7RUFDSSxnQkFBQTtBQ3ZCUjtBRHdCUTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDdEJaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgXHJcbiAgICAmID4gZGl2e1xyXG4gICAgICAgIGNvbG9yOldoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzQ0NDQ0NDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2dpbi5qcGcpO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICAgICAgICB6LWluZGV4OjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fX2hlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5sb2dpbl9faGVhZGVyX19sb2dve1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgaW9uLWxpc3QubG9naW5fX2Zvcm17XHJcbiAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICBtYXgtd2lkdGg6MjgwcHg7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuaW9ze1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAubG9naW5fX2Zvcm1fX2lucHV0IGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2dpbl9fZm9ybV9faW5wdXQuaXRlbS1pbnRlcmFjdGl2ZS5pb24taW52YWxpZHtcclxuICAgICAgICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAubG9naW5fX2Zvcm1fX2lucHV0Lml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlke1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ2luX19mb3JtX19pbnB1dC5pdGVtLWludGVyYWN0aXZle1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNhcHJlbnQgIWltcG9ydGFudDsgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luX19mb3JtX19sb2dpbi1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG5cclxuICAgICAgICBpb24tc3Bpbm5lcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luX19mb3JtX19lcnJvcntcclxuICAgICAgICBjb2xvcjogI2ViMWMyNDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9fZm9ybV9fZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5sb2dpbl9fZm9ybV9fc2lnbi11cHtcclxuICAgICAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6V2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBcclxufSIsIi5sb2dpbiA+IGRpdiB7XG4gIGNvbG9yOiBXaGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZ2luLmpwZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbiA+IGRpdjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IDA7XG59XG4ubG9naW4gLmxvZ2luX19oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbiAubG9naW5fX2hlYWRlciAubG9naW5fX2hlYWRlcl9fbG9nbyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4ubG9naW4gaW9uLWxpc3QubG9naW5fX2Zvcm0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbiBpb24tbGlzdC5sb2dpbl9fZm9ybSBpb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luIGlvbi1saXN0LmxvZ2luX19mb3JtIGlvbi1pdGVtLmlvcyB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG59XG4ubG9naW4gaW9uLWxpc3QubG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19pbnB1dCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4gaW9uLWxpc3QubG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19pbnB1dC5pdGVtLWludGVyYWN0aXZlLmlvbi1pbnZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5sb2dpbiBpb24tbGlzdC5sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm1fX2lucHV0Lml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5sb2dpbiBpb24tbGlzdC5sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm1fX2lucHV0Lml0ZW0taW50ZXJhY3RpdmUge1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNhcHJlbnQgIWltcG9ydGFudDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX2xvZ2luLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubG9naW4gLmxvZ2luX19mb3JtX19sb2dpbi1idXR0b24gaW9uLXNwaW5uZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubG9naW4gLmxvZ2luX19mb3JtX19lcnJvciB7XG4gIGNvbG9yOiAjZWIxYzI0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmxvZ2luIC5sb2dpbl9fZm9ybV9fZm9yZ290LXBhc3N3b3JkIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX2ZvcmdvdC1wYXNzd29yZCBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubG9naW4gLmxvZ2luX19mb3JtX19zaWduLXVwIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX3NpZ24tdXAgYSB7XG4gIGNvbG9yOiBXaGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");



var LoginPage = /** @class */ (function () {
    function LoginPage(authService) {
        this.authService = authService;
        this.user = { email: "", password: "", error: "", loading: false };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        this.user.email = this.user.email.trim();
        this.authService.login(this.user).then(function (token) {
            _this.user.loading = false;
            _this.user.email = "";
            _this.user.password = "";
            _this.authService.retreiveUserData().then(function () { });
        }).catch(function (e) {
            _this.user.loading = false;
            if (e && (e.status === 401 || e.status === 403)) {
                _this.user.error = "Incorrect email or password";
            }
            else if (e && e.status === 422) {
                for (var index in e.error.error.errors) {
                    var error = e.error.error.errors[index];
                    _this.user.error = _this.user.error + error + " ";
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    LoginPage.prototype.signup = function () {
        //this.navCtrl.push(SignupPage);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map