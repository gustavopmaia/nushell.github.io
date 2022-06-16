import{_ as t,u as n,o as r,c as l,a,t as s,d as o,e as c}from"./app.526ee9ba.js";const p={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fill-null (fill)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>fill</code>: Expression to use to fill the null values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fills the null values by 0</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> <span class="token builtin class-name">shift</span> <span class="token number">2</span> <span class="token operator">|</span> fill-null <span class="token number">0</span>
</code></pre></div>`,7);function f(_,k,b,x,g,e){return r(),l("div",null,[a("h1",i,[d,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var N=t(p,[["render",f],["__file","_fill-null.html.vue"]]);export{N as default};
