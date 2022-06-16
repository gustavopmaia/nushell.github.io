import{_ as n,u as t,o,c as p,a,t as e,d as r,e as c}from"./app.526ee9ba.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; set (value) --mask</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>value</code>: value to be inserted in series</li><li><code>--mask {any}</code>: mask indicating insertions</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shifts the values by a given period</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> <span class="token builtin class-name">shift</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> mask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">|</span> is-null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$s</span> <span class="token operator">|</span> <span class="token builtin class-name">set</span> <span class="token number">0</span> --mask <span class="token variable">$mask</span>
</code></pre></div>`,7);function m(_,b,f,v,g,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),k])}var $=n(l,[["render",m],["__file","_set.html.vue"]]);export{$ as default};
