(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submissions-submissions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/submissions/submissions.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/submissions/submissions.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>\n            Submissions\n        </ion-title>\n        \n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/settings']\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n            </ion-button>   \n            \n        </ion-buttons>            \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"submissions\">\n    \n    \n\n    <div class=\"submissions__filter\">     \n        \n        <ion-item>\n            <ion-label position=\"floating\">Filter by group</ion-label>\n            <ion-select [(ngModel)]=\"search\" (ionChange)=\"updateGroup()\">\n                <ion-select-option value=\"all\">All</ion-select-option>\n                <ion-select-option *ngFor=\"let formGroup of formGroups\" [value]=\"formGroup.id\">{{formGroup.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>            \n        \n        \n    </div>\n\n        \n    <div class=\"submissions__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>    \n        \n  \n    \n    <div *ngIf=\"!loading\">\n        <ion-list class=\"submissions__list\">\n\n\n            <ion-item detail *ngFor=\"let submission of filteredSubmissions\" [routerLink]=\"['/submission/' + submission.id]\" routerDirection=\"forward\">\n                <ion-label>\n                    <h2>Submission #{{submission.id}}</h2>\n                    <p>Submitted {{formatDate(submission.created_at)}}</p>\n                </ion-label>\n            </ion-item>       \n\n\n        </ion-list>    \n    </div> \n\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/submissions/submissions-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/submissions/submissions-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubmissionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsPageRoutingModule", function() { return SubmissionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _submissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submissions.page */ "./src/app/pages/submissions/submissions.page.ts");




var routes = [
    {
        path: '',
        component: _submissions_page__WEBPACK_IMPORTED_MODULE_3__["SubmissionsPage"]
    }
];
var SubmissionsPageRoutingModule = /** @class */ (function () {
    function SubmissionsPageRoutingModule() {
    }
    SubmissionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SubmissionsPageRoutingModule);
    return SubmissionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/submissions/submissions.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/submissions/submissions.module.ts ***!
  \*********************************************************/
/*! exports provided: SubmissionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsPageModule", function() { return SubmissionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _submissions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submissions-routing.module */ "./src/app/pages/submissions/submissions-routing.module.ts");
/* harmony import */ var _submissions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submissions.page */ "./src/app/pages/submissions/submissions.page.ts");







var SubmissionsPageModule = /** @class */ (function () {
    function SubmissionsPageModule() {
    }
    SubmissionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _submissions_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmissionsPageRoutingModule"]
            ],
            declarations: [_submissions_page__WEBPACK_IMPORTED_MODULE_6__["SubmissionsPage"]]
        })
    ], SubmissionsPageModule);
    return SubmissionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/submissions/submissions.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/submissions/submissions.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submissions.ios .submissions__search .submissions__search__filter {\n  top: 12px;\n}\n.submissions .submissions__search {\n  position: relative;\n  margin-top: 10px;\n}\n.submissions .submissions__search .submissions__search__filter {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  font-size: 10px;\n}\n.submissions .submissions__list {\n  margin-top: 15px;\n}\n.submissions .submissions__list ion-list-header {\n  font-weight: 600;\n}\n.submissions .submissions__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VibWlzc2lvbnMvRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcaHRraW5nbG9nZ2luZ1xcYXBwL3NyY1xcYXBwXFxwYWdlc1xcc3VibWlzc2lvbnNcXHN1Ym1pc3Npb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VibWlzc2lvbnMvc3VibWlzc2lvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0ksU0FBQTtBQ0xaO0FEV0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURXUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDVFo7QURlSTtFQUNJLGdCQUFBO0FDYlI7QURlUTtFQUNRLGdCQUFBO0FDYmhCO0FEb0JJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ2xCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1pc3Npb25zL3N1Ym1pc3Npb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXNzaW9uc3tcclxuICAgIFxyXG4gICAgJi5pb3N7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdWJtaXNzaW9uc19fc2VhcmNoIC5zdWJtaXNzaW9uc19fc2VhcmNoX19maWx0ZXJ7XHJcbiAgICAgICAgICAgIHRvcDoxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC5zdWJtaXNzaW9uc19fc2VhcmNoe1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAuc3VibWlzc2lvbnNfX3NlYXJjaF9fZmlsdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnN1Ym1pc3Npb25zX19saXN0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAuc3VibWlzc2lvbnNfX2xvYWRpbmd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7ICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuIiwiLnN1Ym1pc3Npb25zLmlvcyAuc3VibWlzc2lvbnNfX3NlYXJjaCAuc3VibWlzc2lvbnNfX3NlYXJjaF9fZmlsdGVyIHtcbiAgdG9wOiAxMnB4O1xufVxuLnN1Ym1pc3Npb25zIC5zdWJtaXNzaW9uc19fc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnN1Ym1pc3Npb25zIC5zdWJtaXNzaW9uc19fc2VhcmNoIC5zdWJtaXNzaW9uc19fc2VhcmNoX19maWx0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnN1Ym1pc3Npb25zIC5zdWJtaXNzaW9uc19fbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uc3VibWlzc2lvbnMgLnN1Ym1pc3Npb25zX19saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc3VibWlzc2lvbnMgLnN1Ym1pc3Npb25zX19sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/submissions/submissions.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/submissions/submissions.page.ts ***!
  \*******************************************************/
