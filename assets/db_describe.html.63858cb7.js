import{_ as s,u as r,o as n,c as o,a as e,t,d,e as c}from"./app.74dc26fa.js";const i={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),_={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db describe </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Describe SQLite database constructed query</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> foo.db <span class="token operator">|</span> db <span class="token keyword">select</span> table_1 <span class="token operator">|</span> db describe
</code></pre></div>`,5);function b(f,m,g,x,k,a){return n(),o("div",null,[e("h1",l,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",_,t(a.frontmatter.usage),1),u])}var y=s(i,[["render",b],["__file","db_describe.html.vue"]]);export{y as default};
