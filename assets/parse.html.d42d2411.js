import{_ as a,o as s,c as e,e as t}from"./app.526ee9ba.js";const n={},r=t(`<p>Parse columns from string data using a simple pattern.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> parse <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;pattern&gt;</code> the pattern to match. Eg) &quot;{foo}: {bar}&quot;</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-r, --regex: use full regex syntax for patterns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a string into two named columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token string">&quot;{foo} {bar}&quot;</span>
</code></pre></div><p>Parse a string using regex pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse -r <span class="token string">&quot;(?P&lt;foo&gt;\\w+) (?P&lt;bar&gt;\\w+)&quot;</span>
</code></pre></div>`,12),o=[r];function p(l,c){return s(),e("div",null,o)}var h=a(n,[["render",p],["__file","parse.html.vue"]]);export{h as default};
