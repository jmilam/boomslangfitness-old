!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Carousel=t(e.jQuery,e.Util)}(this,function(e,T){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(e){s(t,e,i[e])})}return t}var A,C,S,D,b,t,i,O,V,P,N,L,R,w,x,j,r;return e=e&&e.hasOwnProperty("default")?e["default"]:e,T=T&&T.hasOwnProperty("default")?T["default"]:T,C="carousel",S="4.1.3",b="."+(D="bs.carousel"),t=".data-api",i=(A=e).fn[C],O=37,V=39,N={interval:5e3,keyboard:!0,slide:!(P=500),pause:"hover",wrap:!0},L={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},R={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},w={SLIDE:"slide"+b,SLID:"slid"+b,KEYDOWN:"keydown"+b,MOUSEENTER:"mouseenter"+b,MOUSELEAVE:"mouseleave"+b,TOUCHEND:"touchend"+b,LOAD_DATA_API:"load"+b+t,CLICK_DATA_API:"click"+b+t},x={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},j={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},r=function(){function r(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(t),this._element=A(e)[0],this._indicatorsElement=this._element.querySelector(j.INDICATORS),this._addEventListeners()}var e=r.prototype;return e.next=function t(){this._isSliding||this._slide(R.NEXT)},e.nextWhenVisible=function i(){!document.hidden&&A(this._element).is(":visible")&&"hidden"!==A(this._element).css("visibility")&&this.next()},e.prev=function n(){this._isSliding||this._slide(R.PREV)},e.pause=function s(e){e||(this._isPaused=!0),this._element.querySelector(j.NEXT_PREV)&&(T.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function l(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function a(e){var t=this;this._activeElement=this._element.querySelector(j.ACTIVE_ITEM);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)A(this._element).one(w.SLID,function(){return t.to(e)});else{if(i===e)return this.pause(),void this.cycle();var n=i<e?R.NEXT:R.PREV;this._slide(n,this._items[e])}},e.dispose=function o(){A(this._element).off(b),A.removeData(this._element,D),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function u(e){return e=p({},N,e),T.typeCheckConfig(C,e,L),e},e._addEventListeners=function c(){var t=this;this._config.keyboard&&A(this._element).on(w.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(A(this._element).on(w.MOUSEENTER,function(e){return t.pause(e)}).on(w.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&A(this._element).on(w.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},P+t._config.interval)}))},e._keydown=function h(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case O:e.preventDefault(),this.prev();break;case V:e.preventDefault(),this.next()}},e._getItemIndex=function d(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(j.ITEM)):[],this._items.indexOf(e)},e._getItemByDirection=function _(e,t){var i=e===R.NEXT,n=e===R.PREV,s=this._getItemIndex(t),r=this._items.length-1;if((n&&0===s||i&&s===r)&&!this._config.wrap)return t;var l=(s+(e===R.PREV?-1:1))%this._items.length;return-1===l?this._items[this._items.length-1]:this._items[l]},e._triggerSlideEvent=function f(e,t){var i=this._getItemIndex(e),n=this._getItemIndex(this._element.querySelector(j.ACTIVE_ITEM)),s=A.Event(w.SLIDE,{relatedTarget:e,direction:t,from:n,to:i});return A(this._element).trigger(s),s},e._setActiveIndicatorElement=function m(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(j.ACTIVE));A(t).removeClass(x.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&A(i).addClass(x.ACTIVE)}},e._slide=function E(e,t){var i,n,s,r=this,l=this._element.querySelector(j.ACTIVE_ITEM),a=this._getItemIndex(l),o=t||l&&this._getItemByDirection(e,l),u=this._getItemIndex(o),c=Boolean(this._interval);if(e===R.NEXT?(i=x.LEFT,n=x.NEXT,s=R.LEFT):(i=x.RIGHT,n=x.PREV,s=R.RIGHT),o&&A(o).hasClass(x.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(o,s).isDefaultPrevented()&&l&&o){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(o);var h=A.Event(w.SLID,{relatedTarget:o,direction:s,from:a,to:u});if(A(this._element).hasClass(x.SLIDE)){A(o).addClass(n),T.reflow(o),A(l).addClass(i),A(o).addClass(i);var d=T.getTransitionDurationFromElement(l);A(l).one(T.TRANSITION_END,function(){A(o).removeClass(i+" "+n).addClass(x.ACTIVE),A(l).removeClass(x.ACTIVE+" "+n+" "+i),r._isSliding=!1,setTimeout(function(){return A(r._element).trigger(h)},0)}).emulateTransitionEnd(d)}else A(l).removeClass(x.ACTIVE),A(o).addClass(x.ACTIVE),this._isSliding=!1,A(this._element).trigger(h);c&&this.cycle()}},r._jQueryInterface=function v(n){return this.each(function(){var e=A(this).data(D),t=p({},N,A(this).data());"object"==typeof n&&(t=p({},t,n));var i="string"==typeof n?n:t.slide;if(e||(e=new r(this,t),A(this).data(D,e)),"number"==typeof n)e.to(n);else if("string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}else t.interval&&(e.pause(),e.cycle())})},r._dataApiClickHandler=function I(e){var t=T.getSelectorFromElement(this);if(t){var i=A(t)[0];if(i&&A(i).hasClass(x.CAROUSEL)){var n=p({},A(i).data(),A(this).data()),s=this.getAttribute("data-slide-to");s&&(n.interval=!1),r._jQueryInterface.call(A(i),n),s&&A(i).data(D).to(s),e.preventDefault()}}},y(r,null,[{key:"VERSION",get:function g(){return S}},{key:"Default",get:function g(){return N}}]),r}(),A(document).on(w.CLICK_DATA_API,j.DATA_SLIDE,r._dataApiClickHandler),A(window).on(w.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(j.DATA_RIDE)),t=0,i=e.length;t<i;t++){var n=A(e[t]);r._jQueryInterface.call(n,n.data())}}),A.fn[C]=r._jQueryInterface,A.fn[C].Constructor=r,A.fn[C].noConflict=function(){return A.fn[C]=i,r._jQueryInterface},r});