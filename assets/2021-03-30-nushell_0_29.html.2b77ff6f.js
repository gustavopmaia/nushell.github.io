import{_ as s,r as l,o as r,c as a,a as e,b as n,d as t,e as h}from"./app.526ee9ba.js";const i={},d=e("h1",{id:"nushell-0-29",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-29","aria-hidden":"true"},"#"),t(" Nushell 0.29")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=e("p",null,"Today, we're releasing 0.29 of Nu. This release adds more polish for paths, streaming, and more.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.29 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.29.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),m=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=t("crates.io"),w=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),x=t("."),v=h('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2>',5),N=t("notryanb added the "),I={href:"https://github.com/nushell/nushell/pull/3197",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"hash md5",-1),j=t(" command"),B=e("h2",{id:"functionality",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functionality","aria-hidden":"true"},"#"),t(" Functionality")],-1),E=t("John-Goff "),V={href:"https://github.com/nushell/nushell/pull/3166",target:"_blank",rel:"noopener noreferrer"},W=t("renamed the "),z=e("code",null,"count",-1),L=t(" command to "),D=e("code",null,"length",-1),A=t("ahkrr bumped "),C={href:"https://github.com/nushell/nushell/pull/3167",target:"_blank",rel:"noopener noreferrer"},F=t("rustyline to 8.0.0"),G=t("fdncred extended "),J={href:"https://github.com/nushell/nushell/pull/3195",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"char",-1),R=t(" to allow for more complex unicode"),S=t("fdncred also added support to "),Y={href:"https://github.com/nushell/nushell/pull/3210",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"cd ~/dir",-1),q=t("gonatz added "),H={href:"https://github.com/nushell/nushell/pull/3201",target:"_blank",rel:"noopener noreferrer"},K=t("forward slash autocompletion for Windows"),M=t("stormasm added the "),O={href:"https://github.com/nushell/nushell/pull/3203",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"$scope",-1),U=t(" variable to see into the current scope"),X=t(". The currently only supports seeing the aliases in scope."),Z=t("DonnotPanic added "),ee={href:"https://github.com/nushell/nushell/pull/3207",target:"_blank",rel:"noopener noreferrer"},te=t("timezone support for time conversions"),oe=e("h2",{id:"internal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal","aria-hidden":"true"},"#"),t(" Internal")],-1),ne=t("jonathandturner fixed an issue with "),se={href:"https://github.com/nushell/nushell/pull/3153",target:"_blank",rel:"noopener noreferrer"},le=t("input stream buffering for text"),re=t("fdncred updated the "),ae={href:"https://github.com/nushell/nushell/pull/3154",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,"fetch",-1),ie=t(" command for better portability"),de=t("andrasio improved "),ce={href:"https://github.com/nushell/nushell/pull/3179",target:"_blank",rel:"noopener noreferrer"},_e=t("the test playground"),ue=t("andrasio also improved "),pe={href:"https://github.com/nushell/nushell/pull/3217",target:"_blank",rel:"noopener noreferrer"},fe=t("test coverage for context and more"),ge=t("nibon7 fixed "),me={href:"https://github.com/nushell/nushell/pull/3184",target:"_blank",rel:"noopener noreferrer"},be=t("running tests with "),ke=e("code",null,"--release",-1),we=t("ahkrr improved "),ye={href:"https://github.com/nushell/nushell/pull/3189",target:"_blank",rel:"noopener noreferrer"},xe=t("prompt reliability"),ve=e("h2",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),t(" Documentation")],-1),Ne=t("suzanje fixed some broken "),Ie={href:"https://github.com/nushell/nushell/pull/3198",target:"_blank",rel:"noopener noreferrer"},Te=t("contributor book links"),je=t("mvolkmann fixed a "),Be={href:"https://github.com/nushell/nushell/pull/3216",target:"_blank",rel:"noopener noreferrer"},Ee=t("typo in the help text"),Ve=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),We=t("The "),ze={href:"https://github.com/nushell/nushell/pull/3166",target:"_blank",rel:"noopener noreferrer"},Le=e("code",null,"count",-1),De=t(" command is now "),Ae=e("code",null,"length",-1),Ce=t(" for better discoverability."),Fe=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Ge=t("There are a few different on-going projects to help Nushell. New this week is "),Je={href:"https://github.com/jonathandturner/enginep/tree/gradient_deep_dive_wip",target:"_blank",rel:"noopener noreferrer"},Pe=t("engine-p"),Re=t(", an experimental engine that explores what an iterator+parallel approach would be like in contrast to Nu's current async stream approach. Early results are promising here, as the engine appears to perform better while also using a simpler set of patterns, which should help new contributors."),Se=t("We've also posted our "),Ye={href:"https://github.com/nushell/rfcs/pull/6",target:"_blank",rel:"noopener noreferrer"},$e=t("proposal for shipping 1.0"),qe=t(". This lays out the proposed path for Nushell to reach 1.0 and beyond, including the features Nushell will ship with at 1.0. If you'd like to give us feedback, we'd love to have it. You can add comments directly on the proposal and we'll gather the feedback and use it in the next round of revisions.");function He(Ke,Me){const o=l("ExternalLinkIcon");return r(),a("div",null,[d,c,_,u,e("p",null,[p,e("a",f,[g,n(o)]),m,e("a",b,[k,n(o)]),w,y,x]),v,e("ul",null,[e("li",null,[N,e("a",I,[T,j,n(o)])])]),B,e("ul",null,[e("li",null,[E,e("a",V,[W,z,L,D,n(o)])]),e("li",null,[A,e("a",C,[F,n(o)])]),e("li",null,[G,e("a",J,[P,R,n(o)])]),e("li",null,[S,e("a",Y,[$,n(o)])]),e("li",null,[q,e("a",H,[K,n(o)])]),e("li",null,[M,e("a",O,[Q,U,n(o)]),X]),e("li",null,[Z,e("a",ee,[te,n(o)])])]),oe,e("ul",null,[e("li",null,[ne,e("a",se,[le,n(o)])]),e("li",null,[re,e("a",ae,[he,ie,n(o)])]),e("li",null,[de,e("a",ce,[_e,n(o)])]),e("li",null,[ue,e("a",pe,[fe,n(o)])]),e("li",null,[ge,e("a",me,[be,ke,n(o)])]),e("li",null,[we,e("a",ye,[xe,n(o)])])]),ve,e("ul",null,[e("li",null,[Ne,e("a",Ie,[Te,n(o)])]),e("li",null,[je,e("a",Be,[Ee,n(o)])])]),Ve,e("ul",null,[e("li",null,[We,e("a",ze,[Le,De,Ae,n(o)]),Ce])]),Fe,e("p",null,[Ge,e("a",Je,[Pe,n(o)]),Re]),e("p",null,[Se,e("a",Ye,[$e,n(o)]),qe])])}var Qe=s(i,[["render",He],["__file","2021-03-30-nushell_0_29.html.vue"]]);export{Qe as default};
