(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/documents.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/documents.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>\n            Documents\n        </ion-title>\n        \n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/settings']\" routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n            </ion-button>   \n            \n        </ion-buttons>            \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"documents\">\n\n\n    <div class=\"documents__search\">\n        <ion-searchbar placeholder=\"Find a document...\" [(ngModel)]=\"search\" (ionChange)=\"doSearch()\" color=\"light\"></ion-searchbar>      \n    </div>\n\n        \n    <div class=\"documents__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>    \n        \n  \n    \n    <div *ngIf=\"!loading\">\n    \n        <div  *ngFor=\"let documentGroup of documentGroups\">\n            <ion-list class=\"documents__list\" *ngIf=\"formattedDocuments[documentGroup.name] && formattedDocuments[documentGroup.name].length > 0\">\n\n                <ion-list-header>\n                    {{documentGroup.name}}\n                </ion-list-header>\n\n                <ion-item detail *ngFor=\"let document of formattedDocuments[documentGroup.name]\"  (click)=\"downloadDocument(document.file)\">\n                    <ion-label>\n                        <h2>{{document.name}}</h2>\n                        <p>{{document.description}}</p>\n                    </ion-label>\n                </ion-item>       \n\n\n            </ion-list>    \n\n        </div>\n        \n    </div> \n\n\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/documents/documents-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/documents/documents-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function() { return DocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents.page */ "./src/app/pages/documents/documents.page.ts");




var routes = [
    {
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsPage"]
    }
];
var DocumentsPageRoutingModule = /** @class */ (function () {
    function DocumentsPageRoutingModule() {
    }
    DocumentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DocumentsPageRoutingModule);
    return DocumentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/documents/documents.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.module.ts ***!
  \*****************************************************/
/*! exports provided: DocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/pages/documents/documents-routing.module.ts");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents.page */ "./src/app/pages/documents/documents.page.ts");







var DocumentsPageModule = /** @class */ (function () {
    function DocumentsPageModule() {
    }
    DocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"]
            ],
            declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
        })
    ], DocumentsPageModule);
    return DocumentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/documents/documents.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".documents.ios .documents__search .documents__search__filter {\n  top: 12px;\n}\n.documents .documents__search {\n  position: relative;\n  margin-top: 10px;\n}\n.documents .documents__search .documents__search__filter {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  font-size: 10px;\n}\n.documents .documents__list {\n  margin-top: 15px;\n}\n.documents .documents__list ion-list-header {\n  font-weight: 600;\n}\n.documents .documents__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXGh0a2luZ2xvZ2dpbmdcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGRvY3VtZW50c1xcZG9jdW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVE7RUFDSSxTQUFBO0FDTFo7QURXSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRFdRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNUWjtBRGVJO0VBQ0ksZ0JBQUE7QUNiUjtBRGVRO0VBQ1EsZ0JBQUE7QUNiaEI7QURvQkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDbEJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnRze1xyXG4gICAgXHJcbiAgICAmLmlvc3tcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRvY3VtZW50c19fc2VhcmNoIC5kb2N1bWVudHNfX3NlYXJjaF9fZmlsdGVye1xyXG4gICAgICAgICAgICB0b3A6MTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuZG9jdW1lbnRzX19zZWFyY2h7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgICAgIC5kb2N1bWVudHNfX3NlYXJjaF9fZmlsdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmRvY3VtZW50c19fbGlzdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1saXN0LWhlYWRlcntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLmRvY3VtZW50c19fbG9hZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDsgICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG4iLCIuZG9jdW1lbnRzLmlvcyAuZG9jdW1lbnRzX19zZWFyY2ggLmRvY3VtZW50c19fc2VhcmNoX19maWx0ZXIge1xuICB0b3A6IDEycHg7XG59XG4uZG9jdW1lbnRzIC5kb2N1bWVudHNfX3NlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kb2N1bWVudHMgLmRvY3VtZW50c19fc2VhcmNoIC5kb2N1bWVudHNfX3NlYXJjaF9fZmlsdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5kb2N1bWVudHMgLmRvY3VtZW50c19fbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZG9jdW1lbnRzIC5kb2N1bWVudHNfX2xpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kb2N1bWVudHMgLmRvY3VtZW50c19fbG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/documents/documents.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/documents/documents.page.ts ***!
  \***************************************************/
