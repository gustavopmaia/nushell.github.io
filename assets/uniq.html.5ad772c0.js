import{_ as e,u as t,o,c as p,a,t as n,d as c,e as r}from"./app.526ee9ba.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},g=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; uniq --count --repeated --ignore-case --unique</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--count</code>: Count the unique rows</li><li><code>--repeated</code>: Count the rows that has more than one value</li><li><code>--ignore-case</code>: Ignore differences in case when comparing</li><li><code>--unique</code>: Only return unique values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove duplicate rows of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span>
</code></pre></div><p>Only print duplicate lines, one for each group</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> -d
</code></pre></div><p>Only print unique lines lines</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> -u
</code></pre></div><p>Ignore differences in case when comparing</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span> <span class="token string">&#39;goodbye&#39;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> -i
</code></pre></div><p>Remove duplicate rows and show counts of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> -c
</code></pre></div>`,15);function k(m,b,f,_,v,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),g])}var q=e(l,[["render",k],["__file","uniq.html.vue"]]);export{q as default};
