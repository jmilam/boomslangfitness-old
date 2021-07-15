function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Popover=function(r){var n="popover",i="4.1.1",c="bs.popover",s="."+c,e=r.fn[n],u="bs-popover",a=new RegExp("(^|\\s)"+u+"\\S+","g"),f=_objectSpread({},Tooltip.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),p=_objectSpread({},Tooltip.DefaultType,{content:"(string|element|function)"}),l={FADE:"fade",SHOW:"show"},h={TITLE:".popover-header",CONTENT:".popover-body"},d={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,INSERTED:"inserted"+s,CLICK:"click"+s,FOCUSIN:"focusin"+s,FOCUSOUT:"focusout"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s},t=function(e){function o(){return e.apply(this,arguments)||this}_inheritsLoose(o,e);var t=o.prototype;return t.isWithContent=function(){return this.getTitle()||this._getContent()},t.addAttachmentClass=function(e){r(this.getTipElement()).addClass(u+"-"+e)},t.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0],this.tip},t.setContent=function(){var e=r(this.getTipElement());this.setElementContent(e.find(h.TITLE),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(h.CONTENT),t),e.removeClass(l.FADE+" "+l.SHOW)},t._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},t._cleanTipClass=function(){var e=r(this.getTipElement()),t=e.attr("class").match(a);null!==t&&0<t.length&&e.removeClass(t.join(""))},o._jQueryInterface=function(n){return this.each(function(){var e=r(this).data(c),t="object"==typeof n?n:null;if((e||!/destroy|hide/.test(n))&&(e||(e=new o(this,t),r(this).data(c,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},_createClass(o,null,[{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return n}},{key:"DATA_KEY",get:function(){return c}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return s}},{key:"DefaultType",get:function(){return p}}]),o}(Tooltip);return r.fn[n]=t._jQueryInterface,r.fn[n].Constructor=t,r.fn[n].noConflict=function(){return r.fn[n]=e,t._jQueryInterface},t}($);