import{_ as n,o as s,c as a,e}from"./app.526ee9ba.js";const p={},t=e(`<p>Converts table data into tsv text.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to tsv
  name  path
X filesystem  /home/shaurya
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> caco3_plastics.tsv
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 importer     \u2502 shipper      \u2502 tariff_item \u2502 name         \u2502 origin   \u2502 shipped_at \u2502 arrived_at \u2502 net_weight \u2502 fob_price \u2502 cif_price \u2502 cif_per_net_</span>
   \u2502              \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502 weight
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 PLASTICOS    \u2502 S A REVERTE  \u2502 <span class="token number">2509000000</span>  \u2502 CARBONATO DE \u2502 SPAIN    \u2502 <span class="token number">18</span>/03/2016 \u2502 <span class="token number">17</span>/04/2016 \u2502 <span class="token number">81,000</span>.00  \u2502 <span class="token number">14,417</span>.58 \u2502 <span class="token number">18,252</span>.34 \u2502 <span class="token number">0.23</span>
   \u2502 RIVAL CIA    \u2502              \u2502             \u2502 CALCIO TIPO  \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 LTDA         \u2502              \u2502             \u2502 CALCIPORE    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 <span class="token number">160</span> T AL     \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">1</span> \u2502 MEXICHEM     \u2502 OMYA ANDINA  \u2502 <span class="token number">2836500000</span>  \u2502 CARBONATO    \u2502 COLOMBIA \u2502 07/07/2016 \u2502 <span class="token number">10</span>/07/2016 \u2502 <span class="token number">26,000</span>.00  \u2502 <span class="token number">7,072</span>.00  \u2502 <span class="token number">8,127</span>.18  \u2502 <span class="token number">0.31</span>
   \u2502 ECUADOR S.A. \u2502 S A          \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">2</span> \u2502 PLASTIAZUAY  \u2502 SA REVERTE   \u2502 <span class="token number">2836500000</span>  \u2502 CARBONATO DE \u2502 SPAIN    \u2502 <span class="token number">27</span>/07/2016 \u2502 09/08/2016 \u2502 <span class="token number">81,000</span>.00  \u2502 <span class="token number">8,100</span>.00  \u2502 <span class="token number">11,474</span>.55 \u2502 <span class="token number">0.14</span>
   \u2502 SA           \u2502              \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">3</span> \u2502 PLASTICOS    \u2502 AND          \u2502 <span class="token number">2836500000</span>  \u2502 CALCIUM      \u2502 TURKEY   \u2502 04/10/2016 \u2502 <span class="token number">11</span>/11/2016 \u2502 <span class="token number">100,000</span>.00 \u2502 <span class="token number">17,500</span>.00 \u2502 <span class="token number">22,533</span>.75 \u2502 <span class="token number">0.23</span>
   \u2502 RIVAL CIA    \u2502 ENDUSTRIYEL  \u2502             \u2502 CARBONATE    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 LTDA         \u2502 HAMMADDELER  \u2502             \u2502 ANADOLU      \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 DIS TCARET   \u2502             \u2502 ANDCARB CT-1 \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 LTD.STI.     \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">4</span> \u2502 QUIMICA      \u2502 SA REVERTE   \u2502 <span class="token number">2836500000</span>  \u2502 CARBONATO DE \u2502 SPAIN    \u2502 <span class="token number">24</span>/06/2016 \u2502 <span class="token number">12</span>/07/2016 \u2502 <span class="token number">27,000</span>.00  \u2502 <span class="token number">3,258</span>.90  \u2502 <span class="token number">5,585</span>.00  \u2502 <span class="token number">0.21</span>
   \u2502 COMERCIAL    \u2502              \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 QUIMICIAL    \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 CIA. LTDA.   \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">5</span> \u2502 PICA         \u2502 OMYA ANDINA  \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/01/1900 \u2502 <span class="token number">18</span>/01/2016 \u2502 <span class="token number">66,500</span>.00  \u2502 <span class="token number">12,635</span>.00 \u2502 <span class="token number">18,670</span>.52 \u2502 <span class="token number">0.28</span>
   \u2502 PLASTICOS    \u2502 S.A          \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 INDUSTRIALES \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 C.A.         \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">6</span> \u2502 PLASTIQUIM   \u2502 OMYA ANDINA  \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/01/1900 \u2502 <span class="token number">25</span>/10/2016 \u2502 <span class="token number">33,000</span>.00  \u2502 <span class="token number">6,270</span>.00  \u2502 <span class="token number">9,999</span>.00  \u2502 <span class="token number">0.30</span>
   \u2502 S.A.         \u2502 S.A NIT      \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 <span class="token number">830.027</span>.386- \u2502             \u2502 RECUBIERTO   \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 <span class="token number">6</span>            \u2502             \u2502 CON ACIDO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 ESTEARICO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 OMYA CARB 1T \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 CG BBS <span class="token number">1000</span>  \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">7</span> \u2502 QUIMICOS     \u2502 SIBELCO      \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/11/2016 \u2502 03/11/2016 \u2502 <span class="token number">52,000</span>.00  \u2502 <span class="token number">8,944</span>.00  \u2502 <span class="token number">13,039</span>.05 \u2502 <span class="token number">0.25</span>
   \u2502 ANDINOS      \u2502 COLOMBIA SAS \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 QUIMANDI     \u2502              \u2502             \u2502 RECUBIERTO   \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 S.A.         \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">8</span> \u2502 TIGRE        \u2502 OMYA ANDINA  \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/01/1900 \u2502 <span class="token number">28</span>/10/2016 \u2502 <span class="token number">66,000</span>.00  \u2502 <span class="token number">11,748</span>.00 \u2502 <span class="token number">18,216</span>.00 \u2502 <span class="token number">0.28</span>
   \u2502 ECUADOR S.A. \u2502 S.A NIT      \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 ECUATIGRE    \u2502 <span class="token number">830.027</span>.386- \u2502             \u2502 RECUBIERTO   \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 <span class="token number">6</span>            \u2502             \u2502 CON ACIDO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 ESTEARICO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 OMYACARB 1T  \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 CG BPA <span class="token number">25</span> NO \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> caco3_plastics.tsv <span class="token operator">|</span> to tsv
importer        shipper tariff_item     name    origin  shipped_at      arrived_at      net_weight      fob_price       cif_price       cif_per_net_weight
PLASTICOS RIVAL CIA LTDA        S A REVERTE     <span class="token number">2509000000</span>      CARBONATO DE CALCIO TIPO CALCIPORE <span class="token number">160</span> T AL     SPAIN   <span class="token number">18</span>/03/2016      <span class="token number">17</span>/04/2016    <span class="token number">81,000</span>.00        <span class="token number">14,417</span>.58       <span class="token number">18,252</span>.34       <span class="token number">0.23</span>
MEXICHEM ECUADOR S.A.   OMYA ANDINA S A <span class="token number">2836500000</span>      CARBONATO       COLOMBIA        07/07/2016      <span class="token number">10</span>/07/2016      <span class="token number">26,000</span>.00       <span class="token number">7,072</span>.00      <span class="token number">8,127</span>.18 <span class="token number">0.31</span>
PLASTIAZUAY SA  SA REVERTE      <span class="token number">2836500000</span>      CARBONATO DE CALCIO     SPAIN   <span class="token number">27</span>/07/2016      09/08/2016      <span class="token number">81,000</span>.00       <span class="token number">8,100</span>.00        <span class="token number">11,474</span>.55      <span class="token number">0.14</span>
PLASTICOS RIVAL CIA LTDA        AND ENDUSTRIYEL HAMMADDELER DIS TCARET LTD.STI. <span class="token number">2836500000</span>      CALCIUM CARBONATE ANADOLU ANDCARB CT-1  TURKEY  04/10/2016     <span class="token number">11</span>/11/2016      <span class="token number">100,000</span>.00      <span class="token number">17,500</span>.00       <span class="token number">22,533</span>.75       <span class="token number">0.23</span>
QUIMICA COMERCIAL QUIMICIAL CIA. LTDA.  SA REVERTE      <span class="token number">2836500000</span>      CARBONATO DE CALCIO     SPAIN   <span class="token number">24</span>/06/2016      <span class="token number">12</span>/07/2016      <span class="token number">27,000</span>.00     <span class="token number">3,258</span>.90 <span class="token number">5,585</span>.00        <span class="token number">0.21</span>
PICA PLASTICOS INDUSTRIALES C.A.        OMYA ANDINA S.A <span class="token number">3824909999</span>      CARBONATO DE CALCIO     COLOMBIA        01/01/1900      <span class="token number">18</span>/01/2016      <span class="token number">66,500</span>.00      <span class="token number">12,635</span>.00       <span class="token number">18,670</span>.52       <span class="token number">0.28</span>
PLASTIQUIM S.A. OMYA ANDINA S.A NIT <span class="token number">830.027</span>.386-6       <span class="token number">3824909999</span>      CARBONATO DE CALCIO RECUBIERTO CON ACIDO ESTEARICO OMYA CARB 1T CG BBS <span class="token number">1000</span>   COLOMBIA 01/01/1900      <span class="token number">25</span>/10/2016      <span class="token number">33,000</span>.00       <span class="token number">6,270</span>.00        <span class="token number">9,999</span>.00        <span class="token number">0.30</span>
QUIMICOS ANDINOS QUIMANDI S.A.  SIBELCO COLOMBIA SAS    <span class="token number">3824909999</span>      CARBONATO DE CALCIO RECUBIERTO  COLOMBIA        01/11/2016      03/11/2016    <span class="token number">52,000</span>.00        <span class="token number">8,944</span>.00        <span class="token number">13,039</span>.05       <span class="token number">0.25</span>
TIGRE ECUADOR S.A. ECUATIGRE    OMYA ANDINA S.A NIT <span class="token number">830.027</span>.386-6       <span class="token number">3824909999</span>      CARBONATO DE  CALCIO RECUBIERTO CON ACIDO ESTEARICO OMYACARB 1T CG BPA <span class="token number">25</span> NO   COLOMBIA        01/01/1900      <span class="token number">28</span>/10/2016      <span class="token number">66,000</span>.00       <span class="token number">11,748</span>.00       <span class="token number">18,216</span>.00       <span class="token number">0.28</span>
</code></pre></div>`,6),A=[t];function o(r,c){return s(),a("div",null,A)}var m=n(p,[["render",o],["__file","to-tsv.html.vue"]]);export{m as default};
