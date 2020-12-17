(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/start\"></ion-back-button>\n        </ion-buttons>     \n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"signup\">\n    \n   \n    \n    <ion-list class=\"signup__form\">\n        \n        \n        <ion-item [ngClass]=\"{'invalidItem' : !user.email && this.user.error}\">\n            <ion-label position=\"floating\">Email *</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"user.email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input clearInput type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input clearInput type=\"password\" [(ngModel)]=\"user.confirm_password\"></ion-input>\n        </ion-item>\n\n    \n\n        \n        <p class=\"signup__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n    </ion-list>  \n    \n    \n</ion-content>\n\n\n<ion-footer class=\"signup-footer\">\n    \n\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"user.loading\" (click)=\"signup()\">\n        Get Started&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!user.loading\"></ion-icon>\n        <ion-spinner *ngIf=\"user.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalidItem {\n  --full-highlight-height: calc(var(--highlight-height) * var(--show-full-highlight));\n  --inset-highlight-height: calc(var(--highlight-height) * var(--show-inset-highlight));\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,red));\n}\n\n.signup .signup__stepper {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.signup .signup__stepper .step {\n  display: inline-block;\n  width: 33.33%;\n  text-align: center;\n  vertical-align: top;\n  padding: 0px 15px;\n  opacity: 0.5;\n  -webkit-transition: opacity 200ms linear;\n  transition: opacity 200ms linear;\n}\n\n.signup .signup__stepper .step.step--active {\n  opacity: 1;\n}\n\n.signup .signup__stepper .step .step__number {\n  width: 30px;\n  height: 30px;\n  background-color: #40c873;\n  border-radius: 15px;\n  color: White;\n  font-size: 10px;\n  text-align: center;\n  line-height: 30px;\n  margin: 0 auto;\n}\n\n.signup .signup__stepper .step .step__name {\n  font-size: 12px;\n}\n\n.signup .signup__user-type p {\n  font-size: 16px;\n  text-align: center;\n  margin: 20px 0px;\n}\n\n.signup .signup__user-type .signup__user-type__card {\n  text-align: center;\n  padding: 0px;\n  border: 2px solid #40c873;\n  background-color: White;\n  -webkit-transition: background-color 200ms linear;\n  transition: background-color 200ms linear;\n}\n\n.signup .signup__user-type .signup__user-type__card ion-card-title {\n  color: #40c873;\n}\n\n.signup .signup__user-type .signup__user-type__card.signup__user-type__card--active {\n  background-color: #40c873;\n}\n\n.signup .signup__user-type .signup__user-type__card.signup__user-type__card--active ion-card-title {\n  color: White;\n}\n\n.signup .signup__form .signup__form__avatar {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n\n.signup .signup__form .signup__form__avatar ion-icon {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: #40c873;\n  color: white;\n  margin-bottom: 10px;\n}\n\n.signup .signup__form .signup__form__avatar ion-avatar {\n  margin-bottom: 10px;\n}\n\n.signup .signup__form .signup__form__avatar ion-button {\n  margin-left: 15px;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.signup .signup__form .signup__form__error {\n  color: red;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: Center;\n}\n\n.signup .signup__form .signup__form__login {\n  margin-top: 40px;\n  text-align: Center;\n}\n\n.signup .custom-checkbox ion-checkbox {\n  position: relative;\n}\n\n.signup .custom-checkbox ion-label {\n  white-space: normal;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.signup-footer {\n  background-color: white;\n}\n\n.signup-footer:before {\n  display: none;\n}\n\n.signup-footer .signup-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXGh0a2luZ2xvZ2dpbmdcXGFwcC9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtRkFBQTtFQUNBLHFGQUFBO0VBQ0Esd0VBQUE7QUNDQTs7QURNSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNIUjs7QURJUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0FDRlo7O0FESVk7RUFDSSxVQUFBO0FDRmhCOztBREtZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0ksY0FBQTtBQ0hwQjs7QURPWTtFQUNJLGVBQUE7QUNMaEI7O0FEbUJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNqQlo7O0FEb0JRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQUEseUNBQUE7QUNsQlo7O0FEcUJZO0VBQ0ksY0FBQTtBQ25CaEI7O0FEc0JZO0VBQ0kseUJBQUE7QUNwQmhCOztBRHNCZ0I7RUFDSSxZQUFBO0FDcEJwQjs7QURtQ1E7RUFDUSxnQkFBQTtFQUNKLGtCQUFBO0FDakNaOztBRGtDWTtFQUNaLFdBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNoQ0o7O0FEbUNZO0VBQ0ksbUJBQUE7QUNqQ2hCOztBRG9DWTtFQUNSLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ2xDSjs7QUR1Q1k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQ2hCOztBRHlDWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUN2Q2hCOztBRCtDRTtFQUNFLGtCQUFBO0FDN0NKOztBRGdERTtFQUNJLG1CQUFBO0VBQ0Ysa0JBQUE7RUFDQSxtQkFBQTtBQzlDSjs7QURvREE7RUFDSSx1QkFBQTtBQ2pESjs7QURtREk7RUFDSSxhQUFBO0FDakRSOztBRHNEWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcERoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWRJdGVtIHtcclxuLS1mdWxsLWhpZ2hsaWdodC1oZWlnaHQ6IGNhbGModmFyKC0taGlnaGxpZ2h0LWhlaWdodCkgKiB2YXIoLS1zaG93LWZ1bGwtaGlnaGxpZ2h0KSk7XHJcbi0taW5zZXQtaGlnaGxpZ2h0LWhlaWdodDogY2FsYyh2YXIoLS1oaWdobGlnaHQtaGVpZ2h0KSAqIHZhcigtLXNob3ctaW5zZXQtaGlnaGxpZ2h0KSk7XHJcbi0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcixyZWQpKTtcclxufVxyXG5cclxuLnNpZ251cHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zaWdudXBfX3N0ZXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICAgICAuc3RlcHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuc3RlcC0tYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcF9fbnVtYmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MGM4NzM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcF9fbmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNpZ251cF9fdXNlci10eXBle1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc2lnbnVwX191c2VyLXR5cGVfX2NhcmR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MGM4NzM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6V2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM0MGM4NzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuc2lnbnVwX191c2VyLXR5cGVfX2NhcmQtLWFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzQwYzg3MztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6V2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICAuc2lnbnVwX19mb3Jte1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zaWdudXBfX2Zvcm1fX2F2YXRhcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxud2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MGM4NzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXBfX2Zvcm1fX2Vycm9ye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwX19mb3JtX19sb2dpbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NDBweDsgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuLmN1c3RvbS1jaGVja2JveCB7ICAgIFxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVse1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbn0gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5zaWdudXAtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNpZ251cC1mb290ZXJfX2J1dHRvbntcclxuXHJcbiAgICAgICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iLCIuaW52YWxpZEl0ZW0ge1xuICAtLWZ1bGwtaGlnaGxpZ2h0LWhlaWdodDogY2FsYyh2YXIoLS1oaWdobGlnaHQtaGVpZ2h0KSAqIHZhcigtLXNob3ctZnVsbC1oaWdobGlnaHQpKTtcbiAgLS1pbnNldC1oaWdobGlnaHQtaGVpZ2h0OiBjYWxjKHZhcigtLWhpZ2hsaWdodC1oZWlnaHQpICogdmFyKC0tc2hvdy1pbnNldC1oaWdobGlnaHQpKTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHJlZCkpO1xufVxuXG4uc2lnbnVwIC5zaWdudXBfX3N0ZXBwZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNpZ251cCAuc2lnbnVwX19zdGVwcGVyIC5zdGVwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzMuMzMlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xufVxuLnNpZ251cCAuc2lnbnVwX19zdGVwcGVyIC5zdGVwLnN0ZXAtLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2lnbnVwIC5zaWdudXBfX3N0ZXBwZXIgLnN0ZXAgLnN0ZXBfX251bWJlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM4NzM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiBXaGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zaWdudXAgLnNpZ251cF9fc3RlcHBlciAuc3RlcCAuc3RlcF9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zaWdudXAgLnNpZ251cF9fdXNlci10eXBlIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5zaWdudXAgLnNpZ251cF9fdXNlci10eXBlIC5zaWdudXBfX3VzZXItdHlwZV9fY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDBjODczO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG59XG4uc2lnbnVwIC5zaWdudXBfX3VzZXItdHlwZSAuc2lnbnVwX191c2VyLXR5cGVfX2NhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzQwYzg3Mztcbn1cbi5zaWdudXAgLnNpZ251cF9fdXNlci10eXBlIC5zaWdudXBfX3VzZXItdHlwZV9fY2FyZC5zaWdudXBfX3VzZXItdHlwZV9fY2FyZC0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYzg3Mztcbn1cbi5zaWdudXAgLnNpZ251cF9fdXNlci10eXBlIC5zaWdudXBfX3VzZXItdHlwZV9fY2FyZC5zaWdudXBfX3VzZXItdHlwZV9fY2FyZC0tYWN0aXZlIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IFdoaXRlO1xufVxuLnNpZ251cCAuc2lnbnVwX19mb3JtIC5zaWdudXBfX2Zvcm1fX2F2YXRhciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zaWdudXAgLnNpZ251cF9fZm9ybSAuc2lnbnVwX19mb3JtX19hdmF0YXIgaW9uLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBjODczO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2lnbnVwIC5zaWdudXBfX2Zvcm0gLnNpZ251cF9fZm9ybV9fYXZhdGFyIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNpZ251cCAuc2lnbnVwX19mb3JtIC5zaWdudXBfX2Zvcm1fX2F2YXRhciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc2lnbnVwIC5zaWdudXBfX2Zvcm0gLnNpZ251cF9fZm9ybV9fZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBDZW50ZXI7XG59XG4uc2lnbnVwIC5zaWdudXBfX2Zvcm0gLnNpZ251cF9fZm9ybV9fbG9naW4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBDZW50ZXI7XG59XG4uc2lnbnVwIC5jdXN0b20tY2hlY2tib3ggaW9uLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZ251cCAuY3VzdG9tLWNoZWNrYm94IGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLnNpZ251cC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zaWdudXAtZm9vdGVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lnbnVwLWZvb3RlciAuc2lnbnVwLWZvb3Rlcl9fYnV0dG9uIGlvbi1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx/ */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");






var SignupPage = /** @class */ (function () {
    function SignupPage(authService, iab, transfer, loadingController, alertController) {
        this.authService = authService;
        this.iab = iab;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.user = { email: "", password: "", error: "", loading: false };
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        if (!this.user.email) {
            this.user.loading = false;
            this.user.error = "Required fields not filled in. ";
        }
        //alert("Registering... Press ok to continue");
        this.authService.register(this.user).then(function () {
            //alert("Registration successful");
            _this.user.loading = false;
            //this.authService.getUserData();
            _this.authService.retreiveUserData().then(function () {
                //alert("Retreived user data");
            }).catch(function () {
                //alert("Failed to retreive user data");
            });
        }).catch(function (e) {
            //alert("Registration failed. Press ok to see error. Screenshot this screen and send to me please.");
            //alert(JSON.stringify(e));
            _this.user.loading = false;
            if (e && e.error) {
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
    SignupPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map