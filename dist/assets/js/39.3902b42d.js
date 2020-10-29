(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{498:function(t,e,v){"use strict";v.r(e);var o=v(61),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"reference"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#root-options"}},[t._v("Root options")])]),v("li",[v("a",{attrs:{href:"#look-feel"}},[t._v("Look&Feel")])]),v("li",[v("a",{attrs:{href:"#transitions-and-layouts"}},[t._v("Transitions and Layouts")])]),v("li",[v("a",{attrs:{href:"#scenes"}},[t._v("Scenes")])]),v("li",[v("a",{attrs:{href:"#modules"}},[t._v("Modules")])]),v("li",[v("a",{attrs:{href:"#content-block-type"}},[t._v("Content (block) type")]),v("ul",[v("li",[v("a",{attrs:{href:"#text"}},[t._v("Text")])]),v("li",[v("a",{attrs:{href:"#image"}},[t._v("Image")])]),v("li",[v("a",{attrs:{href:"#video"}},[t._v("Video")])]),v("li",[v("a",{attrs:{href:"#embed"}},[t._v("Embed")])]),v("li",[v("a",{attrs:{href:"#solid"}},[t._v("Solid")])]),v("li",[v("a",{attrs:{href:"#group"}},[t._v("Group")])]),v("li",[v("a",{attrs:{href:"#external-blocks"}},[t._v("External blocks")])])])]),v("li",[v("a",{attrs:{href:"#controllers"}},[t._v("Controllers")]),v("ul",[v("li",[v("a",{attrs:{href:"#built-in-controllers"}},[t._v("Built-in controllers")])]),v("li",[v("a",{attrs:{href:"#external-controllers"}},[t._v("External controllers")])])])]),v("li",[v("a",{attrs:{href:"#router"}},[t._v("Router")])]),v("li",[v("a",{attrs:{href:"#deck-instance"}},[t._v("Deck instance")])]),v("li",[v("a",{attrs:{href:"#global-object"}},[t._v("Global object")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"root-options"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#root-options"}},[t._v("#")]),t._v(" Root options")]),t._v(" "),v("p",[t._v("Each "),v("strong",[t._v("PRESENTA Lib")]),t._v(" document can be configured with some root options and properties defined in the config object:")]),t._v(" "),v("pEditRootProps"),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Values")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("scenes")]),t._v(" "),v("td",[t._v("The list of scene objects "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Array")])]),t._v(" "),v("tr",[v("td",[t._v("aspect")]),t._v(" "),v("td",[t._v("Define the ratio between width and height")]),t._v(" "),v("td",[t._v("1.6")]),t._v(" "),v("td",[t._v("Number")])]),t._v(" "),v("tr",[v("td",[t._v("adapt")]),t._v(" "),v("td",[t._v("Override "),v("strong",[t._v("aspect")]),t._v(" inferring it from the container size. If the dimensions are not positive, a fallback size will be used.")]),t._v(" "),v("td",[v("em",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("The size of the presentation is based on the container size. If it hasn't a positive dimention, a size fallback will be used, which is 360x200.")]),t._v(" "),v("h2",{attrs:{id:"look-feel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#look-feel"}},[t._v("#")]),t._v(" Look&Feel")]),t._v(" "),v("p",[t._v("The "),v("strong",[t._v("Look&Feel")]),t._v(" can be defined by combining different properties. There's a great opportunity in finding unexpected results by combining many interconnected features.")]),t._v(" "),v("pEditStyles"),t._v(" "),v("p",[t._v("The following properties can be set to the whole "),v("code",[t._v("presentation")]),t._v(", to a specific "),v("code",[t._v("scene")]),t._v(" and to a specific "),v("code",[t._v("block")]),t._v(" as well.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("colors")]),t._v(" "),v("td",[t._v("The colors scheme to use")]),t._v(" "),v("td",[v("em",[t._v("none")])]),t._v(" "),v("td",[t._v("String value from "),v("code",[t._v("Presenta.colors")])])]),t._v(" "),v("tr",[v("td",[t._v("fonts")]),t._v(" "),v("td",[t._v("The fonts set to use")]),t._v(" "),v("td",[v("em",[t._v("none")])]),t._v(" "),v("td",[t._v("String value from "),v("code",[t._v("Presenta.fonts")])])]),t._v(" "),v("tr",[v("td",[t._v("colorVar")]),t._v(" "),v("td",[t._v("The combination variation as defined in the colors scheme")]),t._v(" "),v("td",[t._v("main")]),t._v(" "),v("td",[t._v("String value from "),v("code",[t._v("Presenta.colorvars")])])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("Property' inheritance")]),t._v(" "),v("p",[t._v("It's honoured according to the specificity. The more specific, the higher priority.")])]),t._v(" "),v("h2",{attrs:{id:"transitions-and-layouts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#transitions-and-layouts"}},[t._v("#")]),t._v(" Transitions and Layouts")]),t._v(" "),v("p",[t._v("Transition and layout properties can be set at "),v("code",[t._v("presentation")]),t._v(" level and at "),v("code",[t._v("scene")]),t._v(" level as well.")]),t._v(" "),v("pDemoTransitions"),t._v(" "),v("br"),t._v(" "),v("pDemoLayout"),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("layout")]),t._v(" "),v("td",[t._v("The scene layout. It has effect only with more than one block.")]),t._v(" "),v("td",[v("em",[t._v("cols")])]),t._v(" "),v("td",[t._v("String value from "),v("code",[t._v("Presenta.layouts")])])]),t._v(" "),v("tr",[v("td",[t._v("transition")]),t._v(" "),v("td",[t._v("The transition type.")]),t._v(" "),v("td",[v("em",[t._v("none")])]),t._v(" "),v("td",[t._v("String value from "),v("code",[t._v("Presenta.transitions")])])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"scenes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#scenes"}},[t._v("#")]),t._v(" Scenes")]),t._v(" "),v("p",[t._v("A "),v("strong",[t._v("scene")]),t._v(" contains one or more "),v("strong",[t._v("blocks")]),t._v(". A scene can be extended with "),v("strong",[t._v("modules")]),t._v(".")]),t._v(" "),v("h2",{attrs:{id:"modules"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),v("p",[t._v("Modules are scene extensions. Right now there's just one built-in: "),v("em",[t._v("Steps")]),t._v(", that handles the in-scene fragments. By default, any HTML tag with the class "),v("code",[t._v("step")]),t._v(" counts as fragment element. You can override the "),v("code",[t._v("step")]),t._v(" option by adding a valid CSS selector (single and multiple as well).")]),t._v(" "),v("p",[t._v("The steps order is based on the HTML tag order. You can override it using the attribute "),v("code",[t._v("data-order")]),t._v(" specifing a number that will be used by a sorting function.")]),t._v(" "),v("pEditSteps"),t._v(" "),v("p",[t._v("You can disable the module completely in case you need:")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("modules"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  steps"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("Modules can be created as external "),v("strong",[t._v("PRESENTA Lib")]),t._v(" plugin. You can find additional modules "),v("RouterLink",{attrs:{to:"/plugins/#modules"}},[t._v("here")]),t._v(".")],1),t._v(" "),v("h2",{attrs:{id:"content-block-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#content-block-type"}},[t._v("#")]),t._v(" Content (block) type")]),t._v(" "),v("p",[t._v("A block is the minimal piece of content. It can sit together with other blocks in a scene.")]),t._v(" "),v("p",[t._v("As already mentioned, you can set Look&Feel properties at block level to override the inherit values.")]),t._v(" "),v("p",[t._v("Depending of the block "),v("strong",[t._v("type")]),t._v(", further properties can be added.")]),t._v(" "),v("p",[t._v("Let's learn about the buint-in block types of "),v("strong",[t._v("PRESENTA Lib")]),t._v(":")]),t._v(" "),v("h3",{attrs:{id:"text"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" Text")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("text")]),t._v(" block is possibly the most obvious one allowing to display formatted text by using a subset of HTML tags.")]),t._v(" "),v("p",[t._v("The text automatically scales down if there is not enough available space. The additional "),v("code",[t._v("scale")]),t._v(" option allows to fine-tune the behavior.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("The block type "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('"text"')])]),t._v(" "),v("tr",[v("td",[t._v("text")]),t._v(" "),v("td",[t._v("The text in HTML you want to display "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("scale")]),t._v(" "),v("td",[t._v("It allows to control the size of the text box within the available block space")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("Number")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("textVar")]),t._v(" "),v("td",[t._v("The text layout variations")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"image"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" Image")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("image")]),t._v(" block allows to display an image.")]),t._v(" "),v("p",[t._v("By default the image will "),v("code",[t._v("cover")]),t._v(" the available block area.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("The block type "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('"image"')])]),t._v(" "),v("tr",[v("td",[t._v("url")]),t._v(" "),v("td",[t._v("The path or URL to the image resource "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("URL")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"video"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("video")]),t._v(" block allows to include a video file (encoded in a browser compatible format).")]),t._v(" "),v("p",[t._v("By default the video won't start automatically. To control the playback (play/pause) you can use the "),v("strong",[t._v("SPACEBAR")]),t._v(" keyboard key.")]),t._v(" "),v("p",[t._v("By default the video will "),v("code",[t._v("cover")]),t._v(" the available block area.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("The block type "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('"video"')])]),t._v(" "),v("tr",[v("td",[t._v("url")]),t._v(" "),v("td",[t._v("The path or URL to the video resource "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("URL")])]),t._v(" "),v("tr",[v("td",[t._v("loop")]),t._v(" "),v("td",[t._v("Loop the playback")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("autoplay")]),t._v(" "),v("td",[t._v("Autoplay as soon as it's ready")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("poster")]),t._v(" "),v("td",[t._v("The optional poster image")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("URL")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"embed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#embed"}},[t._v("#")]),t._v(" Embed")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("embed")]),t._v(" block allows to embed external web objects by means of an "),v("code",[t._v("iframe")]),t._v(" tag.\nThe simplest way to embed a web resource is by using the "),v("code",[t._v("url")]),t._v(" property.")]),t._v(" "),v("p",[t._v("If you have the embed code (the "),v("strong",[t._v("iframe")]),t._v(" code) you can use the "),v("code",[t._v("code")]),t._v(" property:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("The block type "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('"embed"')])]),t._v(" "),v("tr",[v("td",[t._v("url")]),t._v(" "),v("td",[t._v("The path or URL to the webpage resource "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("URL")])]),t._v(" "),v("tr",[v("td",[t._v("code")]),t._v(" "),v("td",[t._v("The complete "),v("code",[t._v("iframe")]),t._v(" code, "),v("strong",[t._v("(required)")]),t._v(" if "),v("code",[t._v("url")]),t._v(" is not set")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("poster")]),t._v(" "),v("td",[t._v("The optional poster image")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("URL")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"solid"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#solid"}},[t._v("#")]),t._v(" Solid")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("solid")]),t._v(" block allows to set any CSS background property to the whole block area.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("The block type "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('"solid"')])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"group"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[t._v("#")]),t._v(" Group")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("group")]),t._v(" block is a special one. It allows to stack two or more regular blocks together. By default, it includes a semi-transparent layer between the two blocks.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Option")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("The block type "),v("strong",[t._v("(required)")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('"group"')])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("layout")]),t._v(" "),v("td",[t._v("The group layout. It has effect only with more than one sub-block.")]),t._v(" "),v("td",[v("em",[t._v("cols")])]),t._v(" "),v("td",[t._v("cols, rows, head, foot, stack")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"external-blocks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#external-blocks"}},[t._v("#")]),t._v(" External blocks")]),t._v(" "),v("p",[t._v("Blocks can be created as "),v("strong",[t._v("PRESENTA")]),t._v(" plugin. You can find additional blocks "),v("RouterLink",{attrs:{to:"/plugins/#blocks"}},[t._v("here")]),t._v(".")],1),t._v(" "),v("h4",{attrs:{id:""}},[v("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),v("h2",{attrs:{id:"controllers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#controllers"}},[t._v("#")]),t._v(" Controllers")]),t._v(" "),v("p",[v("strong",[t._v("PRESENTA Lib")]),t._v(" includes some general functions and behaviours that are commons in presentational documents. These functions are called "),v("strong",[t._v("Controllers")]),t._v(" because they act globally on the whole presentation, usually referring to the internal Router component that is responsible to control the document' navigation.")]),t._v(" "),v("p",[t._v("Each Controller needs to be activated (and optionally configured) in the main config object under the "),v("code",[t._v("controllers")]),t._v(" field, such as:")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  scenes"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  controllers"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    keyboard"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    arrows"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h3",{attrs:{id:"built-in-controllers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#built-in-controllers"}},[t._v("#")]),t._v(" Built-in controllers")]),t._v(" "),v("p",[t._v("Here the list of built-in controlles alongside their default activation status:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("keyboard")]),t._v(" "),v("td",[t._v("Allows to navigate back and forth using the keyboard arrows keys. "),v("br"),v("strong",[t._v("ArrowRight")]),t._v(" and "),v("strong",[t._v("ArrowDown")]),t._v(" to go next, "),v("strong",[t._v("ArrowLeft")]),t._v(" and "),v("strong",[t._v("ArrowUp")]),t._v(" to go previous.")]),t._v(" "),v("td",[v("strong",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("arrows")]),t._v(" "),v("td",[t._v("Allows to show two UI arrow elements to allows the back and forth navigation by clicking on them.")]),t._v(" "),v("td",[v("strong",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("black")]),t._v(" "),v("td",[t._v("Allows to show/hide a black screen by pressing the keyboard key "),v("code",[t._v("b")]),t._v(". "),v("br"),t._v("To change the key, use the String char instead the Boolean.")]),t._v(" "),v("td",[v("strong",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean, String")])]),t._v(" "),v("tr",[v("td",[t._v("fullscreen")]),t._v(" "),v("td",[t._v("Allows to run the presentation in fullscreen by pressing the keyboard key "),v("code",[t._v("f")]),t._v(". "),v("br"),t._v("To change the key, use the String char instead the Boolean. "),v("br"),t._v("This controller exposes its "),v("code",[t._v("toggle()")]),t._v(" function.")]),t._v(" "),v("td",[v("strong",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean, String")])]),t._v(" "),v("tr",[v("td",[t._v("hidden")]),t._v(" "),v("td",[t._v("It hides a specific scene or block if it has the "),v("code",[t._v("hidden")]),t._v(" option set to true.")]),t._v(" "),v("td",[v("strong",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("limitswitch")]),t._v(" "),v("td",[t._v("It provides a visual feedback when the user tries to navigate over the presentation begin or end.")]),t._v(" "),v("td",[v("strong",[t._v("true")])]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("autoplay")]),t._v(" "),v("td",[t._v("It turns the navigation in auto-play mode. Default delay is 4000ms. Set a Number instead a Boolean to override that delay."),v("br"),t._v("This Controller reads from each "),v("code",[t._v("scene")]),t._v(" configuration the property "),v("code",[t._v("autoplay")]),t._v(" in order to override the default "),v("code",[t._v("delay")]),t._v(" time on a specific "),v("code",[t._v("scene")])]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean, Number")])]),t._v(" "),v("tr",[v("td",[t._v("loop")]),t._v(" "),v("td",[t._v("It allows to loop the navigation, meaning, when the last scene is reached, the next command will jump to the first scene.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("focus")]),t._v(" "),v("td",[t._v("It allows to set the focus automatically instead waiting for the user click, allowing to use keyboard events without a first mouse interaction."),v("br"),v("br"),t._v("The detection is based on the viewport intersection, thus, the last instance that got intersected with the viewport gets the focus.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("progressbar")]),t._v(" "),v("td",[t._v("It shows a tiny progress bar representing the progress of the current navigation.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("shuffle")]),t._v(" "),v("td",[t._v("It randomize the order of the scenes on each instance session.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("current")]),t._v(" "),v("td",[t._v("Set the start "),v("code",[t._v("scene")]),t._v("  according to the passed number.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean, Number")])]),t._v(" "),v("tr",[v("td",[t._v("pagenum")]),t._v(" "),v("td",[t._v("It shows the current page number and total pages based on the current navigation. "),v("br"),v("br"),t._v("The default template "),v("code",[t._v("'%s / %S'")]),t._v(" can be configured passing that String instead Bollean."),v("br"),t._v(" "),v("code",[t._v("%s")]),t._v(" is the current scene, "),v("code",[t._v("%S")]),t._v(" is the total scenes.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean, String")])]),t._v(" "),v("tr",[v("td",[t._v("preload")]),t._v(" "),v("td",[t._v("It preloads images and videos from "),v("code",[t._v("image")]),t._v(" and "),v("code",[t._v("video")]),t._v(" blocks. It's very useful to avoid image loading progress when activating a scene with images. Of course, this leads to a loading waterfall which is not ideal if you put the presentation online."),v("br"),v("br"),t._v("As a rule of thumb: Use it when performing a speech. Keep it disabled in other situations.")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"external-controllers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#external-controllers"}},[t._v("#")]),t._v(" External controllers")]),t._v(" "),v("p",[t._v("Controllers can be created as external "),v("strong",[t._v("PRESENTA Lib")]),t._v(" plugin. You can find additional controllers "),v("RouterLink",{attrs:{to:"/plugins/#controllers"}},[t._v("here")]),t._v(".")],1),t._v(" "),v("h2",{attrs:{id:"router"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" Router")]),t._v(" "),v("p",[v("strong",[t._v("PRESENTA Lib")]),t._v(" contains an internal router to handle the navigation between scenes.")]),t._v(" "),v("p",[t._v("It can be controlled and extended using "),v("code",[t._v("controllers")]),t._v(".")]),t._v(" "),v("pDemoRouter"),t._v(" "),v("p",[t._v("Any "),v("strong",[t._v("PRESENTA Lib")]),t._v(" instance exposes its "),v("code",[t._v("router")]),t._v(" instance:")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myPresentation "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presenta")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" router "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myPresentation"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router\nrouter"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("p",[t._v("It contains the following public methods:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("next()")]),t._v(" "),v("td",[t._v("Go to the next scene")])]),t._v(" "),v("tr",[v("td",[t._v("prev()")]),t._v(" "),v("td",[t._v("Go to the previous scene")])]),t._v(" "),v("tr",[v("td",[t._v("goto(index)")]),t._v(" "),v("td",[t._v("Go to a specific index of a scene (zero-based)")])]),t._v(" "),v("tr",[v("td",[t._v("currentIndex()")]),t._v(" "),v("td",[t._v("Get the current index of a scene (zero-based)")])]),t._v(" "),v("tr",[v("td",[t._v("totalScenes()")]),t._v(" "),v("td",[t._v("The number of scenes")])]),t._v(" "),v("tr",[v("td",[t._v("on(evt)")]),t._v(" "),v("td",[t._v("Subscribe to router events")])]),t._v(" "),v("tr",[v("td",[t._v("off(evt)")]),t._v(" "),v("td",[t._v("Unsubscribe to router events")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("Here the list of events you can subscribe to:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Event name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("indexChanged")]),t._v(" "),v("td",[t._v("Every time the scene index changes")])]),t._v(" "),v("tr",[v("td",[t._v("nextIndex")]),t._v(" "),v("td",[t._v("When the Router moves foreward")])]),t._v(" "),v("tr",[v("td",[t._v("prevIndex")]),t._v(" "),v("td",[t._v("When the Router moves backward")])]),t._v(" "),v("tr",[v("td",[t._v("begin")]),t._v(" "),v("td",[t._v("When the Router reaches the presentation begin")])]),t._v(" "),v("tr",[v("td",[t._v("end")]),t._v(" "),v("td",[t._v("When the Router reaches the presentation end")])]),t._v(" "),v("tr",[v("td",[t._v("init")]),t._v(" "),v("td",[t._v("Only once, when the Router initializes")])]),t._v(" "),v("tr",[v("td",[t._v("stepChanged")]),t._v(" "),v("td",[t._v("When the Router increment the in-scene step index")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("A Router Event includes always the following information:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Event name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("currentIndex")]),t._v(" "),v("td",[t._v("Current index of the current scene")])]),t._v(" "),v("tr",[v("td",[t._v("currentStep")]),t._v(" "),v("td",[t._v("Current index of the step of the current scene")])]),t._v(" "),v("tr",[v("td",[t._v("totalScenes")]),t._v(" "),v("td",[t._v("The total number of scenes")])]),t._v(" "),v("tr",[v("td",[t._v("totalSteps")]),t._v(" "),v("td",[t._v("The number of steps of the current scene")])]),t._v(" "),v("tr",[v("td",[t._v("isFirst")]),t._v(" "),v("td",[t._v("Boolean, if the scene is the first one")])]),t._v(" "),v("tr",[v("td",[t._v("isLast")]),t._v(" "),v("td",[t._v("Boolean, if the scene is the last one")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"deck-instance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#deck-instance"}},[t._v("#")]),t._v(" Deck instance")]),t._v(" "),v("p",[t._v("Any "),v("strong",[t._v("PRESENTA Lib")]),t._v(" instance exposes the following properties:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("config")]),t._v(" "),v("td",[t._v("The config object digested by the library. The library doesn't clone the object before decorate with its internals.")])]),t._v(" "),v("tr",[v("td",[t._v("router")]),t._v(" "),v("td",[t._v("The internal Router instance to access its public methods")])]),t._v(" "),v("tr",[v("td",[t._v("destroy()")]),t._v(" "),v("td",[t._v("Clear all the internals to avoid memory leaks. Use it when you're rebuilding it many times (i.e. within an editor)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"global-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#global-object"}},[t._v("#")]),t._v(" Global object")]),t._v(" "),v("p",[t._v("The "),v("strong",[t._v("PRESENTA Lib")]),t._v(" object exposes some static properties and methods that can be useful, i.e. to know its version:")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("console"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Presenta"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("version")]),t._v(" "),v("td",[t._v("The version of the library")])]),t._v(" "),v("tr",[v("td",[t._v("colors")]),t._v(" "),v("td",[t._v("The array of the built-in colors names")])]),t._v(" "),v("tr",[v("td",[t._v("fonts")]),t._v(" "),v("td",[t._v("The array of the built-in fonts names")])]),t._v(" "),v("tr",[v("td",[t._v("transitions")]),t._v(" "),v("td",[t._v("The array of the built-in transition names")])]),t._v(" "),v("tr",[v("td",[t._v("layouts")]),t._v(" "),v("td",[t._v("The array of the built-in layout names")])]),t._v(" "),v("tr",[v("td",[t._v("colorvars")]),t._v(" "),v("td",[t._v("The array of the built-in color variation names")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("addBlock()")]),t._v(" "),v("td",[t._v("Method to include an external Block")])]),t._v(" "),v("tr",[v("td",[t._v("addController()")]),t._v(" "),v("td",[t._v("Method to include an external Controller")])]),t._v(" "),v("tr",[v("td",[t._v("addModule()")]),t._v(" "),v("td",[t._v("Method to include an external Module")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td")])])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);