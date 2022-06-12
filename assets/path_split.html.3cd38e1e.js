import{_ as s,u as n,o as p,c as o,a,t,d as r,e as c}from"./app.74dc26fa.js";const l={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=r(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path split --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a path into parts</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">split</span>
</code></pre></div><p>Split all paths under the &#39;name&#39; column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span><span class="token punctuation">)</span> <span class="token operator">|</span> path <span class="token function">split</span> -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div>`,9);function _(f,g,k,x,b,e){return p(),o("div",null,[a("h1",i,[d,h,a("code",null,t(e.frontmatter.title),1)]),a("div",u,t(e.frontmatter.usage),1),m])}var S=s(l,[["render",_],["__file","path_split.html.vue"]]);export{S as default};
