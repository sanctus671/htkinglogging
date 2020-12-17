(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/question-group/question-group.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/question-group/question-group.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='question-group'>\n\n    <div class=\"question-group__group__field\" *ngFor=\"let innerField of fields;let i = index;\">\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--short_text\" *ngIf=\"innerField.field_type === 'short_text'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"field.submission[i]\"></ion-input>\n        </ion-item>       \n\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--number\" *ngIf=\"innerField.field_type === 'number'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-input clearInput type=\"number\" [(ngModel)]=\"field.submission[i]\"></ion-input>\n        </ion-item>       \n\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--email\" *ngIf=\"innerField.field_type === 'email'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"field.submission[i]\"></ion-input>\n        </ion-item>                  \n\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--long_text\" *ngIf=\"innerField.field_type === 'long_text'\">\n           <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n           <ion-textarea clearInput [(ngModel)]=\"field.submission[i]\"></ion-textarea>\n        </ion-item> \n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--date\" *ngIf=\"innerField.field_type === 'date'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"field.submission[i]\"></ion-datetime>\n        </ion-item>    \n\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--dropdown\" *ngIf=\"innerField.field_type === 'dropdown'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-select [(ngModel)]=\"field.submission[i]\">\n                <ion-select-option *ngFor=\"let option of innerField.field_options\" [value]=\"option.value\">{{option.value}}</ion-select-option>\n            </ion-select>\n        </ion-item>                     \n\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--yes_no\" *ngIf=\"innerField.field_type === 'yes_no'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-select [(ngModel)]=\"field.submission[i]\">\n                <ion-select-option value=\"Yes\">Yes</ion-select-option>\n                <ion-select-option value=\"No\">No</ion-select-option>\n            </ion-select>\n        </ion-item> \n\n        <div class=\"question-group__group__field__input question-group__group__field__input--multiple-choice\" *ngIf=\"innerField.field_type === 'multiple_choice'\"> \n            <ion-radio-group [(ngModel)]=\"field.submission[i]\">\n                <ion-list-header>\n                    <ion-label>{{innerField.name}}</ion-label>\n                </ion-list-header>\n                <ion-item *ngFor=\"let option of innerField.options\">\n                    <ion-label>{{option.value}}</ion-label>\n                    <ion-radio slot=\"start\" [value]=\"option.value\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>   \n\n        </div>\n\n\n        <h2 class=\"question-group__group__field__input question-group__group__field__input--heading\" *ngIf=\"innerField.field_type === 'heading'\">\n           {{innerField.name}}\n        </h2> \n\n        <p class=\"question-group__group__field__input question-group__group__field__input--description\" *ngIf=\"innerField.field_type === 'description'\">\n           {{innerField.name}}\n        </p> \n\n\n        <div class=\"question-group__group__field__input question-group__group__field__input--document\" *ngIf=\"innerField.field_type === 'document'\">\n            <p *ngIf=\"innerField.description\">{{field.description}}</p>\n            <a (click)=\"openFile((innerField.document_id && innerField.document ? innerField.document.file : innerField.file))\">{{innerField.name}}</a>\n        </div>  \n\n\n        <div class=\"question-group__group__field__input question-group__group__field__input--signature\" *ngIf=\"innerField.field_type === 'signature'\">\n            <ion-label>{{innerField.name}}</ion-label>\n            <canvas id=\"canvas{{i}}\" width=\"300\" height=\"100\" style=\"touch-action: none;border:1px solid black;\"></canvas>\n        </div>\n\n\n        <div class=\"question-group__group__field__input question-group__group__field__input--draw\" *ngIf=\"innerField.field_type === 'draw'\">\n            <ion-label>{{innerField.name}}</ion-label>\n            <div class=\"draw-actions\">\n                <ion-button color=\"primary\" size=\"small\" (click)=\"drawUndo(innerField)\">\n                     <ion-icon name=\"undo\"></ion-icon> Undo\n                </ion-button>   \n                <ion-button color=\"primary\" size=\"small\" (click)=\"drawClear(innerField)\">\n                     <ion-icon name=\"trash\"></ion-icon> Clear\n                </ion-button>                       \n            </div>\n            <canvas id=\"canvas{{i}}\" [width]=\"getWidth()\" [height]=\"getWidth()\" style=\"touch-action: none;border:1px solid black;width: 100vw;height: 100vw;\"></canvas>\n        </div>  \n\n\n\n        <ion-item class=\"question-group__group__field__input question-group__group__field__input--file_upload\" *ngIf=\"innerField.field_type === 'file_upload'\">\n            <ion-label position=\"floating\">{{innerField.name}}</ion-label>\n            <ion-button color=\"primary\" (click)=\"inputFile.click()\">\n                 <ion-icon name=\"attach\"></ion-icon> Select File\n            </ion-button>\n            <span *ngIf=\"innerField.file_name\">{{file_name}}</span>\n            <input #inputFile style=\"opacity:0\" type=\"file\" (change)=\"fileChangeListener($event, innerField)\" />                  \n        </ion-item>\n\n\n        <div class=\"question-group__group__field__input question-group__group__field__input--question-group\" *ngIf=\"innerField.field_type === 'question_group'\">\n            <app-question-group [field]=\"innerField\"></app-question-group>\n        </div>\n\n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/form/form.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/form/form.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/start\"></ion-back-button>\n        </ion-buttons>          \n        \n        \n        <ion-title>\n            {{form.name ? form.name : \"Loading...\"}}\n        </ion-title>          \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"form\">\n    \n    \n    \n    <div class=\"form__navigation\" *ngIf=\"fieldGroups.length > 1\">\n        \n        <div class=\"form__navigation__group\" *ngFor=\"let fieldGroup of fieldGroups; let i = index\" \n             (click)=\"changeActiveGroup(fieldGroup.id)\"\n             [ngClass]=\"{'form__navigation__group--active':fieldGroup.id === activeGroup}\">\n            <span>{{i + 1}}</span>\n            <p>{{fieldGroup.name}}</p>\n        </div>\n        \n    </div>\n    \n    \n    <div class=\"form__group\" *ngFor=\"let fieldGroup of fieldGroups\">\n\n         \n        <div class=\"form__group__field\" *ngFor=\"let field of groupedFields[fieldGroup.id]\" [ngClass]=\"{'form__group__field--active' : activeGroup === fieldGroup.id}\">\n\n            <ion-item class=\"form__group__field__input form__group__field__input--short_text\" *ngIf=\"field.field_type === 'short_text'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-input clearInput type=\"text\" [(ngModel)]=\"submission[field.id]\"></ion-input>\n            </ion-item>       \n\n\n            <ion-item class=\"form__group__field__input form__group__field__input--number\" *ngIf=\"field.field_type === 'number'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-input clearInput type=\"number\" [(ngModel)]=\"submission[field.id]\"></ion-input>\n            </ion-item>       \n\n\n            <ion-item class=\"form__group__field__input form__group__field__input--email\" *ngIf=\"field.field_type === 'email'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-input clearInput type=\"email\" [(ngModel)]=\"submission[field.id]\"></ion-input>\n            </ion-item>                  \n\n\n            <ion-item class=\"form__group__field__input form__group__field__input--long_text\" *ngIf=\"field.field_type === 'long_text'\">\n               <ion-label position=\"floating\">{{field.name}}</ion-label>\n               <ion-textarea clearInput [(ngModel)]=\"submission[field.id]\"></ion-textarea>\n            </ion-item> \n\n            <ion-item class=\"form__group__field__input form__group__field__input--date\" *ngIf=\"field.field_type === 'date'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"submission[field.id]\"></ion-datetime>\n            </ion-item>    \n\n\n            <ion-item class=\"form__group__field__input form__group__field__input--dropdown\" *ngIf=\"field.field_type === 'dropdown'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-select [(ngModel)]=\"submission[field.id]\">\n                    <ion-select-option *ngFor=\"let option of field.field_options\" [value]=\"option.value\">{{option.value}}</ion-select-option>\n                </ion-select>\n            </ion-item>                     \n\n\n            <ion-item class=\"form__group__field__input form__group__field__input--yes_no\" *ngIf=\"field.field_type === 'yes_no'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-select [(ngModel)]=\"submission[field.id]\">\n                    <ion-select-option value=\"Yes\">Yes</ion-select-option>\n                    <ion-select-option value=\"No\">No</ion-select-option>\n                </ion-select>\n            </ion-item> \n\n            <div class=\"form__group__field__input form__group__field__input--multiple-choice\" *ngIf=\"field.field_type === 'multiple_choice'\"> \n                <ion-radio-group [(ngModel)]=\"submission[field.id]\">\n                    <ion-list-header>\n                        <ion-label>{{field.name}}</ion-label>\n                    </ion-list-header>\n                    <ion-item *ngFor=\"let option of field.field_options\">\n                        <ion-label>{{option.value}}</ion-label>\n                        <ion-radio slot=\"start\" [value]=\"option.value\"></ion-radio>\n                    </ion-item>\n                </ion-radio-group>   \n\n            </div>\n\n\n            <h2 class=\"form__group__field__input form__group__field__input--heading\" *ngIf=\"field.field_type === 'heading'\">\n               {{field.name}}\n            </h2> \n\n            <p class=\"form__group__field__input form__group__field__input--description\" *ngIf=\"field.field_type === 'description'\">\n               {{field.name}}\n            </p> \n\n\n            <div class=\"form__group__field__input form__group__field__input--document\" *ngIf=\"field.field_type === 'document'\">\n                <p *ngIf=\"field.description\">{{field.description}}</p>\n                <a (click)=\"openFile((field.document_id && field.document ? field.document.file : field.file))\">{{field.name}}</a>\n            </div>  \n\n\n            <div class=\"form__group__field__input form__group__field__input--signature\" *ngIf=\"field.field_type === 'signature'\">\n                <ion-label>{{field.name}}</ion-label>\n                <div class=\"draw-actions\">\n                    <ion-button color=\"primary\" size=\"small\" (click)=\"drawUndo(field)\">\n                         <ion-icon name=\"undo\"></ion-icon> Undo\n                    </ion-button>   \n                    <ion-button color=\"primary\" size=\"small\" (click)=\"drawClear(field)\">\n                         <ion-icon name=\"trash\"></ion-icon> Clear\n                    </ion-button>                       \n                </div>                \n                <canvas id=\"canvas{{field.id}}\" [width]=\"getWidth()\" height=\"100\" style=\"touch-action: none;\"></canvas>\n            </div>\n\n\n            <div class=\"form__group__field__input form__group__field__input--draw\" *ngIf=\"field.field_type === 'draw'\">\n                <ion-label>{{field.name}}</ion-label>\n                <div class=\"draw-actions\">\n                    <ion-button color=\"primary\" size=\"small\" (click)=\"drawUndo(field)\">\n                         <ion-icon name=\"undo\"></ion-icon> Undo\n                    </ion-button>   \n                    <ion-button color=\"primary\" size=\"small\" (click)=\"drawClear(field)\">\n                         <ion-icon name=\"trash\"></ion-icon> Clear\n                    </ion-button>                       \n                </div>\n                <canvas id=\"canvas{{field.id}}\" [width]=\"getWidth()\" [height]=\"getWidth()\" style=\"touch-action: none;height: 100vw;\"></canvas>\n            </div>  \n            \n            \n            \n            <ion-item class=\"form__group__field__input form__group__field__input--file_upload\" *ngIf=\"field.field_type === 'file_upload'\">\n                <ion-label position=\"floating\">{{field.name}}</ion-label>\n                <ion-button color=\"primary\" (click)=\"inputFile.click()\">\n                     <ion-icon name=\"attach\"></ion-icon> Select File\n                </ion-button>\n                <span *ngIf=\"field.file_name\">{{field.file_name}}</span>\n                <input #inputFile style=\"opacity:0;display:none;\" type=\"file\" (change)=\"fileChangeListener($event, field)\" />                  \n            </ion-item>\n\n\n            <div class=\"form__group__field__input form__group__field__input--question-group\" *ngIf=\"field.field_type === 'question_group'\">\n                <app-question-group [(field)]=\"field\"></app-question-group>\n            </div>\n\n        </div>\n\n        \n        \n    </div>\n    \n    \n    \n    \n</ion-content>\n\n\n<ion-footer class=\"form-footer\">\n    \n    <ion-button color='primary' expand=\"full\" class=\"form-footer__button\" \n                *ngIf=\"!loading && fieldGroups.length > 0 && activeGroup !== fieldGroups[fieldGroups.length - 1].id\"\n                (click)=\"changeActiveGroup(fieldGroups[(activeGroupIndex + 1)].id)\" >\n        Continue\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>   \n    \n\n    <ion-button color='primary' expand=\"full\" class=\"form-footer__button\" \n                *ngIf=\"!loading && (fieldGroups.length < 1 || activeGroup === fieldGroups[fieldGroups.length - 1].id)\" \n                [disabled]=\"submission.loading\" (click)=\"submit()\">\n        Submit\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!submission.loading\"></ion-icon>\n        <ion-spinner *ngIf=\"submission.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/signature_pad/dist/signature_pad.js":
/*!**********************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */

class Point {
    constructor(x, y, time) {
        this.x = x;
        this.y = y;
        this.time = time || Date.now();
    }
    distanceTo(start) {
        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.time === other.time;
    }
    velocityFrom(start) {
        return this.time !== start.time
            ? this.distanceTo(start) / (this.time - start.time)
            : 0;
    }
}

class Bezier {
    constructor(startPoint, control2, control1, endPoint, startWidth, endWidth) {
        this.startPoint = startPoint;
        this.control2 = control2;
        this.control1 = control1;
        this.endPoint = endPoint;
        this.startWidth = startWidth;
        this.endWidth = endWidth;
    }
    static fromPoints(points, widths) {
        const c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
        const c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
        return new Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
    }
    static calculateControlPoints(s1, s2, s3) {
        const dx1 = s1.x - s2.x;
        const dy1 = s1.y - s2.y;
        const dx2 = s2.x - s3.x;
        const dy2 = s2.y - s3.y;
        const m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
        const m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };
        const l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
        const l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        const dxm = m1.x - m2.x;
        const dym = m1.y - m2.y;
        const k = l2 / (l1 + l2);
        const cm = { x: m2.x + dxm * k, y: m2.y + dym * k };
        const tx = s2.x - cm.x;
        const ty = s2.y - cm.y;
        return {
            c1: new Point(m1.x + tx, m1.y + ty),
            c2: new Point(m2.x + tx, m2.y + ty),
        };
    }
    length() {
        const steps = 10;
        let length = 0;
        let px;
        let py;
        for (let i = 0; i <= steps; i += 1) {
            const t = i / steps;
            const cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
            const cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (i > 0) {
                const xdiff = cx - px;
                const ydiff = cy - py;
                length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            }
            px = cx;
            py = cy;
        }
        return length;
    }
    point(t, start, c1, c2, end) {
        return (start * (1.0 - t) * (1.0 - t) * (1.0 - t))
            + (3.0 * c1 * (1.0 - t) * (1.0 - t) * t)
            + (3.0 * c2 * (1.0 - t) * t * t)
            + (end * t * t * t);
    }
}

