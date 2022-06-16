import{_ as s,o as a,c as n,e as p}from"./app.526ee9ba.js";const t={},e=p(`<p><code>debug</code> prints a debugging view of the table data. It is useful when you want to get the specific types of the data and while investigating errors.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> first <span class="token number">2</span> <span class="token operator">|</span> debug
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;.azure&quot;</span>
   \u2502 <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;Dir&quot;</span>
   \u2502 <span class="token assign-left variable">size</span><span class="token operator">=</span>nothing
   \u2502 <span class="token assign-left variable">modified</span><span class="token operator">=</span><span class="token number">2020</span>-02-09T05:31:39.950305440Z<span class="token variable"><span class="token punctuation">((</span>B
   \u2502 mdate<span class="token punctuation">))</span></span>
 <span class="token number">1</span> \u2502 <span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;.cargo&quot;</span>
   \u2502 <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;Dir&quot;</span>
   \u2502 <span class="token assign-left variable">size</span><span class="token operator">=</span>nothing
   \u2502 <span class="token assign-left variable">modified</span><span class="token operator">=</span><span class="token number">2020</span>-01-06T05:45:30.933303081Z<span class="token variable"><span class="token punctuation">((</span>B
   \u2502 mdate<span class="token punctuation">))</span></span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> last <span class="token number">8</span> <span class="token operator">|</span> get <span class="token builtin class-name">type</span> <span class="token operator">|</span> debug
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token string">&quot;Dir&quot;</span>
 <span class="token number">1</span> \u2502 <span class="token string">&quot;Dir&quot;</span>
 <span class="token number">2</span> \u2502 <span class="token string">&quot;File&quot;</span>
 <span class="token number">3</span> \u2502 <span class="token string">&quot;Dir&quot;</span>
 <span class="token number">4</span> \u2502 <span class="token string">&quot;File&quot;</span>
 <span class="token number">5</span> \u2502 <span class="token string">&quot;Dir&quot;</span>
 <span class="token number">6</span> \u2502 <span class="token string">&quot;Dir&quot;</span>
 <span class="token number">7</span> \u2502 <span class="token string">&quot;Dir&quot;</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> --raw Cargo.toml <span class="token operator">|</span> size <span class="token operator">|</span> debug
<span class="token punctuation">(</span>lines<span class="token operator">=</span><span class="token number">139</span> <span class="token assign-left variable">words</span><span class="token operator">=</span><span class="token number">560</span> <span class="token assign-left variable">chars</span><span class="token operator">=</span><span class="token number">4607</span> <span class="token assign-left variable">bytes</span><span class="token operator">=</span><span class="token number">4607</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">du</span> src/ <span class="token operator">|</span> debug
<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
 <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">705300</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span>
 <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">1118208</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span>
 <span class="token assign-left variable">directories</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/utils&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">21203</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">24576</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/data&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
   <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">52860</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span>
   <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">86016</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span>
   <span class="token assign-left variable">directories</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/data/config&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">2609</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">12288</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span>
    <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/data/base&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">12627</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">16384</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/env&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">30257</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">36864</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/plugins&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">1358</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">49152</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/commands&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
   <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">412617</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span>
   <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">651264</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span>
   <span class="token assign-left variable">directories</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/commands/classified&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">37125</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">49152</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/evaluate&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">11475</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">24576</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/format&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">15426</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">24576</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span>
  <span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;src/shell&quot;</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token assign-left variable">apparent</span><span class="token operator">=</span><span class="token number">81093</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">)</span> <span class="token assign-left variable">physical</span><span class="token operator">=</span><span class="token number">94208</span><span class="token punctuation">(</span>bytesize<span class="token punctuation">))</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre></div>`,6),o=[e];function c(l,u){return a(),n("div",null,o)}var i=s(t,[["render",c],["__file","debug.html.vue"]]);export{i as default};
