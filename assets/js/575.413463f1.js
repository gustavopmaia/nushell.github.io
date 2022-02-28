(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{1035:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Parse text as "),a("code",[t._v(".vcf")]),t._v(" and create table.")]),t._v(" "),a("p",[t._v("Syntax: "),a("code",[t._v("from vcf")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Suppose contacts.txt is a text file that is formatted like a "),a("code",[t._v(".vcf")]),t._v(" (vCard) file:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" contacts.txt\nBEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nN:Doe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("John"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEMAIL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INTERNET:john.doe99@gmail.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("Pass the output of the "),a("code",[t._v("open")]),t._v(" command to "),a("code",[t._v("from vcf")]),t._v(" to get a correctly formatted table:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" contacts.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from vcf\n─────┬─────────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   │ properties")]),t._v("\n─────┼─────────────────\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" contacts.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from vcf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get properties "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$it")]),t._v(".name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FN"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" value\n─────┬──────────────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   │")]),t._v("\n─────┼──────────────────────\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ John Doe\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);