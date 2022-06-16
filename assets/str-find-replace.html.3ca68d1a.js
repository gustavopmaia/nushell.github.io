import{_ as a,o as e,c as s,e as n}from"./app.526ee9ba.js";const t={},r=n(`<h1 id="str-find-replace" tabindex="-1"><a class="header-anchor" href="#str-find-replace" aria-hidden="true">#</a> str find-replace</h1><p>finds and replaces text</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str find-replace <span class="token operator">&lt;</span>find<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>replace<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;find&gt;</code> the pattern to find</li><li><code>&lt;replace&gt;</code> the replacement pattern</li><li>...args: optionally find and replace text by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-a, --all: replace all occurrences of find string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find and replace contents with capture group</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str find-replace <span class="token string">&#39;(.+).rb&#39;</span> <span class="token string">&#39;$1.nu&#39;</span>
</code></pre></div><p>Find and replace all occurrences of find string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abc abc abc&#39;</span> <span class="token operator">|</span> str find-replace -a <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span>
</code></pre></div>`,13),l=[r];function p(c,o){return e(),s("div",null,l)}var d=a(t,[["render",p],["__file","str-find-replace.html.vue"]]);export{d as default};
