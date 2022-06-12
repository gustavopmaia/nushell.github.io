import{_ as a,o as n,c as s,e}from"./app.74dc26fa.js";const t={},o=e(`<p>Format columns into a string using a simple pattern</p><p>Syntax: <code>format &lt;pattern&gt;</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;pattern&gt;</code>: the pattern to match</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Let&#39;s say we have a table like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.csv
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 animal    \u2502 name   \u2502 age</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token function">cat</span>       \u2502 Tom    \u2502 <span class="token number">7</span>
 <span class="token number">1</span> \u2502 dog       \u2502 Alfred \u2502 <span class="token number">10</span>
 <span class="token number">2</span> \u2502 chameleon \u2502 Linda  \u2502 <span class="token number">1</span>
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p><code>format</code> allows us to convert table data into a string by following a formatting pattern. To print the value of a column we have to put the column name in curly brackets:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.csv <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&quot;{name} is a {age} year old {animal}&quot;</span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Tom is a <span class="token number">7</span> year old <span class="token function">cat</span>
 <span class="token number">1</span> \u2502 Alfred is a <span class="token number">10</span> year old dog
 <span class="token number">2</span> \u2502 Linda is a <span class="token number">1</span> year old chameleon
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,9),p=[o];function c(r,l){return n(),s("div",null,p)}var i=a(t,[["render",c],["__file","format.html.vue"]]);export{i as default};
