(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{548:function(t,e,a){"use strict";a.r(e);var o=a(59),v=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"youtube-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#youtube-block"}},[t._v("#")]),t._v(" Youtube Block")]),t._v(" "),a("p",[t._v("This block displays and manages a "),a("a",{attrs:{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Youtube"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("pPluginYoutube"),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("To configure this block use this setting:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'youtube'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The block will show the Youtube thumbnail for the fast preview.")]),t._v(" "),a("h3",{attrs:{id:"interactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("controls")]),t._v(" option is set to false (default) then, here the way to interact with it:")]),t._v(" "),a("ul",[a("li",[a("kbd",[t._v("Space")]),t._v(" or "),a("code",[t._v("click")]),t._v(" to toggle the playback between play/pause")]),t._v(" "),a("li",[a("kbd",[t._v("m")]),t._v(" to toggle the mute")]),t._v(" "),a("li",[a("kbd",[t._v("+")]),t._v(" and "),a("kbd",[t._v("-")]),t._v(" to increase/descrease the volume by 10% factor")])]),t._v(" "),a("p",[t._v("With "),a("code",[t._v("controls")]),t._v(" set to true, you have to use the built-in Youtube controls.")]),t._v(" "),a("p",[t._v("The first play the player waits to be loaded before the playback begins.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Values")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("Define this block type "),a("strong",[t._v("(required)")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v('"youtube"')])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("The ID of the Youtube video "),a("strong",[t._v("(required)")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("autoplay")]),t._v(" "),a("td",[t._v("Begin the playback as soon as it's loaded")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",[t._v("loop")]),t._v(" "),a("td",[t._v("Loop the playback")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("Time in seconds to start the video from")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("Number")])]),t._v(" "),a("tr",[a("td",[t._v("end")]),t._v(" "),a("td",[t._v("Time in seconds (since the beginning) to end the video to")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("Number")])]),t._v(" "),a("tr",[a("td",[t._v("preload")]),t._v(" "),a("td",[t._v("Preload the player to reduce the delay of the first play (experimental)")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",[t._v("controls")]),t._v(" "),a("td",[t._v("Show the Youtube controls")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Set the keeyboard char to trigger the playback")]),t._v(" "),a("td",[t._v("' '")]),t._v(" "),a("td",[t._v("String char")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("preload")]),t._v(" parameter will load the player behind the scene, this way it will be ready for immediate playback. The downside is some glitch when the block will be shown due the Youtube heavyness during initial loading.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Please read the installation istructions for official plugins "),a("a",{attrs:{href:"/plugins/installation"}},[t._v("here")]),t._v(" using this unique identifier: "),a("code",[t._v("block-youtube")])]),t._v(" "),a("p",[t._v("You can find the source code in its "),a("a",{attrs:{href:"https://github.com/presenta-software/presenta-block-youtube",target:"_blank",rel:"noopener noreferrer"}},[t._v("repository"),a("OutboundLink")],1),t._v(".")])],1)}),[],!1,null,null,null);e.default=v.exports}}]);