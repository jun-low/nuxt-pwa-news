(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("1b7833da",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";var r=n(184);n.n(r).a},186:function(t,e,n){(e=n(47)(!1)).push([t.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}img{width:100%}.card{height:100%}",""]),t.exports=e},187:function(t,e,n){"use strict";n.r(e);n(18);var r=n(2),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.next=3,n.$axios.$get("https://api.currentsapi.services/v1/latest-news?apiKey=".concat("Od7Ou8-cd3qVMY33juyoTYmfCF03q_YmTDHqWtQ48lXhjF06"));case 3:return r=e.sent,c=r.news,e.abrupt("return",{news:c});case 6:case"end":return e.stop()}}),e)})))()}},o=(n(185),n(32)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.news,(function(e,r){return n("div",{key:r,staticClass:"column is-one-quarter"},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-3by2"},[n("img",{attrs:{src:e.image,alt:e.title}})])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content title is-6"},[t._v(t._s(e.title))])])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);