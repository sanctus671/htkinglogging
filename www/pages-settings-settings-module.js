(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/login\"></ion-back-button>\n        </ion-buttons> \n  \n\n        <ion-title>Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list class=\"settings-list\">\n\n\n    <ion-item (click)=\"syncData()\" detail>\n            <ion-icon name=\"refresh\" slot=\"start\"></ion-icon>\n            <ion-label>Sync Submissions</ion-label>\n    </ion-item>      \n    \n    <ion-item (click)=\"openChangePassword()\" detail>\n            <ion-icon name=\"unlock\" slot=\"start\"></ion-icon>\n            <ion-label>Change Password</ion-label>\n    </ion-item>  \n     \n  \n\n\n    <ion-item (click)=\"logout()\">\n        <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\n        Logout\n    </ion-item> \n\n     \n</ion-list>    \n \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-list ion-list-header {\n  margin-bottom: 10px;\n  margin-top: 20px;\n  padding-top: 10px;\n}\n\n.settings-list ion-list-header:first-child {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\n.settings-list ion-list-header ion-label {\n  margin-bottom: 0px;\n}\n\n.settings-list ion-icon[name=trophy] {\n  color: #FFBF00;\n}\n\n.settings-list ion-icon[name=heart] {\n  color: #E31B23;\n}\n\n.settings-list ion-icon[name=logo-facebook] {\n  color: #1778F2;\n}\n\n.settings-list ion-icon[name=logo-twitter] {\n  color: #1da1f2;\n}\n\n.settings-list ion-icon[name=mail] {\n  color: grey;\n}\n\n.settings-list ion-icon[name=unlock] {\n  color: #d6a000;\n}\n\n.settings-list ion-icon[name=lock] {\n  color: #d47835;\n}\n\n.settings-list ion-icon[name=cloud-upload] {\n  color: #8CD0EF;\n}\n\n.settings-list ion-icon[name=locate] {\n  color: #90e483;\n}\n\n.settings-list ion-icon[name=eye] {\n  color: #222428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcaHRraW5nbG9nZ2luZ1xcYXBwL3NyY1xcYXBwXFxwYWdlc1xcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDUSxjQUFBO0FDQVI7O0FER0E7RUFDSyxjQUFBO0FDQUw7O0FER0E7RUFDUSxjQUFBO0FDQVI7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FESUE7RUFDSSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtbGlzdCBpb24tbGlzdC1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1saXN0IGlvbi1saXN0LWhlYWRlcjpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24taWNvbltuYW1lPVwidHJvcGh5XCJde1xyXG4gICAgY29sb3I6I0ZGQkYwMDtcclxufVxyXG5cclxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1cImhlYXJ0XCJde1xyXG4gICAgY29sb3I6I0UzMUIyMztcclxufVxyXG5cclxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1cImxvZ28tZmFjZWJvb2tcIl17XHJcbiAgICBjb2xvcjojMTc3OEYyO1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24taWNvbltuYW1lPVwibG9nby10d2l0dGVyXCJde1xyXG4gICAgY29sb3I6IzFkYTFmMjtcclxufVxyXG5cclxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1cIm1haWxcIl17XHJcbiAgICBjb2xvcjpncmV5O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24taWNvbltuYW1lPVwidW5sb2NrXCJde1xyXG4gICAgICAgIGNvbG9yOiAjZDZhMDAwO1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24taWNvbltuYW1lPVwibG9ja1wiXXtcclxuICAgICBjb2xvcjogI2Q0NzgzNTtcclxufVxyXG5cclxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1cImNsb3VkLXVwbG9hZFwiXXtcclxuICAgICAgICBjb2xvcjogIzhDRDBFRjtcclxufVxyXG5cclxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1cImxvY2F0ZVwiXXtcclxuICAgIGNvbG9yOiAjOTBlNDgzO1xyXG59XHJcblxyXG5cclxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1cImV5ZVwiXXtcclxuICAgIGNvbG9yOiAjMjIyNDI4O1xyXG59IiwiLnNldHRpbmdzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1saXN0LWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT10cm9waHldIHtcbiAgY29sb3I6ICNGRkJGMDA7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1pY29uW25hbWU9aGVhcnRdIHtcbiAgY29sb3I6ICNFMzFCMjM7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1pY29uW25hbWU9bG9nby1mYWNlYm9va10ge1xuICBjb2xvcjogIzE3NzhGMjtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1sb2dvLXR3aXR0ZXJdIHtcbiAgY29sb3I6ICMxZGExZjI7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1pY29uW25hbWU9bWFpbF0ge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT11bmxvY2tdIHtcbiAgY29sb3I6ICNkNmEwMDA7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1pY29uW25hbWU9bG9ja10ge1xuICBjb2xvcjogI2Q0NzgzNTtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1jbG91ZC11cGxvYWRdIHtcbiAgY29sb3I6ICM4Q0QwRUY7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1pY29uW25hbWU9bG9jYXRlXSB7XG4gIGNvbG9yOiAjOTBlNDgzO1xufVxuXG4uc2V0dGluZ3MtbGlzdCBpb24taWNvbltuYW1lPWV5ZV0ge1xuICBjb2xvcjogIzIyMjQyODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/offline/offline.service */ "./src/app/services/offline/offline.service.ts");
/* harmony import */ var _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/submission/submission.service */ "./src/app/services/submission/submission.service.ts");