function throttle(fn, wait = 250) {
    let previous = 0;
    let timeout = null;
    let result;
    let storedContext;
    let storedArgs;
    const later = () => {
        previous = Date.now();
        timeout = null;
        result = fn.apply(storedContext, storedArgs);
        if (!timeout) {
            storedContext = null;
            storedArgs = [];
        }
    };
    return function wrapper(...args) {
        const now = Date.now();
        const remaining = wait - (now - previous);
        storedContext = this;
        storedArgs = args;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = fn.apply(storedContext, storedArgs);
            if (!timeout) {
                storedContext = null;
                storedArgs = [];
            }
        }
        else if (!timeout) {
            timeout = window.setTimeout(later, remaining);
        }
        return result;
    };
}

class SignaturePad {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.options = options;
        this._handleMouseDown = (event) => {
            if (event.which === 1) {
                this._mouseButtonDown = true;
                this._strokeBegin(event);
            }
        };
        this._handleMouseMove = (event) => {
            if (this._mouseButtonDown) {
                this._strokeMoveUpdate(event);
            }
        };
        this._handleMouseUp = (event) => {
            if (event.which === 1 && this._mouseButtonDown) {
                this._mouseButtonDown = false;
                this._strokeEnd(event);
            }
        };
        this._handleTouchStart = (event) => {
            event.preventDefault();
            if (event.targetTouches.length === 1) {
                const touch = event.changedTouches[0];
                this._strokeBegin(touch);
            }
        };
        this._handleTouchMove = (event) => {
            event.preventDefault();
            const touch = event.targetTouches[0];
            this._strokeMoveUpdate(touch);
        };
        this._handleTouchEnd = (event) => {
            const wasCanvasTouched = event.target === this.canvas;
            if (wasCanvasTouched) {
                event.preventDefault();
                const touch = event.changedTouches[0];
                this._strokeEnd(touch);
            }
        };
        this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
        this.minWidth = options.minWidth || 0.5;
        this.maxWidth = options.maxWidth || 2.5;
        this.throttle = ('throttle' in options ? options.throttle : 16);
        this.minDistance = ('minDistance' in options
            ? options.minDistance
            : 5);
        this.dotSize =
            options.dotSize ||
                function dotSize() {
                    return (this.minWidth + this.maxWidth) / 2;
                };
        this.penColor = options.penColor || 'black';
        this.backgroundColor = options.backgroundColor || 'rgba(0,0,0,0)';
        this.onBegin = options.onBegin;
        this.onEnd = options.onEnd;
        this._strokeMoveUpdate = this.throttle
            ? throttle(SignaturePad.prototype._strokeUpdate, this.throttle)
            : SignaturePad.prototype._strokeUpdate;
        this._ctx = canvas.getContext('2d');
        this.clear();
        this.on();
    }
    clear() {
        const { _ctx: ctx, canvas } = this;
        ctx.fillStyle = this.backgroundColor;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._data = [];
        this._reset();
        this._isEmpty = true;
    }
    fromDataURL(dataUrl, options = {}, callback) {
        const image = new Image();
        const ratio = options.ratio || window.devicePixelRatio || 1;
        const width = options.width || this.canvas.width / ratio;
        const height = options.height || this.canvas.height / ratio;
        this._reset();
        image.onload = () => {
            this._ctx.drawImage(image, 0, 0, width, height);
            if (callback) {
                callback();
            }
        };
        image.onerror = (error) => {
            if (callback) {
                callback(error);
            }
        };
        image.src = dataUrl;
        this._isEmpty = false;
    }
    toDataURL(type = 'image/png', encoderOptions) {
        switch (type) {
            case 'image/svg+xml':
                return this._toSVG();
            default:
                return this.canvas.toDataURL(type, encoderOptions);
        }
    }
    on() {
        this.canvas.style.touchAction = 'none';
        this.canvas.style.msTouchAction = 'none';
        if (window.PointerEvent) {
            this._handlePointerEvents();
        }
        else {
            this._handleMouseEvents();
            if ('ontouchstart' in window) {
                this._handleTouchEvents();
            }
        }
    }
    off() {
        this.canvas.style.touchAction = 'auto';
        this.canvas.style.msTouchAction = 'auto';
        this.canvas.removeEventListener('pointerdown', this._handleMouseDown);
        this.canvas.removeEventListener('pointermove', this._handleMouseMove);
        document.removeEventListener('pointerup', this._handleMouseUp);
        this.canvas.removeEventListener('mousedown', this._handleMouseDown);
        this.canvas.removeEventListener('mousemove', this._handleMouseMove);
        document.removeEventListener('mouseup', this._handleMouseUp);
        this.canvas.removeEventListener('touchstart', this._handleTouchStart);
        this.canvas.removeEventListener('touchmove', this._handleTouchMove);
        this.canvas.removeEventListener('touchend', this._handleTouchEnd);
    }
    isEmpty() {
        return this._isEmpty;
    }
    fromData(pointGroups) {
        this.clear();
        this._fromData(pointGroups, ({ color, curve }) => this._drawCurve({ color, curve }), ({ color, point }) => this._drawDot({ color, point }));
        this._data = pointGroups;
    }
    toData() {
        return this._data;
    }
    _strokeBegin(event) {
        const newPointGroup = {
            color: this.penColor,
            points: [],
        };
        if (typeof this.onBegin === 'function') {
            this.onBegin(event);
        }
        this._data.push(newPointGroup);
        this._reset();
        this._strokeUpdate(event);
    }
    _strokeUpdate(event) {
        if (this._data.length === 0) {
            this._strokeBegin(event);
            return;
        }
        const x = event.clientX;
        const y = event.clientY;
        const point = this._createPoint(x, y);
        const lastPointGroup = this._data[this._data.length - 1];
        const lastPoints = lastPointGroup.points;
        const lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
        const isLastPointTooClose = lastPoint
            ? point.distanceTo(lastPoint) <= this.minDistance
            : false;
        const color = lastPointGroup.color;
        if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
            const curve = this._addPoint(point);
            if (!lastPoint) {
                this._drawDot({ color, point });
            }
            else if (curve) {
                this._drawCurve({ color, curve });
            }
            lastPoints.push({
                time: point.time,
                x: point.x,
                y: point.y,
            });
        }
    }
    _strokeEnd(event) {
        this._strokeUpdate(event);
        if (typeof this.onEnd === 'function') {
            this.onEnd(event);
        }
    }
    _handlePointerEvents() {
        this._mouseButtonDown = false;
        this.canvas.addEventListener('pointerdown', this._handleMouseDown);
        this.canvas.addEventListener('pointermove', this._handleMouseMove);
        document.addEventListener('pointerup', this._handleMouseUp);
    }
    _handleMouseEvents() {
        this._mouseButtonDown = false;
        this.canvas.addEventListener('mousedown', this._handleMouseDown);
        this.canvas.addEventListener('mousemove', this._handleMouseMove);
        document.addEventListener('mouseup', this._handleMouseUp);
    }
    _handleTouchEvents() {
        this.canvas.addEventListener('touchstart', this._handleTouchStart);
        this.canvas.addEventListener('touchmove', this._handleTouchMove);
        this.canvas.addEventListener('touchend', this._handleTouchEnd);
    }
    _reset() {
        this._lastPoints = [];
        this._lastVelocity = 0;
        this._lastWidth = (this.minWidth + this.maxWidth) / 2;
        this._ctx.fillStyle = this.penColor;
    }
    _createPoint(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        return new Point(x - rect.left, y - rect.top, new Date().getTime());
    }
    _addPoint(point) {
        const { _lastPoints } = this;
        _lastPoints.push(point);
        if (_lastPoints.length > 2) {
            if (_lastPoints.length === 3) {
                _lastPoints.unshift(_lastPoints[0]);
            }
            const widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2]);
            const curve = Bezier.fromPoints(_lastPoints, widths);
            _lastPoints.shift();
            return curve;
        }
        return null;
    }
    _calculateCurveWidths(startPoint, endPoint) {
        const velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) +
            (1 - this.velocityFilterWeight) * this._lastVelocity;
        const newWidth = this._strokeWidth(velocity);
        const widths = {
            end: newWidth,
            start: this._lastWidth,
        };
        this._lastVelocity = velocity;
        this._lastWidth = newWidth;
        return widths;
    }
    _strokeWidth(velocity) {
        return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
    }
    _drawCurveSegment(x, y, width) {
        const ctx = this._ctx;
        ctx.moveTo(x, y);
        ctx.arc(x, y, width, 0, 2 * Math.PI, false);
        this._isEmpty = false;
    }
    _drawCurve({ color, curve }) {
        const ctx = this._ctx;
        const widthDelta = curve.endWidth - curve.startWidth;
        const drawSteps = Math.floor(curve.length()) * 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        for (let i = 0; i < drawSteps; i += 1) {
            const t = i / drawSteps;
            const tt = t * t;
            const ttt = tt * t;
            const u = 1 - t;
            const uu = u * u;
            const uuu = uu * u;
            let x = uuu * curve.startPoint.x;
            x += 3 * uu * t * curve.control1.x;
            x += 3 * u * tt * curve.control2.x;
            x += ttt * curve.endPoint.x;
            let y = uuu * curve.startPoint.y;
            y += 3 * uu * t * curve.control1.y;
            y += 3 * u * tt * curve.control2.y;
            y += ttt * curve.endPoint.y;
            const width = Math.min(curve.startWidth + ttt * widthDelta, this.maxWidth);
            this._drawCurveSegment(x, y, width);
        }
        ctx.closePath();
        ctx.fill();
    }
    _drawDot({ color, point, }) {
        const ctx = this._ctx;
        const width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
        ctx.beginPath();
        this._drawCurveSegment(point.x, point.y, width);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
    _fromData(pointGroups, drawCurve, drawDot) {
        for (const group of pointGroups) {
            const { color, points } = group;
            if (points.length > 1) {
                for (let j = 0; j < points.length; j += 1) {
                    const basicPoint = points[j];
                    const point = new Point(basicPoint.x, basicPoint.y, basicPoint.time);
                    this.penColor = color;
                    if (j === 0) {
                        this._reset();
                    }
                    const curve = this._addPoint(point);
                    if (curve) {
                        drawCurve({ color, curve });
                    }
                }
            }
            else {
                this._reset();
                drawDot({
                    color,
                    point: points[0],
                });
            }
        }
    }
    _toSVG() {
        const pointGroups = this._data;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const minX = 0;
        const minY = 0;
        const maxX = this.canvas.width / ratio;
        const maxY = this.canvas.height / ratio;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', this.canvas.width.toString());
        svg.setAttribute('height', this.canvas.height.toString());
        this._fromData(pointGroups, ({ color, curve }) => {
            const path = document.createElement('path');
            if (!isNaN(curve.control1.x) &&
                !isNaN(curve.control1.y) &&
                !isNaN(curve.control2.x) &&
                !isNaN(curve.control2.y)) {
                const attr = `M ${curve.startPoint.x.toFixed(3)},${curve.startPoint.y.toFixed(3)} ` +
                    `C ${curve.control1.x.toFixed(3)},${curve.control1.y.toFixed(3)} ` +
                    `${curve.control2.x.toFixed(3)},${curve.control2.y.toFixed(3)} ` +
                    `${curve.endPoint.x.toFixed(3)},${curve.endPoint.y.toFixed(3)}`;
                path.setAttribute('d', attr);
                path.setAttribute('stroke-width', (curve.endWidth * 2.25).toFixed(3));
                path.setAttribute('stroke', color);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                svg.appendChild(path);
            }
        }, ({ color, point }) => {
            const circle = document.createElement('circle');
            const dotSize = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
            circle.setAttribute('r', dotSize.toString());
            circle.setAttribute('cx', point.x.toString());
            circle.setAttribute('cy', point.y.toString());
            circle.setAttribute('fill', color);
            svg.appendChild(circle);
        });
        const prefix = 'data:image/svg+xml;base64,';
        const header = '<svg' +
            ' xmlns="http://www.w3.org/2000/svg"' +
            ' xmlns:xlink="http://www.w3.org/1999/xlink"' +
            ` viewBox="${minX} ${minY} ${maxX} ${maxY}"` +
            ` width="${maxX}"` +
            ` height="${maxY}"` +
            '>';
        let body = svg.innerHTML;
        if (body === undefined) {
            const dummy = document.createElement('dummy');
            const nodes = svg.childNodes;
            dummy.innerHTML = '';
            for (let i = 0; i < nodes.length; i += 1) {
                dummy.appendChild(nodes[i].cloneNode(true));
            }
            body = dummy.innerHTML;
        }
        const footer = '</svg>';
        const data = header + body + footer;
        return prefix + btoa(data);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);
//# sourceMappingURL=signature_pad.js.map


/***/ }),

