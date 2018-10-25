module.exports=_next_REGISTER_PAGE("/terms",function(){return{page:webpackJsonp([9],{153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=(u(n(1)),u(n(2))),a=u(n(247));function u(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(a.default),c=function(e){var t=e.html;return r.default.createElement("div",{className:l("root")},r.default.createElement("div",{className:l("inner")},r.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))};c.defaultProps={html:""};var f=c;t.default=f},561:function(e,t,n){e.exports=n(562)},562:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(18)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=n(26),u=f(n(30)),l=f(n(73)),c=f(n(153));function f(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t,n,r,o,a,u){try{var l=e[a](u),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=new a.GraphQLClient("http://localhost:3000/api",{headers:{}}),O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,f,i,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.Component),n=t,a=[{key:"render",value:function(){var e=this.props,t=e.metaData,n=e.footer,r=e.hero,a=e.body,f={title:t.h1[0],description:t.p[0]};return o.default.createElement(u.default,{page:"therapy",metaData:f,footer:n},o.default.createElement(l.default,m({},r,{icon:"/static/images/question.svg"})),o.default.createElement(c.default,a))}}],f=[{key:"getInitialProps",value:(i=r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.request('query {\n        metaData: contentModule(name: "metaDataTerms") {\n          h1\n          p\n        }\n        footer: contentModule(name: "footer") {\n          h1\n          a\n          href\n          p\n        }\n        hero: contentModule(name: "termsHero") {\n          h1\n          p\n          a\n          href\n          blockquote\n        }\n        body: contentModule(name: "termsBody") {\n          html\n        }\n      }');case 2:return t=e.sent,e.abrupt("return",s({},t));case 4:case"end":return e.stop()}},e,this)}),d=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=i.apply(e,t);function a(e){p(o,n,r,a,u,"next",e)}function u(e){p(o,n,r,a,u,"throw",e)}a(void 0)})},function(){return d.apply(this,arguments)})}],a&&y(n.prototype,a),f&&y(n,f),t}();t.default=O},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(0)),o=(f(n(1)),f(n(2))),a=f(n(152)),u=f(n(5)),l=f(n(3)),c=f(n(23));function f(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(a.default),s=function(e){var t=e.h1,n=e.p,o=e.a,a=e.href,f=e.blockquote,s=e.icon;return r.default.createElement("div",{className:i("root")},r.default.createElement("div",{className:i("inner")},r.default.createElement(l.default,{className:i("block-copy")},t&&r.default.createElement("h1",null,t[0]),n&&r.default.createElement("p",null,n[0])),r.default.createElement("div",{className:i("block-cta")},r.default.createElement(l.default,{className:i("cta-wrapper")},o&&r.default.createElement(u.default,{text:o[0],url:a[0]}),f&&r.default.createElement(c.default,{icon:s},f[0])))))};s.defaultProps={h1:null,p:null,a:null,href:[],blockquote:null,icon:null};var d=s;t.default=d}},[561]).default}});
