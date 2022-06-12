import{_ as a,o as e,c as s,e as n}from"./app.74dc26fa.js";const t={},r=n(`<p>Generate a random decimal within a range [min..max]</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token punctuation">(</span>range<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(range)</code> Range of values</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a default decimal value between 0 and 1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal
</code></pre></div><p>Generate a random decimal less than or equal to 500</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token punctuation">..</span><span class="token number">500</span>
</code></pre></div><p>Generate a random decimal greater than or equal to 100000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">100000</span><span class="token punctuation">..</span>
</code></pre></div><p>Generate a random decimal between 1.0 and 1.1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">1.0</span><span class="token punctuation">..</span><span class="token number">1.1</span>
</code></pre></div>`,16),l=[r];function c(o,p){return e(),s("div",null,l)}var i=a(t,[["render",c],["__file","random-decimal.html.vue"]]);export{i as default};
