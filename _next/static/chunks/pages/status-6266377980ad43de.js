(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{814:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status",function(){return n(6323)}])},2469:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),a=n(1664),s=n(9008),i=n(1163);function o(e){var t=e.children,n=e.title,a=void 0===n?"":n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"lucko.me"+(a&&" | "+a)}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap",rel:"stylesheet"})]}),(0,r.jsx)(c,{}),(0,r.jsx)(h,{children:t})]})}var c=function(){return(0,r.jsxs)("div",{className:"sidebar",children:[(0,r.jsx)(u,{}),(0,r.jsx)(l,{}),(0,r.jsx)(d,{})]})},u=function(){return(0,r.jsxs)("header",{className:"container",children:[(0,r.jsx)("img",{src:"/assets/me.jpg",alt:"Me"}),(0,r.jsx)("h1",{children:"lucko.me"})]})},l=function(){return(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(f,{name:"/home",url:"/"}),(0,r.jsx)(f,{name:"/contact",url:"/contact"}),(0,r.jsx)(f,{name:"/status",url:"/status"}),(0,r.jsx)(f,{name:"/ssh",url:"/ssh"}),(0,r.jsx)(f,{name:"/pgp",url:"/pgp"})]})})},f=function(e){var t=e.name,n=e.url;return n===(0,i.useRouter)().pathname?(0,r.jsx)("li",{className:"current-page",children:t}):(0,r.jsx)("li",{className:"other-page",children:(0,r.jsx)(a.default,{href:n,children:t})})},d=function(){var e=(new Date).getFullYear().toString().substring(2);return(0,r.jsx)("footer",{className:"container",children:(0,r.jsxs)("p",{children:["\xa9 2020-",e," ",(0,r.jsx)("a",{href:"https://github.com/lucko/lucko.github.io",children:"lucko"})]})})},h=function(e){var t=e.children;return(0,r.jsx)("main",{className:"content container page",children:t})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,s=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),o=n(387),c=n(7190);var u={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=o.useRouter(),f=s.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):s||n}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,x=e.shallow,m=e.scroll,j=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var y=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,b=r(c.useIntersection({rootMargin:"200px"}),2),g=b[0],w=b[1],k=s.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);s.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof j?j:a&&a.locale,r=u[d+"%"+h+(t?"%"+t:"")];e&&!r&&l(a,d,h,{locale:t})}),[h,d,w,j,n,a]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:s,locale:c,scroll:o}))}(e,a,d,h,v,x,m,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&l(a,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof j?j:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(h,_,a&&a.locales,a&&a.domainLocales);E.href=L||i.addBasePath(i.addLocale(h,_,a&&a.defaultLocale))}return s.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),u=r(a.useState(!1),2),l=u[0],f=u[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,s=r.observer,i=r.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return a.useEffect((function(){if(!i&&!l){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[l]),[d,l]};var a=n(7294),s=n(9311),i="undefined"!==typeof IntersectionObserver;var o=new Map},6323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5666),a=n.n(r),s=n(5893),i=n(7294),o=n(2469);function c(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){c(s,r,a,i,o,"next",e)}function o(e){c(s,r,a,i,o,"throw",e)}i(void 0)}))}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(){var e=(0,i.useState)(),t=e[0],n=e[1];return(0,i.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(e){n(e)}))}),[n]),(0,s.jsx)(o.Z,{title:"status",children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h1",{children:"Status"}),t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"The table below shows the status of the self-hosted services I host on this domain."}),(0,s.jsx)("p",{children:"Most websites (including this one) are static sites which are hosted using a mixture of Netlify, GitHub or CloudFlare Pages, so their statuses will depend on their respective provider and therefore are not tracked here."}),(0,s.jsx)("p",{}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Service"}),(0,s.jsx)("th",{children:"Status"})]})}),(0,s.jsx)("tbody",{children:Object.entries(t).map((function(e,t){var n=l(e,2),r=n[0],a=n[1];return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d,{id:r})}),(0,s.jsx)("td",{children:a})]},t)}))})]}),(0,s.jsx)("p",{children:"The availability of each self-service in the table above is polled from the CloudFlare Health Check API via a worker on CF's edge."})]}):(0,s.jsx)("p",{children:"Loading..."})]})})}var d=function(e){var t=e.id,n=l({jenkins:["Jenkins","ci.lucko.me"],nexus:["Nexus","nexus.lucko.me"],bytebin:["Bytebin","bytebin.lucko.me"],bytesocks:["Bytesocks","luckperms.net - editor websocket service"],"lp-metadata":["LuckPerms Metadata API","metadata.luckperms.net"]}[t]||[],2),r=n[0],a=n[1];return r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:r}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{style:{color:"gray"},children:a})]}):(0,s.jsx)(s.Fragment,{children:t})};function h(){return(h=u(a().mark((function e(){var t,n,r,s,i,o,c,u,f,d,h;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://lucko.me/api/status");case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return",{api:"\u26a0\ufe0f returned status "+t.status});case 5:return e.next=7,t.json();case 7:for(n=e.sent,r={},s=!0,i=!1,o=void 0,e.prev=10,c=Object.entries(n)[Symbol.iterator]();!(s=(u=c.next()).done);s=!0)f=l(u.value,2),d=f[0],(h=f[1]).ok?r[d]="\u2705":r[d]="\u26a0\ufe0f "+h.msg;e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),i=!0,o=e.t0;case 18:e.prev=18,e.prev=19,s||null==c.return||c.return();case 21:if(e.prev=21,!i){e.next=24;break}throw o;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return e.abrupt("return",r);case 27:case"end":return e.stop()}}),e,null,[[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=814,e(e.s=t);var t}));var t=e.O();_N_E=t}]);