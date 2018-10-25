module.exports=_next_REGISTER_PAGE("/about",function(){return{page:webpackJsonp([2],{127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=(u(n(1)),u(n(2))),a=u(n(197)),l=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(a.default),i=function(e){var t=e.header,n=e.subheader,r=e.ctaText,a=e.ctaAction,u=e.image;return o.default.createElement("div",{className:s("root")},o.default.createElement("div",{className:s("image-wrapper"),style:{backgroundImage:"url('".concat(u||"","')")},onClick:a}),o.default.createElement("div",{className:s("info")},o.default.createElement("h4",{className:s("header")},t),o.default.createElement("p",{className:s("subheader")},n)),o.default.createElement(l.default,{onClick:a,text:r,smaller:!0}))};i.defaultProps={header:"",subheader:"",ctaText:"Bio",ctaAction:null,image:null};var c=i;t.default=c},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=(u(n(1)),u(n(2))),a=u(n(198)),l=u(n(129));u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(a.default),i=function(e){var t=e.isOpen,n=e.closeModal,r=e.profile,a=e.title,u=(e.ctaText,e.ctaUrl,r.h1),i=r.h2,c=r.h3,f=r.p,d=r.images;return o.default.createElement(l.default,{isOpen:t,closeModal:n},o.default.createElement("div",{className:s("title")},o.default.createElement("h3",null,a)),o.default.createElement("div",{className:s("inner")},o.default.createElement("div",{className:s("overview")},o.default.createElement("div",{className:s("copy")},o.default.createElement("div",{className:s("image-wrapper"),style:{backgroundImage:"url('".concat(d?d[0].url:"","')")}}),o.default.createElement("h3",{className:s("header")},u?u[0]:""),o.default.createElement("p",{className:s("subheader")},i?i[0]:""))),o.default.createElement("div",{className:s("details")},o.default.createElement("div",{className:s("copy")},c&&c.map(function(e,t){return o.default.createElement("div",{className:s("item"),key:t},o.default.createElement("h5",null,e),o.default.createElement("p",{dangerouslySetInnerHTML:{__html:f[t]||""}}))})))))};t.default=i},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(130)),a=(u(n(1)),u(n(2))),l=u(n(199));function u(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(l.default),i=function(e){var t=e.children,n=e.isOpen,a=e.closeModal;return o.default.createElement("div",null,o.default.createElement(r.default,{isOpen:n,onRequestClose:a,className:{base:s("modal"),afterOpen:s("modal_after-open"),beforeClose:s("modal_before-close")},style:{overlay:{background:"transparent"}}},o.default.createElement("div",{className:s("inner")},t,a&&o.default.createElement("button",{className:s("close-button"),onClick:a},"×"))))};t.default=i},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(131),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),l=m(a),u=m(n(64)),s=m(n(1)),i=m(n(132)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(68)),f=n(44),d=m(f),p=n(125);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",b=void 0!==u.default.createPortal,O=b?u.default.createPortal:u.default.unstable_renderSubtreeIntoContainer;function w(e){return e()}var C=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.removePortal=function(){!b&&u.default.unmountComponentAtNode(r.node),w(r.props.parentSelector).removeChild(r.node)},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=O(r,l.default.createElement(i.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},h(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(b||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(f.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=n.prevParent,u=n.nextParent;u!==l&&(l.removeChild(this.node),u.appendChild(this.node)),(e.isOpen||r)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&b?(!this.node&&b&&(this.node=document.createElement("div")),O(l.default.createElement(i.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}();C.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.instanceOf(d.default),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func},C.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:y,ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=h(l),s=h(n(1)),i=m(n(133)),c=h(n(134)),f=m(n(68)),d=m(n(137)),p=h(n(44));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=9,b=27,O=0,w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;d.remove(document.body,a),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&O>0&&0===(O-=1)&&f.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(),i.teardownScopedFocus()):i.popWithoutFocus())},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen()}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){e.keyCode===y&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&e.keyCode===b&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":r(t))?t:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"==typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce(function(n,o){return n[e+"-"+o]=t[o],n},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(O+=1,f.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayClassName,r=e.defaultStyles,a=t?{}:r.content,l=n?{}:r.overlay;return this.shouldBeClosed()?null:u.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",n),style:o({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown,"aria-modal":"true"},u.default.createElement("div",o({ref:this.setContentRef,style:o({},a,this.props.style.content),className:this.buildClassName("content",t),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{})),this.props.children))}}]),t}();w.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},w.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.instanceOf(p.default),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,testId:s.default.string},t.default=w,e.exports=t.default},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=i,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==l.length&&(e=l.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){u=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){u=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",c))};var o,r=n(67),a=(o=r)&&o.__esModule?o:{default:o};var l=[],u=null,s=!1;function i(){s=!0}function c(){if(s){if(s=!1,!u)return;setTimeout(function(){u.contains(document.activeElement)||((0,a.default)(u)[0]||u).focus()},0)}}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o,r=t.shiftKey,l=n[0],u=n[n.length-1];if(e===document.activeElement){if(!r)return;o=u}u!==document.activeElement||r||(o=l);l===document.activeElement&&r&&(o=u);if(o)return t.preventDefault(),void o.focus();var s=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==s||"Chrome"==s[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var i=n.indexOf(document.activeElement);i>-1&&(i+=r?-1:1);t.preventDefault(),n[i].focus()};var o,r=n(67),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},135:function(e,t,n){"use strict";var o=function(){};e.exports=o},136:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){};var o={},r={};t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach(function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)});var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach(function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)});var n,a}},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=(c(n(1)),c(n(2))),a=c(n(66)),l=c(n(5)),u=c(n(23)),s=c(n(3)),i=c(n(19));function c(e){return e&&e.__esModule?e:{default:e}}var f=r.default.bind(a.default),d=function(e){var t=e.h1,n=e.p,r=e.a,a=e.href,c=e.blockquote,d=e.images,p=e.inverted,m=e.icon,h=e.wideBackground,v=e.imageRatio;return o.default.createElement("div",{className:f(["root",{inverted:p}])},o.default.createElement("div",{className:f("inner")},o.default.createElement("div",{className:f("block-image")},o.default.createElement(s.default,{className:f("images")},d&&o.default.createElement(i.default,{images:d,wideBackground:h,imageRatio:v}))),o.default.createElement("div",{className:f("block-copy")},o.default.createElement(s.default,{className:f("copy")},t&&o.default.createElement("h2",null,t[0]),n&&n.map(function(e,t){return o.default.createElement("p",{key:t},e)}),r&&a&&o.default.createElement(l.default,{text:r[0],url:a[0]}),c&&o.default.createElement(u.default,{icon:m},c[0])))))};d.defaultProps={h1:null,p:null,a:null,href:null,blockquote:null,images:null,inverted:!1,icon:null,wideBackground:null,imageRatio:null};var p=d;t.default=p},330:function(e,t,n){e.exports=n(331)},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(18)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(0)),a=n(26),l=i(n(30)),u=i(n(33)),s=i(n(369));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t,n,o,r,a,l){try{var u=e[a](l),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(o,r)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=new a.GraphQLClient("http://localhost:3000/api",{headers:{}}),O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i,c,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,a=[{key:"render",value:function(){var e=this.props,t=e.metaData,n=e.footer,o=e.section1,a=e.section2,i=e.section3,c=e.section4,f=e.team,d={title:t.h1[0],description:t.p[0]};return r.default.createElement(l.default,{page:"about",metaData:d,footer:n},r.default.createElement(u.default,m({},o,{inverted:!0,wideBackground:"left"})),r.default.createElement(u.default,a),r.default.createElement(u.default,m({},i,{inverted:!0})),r.default.createElement(u.default,m({},c,{imageRatio:138.2})),r.default.createElement(s.default,f))}}],i=[{key:"getInitialProps",value:(c=o.default.mark(function e(){var t;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.request('query {\n        metaData: contentModule(name: "metaDataAbout") {\n          h1\n          p\n        }\n        footer: contentModule(name: "footer") {\n          h1\n          a\n          href\n          p\n        }\n        section1: contentModule(name: "aboutSection1") {\n          h1\n          p\n          images {\n            url\n          }\n        }\n        section2: contentModule(name: "aboutSection2") {\n          h1\n          p\n          images(width: 1000) {\n            url\n          }\n        }\n        section3: contentModule(name: "aboutSection3") {\n          h1\n          p\n          images(width: 1000) {\n            url\n          }\n        }\n        section4: contentModule(name: "aboutSection4") {\n          h1\n          p\n          images {\n            url\n          }\n        }\n        team: contentModule(name: "team") {\n          h1\n          childModules {\n            h1\n            h2\n            h3\n            p\n            images(width: 400) {\n              url\n            }\n          }\n        }\n      }');case 2:return t=e.sent,e.abrupt("return",f({},t));case 4:case"end":return e.stop()}},e,this)}),d=function(){var e=this,t=arguments;return new Promise(function(n,o){var r=c.apply(e,t);function a(e){p(r,n,o,a,l,"next",e)}function l(e){p(r,n,o,a,l,"throw",e)}a(void 0)})},function(){return d.apply(this,arguments)})}],a&&h(n.prototype,a),i&&h(n,i),t}();t.default=O},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(0)),r=i(n(2)),a=(i(n(1)),i(n(370))),l=i(n(127)),u=i(n(128)),s=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=r.default.bind(a.default),h=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==c(r)&&"function"!=typeof r?p(o):r).state={showModal:null},n.handleClick=n.handleClick.bind(p(n)),n.closeModal=n.closeModal.bind(p(n)),n.onKeydown=n.onKeydown.bind(p(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){document.removeEventListener("keydown",this.onKeydown),document.addEventListener("keydown",this.onKeydown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeydown)}},{key:"onKeydown",value:function(e){switch(e.keyCode){case 27:this.closeModal()}}},{key:"handleClick",value:function(e){this.setState({showModal:e})}},{key:"closeModal",value:function(e){e&&e.preventDefault(),this.setState({showModal:null})}},{key:"render",value:function(){var e=this,t=this.props,n=t.h1,r=t.childModules,a=this.state.showModal;return o.default.createElement("div",{className:m("root")},o.default.createElement("div",{className:m("inner")},o.default.createElement(s.default,{className:m("header")},n&&o.default.createElement("h2",null,n[0])),o.default.createElement("div",{className:m("list")},r.map(function(t,n){return o.default.createElement(s.default,{className:m("item"),hey:t.name},o.default.createElement(l.default,{header:t.h1?t.h1[0]:"",subheader:t.h2?t.h2[0]:"",image:t.images&&t.images[0]?t.images[0].url:"",ctaAction:function(t){t.preventDefault(),e.handleClick(n)}}))}))),r&&r.map(function(t,n){return o.default.createElement(u.default,{isOpen:a===n,closeModal:e.closeModal,profile:t,title:"Our Team",key:n})}))}}])&&f(n.prototype,r),a&&f(n,a),t}();h.defaultProps={h1:null,childModules:[]};var v=h;t.default=v},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,r=n(136);var a=((o=r)&&o.__esModule?o:{default:o}).default,l=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=l},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow"):"none"==n.getPropertyValue("display")}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=s,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var n=document.querySelectorAll(t);s(n,t),t="length"in n?n[0]:n}return u=t||u},t.validateElement=i,t.hide=function(e){i(e)&&(e||u).setAttribute("aria-hidden","true")},t.show=function(e){i(e)&&(e||u).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){u=null},t.resetForTesting=function(){u=null};var o,r=n(135),a=(o=r)&&o.__esModule?o:{default:o},l=n(44);var u=null;function s(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){return!(!e&&!u)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}}},[330]).default}});