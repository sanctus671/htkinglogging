(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"DK3/":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},IwxM:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("AytR"),i=e("CcnG"),o=e("t/Na"),u=e("iw74"),c=function(){function n(n,t){this.http=n,this.storage=t}return n.prototype.getDocuments=function(n,t){var e=this;return new Promise((function(n,t){e.storage.get("ht_token").then((function(i){i?e.http.get(r.a.apiUrl+"/documents?token="+i+"&search=&limit=999&page=1&order_by=name&order=ASC").subscribe((function(t){n(t)}),(function(n){t(n)})):t()}))}))},n.prototype.getDocumentGroups=function(){var n=this;return new Promise((function(t,e){n.storage.get("ht_token").then((function(i){i?n.http.get(r.a.apiUrl+"/documentgroups?token="+i).subscribe((function(n){t(n)}),(function(n){e(n)})):e()}))}))},n.prototype.getDocument=function(n,t){var e=this;return new Promise((function(i,o){e.storage.get("ht_token").then((function(u){u?e.http.get(r.a.apiUrl+"/documents/"+n+"?token="+u+"&offline=1&last_synced="+t).subscribe((function(n){i(n)}),(function(n){o(n)})):o()}))}))},n.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new n(i["\u0275\u0275inject"](o.c),i["\u0275\u0275inject"](u.b))},token:n,providedIn:"root"}),n}()},Jky2:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return a}));var r=e("mrSG"),i=function(n,t){return null!==t.closest(n)},o=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},u=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,a=function(n,t,e){return Object(r.b)(void 0,void 0,void 0,(function(){var i;return Object(r.e)(this,(function(r){return null!=n&&"#"!==n[0]&&!c.test(n)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(n,e)]):[2,!1]}))}))}},NTBD:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return r}));var r=function(n,t,e){var r=new MutationObserver((function(n){e(i(n,t))}));return r.observe(n,{childList:!0,subtree:!0}),r},i=function(n,t){var e;return n.forEach((function(n){for(var r=0;r<n.addedNodes.length;r++)e=o(n.addedNodes[r],t)||e})),e},o=function(n,t){if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find((function(n){return!0===n.checked}))}},YNVt:function(n,t,e){"use strict";e.d(t,"a",(function(){return y})),e.d(t,"b",(function(){return k})),e.d(t,"c",(function(){return g})),e.d(t,"d",(function(){return j})),e.d(t,"e",(function(){return u}));var r=e("mrSG"),i=e("Twl7"),o=e("ocqh"),u=function(n){return new Promise((function(t,e){Object(i.m)((function(){c(n),a(n).then((function(e){e.animation&&e.animation.destroy(),s(n),t(e)}),(function(t){s(n),e(t)}))}))}))},c=function(n){var t=n.enteringEl,e=n.leavingEl;E(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),j(t,!1),e&&j(e,!1)},a=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(e){switch(e.label){case 0:return[4,f(n)];case 1:return[2,(t=e.sent())?l(t,n):d(n)]}}))}))},s=function(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},f=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(r){switch(r.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,e.e(107).then(e.bind(null,"xxD1"))]:[2,void 0];case 1:return t=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(108).then(e.bind(null,"v1ax"))];case 3:t=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,t]}}))}))},l=function(n,t){return Object(r.b)(void 0,void 0,void 0,(function(){var i,o;return Object(r.e)(this,(function(r){switch(r.label){case 0:return[4,h(t,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,e.e(7).then(e.bind(null,"5QBn"))];case 3:return[4,r.sent().create(n,t.baseEl,t)];case 4:return i=r.sent(),[3,6];case 5:return r.sent(),i=n(t.baseEl,t),[3,6];case 6:return b(t.enteringEl,t.leavingEl),[4,p(i,t)];case 7:return o=r.sent(),t.progressCallback&&t.progressCallback(void 0),o&&m(t.enteringEl,t.leavingEl),[2,{hasCompleted:o,animation:i}]}}))}))},d=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t,e;return Object(r.e)(this,(function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,h(n,!1)];case 1:return r.sent(),b(t,e),m(t,e),[2,{hasCompleted:!0}]}}))}))},h=function(n,t){return Object(r.b)(void 0,void 0,void 0,(function(){var e;return Object(r.e)(this,(function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,v(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}}))}))},v=function(n,t){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.e)(this,(function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},p=function(n,t){var e=t.progressCallback,r=new Promise((function(t){n.onFinish((function(e){"number"==typeof e?t(1===e):void 0!==n.hasCompleted&&t(n.hasCompleted)}))}));return e?(n.progressStart(!0),e(n)):n.play(),r},b=function(n,t){g(t,o.c),g(n,o.a)},m=function(n,t){g(n,o.b),g(t,o.d)},g=function(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},w=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},j=function(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},E=function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}},c7H9:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("AytR"),i=e("CcnG"),o=e("t/Na"),u=e("iw74"),c=function(){function n(n,t){this.http=n,this.storage=t}return n.prototype.getProfile=function(n){var t=this;return new Promise((function(e,i){t.storage.get("ht_token").then((function(o){o?t.http.get(r.a.apiUrl+"/profiles/"+n+"?token="+o).subscribe((function(n){e(n)}),(function(n){i(n)})):i()}))}))},n.prototype.updateProfile=function(n){var t=this;return new Promise((function(e,i){t.storage.get("ht_token").then((function(o){o?t.http.put(r.a.apiUrl+"/profiles/"+n.user_id+"?token="+o,n).subscribe((function(n){e(n)}),(function(n){i(n)})):i()}))}))},n.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new n(i["\u0275\u0275inject"](o.c),i["\u0275\u0275inject"](u.b))},token:n,providedIn:"root"}),n}()},"fLD/":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("AytR"),i=e("CcnG"),o=e("t/Na"),u=e("iw74"),c=function(){function n(n,t){this.http=n,this.storage=t}return n.prototype.getForms=function(n,t){var e=this;return new Promise((function(n,t){e.storage.get("ht_token").then((function(i){i?e.http.get(r.a.apiUrl+"/forms?token="+i+"&search=&limit=999&page=1&order_by=name&order=ASC&offline=1").subscribe((function(t){n(t)}),(function(n){t(n)})):t()}))}))},n.prototype.getFormGroups=function(){var n=this;return new Promise((function(t,e){n.storage.get("ht_token").then((function(i){i?n.http.get(r.a.apiUrl+"/formgroups?token="+i).subscribe((function(n){t(n)}),(function(n){e(n)})):e()}))}))},n.prototype.getForm=function(n){var t=this;return new Promise((function(e,i){t.storage.get("ht_token").then((function(o){o?t.http.get(r.a.apiUrl+"/forms/"+n+"?token="+o+"&offline=1").subscribe((function(n){e(n)}),(function(n){i(n)})):i()}))}))},n.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new n(i["\u0275\u0275inject"](o.c),i["\u0275\u0275inject"](u.b))},token:n,providedIn:"root"}),n}()},"lXZ+":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){function n(){}return n.prototype.transform=function(n,t){return t?n.filter((function(n){return-1!==n.name.toLowerCase().indexOf(t.toLowerCase())})):n},n}()},uYVq:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var r=function(){return function(n,t){this.x=n,this.y=t}}(),i=function(n,t,e,r,i){var c=u(n.y,t.y,e.y,r.y,i);return o(n.x,t.x,e.x,r.x,c[0])},o=function(n,t,e,r,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-n*Math.pow(i-1,3)},u=function(n,t,e,r,i){return c((r-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter((function(n){return n>=0&&n<=1}))},c=function(n,t,e,r){if(0===n)return function(n,t,e){var r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]}(t,e,r);var i=(3*(e/=n)-(t/=n)*t)/3,o=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var u=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===u)return[Math.pow(o/2,.5)-t/3];if(u>0)return[Math.pow(-o/2+Math.sqrt(u),1/3)-Math.pow(o/2+Math.sqrt(u),1/3)-t/3];var c=Math.sqrt(Math.pow(-i/3,3)),a=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(c,1/3);return[s*Math.cos(a/3)-t/3,s*Math.cos((a+2*Math.PI)/3)-t/3,s*Math.cos((a+4*Math.PI)/3)-t/3]}},"v7+D":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var r=e("mrSG"),i=function(n,t,e,i,o){return Object(r.b)(void 0,void 0,void 0,(function(){var u;return Object(r.e)(this,(function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach((function(n){return u.classList.add(n)})),o&&Object.assign(u,o),t.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}}))}))},o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},zwjO:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,c.forEach((function(n){for(var e=t.querySelectorAll(n),r=e.length-1;r>=0;r--){var u=e[r];u.parentNode?u.parentNode.removeChild(u):t.removeChild(u);for(var c=o(u),a=0;a<c.length;a++)i(c[a])}}));for(var r=o(t),u=0;u<r.length;u++)i(r[u]);var a=document.createElement("div");a.appendChild(t);var s=a.querySelector("div");return null!==s?s.innerHTML:a.innerHTML}catch(f){return console.error(f),""}},i=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),r=e.name;if(u.includes(r.toLowerCase())){var c=e.value;null!=c&&c.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var a=o(n);for(t=0;t<a.length;t++)i(a[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},u=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]}}]);