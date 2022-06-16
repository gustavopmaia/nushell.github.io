import{_ as s,u as r,o as n,c as o,a as e,t,d as i,e as d}from"./app.526ee9ba.js";const c={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(),m={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db limit (limit)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>limit</code>: Number of rows to extract for query</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Limits selection from table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db from table_a
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db limit <span class="token number">10</span>
    <span class="token operator">|</span> db describe
</code></pre></div>`,7);function _(f,b,x,g,k,a){return n(),o("div",null,[e("h1",l,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",m,t(a.frontmatter.usage),1),u])}var y=s(c,[["render",_],["__file","db_limit.html.vue"]]);export{y as default};
