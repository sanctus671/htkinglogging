(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submission-submission-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/submission/submission.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/submission/submission.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/start\"></ion-back-button>\n        </ion-buttons>          \n        \n        \n        <ion-title>\n            Submission #{{submission.id}}\n        </ion-title>          \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"submission\">\n\n    \n    <div class=\"submission__form-group\" *ngFor=\"let fieldGroup of fieldGroups\">  \n         \n         \n         <h1 class=\"submission__form-group__title\">{{fieldGroup.name}}</h1>\n         \n        <div class=\"submission__form-group__field\" *ngFor=\"let field of groupedFields[fieldGroup.id]\">\n\n             \n             \n            <ion-item class=\"submission__form-group__field__value\" \n                      *ngIf=\"field.field_type !== 'draw' && field.field_type !== 'signature' && \n                        field.field_type !== 'file_upload' && field.field_type !== 'question_group'\">\n                <ion-label>\n                    <h2>{{field.name}}</h2>\n                    <h3>{{field.answer ? field.answer : \"No Answer\"}} </h3>\n                </ion-label>\n            </ion-item>  \n             \n             \n            <div class=\"submission__form-group__field__value submission__form-group__field__value--image\" *ngIf=\"field.field_type === 'draw' || field.field_type === 'signature'\">\n                <ion-label>{{field.name}}</ion-label>\n                <img [src]=\"field.answer\" />\n            </div>\n         \n\n            <div class=\"submission__form-group__field__value submission__form-group__field__value--file\" *ngIf=\"field.field_type === 'document'\">\n                <ion-label>{{field.name}}</ion-label>\n                <a (click)=\"openFile(field.answer)\">View File</a>\n            </div>  \n             \n             \n\n            <div class=\"submission__form-group__field__value submission__form-group__field__value--question-group\" *ngIf=\"field.field_type === 'question_group'\">\n                <ion-label>{{field.name}}</ion-label>\n                <pre>{{formatJSON(field.answer)}}</pre>\n            </div>               \n             \n             \n\n        </div>         \n         \n    </div>\n    \n    \n    \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/submission/submission-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/submission/submission-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SubmissionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionPageRoutingModule", function() { return SubmissionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _submission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submission.page */ "./src/app/pages/submission/submission.page.ts");




var routes = [
    {
        path: '',
        component: _submission_page__WEBPACK_IMPORTED_MODULE_3__["SubmissionPage"]
    }
];
var SubmissionPageRoutingModule = /** @class */ (function () {
    function SubmissionPageRoutingModule() {
    }
    SubmissionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SubmissionPageRoutingModule);
    return SubmissionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/submission/submission.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/submission/submission.module.ts ***!
  \*******************************************************/
/*! exports provided: SubmissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionPageModule", function() { return SubmissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _submission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submission-routing.module */ "./src/app/pages/submission/submission-routing.module.ts");
/* harmony import */ var _submission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submission.page */ "./src/app/pages/submission/submission.page.ts");







var SubmissionPageModule = /** @class */ (function () {
    function SubmissionPageModule() {
    }
    SubmissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _submission_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmissionPageRoutingModule"]
            ],
            declarations: [_submission_page__WEBPACK_IMPORTED_MODULE_6__["SubmissionPage"]]
        })
    ], SubmissionPageModule);
    return SubmissionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/submission/submission.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/submission/submission.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submission .submission__form-group__title {\n  padding: 10px 15px;\n  border-bottom: 1px solid #eb1c24;\n}\n.submission .submission__form-group__field__value ion-label {\n  font-weight: bold;\n}\n.submission .submission__form-group__field__value ion-label h2 {\n  font-weight: bold;\n}\n.submission .submission__form-group__field__value.submission__form-group__field__value--question-group ion-label {\n  padding: 0px 15px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: block;\n}\n.submission .submission__form-group__field__value.submission__form-group__field__value--question-group pre {\n  max-height: 200px;\n  background-color: #f7f7f7;\n  border: 1px solid #dedede;\n  padding: 15px;\n  margin: 0px 15px;\n}\n.submission .submission__form-group__field__value.submission__form-group__field__value--image ion-label {\n  padding: 0px 15px;\n  display: block;\n}\n.submission .submission__form-group__field__value.submission__form-group__field__value--image img {\n  border: 1px solid black;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VibWlzc2lvbi9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxodGtpbmdsb2dnaW5nXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzdWJtaXNzaW9uXFxzdWJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VibWlzc2lvbi9zdWJtaXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0osZ0NBQUE7QUNESjtBRE9RO0VBQ0ksaUJBQUE7QUNMWjtBRE1ZO0VBQ0ksaUJBQUE7QUNKaEI7QURXWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1RoQjtBRFlZO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDVmhCO0FEZ0JZO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDZGhCO0FEaUJZO0VBQ1EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VibWlzc2lvbi9zdWJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXNzaW9ue1xyXG4gICAgXHJcbiAgICAuc3VibWlzc2lvbl9fZm9ybS1ncm91cF9fdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYjFjMjQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICYuc3VibWlzc2lvbl9fZm9ybS1ncm91cF9fZmllbGRfX3ZhbHVlLS1xdWVzdGlvbi1ncm91cHtcclxuICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByZXtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWUtLWltYWdle1xyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwiLnN1Ym1pc3Npb24gLnN1Ym1pc3Npb25fX2Zvcm0tZ3JvdXBfX3RpdGxlIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViMWMyNDtcbn1cbi5zdWJtaXNzaW9uIC5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWUgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3VibWlzc2lvbiAuc3VibWlzc2lvbl9fZm9ybS1ncm91cF9fZmllbGRfX3ZhbHVlIGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnN1Ym1pc3Npb24gLnN1Ym1pc3Npb25fX2Zvcm0tZ3JvdXBfX2ZpZWxkX192YWx1ZS5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWUtLXF1ZXN0aW9uLWdyb3VwIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN1Ym1pc3Npb24gLnN1Ym1pc3Npb25fX2Zvcm0tZ3JvdXBfX2ZpZWxkX192YWx1ZS5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWUtLXF1ZXN0aW9uLWdyb3VwIHByZSB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuLnN1Ym1pc3Npb24gLnN1Ym1pc3Npb25fX2Zvcm0tZ3JvdXBfX2ZpZWxkX192YWx1ZS5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWUtLWltYWdlIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdWJtaXNzaW9uIC5zdWJtaXNzaW9uX19mb3JtLWdyb3VwX19maWVsZF9fdmFsdWUuc3VibWlzc2lvbl9fZm9ybS1ncm91cF9fZmllbGRfX3ZhbHVlLS1pbWFnZSBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/submission/submission.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/submission/submission.page.ts ***!
  \*****************************************************/
/*! exports provided: SubmissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionPage", function() { return SubmissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_form_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/form/form.service */ "./src/app/services/form/form.service.ts");
/* harmony import */ var _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/submission/submission.service */ "./src/app/services/submission/submission.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");









