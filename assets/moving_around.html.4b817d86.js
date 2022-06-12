import{_ as c,r,o as l,c as d,a as s,b as a,w as o,e as t,d as e}from"./app.74dc26fa.js";const i={},p=t(`<h1 id="moving-around-your-system" tabindex="-1"><a class="header-anchor" href="#moving-around-your-system" aria-hidden="true">#</a> Moving around your system</h1><p>Early shells allow you to move around your filesystem and run commands, and modern shells like Nu allow you to do the same. Let&#39;s take a look at some of the common commands you might use when interacting with your system.</p><h2 id="viewing-directory-contents" tabindex="-1"><a class="header-anchor" href="#viewing-directory-contents" aria-hidden="true">#</a> Viewing directory contents</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div>`,4),m=e("As we've seen in other chapters, "),u=s("code",null,"ls",-1),h=e(" is a command for viewing the contents of a path. Nu will return the contents as a table that we can use."),g=e("The "),b=s("code",null,"ls",-1),k=e(` command also takes an optional argument, to change what you'd like to view. For example, we can list the files that end in ".md"`),_=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.md
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name               \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">1</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
 <span class="token number">2</span> \u2502 README.md          \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">3</span> \u2502 TODO.md            \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>The asterisk (*) in the above optional argument &quot;*.md&quot; is sometimes called a wildcard or a glob. It lets us match anything. You could read the glob &quot;*.md&quot; as &quot;match any filename, so long as it ends with &#39;.md&#39; &quot;</p><p>Nu also uses modern globs as well, which allow you access to deeper directories.</p><div class="language-bash ext-sh"><pre class="language-bash"><code> <span class="token function">ls</span> **/*.md
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name                                      \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 .github/ISSUE_TEMPLATE/bug_report.md      \u2502 File \u2502   <span class="token number">592</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">1</span> \u2502 .github/ISSUE_TEMPLATE/feature_request.md \u2502 File \u2502   <span class="token number">595</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">2</span> \u2502 CODE_OF_CONDUCT.md                        \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">3</span> \u2502 CONTRIBUTING.md                           \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">4</span> \u2502 README.md                                 \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">5</span> \u2502 TODO.md                                   \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">6</span> \u2502 crates/nu-source/README.md                \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">7</span> \u2502 docker/packaging/README.md                \u2502 File \u2502  <span class="token number">1.5</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">8</span> \u2502 docs/commands/README.md                   \u2502 File \u2502   <span class="token number">929</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">9</span> \u2502 docs/commands/alias.md                    \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">10</span> \u2502 docs/commands/append.md                   \u2502 File \u2502  <span class="token number">1.4</span> KB \u2502 <span class="token number">5</span> days ago
</code></pre></div><p>Here, we&#39;re looking for any file that ends with &quot;.md&quot;, and the two asterisks further say &quot;in any directory starting from here&quot;.</p><h2 id="changing-the-current-directory" tabindex="-1"><a class="header-anchor" href="#changing-the-current-directory" aria-hidden="true">#</a> Changing the current directory</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> new_directory
</code></pre></div><p>To change from the current directory to a new one, we use the <code>cd</code> command. Just as in other shells, we can use either the name of the directory, or if we want to go up a directory we can use the <code>..</code> shortcut.</p><p>Changing the current working directory can also be done if <code>cd</code> is omitted and a path by itself is given:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ./new_directory
</code></pre></div>`,10),y=s("strong",null,"Note:",-1),f=e(" changing the directory with "),v=s("code",null,"cd",-1),w=e(" changes the "),x=s("code",null,"PWD",-1),B=e(" environment variable. This means that a change of a directory is kept to the current block. Once you exit the block, you'll return to the previous directory. You can learn more about working with this in the "),E=e("environment chapter"),F=e("."),T=t(`<h2 id="filesystem-commands" tabindex="-1"><a class="header-anchor" href="#filesystem-commands" aria-hidden="true">#</a> Filesystem commands</h2><p>Nu also provides some basic filesystem commands that work cross-platform.</p><p>We can move an item from one place to another using the <code>mv</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> item location
</code></pre></div><p>We can copy an item from one location to another:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> item location
</code></pre></div><p>We can remove an item:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> item
</code></pre></div>`,8),N=e("The three commands also can use the glob capabilities we saw earlier with "),O=s("code",null,"ls",-1),C=e("."),D=s("p",null,[e("Finally, we can create a new directory using the "),s("code",null,"mkdir"),e(" command:")],-1),q=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),e(),s("span",{class:"token function"},"mkdir"),e(` new_directory
`)])])],-1);function K(R,A){const n=r("RouterLink");return l(),d("div",null,[p,s("p",null,[m,a(n,{to:"/book/commands/ls.html"},{default:o(()=>[u]),_:1}),h]),s("p",null,[g,a(n,{to:"/book/commands/ls.html"},{default:o(()=>[b]),_:1}),k]),_,s("p",null,[y,f,v,w,x,B,a(n,{to:"/book/environment.html"},{default:o(()=>[E]),_:1}),F]),T,s("p",null,[N,a(n,{to:"/book/commands/ls.html"},{default:o(()=>[O]),_:1}),C]),D,q])}var I=c(i,[["render",K],["__file","moving_around.html.vue"]]);export{I as default};
