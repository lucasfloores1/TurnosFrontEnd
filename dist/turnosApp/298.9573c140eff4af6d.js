"use strict";(self.webpackChunkTurnosFrontEnd=self.webpackChunkTurnosFrontEnd||[]).push([[298],{4298:(v,f,l)=>{l.r(f),l.d(f,{ObrasSocialesModule:()=>V});var u=l(6895),d=l(3060),t=l(4650),p=l(1758),e=l(4006),c=l(3546),_=l(7392),m=l(9549),g=l(4859),h=l(4144),x=l(4604),Z=l(2080);function S(a,r){1&a&&t._UZ(0,"app-loading")}function A(a,r){1&a&&(t.TgZ(0,"div",14),t._uU(1,"No tienes Obras Sociales creadas a\xfan"),t.qZA())}function T(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"mat-card",15),t.NdJ("click",function(){const s=t.CHM(o).$implicit,b=t.oxw(2);return t.KtG(b.obraSocialDetail(s))}),t.TgZ(1,"mat-card-header")(2,"mat-card-title-group")(3,"h2",5),t._uU(4),t.qZA(),t._UZ(5,"img",16),t.TgZ(6,"p",17),t._uU(7),t.qZA()()(),t._UZ(8,"mat-card-content"),t.qZA()}if(2&a){const o=r.$implicit;t.xp6(4),t.Oqu(o.nombre),t.xp6(3),t.hij("Dir : ",o.direccion,"")}}function P(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h2",5),t._uU(4,"Obras Sociales"),t.qZA(),t._UZ(5,"div",6),t.TgZ(6,"button",7)(7,"mat-icon"),t._uU(8,"add"),t.qZA()()(),t.TgZ(9,"div",8)(10,"mat-form-field",9)(11,"mat-label"),t._uU(12,"Buscar"),t.qZA(),t.TgZ(13,"input",10),t.NdJ("ngModelChange",function(i){t.CHM(o);const s=t.oxw();return t.KtG(s.searchText=i)}),t.qZA(),t.TgZ(14,"mat-icon",11),t._uU(15,"search"),t.qZA()()()(),t.YNc(16,A,2,0,"div",12),t.YNc(17,T,9,2,"mat-card",13),t.ALo(18,"search"),t.qZA()}if(2&a){const o=t.oxw();t.xp6(13),t.Q6J("ngModel",o.searchText),t.xp6(3),t.Q6J("ngIf",0==o.obrasSociales.length),t.xp6(1),t.Q6J("ngForOf",t.xi3(18,3,o.obrasSociales,o.searchText))}}let M=(()=>{class a{constructor(o,n){this.router=o,this.obraSocialService=n,this.animation=!1,this.searchText=""}ngOnInit(){this.animation=!0,this.obraSocialService.getObrasSociales(localStorage.getItem("user")).subscribe(o=>{this.obrasSociales=o.filter(n=>"Particular"!==n.nombre),this.animation=!1})}obraSocialDetail(o){this.router.navigate([`obras-sociales/details/${o.id}`])}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(d.F0),t.Y36(p.P))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-obras-sociales"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"header"],[1,"title"],["mat-card-title",""],[1,"spacer"],["mat-mini-fab","","routerLink","/obras-sociales/create","color","primary"],[1,"search"],["appearance","outline"],["type","text","matInput","","placeholder","Nombre, DNI, Direccion, etc...",3,"ngModel","ngModelChange"],["matSuffix",""],["class","not-found",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[1,"not-found"],[3,"click"],["mat-card-sm-image","","src","https://i.imgur.com/bi7ghdy.png","alt","health-plan",1,"obraSocial-img"],["mat-card-subtitle",""]],template:function(o,n){1&o&&(t.YNc(0,S,1,0,"app-loading",0),t.YNc(1,P,19,6,"div",1)),2&o&&(t.Q6J("ngIf",n.animation),t.xp6(1),t.Q6J("ngIf",!n.animation))},dependencies:[u.sg,u.O5,d.rH,e.Fj,e.JJ,e.On,c.a8,c.dn,c.dk,c.vP,c.$j,c.n5,c.C1,_.Hw,m.KE,m.hX,m.R9,g.nh,h.Nt,x.N,Z.C],styles:["mat-card[_ngcontent-%COMP%]{border-radius:15px;max-width:600px;margin-top:15px;background-color:#ebebff;width:100%}mat-card[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]{display:flex;width:100%;min-width:300px;max-width:600px;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.header[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-direction:column;width:100%}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2em}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:15px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.search[_ngcontent-%COMP%]{margin-top:15px;width:100%}.search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})();var C=l(3595),O=l(4850);function F(a,r){1&a&&t._UZ(0,"app-loading")}function I(a,r){if(1&a&&(t.TgZ(0,"div",11)(1,"p",5),t._uU(2),t.qZA()()),2&a){const o=r.$implicit;t.xp6(2),t.Oqu(o.nombre)}}function N(a,r){1&a&&(t.TgZ(0,"button",12),t._uU(1,"Volver"),t.qZA())}function y(a,r){1&a&&t._UZ(0,"app-loading")}function U(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio "),t.qZA())}function w(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio "),t.qZA())}function q(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(o);const i=t.oxw().index,s=t.oxw(3);return t.KtG(s.removePlan(i))}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function J(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio "),t.qZA())}function D(a,r){if(1&a&&(t.TgZ(0,"mat-card",25)(1,"mat-card-header",26)(2,"p",3),t._uU(3),t.qZA(),t._UZ(4,"div",21),t.YNc(5,q,3,0,"button",27),t.qZA(),t.TgZ(6,"mat-card-content",28)(7,"mat-form-field",29)(8,"mat-label"),t._uU(9,"Nombre del plan:"),t.qZA(),t._UZ(10,"input",30),t.YNc(11,J,2,0,"mat-error",0),t.qZA()()()),2&a){const o=r.$implicit,n=r.index;let i,s;t.Q6J("formGroupName",n),t.xp6(3),t.hij("Plan ",n+1,""),t.xp6(2),t.Q6J("ngIf",0==(null==(i=o.get("id"))?null:i.value)),t.xp6(6),t.Q6J("ngIf",(null==(s=o.get("nombre"))?null:s.invalid)&&((null==(s=o.get("nombre"))?null:s.dirty)||(null==(s=o.get("nombre"))?null:s.touched)))}}function E(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"div",13)(1,"h2",14),t._uU(2,"Editar obra Social"),t.qZA(),t.TgZ(3,"form",15),t.NdJ("submit",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.updateObraSocial())}),t.TgZ(4,"mat-form-field",16)(5,"mat-label"),t._uU(6,"Nombre de la obra social"),t.qZA(),t._UZ(7,"input",17),t.YNc(8,U,2,0,"mat-error",0),t.qZA(),t.TgZ(9,"mat-form-field",16)(10,"mat-label"),t._uU(11,"Direcci\xf3n de la obra social"),t.qZA(),t._UZ(12,"input",18),t.YNc(13,w,2,0,"mat-error",0),t.qZA(),t._UZ(14,"mat-divider"),t.TgZ(15,"div",19)(16,"div",20)(17,"h2"),t._uU(18,"Editar Planes"),t.qZA(),t._UZ(19,"div",21),t.TgZ(20,"button",22),t.NdJ("click",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.addPlan())}),t.TgZ(21,"mat-icon"),t._uU(22,"add"),t.qZA()()(),t.YNc(23,D,12,4,"mat-card",23),t.qZA(),t.TgZ(24,"button",24),t._uU(25,"Editar Obra Social"),t.qZA()()()}if(2&a){const o=t.oxw(2);let n,i;t.Q6J("formGroup",o.obraForm),t.xp6(3),t.Q6J("formGroup",o.obraForm),t.xp6(5),t.Q6J("ngIf",(null==(n=o.obraForm.get("nombre"))?null:n.invalid)&&((null==(n=o.obraForm.get("nombre"))?null:n.dirty)||(null==(n=o.obraForm.get("nombre"))?null:n.touched))),t.xp6(5),t.Q6J("ngIf",(null==(i=o.obraForm.get("direccion"))?null:i.invalid)&&((null==(i=o.obraForm.get("direccion"))?null:i.dirty)||(null==(i=o.obraForm.get("direccion"))?null:i.touched))),t.xp6(10),t.Q6J("ngForOf",o.planes.controls),t.xp6(1),t.Q6J("disabled",!o.obraForm.valid)}}function Y(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"div",2)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title-group")(4,"h2",3),t._uU(5),t.qZA(),t._UZ(6,"img",4),t.TgZ(7,"p",5),t._uU(8),t.qZA(),t.TgZ(9,"p",5),t._uU(10,"Planes :"),t.qZA()()(),t.TgZ(11,"mat-card-content"),t.YNc(12,I,3,1,"div",6),t.qZA()(),t.TgZ(13,"div",7)(14,"button",8),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.toggleForm())}),t._uU(15),t.qZA(),t.YNc(16,N,2,0,"button",9),t.qZA(),t.YNc(17,y,1,0,"app-loading",0),t.YNc(18,E,26,6,"div",10),t.qZA()}if(2&a){const o=t.oxw();t.xp6(5),t.Oqu(o.obraSocial.nombre),t.xp6(3),t.hij("Direccion : ",o.obraSocial.direccion,""),t.xp6(4),t.Q6J("ngForOf",o.obraSocial.planes),t.xp6(2),t.Q6J("color",o.showButtons?"primary":"warn"),t.xp6(1),t.Oqu(o.showButtons?"Editar Obra Social":"Cancelar"),t.xp6(1),t.Q6J("ngIf",o.showButtons),t.xp6(1),t.Q6J("ngIf",o.sendAnimation),t.xp6(1),t.Q6J("ngIf",o.showForm&&!o.sendAnimation)}}let Q=(()=>{class a{constructor(o,n,i,s,b){this.fb=o,this.route=n,this.router=i,this.obraSocialService=s,this.notiService=b,this.animation=!1,this.sendAnimation=!1,this.showForm=!1,this.showButtons=!0}ngOnInit(){this.animation=!0,this.obraForm=this.fb.group({userId:[localStorage.getItem("user"),e.kI.required],id:["",e.kI.required],nombre:["",e.kI.required],direccion:["",e.kI.required],planes:this.fb.array([])}),this.route.paramMap.subscribe(o=>{const{params:n}=o;this.loadObraSocial(n.id)})}loadObraSocial(o){this.obraSocialService.getObraSocialById(o).subscribe(n=>{this.obraSocial=n,this.obraForm.patchValue({id:this.obraSocial.id,nombre:this.obraSocial.nombre,direccion:this.obraSocial.direccion}),this.planes=this.obraForm.get("planes"),this.setPlanes()})}updateObraSocial(){this.sendAnimation=!0,this.obraSocialService.createObraSocial(this.obraForm.value).subscribe(o=>{this.sendAnimation=!1,this.notiService.OkNotification("Obra Social actualizada con \xe9xito!!"),this.router.navigate(["obras-sociales"])},o=>{this.sendAnimation=!1,this.notiService.ErrorNotification("Ups algo sali\xf3 mal"),this.router.navigate(["obras-sociales"])})}removePlan(o){this.planes.removeAt(o)}addPlan(){const o=this.fb.group({id:[0,e.kI.required],nombre:["",e.kI.required]});this.planes.push(o)}setPlanes(){for(let o of this.obraSocial.planes){const n=this.fb.group({id:[o.id,e.kI.required],nombre:[o.nombre,e.kI.required]});this.planes.push(n)}this.animation=!1}toggleForm(){this.showForm=!this.showForm,this.showButtons=!this.showButtons}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(e.qu),t.Y36(d.gz),t.Y36(d.F0),t.Y36(p.P),t.Y36(C.g))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-obra-social-details"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","details-container",4,"ngIf"],[1,"details-container"],["mat-card-title",""],["mat-card-sm-image","","src","https://i.imgur.com/bi7ghdy.png","alt","health-plan",1,"obraSocial-img"],["mat-card-subtitle",""],["class","planes",4,"ngFor","ngForOf"],[1,"nav-buttons"],["mat-raised-button","",3,"color","click"],["mat-raised-button","","color","warn","routerLink","/obras-sociales",4,"ngIf"],["class","form",3,"formGroup",4,"ngIf"],[1,"planes"],["mat-raised-button","","color","warn","routerLink","/obras-sociales"],[1,"form",3,"formGroup"],["mat-card-title","",1,"title"],[1,"form-container",3,"formGroup","submit"],["appearance","outline"],["type","text","matInput","","formControlName","nombre","placeholder","Nombre de la obra social"],["type","text","matInput","","formControlName","direccion","placeholder","Calle y n\xfamero"],["formArrayName","planes"],[1,"planes-header"],[1,"spacer"],["mat-mini-fab","","type","button",1,"add-btn",3,"click"],["class","planes-form",3,"formGroupName",4,"ngFor","ngForOf"],["color","accent","mat-raised-button","","type","submit",1,"submit-btn",3,"disabled"],[1,"planes-form",3,"formGroupName"],[1,"plan-form-header"],["class","del-btn","mat-mini-fab","",3,"click",4,"ngIf"],[1,"plan-form-content"],["appearance","outline",1,"plan-form-field"],["matInput","","formControlName","nombre","type","text","placeholder","Nombre del Plan"],["mat-mini-fab","",1,"del-btn",3,"click"]],template:function(o,n){1&o&&(t.YNc(0,F,1,0,"app-loading",0),t.YNc(1,Y,19,8,"div",1)),2&o&&(t.Q6J("ngIf",n.animation),t.xp6(1),t.Q6J("ngIf",n.obraSocial&&!n.animation))},dependencies:[u.sg,u.O5,d.rH,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,e.x0,e.CE,c.a8,c.dn,c.dk,c.vP,c.$j,c.n5,c.C1,_.Hw,m.KE,m.hX,m.TO,O.d,g.lW,g.nh,h.Nt,x.N],styles:[".details-container[_ngcontent-%COMP%]{display:flex;width:100%;min-width:300px;max-width:600px;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}mat-card[_ngcontent-%COMP%]{width:100%;border-radius:15px;max-width:600px;margin-top:15px;background-color:#ebebff}mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:4px}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-bottom:10px}.submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:15px;margin-left:10px;align-self:center}.form-container[_ngcontent-%COMP%]{align-self:center;width:90%;display:flex;flex-direction:column;gap:15px}.title[_ngcontent-%COMP%]{margin-top:15px;align-self:center;font-size:1.5rem}.error[_ngcontent-%COMP%]{color:red}.horarios-form[_ngcontent-%COMP%]{width:90%;display:flex;flex-direction:column;align-self:center;gap:15px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.form[_ngcontent-%COMP%]{align-self:center;width:100%;display:flex;flex-direction:column;gap:15px;margin-top:15px}.nav-buttons[_ngcontent-%COMP%]{margin-top:15px;width:100%;display:flex;flex-direction:column;gap:15px}.planes-header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.planes[_ngcontent-%COMP%]{align-self:center;width:100%;display:flex;flex-direction:column;gap:15px;margin-top:15px}"]}),a})();function k(a,r){1&a&&t._UZ(0,"app-loading")}function G(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio "),t.qZA())}function B(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio "),t.qZA())}function K(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio "),t.qZA())}function H(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"mat-card",15)(1,"mat-card-header",16)(2,"h3",10),t._uU(3),t.qZA(),t._UZ(4,"div",11),t.TgZ(5,"button",17),t.NdJ("click",function(){const s=t.CHM(o).index,b=t.oxw(2);return t.KtG(b.deletePlan(s))}),t.TgZ(6,"mat-icon"),t._uU(7,"delete"),t.qZA()()(),t.TgZ(8,"mat-card-content",18)(9,"mat-form-field",19)(10,"mat-label"),t._uU(11,"Nombre del plan:"),t.qZA(),t._UZ(12,"input",20),t.YNc(13,K,2,0,"mat-error",0),t.qZA()()()}if(2&a){const o=r.$implicit,n=r.index;let i;t.Q6J("formGroupName",n),t.xp6(3),t.hij("Plan ",n+1,""),t.xp6(10),t.Q6J("ngIf",(null==(i=o.get("nombre"))?null:i.invalid)&&((null==(i=o.get("nombre"))?null:i.dirty)||(null==(i=o.get("nombre"))?null:i.touched)))}}function j(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"div",2)(1,"h2",3),t._uU(2,"Agregar obra Social"),t.qZA(),t.TgZ(3,"form",4),t.NdJ("submit",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.createObraSocial())}),t.TgZ(4,"mat-form-field",5)(5,"mat-label"),t._uU(6,"Nombre de la obra social"),t.qZA(),t._UZ(7,"input",6),t.YNc(8,G,2,0,"mat-error",0),t.qZA(),t.TgZ(9,"mat-form-field",5)(10,"mat-label"),t._uU(11,"Direcci\xf3n de la obra social"),t.qZA(),t._UZ(12,"input",7),t.YNc(13,B,2,0,"mat-error",0),t.qZA(),t._UZ(14,"mat-divider"),t.TgZ(15,"div",8)(16,"div",9)(17,"p",10),t._uU(18,"Agregar Planes"),t.qZA(),t._UZ(19,"div",11),t.TgZ(20,"button",12),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.addPlan())}),t.TgZ(21,"mat-icon"),t._uU(22,"add"),t.qZA()()(),t.YNc(23,H,14,3,"mat-card",13),t.qZA(),t.TgZ(24,"button",14),t._uU(25,"Crear Obra Social"),t.qZA()()()}if(2&a){const o=t.oxw();let n,i;t.xp6(3),t.Q6J("formGroup",o.obraForm),t.xp6(5),t.Q6J("ngIf",(null==(n=o.obraForm.get("nombre"))?null:n.invalid)&&((null==(n=o.obraForm.get("nombre"))?null:n.dirty)||(null==(n=o.obraForm.get("nombre"))?null:n.touched))),t.xp6(5),t.Q6J("ngIf",(null==(i=o.obraForm.get("direccion"))?null:i.invalid)&&((null==(i=o.obraForm.get("direccion"))?null:i.dirty)||(null==(i=o.obraForm.get("direccion"))?null:i.touched))),t.xp6(10),t.Q6J("ngForOf",o.planes.controls),t.xp6(1),t.Q6J("disabled",!o.obraForm.valid)}}let L=(()=>{class a{constructor(o,n,i,s){this.fb=o,this.router=n,this.obraSocialService=i,this.notiService=s,this.sendAnimation=!1,this.userId=localStorage.getItem("user"),this.obraForm=this.fb.group({userId:[this.userId,e.kI.required],id:[0,e.kI.required],nombre:["",e.kI.required],direccion:["",e.kI.required],planes:this.fb.array([])})}ngOnInit(){this.planes=this.obraForm.get("planes"),this.userId=this.userId?parseInt(this.userId):-1}addPlan(){const o=this.fb.group({id:[0,e.kI.required],nombre:["",e.kI.required]});this.planes.push(o)}deletePlan(o){this.planes.removeAt(o)}createObraSocial(){this.obraSocialService.createObraSocial(this.obraForm.value).subscribe(o=>{this.sendAnimation=!1,this.notiService.OkNotification("Obra Social creada con \xe9xito!!"),this.router.navigate(["obras-sociales"])},o=>{this.sendAnimation=!1,this.notiService.ErrorNotification("Ups algo sali\xf3 mal"),this.router.navigate(["obras-sociales"])})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(e.qu),t.Y36(d.F0),t.Y36(p.P),t.Y36(C.g))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-obra-social"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","obraForm",4,"ngIf"],[1,"obraForm"],["mat-card-title","",1,"title"],[1,"form-container",3,"formGroup","submit"],["appearance","outline"],["type","text","matInput","","formControlName","nombre","placeholder","Nombre de la obra social"],["type","text","matInput","","formControlName","direccion","placeholder","Calle y n\xfamero"],["formArrayName","planes"],[1,"planes-header"],["mat-card-title",""],[1,"spacer"],["mat-mini-fab","","type","button",1,"add-btn",3,"click"],["class","planes-form",3,"formGroupName",4,"ngFor","ngForOf"],["color","accent","mat-raised-button","","type","submit",1,"submit-btn",3,"disabled"],[1,"planes-form",3,"formGroupName"],[1,"plan-form-header"],["mat-mini-fab","",1,"del-btn",3,"click"],[1,"plan-form-content"],["appearance","outline",1,"plan-form-field"],["matInput","","formControlName","nombre","type","text","placeholder","Nombre del Plan"]],template:function(o,n){1&o&&(t.YNc(0,k,1,0,"app-loading",0),t.YNc(1,j,26,5,"div",1)),2&o&&(t.Q6J("ngIf",n.sendAnimation),t.xp6(1),t.Q6J("ngIf",!n.sendAnimation))},dependencies:[u.sg,u.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,e.x0,e.CE,c.a8,c.dn,c.dk,c.n5,_.Hw,m.KE,m.hX,m.TO,O.d,g.lW,g.nh,h.Nt,x.N],styles:[".submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:15px;margin-left:10px}.form-container[_ngcontent-%COMP%]{padding-left:15px;width:90%;display:flex;flex-direction:column;gap:15px}.obraForm[_ngcontent-%COMP%]{display:flex;width:100%;min-width:300px;max-width:600px;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.title[_ngcontent-%COMP%]{margin-top:15px;align-self:center;font-size:1.5rem}.error[_ngcontent-%COMP%]{color:red}.planes[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.planes-form[_ngcontent-%COMP%]{margin-top:15px}.planes-header[_ngcontent-%COMP%]{display:flex}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.plan-form-content[_ngcontent-%COMP%]{display:flex}.plan-form-field[_ngcontent-%COMP%]{width:100%}.plan-form-header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}"]}),a})();const $=[{path:"",canActivateChild:[l(5107).a],children:[{path:"",component:M},{path:"details/:id",component:Q},{path:"create",component:L}]}];let R=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.Bz.forChild($),d.Bz]}),a})();var X=l(5503),W=l(9318);let V=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,R,e.UX,e.u5,X.D,c.QW,_.Ps,m.lN,O.t,g.ot,h.c,W.s]}),a})()},5503:(v,f,l)=>{l.d(f,{D:()=>t});var u=l(6895),d=l(4650);let t=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=d.oAB({type:p}),p.\u0275inj=d.cJS({imports:[u.ez]}),p})()},2080:(v,f,l)=>{l.d(f,{C:()=>d});var u=l(4650);let d=(()=>{class t{transform(e,c){return e?c?(c=c.toLowerCase(),e.filter(_=>{for(const m in _)if(_.hasOwnProperty(m)&&"string"==typeof _[m]&&_[m].toLowerCase().includes(c))return!0;return!1})):e:[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=u.Yjl({name:"search",type:t,pure:!0}),t})()}}]);