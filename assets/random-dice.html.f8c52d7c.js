import{_ as e,o as a,c as s,e as n}from"./app.526ee9ba.js";const d={},c=n(`<p>Generate a random dice roll</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-d, --dice <code>&lt;integer&gt;</code>: The amount of dice being rolled</li><li>-s, --sides <code>&lt;integer&gt;</code>: The amount of sides a die has</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Roll 1 dice with 6 sides each</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice
</code></pre></div><p>Roll 10 dice with 12 sides each</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice -d <span class="token number">10</span> -s <span class="token number">12</span>
</code></pre></div>`,10),l=[c];function o(t,i){return a(),s("div",null,l)}var h=e(d,[["render",o],["__file","random-dice.html.vue"]]);export{h as default};
