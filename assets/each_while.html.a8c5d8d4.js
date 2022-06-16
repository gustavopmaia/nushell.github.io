import{_ as e,u as t,o as p,c as o,a,t as n,d as c,e as r}from"./app.526ee9ba.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),k={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; each while (block) --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li><li><code>--numbered</code>: iterate with an index</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Multiplies elements in list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token keyword">while</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span><span class="token variable">$it</span><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token variable">$nothing</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>Iterate over each element, print the matching value and its index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token keyword">while</span> -n <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span>.item <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span> $<span class="token string">&quot;value (<span class="token variable">$it</span>.item) at (<span class="token variable">$it</span>.index)!&quot;</span><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token variable">$nothing</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div>`,9);function m(b,_,g,v,f,s){return p(),o("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",k,n(s.frontmatter.usage),1),h])}var w=e(l,[["render",m],["__file","each_while.html.vue"]]);export{w as default};
