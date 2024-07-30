import{A as j,B as F,C as q,D as R,E as D,F as G,G as J,K,M as Q,N as W,O,R as x,T as X,a as b,b as z,c as S,d as A,e as L,f as I,g as H,h as u,i as _,j as P,k as l,l as h,m as B,n as m,o,p as n,q as p,r as g,s as T,t as w,u as a,v as d,w as N,x as U,y as V,z as M}from"./chunk-3ESKA4HK.js";var f=(()=>{let e=class e{constructor(r){this.httpClient=r,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphaCode(r){let i=`${this.apiUrl}/alpha/${r}`;return this.httpClient.get(i).pipe(z(s=>s.length>0?s[0]:null),S(()=>b(null)))}searchCapital(r){let i=`${this.apiUrl}/capital/${r}`;return this.httpClient.get(i).pipe(S(()=>b([])))}searchCountry(r){let i=`${this.apiUrl}/name/${r}`;return this.httpClient.get(i).pipe(S(()=>b([])))}searchRegion(r){let i=`${this.apiUrl}/region/${r}`;return this.httpClient.get(i).pipe(S(()=>b([])))}};e.\u0275fac=function(i){return new(i||e)(H(J))},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ae=t=>["/countries/by",t];function ce(t,e){t&1&&(o(0,"div",2),a(1,` No hay paises
`),n())}function le(t,e){if(t&1&&(o(0,"tr")(1,"td"),a(2),n(),o(3,"td"),p(4,"img",5),n(),o(5,"td"),a(6),n(),o(7,"td"),a(8),n(),o(9,"td"),a(10),M(11,"number"),n(),o(12,"td")(13,"a",6),a(14,"Ver mas"),n()()()),t&2){let c=e.$implicit,r=e.index;l(2),d(r+1),l(2),m("src",c.flags.svg,P),l(2),d(c.name.common),l(2),d(c.capital),l(2),d(j(11,6,c.population)),l(3),m("routerLink",V(8,ae,c.cca3))}}function se(t,e){if(t&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),n(),o(5,"th"),a(6,"Bandera"),n(),o(7,"th"),a(8,"Pais"),n(),o(9,"th"),a(10,"Capital"),n(),o(11,"th"),a(12,"Poblacion"),n()()(),o(13,"tbody"),B(14,le,15,10,"tr",4),n()()),t&2){let c=T();l(14),m("ngForOf",c.countries)}}var C=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["alt","",3,"src"],[3,"routerLink"]],template:function(i,s){if(i&1&&B(0,ce,2,0,"div",1)(1,se,15,1,"ng-template",null,0,F),i&2){let v=w(2);m("ngIf",s.countries.length===0)("ngIfElse",v)}},dependencies:[q,R,W,D],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();var Z=(()=>{let e=class e{constructor(r){this.countriesService=r,this.countries=[]}searchByCapital(r){this.countriesService.searchCapital(r).subscribe(i=>{this.countries=i})}};e.\u0275fac=function(i){return new(i||e)(h(f))},e.\u0275cmp=u({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"searchBoxEmitter"],[3,"countries"]],template:function(i,s){i&1&&(o(0,"h2"),a(1,"Por capital"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("searchBoxEmitter",function(E){return s.searchByCapital(E)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),n()()),i&2&&(l(9),m("countries",s.countries))},dependencies:[x,C]});let t=e;return t})();var ee=(()=>{let e=class e{constructor(r){this.countriesService=r,this.countries=[]}searchByCountry(r){this.countriesService.searchCountry(r).subscribe(i=>{this.countries=i})}};e.\u0275fac=function(i){return new(i||e)(h(f))},e.\u0275cmp=u({type:e,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"searchBoxEmitter"],[3,"countries"]],template:function(i,s){i&1&&(o(0,"h2"),a(1,"Por pais"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("searchBoxEmitter",function(E){return s.searchByCountry(E)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),n()()),i&2&&(l(9),m("countries",s.countries))},dependencies:[x,C]});let t=e;return t})();var te=(()=>{let e=class e{constructor(r){this.countriesService=r,this.countries=[]}searchByRegion(r){this.countriesService.searchRegion(r).subscribe(i=>{this.countries=i})}};e.\u0275fac=function(i){return new(i||e)(h(f))},e.\u0275cmp=u({type:e,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por region",3,"searchBoxEmitter"],[3,"countries"]],template:function(i,s){i&1&&(o(0,"h2"),a(1,"Por region"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("searchBoxEmitter",function(E){return s.searchByRegion(E)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),n()()),i&2&&(l(9),m("countries",s.countries))},dependencies:[x,C]});let t=e;return t})();function me(t,e){t&1&&(o(0,"div",2),a(1," Espere por favor "),n())}function pe(t,e){if(t&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4),n(),p(5,"hr"),n()(),o(6,"div",3)(7,"div",5)(8,"h3"),a(9,"Bandera"),n(),p(10,"img",6),n(),o(11,"div",7)(12,"ul",8)(13,"h3"),a(14,"Informaci\xF3n"),n(),o(15,"li",9)(16,"b"),a(17,"C\xF3digo pa\xEDs:"),n(),a(18),n(),o(19,"li",9)(20,"b"),a(21,"Capital:"),n(),a(22),n(),o(23,"li",9)(24,"b"),a(25," Poblacion:"),n(),a(26),M(27,"number"),n()()()(),o(28,"div",10)(29,"div",7)(30,"h3"),a(31,"Traducciones"),n(),o(32,"div",11)(33,"span",12),a(34),n(),o(35,"span",12),a(36),n(),o(37,"span",12),a(38),n(),o(39,"span",12),a(40),n(),o(41,"span",12),a(42),n()()()()()),t&2){let c=T();l(4),U("",c.country.name.common,", ",c.country.altSpellings[1],""),l(6),m("src",c.country.flags.svg,P)("alt",c.country.name.common),l(8),U(" ",c.country.cca3,"/ ",c.country.cca2," "),l(4),N(" ",c.country.capital," "),l(4),N(" ",j(27,13,c.country.population)," "),l(8),d(c.country.translations.cym==null?null:c.country.translations.cym.common),l(2),d(c.country.translations.spa==null?null:c.country.translations.spa.common),l(2),d(c.country.translations.zho==null?null:c.country.translations.zho.common),l(2),d(c.country.translations.jpn==null?null:c.country.translations.jpn.common),l(2),d(c.country.translations.ara==null?null:c.country.translations.ara.common)}}var ie=(()=>{let e=class e{constructor(r,i,s){this.activatedRoute=r,this.router=i,this.countriesService=s}ngOnInit(){this.activatedRoute.params.pipe(A(({id:r})=>this.countriesService.searchCountryByAlphaCode(r))).subscribe(r=>(console.log(r),r?this.country=r:this.router.navigateByUrl("")))}};e.\u0275fac=function(i){return new(i||e)(h(K),h(Q),h(f))},e.\u0275cmp=u({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4","text-center"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(i,s){if(i&1&&B(0,me,2,0,"ng-template",null,0,F)(2,pe,43,15,"div",1),i&2){let v=w(1);l(2),m("ngIf",s.country)("ngIfElse",v)}},dependencies:[R,D]});let t=e;return t})();var de=[{path:"by-capital",component:Z},{path:"by-country",component:ee},{path:"by-region",component:te},{path:"by/:id",component:ie},{path:"**",redirectTo:"by-capital"}],ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[O.forChild(de),O]});let t=e;return t})();var ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[G,ne,X]});let t=e;return t})();export{ke as CountriesModule};