(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4cNi":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("ri4K"),u=e("9B/o"),i=e("ZZ/e"),r=e("gRf5"),g=function(){function n(n,l,e,t,o){this.authService=n,this.iab=l,this.transfer=e,this.loadingController=t,this.alertController=o,this.user={email:"",password:"",error:"",loading:!1}}return n.prototype.ngOnInit=function(){},n.prototype.signup=function(){var n=this;this.user.loading=!0,this.user.error="",this.user.email||(this.user.loading=!1,this.user.error="Required fields not filled in. "),this.authService.register(this.user).then((function(){n.user.loading=!1,n.authService.retreiveUserData().then((function(){})).catch((function(){}))})).catch((function(l){if(n.user.loading=!1,l&&l.error)for(var e in l.error.error.errors)n.user.error=n.user.error+l.error.error.errors[e]+" ";else n.user.error=l.message}))},n}(),a=function(){return function(){}}(),d=e("pMnS"),s=e("oBZk"),c=e("Ip0R"),p=e("gIcY"),f=t["\u0275crt"]({encapsulation:0,styles:[[".invalidItem[_ngcontent-%COMP%]{--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight));--border-color:var(--ion-item-border-color,var(--ion-border-color,red))}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{display:inline-block;width:33.33%;text-align:center;vertical-align:top;padding:0 15px;opacity:.5;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step.step--active[_ngcontent-%COMP%]{opacity:1}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step__number[_ngcontent-%COMP%]{width:30px;height:30px;background-color:#40c873;border-radius:15px;color:#fff;font-size:10px;text-align:center;line-height:30px;margin:0 auto}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step__name[_ngcontent-%COMP%]{font-size:12px}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;text-align:center;margin:20px 0}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   .signup__user-type__card[_ngcontent-%COMP%]{text-align:center;padding:0;border:2px solid #40c873;background-color:#fff;-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   .signup__user-type__card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{color:#40c873}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   .signup__user-type__card.signup__user-type__card--active[_ngcontent-%COMP%]{background-color:#40c873}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   .signup__user-type__card.signup__user-type__card--active[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{color:#fff}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:5px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:10px;border-radius:20px;background-color:#40c873;color:#fff;margin-bottom:10px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-bottom:10px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:15px;vertical-align:middle;margin-bottom:15px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__error[_ngcontent-%COMP%]{color:red;font-size:12px;line-height:16px;text-align:Center}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__login[_ngcontent-%COMP%]{margin-top:40px;text-align:Center}.signup[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{position:relative}.signup[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{white-space:normal;padding-left:15px;padding-right:15px}.signup-footer[_ngcontent-%COMP%]{background-color:#fff}.signup-footer[_ngcontent-%COMP%]:before{display:none}.signup-footer[_ngcontent-%COMP%]   .signup-footer__button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;margin-left:5px}"]],data:{}});function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p",[["class","signup__form__error"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.user.error)}))}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["name","arrow-forward"]],null,null,null,s.O,s.k)),t["\u0275did"](1,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"arrow-forward")}),null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-spinner",[],null,null,null,s.bb,s.x)),t["\u0275did"](1,49152,null,0,i.sb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],null,null)}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,s.N,s.j)),t["\u0275did"](1,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.hb,s.D)),t["\u0275did"](3,49152,null,0,i.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.I,s.e)),t["\u0275did"](5,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["defaultHref","/start"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,8).onClick(e)&&o),o}),s.G,s.c)),t["\u0275did"](7,49152,null,0,i.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](8,16384,null,0,i.h,[[2,i.ib],i.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,s.gb,s.C)),t["\u0275did"](10,49152,null,0,i.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Sign Up"])),(n()(),t["\u0275eld"](12,0,null,null,44,"ion-content",[["class","signup"]],null,null,null,s.K,s.g)),t["\u0275did"](13,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](14,0,null,0,42,"ion-list",[["class","signup__form"]],null,null,null,s.T,s.o)),t["\u0275did"](15,49152,null,0,i.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](16,0,null,0,14,"ion-item",[],null,null,null,s.Q,s.m)),t["\u0275prd"](512,null,c.r,c.s,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](18,278528,null,0,c.h,[c.r],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](19,{invalidItem:0}),t["\u0275did"](20,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](21,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.R,s.n)),t["\u0275did"](22,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{position:[0,"position"]},null),(n()(),t["\u0275ted"](-1,0,["Email *"])),(n()(),t["\u0275eld"](24,0,null,0,6,"ion-input",[["clearInput",""],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,25)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,25)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.user.email=e)&&o),o}),s.P,s.l)),t["\u0275did"](25,16384,null,0,i.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,p.c,(function(n){return[n]}),[i.Qb]),t["\u0275did"](27,671744,null,0,p.h,[[8,null],[8,null],[8,null],[6,p.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.d,null,[p.h]),t["\u0275did"](29,16384,null,0,p.e,[[4,p.d]],null,null),t["\u0275did"](30,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(n()(),t["\u0275eld"](31,0,null,0,11,"ion-item",[],null,null,null,s.Q,s.m)),t["\u0275did"](32,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](33,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.R,s.n)),t["\u0275did"](34,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{position:[0,"position"]},null),(n()(),t["\u0275ted"](-1,0,["Password"])),(n()(),t["\u0275eld"](36,0,null,0,6,"ion-input",[["clearInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,37)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,37)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.user.password=e)&&o),o}),s.P,s.l)),t["\u0275did"](37,16384,null,0,i.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,p.c,(function(n){return[n]}),[i.Qb]),t["\u0275did"](39,671744,null,0,p.h,[[8,null],[8,null],[8,null],[6,p.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.d,null,[p.h]),t["\u0275did"](41,16384,null,0,p.e,[[4,p.d]],null,null),t["\u0275did"](42,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(n()(),t["\u0275eld"](43,0,null,0,11,"ion-item",[],null,null,null,s.Q,s.m)),t["\u0275did"](44,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](45,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.R,s.n)),t["\u0275did"](46,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{position:[0,"position"]},null),(n()(),t["\u0275ted"](-1,0,["Confirm Password"])),(n()(),t["\u0275eld"](48,0,null,0,6,"ion-input",[["clearInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,49)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,49)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.user.confirm_password=e)&&o),o}),s.P,s.l)),t["\u0275did"](49,16384,null,0,i.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,p.c,(function(n){return[n]}),[i.Qb]),t["\u0275did"](51,671744,null,0,p.h,[[8,null],[8,null],[8,null],[6,p.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.d,null,[p.h]),t["\u0275did"](53,16384,null,0,p.e,[[4,p.d]],null,null),t["\u0275did"](54,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](56,16384,null,0,c.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](57,0,null,null,8,"ion-footer",[["class","signup-footer"]],null,null,null,s.M,s.i)),t["\u0275did"](58,49152,null,0,i.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](59,0,null,0,6,"ion-button",[["class","signup-footer__button"],["color","primary"],["expand","full"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.signup()&&t),t}),s.H,s.d)),t["\u0275did"](60,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),t["\u0275ted"](-1,0,[" Get Started\xa0\xa0 "])),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](63,16384,null,0,c.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](65,16384,null,0,c.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,7,0,"/start"),n(l,8,0,"/start");var t=n(l,19,0,!e.user.email&&e.user.error);n(l,18,0,t),n(l,22,0,"floating"),n(l,27,0,e.user.email),n(l,30,0,"","email"),n(l,34,0,"floating"),n(l,39,0,e.user.password),n(l,42,0,"","password"),n(l,46,0,"floating"),n(l,51,0,e.user.confirm_password),n(l,54,0,"","password"),n(l,56,0,e.user.error),n(l,60,0,"primary",e.user.loading,"full"),n(l,63,0,!e.user.loading),n(l,65,0,e.user.loading)}),(function(n,l){n(l,24,0,t["\u0275nov"](l,29).ngClassUntouched,t["\u0275nov"](l,29).ngClassTouched,t["\u0275nov"](l,29).ngClassPristine,t["\u0275nov"](l,29).ngClassDirty,t["\u0275nov"](l,29).ngClassValid,t["\u0275nov"](l,29).ngClassInvalid,t["\u0275nov"](l,29).ngClassPending),n(l,36,0,t["\u0275nov"](l,41).ngClassUntouched,t["\u0275nov"](l,41).ngClassTouched,t["\u0275nov"](l,41).ngClassPristine,t["\u0275nov"](l,41).ngClassDirty,t["\u0275nov"](l,41).ngClassValid,t["\u0275nov"](l,41).ngClassInvalid,t["\u0275nov"](l,41).ngClassPending),n(l,48,0,t["\u0275nov"](l,53).ngClassUntouched,t["\u0275nov"](l,53).ngClassTouched,t["\u0275nov"](l,53).ngClassPristine,t["\u0275nov"](l,53).ngClassDirty,t["\u0275nov"](l,53).ngClassValid,t["\u0275nov"](l,53).ngClassInvalid,t["\u0275nov"](l,53).ngClassPending)}))}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-signup",[],null,null,null,m,f)),t["\u0275did"](1,114688,null,0,g,[o.a,u.a,r.a,i.Gb,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=t["\u0275ccf"]("app-signup",g,v,{},{},[]),P=e("ZYCi");e.d(l,"SignupPageModuleNgFactory",(function(){return b}));var b=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,c.l,c.k,[t.LOCALE_ID,[2,c.w]]),t["\u0275mpd"](4608,p.j,p.j,[]),t["\u0275mpd"](4608,i.b,i.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Hb,i.Hb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Mb,i.Mb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,c.b,c.b,[]),t["\u0275mpd"](1073742336,p.i,p.i,[]),t["\u0275mpd"](1073742336,p.b,p.b,[]),t["\u0275mpd"](1073742336,i.Eb,i.Eb,[]),t["\u0275mpd"](1073742336,P.p,P.p,[[2,P.u],[2,P.m]]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,P.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);