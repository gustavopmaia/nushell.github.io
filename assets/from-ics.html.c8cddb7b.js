import{_ as a,o as s,c as n,e}from"./app.74dc26fa.js";const t={},o=e(`<p>Parse text as <code>.ics</code> and create table.</p><p>Syntax: <code>from ics</code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Suppose calendar.txt is a text file that is formatted like a <code>.ics</code> (iCal) file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> calendar.txt
BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:20171007T200000Z
DTEND:20171007T233000Z
DTSTAMP:20200319T182138Z
SUMMARY:Basketball Game
<span class="token environment constant">UID</span>:4l80f6dcovnriq38g57g07btid@google.com
<span class="token punctuation">..</span>.
</code></pre></div><p>Pass the output of the <code>open</code> command to <code>from ics</code> to get a correctly formatted table:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> calendar.txt <span class="token operator">|</span> from ics
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 properties     \u2502 events           \u2502 alarms         \u2502 to-Dos         \u2502 journals       \u2502 free-busys     \u2502 timezones</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>    \u2502 <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> calendar.txt <span class="token operator">|</span> from ics <span class="token operator">|</span> get events <span class="token operator">|</span> get properties <span class="token operator">|</span> where name <span class="token operator">==</span> <span class="token string">&quot;SUMMARY&quot;</span>
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#   \u2502 name    \u2502 value                                 \u2502 params</span>
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   <span class="token number">0</span> \u2502 SUMMARY \u2502 Basketball Game                       \u2502
</code></pre></div>`,8),p=[o];function c(l,r){return s(),n("div",null,p)}var i=a(t,[["render",c],["__file","from-ics.html.vue"]]);export{i as default};
