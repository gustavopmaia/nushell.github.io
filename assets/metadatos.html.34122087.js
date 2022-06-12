import{_ as e,o as a,c as o,e as r}from"./app.74dc26fa.js";const d={},n=r('<h1 id="metadatos" tabindex="-1"><a class="header-anchor" href="#metadatos" aria-hidden="true">#</a> Metadatos</h1><p>Todos los valores que fluyen dentro y fuera de los comandos en Nu est\xE1n etiquetadas con metadatos. Lo encontrar\xE1s com\xFAnmente alrededor del c\xF3digo como <code>Tagged&lt;Value&gt;</code></p><p>Aunque los metadatos que se rastrean sigue en sus primeros d\xEDas, esperamos expandir esto a medida que Nu madure.</p><p>Actualmente, hay dos piezas de metadatos rastreados en cada valor:</p><h2 id="origin" tabindex="-1"><a class="header-anchor" href="#origin" aria-hidden="true">#</a> Origin</h2><p>Origin representa la ubicaci\xF3n de donde vino originalmente el valor. Si el valor fue cargado desde un archivo, ser\xE1 el nombre del archivo. Si fue cargado desde una Url, serea la Url, y as\xED sucesivamente.</p><p>Para ahorrar espacio y mantener los metadatos Copy(copiables), el origen se guarda como un UUID. Este identificador apunta a una tabla de b\xFAsqueda donde el UUID se puede traducir al origen completo.</p><h2 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> Span</h2><p>Span(tramos) es la ubicaci\xF3n de inicio y fin del valor donde fue creado o referenciado en la l\xEDnea de comandos. Estas se ven com\xFAnmente representadas como el subrayado debajo de un mensaje de error.</p><p>Mientras los spans(tramos) de lenguajes de programaci\xF3n tradicionalmente tambi\xE9n llevan el archivo del que proviene el tramo, aqu\xED asumimos que el tramo siempre abarca un valor referenciado en la l\xEDnea de comandos en lugar de un archivo de c\xF3digo fuente. A medida que Nu tenga la capacidad de ejecutar sus propios archivos de c\xF3digo fuente, esto probablemente tendr\xE1 que ser revisado.</p>',10),s=[n];function t(i,c){return a(),o("div",null,s)}var u=e(d,[["render",t],["__file","metadatos.html.vue"]]);export{u as default};
