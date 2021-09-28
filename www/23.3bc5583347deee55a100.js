(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{zDS7:function(n,e,t){"use strict";t.r(e);var o=t("CcnG"),l=t("ZZ/e"),i=t("ri4K"),s=t("9B/o"),r=t("c7H9"),c=t("KOTj"),u=t("QaJk"),a=t("fLD/"),d=t("IwxM"),f=function(){function n(n,e,t,o,l,i,s,r,c,u){var a=this;this.plt=n,this.profileService=e,this.authenticationService=t,this.alertCtrl=o,this.iab=l,this.offlineService=i,this.submissionService=s,this.loadingController=r,this.formService=c,this.documentService=u,this.user={},this.authenticationService.getUserData().subscribe((function(n){a.user=n})),this.paymentTotal=0}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){},n.prototype.syncForms=function(){var n=this;this.loadingController.create({message:"Forms are being synced. Please wait..."}).then((function(e){n.loading=e,e.present(),n.getForms()}))},n.prototype.syncDocuments=function(){var n=this;this.loadingController.create({message:"Documents are being synced. Please wait..."}).then((function(e){n.loading=e,e.present(),n.getDocuments()}))},n.prototype.getDocuments=function(){var n=this;this.documentService.getDocumentGroups().then((function(e){n.offlineService.saveDocumentGroups(e),n.documentService.getDocuments("",{orderby:"created_at",order:"asc",city:"",suburb:""}).then((function(e){n.downloadDocument(e.data,0)})).catch((function(){n.showError("documents")}))})).catch((function(){n.showError("documents")}))},n.prototype.downloadDocument=function(n,e){var t=this;if(e===n.length)return this.offlineService.saveDocuments(n),this.showSuccess("documents"),void this.offlineService.submissionsUploaded();var o=n[e];this.loading.message="Downloading "+(e+1)+"/"+n.length+" documents. Please wait...",o.offline_compatible?this.documentService.getDocument(o.id).then((function(l){l&&l.file_blob&&(o.file_blob=l.file_blob),t.downloadDocument(n,e+=1)})).catch((function(){t.downloadDocument(n,e+=1)})):this.downloadDocument(n,e+=1)},n.prototype.getForms=function(){var n=this;this.formService.getFormGroups().then((function(e){n.offlineService.saveFormGroups(e),n.formService.getForms("",{orderby:"created_at",order:"asc",city:"",suburb:""}).then((function(e){n.offlineService.saveForms(e.data),n.showSuccess("forms"),n.offlineService.submissionsUploaded()})).catch((function(){n.showError("forms")}))})).catch((function(){n.showError("forms")}))},n.prototype.syncData=function(){var n=this;this.loadingController.create({message:"Your submissions are being synced. Please wait...",duration:2e4}).then((function(e){n.loading=e,e.present()})),this.offlineService.uploadingSubmissions?this.showSuccess("submissions"):(this.offlineService.getSubmissions().then((function(e){if(e){for(var t=0,o=e;t<o.length;t++){var l=o[t];n.submissionService.createSubmission(l.fields,l.form_id).then((function(){}))}n.submissionService.getSubmissions("").then((function(){n.showSuccess("submissions"),setTimeout((function(){n.offlineService.saveSubmissions([]),n.offlineService.submissionsUploaded()}),5e3)})).catch((function(){n.showError("submissions")}))}else n.showSuccess("submissions")})).catch((function(){n.showError("submissions")})),this.offlineService.getUpdateSubmissions().then((function(e){if(e){for(var t=0,o=e;t<o.length;t++){var l=o[t];n.submissionService.updateSubmission(l.id,l.fields).then((function(){}))}n.submissionService.getSubmissions("").then((function(){setTimeout((function(){n.offlineService.saveUpdateSubmissions([]),n.offlineService.submissionsUploaded()}),5e3)}))}})))},n.prototype.showSuccess=function(n){var e=this;setTimeout((function(){e.loading.dismiss(),e.alertCtrl.create({header:"Success",message:"Your "+n+" have been synced",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then((function(n){n.present()}))}),1e3)},n.prototype.showError=function(n){var e=this;setTimeout((function(){e.loading.dismiss(),e.alertCtrl.create({header:"Error",message:"There was an error syncing your "+n+". Please try again.",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then((function(n){n.present()}))}),1e3)},n.prototype.openChangePassword=function(){var n=this;this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Change",handler:function(e){e.password&&e.confirmPassword&&e.password===e.confirmPassword?n.authenticationService.changePassword(n.user.email,e.password,e.confirmPassword).then((function(){n.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then((function(n){n.present()}))})).catch((function(){n.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(e){setTimeout((function(){n.openChangePassword()}),200)}}]}).then((function(n){n.present()}))})):n.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(e){setTimeout((function(){n.openChangePassword()}),200)}}]}).then((function(n){n.present()}))}}]}).then((function(n){n.present()}))},n.prototype.logout=function(){this.authenticationService.logout()},n}(),m=function(){return function(){}}(),g=t("pMnS"),h=t("oBZk"),p=o["\u0275crt"]({encapsulation:0,styles:[[".settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:20px;padding-top:10px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]:first-child{margin-top:0;padding-top:0}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}.settings-list[_ngcontent-%COMP%]   ion-icon[name=trophy][_ngcontent-%COMP%]{color:#ffbf00}.settings-list[_ngcontent-%COMP%]   ion-icon[name=heart][_ngcontent-%COMP%]{color:#e31b23}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-facebook][_ngcontent-%COMP%]{color:#1778f2}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-twitter][_ngcontent-%COMP%]{color:#1da1f2}.settings-list[_ngcontent-%COMP%]   ion-icon[name=mail][_ngcontent-%COMP%]{color:grey}.settings-list[_ngcontent-%COMP%]   ion-icon[name=unlock][_ngcontent-%COMP%]{color:#d6a000}.settings-list[_ngcontent-%COMP%]   ion-icon[name=lock][_ngcontent-%COMP%]{color:#d47835}.settings-list[_ngcontent-%COMP%]   ion-icon[name=cloud-upload][_ngcontent-%COMP%]{color:#8cd0ef}.settings-list[_ngcontent-%COMP%]   ion-icon[name=locate][_ngcontent-%COMP%]{color:#90e483}.settings-list[_ngcontent-%COMP%]   ion-icon[name=eye][_ngcontent-%COMP%]{color:#222428}"]],data:{}});function b(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,h.P,h.k)),o["\u0275did"](1,49152,null,0,l.B,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,h.jb,h.E)),o["\u0275did"](3,49152,null,0,l.Cb,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(n()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.K,h.f)),o["\u0275did"](5,49152,null,0,l.l,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[["defaultHref","/login"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==o["\u0275nov"](n,8).onClick(t)&&l),l}),h.H,h.c)),o["\u0275did"](7,49152,null,0,l.g,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{defaultHref:[0,"defaultHref"]},null),o["\u0275did"](8,16384,null,0,l.h,[[2,l.ib],l.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,h.ib,h.D)),o["\u0275did"](10,49152,null,0,l.Ab,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](-1,0,["Settings"])),(n()(),o["\u0275eld"](12,0,null,null,36,"ion-content",[],null,null,null,h.M,h.h)),o["\u0275did"](13,49152,null,0,l.u,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](14,0,null,0,34,"ion-list",[["class","settings-list"]],null,null,null,h.V,h.p)),o["\u0275did"](15,49152,null,0,l.O,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](16,0,null,0,6,"ion-item",[["detail",""]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.syncData()&&o),o}),h.S,h.n)),o["\u0275did"](17,49152,null,0,l.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{detail:[0,"detail"]},null),(n()(),o["\u0275eld"](18,0,null,0,1,"ion-icon",[["name","refresh"],["slot","start"]],null,null,null,h.Q,h.l)),o["\u0275did"](19,49152,null,0,l.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(n()(),o["\u0275eld"](20,0,null,0,2,"ion-label",[],null,null,null,h.T,h.o)),o["\u0275did"](21,49152,null,0,l.N,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](-1,0,["Sync Submissions"])),(n()(),o["\u0275eld"](23,0,null,0,6,"ion-item",[["detail",""]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.syncForms()&&o),o}),h.S,h.n)),o["\u0275did"](24,49152,null,0,l.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{detail:[0,"detail"]},null),(n()(),o["\u0275eld"](25,0,null,0,1,"ion-icon",[["name","refresh"],["slot","start"]],null,null,null,h.Q,h.l)),o["\u0275did"](26,49152,null,0,l.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(n()(),o["\u0275eld"](27,0,null,0,2,"ion-label",[],null,null,null,h.T,h.o)),o["\u0275did"](28,49152,null,0,l.N,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](-1,0,["Sync Forms"])),(n()(),o["\u0275eld"](30,0,null,0,6,"ion-item",[["detail",""]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.syncDocuments()&&o),o}),h.S,h.n)),o["\u0275did"](31,49152,null,0,l.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{detail:[0,"detail"]},null),(n()(),o["\u0275eld"](32,0,null,0,1,"ion-icon",[["name","refresh"],["slot","start"]],null,null,null,h.Q,h.l)),o["\u0275did"](33,49152,null,0,l.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(n()(),o["\u0275eld"](34,0,null,0,2,"ion-label",[],null,null,null,h.T,h.o)),o["\u0275did"](35,49152,null,0,l.N,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](-1,0,["Sync Documents"])),(n()(),o["\u0275eld"](37,0,null,0,6,"ion-item",[["detail",""]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.openChangePassword()&&o),o}),h.S,h.n)),o["\u0275did"](38,49152,null,0,l.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{detail:[0,"detail"]},null),(n()(),o["\u0275eld"](39,0,null,0,1,"ion-icon",[["name","unlock"],["slot","start"]],null,null,null,h.Q,h.l)),o["\u0275did"](40,49152,null,0,l.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(n()(),o["\u0275eld"](41,0,null,0,2,"ion-label",[],null,null,null,h.T,h.o)),o["\u0275did"](42,49152,null,0,l.N,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](-1,0,["Change Password"])),(n()(),o["\u0275eld"](44,0,null,0,4,"ion-item",[],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.logout()&&o),o}),h.S,h.n)),o["\u0275did"](45,49152,null,0,l.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](46,0,null,0,1,"ion-icon",[["name","lock"],["slot","start"]],null,null,null,h.Q,h.l)),o["\u0275did"](47,49152,null,0,l.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(n()(),o["\u0275ted"](-1,0,[" Logout "]))],(function(n,e){n(e,3,0,"primary"),n(e,7,0,"/login"),n(e,8,0,"/login"),n(e,17,0,""),n(e,19,0,"refresh"),n(e,24,0,""),n(e,26,0,"refresh"),n(e,31,0,""),n(e,33,0,"refresh"),n(e,38,0,""),n(e,40,0,"unlock"),n(e,47,0,"lock")}),null)}function C(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-settings",[],null,null,null,b,p)),o["\u0275did"](1,114688,null,0,f,[l.Lb,r.a,i.a,l.a,s.a,c.a,u.a,l.Gb,a.a,d.a],null,null)],(function(n,e){n(e,1,0)}),null)}var v=o["\u0275ccf"]("app-settings",f,C,{},{},[]),S=t("Ip0R"),w=t("gIcY"),y=t("ZYCi");t.d(e,"SettingsPageModuleNgFactory",(function(){return R}));var R=o["\u0275cmf"](m,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[g.a,v]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,S.l,S.k,[o.LOCALE_ID,[2,S.w]]),o["\u0275mpd"](4608,w.j,w.j,[]),o["\u0275mpd"](4608,l.b,l.b,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,l.Hb,l.Hb,[l.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,l.Mb,l.Mb,[l.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,S.b,S.b,[]),o["\u0275mpd"](1073742336,w.i,w.i,[]),o["\u0275mpd"](1073742336,w.b,w.b,[]),o["\u0275mpd"](1073742336,l.Eb,l.Eb,[]),o["\u0275mpd"](1073742336,y.p,y.p,[[2,y.u],[2,y.m]]),o["\u0275mpd"](1073742336,m,m,[]),o["\u0275mpd"](1024,y.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);