import{_ as n,u as t,o,c as r,a,t as s,d as p,e as c}from"./app.74dc26fa.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),m=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; histogram (column-name) (frequency-column-name) --percentage-type</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>column-name</code>: column name to calc frequency, no need to provide if input is just a list</li><li><code>frequency-column-name</code>: histogram&#39;s frequency column, default to be frequency column output</li><li><code>--percentage-type {string}</code>: percentage calculate method, can be &#39;normalize&#39; or &#39;relative&#39;, in &#39;normalize&#39;, defaults to be &#39;normalize&#39;</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a histogram for the types of files</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> histogram <span class="token builtin class-name">type</span>
</code></pre></div><p>Get a histogram for the types of files, with frequency column named freq</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> histogram <span class="token builtin class-name">type</span> freq
</code></pre></div><p>Get a histogram for a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> histogram
</code></pre></div><p>Get a histogram for a list of numbers, and percentage is based on the maximum value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> histogram --percentage-type relative
</code></pre></div>`,13);function g(b,k,f,_,v,e){return o(),r("div",null,[a("h1",i,[u,m,a("code",null,s(e.frontmatter.title),1)]),a("div",d,s(e.frontmatter.usage),1),h])}var y=n(l,[["render",g],["__file","histogram.html.vue"]]);export{y as default};
