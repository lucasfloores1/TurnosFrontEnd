"use strict";(self.webpackChunkTurnosFrontEnd=self.webpackChunkTurnosFrontEnd||[]).push([[951],{7951:(v,f,s)=>{s.r(f),s.d(f,{EstudiosModule:()=>z});var m=s(6895),u=s(3060),t=s(4650),c=s(5872),i=s(4006),d=s(3546),p=s(7392),l=s(9549),_=s(4859),h=s(4144),x=s(4604),b=s(2080);function Z(e,a){1&e&&t._UZ(0,"app-loading")}function A(e,a){1&e&&(t.TgZ(0,"div",14),t._uU(1,"No tienes estudios creados a\xfan"),t.qZA())}function M(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"mat-card",15),t.NdJ("click",function(){const g=t.CHM(o).$implicit,C=t.oxw(2);return t.KtG(C.estudioDetail(g))}),t.TgZ(1,"mat-card-header")(2,"mat-card-title-group")(3,"h2",5),t._uU(4),t.qZA(),t._UZ(5,"img",16),t.TgZ(6,"p",17),t._uU(7),t.qZA()()(),t._UZ(8,"mat-card-content"),t.qZA()}if(2&e){const o=a.$implicit;t.xp6(4),t.Oqu(o.nombre),t.xp6(3),t.hij("Codigo : ",o.nomenclador,"")}}function T(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h2",5),t._uU(4,"Estudios"),t.qZA(),t._UZ(5,"div",6),t.TgZ(6,"button",7)(7,"mat-icon"),t._uU(8,"add"),t.qZA()()()(),t.TgZ(9,"div",8)(10,"mat-form-field",9)(11,"mat-label"),t._uU(12,"Buscar"),t.qZA(),t.TgZ(13,"input",10),t.NdJ("ngModelChange",function(r){t.CHM(o);const g=t.oxw();return t.KtG(g.searchText=r)}),t.qZA(),t.TgZ(14,"mat-icon",11),t._uU(15,"search"),t.qZA()()(),t.YNc(16,A,2,0,"div",12),t.YNc(17,M,9,2,"mat-card",13),t.ALo(18,"search"),t.qZA()}if(2&e){const o=t.oxw();t.xp6(13),t.Q6J("ngModel",o.searchText),t.xp6(3),t.Q6J("ngIf",0==o.estudios.length),t.xp6(1),t.Q6J("ngForOf",t.xi3(18,3,o.estudios,o.searchText))}}let F=(()=>{class e{constructor(o,n){this.router=o,this.estudioService=n,this.animation=!1,this.searchText=""}ngOnInit(){this.animation=!0,this.estudioService.getEstudios(localStorage.getItem("user")).subscribe(o=>{this.estudios=o,this.animation=!1})}estudioDetail(o){this.router.navigate([`estudios/details/${o.id}`])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.F0),t.Y36(c.c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-estudios"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"header"],[1,"title"],["mat-card-title",""],[1,"spacer"],["mat-mini-fab","","routerLink","/estudios/create","color","primary"],[1,"search"],["appearance","outline"],["type","text","matInput","","placeholder","Nombre, DNI, Direccion, etc...",3,"ngModel","ngModelChange"],["matSuffix",""],["class","not-found",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[1,"not-found"],[3,"click"],["mat-card-sm-image","","src","https://i.imgur.com/9ulsDM8.png","alt","medical-exam",1,"estudio-img"],["mat-card-subtitle",""]],template:function(o,n){1&o&&(t.YNc(0,Z,1,0,"app-loading",0),t.YNc(1,T,19,6,"div",1)),2&o&&(t.Q6J("ngIf",n.animation),t.xp6(1),t.Q6J("ngIf",!n.animation))},dependencies:[m.sg,m.O5,u.rH,i.Fj,i.JJ,i.On,d.a8,d.dn,d.dk,d.vP,d.$j,d.n5,d.C1,p.Hw,l.KE,l.hX,l.R9,_.nh,h.Nt,x.N,b.C],styles:["mat-card[_ngcontent-%COMP%]{border-radius:15px;max-width:600px;margin-top:15px;background-color:#ebebff;width:100%}mat-card[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]{display:flex;width:100%;min-width:300px;max-width:600px;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.header[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-direction:column;width:100%}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2em}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:15px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.search[_ngcontent-%COMP%]{margin-top:15px;width:100%}.search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})();var O=s(5107),E=s(3595);function I(e,a){1&e&&t._UZ(0,"app-loading")}function N(e,a){1&e&&(t.TgZ(0,"button",10),t._uU(1,"Volver"),t.qZA())}function P(e,a){1&e&&t._UZ(0,"app-loading")}function U(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Este campo es obligatorio"),t.qZA())}function y(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Este campo es obligatorio"),t.qZA())}function w(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",11)(1,"h2",12),t._uU(2,"Editar Estudio"),t.qZA(),t.TgZ(3,"form",13),t.NdJ("submit",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.updateEstudio())}),t.TgZ(4,"mat-form-field",14)(5,"mat-label"),t._uU(6,"C\xf3digo del Nomenclador Nacional"),t.qZA(),t._UZ(7,"input",15),t.TgZ(8,"mat-hint"),t._uU(9,"Si no sabes el c\xf3digo entra "),t.TgZ(10,"a",16),t._uU(11,"aqu\xed"),t.qZA()(),t.YNc(12,U,2,0,"mat-error",0),t.qZA(),t.TgZ(13,"mat-form-field",14)(14,"mat-label"),t._uU(15,"Nombre del Estudio"),t.qZA(),t._UZ(16,"input",17),t.YNc(17,y,2,0,"mat-error",0),t.qZA(),t.TgZ(18,"button",18),t._uU(19,"Editar Estudio"),t.qZA()()()}if(2&e){const o=t.oxw(2);let n,r;t.xp6(3),t.Q6J("formGroup",o.estForm),t.xp6(9),t.Q6J("ngIf",(null==(n=o.estForm.get("nomenclador"))?null:n.invalid)&&((null==(n=o.estForm.get("nomenclador"))?null:n.dirty)||(null==(n=o.estForm.get("nomenclador"))?null:n.touched))),t.xp6(5),t.Q6J("ngIf",(null==(r=o.estForm.get("nombre"))?null:r.invalid)&&((null==(r=o.estForm.get("nombre"))?null:r.dirty)||(null==(r=o.estForm.get("nombre"))?null:r.touched))),t.xp6(1),t.Q6J("disabled",o.estForm.invalid)}}function J(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",2)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title-group")(4,"h2",3),t._uU(5),t.qZA(),t._UZ(6,"img",4),t.TgZ(7,"p",5),t._uU(8),t.qZA()()()(),t.TgZ(9,"div",6)(10,"button",7),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.toggleForm())}),t._uU(11),t.qZA(),t.YNc(12,N,2,0,"button",8),t.qZA(),t.YNc(13,P,1,0,"app-loading",0),t.YNc(14,w,20,4,"div",9),t.qZA()}if(2&e){const o=t.oxw();t.xp6(5),t.Oqu(o.estudio.nombre),t.xp6(3),t.hij("Codigo : ",o.estudio.nomenclador,""),t.xp6(2),t.Q6J("color",o.showButtons?"primary":"warn"),t.xp6(1),t.Oqu(o.showButtons?"Editar Estudio":"Cancelar"),t.xp6(1),t.Q6J("ngIf",o.showButtons),t.xp6(1),t.Q6J("ngIf",o.sendAnimation),t.xp6(1),t.Q6J("ngIf",o.showForm&&!o.sendAnimation)}}function D(e,a){1&e&&t._UZ(0,"app-loading")}function Y(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Este campo es obligatorio"),t.qZA())}function S(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Este campo es obligatorio"),t.qZA())}function Q(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",2)(1,"h2",3),t._uU(2,"Agregar Estudio"),t.qZA(),t.TgZ(3,"form",4),t.NdJ("submit",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.createEstudio())}),t.TgZ(4,"mat-form-field",5)(5,"mat-label"),t._uU(6,"C\xf3digo del Nomenclador Nacional"),t.qZA(),t._UZ(7,"input",6),t.TgZ(8,"mat-hint"),t._uU(9,"Si no sabes el c\xf3digo entra "),t.TgZ(10,"a",7),t._uU(11,"aqu\xed"),t.qZA()(),t.YNc(12,Y,2,0,"mat-error",0),t.qZA(),t.TgZ(13,"mat-form-field",5)(14,"mat-label"),t._uU(15,"Nombre del Estudio"),t.qZA(),t._UZ(16,"input",8),t.YNc(17,S,2,0,"mat-error",0),t.qZA(),t.TgZ(18,"button",9),t._uU(19,"Crear Estudio"),t.qZA()()()}if(2&e){const o=t.oxw();let n,r;t.xp6(3),t.Q6J("formGroup",o.estForm),t.xp6(9),t.Q6J("ngIf",(null==(n=o.estForm.get("nomenclador"))?null:n.invalid)&&((null==(n=o.estForm.get("nomenclador"))?null:n.dirty)||(null==(n=o.estForm.get("nomenclador"))?null:n.touched))),t.xp6(5),t.Q6J("ngIf",(null==(r=o.estForm.get("nombre"))?null:r.invalid)&&((null==(r=o.estForm.get("nombre"))?null:r.dirty)||(null==(r=o.estForm.get("nombre"))?null:r.touched))),t.xp6(1),t.Q6J("disabled",o.estForm.invalid)}}const k=[{path:"",canActivateChild:[O.a],children:[{path:"",component:F},{path:"details/:id",component:(()=>{class e{constructor(o,n,r,g,C){this.fb=o,this.route=n,this.router=r,this.estudioService=g,this.notiService=C,this.animation=!1,this.sendAnimation=!1,this.showForm=!1,this.showButtons=!0}ngOnInit(){this.animation=!0,this.route.paramMap.subscribe(o=>{const{params:n}=o;this.loadEstudio(n.id)})}loadEstudio(o){this.estudioService.getEstudioById(o).subscribe(n=>{this.estudio=n,this.estForm=this.fb.group({userId:[localStorage.getItem("user"),i.kI.required],id:[this.estudio.id,i.kI.required],nomenclador:[this.estudio.nomenclador,i.kI.required],nombre:[this.estudio.nombre,i.kI.required]}),this.animation=!1})}updateEstudio(){this.estudioService.createEstudio(this.estForm.value).subscribe(o=>{this.sendAnimation=!1,this.notiService.OkNotification("Estudio actualizado con \xe9xito!!"),this.router.navigate(["estudios"])},o=>{this.sendAnimation=!1,this.notiService.ErrorNotification("Ups algo sali\xf3 mal"),this.router.navigate(["estudios"])}),this.router.navigate(["estudio"])}toggleForm(){this.showForm=!this.showForm,this.showButtons=!this.showButtons}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.qu),t.Y36(u.gz),t.Y36(u.F0),t.Y36(c.c),t.Y36(E.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-estudio-details"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","details-container",4,"ngIf"],[1,"details-container"],["mat-card-title",""],["mat-card-sm-image","","src","https://i.imgur.com/9ulsDM8.png","alt","medical-exam",1,"estudio-img"],["mat-card-subtitle",""],[1,"nav-buttons"],["mat-raised-button","",3,"color","click"],["mat-raised-button","","color","warn","routerLink","/estudios",4,"ngIf"],["class","form",4,"ngIf"],["mat-raised-button","","color","warn","routerLink","/estudios"],[1,"form"],["mat-card-title","",1,"title"],[1,"form-container",3,"formGroup","submit"],["appearance","outline"],["type","text","matInput","","formControlName","nomenclador","placeholder","Consulta : 420101"],["href","https://prestadores.pami.org.ar/bot_nomenclador_unico/2023_03/Manual_Nomenclador_032023.pdf","target","_blank"],["type","text","matInput","","formControlName","nombre","placeholder","Nombre del Estudio"],["color","accent","mat-raised-button","","type","submit",1,"submit-btn",3,"disabled"]],template:function(o,n){1&o&&(t.YNc(0,I,1,0,"app-loading",0),t.YNc(1,J,15,7,"div",1)),2&o&&(t.Q6J("ngIf",n.animation),t.xp6(1),t.Q6J("ngIf",n.estudio&&!n.animation))},dependencies:[m.O5,u.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.a8,d.dk,d.vP,d.$j,d.n5,d.C1,l.KE,l.hX,l.bx,l.TO,_.lW,h.Nt,x.N],styles:[".details-container[_ngcontent-%COMP%]{display:flex;width:100%;min-width:300px;max-width:600px;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}mat-card[_ngcontent-%COMP%]{width:100%;border-radius:15px;max-width:600px;margin-top:15px;background-color:#ebebff}mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:4px}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-bottom:10px}.submit-btn[_ngcontent-%COMP%]{width:90%;margin-top:15px;margin-left:10px;align-self:center}.form-container[_ngcontent-%COMP%]{align-self:center;width:90%;display:flex;flex-direction:column;gap:15px}.title[_ngcontent-%COMP%]{margin-top:15px;align-self:center;font-size:1.5rem}.error[_ngcontent-%COMP%]{color:red}.spacer[_ngcontent-%COMP%]{flex:1 0 auto}.form[_ngcontent-%COMP%]{align-self:center;width:100%;display:flex;flex-direction:column;gap:15px;margin-top:15px}.nav-buttons[_ngcontent-%COMP%]{margin-top:15px;width:100%;display:flex;flex-direction:column;gap:15px}"]}),e})()},{path:"create",component:(()=>{class e{constructor(o,n,r,g){this.router=o,this.fb=n,this.estudioService=r,this.notiService=g,this.sendAnimation=!1,this.estForm=this.fb.group({userId:[localStorage.getItem("user"),i.kI.required],id:[0,i.kI.required],nomenclador:["",i.kI.required],nombre:["",i.kI.required]})}ngOnInit(){}createEstudio(){this.estudioService.createEstudio(this.estForm.value).subscribe(o=>{this.sendAnimation=!1,this.notiService.OkNotification("Estudio creado con \xe9xito!!"),this.router.navigate(["estudios"])},o=>{this.sendAnimation=!1,this.notiService.ErrorNotification("Ups algo sali\xf3 mal"),this.router.navigate(["estudios"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.F0),t.Y36(i.qu),t.Y36(c.c),t.Y36(E.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-estudio"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","estForm",4,"ngIf"],[1,"estForm"],["mat-card-title","",1,"title"],[1,"form-container",3,"formGroup","submit"],["appearance","outline"],["type","text","matInput","","formControlName","nomenclador","placeholder","Consulta : 420101"],["href","https://prestadores.pami.org.ar/bot_nomenclador_unico/2023_03/Manual_Nomenclador_032023.pdf","target","_blank"],["type","text","matInput","","formControlName","nombre","placeholder","Nombre del Estudio"],["color","accent","mat-raised-button","","type","submit",1,"submit-btn",3,"disabled"]],template:function(o,n){1&o&&(t.YNc(0,D,1,0,"app-loading",0),t.YNc(1,Q,20,4,"div",1)),2&o&&(t.Q6J("ngIf",n.sendAnimation),t.xp6(1),t.Q6J("ngIf",!n.sendAnimation))},dependencies:[m.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.n5,l.KE,l.hX,l.bx,l.TO,_.lW,h.Nt,x.N],styles:[".submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:15px;margin-left:10px}.form-container[_ngcontent-%COMP%]{align-self:center;width:90%;display:flex;flex-direction:column;gap:15px}.estForm[_ngcontent-%COMP%]{display:flex;width:100%;min-width:300px;max-width:600px;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.title[_ngcontent-%COMP%]{margin-top:15px;align-self:center;font-size:1.5rem}.error[_ngcontent-%COMP%]{color:red}"]}),e})()}]}];let j=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(k),u.Bz]}),e})();var K=s(5503),L=s(9318);let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,j,i.UX,i.u5,K.D,d.QW,p.Ps,l.lN,_.ot,h.c,L.s]}),e})()},5503:(v,f,s)=>{s.d(f,{D:()=>t});var m=s(6895),u=s(4650);let t=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[m.ez]}),c})()},2080:(v,f,s)=>{s.d(f,{C:()=>u});var m=s(4650);let u=(()=>{class t{transform(i,d){return i?d?(d=d.toLowerCase(),i.filter(p=>{for(const l in p)if(p.hasOwnProperty(l)&&"string"==typeof p[l]&&p[l].toLowerCase().includes(d))return!0;return!1})):i:[]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=m.Yjl({name:"search",type:t,pure:!0}),t})()}}]);