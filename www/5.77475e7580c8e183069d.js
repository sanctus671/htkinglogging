(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{o9FT:function(n,l,e){"use strict";e.r(l);var i=e("CcnG"),t=function(){return function(){}}(),u=e("pMnS"),o=e("oBZk"),s=e("ZZ/e"),r=e("ZYCi"),d=e("Ip0R"),c=e("gIcY"),a=e("QaJk"),f=e("fLD/"),m=e("ri4K"),g=e("KOTj"),p=e("wd/R"),h=function(){function n(n,l,e,i,t,u,o,s,r){var d=this;this.submissionService=n,this.toastController=l,this.modalController=e,this.router=i,this.authenticationService=t,this.alertCtrl=u,this.ngZone=o,this.formService=s,this.offlineSerivce=r,this.loading=!0,this.search="",this.offlineSubmissions=[],this.filteredOfflineSubmissions=[],this.submissions=[],this.filteredSubmissions=[],this.user={},this.authenticationService.getUserData().subscribe((function(n){d.ngZone.run((function(){d.user=n}))})),this.formGroups=[],this.formService.getFormGroups().then((function(n){d.formGroups=n})).catch((function(){d.offlineSerivce.getFormGroups().then((function(n){n&&(d.formGroups=n)}))})),this.offlineSerivce.monitorUploads().subscribe((function(n){n&&n.uploaded&&d.getSubmissions()}))}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){this.getSubmissions()},n.prototype.updateGroup=function(){if(!this.search||"all"===this.search)return this.filteredSubmissions=this.submissions.slice(),void(this.filteredOfflineSubmissions=this.offlineSubmissions.slice());for(var n=[],l=[],e=0,i=this.submissions;e<i.length;e++){var t=i[e];t.form&&t.form.form_group_id&&t.form.form_group_id===this.search&&n.push(t)}for(var u=0,o=this.offlineSubmissions;u<o.length;u++){var s=o[u];s.form&&s.form.form_group_id&&s.form.form_group_id===this.search&&l.push(s)}this.filteredSubmissions=n,this.filteredOfflineSubmissions=l},n.prototype.getSubmissions=function(){var n=this;this.loading=!0,this.submissionService.getSubmissions(this.search).then((function(l){n.submissions=l.data,n.offlineSerivce.saveOnlineSubmissions(l),n.filteredSubmissions=n.submissions.slice(),n.search&&n.updateGroup(),n.loading=!1})).catch((function(){n.offlineSerivce.getOnlineSubmissions().then((function(l){l&&l.data&&(n.submissions=l.data,n.filteredSubmissions=n.submissions.slice(),n.search&&n.updateGroup())})),n.loading=!1})),this.offlineSerivce.getSubmissions().then((function(l){l&&(n.offlineSubmissions=l,n.filteredOfflineSubmissions=n.offlineSubmissions.slice(),n.search&&n.updateGroup())}))},n.prototype.doSearch=function(){this.getSubmissions()},n.prototype.formatFullDate=function(n){var l=-(new Date).getTimezoneOffset();return p(n).add(l,"m").format("dddd, MMMM Do YYYY, h:mm a")},n.prototype.formatDate=function(n){var l=-(new Date).getTimezoneOffset();return p(n).add(l,"m").fromNow()},n}(),b=i["\u0275crt"]({encapsulation:0,styles:[[".submissions.ios[_ngcontent-%COMP%]   .submissions__search[_ngcontent-%COMP%]   .submissions__search__filter[_ngcontent-%COMP%]{top:12px}.submissions[_ngcontent-%COMP%]   .submissions__search[_ngcontent-%COMP%]{position:relative;margin-top:10px}.submissions[_ngcontent-%COMP%]   .submissions__search[_ngcontent-%COMP%]   .submissions__search__filter[_ngcontent-%COMP%]{position:absolute;top:7px;right:10px;font-size:10px}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]{margin-top:15px}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-weight:600}.submissions[_ngcontent-%COMP%]   .submissions__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}"]],data:{}});function v(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,o.T,o.t)),i["\u0275did"](1,49152,null,0,s.nb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{value:[0,"value"]},null),(n()(),i["\u0275ted"](2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.id)}),(function(n,l){n(l,2,0,l.context.$implicit.name)}))}function C(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"div",[["class","submissions__loading"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"ion-spinner",[["color","primary"]],null,null,null,o.V,o.u)),i["\u0275did"](2,49152,null,0,s.rb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null)],(function(n,l){n(l,2,0,"primary")}),null)}function R(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,12,"ion-item",[["detail",""],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,2).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,4).onClick(e)&&t),t}),o.M,o.l)),i["\u0275did"](1,49152,null,0,s.G,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{detail:[0,"detail"],routerDirection:[1,"routerDirection"]},null),i["\u0275did"](2,16384,null,0,r.n,[r.m,r.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](3,1),i["\u0275did"](4,737280,null,0,s.Nb,[d.g,s.Hb,i.ElementRef,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](5,0,null,0,7,"ion-label",[],null,null,null,o.N,o.m)),i["\u0275did"](6,49152,null,0,s.M,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i["\u0275ted"](8,null,["",""])),(n()(),i["\u0275eld"](9,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i["\u0275ted"](10,null,["Submission #",""])),(n()(),i["\u0275eld"](11,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i["\u0275ted"](12,null,["",""]))],(function(n,l){n(l,1,0,"","forward");var e=n(l,3,0,"/submission/"+l.context.$implicit.id);n(l,2,0,e),n(l,4,0,"forward")}),(function(n,l){var e=l.component;n(l,8,0,l.context.$implicit.form?l.context.$implicit.form.name:"Form Submitted"),n(l,10,0,l.context.$implicit.id),n(l,12,0,e.formatFullDate(l.context.$implicit.created_at))}))}function _(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,6,"ion-list",[["class","submissions__list"]],null,null,null,o.P,o.n)),i["\u0275did"](1,49152,null,0,s.N,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](2,0,null,0,2,"ion-list-header",[],null,null,null,o.O,o.o)),i["\u0275did"](3,49152,null,0,s.O,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Unsynced Submissions "])),(n()(),i["\u0275and"](16777216,null,0,1,null,R)),i["\u0275did"](6,278528,null,0,d.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,6,0,l.component.filteredOfflineSubmissions)}),null)}function D(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"ion-list-header",[],null,null,null,o.O,o.o)),i["\u0275did"](1,49152,null,0,s.O,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Synced Submissions "]))],null,null)}function S(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,12,"ion-item",[["detail",""],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,2).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,4).onClick(e)&&t),t}),o.M,o.l)),i["\u0275did"](1,49152,null,0,s.G,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{detail:[0,"detail"],routerDirection:[1,"routerDirection"]},null),i["\u0275did"](2,16384,null,0,r.n,[r.m,r.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](3,1),i["\u0275did"](4,737280,null,0,s.Nb,[d.g,s.Hb,i.ElementRef,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](5,0,null,0,7,"ion-label",[],null,null,null,o.N,o.m)),i["\u0275did"](6,49152,null,0,s.M,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i["\u0275ted"](8,null,["",""])),(n()(),i["\u0275eld"](9,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i["\u0275ted"](10,null,["Submission #",""])),(n()(),i["\u0275eld"](11,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i["\u0275ted"](12,null,["",""]))],(function(n,l){n(l,1,0,"","forward");var e=n(l,3,0,"/submission/"+l.context.$implicit.id);n(l,2,0,e),n(l,4,0,"forward")}),(function(n,l){var e=l.component;n(l,8,0,l.context.$implicit.form?l.context.$implicit.form.name:"Form Submitted"),n(l,10,0,l.context.$implicit.id),n(l,12,0,e.formatFullDate(l.context.$implicit.created_at))}))}function O(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),i["\u0275and"](16777216,null,null,1,null,_)),i["\u0275did"](2,16384,null,0,d.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](3,0,null,null,5,"ion-list",[["class","submissions__list"]],null,null,null,o.P,o.n)),i["\u0275did"](4,49152,null,0,s.N,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275and"](16777216,null,0,1,null,D)),i["\u0275did"](6,16384,null,0,d.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,S)),i["\u0275did"](8,278528,null,0,d.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.offlineSubmissions.length>0),n(l,6,0,e.offlineSubmissions.length>0),n(l,8,0,e.filteredSubmissions)}),null)}function N(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,15,"ion-header",[],null,null,null,o.J,o.i)),i["\u0275did"](1,49152,null,0,s.A,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](2,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,o.bb,o.A)),i["\u0275did"](3,49152,null,0,s.Bb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null),(n()(),i["\u0275eld"](4,0,null,0,2,"ion-title",[],null,null,null,o.ab,o.z)),i["\u0275did"](5,49152,null,0,s.zb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Submissions "])),(n()(),i["\u0275eld"](7,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,o.F,o.e)),i["\u0275did"](8,49152,null,0,s.k,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](9,0,null,0,6,"ion-button",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,11).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,13).onClick(e)&&t),t}),o.E,o.d)),i["\u0275did"](10,49152,null,0,s.j,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{routerDirection:[0,"routerDirection"]},null),i["\u0275did"](11,16384,null,0,r.n,[r.m,r.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](12,1),i["\u0275did"](13,737280,null,0,s.Nb,[d.g,s.Hb,i.ElementRef,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](14,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,o.K,o.j)),i["\u0275did"](15,49152,null,0,s.B,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](16,0,null,null,23,"ion-content",[["class","submissions"]],null,null,null,o.G,o.f)),i["\u0275did"](17,49152,null,0,s.t,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](18,0,null,0,17,"div",[["class","submissions__filter"]],null,null,null,null,null)),(n()(),i["\u0275eld"](19,0,null,null,16,"ion-item",[],null,null,null,o.M,o.l)),i["\u0275did"](20,49152,null,0,s.G,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](21,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.N,o.m)),i["\u0275did"](22,49152,null,0,s.M,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{position:[0,"position"]},null),(n()(),i["\u0275ted"](-1,0,["Filter by group"])),(n()(),i["\u0275eld"](24,0,null,0,11,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var t=!0,u=n.component;return"ionBlur"===l&&(t=!1!==i["\u0275nov"](n,25)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==i["\u0275nov"](n,25)._handleChangeEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(u.search=e)&&t),"ionChange"===l&&(t=!1!==u.updateGroup()&&t),t}),o.U,o.s)),i["\u0275did"](25,16384,null,0,s.Ob,[i.ElementRef],null,null),i["\u0275prd"](1024,null,c.c,(function(n){return[n]}),[s.Ob]),i["\u0275did"](27,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),i["\u0275prd"](2048,null,c.d,null,[c.h]),i["\u0275did"](29,16384,null,0,c.e,[[4,c.d]],null,null),i["\u0275did"](30,49152,null,0,s.mb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](31,0,null,0,2,"ion-select-option",[["value","all"]],null,null,null,o.T,o.t)),i["\u0275did"](32,49152,null,0,s.nb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{value:[0,"value"]},null),(n()(),i["\u0275ted"](-1,0,["All"])),(n()(),i["\u0275and"](16777216,null,0,1,null,v)),i["\u0275did"](35,278528,null,0,d.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,C)),i["\u0275did"](37,16384,null,0,d.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,O)),i["\u0275did"](39,16384,null,0,d.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,10,0,"forward");var i=n(l,12,0,"/settings");n(l,11,0,i),n(l,13,0,"forward"),n(l,15,0,"settings"),n(l,22,0,"floating"),n(l,27,0,e.search),n(l,32,0,"all"),n(l,35,0,e.formGroups),n(l,37,0,e.loading),n(l,39,0,!e.loading)}),(function(n,l){n(l,24,0,i["\u0275nov"](l,29).ngClassUntouched,i["\u0275nov"](l,29).ngClassTouched,i["\u0275nov"](l,29).ngClassPristine,i["\u0275nov"](l,29).ngClassDirty,i["\u0275nov"](l,29).ngClassValid,i["\u0275nov"](l,29).ngClassInvalid,i["\u0275nov"](l,29).ngClassPending)}))}function E(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"app-submissions",[],null,null,null,N,b)),i["\u0275did"](1,114688,null,0,h,[a.a,s.Qb,s.Gb,r.m,m.a,s.a,i.NgZone,f.a,g.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=i["\u0275ccf"]("app-submissions",h,E,{},{},[]),Z=function(){return function(){}}();e.d(l,"SubmissionsPageModuleNgFactory",(function(){return k}));var k=i["\u0275cmf"](t,[],(function(n){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,M]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,d.l,d.k,[i.LOCALE_ID,[2,d.t]]),i["\u0275mpd"](4608,c.j,c.j,[]),i["\u0275mpd"](4608,s.b,s.b,[i.NgZone,i.ApplicationRef]),i["\u0275mpd"](4608,s.Gb,s.Gb,[s.b,i.ComponentFactoryResolver,i.Injector]),i["\u0275mpd"](4608,s.Lb,s.Lb,[s.b,i.ComponentFactoryResolver,i.Injector]),i["\u0275mpd"](1073742336,d.b,d.b,[]),i["\u0275mpd"](1073742336,c.i,c.i,[]),i["\u0275mpd"](1073742336,c.b,c.b,[]),i["\u0275mpd"](1073742336,s.Db,s.Db,[]),i["\u0275mpd"](1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),i["\u0275mpd"](1073742336,Z,Z,[]),i["\u0275mpd"](1073742336,t,t,[]),i["\u0275mpd"](1024,r.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);