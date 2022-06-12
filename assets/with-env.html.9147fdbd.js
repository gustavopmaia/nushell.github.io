import{_ as e,u as t,o,c as p,a,t as n,d as c,e as r}from"./app.74dc26fa.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},v=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; with-env (variable) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>variable</code>: the environment variable to temporarily set</li><li><code>block</code>: the block to run once the variable is set</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set the MYENV environment variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">[</span>MYENV <span class="token string">&quot;my env value&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token variable">$env</span>.MYENV <span class="token punctuation">}</span>
</code></pre></div><p>Set by primitive value list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">[</span>X Y W Z<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token variable">$env</span>.X <span class="token punctuation">}</span>
</code></pre></div><p>Set by single row table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">[</span><span class="token punctuation">[</span>X W<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Y Z<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token variable">$env</span>.W <span class="token punctuation">}</span>
</code></pre></div><p>Set by row(e.g. <code>open x.json</code> or <code>from json</code>)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;{&quot;X&quot;:&quot;Y&quot;,&quot;W&quot;:&quot;Z&quot;}&#39;</span><span class="token operator">|</span>from json<span class="token operator">|</span>with-env <span class="token variable">$in</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.X <span class="token variable">$env</span>.W <span class="token punctuation">}</span>
</code></pre></div>`,13);function k(b,g,m,_,f,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),v])}var w=e(l,[["render",k],["__file","with-env.html.vue"]]);export{w as default};
