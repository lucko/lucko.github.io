(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},2469:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(5893),i=n(1664),s=n(9008),o=n(1163);function a(e){var r=e.children,n=e.title,i=void 0===n?"":n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:"lucko.me"+(i&&" | "+i)}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap",rel:"stylesheet"})]}),(0,t.jsx)(c,{}),(0,t.jsx)(f,{children:r})]})}var c=function(){return(0,t.jsxs)("div",{className:"sidebar",children:[(0,t.jsx)(l,{}),(0,t.jsx)(u,{}),(0,t.jsx)(h,{})]})},l=function(){return(0,t.jsxs)("header",{className:"container",children:[(0,t.jsx)("img",{src:"/assets/me.jpg",alt:"Me"}),(0,t.jsx)("h1",{children:"lucko.me"})]})},u=function(){return(0,t.jsx)("nav",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(d,{name:"/home",url:"/"}),(0,t.jsx)(d,{name:"/contact",url:"/contact"}),(0,t.jsx)(d,{name:"/status",url:"/status"}),(0,t.jsx)(d,{name:"/ssh",url:"/ssh"}),(0,t.jsx)(d,{name:"/pgp",url:"/pgp"})]})})},d=function(e){var r=e.name,n=e.url;return n===(0,o.useRouter)().pathname?(0,t.jsx)("li",{className:"current-page",children:r}):(0,t.jsx)("li",{className:"other-page",children:(0,t.jsx)(i.default,{href:n,children:r})})},h=function(){var e=(new Date).getFullYear().toString().substring(2);return(0,t.jsx)("footer",{className:"container",children:(0,t.jsxs)("p",{children:["\xa9 2020-",e," ",(0,t.jsx)("a",{href:"https://github.com/lucko/lucko.github.io",children:"lucko"})]})})},f=function(e){var r=e.children;return(0,t.jsx)("main",{className:"content container page",children:r})}},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var i,s=(i=n(7294))&&i.__esModule?i:{default:i},o=n(6273),a=n(387),c=n(7190);var l={};function u(e,r,n,t){if(e&&o.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,i=a.useRouter(),d=s.default.useMemo((function(){var r=t(o.resolveHref(i,e.href,!0),2),n=r[0],s=r[1];return{href:n,as:e.as?o.resolveHref(i,e.as):s||n}}),[i,e.href,e.as]),h=d.href,f=d.as,p=e.children,j=e.replace,x=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var v=(r=s.default.Children.only(p))&&"object"===typeof r&&r.ref,g=t(c.useIntersection({rootMargin:"200px"}),2),k=g[0],y=g[1],w=s.default.useCallback((function(e){k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,k]);s.default.useEffect((function(){var e=y&&n&&o.isLocalURL(h),r="undefined"!==typeof b?b:i&&i.locale,t=l[h+"%"+f+(r?"%"+r:"")];e&&!t&&u(i,h,f,{locale:r})}),[f,h,y,b,n,i]);var I={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,i,s,a,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),r[i?"replace":"push"](n,t,{shallow:s,locale:c,scroll:a}))}(e,i,h,f,j,x,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),o.isLocalURL(h)&&u(i,h,f,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var P="undefined"!==typeof b?b:i&&i.locale,M=i&&i.isLocaleDomain&&o.getDomainLocale(f,P,i&&i.locales,i&&i.domainLocales);I.href=M||o.addBasePath(o.addLocale(f,P,i&&i.defaultLocale))}return s.default.cloneElement(r,I)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!o,c=i.useRef(),l=t(i.useState(!1),2),u=l[0],d=l[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=a.get(r);if(n)return n;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return a.set(r,n={id:r,observer:i,elements:t}),n}(n),i=t.id,s=t.observer,o=t.elements;return o.set(e,r),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[n,r,u]);return i.useEffect((function(){if(!o&&!u){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[h,u]};var i=n(7294),s=n(9311),o="undefined"!==typeof IntersectionObserver;var a=new Map},3678:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var t=n(5893),i=n(2469),s=n(1664);function o(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a,{}),(0,t.jsx)(c,{}),(0,t.jsx)(l,{})]})}var a=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"Hello! \ud83d\udc4b"}),(0,t.jsxs)("p",{children:["I'm ",(0,t.jsx)("b",{children:"lucko"}),' (or sometimes I use the nickname "Luck"). ',(0,t.jsx)("br",{}),"I'm a software developer from London, UK."]}),(0,t.jsx)("p",{children:"This is a personal website and domain that I use for the various open-source projects I work on."}),(0,t.jsxs)("p",{children:["If you'd like to contact me, you can find how to reach me on my ",(0,t.jsx)(s.default,{href:"/contact",children:"contact page"}),"."]}),(0,t.jsxs)("p",{children:["My ",(0,t.jsx)(s.default,{href:"/pgp",children:"PGP key"})," has the fingerprint ",(0,t.jsx)("code",{children:"EFA9 B3EC 5FD9 0F8B"})," and my ",(0,t.jsx)(s.default,{href:"/ssh",children:"SSH key"})," has the fingerprint ",(0,t.jsx)("code",{children:"08:64:2f:da:cf:c1:b8:64:04:bb:d3:08:08:05:11:2a"}),"."]}),(0,t.jsxs)("p",{children:["You can find me (most actively) on GitHub, ",(0,t.jsx)("a",{href:"https://github.com/lucko",children:"@lucko"}),"."]})]})},c=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"This domain"}),(0,t.jsx)("p",{children:"A number of other sites and services are available under this domain."}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://ci.lucko.me/",children:[(0,t.jsx)("b",{children:"ci."}),"lucko.me"]})," - continuous integration & downloads"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://nexus.lucko.me/",children:[(0,t.jsx)("b",{children:"nexus."}),"lucko.me"]})," - maven repository"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://paste.lucko.me/",children:[(0,t.jsx)("b",{children:"paste."}),"lucko.me"]})," - pastebin"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://bytebin.lucko.me/",children:[(0,t.jsx)("b",{children:"bytebin."}),"lucko.me"]})," - content storage web service"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://spark.lucko.me/",children:[(0,t.jsx)("b",{children:"spark."}),"lucko.me"]})," - spark website"]})]}),(0,t.jsxs)("p",{children:["I try my best to keep these services available. Most have been online and had good uptime for the past ~4 years at least. The hosting configs can be found on GitHub at ",(0,t.jsx)("a",{href:"https://github.com/lucko/infra",children:"lucko/infra"}),"."]})]})},l=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"My projects"}),(0,t.jsx)("p",{children:"I work on a number of open source projects in my spare time."}),(0,t.jsxs)(u,{repo:"lucko/LuckPerms",children:[(0,t.jsxs)("li",{children:["LuckPerms is a ",(0,t.jsx)("b",{children:"permission"})," plugin for Minecraft servers, written in Java."]}),(0,t.jsx)("li",{children:"At time of writing, it's been downloaded ~2.5M times, has ~400,000 monthly active users, and a Discord community of ~14,000 people."}),(0,t.jsxs)("li",{children:["The project also has a website, ",(0,t.jsx)("a",{href:"https://github.com/lucko/LuckPermsWeb",children:"LuckPermsWeb"}),", which includes web apps for viewing/editing/managing permission setups, written using Vue.js."]}),(0,t.jsxs)("li",{children:["More information can be found on the project homepage at ",(0,t.jsx)("a",{href:"https://luckperms.net/",children:"luckperms.net"}),"."]})]}),(0,t.jsxs)(u,{repo:"lucko/spark",children:[(0,t.jsxs)("li",{children:["spark is a ",(0,t.jsx)("b",{children:"performance profiling"})," plugin/mod for Minecraft clients, servers and proxies, written in Java."]}),(0,t.jsx)("li",{children:"At time of writing, it's been downloaded ~10M times and has ~20,000 monthly active users."}),(0,t.jsxs)("li",{children:["The project also has a website, ",(0,t.jsx)("a",{href:"https://github.com/lucko/spark-viewer",children:"spark-viewer"}),", which includes functionality for inspecting profiles as stack trees and flame graphs, written using React."]}),(0,t.jsxs)("li",{children:["More information can be found on the project homepage at ",(0,t.jsx)("a",{href:"https://spark.lucko.me/",children:"spark.lucko.me"}),"."]})]}),(0,t.jsxs)(u,{repo:"lucko/helper",children:[(0,t.jsxs)("li",{children:["helper is a ",(0,t.jsx)("b",{children:"development toolkit / library"})," for Bukkit plugin developers. It provides a number of utilities and extended APIs which help to reduce boilerplate code and offer alternative paradigms for creating content."]}),(0,t.jsx)("li",{children:"I'm no longer actively working on further API additions, but the project is still being used frequntly by various development teams, and I accept pull requests!"})]}),(0,t.jsxs)(u,{repo:"lucko/bytebin",children:[(0,t.jsxs)("li",{children:["bytebin is a fast & lightweight ",(0,t.jsx)("b",{children:"content storage"})," web service, written in Java."]}),(0,t.jsx)("li",{children:"You can think of it a bit like a pastebin, except that it accepts any kind of data (not just plain text!)"}),(0,t.jsx)("li",{children:"It has a straightforward HTTP API that supports CORS."})]}),(0,t.jsxs)(u,{repo:"lucko/paste",children:[(0,t.jsx)("li",{children:"paste is a simple web app for writing & sharing code. It's my own take on conventional pastebin sites like pastebin.com or hastebin.."}),(0,t.jsx)("li",{children:"It is written using React, react-simple-code-editor and Prism."})]}),(0,t.jsx)(u,{repo:"lucko/BungeeGuard",children:(0,t.jsxs)("li",{children:["BungeeGuard is a plugin-based ",(0,t.jsx)("b",{children:"security/firewall"})," solution for BungeeCord and Velocity proxies."]})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h3",{children:"Other"}),(0,t.jsx)("p",{children:"I've also created and made significant contributions to a number of other projects."}),(0,t.jsxs)("ul",{children:[(0,t.jsx)(d,{repo:"lucko/shadow",desc:"annotation based Java reflection library"}),(0,t.jsx)(d,{repo:"lucko/jar-relocator",desc:"program to relocate packages within .jar files"}),(0,t.jsx)(d,{repo:"lucko/commodore",desc:"brigadier API for Bukkit"}),(0,t.jsx)(d,{repo:"lucko/fabric-permissions-api",desc:"simple permissions API for Fabric"}),(0,t.jsx)(d,{repo:"lucko/ScriptController",desc:"javax.script wrapper API"}),(0,t.jsx)(d,{repo:"lucko/tapir",desc:"JavaScript plugin loader for Sponge"}),(0,t.jsx)(d,{repo:"lucko/synapse",desc:"WIP Bukkit permissions API"}),(0,t.jsx)(d,{repo:"lucko/lucko.github.io",desc:"personal website, written using Next.js"}),(0,t.jsx)(d,{repo:"KyoriPowered/adventure",desc:"user-interface library for Minecraft plugins/mods"}),(0,t.jsx)(d,{repo:"KyoriPowered/event",desc:"Java event bus library"}),(0,t.jsx)(d,{repo:"KyoriPowered/blossom",desc:"Gradle plugin for replacing tokens in source code"}),(0,t.jsx)(d,{repo:"SpongePowered/Configurate",desc:"Java configuration library"}),(0,t.jsxs)("li",{children:["... and more! You can find all of my public repositories on my ",(0,t.jsx)("a",{href:"https://github.com/lucko",children:"GitHub profile"}),"."]})]})]})]})},u=function(e){var r=e.repo,n=e.children;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h3",{children:(0,t.jsx)("a",{href:"https://github.com/"+r,children:r})}),(0,t.jsx)("ul",{children:n})]})},d=function(e){var r=e.repo,n=e.desc;return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://github.com/"+r,children:r})," (",n,")"]})}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);