/***/ "./src/app/components/question-group/question-group.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/question-group/question-group.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.question-group .question-group__group__field {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi1ncm91cC9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxodGtpbmdsb2dnaW5nXFxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHF1ZXN0aW9uLWdyb3VwXFxxdWVzdGlvbi1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi1ncm91cC9xdWVzdGlvbi1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsYUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi1ncm91cC9xdWVzdGlvbi1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbi1ncm91cHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgLnF1ZXN0aW9uLWdyb3VwX19ncm91cF9fZmllbGR7XHJcbiAgICAgICAgZmxleDoxO1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIi5xdWVzdGlvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5xdWVzdGlvbi1ncm91cCAucXVlc3Rpb24tZ3JvdXBfX2dyb3VwX19maWVsZCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/question-group/question-group.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/question-group/question-group.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionGroupComponent", function() { return QuestionGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload/upload.service */ "./src/app/services/upload/upload.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js");






var QuestionGroupComponent = /** @class */ (function () {
    function QuestionGroupComponent(toastController, modalController, iab, loadingController, uploadService) {
        this.toastController = toastController;
        this.modalController = modalController;
        this.iab = iab;
        this.loadingController = loadingController;
        this.uploadService = uploadService;
        this.fields = [];
        this.submission = {};
    }
    QuestionGroupComponent.prototype.ngOnInit = function () {
        this.field.submission = {};
        this.fields = this.field ? (this.field.field_options ? this.field.field_options : this.field.options) : [];
        this.setFields();
    };
    QuestionGroupComponent.prototype.ngOnChanges = function () {
    };
    QuestionGroupComponent.prototype.setFields = function () {
        var count = 1;
        var _loop_1 = function (field) {
            field.name = field.label ? field.label : ("Question " + count);
            if ((field.field_type === "signature" || field.field_type === "draw") && !field.signaturePad) {
                setTimeout(function () {
                    var signaturePadElement = document.querySelector("#canvas" + field.id);
                    field.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_5__["default"](signaturePadElement);
                });
            }
            field.options = field.options ? JSON.parse(field.options) : [];
            count += 1;
        };
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            _loop_1(field);
        }
    };
    QuestionGroupComponent.prototype.getWidth = function () {
        return window.innerWidth;
    };
    QuestionGroupComponent.prototype.drawUndo = function (field) {
        if (!field.signaturePad) {
            return;
        }
        var data = field.signaturePad.toData();
        if (data) {
            data.pop(); // remove the last dot or line
            field.signaturePad.fromData(data);
        }
    };
    QuestionGroupComponent.prototype.drawClear = function (field) {
        if (!field.signaturePad) {
            return;
        }
        field.signaturePad.clear();
    };
    QuestionGroupComponent.prototype.openFile = function (file) {
        this.iab.create(file, '_system');
    };
    QuestionGroupComponent.prototype.fileChangeListener = function (ev, field) {
        var _this = this;
        var files = ev.srcElement.files;
        field.file_name = files[0].name;
        var formData = new FormData();
        var mediaFile = files[0];
        formData.append('media_file', mediaFile, mediaFile.name);
        var loading;
        this.loadingController.create({
            message: 'Your file is being uploaded. Please wait...',
            duration: 20000
        }).then(function (el) {
            loading = el;
            el.present();
        });
        this.uploadService.uploadFile(formData).then(function (data) {
            _this.submission[field.id] = data.file;
            loading.dismiss();
        }).catch(function (data) {
            loading.dismiss();
        });
    };
    QuestionGroupComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuestionGroupComponent.prototype, "field", void 0);
    QuestionGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-group',
            template: __webpack_require__(/*! raw-loader!./question-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/question-group/question-group.component.html"),
            styles: [__webpack_require__(/*! ./question-group.component.scss */ "./src/app/components/question-group/question-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], QuestionGroupComponent);
    return QuestionGroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/form-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/form/form-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageRoutingModule", function() { return FormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");




var routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"]
    }
];
var FormPageRoutingModule = /** @class */ (function () {
    function FormPageRoutingModule() {
    }
    FormPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FormPageRoutingModule);
    return FormPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/pages/form/form-routing.module.ts");
/* harmony import */ var _components_question_group_question_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/question-group/question-group.component */ "./src/app/components/question-group/question-group.component.ts");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");








var FormPageModule = /** @class */ (function () {
    function FormPageModule() {
    }
    FormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPageRoutingModule"]
            ],
            declarations: [_form_page__WEBPACK_IMPORTED_MODULE_7__["FormPage"], _components_question_group_question_group_component__WEBPACK_IMPORTED_MODULE_6__["QuestionGroupComponent"]],
            entryComponents: [_components_question_group_question_group_component__WEBPACK_IMPORTED_MODULE_6__["QuestionGroupComponent"]]
        })
    ], FormPageModule);
    return FormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/form/form.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form .form__group .form__group__field {\n  height: 0px;\n  overflow: hidden;\n}\n.form .form__group .form__group__field.form__group__field--active {\n  height: auto;\n}\n.form .form__group .form__group__field .form__group__field__input {\n  margin-top: 10px;\n}\n.form .form__group .form__group__field .form__group__field__input--file_upload ion-label {\n  margin-bottom: 25px;\n}\n.form .form__group .form__group__field .draw-actions {\n  float: right;\n}\n.form .form__group .form__group__field .form__group__field__input--draw ion-label, .form .form__group .form__group__field .form__group__field__input--signature ion-label {\n  padding-left: 15px;\n  vertical-align: middle;\n}\n.form .form__group .form__group__field .form__group__field__input--draw .draw-actions, .form .form__group .form__group__field .form__group__field__input--signature .draw-actions {\n  padding-right: 15px;\n}\n.form .form__group .form__group__field .form__group__field__input--draw canvas, .form .form__group .form__group__field .form__group__field__input--signature canvas {\n  margin-top: 10px;\n  border: 1px solid #dedede;\n  width: 100vw;\n}\n.form .form__navigation {\n  display: -webkit-box;\n  display: flex;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n}\n.form .form__navigation .form__navigation__group {\n  text-align: Center;\n  -webkit-box-flex: 1;\n          flex: 1;\n  min-width: 60px;\n  padding-top: 20px;\n}\n.form .form__navigation .form__navigation__group span {\n  width: 40px;\n  height: 40px;\n  border-radius: 22px;\n  background-color: transparent;\n  border: 1px solid #eb1c24;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 40px;\n  color: #eb1c24;\n  font-size: 12px;\n}\n.form .form__navigation .form__navigation__group p {\n  font-size: 12px;\n  text-align: center;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 5px;\n}\n.form .form__navigation .form__navigation__group.form__navigation__group--active span {\n  background-color: #eb1c24;\n  color: white;\n}\n.form .form__navigation .form__navigation__group.form__navigation__group--active p {\n  font-weight: bold;\n}\n.form-footer {\n  background-color: white;\n}\n.form-footer:before {\n  display: none;\n}\n.form-footer .form-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxodGtpbmdsb2dnaW5nXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxmb3JtXFxmb3JtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybS9mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0ZaO0FER1k7RUFDSSxZQUFBO0FDRGhCO0FES1k7RUFDSSxnQkFBQTtBQ0hoQjtBRE9nQjtFQUNJLG1CQUFBO0FDTHBCO0FEU1k7RUFDSSxZQUFBO0FDUGhCO0FEWWdCO0VBQ0ksa0JBQUE7RUFDSSxzQkFBQTtBQ1Z4QjtBRGNnQjtFQUNJLG1CQUFBO0FDWnBCO0FEZWdCO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNicEI7QUR3Qkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUN0QlI7QUR1QlE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGVBQUE7RUFDSixpQkFBQTtBQ3JCUjtBRHNCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNwQmhCO0FEd0JZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdEJoQjtBRDRCZ0I7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUMxQnBCO0FENkJnQjtFQUNJLGlCQUFBO0FDM0JwQjtBRDZDQTtFQUNJLHVCQUFBO0FDMUNKO0FENENJO0VBQ0ksYUFBQTtBQzFDUjtBRCtDWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDN0NoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcclxuICAgIFxyXG4gICAgLmZvcm1fX2dyb3Vwe1xyXG4gICAgICAgIC5mb3JtX19ncm91cF9fZmllbGR7XHJcbiAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICYuZm9ybV9fZ3JvdXBfX2ZpZWxkLS1hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mb3JtX19ncm91cF9fZmllbGRfX2lucHV0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZm9ybV9fZ3JvdXBfX2ZpZWxkX19pbnB1dC0tZmlsZV91cGxvYWR7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRyYXctYWN0aW9uc3tcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmZvcm1fX2dyb3VwX19maWVsZF9faW5wdXQtLWRyYXcsIC5mb3JtX19ncm91cF9fZmllbGRfX2lucHV0LS1zaWduYXR1cmV7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZHJhdy1hY3Rpb25ze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FudmFze1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5mb3JtX19uYXZpZ2F0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLmZvcm1fX25hdmlnYXRpb25fX2dyb3Vwe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOkNlbnRlcjtcclxuICAgICAgICAgICAgZmxleDoxO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6NjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZWIxYzI0O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4OyAgICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWIxYzI0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuZm9ybV9fbmF2aWdhdGlvbl9fZ3JvdXAtLWFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViMWMyNDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybS1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgXHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAuZm9ybS1mb290ZXJfX2J1dHRvbntcclxuXHJcbiAgICAgICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iLCIuZm9ybSAuZm9ybV9fZ3JvdXAgLmZvcm1fX2dyb3VwX19maWVsZCB7XG4gIGhlaWdodDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZvcm0gLmZvcm1fX2dyb3VwIC5mb3JtX19ncm91cF9fZmllbGQuZm9ybV9fZ3JvdXBfX2ZpZWxkLS1hY3RpdmUge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uZm9ybSAuZm9ybV9fZ3JvdXAgLmZvcm1fX2dyb3VwX19maWVsZCAuZm9ybV9fZ3JvdXBfX2ZpZWxkX19pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZm9ybSAuZm9ybV9fZ3JvdXAgLmZvcm1fX2dyb3VwX19maWVsZCAuZm9ybV9fZ3JvdXBfX2ZpZWxkX19pbnB1dC0tZmlsZV91cGxvYWQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5mb3JtIC5mb3JtX19ncm91cCAuZm9ybV9fZ3JvdXBfX2ZpZWxkIC5kcmF3LWFjdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZm9ybSAuZm9ybV9fZ3JvdXAgLmZvcm1fX2dyb3VwX19maWVsZCAuZm9ybV9fZ3JvdXBfX2ZpZWxkX19pbnB1dC0tZHJhdyBpb24tbGFiZWwsIC5mb3JtIC5mb3JtX19ncm91cCAuZm9ybV9fZ3JvdXBfX2ZpZWxkIC5mb3JtX19ncm91cF9fZmllbGRfX2lucHV0LS1zaWduYXR1cmUgaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmZvcm0gLmZvcm1fX2dyb3VwIC5mb3JtX19ncm91cF9fZmllbGQgLmZvcm1fX2dyb3VwX19maWVsZF9faW5wdXQtLWRyYXcgLmRyYXctYWN0aW9ucywgLmZvcm0gLmZvcm1fX2dyb3VwIC5mb3JtX19ncm91cF9fZmllbGQgLmZvcm1fX2dyb3VwX19maWVsZF9faW5wdXQtLXNpZ25hdHVyZSAuZHJhdy1hY3Rpb25zIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5mb3JtIC5mb3JtX19ncm91cCAuZm9ybV9fZ3JvdXBfX2ZpZWxkIC5mb3JtX19ncm91cF9fZmllbGRfX2lucHV0LS1kcmF3IGNhbnZhcywgLmZvcm0gLmZvcm1fX2dyb3VwIC5mb3JtX19ncm91cF9fZmllbGQgLmZvcm1fX2dyb3VwX19maWVsZF9faW5wdXQtLXNpZ25hdHVyZSBjYW52YXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICB3aWR0aDogMTAwdnc7XG59XG4uZm9ybSAuZm9ybV9fbmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZm9ybSAuZm9ybV9fbmF2aWdhdGlvbiAuZm9ybV9fbmF2aWdhdGlvbl9fZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBDZW50ZXI7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uZm9ybSAuZm9ybV9fbmF2aWdhdGlvbiAuZm9ybV9fbmF2aWdhdGlvbl9fZ3JvdXAgc3BhbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWIxYzI0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZWIxYzI0O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybSAuZm9ybV9fbmF2aWdhdGlvbiAuZm9ybV9fbmF2aWdhdGlvbl9fZ3JvdXAgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZm9ybSAuZm9ybV9fbmF2aWdhdGlvbiAuZm9ybV9fbmF2aWdhdGlvbl9fZ3JvdXAuZm9ybV9fbmF2aWdhdGlvbl9fZ3JvdXAtLWFjdGl2ZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViMWMyNDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvcm0gLmZvcm1fX25hdmlnYXRpb24gLmZvcm1fX25hdmlnYXRpb25fX2dyb3VwLmZvcm1fX25hdmlnYXRpb25fX2dyb3VwLS1hY3RpdmUgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5mb3JtLWZvb3RlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0tZm9vdGVyIC5mb3JtLWZvb3Rlcl9fYnV0dG9uIGlvbi1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/form/form.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/form/form.page.ts ***!
  \*****************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_form_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/form/form.service */ "./src/app/services/form/form.service.ts");
