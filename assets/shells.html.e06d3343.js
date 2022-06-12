import{_ as e,o as a,c as o,e as s}from"./app.74dc26fa.js";const t={},r=s(`<h1 id="shells" tabindex="-1"><a class="header-anchor" href="#shells" aria-hidden="true">#</a> Shells</h1><p>Talvez um conceito \xFAnico de Nu seja o de <code>shells</code>, apesar de a ideia de trabalhar em diversos lugares ao mesmo tempo em um shell \xE9 bem comum (via pushd/popd, telas, e mais). O que talvez torne o Nu um pouco diferente \xE9 que o seu conceito de <code>shells</code> \xE9 de ambas plataformas e funciona tanto no sistema de arquivos quanto dentro de valores.</p><p><strong>Nota:</strong> O conceito de um Value Shell \xE9 um de muitos fatores de design abertos e est\xE1 sujeito a mudan\xE7as no futuro.</p><p>Um <strong>Shell</strong> \xE9 uma interface semelhante a um sistema de arquivos que descreve um conjunto de opera\xE7\xF5es de arquivos e como oper\xE1-los, incluindo: <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>rm</code>, <code>cp</code>, e <code>mv</code>. Nem todos os tipos de shells suportam todas as opera\xE7\xF5es de arquivos, mas as opera\xE7\xF5es de arquivos servem para tentar descrever o que um shell deveria fazer.</p><p>Os dois tipos de shell atualmente dispon\xEDveis s\xE3o FilesystemShell and ValueShell, mas outros tipos de shells j\xE1 foram discutidos.</p><h2 id="filesystem-shell" tabindex="-1"><a class="header-anchor" href="#filesystem-shell" aria-hidden="true">#</a> Filesystem Shell</h2><p>O filesystem shell \xE9 um shell que trabalha diretamente com o sistema de arquivos e um arquivo correspondente. Por padr\xE3o, Nu inicia com um \xFAnico filesystem shell no diret\xF3rio atual.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
   \u2502 name       \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 X \u2502 filesystem \u2502 /home/jonathan
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Podemos adicionar mais um filesystem shell para essa lista usando o comando <code>enter</code>. Isso vai adicionar uma nova combina\xE7\xE3o shell+path para o nosso buffer circular de shells.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; enter Source
/home/jonathan/Source&gt; shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 # \u2502   \u2502 name       \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502   \u2502 filesystem \u2502 /home/jonathan
 1 \u2502 X \u2502 filesystem \u2502 /home/jonathan/Source
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Dessa forma, voc\xEA pode intercalar entre diret\xF3rios de trabalho. Note que atualmente o Nu n\xE3o permite intercalar entre aplica\xE7\xF5es em execu\xE7\xE3o, apenas diret\xF3rios de trabalho.</p><p><strong>Limita\xE7\xF5es</strong></p><p>Existem algumas limita\xE7\xF5es no filesystem shell no seu estado atual de desenvolvimento. Uma das limita\xE7\xF5es \xE9 que n\xE3o \xE9 simples adicionar m\xFAltiplos caminhos no buffer circular de uma s\xF3 vez (por exemplo: <code>enter $it</code>), j\xE1 que cada adi\xE7\xE3o ao buffer circular vai mudar o diret\xF3rio atual. Essa limita\xE7\xE3o n\xE3o \xE9 inerente ao design do buffer circular e em um design futuro seria desej\xE1vel separar <code>enter</code> da mudan\xE7a de diret\xF3rio atual.</p><h2 id="value-shell" tabindex="-1"><a class="header-anchor" href="#value-shell" aria-hidden="true">#</a> Value Shell</h2><p>O Value Shell da a habilidade de explorar um valor estruturado internamente ao carregar um arquivo e tratando seu conte\xFAdo como se fosse um sistema de arquivos. Isso permite explorar os seus dados como um dos shells no buffer circular.</p><p>A implementa\xE7\xE3o atual do Value Shell \xE9 limitada ao sub-conjunto de opera\xE7\xF5es de leitura de \x7Fopera\xE7\xF5es de arquivo, isto \xE9: <code>cd</code> e <code>ls</code>. Em designs futuros seria interessante expandir isso, mas existem perguntas abertas sobre alterar um arquivo aberto com <code>enter</code> e como o resto do ambiente observa essas mudan\xE7as (o que acontece se voc\xEA usar enter no arquivo sendo usado pelo <code>config</code>?)</p><p>Em um Value Shell, o comando <code>cd</code>muda o caminho sendo observado como o &quot;diret\xF3rio atual&quot; no objeto, mas na verdade \xE9 o caminho de campo. Isso significa que o caminho &quot;/abc/def&quot; \xE9 o caminho &quot;abc.def&quot; fora do Value Shell.</p>`,17),d=[r];function l(i,n){return a(),o("div",null,d)}var c=e(t,[["render",l],["__file","shells.html.vue"]]);export{c as default};
