import{_ as s,o as a,c as n,e as o}from"./app.526ee9ba.js";const p={},e=o(`<p>Convert table into simple Markdown.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>-p</code>, <code>--pretty</code>: Formats the Markdown table to vertically align items</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> to md
<span class="token operator">|</span>name<span class="token operator">|</span><span class="token builtin class-name">type</span><span class="token operator">|</span>size<span class="token operator">|</span>modified<span class="token operator">|</span>
<span class="token operator">|</span>-<span class="token operator">|</span>-<span class="token operator">|</span>-<span class="token operator">|</span>-<span class="token operator">|</span>
<span class="token operator">|</span>CODE_OF_CONDUCT.md<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">3.4</span> KB<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>CONTRIBUTING.md<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">1.4</span> KB<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>Cargo.lock<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">144.4</span> KB<span class="token operator">|</span><span class="token number">2</span> days ago<span class="token operator">|</span>
<span class="token operator">|</span>Cargo.toml<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">6.0</span> KB<span class="token operator">|</span><span class="token number">2</span> days ago<span class="token operator">|</span>
<span class="token operator">|</span>LICENSE<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">1.1</span> KB<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>Makefile.toml<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">449</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>README.build.txt<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">192</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>README.md<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">15.9</span> KB<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>TODO.md<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">0</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>crates<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">896</span> B<span class="token operator">|</span><span class="token number">2</span> days ago<span class="token operator">|</span>
<span class="token operator">|</span>debian<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">352</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span><span class="token function">docker</span><span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">288</span> B<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>docs<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">256</span> B<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>features.toml<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">632</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>images<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">160</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>pkg_mgrs<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">96</span> B<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>rustfmt.toml<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">16</span> B<span class="token operator">|</span><span class="token number">9</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>samples<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">96</span> B<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>src<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">128</span> B<span class="token operator">|</span><span class="token number">2</span> days ago<span class="token operator">|</span>
<span class="token operator">|</span>target<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">160</span> B<span class="token operator">|</span><span class="token number">1</span> month ago<span class="token operator">|</span>
<span class="token operator">|</span>tests<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">192</span> B<span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>wix<span class="token operator">|</span>Dir<span class="token operator">|</span><span class="token number">128</span> B<span class="token operator">|</span><span class="token number">23</span> hours ago<span class="token operator">|</span>
</code></pre></div><p>If we provide the <code>-p</code> flag, we can obtain a formatted version of the Markdown table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> to md  -p
<span class="token operator">|</span>name              <span class="token operator">|</span><span class="token builtin class-name">type</span><span class="token operator">|</span>size    <span class="token operator">|</span>modified    <span class="token operator">|</span>
<span class="token operator">|</span>------------------<span class="token operator">|</span>----<span class="token operator">|</span>--------<span class="token operator">|</span>------------<span class="token operator">|</span>
<span class="token operator">|</span>CODE_OF_CONDUCT.md<span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">3.4</span> KB  <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>CONTRIBUTING.md   <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">1.4</span> KB  <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>Cargo.lock        <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">144.4</span> KB<span class="token operator">|</span><span class="token number">2</span> days ago  <span class="token operator">|</span>
<span class="token operator">|</span>Cargo.toml        <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">6.0</span> KB  <span class="token operator">|</span><span class="token number">2</span> days ago  <span class="token operator">|</span>
<span class="token operator">|</span>LICENSE           <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">1.1</span> KB  <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>Makefile.toml     <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">449</span> B   <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>README.build.txt  <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">192</span> B   <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>README.md         <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">15.9</span> KB <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>TODO.md           <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">0</span> B     <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>crates            <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">896</span> B   <span class="token operator">|</span><span class="token number">2</span> days ago  <span class="token operator">|</span>
<span class="token operator">|</span>debian            <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">352</span> B   <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span><span class="token function">docker</span>            <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">288</span> B   <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>docs              <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">256</span> B   <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>features.toml     <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">632</span> B   <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>images            <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">160</span> B   <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>pkg_mgrs          <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">96</span> B    <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>rustfmt.toml      <span class="token operator">|</span>File<span class="token operator">|</span><span class="token number">16</span> B    <span class="token operator">|</span><span class="token number">9</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>samples           <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">96</span> B    <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>src               <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">128</span> B   <span class="token operator">|</span><span class="token number">2</span> days ago  <span class="token operator">|</span>
<span class="token operator">|</span>target            <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">160</span> B   <span class="token operator">|</span><span class="token number">1</span> month ago <span class="token operator">|</span>
<span class="token operator">|</span>tests             <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">192</span> B   <span class="token operator">|</span><span class="token number">2</span> months ago<span class="token operator">|</span>
<span class="token operator">|</span>wix               <span class="token operator">|</span>Dir <span class="token operator">|</span><span class="token number">128</span> B   <span class="token operator">|</span><span class="token number">23</span> hours ago<span class="token operator">|</span>
</code></pre></div>`,7),t=[e];function r(l,c){return a(),n("div",null,t)}var m=s(p,[["render",r],["__file","to-md.html.vue"]]);export{m as default};
