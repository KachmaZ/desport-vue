(function(e){function t(t){for(var c,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/desport-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16be":function(e,t,n){"use strict";n("6989")},"1a1c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,a){var u=Object(c["u"])("Header"),i=Object(c["u"])("router-view");return Object(c["o"])(),Object(c["c"])("div",null,[Object(c["f"])(u),Object(c["f"])(i)])}n("b0c0");var o={class:"designer-data"},a={class:"name"},u={class:"profession"},i={class:"nav-menu"},s={class:"nav-button"},b=Object(c["e"])("Главная"),l={class:"nav-button"},d=Object(c["e"])("Обо Мне"),f={class:"nav-button"},p=Object(c["e"])("Портфолио"),O={class:"nav-button"},j=Object(c["e"])("Цены и Услуги"),v={class:"nav-button"},h=Object(c["e"])("Контакты");function m(e,t,n,r,m,y){var g=Object(c["u"])("router-link");return Object(c["o"])(),Object(c["c"])("header",null,[Object(c["d"])("div",o,[Object(c["d"])("div",a,Object(c["w"])(m.name),1),Object(c["d"])("div",u,Object(c["w"])(m.profession),1)]),Object(c["d"])("div",i,[Object(c["d"])("div",s,[Object(c["f"])(g,{to:"/"},{default:Object(c["z"])((function(){return[b]})),_:1})]),Object(c["d"])("div",l,[Object(c["f"])(g,{to:"/about"},{default:Object(c["z"])((function(){return[d]})),_:1})]),Object(c["d"])("div",f,[Object(c["f"])(g,{to:"/portfolio"},{default:Object(c["z"])((function(){return[p]})),_:1})]),Object(c["d"])("div",O,[Object(c["f"])(g,{to:"/prices"},{default:Object(c["z"])((function(){return[j]})),_:1})]),Object(c["d"])("div",v,[Object(c["f"])(g,{to:"/contacts"},{default:Object(c["z"])((function(){return[h]})),_:1})])])])}var y=n("ae41"),g=n.n(y),w={data:function(){return{name:g.a.name,profession:g.a.profession}}},_=(n("7a55"),n("6b0d")),P=n.n(_);const x=P()(w,[["render",m],["__scopeId","data-v-16f5bee4"]]);var S=x,T={components:{Header:S}};n("16be");const z=P()(T,[["render",r]]);var k=z,M=n("6c02"),H={class:"home"},J=Object(c["d"])("h1",null,"This is home page",-1),A=[J];function C(e,t,n,r,o,a){return Object(c["o"])(),Object(c["c"])("div",H,A)}var I={};const q=P()(I,[["render",C]]);var B=q,D={class:"about"},E=Object(c["d"])("h1",null,"This is about page",-1),F=[E];function G(e,t){return Object(c["o"])(),Object(c["c"])("div",D,F)}const K={},L=P()(K,[["render",G]]);var N=L,Q=Object(c["d"])("h1",null,"This is portfolio page",-1),R=[Q];function U(e,t,n,r,o,a){return Object(c["o"])(),Object(c["c"])("div",null,R)}var V={};const W=P()(V,[["render",U]]);var X=W,Y=Object(c["d"])("h1",null,"This is Prices and Services page",-1),Z=[Y];function $(e,t,n,r,o,a){return Object(c["o"])(),Object(c["c"])("div",null,Z)}var ee={};const te=P()(ee,[["render",$]]);var ne=te,ce=Object(c["d"])("h1",null,"This is contacts page",-1),re=[ce];function oe(e,t,n,r,o,a){return Object(c["o"])(),Object(c["c"])("div",null,re)}var ae={};const ue=P()(ae,[["render",oe]]);var ie=ue,se=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:N},{path:"/portfolio",name:"Portfolio",component:X},{path:"/prices",name:"Prices and Services",component:ne},{path:"/contacts",name:"Contacts",component:ie}],be=Object(M["a"])({history:Object(M["b"])("/desport-vue/"),routes:se}),le=be,de=n("5502"),fe=Object(de["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["b"])(k).use(fe).use(le).mount("#app")},6989:function(e,t,n){},"7a55":function(e,t,n){"use strict";n("1a1c")},ae41:function(e,t){e.exports={name:"Вероника Молчанова",profession:"дизайнер интерьеров"}}});
//# sourceMappingURL=app.b03fe185.js.map