var SubmissionPage = /** @class */ (function () {
    function SubmissionPage(formService, modalController, router, authenticationService, route, iab, submissionService) {
        var _this = this;
        this.formService = formService;
        this.modalController = modalController;
        this.router = router;
        this.authenticationService = authenticationService;
        this.route = route;
        this.iab = iab;
        this.submissionService = submissionService;
        this.loading = true;
        var submissionId = this.route.snapshot.params['id'];
        this.submission = { id: submissionId };
        this.form = {};
        this.fieldGroups = [];
        this.groupedFields = {};
        this.submissionService.getSubmission(this.submission.id).then(function (data) {
            _this.submission = data;
            _this.form.id = data.form_id;
            _this.getForm();
        });
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
        });
    }
    SubmissionPage.prototype.ngOnInit = function () {
    };
    SubmissionPage.prototype.getForm = function () {
        var _this = this;
        this.formService.getForm(this.form.id).then(function (data) {
            _this.setFormData(data);
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    SubmissionPage.prototype.setFormData = function (data) {
        this.form = data;
        this.fieldGroups = [];
        this.groupedFields = {};
        var unGrouped = 1;
        for (var _i = 0, _a = this.form.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.submission.answers; _b < _c.length; _b++) {
                var answer = _c[_b];
                if (answer.field_id === field.id) {
                    field.answer = answer.answer;
                }
            }
            if (!field.field_group_id && this.groupedFields["ungrouped" + unGrouped]) {
                this.groupedFields["ungrouped" + unGrouped].push(field);
            }
            else if (!field.field_group_id && !this.groupedFields["ungrouped" + unGrouped]) {
                this.groupedFields["ungrouped" + unGrouped] = [field];
                this.fieldGroups.push({ name: "Step " + (this.fieldGroups.length + 1), id: "ungrouped" + unGrouped });
            }
            else if (this.groupedFields[field.field_group_id]) {
                this.groupedFields[field.field_group_id].push(field);
                unGrouped += 1;
            }
            else {
                this.groupedFields[field.field_group_id] = [field];
                for (var _d = 0, _e = this.form.field_groups; _d < _e.length; _d++) {
                    var fieldGroup = _e[_d];
                    if (fieldGroup.id === field.field_group_id) {
                        this.fieldGroups.push(fieldGroup);
                        break;
                    }
                }
                unGrouped += 1;
            }
            field.field_options = field.field_options ? JSON.parse(field.field_options) : [];
        }
        if (this.fieldGroups.length > 0) {
            this.changeActiveGroup(this.fieldGroups[0].id);
        }
    };
    SubmissionPage.prototype.changeActiveGroup = function (fieldGroupId) {
        this.activeGroup = fieldGroupId;
        this.activeGroupIndex = this.fieldGroups.findIndex(function (item) { return item.id === fieldGroupId; });
    };
    SubmissionPage.prototype.openFile = function (file) {
        this.iab.create(file, '_system');
    };
    SubmissionPage.prototype.formatJSON = function (json) {
        return JSON.stringify(JSON.parse(json), null, 4);
    };
    SubmissionPage.ctorParameters = function () { return [
        { type: _services_form_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_4__["SubmissionService"] }
    ]; };
    SubmissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submission',
            template: __webpack_require__(/*! raw-loader!./submission.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/submission/submission.page.html"),
            styles: [__webpack_require__(/*! ./submission.page.scss */ "./src/app/pages/submission/submission.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_form_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_4__["SubmissionService"]])
    ], SubmissionPage);
    return SubmissionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-submission-submission-module.js.map