/* harmony import */ var _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/submission/submission.service */ "./src/app/services/submission/submission.service.ts");
/* harmony import */ var _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/offline/offline.service */ "./src/app/services/offline/offline.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/upload/upload.service */ "./src/app/services/upload/upload.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js");













var FormPage = /** @class */ (function () {
    function FormPage(formService, toastController, modalController, router, authenticationService, alertCtrl, route, iab, loadingController, uploadService, submissionService, location, offlineSerivce) {
        var _this = this;
        this.formService = formService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.iab = iab;
        this.loadingController = loadingController;
        this.uploadService = uploadService;
        this.submissionService = submissionService;
        this.location = location;
        this.offlineSerivce = offlineSerivce;
        this.loading = true;
        var formId = this.route.snapshot.params['id'];
        this.form = { id: formId };
        this.fieldGroups = [];
        this.groupedFields = {};
        this.getForm();
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
        });
        this.submission = {};
    }
    FormPage.prototype.ngOnInit = function () {
    };
    FormPage.prototype.submit = function () {
        var _this = this;
        this.submission.loading = true;
        for (var _i = 0, _a = this.fieldGroups; _i < _a.length; _i++) {
            var fieldGroup = _a[_i];
            for (var _b = 0, _c = this.groupedFields[fieldGroup.id]; _b < _c.length; _b++) {
                var field = _c[_b];
                if (field.field_type === "question_group") {
                    this.submission[field.id] = JSON.stringify(field);
                }
                else if (field.field_type === "draw") {
                    this.submission[field.id] = field.signaturePad.toDataURL();
                }
                else if (field.field_type === "signature") {
                    this.submission[field.id] = field.signaturePad.toDataURL();
                }
            }
        }
        this.submissionService.createSubmission(this.submission, this.form.id).then(function () {
            _this.submission.loading = false;
            _this.alertCtrl.create({
                header: "Success",
                message: "Your submission has been saved successfully",
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ]
            }).then(function (el) {
                el.present();
            });
            _this.location.back();
        }).catch(function () {
            _this.offlineSerivce.saveSubmission({ fields: _this.submission, form_id: _this.form.id });
            _this.submission.loading = false;
            _this.alertCtrl.create({
                header: "You're Offline",
                message: "Your submission has been saved and will be uploaded as soon as an internet connection is available.",
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ]
            }).then(function (el) {
                el.present();
            });
            _this.location.back();
        });
    };
    FormPage.prototype.getForm = function () {
        var _this = this;
        this.formService.getForm(this.form.id).then(function (data) {
            _this.setFormData(data);
            _this.loading = false;
        }).catch(function () {
            _this.offlineSerivce.getForms().then(function (data) {
                if (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var form = data_1[_i];
                        if (parseInt(form.id) === parseInt(_this.form.id)) {
                            _this.setFormData(form);
                        }
                    }
                }
            });
            _this.loading = false;
        });
    };
    FormPage.prototype.setFormData = function (data) {
        this.form = data;
        this.fieldGroups = [];
        this.groupedFields = {};
        var unGrouped = 1;
        for (var _i = 0, _a = this.form.fields; _i < _a.length; _i++) {
            var field = _a[_i];
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
                for (var _b = 0, _c = this.form.field_groups; _b < _c.length; _b++) {
                    var fieldGroup = _c[_b];
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
    FormPage.prototype.changeActiveGroup = function (fieldGroupId) {
        this.activeGroup = fieldGroupId;
        this.activeGroupIndex = this.fieldGroups.findIndex(function (item) { return item.id === fieldGroupId; });
        var fields = this.groupedFields[this.activeGroup];
        var _loop_1 = function (field) {
            if ((field.field_type === "signature" || field.field_type === "draw") && !field.signaturePad) {
                setTimeout(function () {
                    var signaturePadElement = document.querySelector("#canvas" + field.id);
                    field.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_11__["default"](signaturePadElement);
                });
            }
        };
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            _loop_1(field);
        }
    };
    FormPage.prototype.getWidth = function () {
        return window.innerWidth;
    };
    FormPage.prototype.drawUndo = function (field) {
        if (!field.signaturePad) {
            return;
        }
        var data = field.signaturePad.toData();
        if (data) {
            data.pop(); // remove the last dot or line
            field.signaturePad.fromData(data);
        }
    };
    FormPage.prototype.drawClear = function (field) {
        if (!field.signaturePad) {
            return;
        }
        field.signaturePad.clear();
    };
    FormPage.prototype.openFile = function (file) {
        this.iab.create(file, '_system');
    };
    FormPage.prototype.fileChangeListener = function (ev, field) {
        var _this = this;
        var files = ev.srcElement.files;
        field.file_name = files[0].name;
        var formData = new FormData();
        var mediaFile = files[0];
        formData.append('media_file', mediaFile, mediaFile.name);
        var loading;
        this.loadingController.create({
            message: 'Your file is being uploaded. Please wait...',
            duration: 20000
        }).then(function (el) {
            loading = el;
            el.present();
        });
        this.uploadService.uploadFile(formData).then(function (data) {
            _this.submission[field.id] = data.file;
            loading.dismiss();
        }).catch(function (data) {
            loading.dismiss();
        });
    };
    FormPage.ctorParameters = function () { return [
        { type: _services_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"] },
        { type: _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_5__["SubmissionService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__["OfflineService"] }
    ]; };
    FormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/form/form.page.html"),
            styles: [__webpack_require__(/*! ./form.page.scss */ "./src/app/pages/form/form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"], _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"],
            _services_submission_submission_service__WEBPACK_IMPORTED_MODULE_5__["SubmissionService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _services_offline_offline_service__WEBPACK_IMPORTED_MODULE_6__["OfflineService"]])
    ], FormPage);
    return FormPage;
}());



/***/ }),

/***/ "./src/app/services/upload/upload.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/upload/upload.service.ts ***!
  \***************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var UploadService = /** @class */ (function () {
    function UploadService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    UploadService.prototype.uploadFile = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("ht_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/upload', form).subscribe(function (res) {
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
    UploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], UploadService);
    return UploadService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-form-form-module.js.map