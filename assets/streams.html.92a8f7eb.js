import{_ as t,r as o,o as r,c as p,a as s,b as c,w as l,e,d as a}from"./app.526ee9ba.js";const i={},d=e(`<h1 id="streams" tabindex="-1"><a class="header-anchor" href="#streams" aria-hidden="true">#</a> Streams</h1><p>Async streams form the foundation for how information flows from one end of the pipeline to the other. This allows nu to work with internal commands, external commands, and plugins in a way that&#39;s relatively seamless.</p><p>There are two fundamental types for streams in Nu: InputStream and OutputStream</p><h2 id="inputstream" tabindex="-1"><a class="header-anchor" href="#inputstream" aria-hidden="true">#</a> InputStream</h2><p>Let&#39;s look at the InputStream type a little closer:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token class-name">BoxStream</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;static</span><span class="token punctuation">,</span> <span class="token class-name">Tagged</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;&gt;</span>
</code></pre></div>`,6),u=a("That is, it's an async stream which will send "),h=s("code",null,"Tagged<Value>",-1),m=a(" into the command. For more information about tagging, see the chapter on "),k=a("metadata"),f=a("."),g=e(`<h2 id="outputstream" tabindex="-1"><a class="header-anchor" href="#outputstream" aria-hidden="true">#</a> OutputStream</h2><p>Similar to InputStream above, an Output stream will return values from a command:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token class-name">BoxStream</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;static</span><span class="token punctuation">,</span> <span class="token class-name">ReturnValue</span><span class="token operator">&gt;</span>
</code></pre></div><p>Where a ReturnValue is:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">type</span> <span class="token type-definition class-name">ReturnValue</span> <span class="token operator">=</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">ReturnSuccess</span><span class="token punctuation">,</span> <span class="token class-name">ShellError</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>And a ReturnSuccess is:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">ReturnSuccess</span> <span class="token punctuation">{</span>
    <span class="token class-name">Value</span><span class="token punctuation">(</span><span class="token class-name">Tagged</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token class-name">CommandAction</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Why is OutputStream different from InputStream? This comes down to a few differences in needs of the two ends of the stream. By the time data has gotten to the command, it&#39;s already been checked for any errors, so it&#39;s expected to be a pure data stream.</p><p>Output streams, on the other hand, have to be able to return two other types of data in addition to values: errors and actions.</p><h3 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h3><p>Errors that are passed down the stream will be detected as values are copied from one command to another. Once the error is detected, it will halt the streams progress and display an error.</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><p>An action differs from a value in that where a value is a bit of data that the next command in the pipeline will see, an action is something intended only for the core Nu runtime. Actions will change the state of the shell itself by, for example, changing the current path, changing the current shell, updating internal side tables, and so on.</p>`,13);function _(w,y){const n=o("RouterLink");return r(),p("div",null,[d,s("p",null,[u,h,m,c(n,{to:"/contributor-book/metadata.html"},{default:l(()=>[k]),_:1}),f]),g])}var v=t(i,[["render",_],["__file","streams.html.vue"]]);export{v as default};
