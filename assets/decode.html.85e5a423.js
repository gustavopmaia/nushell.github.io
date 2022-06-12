import{_ as s,u as n,o as r,c as o,a as e,t,d,e as c}from"./app.74dc26fa.js";const i={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=d(),u={style:{"white-space":"pre-wrap"}},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; decode (encoding)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>encoding</code>: the text encoding to use</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Multiple encodings are supported, here is an example of a few:
big5, euc-jp, euc-kr, gbk, iso-8859-1, utf-16, cp1252, latin5

For a more complete list of encodings please refer to the encoding_rs
documentation link at https://docs.rs/encoding_rs/0.8.28/encoding_rs/#statics
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Decode the output of an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> myfile.q <span class="token operator">|</span> decode utf-8
</code></pre></div>`,9);function g(m,_,x,b,v,a){return r(),o("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),f])}var N=s(i,[["render",g],["__file","decode.html.vue"]]);export{N as default};
