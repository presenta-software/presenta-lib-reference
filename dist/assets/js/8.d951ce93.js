(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{539:function(e,t,s){var i,n;s(131),s(43),s(37),s(83),s(132),s(44);var c=s(82);!function(r,l){"object"==c(t)&&void 0!==e?e.exports=l():void 0===(n="function"==typeof(i=l)?i.call(t,s,t,e):i)||(e.exports=n)}(0,(function(){"use strict";function e(e,t){void 0===t&&(t={});var s=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===s&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}e(".stickersPosition__tl{--stickersFlexAlign:flex-start;--stickersFlexJustify:flex-start}.stickersPosition__tc{--stickersFlexAlign:flex-start;--stickersFlexJustify:center}.stickersPosition__tr{--stickersFlexAlign:flex-start;--stickersFlexJustify:flex-end}.stickersPosition__cl{--stickersFlexAlign:center;--stickersFlexJustify:flex-start}.stickersPosition__cc{--stickersFlexAlign:center;--stickersFlexJustify:center}.stickersPosition__cr{--stickersFlexAlign:center;--stickersFlexJustify:flex-end}.stickersPosition__bl{--stickersFlexAlign:flex-end;--stickersFlexJustify:flex-start}.stickersPosition__bc{--stickersFlexAlign:flex-end;--stickersFlexJustify:center}.stickersPosition__br{--stickersFlexAlign:flex-end;--stickersFlexJustify:flex-end}");e("*{box-sizing:border-box}:root{--stickersFlexAlign:flex-start;--stickersFlexJustify:flex-start}.style_stickers__3cKgP{overflow:hidden;pointer-events:none}.style_sticker__2V6QY,.style_stickers__3cKgP{position:absolute;width:100%;height:100%}.style_stick__15hpp,.style_sticker__2V6QY{display:flex;align-items:var(--stickersFlexAlign);justify-content:var(--stickersFlexJustify)}.style_stick__15hpp{padding:var(--stickersPadding)}.style_stick__15hpp img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;display:block;pointer-events:all}");var t=new DOMParser,s=function(e,s,i){var n=i.stickers;if(n){var c="";(Array.isArray(n)?n:[n]).forEach((function(e){return c+=function(e){var t=e.url,s="stickersPosition__"+e.position,i=e.size||50,n=e.padding||0,c=e.delay||0,r=parseInt(c)+"",l=e.enter||"bounceIn";return'<div class="'.concat("style_sticker__2V6QY"," ").concat(s,'">\n    <div class="').concat("style_stick__15hpp",'" style="width:').concat(i,"%; padding:").concat(n,';">\n      <img class="animate__animated animate__').concat(l," animate__delay-").concat(r,'s" src="').concat(t,'" />\n    </div>\n  </div>')}(e)}));var r='<div class="'.concat("style_stickers__3cKgP",'">').concat(c,"</div>"),l=t.parseFromString(r,"text/html").body.childNodes[0];e.appendChild(l)}};return s.install=function(e){e.addModule("stickers",s),e.addGlob(["stickersPosition"])},"undefined"!=typeof window&&window.Presenta&&window.Presenta.use(s),s}))}}]);