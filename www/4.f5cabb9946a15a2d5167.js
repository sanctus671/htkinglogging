(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{o9FT:function(n,l,e){"use strict";e.r(l);var i=e("CcnG"),t=function(){return function(){}}(),o=e("pMnS"),u=e("oBZk"),s=e("ZZ/e"),r=e("Ip0R"),c=e("ZYCi"),d=e("gIcY"),a=e("QaJk"),f=e("fLD/"),m=e("ri4K"),g=e("KOTj"),b=e("0UgC"),p=e("wd/R"),h=function(){function n(n,l,e,i,t,o,u,s,r,c,d){var a=this;this.submissionService=n,this.toastController=l,this.modalController=e,this.router=i,this.authenticationService=t,this.alertCtrl=o,this.ngZone=u,this.formService=s,this.offlineService=r,this.messageService=c,this.platform=d,this.loading=!0,this.search="",this.offlineSubmissions=[],this.filteredOfflineSubmissions=[],this.submissions=[],this.filteredSubmissions=[],this.publicSubmissions=[],this.filteredPublicSubmissions=[],this.user={},this.authenticationService.getUserData().subscribe((function(n){a.ngZone.run((function(){a.user=n}))})),this.formGroups=[],this.formService.getFormGroups().then((function(n){a.formGroups=n})).catch((function(){a.offlineService.getFormGroups().then((function(n){n&&(a.formGroups=n)}))})),this.offlineService.monitorUploads().subscribe((function(n){n&&n.uploaded&&a.getSubmissions()})),this.messageService.getMessageReceived().subscribe((function(n){a.ngZone.run((function(){n&&(n.unread||0===n.unread)&&(a.unreadMessages=n.unread)}))})),this.messageService.getMessages().then((function(){})).catch((function(n){}))}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){this.getSubmissions(),this.getPublicSubmissions()},n.prototype.updateGroup=function(){if(!this.search||"all"===this.search)return this.filteredSubmissions=this.submissions.slice(),this.filteredOfflineSubmissions=this.offlineSubmissions.slice(),void(this.filteredPublicSubmissions=this.publicSubmissions.slice());for(var n=[],l=[],e=[],i=0,t=this.submissions;i<t.length;i++){var o=t[i];o.form&&o.form.form_group_id&&o.form.form_group_id===this.search&&n.push(o)}for(var u=0,s=this.offlineSubmissions;u<s.length;u++){var r=s[u];r.form&&r.form.form_group_id&&r.form.form_group_id===this.search&&l.push(r)}for(var c=0,d=this.publicSubmissions;c<d.length;c++){var a=d[c];a.form&&a.form.form_group_id&&a.form.form_group_id===this.search&&e.push(a)}this.filteredSubmissions=n,this.filteredOfflineSubmissions=l,this.filteredPublicSubmissions=e},n.prototype.getSubmissions=function(){var n=this;this.loading=!0,this.submissionService.getSubmissions(this.search).then((function(l){n.submissions=l.data,n.setLastSyncedDates(),n.offlineService.saveOnlineSubmissions(l),n.filteredSubmissions=n.submissions.slice(),n.search&&n.updateGroup(),n.loading=!1})).catch((function(){n.offlineService.getOnlineSubmissions().then((function(l){l&&l.data&&(n.submissions=l.data,n.filteredSubmissions=n.submissions.slice(),n.search&&n.updateGroup())})),n.loading=!1})),this.offlineService.getSubmissions().then((function(l){l&&(n.offlineSubmissions=l,n.filteredOfflineSubmissions=n.offlineSubmissions.slice(),n.search&&n.updateGroup())}))},n.prototype.getPublicSubmissions=function(){var n=this;this.submissionService.getPublicSubmissions(this.search,p().format("YYYY-MM-DD")).then((function(l){n.publicSubmissions=l.data,n.offlineService.saveOnlinePublicSubmissions(l),n.filteredPublicSubmissions=n.publicSubmissions.slice(),n.search&&n.updateGroup()})).catch((function(){n.offlineService.getOnlinePublicSubmissions().then((function(l){l&&l.data&&(n.publicSubmissions=l.data,n.filteredPublicSubmissions=n.publicSubmissions.slice(),n.search&&n.updateGroup())})),n.loading=!1})),this.offlineService.getSubmissions().then((function(l){l&&(n.offlineSubmissions=l,n.filteredOfflineSubmissions=n.offlineSubmissions.slice(),n.search&&n.updateGroup())}))},n.prototype.setLastSyncedDates=function(){this.checkFormLastSyncDate(0)},n.prototype.checkFormLastSyncDate=function(n){var l=this,e=this.submissions[n];e&&e.form_id?this.offlineService.getLastSubmitted(e.form_id).then((function(i){n+=1;var t=-(new Date).getTimezoneOffset(),o=p(e.created_at).add(t,"m");i&&p(i).isAfter(o)?l.checkFormLastSyncDate(n):l.offlineService.setLastSubmitted(e.form_id,o.format("YYYY-MM-DD HH:mm:ss")).then((function(){l.checkFormLastSyncDate(n)})).catch((function(){l.checkFormLastSyncDate(n)}))})).catch((function(){l.checkFormLastSyncDate(n+=1)})):this.checkFormLastSyncDate(n+=1)},n.prototype.doSearch=function(){this.getSubmissions()},n.prototype.formatFullDate=function(n){var l=-(new Date).getTimezoneOffset();return p(n).add(l,"m").format("dddd, MMMM Do YYYY, h:mm a")},n.prototype.formatDate=function(n){var l=-(new Date).getTimezoneOffset();return p(n).add(l,"m").fromNow()},n}(),_=i["\u0275crt"]({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]   .notification-icon-button[_ngcontent-%COMP%]{--overflow:visible}ion-toolbar[_ngcontent-%COMP%]   .notification-icon-button[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;background:#f70b0b;border-radius:50%;opacity:.9;top:.1rem;right:.2rem}.submissions.ios[_ngcontent-%COMP%]   .submissions__search[_ngcontent-%COMP%]   .submissions__search__filter[_ngcontent-%COMP%]{top:12px}.submissions[_ngcontent-%COMP%]   .submissions__search[_ngcontent-%COMP%]{position:relative;margin-top:10px}.submissions[_ngcontent-%COMP%]   .submissions__search[_ngcontent-%COMP%]   .submissions__search__filter[_ngcontent-%COMP%]{position:absolute;top:7px;right:10px;font-size:10px}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]{margin-top:15px}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-weight:600}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]   .submissions__list__item[_ngcontent-%COMP%]{--background:#F5F7F7}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]   .submissions__list__item.submissions__list__item--unread[_ngcontent-%COMP%]{--background:#FFFFFF}.submissions[_ngcontent-%COMP%]   .submissions__list[_ngcontent-%COMP%]   .submissions__list__item.submissions__list__item--unread[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}.submissions[_ngcontent-%COMP%]   .submissions__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}"]],data:{}});function v(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","danger"]],null,null,null,u.I,u.d)),i["\u0275did"](1,49152,null,0,s.j,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null),(n()(),i["\u0275ted"](2,0,["",""]))],(function(n,l){n(l,1,0,"danger")}),(function(n,l){n(l,2,0,l.component.unreadMessages)}))}function C(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,u.Z,u.v)),i["\u0275did"](1,49152,null,0,s.ob,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{value:[0,"value"]},null),(n()(),i["\u0275ted"](2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.id)}),(function(n,l){n(l,2,0,l.context.$implicit.name)}))}function R(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"div",[["class","submissions__loading"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"ion-spinner",[["color","primary"]],null,null,null,u.db,u.y)),i["\u0275did"](2,49152,null,0,s.sb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null)],(function(n,l){n(l,2,0,"primary")}),null)}function S(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,15,"ion-item",[["class","submissions__list__item"],["detail",""],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,5).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,7).onClick(e)&&t),t}),u.S,u.n)),i["\u0275prd"](512,null,r.r,r.s,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](2,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](3,{"submissions__list__item--unread":0}),i["\u0275did"](4,49152,null,0,s.H,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{detail:[0,"detail"],routerDirection:[1,"routerDirection"]},null),i["\u0275did"](5,16384,null,0,c.n,[c.m,c.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](6,1),i["\u0275did"](7,737280,null,0,s.Ob,[r.g,s.Ib,i.ElementRef,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](8,0,null,0,7,"ion-label",[],null,null,null,u.T,u.o)),i["\u0275did"](9,49152,null,0,s.N,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](10,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i["\u0275ted"](11,null,["",""])),(n()(),i["\u0275eld"](12,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i["\u0275ted"](13,null,["Submission #",""])),(n()(),i["\u0275eld"](14,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i["\u0275ted"](15,null,["",""]))],(function(n,l){var e=n(l,3,0,!l.context.$implicit.opened);n(l,2,0,"submissions__list__item",e),n(l,4,0,"","forward");var i=n(l,6,0,"/submission/"+l.context.$implicit.id);n(l,5,0,i),n(l,7,0,"forward")}),(function(n,l){var e=l.component;n(l,11,0,l.context.$implicit.form?l.context.$implicit.form.name:"Public Submission"),n(l,13,0,l.context.$implicit.id),n(l,15,0,e.formatFullDate(l.context.$implicit.created_at))}))}function D(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,6,"ion-list",[["class","submissions__list"]],null,null,null,u.V,u.p)),i["\u0275did"](1,49152,null,0,s.O,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](2,0,null,0,2,"ion-list-header",[],null,null,null,u.U,u.q)),i["\u0275did"](3,49152,null,0,s.P,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Public Submissions "])),(n()(),i["\u0275and"](16777216,null,0,1,null,S)),i["\u0275did"](6,278528,null,0,r.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,6,0,l.component.publicSubmissions)}),null)}function O(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,12,"ion-item",[["detail",""],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,2).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,4).onClick(e)&&t),t}),u.S,u.n)),i["\u0275did"](1,49152,null,0,s.H,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{detail:[0,"detail"],routerDirection:[1,"routerDirection"]},null),i["\u0275did"](2,16384,null,0,c.n,[c.m,c.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](3,1),i["\u0275did"](4,737280,null,0,s.Ob,[r.g,s.Ib,i.ElementRef,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](5,0,null,0,7,"ion-label",[],null,null,null,u.T,u.o)),i["\u0275did"](6,49152,null,0,s.N,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i["\u0275ted"](8,null,["",""])),(n()(),i["\u0275eld"](9,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i["\u0275ted"](10,null,["Submission #",""])),(n()(),i["\u0275eld"](11,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i["\u0275ted"](12,null,["",""]))],(function(n,l){n(l,1,0,"","forward");var e=n(l,3,0,"/submission/"+l.context.$implicit.id);n(l,2,0,e),n(l,4,0,"forward")}),(function(n,l){var e=l.component;n(l,8,0,l.context.$implicit.form?l.context.$implicit.form.name:"Form Submitted"),n(l,10,0,l.context.$implicit.id),n(l,12,0,e.formatFullDate(l.context.$implicit.created_at))}))}function k(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,6,"ion-list",[["class","submissions__list"]],null,null,null,u.V,u.p)),i["\u0275did"](1,49152,null,0,s.O,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](2,0,null,0,2,"ion-list-header",[],null,null,null,u.U,u.q)),i["\u0275did"](3,49152,null,0,s.P,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Unsynced Submissions "])),(n()(),i["\u0275and"](16777216,null,0,1,null,O)),i["\u0275did"](6,278528,null,0,r.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,6,0,l.component.filteredOfflineSubmissions)}),null)}function M(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"ion-list-header",[],null,null,null,u.U,u.q)),i["\u0275did"](1,49152,null,0,s.P,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Synced Submissions "]))],null,null)}function P(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),i["\u0275ted"](1,null,["Submitted by ",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.user.name)}))}function E(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,17,"ion-item",[["class","submissions__list__item"],["detail",""],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,5).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,7).onClick(e)&&t),t}),u.S,u.n)),i["\u0275prd"](512,null,r.r,r.s,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](2,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](3,{"submissions__list__item--unread":0}),i["\u0275did"](4,49152,null,0,s.H,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{detail:[0,"detail"],routerDirection:[1,"routerDirection"]},null),i["\u0275did"](5,16384,null,0,c.n,[c.m,c.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](6,1),i["\u0275did"](7,737280,null,0,s.Ob,[r.g,s.Ib,i.ElementRef,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](8,0,null,0,9,"ion-label",[],null,null,null,u.T,u.o)),i["\u0275did"](9,49152,null,0,s.N,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](10,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i["\u0275ted"](11,null,["",""])),(n()(),i["\u0275eld"](12,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i["\u0275ted"](13,null,["Submission #",""])),(n()(),i["\u0275and"](16777216,null,0,1,null,P)),i["\u0275did"](15,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](16,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i["\u0275ted"](17,null,["",""]))],(function(n,l){var e=l.component,i=n(l,3,0,!l.context.$implicit.opened);n(l,2,0,"submissions__list__item",i),n(l,4,0,"","forward");var t=n(l,6,0,"/submission/"+l.context.$implicit.id);n(l,5,0,t),n(l,7,0,"forward"),n(l,15,0,l.context.$implicit.user&&l.context.$implicit.user.id!==e.user.id)}),(function(n,l){var e=l.component;n(l,11,0,l.context.$implicit.form?l.context.$implicit.form.name:"Form Submitted"),n(l,13,0,l.context.$implicit.id),n(l,17,0,e.formatFullDate(l.context.$implicit.created_at))}))}function w(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),i["\u0275and"](16777216,null,null,1,null,D)),i["\u0275did"](2,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,null,1,null,k)),i["\u0275did"](4,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](5,0,null,null,5,"ion-list",[["class","submissions__list"]],null,null,null,u.V,u.p)),i["\u0275did"](6,49152,null,0,s.O,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275and"](16777216,null,0,1,null,M)),i["\u0275did"](8,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,E)),i["\u0275did"](10,278528,null,0,r.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.publicSubmissions.length>0),n(l,4,0,e.offlineSubmissions.length>0),n(l,8,0,e.offlineSubmissions.length>0||e.publicSubmissions.length>0),n(l,10,0,e.filteredSubmissions)}),null)}function y(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,24,"ion-header",[],null,null,null,u.P,u.k)),i["\u0275did"](1,49152,null,0,s.B,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](2,0,null,0,22,"ion-toolbar",[["color","primary"]],null,null,null,u.jb,u.E)),i["\u0275did"](3,49152,null,0,s.Cb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null),(n()(),i["\u0275eld"](4,0,null,0,2,"ion-title",[],null,null,null,u.ib,u.D)),i["\u0275did"](5,49152,null,0,s.Ab,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](-1,0,[" Submissions "])),(n()(),i["\u0275eld"](7,0,null,0,17,"ion-buttons",[["slot","end"]],null,null,null,u.K,u.f)),i["\u0275did"](8,49152,null,0,s.l,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](9,0,null,0,8,"ion-button",[["class","notification-icon-button"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,11).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,13).onClick(e)&&t),t}),u.J,u.e)),i["\u0275did"](10,49152,null,0,s.k,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{routerDirection:[0,"routerDirection"]},null),i["\u0275did"](11,16384,null,0,c.n,[c.m,c.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](12,1),i["\u0275did"](13,737280,null,0,s.Ob,[r.g,s.Ib,i.ElementRef,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,v)),i["\u0275did"](15,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](16,0,null,0,1,"ion-icon",[["name","notifications"],["slot","icon-only"]],null,null,null,u.Q,u.l)),i["\u0275did"](17,49152,null,0,s.C,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](18,0,null,0,6,"ion-button",[["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,20).onClick()&&t),"click"===l&&(t=!1!==i["\u0275nov"](n,22).onClick(e)&&t),t}),u.J,u.e)),i["\u0275did"](19,49152,null,0,s.k,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{routerDirection:[0,"routerDirection"]},null),i["\u0275did"](20,16384,null,0,c.n,[c.m,c.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](21,1),i["\u0275did"](22,737280,null,0,s.Ob,[r.g,s.Ib,i.ElementRef,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i["\u0275eld"](23,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,u.Q,u.l)),i["\u0275did"](24,49152,null,0,s.C,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](25,0,null,null,23,"ion-content",[["class","submissions"]],null,null,null,u.M,u.h)),i["\u0275did"](26,49152,null,0,s.u,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](27,0,null,0,17,"div",[["class","submissions__filter"]],null,null,null,null,null)),(n()(),i["\u0275eld"](28,0,null,null,16,"ion-item",[],null,null,null,u.S,u.n)),i["\u0275did"](29,49152,null,0,s.H,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](30,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,u.T,u.o)),i["\u0275did"](31,49152,null,0,s.N,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{position:[0,"position"]},null),(n()(),i["\u0275ted"](-1,0,["Filter by group"])),(n()(),i["\u0275eld"](33,0,null,0,11,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==i["\u0275nov"](n,34)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==i["\u0275nov"](n,34)._handleChangeEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.search=e)&&t),"ionChange"===l&&(t=!1!==o.updateGroup()&&t),t}),u.ab,u.u)),i["\u0275did"](34,16384,null,0,s.Pb,[i.ElementRef],null,null),i["\u0275prd"](1024,null,d.c,(function(n){return[n]}),[s.Pb]),i["\u0275did"](36,671744,null,0,d.h,[[8,null],[8,null],[8,null],[6,d.c]],{model:[0,"model"]},{update:"ngModelChange"}),i["\u0275prd"](2048,null,d.d,null,[d.h]),i["\u0275did"](38,16384,null,0,d.e,[[4,d.d]],null,null),i["\u0275did"](39,49152,null,0,s.nb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](40,0,null,0,2,"ion-select-option",[["value","all"]],null,null,null,u.Z,u.v)),i["\u0275did"](41,49152,null,0,s.ob,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{value:[0,"value"]},null),(n()(),i["\u0275ted"](-1,0,["All"])),(n()(),i["\u0275and"](16777216,null,0,1,null,C)),i["\u0275did"](44,278528,null,0,r.i,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,R)),i["\u0275did"](46,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,w)),i["\u0275did"](48,16384,null,0,r.j,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,10,0,"forward");var i=n(l,12,0,"/messages");n(l,11,0,i),n(l,13,0,"forward"),n(l,15,0,e.unreadMessages>0),n(l,17,0,"notifications"),n(l,19,0,"forward");var t=n(l,21,0,"/settings");n(l,20,0,t),n(l,22,0,"forward"),n(l,24,0,"settings"),n(l,31,0,"floating"),n(l,36,0,e.search),n(l,41,0,"all"),n(l,44,0,e.formGroups),n(l,46,0,e.loading),n(l,48,0,!e.loading)}),(function(n,l){n(l,33,0,i["\u0275nov"](l,38).ngClassUntouched,i["\u0275nov"](l,38).ngClassTouched,i["\u0275nov"](l,38).ngClassPristine,i["\u0275nov"](l,38).ngClassDirty,i["\u0275nov"](l,38).ngClassValid,i["\u0275nov"](l,38).ngClassInvalid,i["\u0275nov"](l,38).ngClassPending)}))}function F(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"app-submissions",[],null,null,null,y,_)),i["\u0275did"](1,114688,null,0,h,[a.a,s.Rb,s.Hb,c.m,m.a,s.a,i.NgZone,f.a,g.a,b.a,s.Lb],null,null)],(function(n,l){n(l,1,0)}),null)}var Z=i["\u0275ccf"]("app-submissions",h,F,{},{},[]),N=function(){return function(){}}();e.d(l,"SubmissionsPageModuleNgFactory",(function(){return I}));var I=i["\u0275cmf"](t,[],(function(n){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,Z]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,r.l,r.k,[i.LOCALE_ID,[2,r.w]]),i["\u0275mpd"](4608,d.j,d.j,[]),i["\u0275mpd"](4608,s.b,s.b,[i.NgZone,i.ApplicationRef]),i["\u0275mpd"](4608,s.Hb,s.Hb,[s.b,i.ComponentFactoryResolver,i.Injector]),i["\u0275mpd"](4608,s.Mb,s.Mb,[s.b,i.ComponentFactoryResolver,i.Injector]),i["\u0275mpd"](1073742336,r.b,r.b,[]),i["\u0275mpd"](1073742336,d.i,d.i,[]),i["\u0275mpd"](1073742336,d.b,d.b,[]),i["\u0275mpd"](1073742336,s.Eb,s.Eb,[]),i["\u0275mpd"](1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),i["\u0275mpd"](1073742336,N,N,[]),i["\u0275mpd"](1073742336,t,t,[]),i["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);