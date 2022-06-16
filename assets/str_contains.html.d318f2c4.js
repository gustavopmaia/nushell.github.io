import{_ as t,u as e,o,c as p,a,t as n,d as c,e as r}from"./app.526ee9ba.js";const i={computed:{frontmatter(){return e().value}}},l={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},g=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str contains (pattern) ...rest --insensitive --not</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to find</li><li><code>...rest</code>: optionally check if string contains pattern by column paths</li><li><code>--insensitive</code>: search is case insensitive</li><li><code>--not</code>: does not contain</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if string contains pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Check if string contains pattern case insensitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains -i <span class="token string">&#39;.RB&#39;</span>
</code></pre></div><p>Check if string contains pattern in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token string">&#39;e&#39;</span> ColA
</code></pre></div><p>Check if string contains pattern in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains -i <span class="token string">&#39;E&#39;</span> ColA
</code></pre></div><p>Check if string contains pattern in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test hello<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token string">&#39;e&#39;</span> ColA ColB
</code></pre></div><p>Check if string contains pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;banana&#39;</span>
</code></pre></div><p>Check if list contains pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one two three<span class="token punctuation">]</span> <span class="token operator">|</span> str contains o
</code></pre></div><p>Check if list does not contain pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one two three<span class="token punctuation">]</span> <span class="token operator">|</span> str contains -n o
</code></pre></div>`,21);function k(b,f,_,v,m,s){return o(),p("div",null,[a("h1",l,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),g])}var C=t(i,[["render",k],["__file","str_contains.html.vue"]]);export{C as default};
