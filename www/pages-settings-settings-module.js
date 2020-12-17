(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/@ionic-native/email-composer/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/email-composer/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: EmailComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposer", function() { return EmailComposer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var EmailComposer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps.length && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)])
                        .then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    EmailComposer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EmailComposer);
    return EmailComposer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtYWlsLWNvbXBvc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGlEQUtMLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDOztJQWtJTyxpQ0FBaUI7Ozs7SUFTbEQscUNBQWE7SUFZYix5Q0FBaUI7SUFVakIsa0NBQVU7OzttREFBaUI7Z0JBQ3pCLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLE1BQWU7d0JBQ25ELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2hCO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVVELGlDQUFTLGFBQUMsR0FBWTs7O21EQUFnQjtnQkFDcEMsT0FBTyxVQUFVLENBQVUsVUFBQyxPQUFPO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQWU7NEJBQ3ZELElBQUksTUFBTSxFQUFFO2dDQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDZjtpQ0FBTTtnQ0FDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2hCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxJQUFjOzRCQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxrQ0FBVTs7O21EQUFzQjtnQkFDOUIsT0FBTyxVQUFVLENBQVcsVUFBQSxPQUFPO29CQUNqQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBUzt3QkFDN0MsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLEVBQUU7NEJBQzlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNqQjt3QkFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELG1DQUFXLGFBQUMsR0FBWTs7O21EQUFnQjtnQkFDdEMsT0FBTyxVQUFVLENBQVUsVUFBQyxPQUFPO29CQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ2hELElBQUksQ0FBQyxVQUFDLE9BQU87d0JBQ1osT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFhRCw0QkFBSSxhQUFDLE9BQTZCLEVBQUUsS0FBVztJQVcvQyxnQ0FBUSxhQUFDLEtBQWEsRUFBRSxXQUFtQjs7Ozs7O0lBN0hoQyxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBekkxQjtFQXlJbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhQ2hlY2ssXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGdldFByb21pc2Vcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbENvbXBvc2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBcHAgdG8gc2VuZCB0aGUgZW1haWwgd2l0aFxuICAgKi9cbiAgYXBwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgVG8gZmllbGRcbiAgICovXG4gIHRvPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBDQyBmaWVsZFxuICAgKi9cbiAgY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIEJDQyBmaWVsZFxuICAgKi9cbiAgYmNjPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgb3IgYmFzZTY0IGRhdGEgc3RyZWFtc1xuICAgKi9cbiAgYXR0YWNobWVudHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU3ViamVjdCBvZiB0aGUgZW1haWxcbiAgICovXG4gIHN1YmplY3Q/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsIGJvZHkgKGZvciBIVE1MLCBzZXQgaXNIdG1sIHRvIHRydWUpXG4gICAqL1xuICBib2R5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGJvZHkgaXMgSFRNTCBvciBwbGFpbiB0ZXh0XG4gICAqL1xuICBpc0h0bWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgQ29udGVudCB0eXBlIG9mIHRoZSBlbWFpbCAoQW5kcm9pZCBvbmx5KVxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBFbWFpbCBDb21wb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRW1haWwgQ29tcG9zZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBlcnkyay9jb3Jkb3ZhLWVtYWlsLXBsdWdpbikuXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRW1haWxDb21wb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZW1haWwtY29tcG9zZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsQ29tcG9zZXI6IEVtYWlsQ29tcG9zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuZ2V0Q2xpZW50cygpLnRoZW4oKGFwcHM6IFtdKSA9PiB7XG4gKiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQgZW1haWwgY2xpZW50cyBmb3IgdGhlIGRldmljZVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0NsaWVudCgpLnRoZW4oYXBwLCAoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xuICogIGlmIChpc1ZhbGlkKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgY2xpZW50IGNvbmZpZ3VyZWRcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNBY2NvdW50KCkudGhlbigoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xuICogIGlmIChpc1ZhbGlkKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgYWNjb3VudCBjb25maWd1cmVkXG4gKiAgfVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmlzQXZhaWxhYmxlKCkudGhlbihhcHAsIChhdmFpbGFibGU6IGJvb2xlYW4pID0+IHtcbiAqICBpZihhdmFpbGFibGUpIHtcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGNhbiBzZW5kIGFuIGVtYWlsLCBjYWxscyBoYXNDbGllbnQgYW5kIGhhc0FjY291bnRcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIGxldCBlbWFpbCA9IHtcbiAqICAgdG86ICdtYXhAbXVzdGVybWFubi5kZScsXG4gKiAgIGNjOiAnZXJpa2FAbXVzdGVybWFubi5kZScsXG4gKiAgIGJjYzogWydqb2huQGRvZS5jb20nLCAnamFuZUBkb2UuY29tJ10sXG4gKiAgIGF0dGFjaG1lbnRzOiBbXG4gKiAgICAgJ2ZpbGU6Ly9pbWcvbG9nby5wbmcnLFxuICogICAgICdyZXM6Ly9pY29uLnBuZycsXG4gKiAgICAgJ2Jhc2U2NDppY29uLnBuZy8vaVZCT1J3MEtHZ29BQUFBTlNVaEVVZy4uLicsXG4gKiAgICAgJ2ZpbGU6Ly9SRUFETUUucGRmJ1xuICogICBdLFxuICogICBzdWJqZWN0OiAnQ29yZG92YSBJY29ucycsXG4gKiAgIGJvZHk6ICdIb3cgYXJlIHlvdT8gTmljZSBncmVldGluZ3MgZnJvbSBMZWlwemlnJyxcbiAqICAgaXNIdG1sOiB0cnVlXG4gKiB9XG4gKlxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5vcGVuKGVtYWlsKTtcbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gYWxzbyBhc3NpZ24gYWxpYXNlcyB0byBlbWFpbCBhcHBzXG4gKiBgYGB0c1xuICogLy8gYWRkIGFsaWFzXG4gKiB0aGlzLmVtYWlsLmFkZEFsaWFzKCdnbWFpbCcsICdjb20uZ29vZ2xlLmFuZHJvaWQuZ20nKTtcbiAqXG4gKiAvLyB0aGVuIHVzZSBhbGlhcyB3aGVuIHNlbmRpbmcgZW1haWxcbiAqIHRoaXMuZW1haWwub3Blbih7XG4gKiAgIGFwcDogJ2dtYWlsJyxcbiAqICAgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEVtYWlsQ29tcG9zZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRW1haWxDb21wb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmVtYWlsJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ21hY09TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwIGhhcyBhIHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgYW4gZW1haWwgYWNjb3VudCBpcyBjb25maWd1cmVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgaGFzQWNjb3VudCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0FjY291bnQoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgYSBzcGVjaWZpYyBlbWFpbCBjbGllbnQgaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG5cbiAgQENvcmRvdmFDaGVjaygpXG4gIGhhc0NsaWVudChhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoYXBwKSB7XG4gICAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuaGFzQ2xpZW50KGFwcCwgKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmdldENsaWVudHMoKGFwcHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShhcHBzLmxlbmd0aCAmJiBhcHBzLmxlbmd0aCA+IDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGVtYWlsIGNsaWVudHMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgZ2V0Q2xpZW50cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8c3RyaW5nW10+KHJlc29sdmUgPT4ge1xuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcHBzKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgICBhcHBzID0gW2FwcHNdO1xuICAgICAgfVxuICAgICAgICByZXNvbHZlKGFwcHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgc2VuZGluZyBlbWFpbHMgaXMgc3VwcG9ydGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBpc0F2YWlsYWJsZShhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5oYXNBY2NvdW50LCB0aGlzLmhhc0NsaWVudChhcHApXSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzLmxlbmd0aCA9PT0gMiAmJiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgZW1haWwgY29tcG9zZXIgcHJlLWZpbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7RW1haWxDb21wb3Nlck9wdGlvbnN9IG9wdGlvbnMgRW1haWxcbiAgICogQHBhcmFtIHthbnl9IFtzY29wZV0gU2NvcGUgZm9yIHRoZSBwcm9taXNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgRW1haWxDb21wb3NlciBoYXMgYmVlbiBvcGVuZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogM1xuICB9KVxuICBvcGVuKG9wdGlvbnM6IEVtYWlsQ29tcG9zZXJPcHRpb25zLCBzY29wZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgbWFpbCBhcHAgYWxpYXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhcyBUaGUgYWxpYXMgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgVGhlIHBhY2thZ2UgbmFtZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRBbGlhcyhhbGlhczogc3RyaW5nLCBwYWNrYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19

/***/ }),

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
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/offline/offline.service */ "./src/app/services/offline/offline.service.ts");
/* harmony import */ var _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/submission/submission.service */ "./src/app/services/submission/submission.service.ts");









var SettingsPage = /** @class */ (function () {
    function SettingsPage(emailComposer, plt, profileService, authenticationService, alertCtrl, iab, offlineService, submissionService, loadingController) {
        var _this = this;
        this.emailComposer = emailComposer;
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
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
        { type: _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_7__["OfflineService"] },
        { type: _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_8__["SubmissionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_7__["OfflineService"], _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_8__["SubmissionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map