module.exports=_next_REGISTER_PAGE("/",function(){return{page:webpackJsonp([4],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));(r=n(1))&&r.__esModule;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),(n=!o||"object"!==a(o)&&"function"!=typeof o?u(r):o).onKeydown=n.onKeydown.bind(u(n)),n.handleSwipe=n.handleSwipe.bind(u(n)),n.incrementSlide=n.incrementSlide.bind(u(n)),n.handleUpdate=n.handleUpdate.bind(u(n)),n.isListening=!1,n.saveRef=function(e){n.el=e},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;(document.removeEventListener("keydown",this.onKeydown),document.removeEventListener("resize",this.resize),document.addEventListener("keydown",this.onKeydown),this.isListening||(this.interval=setInterval(function(){return e.incrementSlide(!0)},6500),this.isListening=!0),this.el&&"undefined"!=typeof window&&"undefined"!=typeof Hammer)&&new Hammer(this.el).on("swipe",this.handleSwipe)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeydown),document.removeEventListener("resize",this.resize),this.isListening&&this.clean()}},{key:"onKeydown",value:function(e){switch(e.keyCode){case 37:this.clean(),this.incrementSlide(!1);break;case 39:this.clean(),this.incrementSlide(!0)}}},{key:"handleSwipe",value:function(e){switch(e.offsetDirection){case 4:this.clean(),this.incrementSlide(!1);break;case 2:this.clean(),this.incrementSlide(!0)}}},{key:"incrementSlide",value:function(e){if(this.inViewport()){var t=this.props,n=t.currentSlide,r=t.count,o=n+(e?1:-1);o<0?o=r-1:o>=r&&(o=0),this.handleUpdate(o)}}},{key:"handleUpdate",value:function(e){(0,this.props.onUpdate)(e)}},{key:"clean",value:function(){clearInterval(this.interval),this.isListening=!1}},{key:"inViewport",value:function(){if(!this.el||window.document.hidden)return!1;var e=this.el.getBoundingClientRect(),t=e.top,n=e.height,r=t<.7*window.innerHeight,o=t+n>.3*window.innerHeight;return r&&o}},{key:"render",value:function(){var e=this.props.children;return o.default.createElement("div",{ref:this.saveRef},e)}}])&&i(n.prototype,r),c&&i(n,c),t}();t.default=c},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=(i(n(1)),i(n(2))),a=i(n(244));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=o.default.bind(a.default),c=function(e){var t=e.currentSlide,n=e.count,o=e.updateSlide;return r.default.createElement("div",{className:u("root")},l(Array(n).keys()).map(function(e){return r.default.createElement("div",{className:u(["item",{active:e===t}]),onClick:function(){o(e)},key:e})}))};t.default=c},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(c(n(1)),c(n(2))),a=c(n(243)),i=c(n(100)),l=c(n(101)),u=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=o.default.bind(a.default),h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==f(o)&&"function"!=typeof o?p(r):o).state={slide:0,height:60},n.updateSlide=n.updateSlide.bind(p(n)),n.resize=n.resize.bind(p(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){window.removeEventListener("resize",this.resize),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var e=0;document.querySelectorAll(".".concat(m("slide"))).forEach(function(t,n){var r=t.getBoundingClientRect().height;r>e&&(e=r)}),this.setState({height:e+60})}},{key:"updateSlide",value:function(e){this.setState({slide:e})}},{key:"render",value:function(){var e=this.props,t=e.h1,n=e.blockquote,o=e.h3,a=this.state,c=a.slide,f=a.height;return r.default.createElement("div",{className:m("root")},r.default.createElement(u.default,{className:m("inner")},t&&r.default.createElement("h2",null,t[0]),r.default.createElement(i.default,{onUpdate:this.updateSlide,currentSlide:c,count:n.length},r.default.createElement("div",{className:m("slides"),style:{height:f}},n.map(function(e,t){return r.default.createElement("div",{className:m(["slide",{active:c===t}]),key:t},r.default.createElement("div",{className:m("quote")},r.default.createElement("blockquote",{dangerouslySetInnerHTML:{__html:e}})),r.default.createElement("span",null,o[t]))}),r.default.createElement("div",{className:m("indicators")},r.default.createElement(l.default,{currentSlide:c,count:n.length,updateSlide:this.updateSlide}))))))}}])&&s(n.prototype,o),a&&s(n,a),t}();h.defaultProps={h1:null};var y=h;t.default=y},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));(r=n(1))&&r.__esModule;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),(n=!o||"object"!==a(o)&&"function"!=typeof o?u(r):o).state={percentShown:0},n.isListening=!1,n.reveal=n.reveal.bind(u(n)),n.saveRef=function(e){n.el=e},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.isListening||(window.addEventListener("scroll",this.reveal),this.isListening=!0),this.reveal()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.reveal),this.isListening=!1}},{key:"reveal",value:function(){if(this&&this.el&&this.isListening&&!window.document.hidden){var e=this.el.getBoundingClientRect().top,t=this.el.getBoundingClientRect().bottom-e,n=(window.innerHeight-e)/window.innerHeight;(n=(n-.4)*(window.innerHeight/t))<0?n=0:n>1&&(n=1),this.setState({percentShown:n})}}},{key:"render",value:function(){var e=this.props,t=e.linePath,n=e.lineLength,r=e.height,a=e.width,i=this.state.percentShown;return o.default.createElement("svg",{height:r,width:a,ref:this.saveRef},o.default.createElement("path",{"stroke-dasharray":"".concat(n,", ").concat(n),"stroke-dashoffset":n*(1-i),fill:"none",stroke:"#ca9673",strokeWidth:"1px",d:t}))}}])&&i(n.prototype,r),c&&i(n,c),t}();t.default=c},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(2)),a=i(n(69));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=o.default.bind(a.default),d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={loaded:!1},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props.url;if(t){var n=new Image;n.onload=function(){e.setState({loaded:!0})},n.src=t}}},{key:"render",value:function(){var e=this.props.url,t=this.state.loaded;return r.default.createElement("div",{className:s(["root",{loaded:t}])},r.default.createElement("img",{src:e}))}}])&&u(n.prototype,o),a&&u(n,a),t}();t.default=d},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(c(n(1)),c(n(2))),a=c(n(84)),i=c(n(3)),l=(c(n(5)),c(n(34))),u=c(n(31));function c(e){return e&&e.__esModule?e:{default:e}}var f=o.default.bind(a.default),s=function(e){var t=e.header,n=e.body,o=(e.ctaText,e.ctaUrl,e.secondaryPage),a=e.images;return r.default.createElement("div",{className:f("root"),id:"hero"},r.default.createElement("div",{className:f("inner")},r.default.createElement("div",{className:f("media")},a[0]&&r.default.createElement(l.default,a[0])),r.default.createElement("div",{className:f("content")},r.default.createElement(i.default,{className:f("copy")},r.default.createElement("h1",{className:f({secondary:o})},t),r.default.createElement("p",null,n)),r.default.createElement(i.default,{className:f("line-wrapper")},r.default.createElement("a",{onClick:function(e){!function(e){e.preventDefault();var t=document.getElementById("hero");window.scroll({behavior:"smooth",left:0,top:t.getBoundingClientRect().bottom-t.getBoundingClientRect().top})}(e)}},"Learn more"),r.default.createElement(u.default,{linePath:"M 80 0 L 80 160 Q 80 250, 0 240",lineLength:285.6,height:240,width:82})))))};s.defaultProps={secondaryPage:!1,images:[]};var d=s;t.default=d},551:function(e,t,n){e.exports=n(552)},552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(18)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=n(26),i=p(n(30)),l=p(n(45)),u=p(n(553)),c=p(n(555)),f=p(n(72)),s=p(n(150)),d=p(n(557));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=new a.GraphQLClient("http://localhost:3000/api",{headers:{}}),O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,p,m,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.Component),n=t,a=[{key:"render",value:function(){var e=this.props,t=e.metaData,n=e.footer,r=e.hero,a=e.overview,p=e.details,m=e.why,h=e.testimonials,y=e.press,v={title:t.h1[0],description:t.p[0],image:r.images[0]?r.images[0].url:null};return o.default.createElement(i.default,{page:"home",metaData:v,footer:n},o.default.createElement("div",null,o.default.createElement(l.default,{header:r.h1[0],body:r.p[0],ctaText:r.a[0],ctaUrl:r.href[0],images:r.images}),o.default.createElement(u.default,b({},a,{wideBackground:"right"})),o.default.createElement(c.default,p),o.default.createElement(f.default,m),o.default.createElement(s.default,h),y&&o.default.createElement(d.default,y)))}}],p=[{key:"getInitialProps",value:(m=r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.request('query {\n        metaData: contentModule(name: "metaDataHome") {\n          h1\n          p\n        }\n        footer: contentModule(name: "footer") {\n          h1\n          a\n          href\n          p\n        }\n        hero: contentModule(name: "homeHero") {\n          h1\n          p\n          a\n          href\n          images(width: 1200) {\n            url\n          }\n        }\n        overview: contentModule(name: "homeOverview") {\n          h1\n          h2\n          p\n          images {\n            url\n          }\n        }\n        details: contentModule(name: "homeDetails") {\n          h1\n          h2\n          p\n          a\n          href\n          images(width: 1000) {\n            url\n          }\n        }\n        why: contentModule(name: "homeWhy") {\n          h1\n          childModules {\n            h1\n            p\n            images(width: 600) {\n              url\n            }\n          }\n        }\n        testimonials: contentModule(name: "homeTestimonials") {\n          h1\n          blockquote\n          h3\n        }\n        press: contentModule(name: "press") {\n          a\n          href\n          images(width: 300) {\n            url\n          }\n        }\n      }');case 2:return t=e.sent,e.abrupt("return",h({},t));case 4:case"end":return e.stop()}},e,this)}),y=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=m.apply(e,t);function a(e){v(o,n,r,a,i,"next",e)}function i(e){v(o,n,r,a,i,"throw",e)}a(void 0)})},function(){return y.apply(this,arguments)})}],a&&w(n.prototype,a),p&&w(n,p),t}();t.default=O},553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(c(n(1)),c(n(2))),a=c(n(554)),i=c(n(3)),l=c(n(19)),u=c(n(31));function c(e){return e&&e.__esModule?e:{default:e}}var f=o.default.bind(a.default),s=function(e){var t=e.h1,n=e.h2,o=e.p,a=e.images,c=e.wideBackground;return r.default.createElement("div",{className:f("root")},r.default.createElement("div",{className:f("inner")},r.default.createElement(i.default,{className:f("header")},t&&r.default.createElement("h2",null,t[0])),r.default.createElement("div",{className:f("blocks")},r.default.createElement("div",{className:f("block-copy")},r.default.createElement(i.default,{className:f("copy")},n[0]&&r.default.createElement("p",{className:f("callout")},n[0]),o&&o.map(function(e,t){return r.default.createElement("p",{key:t},e)}))),r.default.createElement("div",{className:f("block-image")},r.default.createElement(i.default,{className:f("images")},a&&r.default.createElement(l.default,{images:a,wideBackground:c}))),r.default.createElement("div",{className:f("line-wrapper")},r.default.createElement(u.default,{linePath:"M 0 0 Q 0 80, 80 80 Q 160 80, 160 160",lineLength:256,height:162,width:162})),n[1]&&r.default.createElement("div",{className:f("lead-in")},r.default.createElement(i.default,{className:f("copy")},r.default.createElement("p",{className:f("callout")},n[1]))))))};s.defaultProps={h1:[],h2:[],p:null,images:null,wideBackground:null};var d=s;t.default=d},555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(s(n(1)),s(n(2))),a=(s(n(126)),s(n(556))),i=s(n(100)),l=s(n(101)),u=s(n(5)),c=s(n(3)),f=s(n(19));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=o.default.bind(a.default),v=["/therapy","/coaching","/classes"],b=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==d(o)&&"function"!=typeof o?h(r):o).state={slide:0,height:90},n.updateSlide=n.updateSlide.bind(h(n)),n.resize=n.resize.bind(h(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){window.removeEventListener("resize",this.resize),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var e=0;document.querySelectorAll(".".concat(y("content"))).forEach(function(t,n){var r=t.getBoundingClientRect().height;r>e&&(e=r)}),this.setState({height:e+60})}},{key:"updateSlide",value:function(e){this.setState({slide:e})}},{key:"render",value:function(){var e=this.props,t=e.h1,n=e.p,o=e.a,a=e.href,s=e.images,d=this.state,p=d.slide,m=d.height;return r.default.createElement("div",{className:y("root")},r.default.createElement("div",{className:y("inner")},r.default.createElement(i.default,{onUpdate:this.updateSlide,currentSlide:p,count:t.length},r.default.createElement("div",{className:y("slides")},r.default.createElement("div",{className:y("slide")},r.default.createElement("div",{className:y("slide__image")},r.default.createElement(c.default,{className:y("images")},r.default.createElement(f.default,{images:s}))),r.default.createElement("div",{className:y("slide__content"),style:{height:m}},t.map(function(e,t){return r.default.createElement("div",{className:y(["content",{active:p===t}]),key:t},r.default.createElement("div",{className:y("copy")},r.default.createElement("h3",null,e),r.default.createElement("p",null,n[t]),r.default.createElement(u.default,{text:o[t],url:a[t]})))}),r.default.createElement("div",{className:y("indicators")},r.default.createElement(l.default,{currentSlide:p,count:t.length,updateSlide:this.updateSlide})),t.map(function(e,t){return r.default.createElement("div",{className:y(["learn-more",{active:p===t}]),key:e},r.default.createElement("a",{href:v[t]},r.default.createElement("a",null,"Learn About ".concat(e))))})))))))}}])&&p(n.prototype,o),a&&p(n,a),t}();b.defaultProps={h1:[],p:[],a:[],href:[],images:[]};var w=b;t.default=w},557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(i(n(1)),i(n(2))),a=i(n(558));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=o.default.bind(a.default),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.a,n=e.href,o=e.images;return r.default.createElement("div",{className:s("root")},r.default.createElement("div",{className:s("inner")},o.map(function(e,o){return r.default.createElement("div",{className:s("item"),key:o},r.default.createElement("a",{className:s("image-wrapper"),href:n[o]},r.default.createElement("img",{src:e.url,alt:t[o]}),r.default.createElement("div",{className:s("caption")},"See Press")))})))}}])&&u(n.prototype,o),a&&u(n,a),t}();d.defaultProps={a:[],href:[],images:[]};var p=d;t.default=p},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=(u(n(1)),u(n(2))),a=u(n(149)),i=u(n(3)),l=u(n(19));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(a.default),f=function(e){var t=e.h1,n=e.childModules;return r.default.createElement("div",{className:c("root")},r.default.createElement("div",{className:c("inner")},r.default.createElement(i.default,{className:c("header")},r.default.createElement("h2",null,t))),r.default.createElement("div",{className:c("blocks")},n&&n.map(function(e,t){return r.default.createElement(i.default,{className:c("block"),key:t},r.default.createElement("div",{className:c("images")},e.images&&r.default.createElement(l.default,{images:e.images})),r.default.createElement("h3",null,e.h1[0]),r.default.createElement("p",null,e.p[0]))})))};t.default=f}},[551]).default}});