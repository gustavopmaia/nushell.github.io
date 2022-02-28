(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{772:function(t,a,e){"use strict";e.r(a);var s=e(56),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Register a plugin")]),t._v(" "),e("h2",{attrs:{id:"signature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),e("p",[e("code",[t._v("> register (plugin) (signature) --encoding --shell")])]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("plugin")]),t._v(": path of executable for plugin")]),t._v(" "),e("li",[e("code",[t._v("signature")]),t._v(": Block with signature description as json object")]),t._v(" "),e("li",[e("code",[t._v("--encoding {string}")]),t._v(": Encoding used to communicate with plugin. Options: [capnp, json]")]),t._v(" "),e("li",[e("code",[t._v("--shell {path}")]),t._v(": path of shell used to run plugin (cmd, sh, python, etc)")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("p",[t._v("Register "),e("code",[t._v("nu_plugin_extra_query")]),t._v(" plugin from ~/.cargo/bin/ dir")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" register -e capnp ~/.cargo/bin/nu_plugin_extra_query\n")])])]),e("p",[t._v("Register "),e("code",[t._v("nu_plugin_extra_query")]),t._v(" plugin from "),e("code",[t._v("nu -c")]),t._v("(plugin will be available in that nu session only)")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" plugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("which nu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".path.0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nu_plugin_extra_query'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" nu -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("$'register -e capnp ($plugin); version'")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);