(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{9135:function(e,n,r){e.exports=r(3237)},3445:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(1664),o=r(9008),c=r(1163),i=r(9135),a=r(5893);function s(e){var n=e.children,r=e.title,t=void 0===r?"":r;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:"lucko.me"+(t&&" | "+t)}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1"})]}),(0,a.jsx)(l,{}),(0,a.jsx)(d,{children:n})]})}var l=function(){return(0,a.jsxs)("div",{className:"sidebar",children:[(0,a.jsx)(u,{}),(0,a.jsx)(f,{})]})},u=function(){var e=(0,c.useRouter)(),n=(0,i.useAmp)();return(0,a.jsxs)("header",{className:"container",children:[!n&&(0,a.jsx)("img",{src:"/assets/me.jpg",alt:"Me"}),"/"===e.pathname?(0,a.jsx)("h1",{children:"lucko.me"}):(0,a.jsx)("h1",{children:(0,a.jsx)(t.default,{href:"/",children:"lucko.me"})}),(0,a.jsx)("p",{children:"Hey! \ud83d\udc4b"}),(0,a.jsx)("p",{children:"I'm lucko, a software developer from London, UK."}),(0,a.jsx)("p",{children:"This is a personal website and domain that I use for the various open-source projects I work on."})]})},f=function(){return(0,a.jsx)("footer",{className:"container",children:(0,a.jsxs)("p",{children:["\xa9 2020-21 ",(0,a.jsx)("a",{href:"https://github.com/lucko/lucko.github.io",children:"lucko"})]})})},d=function(e){var n=e.children;return(0,a.jsx)("main",{className:"content container page",children:n})}},2167:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var o,c=(o=r(7294))&&o.__esModule?o:{default:o},i=r(1063),a=r(4651),s=r(7426);var l={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=a.useRouter(),f=c.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),r=t(n,2),c=r[0],a=r[1];return{href:c,as:e.as?i.resolveHref(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,x=e.shallow,j=e.scroll,m=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var g=(n=c.default.Children.only(h))&&"object"===typeof n&&n.ref,k=s.useIntersection({rootMargin:"200px"}),y=t(k,2),_=y[0],b=y[1],w=c.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);c.default.useEffect((function(){var e=b&&r&&i.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(o,d,p,{locale:n})}),[p,d,b,m,r,o]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](r,t,{shallow:c,locale:s,scroll:a}))}(e,o,d,p,v,x,j,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof m?m:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);E.href=M||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return c.default.cloneElement(n,E)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,s=o.useRef(),l=o.useState(!1),u=t(l,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,c=t.observer,i=t.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!i&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),c=r(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},5738:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return c},default:function(){return i}});var t=r(3445),o=r(5893),c=!0;function i(e){var n=e.pgpKey;return(0,o.jsx)(t.Z,{title:"pgp",children:(0,o.jsxs)("article",{children:[(0,o.jsx)("h1",{children:"PGP key"}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"This is my PGP key."}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:n})}),(0,o.jsxs)("p",{children:["As a ",(0,o.jsx)("a",{href:"./lucko_pgp.asc",children:"raw file"}),":"]}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:"curl https://lucko.me/lucko_pgp.asc | gpg --import"})})]})})}},7102:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pgp",function(){return r(5738)}])},9008:function(e,n,r){e.exports=r(639)},1664:function(e,n,r){e.exports=r(2167)},1163:function(e,n,r){e.exports=r(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=7102,e(e.s=n);var n}));var n=e.O();_N_E=n}]);