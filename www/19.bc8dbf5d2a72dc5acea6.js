(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{y5vB:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=function(){return function(){}}(),r=l("pMnS"),i=l("oBZk"),u=l("ZZ/e"),a=l("ZYCi"),s=l("Ip0R"),d=l("lXZ+"),c=l("gIcY"),f=l("fLD/"),m=l("ri4K"),p=l("KOTj"),g=l("QaJk"),h=l("wd/R"),_=function(){function n(n,e,l,t,o,r,i,u,a){var s=this;this.formService=n,this.toastController=e,this.modalController=l,this.router=t,this.authenticationService=o,this.alertCtrl=r,this.ngZone=i,this.offlineService=u,this.submissionService=a,this.loading=!0,this.search="",this.filters={orderby:"created_at",order:"asc",city:"",suburb:""},this.forms=[],this.formGroups=[],this.formattedForms={},this.user={},this.authenticationService.getUserData().subscribe((function(n){s.ngZone.run((function(){s.user=n}))})),this.offlineService.monitorUploads().subscribe((function(n){n&&n.uploaded&&s.getForms()}))}return n.prototype.ionViewDidEnter=function(){this.getForms()},n.prototype.getForms=function(){var n=this;this.loading=!0,this.offlineService.getFormGroups().then((function(e){e?n.setFormGroupData(e):n.getOnlineForms()})).catch((function(){n.getOnlineForms()}))},n.prototype.getOnlineForms=function(){var n=this;this.formService.getFormGroups().then((function(e){n.offlineService.saveFormGroups(e),n.setFormGroupData(e)})).catch((function(){n.offlineService.getFormGroups().then((function(e){e&&n.setFormGroupData(e)}))}))},n.prototype.setFormGroupData=function(n){var e=this;this.formGroups=n,this.formattedForms={},this.formGroups.push({name:"Other"});for(var l=0,t=this.formGroups;l<t.length;l++)this.formattedForms[t[l].name]=[];this.offlineService.getForms().then((function(n){n?(e.setFormData(n),e.loading=!1):e.getOnlineFormGroupData()})).catch((function(){e.getOnlineFormGroupData()}))},n.prototype.getOnlineFormGroupData=function(){var n=this;this.formService.getForms(this.search,this.filters).then((function(e){n.offlineService.saveForms(e.data),n.formattedForms={};for(var l=0,t=n.formGroups;l<t.length;l++)n.formattedForms[t[l].name]=[];n.setFormData(e.data),n.loading=!1})).catch((function(){n.loading=!1}))},n.prototype.setFormData=function(n){this.forms=n;for(var e=0,l=this.forms;e<l.length;e++){var t=l[e];t.form_group?this.formattedForms[t.form_group.name].push(t):this.formattedForms.Other.push(t)}this.setFormCompletionDates()},n.prototype.setFormCompletionDates=function(){for(var n=this,e=function(e){if(e.completion_date){var t=h(e.completion_date),o=h(),r=h().add(7,"days"),i=7;if(e.completion_date_duration)if("daily"===e.completion_date_duration)t=h(),r=h().add(1,"days"),i=1;else if("weekly"===e.completion_date_duration){var u=t.day();(t=h()).set("day",u)}else if("fornightly"===e.completion_date_duration)u=t.day(),(t=h()).set("day",u).add(7,"days");else if("monthly"===e.completion_date_duration){var a=t.date();(t=h()).set("date",a)}else if("quarterly"===e.completion_date_duration)a=t.date(),(t=h()).set("date",a),t.set("day",a).add(3,"months");else if("halfyearly"===e.completion_date_duration)a=t.date(),(t=h()).set("date",a),t.set("day",a).add(6,"months");else if("yearly"===e.completion_date_duration){a=t.date();var s=t.month();(t=h()).set("date",a),t.set("month",s)}l.offlineService.getLastSubmitted(e.id).then((function(l){var u=h().subtract("1","years");l&&(u=h(l));var a=h(l).subtract(i,"days");u.isAfter(a)&&(e.submitted=!0,e.submitted_at=l),o.isAfter(t)&&!e.submitted?(e.overdue=!0,n.formattedForms.OVERDUE||(n.formGroups.unshift({id:0,name:"OVERDUE"}),n.formattedForms.OVERDUE=[]),n.formattedForms.OVERDUE.push(e)):r.isAfter(t)&&!e.submitted&&(e.due=!0,n.formattedForms["DUE SOON"]||(n.formGroups.unshift({id:0,name:"DUE SOON"}),n.formattedForms["DUE SOON"]=[]),n.formattedForms["DUE SOON"].push(e))}))}},l=this,t=0,o=this.forms;t<o.length;t++)e(o[t])},n.prototype.getSubmissions=function(){var n=this;return new Promise((function(e,l){var t=[];n.offlineService.getSubmissions().then((function(n){n&&t.concat(n)})),n.submissionService.getSubmissions(n.search).then((function(n){t.concat(n.data),e(t)})).catch((function(){n.offlineService.getOnlineSubmissions().then((function(n){n&&n.data&&t.concat(n.data),e(t)})).catch((function(){e(t)}))}))}))},n.prototype.doSearch=function(){},n.prototype.formatDate=function(n){var e=-(new Date).getTimezoneOffset();return h(n).add(e,"m").fromNow()},n}(),v=t["\u0275crt"]({encapsulation:0,styles:[[".forms.ios[_ngcontent-%COMP%]   .forms__search[_ngcontent-%COMP%]   .forms__search__filter[_ngcontent-%COMP%]{top:12px}.forms[_ngcontent-%COMP%]   .forms__search[_ngcontent-%COMP%]{position:relative;margin-top:10px}.forms[_ngcontent-%COMP%]   .forms__search[_ngcontent-%COMP%]   .forms__search__filter[_ngcontent-%COMP%]{position:absolute;top:7px;right:10px;font-size:10px}.forms[_ngcontent-%COMP%]   .forms__list[_ngcontent-%COMP%]{margin-top:15px}.forms[_ngcontent-%COMP%]   .forms__list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-weight:600}.forms[_ngcontent-%COMP%]   .forms__list[_ngcontent-%COMP%]   .forms__list__form--due[_ngcontent-%COMP%]{--background:#eba31c}.forms[_ngcontent-%COMP%]   .forms__list[_ngcontent-%COMP%]   .forms__list__form--overdue[_ngcontent-%COMP%]{--background:#eb1c24}.forms[_ngcontent-%COMP%]   .forms__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}"]],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","forms__loading"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-spinner",[["color","primary"]],null,null,null,i.bb,i.x)),t["\u0275did"](2,49152,null,0,u.sb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null)],(function(n,e){n(e,2,0,"primary")}),null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,13,"ion-item",[["class","forms__list__form"],["detail",""],["routerDirection","forward"]],null,[[null,"click"]],(function(n,e,l){var o=!0;return"click"===e&&(o=!1!==t["\u0275nov"](n,2).onClick()&&o),"click"===e&&(o=!1!==t["\u0275nov"](n,4).onClick(l)&&o),o}),i.Q,i.m)),t["\u0275did"](1,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{detail:[0,"detail"],routerDirection:[1,"routerDirection"]},null),t["\u0275did"](2,16384,null,0,a.n,[a.m,a.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](3,1),t["\u0275did"](4,737280,null,0,u.Ob,[s.g,u.Ib,t.ElementRef,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),t["\u0275prd"](512,null,s.r,s.s,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](6,278528,null,0,s.h,[s.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](7,{"forms__list__form--overdue":0,"forms__list__form--due":1}),(n()(),t["\u0275eld"](8,0,null,0,5,"ion-label",[],null,null,null,i.R,i.n)),t["\u0275did"](9,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),t["\u0275ted"](11,null,["",""])),(n()(),t["\u0275eld"](12,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Tap to start this form"]))],(function(n,e){n(e,1,0,"","forward");var l=n(e,3,0,"/form/"+e.context.$implicit.id);n(e,2,0,l),n(e,4,0,"forward");var t=n(e,7,0,e.context.$implicit.overdue,e.context.$implicit.due);n(e,6,0,"forms__list__form",t)}),(function(n,e){n(e,11,0,e.context.$implicit.name)}))}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"ion-list",[["class","forms__list"]],null,null,null,i.T,i.o)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,2,"ion-list-header",[],null,null,null,i.S,i.p)),t["\u0275did"](3,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](4,0,[" "," "])),(n()(),t["\u0275and"](16777216,null,0,2,null,b)),t["\u0275did"](6,278528,null,0,s.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](7,2)],(function(n,e){var l=e.component,o=t["\u0275unv"](e,6,0,n(e,7,0,t["\u0275nov"](e.parent.parent.parent,0),l.formattedForms[e.parent.context.$implicit.name],l.search));n(e,6,0,o)}),(function(n,e){n(e,4,0,e.parent.context.$implicit.name)}))}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](2,16384,null,0,s.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,2,0,l.formattedForms[e.context.$implicit.name]&&l.formattedForms[e.context.$implicit.name].length>0)}),null)}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](2,278528,null,0,s.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){n(e,2,0,e.component.formGroups)}),null)}function O(n){return t["\u0275vid"](0,[t["\u0275pid"](0,d.a,[]),(n()(),t["\u0275eld"](1,0,null,null,15,"ion-header",[],null,null,null,i.N,i.j)),t["\u0275did"](2,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,i.hb,i.D)),t["\u0275did"](4,49152,null,0,u.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,2,"ion-title",[],null,null,null,i.gb,i.C)),t["\u0275did"](6,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" Forms "])),(n()(),t["\u0275eld"](8,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,i.I,i.e)),t["\u0275did"](9,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,6,"ion-button",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,e,l){var o=!0;return"click"===e&&(o=!1!==t["\u0275nov"](n,12).onClick()&&o),"click"===e&&(o=!1!==t["\u0275nov"](n,14).onClick(l)&&o),o}),i.H,i.d)),t["\u0275did"](11,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{routerDirection:[0,"routerDirection"]},null),t["\u0275did"](12,16384,null,0,a.n,[a.m,a.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](13,1),t["\u0275did"](14,737280,null,0,u.Ob,[s.g,u.Ib,t.ElementRef,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),t["\u0275eld"](15,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,i.O,i.k)),t["\u0275did"](16,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](17,0,null,null,13,"ion-content",[["class","forms"]],null,null,null,i.K,i.g)),t["\u0275did"](18,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,7,"div",[["class","forms__search"]],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,6,"ion-searchbar",[["color","light"],["placeholder","Find a form..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var o=!0,r=n.component;return"ionBlur"===e&&(o=!1!==t["\u0275nov"](n,22)._handleBlurEvent(l.target)&&o),"ionChange"===e&&(o=!1!==t["\u0275nov"](n,22)._handleInputEvent(l.target)&&o),"ngModelChange"===e&&(o=!1!==(r.search=l)&&o),"ionChange"===e&&(o=!1!==r.doSearch()&&o),o}),i.W,i.s)),t["\u0275did"](21,49152,null,0,u.kb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],placeholder:[1,"placeholder"]},null),t["\u0275did"](22,16384,null,0,u.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,c.c,(function(n){return[n]}),[u.Qb]),t["\u0275did"](24,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,c.d,null,[c.h]),t["\u0275did"](26,16384,null,0,c.e,[[4,c.d]],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](28,16384,null,0,s.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,F)),t["\u0275did"](30,16384,null,0,s.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,4,0,"primary"),n(e,11,0,"forward");var t=n(e,13,0,"/settings");n(e,12,0,t),n(e,14,0,"forward"),n(e,16,0,"settings"),n(e,21,0,"light","Find a form..."),n(e,24,0,l.search),n(e,28,0,l.loading),n(e,30,0,!l.loading)}),(function(n,e){n(e,20,0,t["\u0275nov"](e,26).ngClassUntouched,t["\u0275nov"](e,26).ngClassTouched,t["\u0275nov"](e,26).ngClassPristine,t["\u0275nov"](e,26).ngClassDirty,t["\u0275nov"](e,26).ngClassValid,t["\u0275nov"](e,26).ngClassInvalid,t["\u0275nov"](e,26).ngClassPending)}))}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-forms",[],null,null,null,O,v)),t["\u0275did"](1,49152,null,0,_,[f.a,u.Rb,u.Hb,a.m,m.a,u.a,t.NgZone,p.a,g.a],null,null)],null,null)}var E=t["\u0275ccf"]("app-forms",_,y,{},{},[]),S=l("iTUp");l.d(e,"FormsPageModuleNgFactory",(function(){return M}));var M=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.l,s.k,[t.LOCALE_ID,[2,s.w]]),t["\u0275mpd"](4608,u.b,u.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Mb,u.Mb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,c.j,c.j,[]),t["\u0275mpd"](1073742336,s.b,s.b,[]),t["\u0275mpd"](1073742336,u.Eb,u.Eb,[]),t["\u0275mpd"](1073742336,c.i,c.i,[]),t["\u0275mpd"](1073742336,c.b,c.b,[]),t["\u0275mpd"](1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,a.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);