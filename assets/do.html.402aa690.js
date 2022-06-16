import{_ as t,u as n,o,c as r,a,t as s,d as c,e as p}from"./app.526ee9ba.js";const l={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},k=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; do (block) ...rest --ignore-errors</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li><li><code>...rest</code>: the parameter(s) for the block</li><li><code>--ignore-errors</code>: ignore errors as the block runs</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run the block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> hello <span class="token punctuation">}</span>
</code></pre></div><p>Run the block and ignore errors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> thisisnotarealcommand <span class="token punctuation">}</span>
</code></pre></div><p>Run the block, with a positional parameter</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token number">100</span> + <span class="token variable">$x</span> <span class="token punctuation">}</span> <span class="token number">50</span>
</code></pre></div>`,11);function g(m,b,_,f,x,e){return o(),r("div",null,[a("h1",d,[i,h,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),k])}var w=t(l,[["render",g],["__file","do.html.vue"]]);export{w as default};
