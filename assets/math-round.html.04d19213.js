import{_ as a,o as s,c as n,e}from"./app.526ee9ba.js";const t={},o=e(`<p>Applies the round function to a list of numbers</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> math round <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-p, --precision <code>&lt;number&gt;</code>: digits of precision</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the round function to a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math round
</code></pre></div><p>Apply the round function with precision specified</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1.555</span> <span class="token number">2.333</span> -3.111<span class="token punctuation">]</span> <span class="token operator">|</span> math round -p <span class="token number">2</span>
</code></pre></div>`,10),p=[o];function c(l,r){return s(),n("div",null,p)}var u=a(t,[["render",c],["__file","math-round.html.vue"]]);export{u as default};