/*! exports provided: DocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPage", function() { return DocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_document_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/document/document.service */ "./src/app/services/document/document.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/offline/offline.service */ "./src/app/services/offline/offline.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(documentService, toastController, modalController, router, authenticationService, alertCtrl, ngZone, iab, offlineSerivce) {
        var _this = this;
        this.documentService = documentService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.iab = iab;
        this.offlineSerivce = offlineSerivce;
        this.loading = true;
        this.search = "";
        this.filters = { orderby: "created_at", order: "asc", city: "", suburb: "" };
        this.documents = [];
        this.documentGroups = [];
        this.formattedDocuments = {};
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.ngZone.run(function () {
                _this.user = data;
            });
        });
    }
    DocumentsPage.prototype.ionViewDidEnter = function () {
        this.getDocuments();
    };
    DocumentsPage.prototype.downloadDocument = function (file) {
        this.iab.create(file, '_system');
    };
    DocumentsPage.prototype.getDocuments = function () {
        var _this = this;
        this.documentService.getDocumentGroups().then(function (data) {
            _this.offlineSerivce.saveDocumentGroups(data);
            _this.setDocumentGroupData(data);
        }).catch(function () {
            _this.offlineSerivce.getDocumentGroups().then(function (data) {
                if (data) {
                    _this.setDocumentGroupData(data);
                }
            });
        });
    };
    DocumentsPage.prototype.setDocumentGroupData = function (data) {
        var _this = this;
        this.documentGroups = data;
        this.documentGroups.push({ name: "Other" });
        for (var _i = 0, _a = this.documentGroups; _i < _a.length; _i++) {
            var documentGroup = _a[_i];
            this.formattedDocuments[documentGroup.name] = [];
        }
        this.documentService.getDocuments(this.search, this.filters).then(function (data) {
            _this.offlineSerivce.saveDocuments(data.data);
            _this.setDocumentData(data.data);
            _this.loading = false;
        }).catch(function () {
            _this.offlineSerivce.getDocuments().then(function (data) {
                if (data) {
                    _this.setDocumentData(data);
                }
            });
            _this.loading = false;
        });
    };
    DocumentsPage.prototype.setDocumentData = function (data) {
        this.documents = data;
        for (var _i = 0, _a = this.documents; _i < _a.length; _i++) {
            var document_1 = _a[_i];
            if (document_1.document_group) {
                this.formattedDocuments[document_1.document_group.name].push(document_1);
            }
            else {
                this.formattedDocuments["Other"].push(document_1);
            }
        }
    };
    DocumentsPage.prototype.doSearch = function () {
        this.getDocuments();
    };
    DocumentsPage.prototype.documentatDate = function (date) {
        var localeOffset = -(new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).add(localeOffset, 'm').format("DD/MM/YYYY, h:mma");
    };
    DocumentsPage.ctorParameters = function () { return [
        { type: _services_document_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
        { type: _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_7__["OfflineService"] }
    ]; };
    DocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! raw-loader!./documents.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/documents.page.html"),
            styles: [__webpack_require__(/*! ./documents.page.scss */ "./src/app/pages/documents/documents.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_7__["OfflineService"]])
    ], DocumentsPage);
    return DocumentsPage;
}());



/***/ }),

/***/ "./src/app/services/document/document.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/document/document.service.ts ***!
  \*******************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var DocumentService = /** @class */ (function () {
    function DocumentService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    DocumentService.prototype.getDocuments = function (search, filters) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("ht_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/documents?token=" + token + "&search=" + search + "&city=" + filters.city + "&orderby=" + filters.orderby + "&order=" + filters.order).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    DocumentService.prototype.getDocumentGroups = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("ht_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/documentgroups?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    DocumentService.prototype.getDocument = function (documentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("ht_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/documents/" + documentId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    DocumentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ })

}]);
//# sourceMappingURL=documents-documents-module.js.map