(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{9135:function(e,n,r){e.exports=r(3240)},7102:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pgp",function(){return r(789)}])},2469:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(5893),o=r(1664),i=r(9008),c=r(1163),a=r(9135);function u(e){var n=e.children,r=e.title,o=void 0===r?"":r;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"lucko.me"+(o&&" | "+o)}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1"})]}),(0,t.jsx)(l,{}),(0,t.jsx)(d,{children:n})]})}var l=function(){return(0,t.jsxs)("div",{className:"sidebar",children:[(0,t.jsx)(s,{}),(0,t.jsx)(f,{})]})},s=function(){var e=(0,c.useRouter)(),n=(0,a.useAmp)();return(0,t.jsxs)("header",{className:"container",children:[!n&&(0,t.jsx)("img",{src:"/assets/me.jpg",alt:"Me"}),"/"===e.pathname?(0,t.jsx)("h1",{children:"lucko.me"}):(0,t.jsx)("h1",{children:(0,t.jsx)(o.default,{href:"/",children:"lucko.me"})}),(0,t.jsx)("p",{children:"Hey! \ud83d\udc4b"}),(0,t.jsx)("p",{children:"I'm lucko, a software developer from London, UK."}),(0,t.jsx)("p",{children:"This is a personal website and domain that I use for the various open-source projects I work on."})]})},f=function(){return(0,t.jsx)("footer",{className:"container",children:(0,t.jsxs)("p",{children:["\xa9 2020-21 ",(0,t.jsx)("a",{href:"https://github.com/lucko/lucko.github.io",children:"lucko"})]})})},d=function(e){var n=e.children;return(0,t.jsx)("main",{className:"content container page",children:n})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(u){o=!0,i=u}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},c=r(6273),a=r(387),u=r(7190);var l={};function s(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=a.useRouter(),f=i.default.useMemo((function(){var n=t(c.resolveHref(o,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?c.resolveHref(o,e.as):i||r}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,x=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var j=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,g=t(u.useIntersection({rootMargin:"200px"}),2),b=g[0],w=g[1],k=i.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);i.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(o,d,p,{locale:n})}),[p,d,w,y,r,o]);var _={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,a,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](r,t,{shallow:i,locale:u,scroll:a}))}(e,o,d,p,v,x,m,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);_.href=L||c.addBasePath(c.addLocale(p,E,o&&o.defaultLocale))}return i.default.cloneElement(n,_)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(u){o=!0,i=u}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),l=t(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,i=t.observer,c=t.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return o.useEffect((function(){if(!c&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var a=new Map},789:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return i},default:function(){return c}});var t=r(5893),o=r(2469),i=!0;function c(e){var n=e.pgpKey;return(0,t.jsx)(o.Z,{title:"pgp",children:(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"PGP key"}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"This is my PGP key."}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:n})}),(0,t.jsxs)("p",{children:["As a ",(0,t.jsx)("a",{href:"./lucko_pgp.asc",children:"raw file"}),":"]}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:"curl https://lucko.me/lucko_pgp.asc | gpg --import"})})]})})}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return n=7102,e(e.s=n);var n}));var n=e.O();_N_E=n}]);