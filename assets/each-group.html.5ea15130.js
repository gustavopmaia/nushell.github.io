import{_ as a,o as s,c as e,e as n}from"./app.74dc26fa.js";const o={},t=n(`<p>Runs a block on groups of <code>group_size</code> rows of a table at a time.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> each group <span class="token operator">&lt;</span>group_size<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;group_size&gt;</code> the size of each group</li><li><code>&lt;block&gt;</code> the block to run on each group</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo the sum of each pair</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> each group <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$it</span> <span class="token operator">|</span> math <span class="token function">sum</span> <span class="token punctuation">}</span>
</code></pre></div>`,10),p=[t];function c(l,r){return s(),e("div",null,p)}var h=a(o,[["render",c],["__file","each-group.html.vue"]]);export{h as default};
