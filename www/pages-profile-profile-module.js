(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"md-close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Edit Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"edit-profile\">\n    \n    \n    <ion-list class=\"edit-profile__form\">\n\n        <ion-item class=\"edit-profile__form__avatar\">\n            <ion-icon name=\"person\" *ngIf=\"!profile.avatar\"></ion-icon>\n            <ion-avatar item-start *ngIf=\"profile.avatar\">\n                <img [src]=\"profile.avatar\">\n            </ion-avatar>\n            <ion-button color=\"primary\" (click)=\"changeImage()\">Select Photo</ion-button>\n        </ion-item> \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"profile.email\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.first_name\"></ion-input>\n        </ion-item>   \n\n        <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.last_name\"></ion-input>\n        </ion-item>      \n              \n        \n        <ion-item>\n            <ion-label position=\"floating\">Phone</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.phone\"></ion-input>\n        </ion-item>  \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Gender</ion-label>\n            <ion-select [(ngModel)]=\"profile.gender\">\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n        </ion-item>  \n        \n        <ion-item>\n            <ion-label position=\"floating\">Date Of Birth</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"profile.dob\"></ion-datetime>\n        </ion-item>         \n                \n\n\n        <ion-item>\n            <ion-label position=\"floating\">Address</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.address\"></ion-input>\n        </ion-item> \n        \n        \n         <ion-item>\n            <ion-label position=\"floating\">About You</ion-label>\n            <ion-textarea clearInput [(ngModel)]=\"profile.biography\"></ion-textarea>\n        </ion-item>         \n              \n          \n        \n        \n        <p class=\"signup__form__error\" *ngIf=\"profile.error\">{{profile.error}}</p>\n\n    </ion-list>      \n\n\n</ion-content>\n\n\n\n<ion-footer class=\"signup-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"profile.loading || !profile.email\" (click)=\"save()\">\n        Save\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" *ngIf=\"!profile.standalone\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/jobs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title></ion-title>\n        \n        <ion-buttons slot=\"end\" *ngIf=\"profile.standalone && !loading\">\n            <ion-button (click)=\"editProfile()\">\n                Edit Profile\n            </ion-button>     \n        </ion-buttons>            \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-profile .edit-profile__form__avatar {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.edit-profile .edit-profile__form__avatar ion-icon {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: black;\n  color: white;\n  margin-bottom: 5px;\n}\n.edit-profile .edit-profile__form__avatar ion-avatar {\n  margin-bottom: 5px;\n}\n.edit-profile .edit-profile__form__avatar ion-button {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXGh0a2luZ2xvZ2dpbmdcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0haO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FET1E7RUFDSSxpQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5lZGl0LXByb2ZpbGV7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmVkaXQtcHJvZmlsZV9fZm9ybV9fYXZhdGFye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiLmVkaXQtcHJvZmlsZSAuZWRpdC1wcm9maWxlX19mb3JtX19hdmF0YXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5lZGl0LXByb2ZpbGUgLmVkaXQtcHJvZmlsZV9fZm9ybV9fYXZhdGFyIGlvbi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmVkaXQtcHJvZmlsZSAuZWRpdC1wcm9maWxlX19mb3JtX19hdmF0YXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5lZGl0LXByb2ZpbGUgLmVkaXQtcHJvZmlsZV9fZm9ybV9fYXZhdGFyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx/ */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(router, transfer, camera, loadingController, alertController, modalController, navController, authenticationService, navParams) {
        this.router = router;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.navController = navController;
        this.authenticationService = authenticationService;
        this.navParams = navParams;
        var profile = this.navParams.get('profile');
        this.profile = Object.assign({}, profile);
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    EditProfilePage.prototype.changeImage = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var loading;
            _this.loadingController.create({
                message: 'Your image is being uploaded. Please wait...',
                duration: 20000
            }).then(function (el) {
                loading = el;
                el.present();
            });
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "media_file",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            fileTransfer.upload(image, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/upload"), options).then(function (data) {
                if (data.response) {
                    var response = JSON.parse(data.response);
                    _this.profile.avatar = response.file;
                }
                loading.dismiss();
            }, function (err) {
                _this.alertController.create({
                    header: "Error",
                    subHeader: "There was a problem uploading your image",
                    message: JSON.stringify(err),
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                }).then(function (el) {
                    el.present();
                });
                loading.dismiss();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    EditProfilePage.prototype.save = function () {
        if (this.profile.dob) {
            this.profile.dob = moment__WEBPACK_IMPORTED_MODULE_8__(this.profile.dob).format("YYYY-MM-DD HH:mm:ss");
        }
        this.modalController.dismiss({ profile: this.profile });
    };
    EditProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
    ]; };
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-profile/edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]],
            entryComponents: [_edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile .profile__header {\n  background-color: #eb1c24;\n  padding-bottom: 70px;\n  color: white;\n  text-align: center;\n}\n.profile .profile__header .profile__header__avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 150px;\n  background-color: black;\n  margin: 0 auto;\n  background-size: cover;\n  background-position: center center;\n}\n.profile .profile__header .profile__header__checks .profile__header__checks__check {\n  display: inline-block;\n  width: 33.33%;\n  font-size: 12px;\n  margin-top: 20px;\n  opacity: 0.5;\n}\n.profile .profile__header .profile__header__checks .profile__header__checks__check.profile__header__checks__check--enabled {\n  opacity: 1;\n}\n.profile .profile__header .profile__header__checks .profile__header__checks__check ion-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid white;\n  border-radius: 17px;\n  display: block;\n  padding: 5px;\n  margin: 0 auto;\n  margin-bottom: 5px;\n}\n.profile .profile__header .profile__header__check-info {\n  text-decoration: underline;\n  font-size: 12px;\n  margin-top: 20px;\n}\n.profile .profile__header .profile__header__check-info ion-icon {\n  font-size: 20px;\n  vertical-align: top;\n}\n.profile .profile__header .ratings:focus {\n  outline: none;\n}\n.profile .profile__body {\n  position: relative;\n  top: -30px;\n  background-color: white;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  overflow: hidden;\n  padding: 10px 15px;\n  box-shadow: 0px -3px 1px -2px rgba(0, 0, 0, 0.01), 0px -3px 2px 0 rgba(0, 0, 0, 0), 1px -3px 5px 0 rgba(0, 0, 0, 0.05);\n}\n.profile ion-item .long-text {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxodGtpbmdsb2dnaW5nXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREVRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNJLHNCQUFBO0VBQ1osa0NBQUE7QUNBSjtBREtZO0VBQ1EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hwQjtBREtvQjtFQUNJLFVBQUE7QUNIeEI7QURNb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNKeEI7QURVUTtFQUNRLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEVWdCO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDUnBCO0FEYVE7RUFDSSxhQUFBO0FDWFo7QURlSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQ2JSO0FEZ0JJO0VBQ0kscUJBQUE7QUNkUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcclxuICAgIFxyXG4gICAgLnByb2ZpbGVfX2hlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYjFjMjQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDcwcHg7ICBcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAucHJvZmlsZV9faGVhZGVyX19hdmF0YXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHJvZmlsZV9faGVhZGVyX19jaGVja3N7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHJvZmlsZV9faGVhZGVyX19jaGVja3NfX2NoZWNre1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICYucHJvZmlsZV9faGVhZGVyX19jaGVja3NfX2NoZWNrLS1lbmFibGVke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2staW5mb3tcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yYXRpbmdzOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZmlsZV9fYm9keXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAtM3B4IDJweCAwIHJnYmEoMCwgMCwgMCwgMCksIDFweCAtM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pdGVtIC5sb25nLXRleHR7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSIsIi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIxYzI0O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9faGVhZGVyIC5wcm9maWxlX19oZWFkZXJfX2F2YXRhciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzIC5wcm9maWxlX19oZWFkZXJfX2NoZWNrc19fY2hlY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyX19jaGVja3MgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzX19jaGVjay5wcm9maWxlX19oZWFkZXJfX2NoZWNrc19fY2hlY2stLWVuYWJsZWQge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyX19jaGVja3MgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzX19jaGVjayBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9faGVhZGVyIC5wcm9maWxlX19oZWFkZXJfX2NoZWNrLWluZm8ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyX19jaGVjay1pbmZvIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucmF0aW5nczpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDBweCAtM3B4IDJweCAwIHJnYmEoMCwgMCwgMCwgMCksIDFweCAtM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4ucHJvZmlsZSBpb24taXRlbSAubG9uZy10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-profile/edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var ProfilePage = /** @class */ (function () {
    function ProfilePage(authenticationService, route, profileService, modalController, alertCtrl) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.profileService = profileService;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.loading = true;
        this.user = {};
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
        });
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile(this.profile.user_id).then(function (data) {
            _this.profile = data;
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    ProfilePage.prototype.editProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profile = Object.assign({}, this.profile);
                        profile.email = this.user.email;
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"],
                                componentProps: { profile: profile }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                _this.profile = data.data.profile;
                                _this.profileService.updateProfile(_this.profile).then(function () {
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map