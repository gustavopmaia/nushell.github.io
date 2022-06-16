import{_ as n,u as t,o,c,a,t as e,d as p,e as r}from"./app.526ee9ba.js";const l={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},g=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str downcase ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally downcase text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;NU&#39;</span> <span class="token operator">|</span> str downcase
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;TESTa&#39;</span> <span class="token operator">|</span> str downcase
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA ColB
</code></pre></div>`,13);function k(_,m,f,x,w,s){return o(),c("div",null,[a("h1",d,[i,u,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),g])}var v=n(l,[["render",k],["__file","str_downcase.html.vue"]]);export{v as default};
