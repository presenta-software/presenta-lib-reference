(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{487:function(t,e,o){var a,n;o(80),o(81),o(124);var s=o(82);!function(i,r){"object"==s(e)&&void 0!==t?t.exports=r():void 0===(n="function"==typeof(a=r)?a.call(e,o,e,t):a)||(t.exports=n)}(0,(function(){"use strict";function t(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}t(".toastVar__a{--toastBackColor:var(--colorFore);--toastForeColor:var(--colorBack)}.toastPosition__tl{--toastFlexAlign:flex-start;--toastFlexJustify:flex-start}.toastPosition__tc{--toastFlexAlign:flex-start;--toastFlexJustify:center}.toastPosition__tr{--toastFlexAlign:flex-start;--toastFlexJustify:flex-end}.toastPosition__cl{--toastFlexAlign:center;--toastFlexJustify:flex-start}.toastPosition__cc{--toastFlexAlign:center;--toastFlexJustify:center}.toastPosition__cr{--toastFlexAlign:center;--toastFlexJustify:flex-end}.toastPosition__bl{--toastFlexAlign:flex-end;--toastFlexJustify:flex-start}.toastPosition__bc{--toastFlexAlign:flex-end;--toastFlexJustify:center}.toastPosition__br{--toastFlexAlign:flex-end;--toastFlexJustify:flex-end}");var e="style_strip__9a5Un";t("*{box-sizing:border-box}:root{--toastPadding:.5rem;--toastBackColor:#000;--toastForeColor:#fff;--toastFlexAlign:flex-start;--toastFlexJustify:center;--toastFontSize:1.5rem;--toastTextAlign:center;--toastShadow:0 0 15px rgba(0,0,0,0.3)}.style_toast__3vRk0{position:absolute;width:100%;height:100%;overflow:hidden;display:flex;padding:3rem;align-items:var(--toastFlexAlign);justify-content:var(--toastFlexJustify);pointer-events:none}.style_strip__9a5Un{padding:var(--toastPadding);background:var(--toastBackColor);color:var(--toastForeColor);box-shadow:var(--toastShadow);font-family:var(--fontHeading);font-size:var(--toastFontSize);text-align:var(--toastTextAlign);pointer-events:all}.style_strip__9a5Un p{margin:0}");var o=new window.DOMParser,a=function(t,a,n){var s=n.toast;if(s){var i=s.delay||1,r=s.duration||0,l=null,d=function(){var a='<div class="'.concat("style_toast__3vRk0",'">\n      <div class="').concat(e," animate__animated animate__bounceIn animate__delay-").concat(i,'s">').concat(s.text,"</div>\n    </div>");l=o.parseFromString(a,"text/html").body.childNodes[0],t.appendChild(l),l.querySelector("."+e).addEventListener("click",(function(t){c(),t.stopPropagation(),t.preventDefault()})),r>0&&setTimeout(c,1e3*r)},c=function(){var t=l.querySelector("."+e);t.classList.remove("animate__bounceIn","animate__delay-".concat(i,"s")),t.classList.add("animate__zoomOut")},f=function(t){t.key===s.enter&&d()};"click"===s.enter&&t.addEventListener("click",d),"step"===s.enter&&t.addEventListener("click",d),"string"==typeof s.enter&&document.addEventListener("keyup",f),s.enter&&"auto"!==s.enter||d(),this.destroy=function(){t.removeEventListener("click",d),document.removeEventListener("keyup",f)}}};return a.install=function(t){t.addModule("toast",a),t.addProp(["toastPadding","toastBackColor","toastForeColor","toastFlexAlign","toastFlexJustify","toastShadow","toastFontSize"]),t.addGlob(["toastVar","toastPosition"])},"undefined"!=typeof window&&window.Presenta&&window.Presenta.use(a),a}))}}]);