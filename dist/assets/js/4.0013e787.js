(window.webpackJsonp=window.webpackJsonp||[]).push([[4,13],{344:function(t,e,i){},347:function(t,e,i){"use strict";var n=i(344);i.n(n).a},348:function(t,e,i){"use strict";i.r(e);var n={mounted:function(){this.$el.addEventListener("mousedown",this.onDown)},beforeDestroy:function(){},data:function(){return{ix:0,cx:0}},methods:{onDown:function(t){this.ix=t.clientX,document.addEventListener("mousemove",this.onMove),document.addEventListener("mouseup",this.onUp),this.$emit("begin")},onMove:function(t){this.cx=t.clientX;var e=this.ix-this.cx;this.$emit("update",e)},onUp:function(t){document.removeEventListener("mousemove",this.onMove),document.removeEventListener("mouseup",this.onUp)}}},s=(i(347),i(59)),o=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"divider"})}),[],!1,null,"ff89718c",null);e.default=o.exports},384:function(t,e,i){},385:function(t,e,i){},474:function(t,e,i){"use strict";var n=i(384);i.n(n).a},475:function(t,e,i){"use strict";var n=i(385);i.n(n).a},538:function(t,e,i){"use strict";i.r(e);i(34),i(30),i(85),i(198),i(35),i(127);var n=i(407),s=i.n(n),o=i(60),r=i(348),a={components:{Ace:s.a,Divider:r.default},data:function(){return{leftWidth:0,rightWidth:0,icode:'\n# Hello!\n\n![2](https://media.giphy.com/media/LoZ5R1WpEZFss/source.gif)\n\nThis is **<span class="step">Meeeeeeeeeeee?</span>**\n\n---\n\n# Slide 2\n\n---\n\n# Slide 3',invalid:!1,timer:null}},watch:{icode:function(t){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.createPreso()}),300)}},mounted:function(){var t=this.$refs.editor.editor;t.session.setTabSize(2),t.setOptions({showPrintMargin:!1}),t.setOptions({showGutter:!1}),this.createPreso()},methods:{editorInit:function(){i(409),i(470),i(411)},fromRawMarkdown:function(){var t=this.icode.split(/\s*?(---)\s*?/gm),e=[];return t.forEach((function(t){"---"!==t&&e.push({blocks:[{type:"text",text:t.trim(),scale:2}]})})),e},createPreso:function(){this.invalid=!0;try{var t={colors:"irma",fonts:"d",controllers:{pagenum:!0,swiper:!0,markdown:!0},scenes:this.fromRawMarkdown()};this.$refs.preso.innerHTML="",new o(this.$refs.preso,t),this.$emit("update",t),this.invalid=!1}catch(t){this.$refs.preso.innerHTML="Invalid data"}},onDivBegin:function(){var t=this.$refs.left.getBoundingClientRect();this.leftWidth=t.width;var e=this.$refs.right.getBoundingClientRect();this.rightWidth=e.width},onDivUpdate:function(t){var e=this.leftWidth-t-2.5;this.$refs.left.style.width=e+"px";var i=this.rightWidth+t+2.5;this.$refs.right.style.width=i+"px"}}},c=(i(474),i(475),i(59)),d=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cont"},[i("div",{ref:"left",staticClass:"edit",class:{invalid:t.invalid}},[i("Ace",{ref:"editor",attrs:{lang:"markdown",theme:"chrome"},on:{init:t.editorInit},model:{value:t.icode,callback:function(e){t.icode=e},expression:"icode"}})],1),t._v(" "),i("Divider",{on:{begin:t.onDivBegin,update:t.onDivUpdate}}),t._v(" "),i("div",{ref:"right",staticClass:"prev"},[i("div",{ref:"preso",staticClass:"preso"})])],1)}),[],!1,null,"8d8b9ff8",null);e.default=d.exports}}]);