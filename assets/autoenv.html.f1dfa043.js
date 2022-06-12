import{_ as e,o as a,c as n,e as t}from"./app.74dc26fa.js";const s={},o=t(`<p>Manage directory specific environment variables and scripts.</p><p>Create a file called .nu-env in any directory and run &#39;autoenv trust&#39; to let nushell load it when entering the directory. The .nu-env file has the same format as your $HOME/nu/config.toml file. By loading a .nu-env file the following applies:</p><ul><li><ul><li>environment variables (section &quot;[env]&quot;) are loaded from the .nu-env file. Those env variables only exist in this directory (and children directories)</li></ul></li><li><ul><li>the &quot;startup&quot; commands are run when entering the directory</li></ul></li><li><ul><li>the &quot;on_exit&quot; commands are run when leaving the directory</li></ul></li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> autoenv <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><ul><li>autoenv trust - Trust a .nu-env file in the current or given directory</li><li>autoenv untrust - Untrust a .nu-env file in the current or given directory</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Example .nu-env file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> .nu-env
</code></pre></div><pre><code>    startup = [&quot;echo ...entering the directory&quot;, &quot;echo 1 2 3&quot;]
    on_exit = [&quot;echo ...leaving the directory&quot;]

    [env]
    mykey = &quot;myvalue&quot;
</code></pre>`,13),r=[o];function i(l,u){return a(),n("div",null,r)}var d=e(s,[["render",i],["__file","autoenv.html.vue"]]);export{d as default};
