import{_ as a,o as e,c as n,e as s}from"./app.526ee9ba.js";const t={},r=s(`<p>Generate a random integer [min..max]</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token punctuation">(</span>range<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(range)</code> Range of values</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate an unconstrained random integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer
</code></pre></div><p>Generate a random integer less than or equal to 500</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token punctuation">..</span><span class="token number">500</span>
</code></pre></div><p>Generate a random integer greater than or equal to 100000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token number">100000</span><span class="token punctuation">..</span>
</code></pre></div><p>Generate a random integer between 1 and 10</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span>
</code></pre></div>`,16),o=[r];function p(l,c){return e(),n("div",null,o)}var i=a(t,[["render",p],["__file","random-integer.html.vue"]]);export{i as default};
