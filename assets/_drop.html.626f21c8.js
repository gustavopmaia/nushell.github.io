import{_ as t,u as n,o,c as r,a,t as s,d as p,e as c}from"./app.526ee9ba.js";const d={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column names to be dropped</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop column a</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> drop a
</code></pre></div>`,7);function _(k,f,b,g,x,e){return o(),r("div",null,[a("h1",l,[i,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var B=t(d,[["render",_],["__file","_drop.html.vue"]]);export{B as default};
