import{_ as n,u as t,o,c as p,a,t as e,d as r,e as c}from"./app.526ee9ba.js";const u={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),m={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to-dummies </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe with dummy variables from a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> to-dummies
</code></pre></div><p>Create new dataframe with dummy variables from a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> to-dummies
</code></pre></div>`,7);function k(_,f,b,g,x,s){return o(),p("div",null,[a("h1",l,[i,d,a("code",null,e(s.frontmatter.title),1)]),a("div",m,e(s.frontmatter.usage),1),h])}var w=n(u,[["render",k],["__file","_to-dummies.html.vue"]]);export{w as default};
