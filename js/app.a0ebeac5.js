(function(t){function e(e){for(var r,o,u=e[0],a=e[1],c=e[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(r=!1)}r&&(l.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},l=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuebilling/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=a;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Raktar",{attrs:{tetelek:t.rows},on:{add:t.add,deletef:t.deletef}})],1)},l=[],o=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",[t._m(0),t._l(t.tetelek,(function(e){return n("Tetel",{key:e.title,attrs:{tetel:e},on:{deletef:t.deletef}})})),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),n("td",[n("button",{on:{click:t.add}},[t._v("Hozzáad")])])])],2)])}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Title")]),n("th",[t._v("Price")]),n("th",[t._v("Quantity")]),n("th",[t._v("Operations")]),n("th",[t._v("Összérték")])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[t._l(t.tetel,(function(e){return n("td",{key:e},[t._v(t._s(e))])})),n("td",[n("button",{on:{click:t.deletef}},[t._v("X")]),n("button",[t._v("Edit")])]),n("td",[t._v(t._s(t.tetel.quantity*t.tetel.price))])],2)},c=[],s={props:["tetel"],methods:{deletef:function(){this.$emit("deletef",this.sor.title)}}},p=s,d=n("2877"),f=Object(d["a"])(p,a,c,!1,null,null,null),v=f.exports,h={props:["tetelek"],components:{Tetel:v},data:function(){return{title:null,price:null,quantity:null}},methods:{add:function(){this.$emit("add",{title:this.title,price:this.price,quantity:this.quantity}),this.title=null,this.price=null,this.quantity=null},deletef:function(t){this.$emit("deletef",t)}}},m=h,y=Object(d["a"])(m,o,u,!1,null,null,null),b=y.exports,_={name:"App",components:{Raktar:b},data:function(){return{rows:[{title:"Kerék",price:100,quantity:12},{title:"Teleszkóp",price:1e3,quantity:300},{title:"Kormány",price:230,quantity:5},{title:"Ajtó",price:45120,quantity:321}]}},methods:{add:function(t){this.rows.push({title:t.title,price:t.price,quantity:t.quantity})},deletef:function(t){this.rows.splice(this.rows.indexOf(t.original),1)}}},g=_,w=(n("034f"),Object(d["a"])(g,i,l,!1,null,null,null)),O=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a0ebeac5.js.map