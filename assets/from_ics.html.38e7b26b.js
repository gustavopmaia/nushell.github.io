import{_ as s,u as r,o,c as n,a as e,t,d as c,e as i}from"./app.526ee9ba.js";const d={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=c(),_={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ics </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCALENDAR
END:VCALENDAR&#39;</span> <span class="token operator">|</span> from ics
</code></pre></div>`,5);function u(f,g,x,v,N,a){return o(),n("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",_,t(a.frontmatter.usage),1),m])}var E=s(d,[["render",u],["__file","from_ics.html.vue"]]);export{E as default};
