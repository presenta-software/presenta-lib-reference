(window.webpackJsonp=window.webpackJsonp||[]).push([[2,10],{348:function(e,_,t){},350:function(e,_,t){"use strict";var i=t(348);t.n(i).a},351:function(e,_,t){"use strict";t.r(_);var i={mounted:function(){this.$el.addEventListener("mousedown",this.onDown)},beforeDestroy:function(){},data:function(){return{ix:0,cx:0}},methods:{onDown:function(e){this.ix=e.clientX,document.addEventListener("mousemove",this.onMove),document.addEventListener("mouseup",this.onUp),this.$emit("begin")},onMove:function(e){this.cx=e.clientX;var _=this.ix-this.cx;this.$emit("update",_)},onUp:function(e){document.removeEventListener("mousemove",this.onMove),document.removeEventListener("mouseup",this.onUp)}}},s=(t(350),t(61)),r=Object(s.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"divider"})}),[],!1,null,"39748dfc",null);_.default=r.exports},381:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(87),core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__),_Users_abused_GITHUB_PRESENTA_presenta_presenta_lib_reference_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59),vue2_ace_editor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(398),vue2_ace_editor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(vue2_ace_editor__WEBPACK_IMPORTED_MODULE_2__),_presenta_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_presenta_lib__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_presenta_lib__WEBPACK_IMPORTED_MODULE_3__),_Divider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(351);__webpack_exports__.a={components:{Ace:vue2_ace_editor__WEBPACK_IMPORTED_MODULE_2___default.a,Divider:_Divider__WEBPACK_IMPORTED_MODULE_4__.default},props:{code:String},data:function(){return{icode:"",invalid:!1,timer:null,leftWidth:0,rightWidth:0}},watch:{icode:function(e){var _=this;clearTimeout(this.timer),this.timer=setTimeout((function(){_.createPreso()}),300)},code:function(e){this.icode=this.code}},mounted:function(){var e=this.$refs.editor.editor;e.session.setTabSize(2),e.setOptions({showPrintMargin:!1}),e.setOptions({showGutter:!1}),this.icode=this.code,this.createPreso()},methods:{editorInit:function(){__webpack_require__(400),__webpack_require__(454),__webpack_require__(402)},createPreso:function createPreso(){this.invalid=!0;var ob=null;try{if(ob=eval("(() => {return ".concat(this.icode,"})()")),ob){var _preso$classList,preso=this.$refs.preso;preso.innerHTML="",(_preso$classList=preso.classList).remove.apply(_preso$classList,Object(_Users_abused_GITHUB_PRESENTA_presenta_presenta_lib_reference_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(this.$refs.preso.classList)),preso.classList.add("preso"),new _presenta_lib__WEBPACK_IMPORTED_MODULE_3__(this.$refs.preso,ob),this.$emit("update",ob),this.invalid=!1}}catch(e){this.$refs.preso.innerHTML="Invalid data"}},onDivBegin:function(){var e=this.$refs.left.getBoundingClientRect();this.leftWidth=e.width;var _=this.$refs.right.getBoundingClientRect();this.rightWidth=_.width},onDivUpdate:function(e){var _=this.leftWidth-e-2.5;this.$refs.left.style.width=_+"px";var t=this.rightWidth+e+2.5;this.$refs.right.style.width=t+"px"}}}},382:function(e,_,t){},383:function(e,_,t){},455:function(e,_,t){"use strict";var i=t(382);t.n(i).a},456:function(e,_,t){"use strict";var i=t(383);t.n(i).a},492:function(e,_,t){"use strict";t.r(_);var i=t(381).a,s=(t(455),t(456),t(61)),r=Object(s.a)(i,(function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"cont"},[t("div",{ref:"left",staticClass:"edit",class:{invalid:e.invalid}},[t("Ace",{ref:"editor",attrs:{lang:"javascript",theme:"chrome"},on:{init:e.editorInit},model:{value:e.icode,callback:function(_){e.icode=_},expression:"icode"}})],1),e._v(" "),t("Divider",{on:{begin:e.onDivBegin,update:e.onDivUpdate}}),e._v(" "),t("div",{ref:"right",staticClass:"prev"},[t("div",{ref:"preso",staticClass:"preso"})])],1)}),[],!1,null,"9c71a038",null);_.default=r.exports}}]);