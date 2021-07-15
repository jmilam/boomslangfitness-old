!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],e):t.ScrollSpy=e(t.jQuery,t.Util)}(this,function(t,e){"use strict";function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){i(t,e,r[e])})}return t}return t=t&&t.hasOwnProperty("default")?t["default"]:t,e=e&&e.hasOwnProperty("default")?e["default"]:e,function(t){var r="scrollspy",i="4.1.3",s="bs.scrollspy",l="."+s,c=".data-api",a=t.fn[r],f={offset:10,method:"auto",target:""},u={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+l,SCROLL:"scroll"+l,LOAD_DATA_API:"load"+l+c},_={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},g={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d={OFFSET:"offset",POSITION:"position"},p=function(){function c(e,r){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(r),this._selector=this._config.target+" "+g.NAV_LINKS+","+this._config.target+" "+g.LIST_ITEMS+","+this._config.target+" "+g.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var a=c.prototype;return a.refresh=function(){var r=this,n=this._scrollElement===this._scrollElement.window?d.OFFSET:d.POSITION,i="auto"===this._config.method?n:this._config.method,o=i===d.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(r){var n,s=e.getSelectorFromElement(r);if(s&&(n=document.querySelector(s)),n){var l=n.getBoundingClientRect();if(l.width||l.height)return[t(n)[i]().top+o,s]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){r._offsets.push(t[0]),r._targets.push(t[1])})},a.dispose=function(){t.removeData(this._element,s),t(this._scrollElement).off(l),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},a._getConfig=function(n){if("string"!=typeof(n=o({},f,"object"==typeof n&&n?n:{})).target){var i=t(n.target).attr("id");i||(i=e.getUID(r),t(n.target).attr("id",i)),n.target="#"+i}return e.typeCheckConfig(r,n,u),n},a._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},a._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},a._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},a._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),r=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=r){var n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&t>=this._offsets[i]&&("undefined"==typeof this._offsets[i+1]||t<this._offsets[i+1])&&this._activate(this._targets[i])}}},a._activate=function(e){this._activeTarget=e,this._clear();var r=this._selector.split(",");r=r.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=t([].slice.call(document.querySelectorAll(r.join(","))));n.hasClass(_.DROPDOWN_ITEM)?(n.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE),n.addClass(_.ACTIVE)):(n.addClass(_.ACTIVE),n.parents(g.NAV_LIST_GROUP).prev(g.NAV_LINKS+", "+g.LIST_ITEMS).addClass(_.ACTIVE),n.parents(g.NAV_LIST_GROUP).prev(g.NAV_ITEMS).children(g.NAV_LINKS).addClass(_.ACTIVE)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},a._clear=function(){var e=[].slice.call(document.querySelectorAll(this._selector));t(e).filter(g.ACTIVE).removeClass(_.ACTIVE)},c._jQueryInterface=function(e){return this.each(function(){var r=t(this).data(s);if(r||(r=new c(this,"object"==typeof e&&e),t(this).data(s,r)),"string"==typeof e){if("undefined"==typeof r[e])throw new TypeError('No method named "'+e+'"');r[e]()}})},n(c,null,[{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return f}}]),c}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(g.DATA_SPY)),r=e.length;r--;){var n=t(e[r]);p._jQueryInterface.call(n,n.data())}}),t.fn[r]=p._jQueryInterface,t.fn[r].Constructor=p,t.fn[r].noConflict=function(){return t.fn[r]=a,p._jQueryInterface},p}(t)});