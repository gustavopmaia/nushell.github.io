import{_ as a,o as s,c as e,e as n}from"./app.526ee9ba.js";const t={},l=n(`<p>outputs the lengths of the strings in the pipeline</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str length <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: optionally find length of text by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the lengths of multiple strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> str length
</code></pre></div><p>Return the lengths of multiple strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token string">&#39;there&#39;</span> <span class="token operator">|</span> str length
</code></pre></div>`,12),r=[l];function p(h,o){return s(),e("div",null,r)}var i=a(t,[["render",p],["__file","str-length.html.vue"]]);export{i as default};
