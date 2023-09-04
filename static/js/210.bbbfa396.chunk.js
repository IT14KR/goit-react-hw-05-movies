/*! For license information please see 210.bbbfa396.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[210],{94:function(t,n,e){e.d(n,{Hg:function(){return u},Jh:function(){return l},TP:function(){return s},z1:function(){return c},zv:function(){return p}});var r=e(861),o=e(243);function i(){i=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function p(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{p({},"")}catch(t){p=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var i=n&&n.prototype instanceof v?n:v,a=Object.create(i.prototype),u=new O(r||[]);return o(a,"_invoke",{value:_(t,e,u)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var h="suspendedStart",d="executing",x="completed",g={};function v(){}function m(){}function y(){}var b={};p(b,u,(function(){return this}));var w=Object.getPrototypeOf,Z=w&&w(w(z([])));Z&&Z!==e&&r.call(Z,u)&&(b=Z);var k=y.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(n){p(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function e(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==typeof p&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):n.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function _(n,e,r){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===x){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=E(u,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=f(n,e,r);if("normal"===s.type){if(o=r.done?x:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=x,r.method="throw",r.arg=s.arg)}}}function E(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,E(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function z(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=p(y,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,p(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},L(j.prototype),p(j.prototype,c,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),p(k,s,"Generator"),p(k,u,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=z,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return u.type="throw",u.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:z(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}var a="8aba4e3419a44727b7eb66f35fce4fa2";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?api_key=".concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"?api_key=").concat(a,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},852:function(t,n,e){e.d(n,{Dx:function(){return l},eW:function(){return p},up:function(){return s}});var r,o,i,a=e(168),u=e(87),c=e(867),s=(0,c.ZP)(u.rU)(r||(r=(0,a.Z)(["\n  text-decoration: none;\n  padding: 2px 8px;\n\n  &:hover {\n    border-radius: 5px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n"]))),p=c.ZP.ul(o||(o=(0,a.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),l=c.ZP.h2(i||(i=(0,a.Z)(["\n  margin-top: 40px;\n  margin-bottom: 0;\n"])))},210:function(t,n,e){e.r(n),e.d(n,{default:function(){return S}});var r,o,i,a,u,c,s,p,l=e(439),f=e(263),h=e(852),d=e(791),x=e(689),g=e(87),v=e(168),m=e(867),y=m.ZP.div(r||(r=(0,v.Z)([""]))),b=m.ZP.form(o||(o=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),w=m.ZP.input(i||(i=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  // border: none;\n  // outline: none;\n  padding: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),Z=m.ZP.button(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  background-color: inherit;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  margin-right: 4px;\n  margin-left: 4px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),k=(m.ZP.button(u||(u=(0,v.Z)(["\n  padding: 8px 16px;\n  margin-top: ","px;\n  border: none;\n  border-radius: 15px;\n  background-color: #3f51b5;\n  color: white;\n\n  text-decoration: none;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  cursor: pointer;\n  transition: background-color 250ms linear;\n  &:hover {\n    background-color: #303f9f;\n  }\n"])),(function(t){return t.theme.space[4]})),m.ZP.p(c||(c=(0,v.Z)(["\n  color: ",";\n  font-family: ",";\n  font-size: ",";\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin: 0px;\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.colors.black}),(function(t){return t.theme.fonts.body}),(function(t){return t.theme.fontSizes.m}),(function(t){return t.theme.space[2]}),(function(t){return t.theme.space[3]})),m.ZP.ul(s||(s=(0,v.Z)(["\n  padding-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  gap: 20px;\n  list-style: none;\n"]))),m.ZP.li(p||(p=(0,v.Z)(["\n  display: block;\n  flex-basis: calc((100% - 60px) / 4);\n  height: auto;\n  overflow: hidden;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),e(126)),L=e(184),j=function(t){var n=t.onSubmit,e=t.children;return(0,L.jsx)(b,{onSubmit:n,children:e})},_=function(){return(0,L.jsx)(w,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters, apostrophe, dash and spaces. For example moon",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."})},E=function(t){var n=t.onSubmit;return(0,L.jsx)(y,{children:(0,L.jsxs)(j,{onSubmit:n,children:[(0,L.jsx)(_,{}),(0,L.jsx)(Z,{type:"submit","aria-label":"search button",children:(0,L.jsx)(k.dVI,{})})]})})},P=e(94),S=function(){var t,n=(0,x.TH)(),e=(0,g.lr)(),r=(0,l.Z)(e,2),o=r[0],i=r[1],a=null!==(t=o.get("movieName"))&&void 0!==t?t:"",u=(0,d.useState)([]),c=(0,l.Z)(u,2),s=c[0],p=c[1],v=(0,d.useState)(!1),m=(0,l.Z)(v,2),y=m[0],b=m[1],w=(0,d.useState)(!1),Z=(0,l.Z)(w,2),k=Z[0],j=Z[1];(0,d.useEffect)((function(){""!==a&&(p([]),b(!0),(0,P.z1)(a).then((function(t){if(!t.results.length)return b(!1),j(!0),console.log("There is no movies with this request. Please, try again");j(!1),p(t.results),b(!1)})))}),[a]);return(0,L.jsxs)("main",{children:[(0,L.jsx)(E,{onSubmit:function(t){t.preventDefault();var n=t.currentTarget;i({movieName:n.elements.movieName.value}),n.reset()}}),k&&(0,L.jsx)("p",{children:"There is no movies with this request. Please, try again"}),(0,L.jsxs)(h.eW,{children:[s.map((function(t){return(0,L.jsx)("li",{children:(0,L.jsx)(h.up,{to:"/movies/".concat(t.id),state:{from:n},children:t.original_title||t.name})},t.id)})),y&&(0,L.jsx)(f.a,{})]})]})}}}]);
//# sourceMappingURL=210.bbbfa396.chunk.js.map