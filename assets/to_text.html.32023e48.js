import{_ as s,u as n,o,c as r,a,t,d as p,e as c}from"./app.74dc26fa.js";const l={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=p(),u={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to text </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> to text
</code></pre></div><p>Outputs external data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> <span class="token builtin class-name">help</span> -a <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">find</span> -r <span class="token string">&#39;^ &#39;</span> <span class="token operator">|</span>  to text
</code></pre></div><p>Outputs records as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span>  to text
</code></pre></div>`,9);function _(x,m,f,k,b,e){return o(),r("div",null,[a("h1",d,[i,h,a("code",null,t(e.frontmatter.title),1)]),a("div",u,t(e.frontmatter.usage),1),g])}var B=s(l,[["render",_],["__file","to_text.html.vue"]]);export{B as default};
