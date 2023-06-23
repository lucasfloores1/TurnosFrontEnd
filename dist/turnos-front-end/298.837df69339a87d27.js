"use strict";(self.webpackChunkTurnosFrontEnd=self.webpackChunkTurnosFrontEnd||[]).push([[298],{4298:(Z,g,c)=>{c.r(g),c.d(g,{ObrasSocialesModule:()=>w});var u=c(6895),d=c(3060),e=c(4650),p=c(1758),r=c(4006),l=c(3546),b=c(7392),s=c(9549),f=c(4859),_=c(4144),C=c(2080);function x(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"mat-card",8),e.NdJ("click",function(){const m=e.CHM(t).$implicit,O=e.oxw();return e.KtG(O.obraSocialDetail(m))}),e.TgZ(1,"mat-card-header")(2,"mat-card-title-group")(3,"h2",9),e._uU(4),e.qZA(),e._UZ(5,"img",10),e.TgZ(6,"p",11),e._uU(7),e.qZA()()(),e._UZ(8,"mat-card-content"),e.qZA()}if(2&o){const t=i.$implicit;e.xp6(4),e.Oqu(t.nombre),e.xp6(3),e.hij("Dir : ",t.direccion,"")}}let S=(()=>{class o{constructor(t,a){this.router=t,this.obraSocialService=a,this.searchText=""}ngOnInit(){this.obraSocialService.getObrasSociales(localStorage.getItem("user")).subscribe(t=>{this.obrasSociales=t.filter(a=>"Particular"!==a.nombre)})}obraSocialDetail(t){this.router.navigate([`obras-sociales/details/${t.id}`])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.F0),e.Y36(p.P))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-obras-sociales"]],decls:14,vars:5,consts:[[1,"grid-container"],[1,"mat-h2"],[1,"features"],["appearance","outline"],["type","text","matInput","","placeholder","Nombre, DNI, Direccion, etc...",3,"ngModel","ngModelChange"],["matSuffix",""],["mat-raised-button","","routerLink","/obras-sociales/create","color","primary"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["mat-card-title",""],["mat-card-sm-image","","src","https://i.imgur.com/j8y8arX.png","alt","institute",1,"obraSocial-img"],["mat-card-subtitle",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Obras Sociales"),e.qZA(),e.TgZ(3,"div",2)(4,"mat-form-field",3)(5,"mat-label"),e._uU(6,"Buscar"),e.qZA(),e.TgZ(7,"input",4),e.NdJ("ngModelChange",function(m){return a.searchText=m}),e.qZA(),e.TgZ(8,"mat-icon",5),e._uU(9,"search"),e.qZA()(),e.TgZ(10,"button",6),e._uU(11,"Crear Obra Social"),e.qZA()(),e.YNc(12,x,9,2,"mat-card",7),e.ALo(13,"search"),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngModel",a.searchText),e.xp6(5),e.Q6J("ngForOf",e.xi3(13,2,a.obrasSociales,a.searchText)))},dependencies:[u.sg,d.rH,r.Fj,r.JJ,r.On,l.a8,l.dn,l.dk,l.vP,l.$j,l.n5,l.C1,b.Hw,s.KE,s.hX,s.R9,f.lW,_.Nt,C.C],styles:["mat-card[_ngcontent-%COMP%]{border-radius:15px;max-width:600px;margin-top:15px;border:2px solid #4569ec}mat-card[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),o})();var h=c(4850);function v(o,i){if(1&o&&(e.TgZ(0,"div",19)(1,"p",4),e._uU(2),e.qZA()()),2&o){const t=i.$implicit;e.xp6(2),e.Oqu(t.nombre)}}function A(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Este campo es obligatorio "),e.qZA())}function T(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Este campo es obligatorio "),e.qZA())}function P(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().index,m=e.oxw(2);return e.KtG(m.removePlan(n))}),e.TgZ(1,"mat-icon"),e._uU(2,"delete"),e.qZA()()}}function F(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Este campo es obligatorio "),e.qZA())}function y(o,i){if(1&o&&(e.TgZ(0,"mat-card",20)(1,"mat-card-header",21)(2,"h3",2),e._uU(3),e.qZA(),e._UZ(4,"div",15),e.YNc(5,P,3,0,"button",22),e.qZA(),e.TgZ(6,"mat-card-content",23)(7,"mat-form-field",24)(8,"mat-label"),e._uU(9,"Nombre del plan:"),e.qZA(),e._UZ(10,"input",25),e.YNc(11,F,2,0,"mat-error",11),e.qZA()()()),2&o){const t=i.$implicit,a=i.index;let n,m;e.Q6J("formGroupName",a),e.xp6(3),e.hij("Plan ",a+1,""),e.xp6(2),e.Q6J("ngIf",0==(null==(n=t.get("id"))?null:n.value)),e.xp6(6),e.Q6J("ngIf",(null==(m=t.get("nombre"))?null:m.invalid)&&((null==(m=t.get("nombre"))?null:m.dirty)||(null==(m=t.get("nombre"))?null:m.touched)))}}function M(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",1)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title-group")(4,"h2",2),e._uU(5),e.qZA(),e._UZ(6,"img",3),e.qZA(),e.TgZ(7,"p",4),e._uU(8),e.qZA(),e.TgZ(9,"p",4),e._uU(10,"Planes :"),e.qZA(),e.YNc(11,v,3,1,"div",5),e.qZA()(),e.TgZ(12,"div",6)(13,"h2",7),e._uU(14,"Editar obra Social"),e.qZA(),e.TgZ(15,"form",8),e.NdJ("submit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.updateObraSocial())}),e.TgZ(16,"mat-form-field",9)(17,"mat-label"),e._uU(18,"Nombre de la obra social"),e.qZA(),e._UZ(19,"input",10),e.YNc(20,A,2,0,"mat-error",11),e.qZA(),e.TgZ(21,"mat-form-field",9)(22,"mat-label"),e._uU(23,"Direcci\xf3n de la obra social"),e.qZA(),e._UZ(24,"input",12),e.YNc(25,T,2,0,"mat-error",11),e.qZA(),e._UZ(26,"mat-divider"),e.TgZ(27,"div",13)(28,"div",14)(29,"p",2),e._uU(30,"Editar Planes"),e.qZA(),e._UZ(31,"div",15),e.TgZ(32,"button",16),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.addPlan())}),e.TgZ(33,"mat-icon"),e._uU(34,"add"),e.qZA()()(),e.YNc(35,y,12,4,"mat-card",17),e.qZA(),e.TgZ(36,"button",18),e._uU(37,"Editar Obra Social"),e.qZA()()()()}if(2&o){const t=e.oxw();let a,n;e.xp6(5),e.Oqu(t.obraSocial.nombre),e.xp6(3),e.hij("Direccion : ",t.obraSocial.direccion,""),e.xp6(3),e.Q6J("ngForOf",t.obraSocial.planes),e.xp6(1),e.Q6J("formGroup",t.obraForm),e.xp6(3),e.Q6J("formGroup",t.obraForm),e.xp6(5),e.Q6J("ngIf",(null==(a=t.obraForm.get("nombre"))?null:a.invalid)&&((null==(a=t.obraForm.get("nombre"))?null:a.dirty)||(null==(a=t.obraForm.get("nombre"))?null:a.touched))),e.xp6(5),e.Q6J("ngIf",(null==(n=t.obraForm.get("direccion"))?null:n.invalid)&&((null==(n=t.obraForm.get("direccion"))?null:n.dirty)||(null==(n=t.obraForm.get("direccion"))?null:n.touched))),e.xp6(10),e.Q6J("ngForOf",t.planes.controls),e.xp6(1),e.Q6J("disabled",!t.obraForm.valid)}}let U=(()=>{class o{constructor(t,a,n,m){this.fb=t,this.route=a,this.router=n,this.obraSocialService=m}ngOnInit(){this.obraForm=this.fb.group({userId:[localStorage.getItem("user"),r.kI.required],id:["",r.kI.required],nombre:["",r.kI.required],direccion:["",r.kI.required],planes:this.fb.array([])}),this.route.paramMap.subscribe(t=>{const{params:a}=t;this.loadObraSocial(a.id)})}loadObraSocial(t){this.obraSocialService.getObraSocialById(t).subscribe(a=>{this.obraSocial=a,this.obraForm.patchValue({id:this.obraSocial.id,nombre:this.obraSocial.nombre,direccion:this.obraSocial.direccion}),this.planes=this.obraForm.get("planes"),this.setPlanes()})}updateObraSocial(){this.obraSocialService.createObraSocial(this.obraForm.value).subscribe(t=>console.log(t)),this.router.navigate(["obra-social"])}removePlan(t){this.planes.removeAt(t)}addPlan(){const t=this.fb.group({id:[0,r.kI.required],nombre:["",r.kI.required]});this.planes.push(t)}setPlanes(){for(let t of this.obraSocial.planes){const a=this.fb.group({id:[t.id,r.kI.required],nombre:[t.nombre,r.kI.required]});this.planes.push(a)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(d.gz),e.Y36(d.F0),e.Y36(p.P))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-obra-social-details"]],decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["mat-card-title",""],["mat-card-sm-image","","src","https://i.imgur.com/j8y8arX.png","alt","health-plan",1,"obraSocial-img"],["mat-card-subtitle",""],["class","planes",4,"ngFor","ngForOf"],[1,"obraForm",3,"formGroup"],["mat-card-title","",1,"title"],[1,"form-container",3,"formGroup","submit"],["appearance","outline"],["type","text","matInput","","formControlName","nombre","placeholder","Nombre de la obra social"],[4,"ngIf"],["type","text","matInput","","formControlName","direccion","placeholder","Calle y n\xfamero"],["formArrayName","planes"],[1,"planes-header"],[1,"spacer"],["mat-mini-fab","","type","button",1,"add-btn",3,"click"],["class","planes-form",3,"formGroupName",4,"ngFor","ngForOf"],["color","accent","mat-raised-button","","type","submit",1,"submit-btn",3,"disabled"],[1,"planes"],[1,"planes-form",3,"formGroupName"],[1,"plan-form-header"],["class","del-btn","mat-mini-fab","",3,"click",4,"ngIf"],[1,"plan-form-content"],["appearance","outline",1,"plan-form-field"],["matInput","","formControlName","nombre","type","text","placeholder","Nombre del Plan"],["mat-mini-fab","",1,"del-btn",3,"click"]],template:function(t,a){1&t&&e.YNc(0,M,38,9,"div",0),2&t&&e.Q6J("ngIf",a.obraSocial)},dependencies:[u.sg,u.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,l.a8,l.dn,l.dk,l.vP,l.$j,l.n5,l.C1,b.Hw,s.KE,s.hX,s.TO,h.d,f.lW,f.nh,_.Nt],styles:[".details-container[_ngcontent-%COMP%]{width:95%;display:flex;flex-direction:column;gap:10px;margin:auto}.form-container[_ngcontent-%COMP%]{align-self:center;width:90%;display:flex;flex-direction:column;gap:15px}.instForm[_ngcontent-%COMP%]{display:flex;flex-direction:column}.submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:15px;margin-left:10px}.form-container[_ngcontent-%COMP%]{padding-left:15px;width:90%;display:flex;flex-direction:column;gap:15px}.obraForm[_ngcontent-%COMP%]{display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{margin-top:15px;align-self:center;font-size:1.5rem}.error[_ngcontent-%COMP%]{color:red}.planes[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.planes-form[_ngcontent-%COMP%]{margin-top:15px}.planes-header[_ngcontent-%COMP%]{display:flex}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.plan-form-content[_ngcontent-%COMP%]{display:flex}.plan-form-field[_ngcontent-%COMP%]{width:100%}.plan-form-header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}"]}),o})();function I(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Este campo es obligatorio "),e.qZA())}function q(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Este campo es obligatorio "),e.qZA())}function N(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Este campo es obligatorio "),e.qZA())}function J(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"mat-card",14)(1,"mat-card-header",15)(2,"h3",9),e._uU(3),e.qZA(),e._UZ(4,"div",10),e.TgZ(5,"button",16),e.NdJ("click",function(){const m=e.CHM(t).index,O=e.oxw();return e.KtG(O.deletePlan(m))}),e.TgZ(6,"mat-icon"),e._uU(7,"delete"),e.qZA()()(),e.TgZ(8,"mat-card-content",17)(9,"mat-form-field",18)(10,"mat-label"),e._uU(11,"Nombre del plan:"),e.qZA(),e._UZ(12,"input",19),e.YNc(13,N,2,0,"mat-error",5),e.qZA()()()}if(2&o){const t=i.$implicit,a=i.index;let n;e.Q6J("formGroupName",a),e.xp6(3),e.hij("Plan ",a+1,""),e.xp6(10),e.Q6J("ngIf",(null==(n=t.get("nombre"))?null:n.invalid)&&((null==(n=t.get("nombre"))?null:n.dirty)||(null==(n=t.get("nombre"))?null:n.touched)))}}let D=(()=>{class o{constructor(t,a,n){this.fb=t,this.router=a,this.obraSocialService=n,this.userId=localStorage.getItem("user"),this.obraForm=this.fb.group({userId:[this.userId,r.kI.required],id:[0,r.kI.required],nombre:["",r.kI.required],direccion:["",r.kI.required],planes:this.fb.array([])})}ngOnInit(){this.planes=this.obraForm.get("planes"),this.userId=this.userId?parseInt(this.userId):-1}addPlan(){const t=this.fb.group({id:[0,r.kI.required],nombre:["",r.kI.required]});this.planes.push(t)}deletePlan(t){this.planes.removeAt(t)}createObraSocial(){this.obraSocialService.createObraSocial(this.obraForm.value).subscribe(t=>console.log(t)),this.router.navigate(["home"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(d.F0),e.Y36(p.P))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-obra-social"]],decls:26,vars:5,consts:[[1,"obraForm"],["mat-card-title","",1,"title"],[1,"form-container",3,"formGroup","submit"],["appearance","outline"],["type","text","matInput","","formControlName","nombre","placeholder","Nombre de la obra social"],[4,"ngIf"],["type","text","matInput","","formControlName","direccion","placeholder","Calle y n\xfamero"],["formArrayName","planes"],[1,"planes-header"],["mat-card-title",""],[1,"spacer"],["mat-mini-fab","","type","button",1,"add-btn",3,"click"],["class","planes-form",3,"formGroupName",4,"ngFor","ngForOf"],["color","accent","mat-raised-button","","type","submit",1,"submit-btn",3,"disabled"],[1,"planes-form",3,"formGroupName"],[1,"plan-form-header"],["mat-mini-fab","",1,"del-btn",3,"click"],[1,"plan-form-content"],["appearance","outline",1,"plan-form-field"],["matInput","","formControlName","nombre","type","text","placeholder","Nombre del Plan"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Agregar obra Social"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("submit",function(){return a.createObraSocial()}),e.TgZ(4,"mat-form-field",3)(5,"mat-label"),e._uU(6,"Nombre de la obra social"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,I,2,0,"mat-error",5),e.qZA(),e.TgZ(9,"mat-form-field",3)(10,"mat-label"),e._uU(11,"Direcci\xf3n de la obra social"),e.qZA(),e._UZ(12,"input",6),e.YNc(13,q,2,0,"mat-error",5),e.qZA(),e._UZ(14,"mat-divider"),e.TgZ(15,"div",7)(16,"div",8)(17,"p",9),e._uU(18,"Agregar Planes"),e.qZA(),e._UZ(19,"div",10),e.TgZ(20,"button",11),e.NdJ("click",function(){return a.addPlan()}),e.TgZ(21,"mat-icon"),e._uU(22,"add"),e.qZA()()(),e.YNc(23,J,14,3,"mat-card",12),e.qZA(),e.TgZ(24,"button",13),e._uU(25,"Crear Obra Social"),e.qZA()()()),2&t){let n,m;e.xp6(3),e.Q6J("formGroup",a.obraForm),e.xp6(5),e.Q6J("ngIf",(null==(n=a.obraForm.get("nombre"))?null:n.invalid)&&((null==(n=a.obraForm.get("nombre"))?null:n.dirty)||(null==(n=a.obraForm.get("nombre"))?null:n.touched))),e.xp6(5),e.Q6J("ngIf",(null==(m=a.obraForm.get("direccion"))?null:m.invalid)&&((null==(m=a.obraForm.get("direccion"))?null:m.dirty)||(null==(m=a.obraForm.get("direccion"))?null:m.touched))),e.xp6(10),e.Q6J("ngForOf",a.planes.controls),e.xp6(1),e.Q6J("disabled",!a.obraForm.valid)}},dependencies:[u.sg,u.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,l.a8,l.dn,l.dk,l.n5,b.Hw,s.KE,s.hX,s.TO,h.d,f.lW,f.nh,_.Nt],styles:[".submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:15px;margin-left:10px}.form-container[_ngcontent-%COMP%]{padding-left:15px;width:90%;display:flex;flex-direction:column;gap:15px}.obraForm[_ngcontent-%COMP%]{display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{margin-top:15px;align-self:center;font-size:1.5rem}.error[_ngcontent-%COMP%]{color:red}.planes[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.planes-form[_ngcontent-%COMP%]{margin-top:15px}.planes-header[_ngcontent-%COMP%]{display:flex}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.plan-form-content[_ngcontent-%COMP%]{display:flex}.plan-form-field[_ngcontent-%COMP%]{width:100%}.plan-form-header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}"]}),o})();const k=[{path:"",canActivateChild:[c(5107).a],children:[{path:"",component:S},{path:"details/:id",component:U},{path:"create",component:D}]}];let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(k),d.Bz]}),o})();var Q=c(5503);let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,Y,r.UX,r.u5,Q.D,l.QW,b.Ps,s.lN,h.t,f.ot,_.c]}),o})()},5503:(Z,g,c)=>{c.d(g,{D:()=>e});var u=c(6895),d=c(4650);let e=(()=>{class p{}return p.\u0275fac=function(l){return new(l||p)},p.\u0275mod=d.oAB({type:p}),p.\u0275inj=d.cJS({imports:[u.ez]}),p})()},2080:(Z,g,c)=>{c.d(g,{C:()=>d});var u=c(4650);let d=(()=>{class e{transform(r,l){return r?l?(l=l.toLowerCase(),r.filter(b=>{for(const s in b)if(b.hasOwnProperty(s)&&"string"==typeof b[s]&&b[s].toLowerCase().includes(l))return!0;return!1})):r:[]}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=u.Yjl({name:"search",type:e,pure:!0}),e})()}}]);