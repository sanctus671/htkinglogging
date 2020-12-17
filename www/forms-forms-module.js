(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forms/forms.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forms/forms.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>\n            Forms\n        </ion-title>\n        \n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/settings']\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n            </ion-button>   \n            \n        </ion-buttons>            \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms\">\n\n\n    <div class=\"forms__search\">\n        <ion-searchbar placeholder=\"Find a form...\" [(ngModel)]=\"search\" (ionChange)=\"doSearch()\" color=\"light\"></ion-searchbar>      \n    </div>\n\n        \n    <div class=\"forms__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>    \n        \n    \n    <div *ngIf=\"!loading\">\n    \n        <div  *ngFor=\"let formGroup of formGroups\">\n            <ion-list class=\"forms__list\" *ngIf=\"formattedForms[formGroup.name] && formattedForms[formGroup.name].length > 0\">\n\n                <ion-list-header>\n                    {{formGroup.name}}\n                </ion-list-header>\n\n                <ion-item detail *ngFor=\"let form of formattedForms[formGroup.name]\"  [routerLink]=\"['/form/' + form.id]\" routerDirection=\"forward\">\n                    <ion-label>\n                        <h2>{{form.name}}</h2>\n                        <p *ngIf=\"form.last_submission\">Last submitted {{formatDate(form.last_submission.created_at)}}</p>\n                        <p *ngIf=\"!form.last_submission\">Tap to start this form</p>\n                    </ion-label>\n                </ion-item>       \n\n\n            </ion-list>    \n\n        </div>\n        \n    </div>\n\n\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.page */ "./src/app/pages/forms/forms.page.ts");







var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"] }])
            ],
            declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]]
        })
    ], FormsPageModule);
    return FormsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forms.ios .forms__search .forms__search__filter {\n  top: 12px;\n}\n.forms .forms__search {\n  position: relative;\n  margin-top: 10px;\n}\n.forms .forms__search .forms__search__filter {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  font-size: 10px;\n}\n.forms .forms__list {\n  margin-top: 15px;\n}\n.forms .forms__list ion-list-header {\n  font-weight: 600;\n}\n.forms .forms__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcaHRraW5nbG9nZ2luZ1xcYXBwL3NyY1xcYXBwXFxwYWdlc1xcZm9ybXNcXGZvcm1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybXMvZm9ybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0ksU0FBQTtBQ0xaO0FEV0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURXUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDVFo7QURlSTtFQUNJLGdCQUFBO0FDYlI7QURlUTtFQUNRLGdCQUFBO0FDYmhCO0FEb0JJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ2xCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm1zL2Zvcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jtc3tcbiAgICBcbiAgICAmLmlvc3tcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC5mb3Jtc19fc2VhcmNoIC5mb3Jtc19fc2VhcmNoX19maWx0ZXJ7XG4gICAgICAgICAgICB0b3A6MTJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICAuZm9ybXNfX3NlYXJjaHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG4gICAgICAgIC5mb3Jtc19fc2VhcmNoX19maWx0ZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLmZvcm1zX19saXN0e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVye1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIC5mb3Jtc19fbG9hZGluZ3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyAgICAgICAgXG4gICAgfVxuICAgXG59XG4iLCIuZm9ybXMuaW9zIC5mb3Jtc19fc2VhcmNoIC5mb3Jtc19fc2VhcmNoX19maWx0ZXIge1xuICB0b3A6IDEycHg7XG59XG4uZm9ybXMgLmZvcm1zX19zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZm9ybXMgLmZvcm1zX19zZWFyY2ggLmZvcm1zX19zZWFyY2hfX2ZpbHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZm9ybXMgLmZvcm1zX19saXN0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mb3JtcyAuZm9ybXNfX2xpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb3JtcyAuZm9ybXNfX2xvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/forms/forms.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/forms/forms.page.ts ***!
  \*******************************************/
/*! exports provided: FormsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPage", function() { return FormsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form/form.service */ "./src/app/services/form/form.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/offline/offline.service */ "./src/app/services/offline/offline.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var FormsPage = /** @class */ (function () {
    function FormsPage(formService, toastController, modalController, router, authenticationService, alertCtrl, ngZone, offlineSerivce) {
        var _this = this;
        this.formService = formService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.offlineSerivce = offlineSerivce;
        this.loading = true;
        this.search = "";
        this.filters = { orderby: "created_at", order: "asc", city: "", suburb: "" };
        this.forms = [];
        this.formGroups = [];
        this.formattedForms = {};
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.ngZone.run(function () {
                _this.user = data;
            });
        });
    }
    FormsPage.prototype.ionViewDidEnter = function () {
        this.getForms();
    };
    FormsPage.prototype.getForms = function () {
        var _this = this;
        this.formService.getFormGroups().then(function (data) {
            _this.offlineSerivce.saveFormGroups(data);
            _this.setFormGroupData(data);
        }).catch(function () {
            _this.offlineSerivce.getFormGroups().then(function (data) {
                if (data) {
                    _this.setFormGroupData(data);
                }
            });
        });
    };
    FormsPage.prototype.setFormGroupData = function (data) {
        var _this = this;
        this.formGroups = data;
        this.formGroups.push({ name: "Other" });
        for (var _i = 0, _a = this.formGroups; _i < _a.length; _i++) {
            var formGroup = _a[_i];
            this.formattedForms[formGroup.name] = [];
        }
        this.formService.getForms(this.search, this.filters).then(function (data) {
            _this.offlineSerivce.saveForms(data.data);
            _this.setFormData(data.data);
            _this.loading = false;
        }).catch(function () {
            _this.offlineSerivce.getForms().then(function (data) {
                if (data) {
                    _this.setFormData(data);
                }
            });
            _this.loading = false;
        });
    };
    FormsPage.prototype.setFormData = function (data) {
        this.forms = data;
        for (var _i = 0, _a = this.forms; _i < _a.length; _i++) {
            var form = _a[_i];
            if (form.form_group) {
                this.formattedForms[form.form_group.name].push(form);
            }
            else {
                this.formattedForms["Other"].push(form);
            }
        }
    };
    FormsPage.prototype.doSearch = function () {
        this.loading = true;
        this.getForms();
    };
    FormsPage.prototype.formatDate = function (date) {
        var localeOffset = -(new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).add(localeOffset, 'm').fromNow();
    };
    FormsPage.ctorParameters = function () { return [
        { type: _services_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__["OfflineService"] }
    ]; };
    FormsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forms/forms.page.html"),
            styles: [__webpack_require__(/*! ./forms.page.scss */ "./src/app/pages/forms/forms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__["OfflineService"]])
    ], FormsPage);
    return FormsPage;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map