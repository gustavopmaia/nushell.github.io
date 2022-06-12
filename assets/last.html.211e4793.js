import{_ as n,o as s,c as a,e}from"./app.74dc26fa.js";const t={},o=e(`<p>Use <code>last</code> to retrieve the last &quot;n&quot; rows of a table. <code>last</code> has a required amount parameter that indicates how many rows you would like returned. If more than one row is returned, an index column will be included showing the row number. <code>last</code> does not alter the order of the rows of the table.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> last <span class="token number">1</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 pid     \u2502 <span class="token number">167</span>
 name    \u2502 loginwindow
 status  \u2502 Running
 cpu     \u2502 <span class="token number">0.0000</span>
 mem     \u2502 <span class="token number">461.2</span> MB
 virtual \u2502 <span class="token number">7.2</span> GB
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> last <span class="token number">5</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 pid \u2502 name            \u2502 status  \u2502 cpu    \u2502 mem      \u2502 virtual</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">334</span> \u2502 knowledge-agent \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502  <span class="token number">53.7</span> MB \u2502  <span class="token number">6.7</span> GB
 <span class="token number">1</span> \u2502 <span class="token number">332</span> \u2502 UserEventAgent  \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502  <span class="token number">22.1</span> MB \u2502  <span class="token number">6.6</span> GB
 <span class="token number">2</span> \u2502 <span class="token number">326</span> \u2502 cfprefsd        \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502   <span class="token number">8.1</span> MB \u2502  <span class="token number">5.6</span> GB
 <span class="token number">3</span> \u2502 <span class="token number">325</span> \u2502 coreauthd       \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502   <span class="token number">9.7</span> MB \u2502  <span class="token number">5.0</span> GB
 <span class="token number">4</span> \u2502 <span class="token number">167</span> \u2502 loginwindow     \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502 <span class="token number">461.2</span> MB \u2502  <span class="token number">7.2</span> GB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,4),p=[o];function r(l,c){return s(),a("div",null,p)}var m=n(t,[["render",r],["__file","last.html.vue"]]);export{m as default};
