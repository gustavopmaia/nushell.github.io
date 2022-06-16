import{_ as n,u as t,o as r,c as o,a,t as s,d as p,e as c}from"./app.526ee9ba.js";const l={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; arg-sort --reverse --nulls-last</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--reverse</code>: reverse order</li><li><code>--nulls-last</code>: nulls ordered last</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns indexes for a sorted series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> arg-sort
</code></pre></div><p>Returns indexes for a sorted series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> arg-sort -r
</code></pre></div>`,9);function _(g,k,f,b,x,e){return r(),o("div",null,[a("h1",d,[i,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var S=n(l,[["render",_],["__file","_arg-sort.html.vue"]]);export{S as default};
