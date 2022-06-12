import{_ as a,o as s,c as e,e as n}from"./app.74dc26fa.js";const t={},p=n(`<p>Convert a path into structured data.</p><p>Each path is split into a table with &#39;parent&#39;, &#39;stem&#39; and &#39;extension&#39; fields. On Windows, an extra &#39;prefix&#39; column is added.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> path parse <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: Optionally operate by column path</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-e, --extension <code>&lt;string&gt;</code>: Manually supply the extension (without the dot)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path parse
</code></pre></div><p>Replace a complex extension</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;/home/viking/spam.tar.gz&#39;</span> <span class="token operator">|</span> path parse -e tar.gz <span class="token operator">|</span> update extension <span class="token punctuation">{</span> <span class="token string">&#39;txt&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Ignore the extension</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;/etc/conf.d&#39;</span> <span class="token operator">|</span> path parse -e <span class="token string">&#39;&#39;</span>
</code></pre></div><p>Parse all paths under the &#39;name&#39; column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path parse name
</code></pre></div>`,17),o=[p];function l(r,c){return s(),e("div",null,o)}var h=a(t,[["render",l],["__file","path-parse.html.vue"]]);export{h as default};
