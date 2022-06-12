import{_ as t,u as n,o as p,c as o,a,t as s,d as r,e as c}from"./app.74dc26fa.js";const i={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; empty? ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names of the columns to check emptiness</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if a string is empty</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;&#39;</span> <span class="token operator">|</span> empty?
</code></pre></div><p>Check if a list is empty</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> empty?
</code></pre></div><p>Check if more than one column are empty</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>meal size<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>arepa small<span class="token punctuation">]</span> <span class="token punctuation">[</span>taco <span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> empty? meal size
</code></pre></div>`,11);function g(k,_,f,x,v,e){return p(),o("div",null,[a("h1",l,[d,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var b=t(i,[["render",g],["__file","empty.html.vue"]]);export{b as default};
