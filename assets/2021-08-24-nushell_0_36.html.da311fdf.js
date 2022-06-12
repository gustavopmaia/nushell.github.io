import{_ as s,r,o as l,c as a,a as e,b as o,d as t,e as i}from"./app.74dc26fa.js";var h="/assets/0_36_tutor.1568fd1c.png";const d={},c=e("h1",{id:"nushell-0-36",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-36","aria-hidden":"true"},"#"),t(" Nushell 0.36")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=e("p",null,"Today, we're releasing 0.36 of Nu. This release fixes some long-standing issues with history, improves the help system, improves dataframes, and much more.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f=t("Nu 0.36 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0.36.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),b=t(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},y=t("crates.io"),k=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),v=t("."),N=i(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="help-now-has-search-fdncred" tabindex="-1"><a class="header-anchor" href="#help-now-has-search-fdncred" aria-hidden="true">#</a> Help now has search (fdncred)</h2><p>You can now use <code>help -f &lt;term&gt;</code> and search the help for text. This can come in handy if you know roughly what you want but can&#39;t remember the name of the command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; help -f string
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502           name           \u2502                     usage                      \u2502 extra_usage
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 ansi strip               \u2502 strip ansi escape sequences from string        \u2502
  1 \u2502 build-string             \u2502 Builds a string from the arguments.            \u2502
  2 \u2502 dataframe concatenate    \u2502 [Series] Concatenates strings with other array \u2502
  3 \u2502 dataframe contains       \u2502 [Series] Checks if a pattern is contained in a \u2502
    \u2502                          \u2502 string                                         \u2502
  4 \u2502 dataframe replace        \u2502 [Series] Replace the leftmost (sub)string by a \u2502
    \u2502                          \u2502 regex pattern                                  \u2502
...
</code></pre></div><h2 id="built-in-tutor-jt" tabindex="-1"><a class="header-anchor" href="#built-in-tutor-jt" aria-hidden="true">#</a> Built-in tutor (jt)</h2><p>In addition to the new help search, we&#39;ve also started to build out a built-in Nushell tutorial. You can navigate by topic or search the help text for a string.</p><p><img src="`+h+'" alt="Screenshot showing the tutor command running &#39;tutor table&#39;"></p><p>We&#39;ve only added a few topics so far, but we hope to grow these topics (with your help) over the coming releases.</p><h2 id="new-commands-and-features" tabindex="-1"><a class="header-anchor" href="#new-commands-and-features" aria-hidden="true">#</a> New commands and features</h2>',11),j={href:"https://github.com/nushell/nushell/pull/3917",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"drop nth",-1),T=t(" - drops the given rows (andrasio)"),B={href:"https://github.com/nushell/nushell/pull/3918",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"PROMPT_STRING",-1),S=t(" environment variable"),V=t(" - configures the script to run to create the prompt directly from the environment (elferherrera)"),C={href:"https://github.com/nushell/nushell/pull/3919",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"zip",-1),W=t(" - combine two lists into one list of pairs (andrasio)"),q=e("h2",{id:"dataframe-improvements-elferherrera",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dataframe-improvements-elferherrera","aria-hidden":"true"},"#"),t(" Dataframe improvements (elferherrera)")],-1),z={href:"https://github.com/nushell/nushell/pull/3894",target:"_blank",rel:"noopener noreferrer"},A=t("datetime commands"),D={href:"https://github.com/nushell/nushell/pull/3907",target:"_blank",rel:"noopener noreferrer"},L=t("describe command"),P={href:"https://github.com/nushell/nushell/pull/3960",target:"_blank",rel:"noopener noreferrer"},Y=t("rolling and cumulative commands"),G=e("h2",{id:"important-bugfixes-lily-mara-gwenn-jt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#important-bugfixes-lily-mara-gwenn-jt","aria-hidden":"true"},"#"),t(" Important bugfixes (lily-mara, gwenn, jt)")],-1),H=t("A long-standing issue with history getting garbled when you have multiple shells open sending history updates is hopefully "),M={href:"https://github.com/kkawakam/rustyline/pull/560",target:"_blank",rel:"noopener noreferrer"},O=t("now fixed"),F=t(". Thanks to the rustyline maintainers for helping find the root cause and creating a fix for it."),J=e("h2",{id:"additional-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),t(" Additional improvements")],-1),K=t("waldyrious fixed "),Q={href:"https://github.com/nushell/nushell/pull/3890",target:"_blank",rel:"noopener noreferrer"},U=t("a typo"),X=t(", and fixed "),Z={href:"https://github.com/nushell/nushell/pull/3891",target:"_blank",rel:"noopener noreferrer"},$=t("issue templates"),ee=t("fdncred started a list of "),te={href:"https://github.com/nushell/nushell/pull/3895",target:"_blank",rel:"noopener noreferrer"},ne=t("projects that officially support Nushell"),oe=t("RealCundo added "),se={href:"https://github.com/nushell/nushell/pull/3888",target:"_blank",rel:"noopener noreferrer"},re=t("PartialEq to ReturnValue"),le=t("hedonihilist improved "),ae={href:"https://github.com/nushell/nushell/pull/3902",target:"_blank",rel:"noopener noreferrer"},ie=t("how DirInfo calculates directory size"),he=t("soumil-07 "),de={href:"https://github.com/nushell/nushell/pull/3905",target:"_blank",rel:"noopener noreferrer"},ce=t("worked around a BigDecimal issue that broke "),ue=e("code",null,"math floor",-1),_e=t("jt added "),pe={href:"https://github.com/nushell/nushell/pull/3906",target:"_blank",rel:"noopener noreferrer"},fe=e("code",null,"in",-1),me=t(" and "),ge=e("code",null,"not-in",-1),be=t(" for strings"),we=t(", changed the "),ye={href:"https://github.com/nushell/nushell/pull/3924",target:"_blank",rel:"noopener noreferrer"},ke=t("release build to focus on binary size"),xe=t("baoyachi "),ve={href:"https://github.com/nushell/nushell/pull/3914",target:"_blank",rel:"noopener noreferrer"},Ne=t("updated shadow-rs, which fixes some datetime issues and more"),je=t("knottio added "),Ie={href:"https://github.com/nushell/nushell/pull/3921",target:"_blank",rel:"noopener noreferrer"},Te=t("trailing slash when completing symlinked directory"),Be=t("fdncred fixed "),Re={href:"https://github.com/nushell/nushell/pull/3923",target:"_blank",rel:"noopener noreferrer"},Se=e("code",null,"fetch",-1),Ve=t(" to better follow redirects"),Ce=t(", and improved the "),Ee={href:"https://github.com/nushell/nushell/pull/3962",target:"_blank",rel:"noopener noreferrer"},We=t("issue template"),qe=t("filaretov fixed "),ze={href:"https://github.com/nushell/nushell/pull/3936",target:"_blank",rel:"noopener noreferrer"},Ae=t("unaliasing to only affect the current scope"),De=t("kubouch fixed "),Le={href:"https://github.com/nushell/nushell/pull/3939",target:"_blank",rel:"noopener noreferrer"},Pe=t("an issue where "),Ye=e("code",null,"source",-1),Ge=t(" couldn't handle paths with emojis"),He=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Me=t("The ability to search help and improve a built-in tutorial gives us a lot of opportunties to make Nushell more user-friendly, especially to users who are just getting started learning what Nushell can do. If you're interested, these are some good places to "),Oe={href:"https://github.com/nushell/nushell/blob/main/crates/nu-command/src/commands/core_commands/tutor.rs",target:"_blank",rel:"noopener noreferrer"},Fe=t("jump in and help"),Je=t(" if you have specific topics or areas of interest."),Ke=e("p",null,"The projects we reported on last time, engine-q and reedline, are steadily improving. We're currently working through any remaining issues so that we can begin experimenting with integrating them into Nushell.",-1);function Qe(Ue,Xe){const n=r("ExternalLinkIcon");return l(),a("div",null,[c,u,_,p,e("p",null,[f,e("a",m,[g,o(n)]),b,e("a",w,[y,o(n)]),k,x,v]),N,e("ul",null,[e("li",null,[e("a",j,[I,o(n)]),T]),e("li",null,[e("a",B,[R,S,o(n)]),V]),e("li",null,[e("a",C,[E,o(n)]),W])]),q,e("ul",null,[e("li",null,[e("a",z,[A,o(n)])]),e("li",null,[e("a",D,[L,o(n)])]),e("li",null,[e("a",P,[Y,o(n)])])]),G,e("p",null,[H,e("a",M,[O,o(n)]),F]),J,e("ul",null,[e("li",null,[K,e("a",Q,[U,o(n)]),X,e("a",Z,[$,o(n)])]),e("li",null,[ee,e("a",te,[ne,o(n)])]),e("li",null,[oe,e("a",se,[re,o(n)])]),e("li",null,[le,e("a",ae,[ie,o(n)])]),e("li",null,[he,e("a",de,[ce,ue,o(n)])]),e("li",null,[_e,e("a",pe,[fe,me,ge,be,o(n)]),we,e("a",ye,[ke,o(n)])]),e("li",null,[xe,e("a",ve,[Ne,o(n)])]),e("li",null,[je,e("a",Ie,[Te,o(n)])]),e("li",null,[Be,e("a",Re,[Se,Ve,o(n)]),Ce,e("a",Ee,[We,o(n)])]),e("li",null,[qe,e("a",ze,[Ae,o(n)])]),e("li",null,[De,e("a",Le,[Pe,Ye,Ge,o(n)])])]),He,e("p",null,[Me,e("a",Oe,[Fe,o(n)]),Je]),Ke])}var $e=s(d,[["render",Qe],["__file","2021-08-24-nushell_0_36.html.vue"]]);export{$e as default};
