(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{zDS7:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("ZZ/e"),o=t("Z4xi"),r=t("ri4K"),i=t("9B/o"),a=t("c7H9"),s=t("wd/R");class c{constructor(l,n,t,e,u,o){this.emailComposer=l,this.plt=n,this.profileService=t,this.authenticationService=e,this.alertCtrl=u,this.iab=o,this.user={},this.authenticationService.getUserData().subscribe(l=>{this.user=l}),this.paymentTotal=0}ngOnInit(){}ionViewDidEnter(){this.getPaymentTotal()}getBankAccount(){return this.user.profile&&this.user.profile.bank_account?this.user.profile.bank_account.replace(/(\+?\d{3})(\d+)(\d{2})/g,(function(l,n,t,e){return n+"*".repeat(t.length)+e})):"No bank account set"}getPaymentTotal(){this.authenticationService.getPaymentTotal().then(l=>{console.log(l),this.paymentTotal=l})}getNextPaymentDate(){return s().add(1,"months").startOf("month").format("DD/MM/YYYY")}openRate(){this.plt.is("ios")?this.iab.create("https://apps.apple.com/us/app/","_system"):this.iab.create("https://play.google.com/store/apps/details?id=com.sitters.app","_system")}openFollow(){this.iab.create("https://www.facebook.com/sittersapp","_system")}openEmail(){this.emailComposer.open({to:["hello@sittersapp.com"],subject:"Subject for your support query",body:"Provide details about the support you require.",isHtml:!0})}openChangeBankAccount(){this.alertCtrl.create({header:"Change Bank Account",inputs:[{name:"bank_account",placeholder:"Bank Account Number",type:"number"}],buttons:[{text:"Cancel",role:"cancel",handler:l=>{}},{text:"Change",handler:l=>{if(l.bank_account){let n={bank_account:l.bank_account,user_id:this.user.id};this.user.profile.bank_account=l.bank_account,this.profileService.updateProfile(n).then(()=>{})}}}]}).then(l=>{l.present()})}openChangePassword(){this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:l=>{}},{text:"Change",handler:l=>{l.password&&l.confirmPassword&&l.password===l.confirmPassword?this.authenticationService.changePassword(this.user.email,l.password,l.confirmPassword).then(()=>{this.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:l=>{}}]}).then(l=>{l.present()})}).catch(()=>{this.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:l=>{}},{text:"Try Again",handler:l=>{setTimeout(()=>{this.openChangePassword()},200)}}]}).then(l=>{l.present()})}):this.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:l=>{}},{text:"Try Again",handler:l=>{setTimeout(()=>{this.openChangePassword()},200)}}]}).then(l=>{l.present()})}}]}).then(l=>{l.present()})}logout(){this.authenticationService.logout()}}class b{}var h=t("pMnS"),m=t("oBZk"),p=t("iInd"),k=t("SVse"),g=e.pb({encapsulation:0,styles:[[".settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:20px;padding-top:10px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]:first-child{margin-top:0;padding-top:0}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}.settings-list[_ngcontent-%COMP%]   ion-icon[name=trophy][_ngcontent-%COMP%]{color:#ffbf00}.settings-list[_ngcontent-%COMP%]   ion-icon[name=heart][_ngcontent-%COMP%]{color:#e31b23}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-facebook][_ngcontent-%COMP%]{color:#3b5998}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-twitter][_ngcontent-%COMP%]{color:#1da1f2}.settings-list[_ngcontent-%COMP%]   ion-icon[name=mail][_ngcontent-%COMP%]{color:grey}.settings-list[_ngcontent-%COMP%]   ion-icon[name=unlock][_ngcontent-%COMP%]{color:#d6a000}.settings-list[_ngcontent-%COMP%]   ion-icon[name=lock][_ngcontent-%COMP%]{color:#d47835}.settings-list[_ngcontent-%COMP%]   ion-icon[name=cloud-upload][_ngcontent-%COMP%]{color:#8cd0ef}.settings-list[_ngcontent-%COMP%]   ion-icon[name=locate][_ngcontent-%COMP%]{color:#90e483}"]],data:{}});function d(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,29,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,2,"ion-list-header",[],null,null,null,m.lb,m.y)),e.qb(2,49152,null,0,u.R,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Admin"])),(l()(),e.rb(4,0,null,null,12,"ion-item",[["class","settings-list__payment"],["routerDirection","forward"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Cb(l,6).onClick()&&u),"click"===n&&(u=!1!==e.Cb(l,8).onClick(t)&&u),u}),m.jb,m.v)),e.qb(5,49152,null,0,u.J,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(6,16384,null,0,p.n,[p.m,p.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Db(7,1),e.qb(8,737280,null,0,u.Pb,[k.h,u.Kb,e.k,p.m,[2,p.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(9,0,null,0,1,"ion-icon",[["name","people"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(10,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(11,0,null,0,5,"ion-label",[],null,null,null,m.kb,m.w)),e.qb(12,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(13,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Manage Users"])),(l()(),e.rb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Perform security checks on new users"])),(l()(),e.rb(17,0,null,null,12,"ion-item",[["class","settings-list__payment"],["routerDirection","forward"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Cb(l,19).onClick()&&u),"click"===n&&(u=!1!==e.Cb(l,21).onClick(t)&&u),u}),m.jb,m.v)),e.qb(18,49152,null,0,u.J,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(19,16384,null,0,p.n,[p.m,p.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Db(20,1),e.qb(21,737280,null,0,u.Pb,[k.h,u.Kb,e.k,p.m,[2,p.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(22,0,null,0,1,"ion-icon",[["name","card"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(23,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(24,0,null,0,5,"ion-label",[],null,null,null,m.kb,m.w)),e.qb(25,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(26,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Manage Payments"])),(l()(),e.rb(28,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["View upcoming payments and generate bank payment file"]))],(function(l,n){l(n,5,0,"forward");var t=l(n,7,0,"/manage-users/");l(n,6,0,t),l(n,8,0,"forward"),l(n,10,0,"people"),l(n,18,0,"forward");var e=l(n,20,0,"/manage-payments/");l(n,19,0,e),l(n,21,0,"forward"),l(n,23,0,"card")}),null)}function f(l){return e.Mb(0,[e.Eb(0,k.d,[e.s]),(l()(),e.rb(1,0,null,null,6,"ion-header",[],null,null,null,m.eb,m.q)),e.qb(2,49152,null,0,u.D,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,m.Bb,m.N)),e.qb(4,49152,null,0,u.Eb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(5,0,null,0,2,"ion-title",[],null,null,null,m.Ab,m.M)),e.qb(6,49152,null,0,u.Cb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Account"])),(l()(),e.rb(8,0,null,null,74,"ion-content",[],null,null,null,m.bb,m.n)),e.qb(9,49152,null,0,u.w,[e.h,e.k,e.x],null,null),(l()(),e.rb(10,0,null,0,72,"ion-list",[["class","settings-list"]],null,null,null,m.mb,m.x)),e.qb(11,49152,null,0,u.Q,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,d)),e.qb(13,16384,null,0,k.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(14,0,null,0,2,"ion-list-header",[],null,null,null,m.lb,m.y)),e.qb(15,49152,null,0,u.R,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Balance"])),(l()(),e.rb(17,0,null,0,10,"ion-item",[["class","settings-list__payment"]],null,null,null,m.jb,m.v)),e.qb(18,49152,null,0,u.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(19,0,null,0,1,"ion-icon",[["color","primary"],["name","cash"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(20,49152,null,0,u.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.rb(21,0,null,0,6,"ion-label",[],null,null,null,m.kb,m.w)),e.qb(22,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(23,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),e.Kb(24,null,["$",""])),e.Gb(25,2),(l()(),e.rb(26,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(27,null,["Next payment ",""])),(l()(),e.rb(28,0,null,0,12,"ion-item",[["class","settings-list__payment"]],null,null,null,m.jb,m.v)),e.qb(29,49152,null,0,u.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(30,0,null,0,1,"ion-icon",[["color","dark"],["name","contact"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(31,49152,null,0,u.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.rb(32,0,null,0,5,"ion-label",[],null,null,null,m.kb,m.w)),e.qb(33,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(34,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Bank Account"])),(l()(),e.rb(36,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(37,null,["",""])),(l()(),e.rb(38,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openChangeBankAccount()&&e),e}),m.S,m.e)),e.qb(39,49152,null,0,u.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Kb(-1,0,["Change"])),(l()(),e.rb(41,0,null,0,2,"ion-list-header",[],null,null,null,m.lb,m.y)),e.qb(42,49152,null,0,u.R,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Support"])),(l()(),e.rb(44,0,null,0,7,"ion-item",[],null,null,null,m.jb,m.v)),e.qb(45,49152,null,0,u.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(46,0,null,0,1,"ion-icon",[["name","heart"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(47,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Kb(-1,0,[" Rate The App "])),(l()(),e.rb(49,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openRate()&&e),e}),m.S,m.e)),e.qb(50,49152,null,0,u.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Kb(-1,0,["Rate"])),(l()(),e.rb(52,0,null,0,7,"ion-item",[],null,null,null,m.jb,m.v)),e.qb(53,49152,null,0,u.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(54,0,null,0,1,"ion-icon",[["name","logo-facebook"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(55,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Kb(-1,0,[" Follow Us "])),(l()(),e.rb(57,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openFollow()&&e),e}),m.S,m.e)),e.qb(58,49152,null,0,u.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Kb(-1,0,["Follow"])),(l()(),e.rb(60,0,null,0,7,"ion-item",[],null,null,null,m.jb,m.v)),e.qb(61,49152,null,0,u.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(62,0,null,0,1,"ion-icon",[["name","mail"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(63,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Kb(-1,0,[" Contact Support "])),(l()(),e.rb(65,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openEmail()&&e),e}),m.S,m.e)),e.qb(66,49152,null,0,u.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Kb(-1,0,["Email"])),(l()(),e.rb(68,0,null,0,2,"ion-list-header",[],null,null,null,m.lb,m.y)),e.qb(69,49152,null,0,u.R,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Account Settings"])),(l()(),e.rb(71,0,null,0,6,"ion-item",[["detail",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openChangePassword()&&e),e}),m.jb,m.v)),e.qb(72,49152,null,0,u.J,[e.h,e.k,e.x],{detail:[0,"detail"]},null),(l()(),e.rb(73,0,null,0,1,"ion-icon",[["name","unlock"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(74,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(75,0,null,0,2,"ion-label",[],null,null,null,m.kb,m.w)),e.qb(76,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Change Password"])),(l()(),e.rb(78,0,null,0,4,"ion-item",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),m.jb,m.v)),e.qb(79,49152,null,0,u.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(80,0,null,0,1,"ion-icon",[["name","lock"],["slot","start"]],null,null,null,m.fb,m.r)),e.qb(81,49152,null,0,u.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Kb(-1,0,[" Logout "]))],(function(l,n){var t=n.component;l(n,4,0,"primary"),l(n,13,0,"admin"===t.user.permission),l(n,20,0,"primary","cash"),l(n,31,0,"dark","contact"),l(n,39,0,"outline"),l(n,47,0,"heart"),l(n,50,0,"outline"),l(n,55,0,"logo-facebook"),l(n,58,0,"outline"),l(n,63,0,"mail"),l(n,66,0,"outline"),l(n,72,0,""),l(n,74,0,"unlock"),l(n,81,0,"lock")}),(function(l,n){var t=n.component,u=e.Lb(n,24,0,l(n,25,0,e.Cb(n,0),t.paymentTotal,"1.2-2"));l(n,24,0,u),l(n,27,0,t.getNextPaymentDate()),l(n,37,0,t.getBankAccount())}))}function C(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"app-settings",[],null,null,null,f,g)),e.qb(1,114688,null,0,c,[o.a,u.Nb,a.a,r.a,u.b,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=e.nb("app-settings",c,C,{},{},[]),x=t("s7LF");t.d(n,"SettingsPageModuleNgFactory",(function(){return w}));var w=e.ob(b,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[h.a,P]],[3,e.j],e.v]),e.Ab(4608,k.m,k.l,[e.s,[2,k.x]]),e.Ab(4608,x.l,x.l,[]),e.Ab(4608,u.c,u.c,[e.x,e.g]),e.Ab(4608,u.Jb,u.Jb,[u.c,e.j,e.p]),e.Ab(4608,u.Ob,u.Ob,[u.c,e.j,e.p]),e.Ab(1073742336,k.b,k.b,[]),e.Ab(1073742336,x.k,x.k,[]),e.Ab(1073742336,x.b,x.b,[]),e.Ab(1073742336,u.Gb,u.Gb,[]),e.Ab(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),e.Ab(1073742336,b,b,[]),e.Ab(1024,p.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);