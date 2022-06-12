import{_ as r,u as s,o as n,c,a as e,t,d as o,e as d}from"./app.74dc26fa.js";const i={computed:{frontmatter(){return s().value}}},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),u={style:{"white-space":"pre-wrap"}},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr replace --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr replace -p ab -r AB
</code></pre></div>`,7);function f(m,g,x,b,k,a){return n(),c("div",null,[e("h1",p,[l,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var B=r(i,[["render",f],["__file","dfr_replace.html.vue"]]);export{B as default};