var SettingsPage = /** @class */ (function () {
    function SettingsPage(plt, profileService, authenticationService, alertCtrl, iab, offlineService, submissionService, loadingController) {
        var _this = this;
        this.plt = plt;
        this.profileService = profileService;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.offlineService = offlineService;
        this.submissionService = submissionService;
        this.loadingController = loadingController;
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (value) {
            _this.user = value;
        });
        this.paymentTotal = 0;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.ionViewDidEnter = function () {
    };
    SettingsPage.prototype.syncData = function () {
        var _this = this;
        this.loadingController.create({
            message: 'Your submissions are being synced. Please wait...',
            duration: 20000
        }).then(function (el) {
            _this.loading = el;
            el.present();
        });
        this.offlineService.getSubmissions().then(function (data) {
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var submission = data_1[_i];
                    _this.submissionService.createSubmission(submission.fields, submission.form_id).then(function () {
                    });
                }
                //test internet
                _this.submissionService.getSubmissions("").then(function () {
                    _this.showSuccess();
                    setTimeout(function () {
                        _this.offlineService.saveSubmissions([]);
                    }, 5000);
                }).catch(function () {
                    _this.showError();
                });
            }
            else {
                _this.showSuccess();
            }
        }).catch(function () {
            _this.showError();
        });
    };
    SettingsPage.prototype.showSuccess = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                header: 'Success',
                message: 'Your submissions have been synced',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        }, 1000);
    };
    SettingsPage.prototype.showError = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                header: 'Error',
                message: 'There was an error syncing your submissions. Please try again.',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        }, 1000);
    };
    SettingsPage.prototype.openChangePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Change Password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                },
                {
                    name: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
                            _this.authenticationService.changePassword(_this.user.email, data.password, data.confirmPassword).then(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Success',
                                    message: 'Your password has been updated',
                                    buttons: [
                                        {
                                            text: 'Dismiss',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            }).catch(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Error',
                                    message: 'There was an error while changing your password.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        },
                                        {
                                            text: 'Try Again',
                                            handler: function (data) {
                                                setTimeout(function () { _this.openChangePassword(); }, 200);
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            });
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'Passwords do not match',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Try Again',
                                        handler: function (data) {
                                            setTimeout(function () { _this.openChangePassword(); }, 200);
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    SettingsPage.prototype.logout = function () {
        this.authenticationService.logout();
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
        { type: _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__["OfflineService"] },
        { type: _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_7__["SubmissionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__["OfflineService"], _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_7__["SubmissionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map