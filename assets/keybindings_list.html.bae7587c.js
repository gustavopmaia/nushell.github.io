import{_ as t,u as i,o as d,c as o,a as e,t as s,d as r,e as n}from"./app.74dc26fa.js";const l={computed:{frontmatter(){return i().value}}},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),m={style:{"white-space":"pre-wrap"}},g=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; keybindings list --modifiers --keycodes --modes --events --edits</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--modifiers</code>: list of modifiers</li><li><code>--keycodes</code>: list of keycodes</li><li><code>--modes</code>: list of edit modes</li><li><code>--events</code>: list of reedline event</li><li><code>--edits</code>: list of edit commands</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get list of key modifiers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list -m
</code></pre></div><p>Get list of reedline events and edit commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list -e -d
</code></pre></div><p>Get list with all the available options</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list
</code></pre></div>`,11);function u(f,_,b,v,k,a){return d(),o("div",null,[e("h1",c,[h,p,e("code",null,s(a.frontmatter.title),1)]),e("div",m,s(a.frontmatter.usage),1),g])}var y=t(l,[["render",u],["__file","keybindings_list.html.vue"]]);export{y as default};
