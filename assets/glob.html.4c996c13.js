import{_ as t,u as o,o as n,c as r,a,t as s,d as l,e as c}from"./app.74dc26fa.js";const p={computed:{frontmatter(){return o().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=l(),g={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; glob (glob) --depth</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>glob</code>: the glob expression</li><li><code>--depth {int}</code>: directory depth to search</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>For more glob pattern help please refer to https://github.com/olson-sean-k/wax
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Search for *.rs files</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob *.rs
</code></pre></div><p>Search for *.rs and *.toml files recursively up to 2 folders deep</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob **/*.<span class="token punctuation">{</span>rs,toml<span class="token punctuation">}</span> --depth <span class="token number">2</span>
</code></pre></div><p>Search for files and folders that begin with uppercase C and lowercase c</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob <span class="token string">&quot;[Cc]*&quot;</span>
</code></pre></div><p>Search for files and folders like abc or xyz substituting a character for ?</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob <span class="token string">&quot;{a?c,x?z}&quot;</span>
</code></pre></div><p>A case-insensitive search for files and folders that begin with c</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob <span class="token string">&quot;(?i)c*&quot;</span>
</code></pre></div><p>Search for files for folders that do not begin with c, C, b, M, or s</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob <span class="token string">&quot;[!cCbMs]*&quot;</span>
</code></pre></div><p>Search for files or folders with 3 a&#39;s in a row in the name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob <span class="token operator">&lt;</span>a*:<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>
</code></pre></div><p>Search for files or folders with only a, b, c, or d in the file name between 1 and 10 times</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob <span class="token operator">&lt;</span><span class="token punctuation">[</span>a-d<span class="token punctuation">]</span>:1,1<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
</code></pre></div>`,23);function b(f,m,x,k,v,e){return n(),r("div",null,[a("h1",i,[d,h,a("code",null,s(e.frontmatter.title),1)]),a("div",g,s(e.frontmatter.usage),1),u])}var w=t(p,[["render",b],["__file","glob.html.vue"]]);export{w as default};
