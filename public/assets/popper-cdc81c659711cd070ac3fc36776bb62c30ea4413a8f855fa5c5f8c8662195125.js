!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function t(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},pe))}}function a(e){return e&&"[object Function]"==={}.toString.call(e)}function y(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function c(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function m(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=y(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:m(c(e))}function g(e){return 11===e?de:10===e?ce:de||ce}function b(e){if(!e)return document.documentElement;for(var t=g(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===y(n,"position")?b(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||b(e.firstElementChild)===e)}function p(e){return null!==e.parentNode?p(e.parentNode):e}function h(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var f=i.commonAncestorContainer;if(e!==f&&t!==f||o.contains(r))return s(f)?f:b(f);var a=p(e);return a.host?h(a.host,t):h(e,p(t).host)}function d(e,t){var n="top"===(1<arguments.length&&t!==undefined?arguments[1]:"top")?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"!==o&&"HTML"!==o)return e[n];var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[n]}function v(e,t,n){var o=2<arguments.length&&n!==undefined&&arguments[2],r=d(t,"top"),i=d(t,"left"),f=o?-1:1;return e.top+=r*f,e.bottom+=r*f,e.left+=i*f,e.right+=i*f,e}function w(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function o(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],g(10)?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function E(){var e=document.body,t=document.documentElement,n=g(10)&&getComputedStyle(t);return{height:o("Height",e,t,n),width:o("Width",e,t,n)}}function x(e){return ve({},e,{right:e.left+e.width,bottom:e.top+e.height})}function O(e){var t={};try{if(g(10)){t=e.getBoundingClientRect();var n=d(e,"top"),o=d(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(u){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?E():{},f=i.width||e.clientWidth||r.right-r.left,a=i.height||e.clientHeight||r.bottom-r.top,s=e.offsetWidth-f,p=e.offsetHeight-a;if(s||p){var l=y(e);s-=w(l,"x"),p-=w(l,"y"),r.width-=s,r.height-=p}return x(r)}function L(e,t,n){var o=2<arguments.length&&n!==undefined&&arguments[2],r=g(10),i="HTML"===t.nodeName,f=O(e),a=O(t),s=m(e),p=y(t),l=parseFloat(p.borderTopWidth,10),u=parseFloat(p.borderLeftWidth,10);o&&"HTML"===t.nodeName&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=x({top:f.top-a.top-l,left:f.left-a.left-u,width:f.width,height:f.height});if(d.marginTop=0,d.marginLeft=0,!r&&i){var c=parseFloat(p.marginTop,10),h=parseFloat(p.marginLeft,10);d.top-=l-c,d.bottom-=l-c,d.left-=u-h,d.right-=u-h,d.marginTop=c,d.marginLeft=h}return(r&&!o?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(d=v(d,t)),d}function T(e,t){var n=1<arguments.length&&t!==undefined&&arguments[1],o=e.ownerDocument.documentElement,r=L(e,o),i=Math.max(o.clientWidth,window.innerWidth||0),f=Math.max(o.clientHeight,window.innerHeight||0),a=n?0:d(o),s=n?0:d(o,"left");return x({top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:i,height:f})}function M(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===y(e,"position")||M(c(e)))}function C(e){if(!e||!e.parentElement||g())return document.documentElement;for(var t=e.parentElement;t&&"none"===y(t,"transform");)t=t.parentElement;return t||document.documentElement}function N(e,t,n,o,r){var i=4<arguments.length&&r!==undefined&&arguments[4],f={top:0,left:0},a=i?C(e):h(e,t);if("viewport"===o)f=T(a,i);else{var s=void 0;"scrollParent"===o?"BODY"===(s=m(c(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===o?e.ownerDocument.documentElement:o;var p=L(s,a,i);if("HTML"!==s.nodeName||M(a))f=p;else{var l=E(),u=l.height,d=l.width;f.top+=p.top-p.marginTop,f.bottom=u+p.top,f.left+=p.left-p.marginLeft,f.right=d+p.left}}return f.left+=n,f.top+=n,f.right-=n,f.bottom-=n,f}function F(e){return e.width*e.height}function l(e,t,o,n,r,i){var f=5<arguments.length&&i!==undefined?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=N(o,n,f,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},p=Object.keys(s).map(function(e){return ve({key:e},s[e],{area:F(s[e])})}).sort(function(e,t){return t.area-e.area}),l=p.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),u=0<l.length?l[0].key:p[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function u(e,t,n,o){var r=3<arguments.length&&o!==undefined?arguments[3]:null;return L(n,r?C(t):h(t,n),r)}function D(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function k(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,n){n=n.split("-")[0];var o=D(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",a=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[f]=t[f]+t[s]/2-o[s]/2,r[a]=n===a?t[a]-o[p]:t[k(a)],r}function W(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function r(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=W(e,function(e){return e[t]===n});return e.indexOf(o)}function P(e,n,t){return(t===undefined?e:e.slice(0,r(e,"name",t))).forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e["function"]||e.fn;e.enabled&&a(t)&&(n.offsets.popper=x(n.offsets.popper),n.offsets.reference=x(n.offsets.reference),n=t(n,e))}),n}function i(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=u(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=l(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function n(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function H(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if("undefined"!=typeof document.body.style[i])return i}return null}function A(){return this.state.isDestroyed=!0,n(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[H("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function f(e){var t=e.ownerDocument;return t?t.defaultView:window}function B(e,t,n,o){var r="BODY"===e.nodeName,i=r?e.ownerDocument.defaultView:e;i.addEventListener(t,n,{passive:!0}),r||B(m(i.parentNode),t,n,o),o.push(i)}function j(e,t,n,o){n.updateBound=o,f(e).addEventListener("resize",n.updateBound,{passive:!0});var r=m(e);return B(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function I(){this.state.eventsEnabled||(this.state=j(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return f(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function q(n,o){Object.keys(o).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&Y(o[e])&&(t="px"),n.style[e]=o[e]+t})}function K(t,n){Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})}function z(e){return q(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&q(e.arrowElement,e.arrowStyles),e}function G(e,t,n,o,r){var i=u(r,t,e,n.positionFixed),f=l(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),q(t,{position:n.positionFixed?"fixed":"absolute"}),n}function V(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=W(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;i!==undefined&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f=i!==undefined?i:t.gpuAcceleration,a=O(b(e.instance.popper)),s={position:r.position},p={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},l="bottom"===n?"top":"bottom",u="right"===o?"left":"right",d=H("transform"),c=void 0,h=void 0;if(h="bottom"===l?-a.height+p.bottom:p.top,c="right"===u?-a.width+p.right:p.left,f&&d)s[d]="translate3d("+c+"px, "+h+"px, 0)",s[l]=0,s[u]=0,s.willChange="transform";else{var m="bottom"===l?-1:1,g="right"===u?-1:1;s[l]=h*m,s[u]=c*g,s.willChange=l+", "+u}var v={"x-placement":e.placement};return e.attributes=ve({},v,e.attributes),e.styles=ve({},s,e.styles),e.arrowStyles=ve({},e.offsets.arrow,e.arrowStyles),e}function _(e,t,n){var o=W(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",f="`"+n+"`";console.warn(f+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function X(e,t){var n;if(!_(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,f=i.popper,a=i.reference,s=-1!==["left","right"].indexOf(r),p=s?"height":"width",l=s?"Top":"Left",u=l.toLowerCase(),d=s?"left":"top",c=s?"bottom":"right",h=D(o)[p];a[c]-h<f[u]&&(e.offsets.popper[u]-=f[u]-(a[c]-h)),a[u]+h>f[c]&&(e.offsets.popper[u]+=a[u]+h-f[c]),e.offsets.popper=x(e.offsets.popper);var m=a[u]+a[p]/2-h/2,g=y(e.instance.popper),v=parseFloat(g["margin"+l],10),b=parseFloat(g["border"+l+"Width"],10),w=m-e.offsets.popper[u]-v-b;return w=Math.max(Math.min(f[p]-h,w),0),e.arrowElement=o,e.offsets.arrow=(ge(n={},u,Math.round(w)),ge(n,d,""),n),e}function J(e){return"end"===e?"start":"start"===e?"end":e}function Q(e,t){var n=1<arguments.length&&t!==undefined&&arguments[1],o=we.indexOf(e),r=we.slice(o+1).concat(we.slice(0,o));return n?r.reverse():r}function Z(c,h){if(n(c.instance.modifiers,"inner"))return c;if(c.flipped&&c.placement===c.originalPlacement)return c;var m=N(c.instance.popper,c.instance.reference,h.padding,h.boundariesElement,c.positionFixed),g=c.placement.split("-")[0],v=k(g),b=c.placement.split("-")[1]||"",w=[];switch(h.behavior){case ye.FLIP:w=[g,v];break;case ye.CLOCKWISE:w=Q(g);break;case ye.COUNTERCLOCKWISE:w=Q(g,!0);break;default:w=h.behavior}return w.forEach(function(e,t){if(g!==e||w.length===t+1)return c;g=c.placement.split("-")[0],v=k(g);var n=c.offsets.popper,o=c.offsets.reference,r=Math.floor,i="left"===g&&r(n.right)>r(o.left)||"right"===g&&r(n.left)<r(o.right)||"top"===g&&r(n.bottom)>r(o.top)||"bottom"===g&&r(n.top)<r(o.bottom),f=r(n.left)<r(m.left),a=r(n.right)>r(m.right),s=r(n.top)<r(m.top),p=r(n.bottom)>r(m.bottom),l="left"===g&&f||"right"===g&&a||"top"===g&&s||"bottom"===g&&p,u=-1!==["top","bottom"].indexOf(g),d=!!h.flipVariations&&(u&&"start"===b&&f||u&&"end"===b&&a||!u&&"start"===b&&s||!u&&"end"===b&&p);(i||l||d)&&(c.flipped=!0,(i||l)&&(g=w[t+1]),d&&(b=J(b)),c.placement=g+(b?"-"+b:""),c.offsets.popper=ve({},c.offsets.popper,S(c.instance.popper,c.offsets.reference,c.placement)),c=P(c.instance.modifiers,c,"flip"))}),c}function $(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,f=-1!==["top","bottom"].indexOf(r),a=f?"right":"bottom",s=f?"left":"top",p=f?"width":"height";return n[a]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[a])&&(e.offsets.popper[s]=i(o[a])),e}function ee(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2];if(!i)return e;if(0===f.indexOf("%")){var a=void 0;switch(f){case"%p":a=n;break;case"%":case"%r":default:a=o}return x(a)[t]/100*i}if("vh"!==f&&"vw"!==f)return i;return("vh"===f?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}function te(e,r,i,t){var f=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),o=n.indexOf(W(n,function(e){return-1!==e.search(/,|\s/)}));n[o]&&-1===n[o].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==o?[n.slice(0,o).concat([n[o].split(s)[0]]),[n[o].split(s)[1]].concat(n.slice(o+1))]:[n];return(p=p.map(function(e,t){var n=(1===t?!a:a)?"height":"width",o=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,o=!0,e):o?(e[e.length-1]+=t,o=!1,e):e.concat(t)},[]).map(function(e){return ee(e,n,r,i)})})).forEach(function(n,o){n.forEach(function(e,t){Y(e)&&(f[o]+=e*("-"===n[t-1]?-1:1))})}),f}function ne(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,f=r.reference,a=o.split("-")[0],s=void 0;return s=Y(+n)?[+n,0]:te(n,i,f,a),"left"===a?(i.top+=s[0],i.left-=s[1]):"right"===a?(i.top+=s[0],i.left+=s[1]):"top"===a?(i.left+=s[0],i.top-=s[1]):"bottom"===a&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e}function oe(e,o){var t=o.boundariesElement||b(e.instance.popper);e.instance.reference===t&&(t=b(t));var n=H("transform"),r=e.instance.popper.style,i=r.top,f=r.left,a=r[n];r.top="",r.left="",r[n]="";var s=N(e.instance.popper,e.instance.reference,o.padding,t,e.positionFixed);r.top=i,r.left=f,r[n]=a,o.boundaries=s;var p=o.priority,l=e.offsets.popper,u={primary:function d(e){var t=l[e];return l[e]<s[e]&&!o.escapeWithReference&&(t=Math.max(l[e],s[e])),ge({},e,t)},secondary:function c(e){var t="right"===e?"left":"top",n=l[t];return l[e]>s[e]&&!o.escapeWithReference&&(n=Math.min(l[t],s[e]-("right"===e?l.width:l.height))),ge({},t,n)}};return p.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=ve({},l,u[t](e))}),e.offsets.popper=l,e}function re(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,f=r.popper,a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",p=a?"width":"height",l={start:ge({},s,i[s]),end:ge({},s,i[s]+i[p]-f[p])};e.offsets.popper=ve({},f,l[o])}return e}function ie(e){if(!_(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=W(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function fe(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[f?"left":"top"]=i[n]-(a?r[f?"width":"height"]:0),e.placement=k(t),e.offsets.popper=x(r),e}for(var ae="undefined"!=typeof window&&"undefined"!=typeof document,se=["Edge","Trident","Firefox"],pe=0,le=0;le<se.length;le+=1)if(ae&&0<=navigator.userAgent.indexOf(se[le])){pe=1;break}var ue=ae&&window.Promise?e:t,de=ae&&!(!window.MSInputMethodContext||!document.documentMode),ce=ae&&/MSIE 10/.test(navigator.userAgent),he=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},me=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),ge=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},be=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],we=be.slice(3),ye={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Ee={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function Oe(){},onUpdate:function Le(){},modifiers:{shift:{order:100,enabled:!0,fn:re},offset:{order:200,enabled:!0,fn:ne,offset:0},preventOverflow:{order:300,enabled:!0,fn:oe,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:$},arrow:{order:500,enabled:!0,fn:X,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:Z,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:fe},hide:{order:800,enabled:!0,fn:ie},computeStyle:{order:850,enabled:!0,fn:V,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:z,onLoad:G,gpuAcceleration:undefined}}},xe=function(){function f(e,t,n){var o=this,r=2<arguments.length&&n!==undefined?arguments[2]:{};he(this,f),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=ue(this.update.bind(this)),this.options=ve({},f.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(ve({},f.Defaults.modifiers,r.modifiers)).forEach(function(e){o.options.modifiers[e]=ve({},f.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ve({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&a(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return me(f,[{key:"update",value:function e(){return i.call(this)}},{key:"destroy",value:function t(){return A.call(this)}},{key:"enableEventListeners",value:function n(){return I.call(this)}},{key:"disableEventListeners",value:function o(){return U.call(this)}}]),f}();return xe.Utils=("undefined"!=typeof window?window:global).PopperUtils,xe.placements=be,xe.Defaults=Ee,xe});