/*! exports provided: SubmissionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsPage", function() { return SubmissionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/submission/submission.service */ "./src/app/services/submission/submission.service.ts");
/* harmony import */ var _services_form_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/form/form.service */ "./src/app/services/form/form.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var SubmissionsPage = /** @class */ (function () {
    function SubmissionsPage(submissionService, toastController, modalController, router, authenticationService, alertCtrl, ngZone, formService) {
        var _this = this;
        this.submissionService = submissionService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.formService = formService;
        this.loading = true;
        this.search = "";
        this.submissions = [];
        this.filteredSubmissions = [];
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.ngZone.run(function () {
                _this.user = data;
            });
        });
        this.formGroups = [];
        this.formService.getFormGroups().then(function (data) {
            _this.formGroups = data;
        });
    }
    SubmissionsPage.prototype.ngOnInit = function () {
    };
    SubmissionsPage.prototype.ionViewDidEnter = function () {
        this.getSubmissions();
    };
    SubmissionsPage.prototype.updateGroup = function () {
        if (!this.search || this.search === "all") {
            this.filteredSubmissions = this.submissions.slice();
            return;
        }
        var submissions = [];
        for (var _i = 0, _a = this.submissions; _i < _a.length; _i++) {
            var submission = _a[_i];
            if (submission.form && submission.form.form_group_id && submission.form.form_group_id === this.search) {
                submissions.push(submission);
            }
        }
        this.filteredSubmissions = submissions;
    };
    SubmissionsPage.prototype.getSubmissions = function () {
        var _this = this;
        this.loading = true;
        this.submissionService.getSubmissions(this.search).then(function (data) {
            _this.submissions = data.data;
            _this.filteredSubmissions = _this.submissions.slice();
            if (_this.search) {
                _this.updateGroup();
            }
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    SubmissionsPage.prototype.doSearch = function () {
        this.getSubmissions();
    };
    SubmissionsPage.prototype.formatDate = function (date) {
        var localeOffset = -(new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).add(localeOffset, 'm').fromNow();
    };
    SubmissionsPage.ctorParameters = function () { return [
        { type: _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_form_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] }
    ]; };
    SubmissionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submissions',
            template: __webpack_require__(/*! raw-loader!./submissions.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/submissions/submissions.page.html"),
            styles: [__webpack_require__(/*! ./submissions.page.scss */ "./src/app/pages/submissions/submissions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_submission_submission_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _services_form_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"]])
    ], SubmissionsPage);
    return SubmissionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=submissions-submissions-module.js.map