# SONANCE — Documento maestro del proyecto (multijuego)

Actualizado: 9-nov-2026
Repositorio: `judasiii2-lgtm/default-project` (rama `main`, privado)
Git: SIEMPRE usar `C:\Users\loshi\AppData\Local\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe` (git del sistema NO existe)
Auth: if network fails → `$env:GIT_TERMINAL_PROMPT=0; $env:GCM_INTERACTIVE="never"; $env:GCM_GUI_PROMPT="never"` (GCM con credenciales de judasiii2-lgtm)

## ⚠️ Regla PowerShell/UTF-8
PowerShell corrompe UTF-8 al capturar/mostrar texto (mojibake). Extraer archivos del repo
SIEMPRE con `git archive --format=zip -o out.zip <rev>` + Expand-Archive. "Commit -m" sin
acentos/ñ para evitar mojibake en el mensaje de commit. Verificar por BYTES, no por pantalla.

---

## 1. Estado actual

### TODAS LAS WEBS ACTIVAS ✅ (actualizado 9-nov-2026)
| Web | Roster | Contenido | Commit base |
|---|---|---|---|
| `wuwa/index.html` | 61 pjs · meta 3.7 F2 | builds, tier, gacha, calendario | 4df6309 |
| `nte/index.html` | 24 hipercos · patch 1.3 | fichas v2, tier, builds+stats objetivos, sistemas | 8c23f08 |
| `zzz/index.html` | 61 agentes | fichas v2, tier, clases CritDPS/AnoDPS/Support | (9-nov) |
| `hsr/index.html` | 93 personajes | fichas v2, tier T0–T5, ratings por modo MoC/Pure/Apo en ficha | (9-nov) |

### FICHAS v2 (estilo WuWa — VERIFICADAS 9-nov-2026) ✅
Ficha igual en ZZZ/HSR/NTE (WuWa ya la tenia). Secciones apiladas con nav por anclas (`goSec`):
1. **Mis stats vs objetivo** — inputs propios + objetivo/optimos de Prydwen con rating
   `rateOf` (OK verde / CASI ambar / BAJO rojo). Guardado localStorage (`zzz_sts`/`hsr_sts`/`nte_sts`).
2. **Habilidades** — kit completo. Descripciones EN ESPAÑOL (ver TRADUCCIONES abajo).
3. **Build prime** — arma/cono/W-Engine + reliquias/discos + prioridades.
4. **Rotacion** — ZZZ/HSR del scrape; NTE usa howToPlay+Tips (rotaciones de teams vienen vacias).
5. **Equipos** — recomendados (HSR/ZZZ `team-container-moc` con Rank; NTE solo si hay).
6. **Guia Prydwen** — link externo.
- Datos: `<juego>/data.js` = `const PRYD={...}` (clave = nombre EXACTO del index), tag `<script src="data.js">` antes del script
  principal. CSS del comparador ya esta en los 3 index. El chip de tipo de skill (t) va en español: Básico/Habilidad/
  Definitiva/Talento/Técnica/Asistencia/Cadena/Esquiva/Parada/Recuperación/Habilidad de Apoyo/Entrada/ATK Básico.
- Registros: **ZZZ 61/61 (61/61 con equipos tras rescrape moc)**, **HSR 93/93 (464 skills)**, **NTE 24/24**. 0 MISSING.
- ⚠️ **Prydwen ELIMINO los subdominios** (9-nov: `zzz.prydwen.gg` = NXDOMAIN confirmado en Cloudflare):
  todo ahora en `https://www.prydwen.gg/<ruta>/...` (zenless, star-rail, neverness-to-everness, wuthering-waves, silver-palace). Cloudflare bloquea PowerShell/UA no browser (403) pero el `fetch` de Code Mode SI pasa.
- Fichas abiertas y verificadas in-app: 0 errores de consola en las 3 webs.

### TRADUCCIONES AL ESPAÑOL (9-nov-2026) ✅
- Todo el contenido de fichas (habilidades: n/d/m, rotaciones `how`, pros/cons, trazas, teams NTE n/c)
  esta traducido en los 3 `data.js` via endpoint `clients5.google.com/translate_a/t?client=dict-chrome-ex`
  (funciona con PowerShell; `translate.googleapis.com` da 429; multi-`q=` por URL hasta ~7.4KB).
- Caché/resumen de traducciones: `C:\Users\loshi\AppData\Local\Temp\opencode\trad_map.json` (4310 pares).
  Scripts: `translate_collect.ps1` (colecta+traduce), `apply_translation.ps1` (aplica), `repair_map.ps1`
  (re-traduce valores truncados uno-a-uno), `fix_mojibake.ps1` (deshace mojibake de literales del .ps1 sin BOM),
  `clean_undefined.ps1` (purga `$undefined`/`$indefinido` de Flight).
- ⚠️ Lecciones: 1) si un .ps1 tiene literales con acentos y se escribe SIN BOM, PS 5.1 lo lee como ANSI → mojibake
  al aplicar (usar BOM o `[char]225`); 2) verificar por BYTES (C3 A1 = á), la consola siempre pinta mojibake;
  3) enumerar PSCustomObject del JSON, NO las pseudo-propiedades de hashtable;
  4) strings >3.4KB url-escapados hay que trocearlos por frases.
- Nombres de personajes/ítems/slugs (build.w, build.a, build.relics, teams.m) siguen en inglés a propósito (nombres propios).
- `$undefined` limpiados; si un char no tiene `how` la ficha muestra un fallback en español.

- Hub `SONANCE.html` rediseñado: **colaje de 2 personajes por mosaico** (`.m1` derecha 66% + `.m2` izquierda
  con mask), glow radial de color por juego, zoom animado, fade inferior. WuWa=Cartethyia+Shorekeeper,
  NTE=Lacrimosa+Zankou, ZZZ=Miyabi+Evelyn, HSR=Acheron+Firefly, Silver=homepage_bg.
- Colores por juego: WuWa azul/violeta · NTE violeta/rosa · ZZZ naranja/violeta · HSR violeta/azul.

### WuWa — TERMINADA ✅ (v8.0.3, commits c6f4645→4df6309)
- Archivo fuente: `C:\Users\loshi\Documents\Web WuWa\index.html` (61 personajes, copia al repo como `index.html`)
- Parche actual: **3.7 F2** (Suoming). **3.8 entra el 12-nov-2026 con SILY→Lily** (Spectro·Pistola·Support, `nuevo:true`)
- Tiers 3.7 F2 (Game8/Prydwen): S+ ⇨ Qingxiao, Jingran, Augusta, Iuno, Cartethyia, Phrolova, Carlotta, Jinhsi,
  Shorekeeper, Verina, Hsin, Suoming, Galbrena, Luuk Herssen, Hiyuki, Yangyang: Xuanling, Lynae, Lucilla,
  Mornye, Denia, Suisui(Support), Chisa(Support), Sigrika. A ⇨ Zhezhi, Camellya, Xiangli Yao. S ⇨ Sanhua, Buling.
- CADENA DE OBRIGACIÓN: cada vez que hablemos de WuWa ⇒ verificar versión (websearch game8/prydwen),
  añadir personajes nuevos y refrescar tier list.
- Cuando Lily debut (12-nov), quitar `nuevo:true` y revisar su tier real = **REVISAR 12-nov**.
- Export/datos usuario: localStorage (backup `sonance-backup.json`). Botón "Cargar mis 47".

### Estilo visual establecido (reutilizar tal cual en cada juego)
- Tarjetas: `.pjcard` con arte completo 320px, animación floaty 7s, shine hover, borde izq. 4px por tier,
  tierchip colorida (S+ rojo, S dorado, A violeta), chip ✨ para "Nuevo".
- Ficha (modal): fondo = personaje completo con `--charart` + ken-burns 16s; opacidad .82;
  `::after` degradado suave; paneles `.glass` degradado 0.46→0.02 SIN bordes; hilos de color 2px:
  azul (skills), dorado (meJORAs); text-shadows para legibilidad. SIN líneas ni cajas visibles.

## 2. PATRONES CDN verificados (la gran llave) 🔑

Todos en `{base}` = `https://cdn.prydwen.gg/images/`

| Juego | Arte completo | Fallback | Página web prydwen |
|---|---|---|---|
| WuWa | `{base}wuthering-waves/characters/<slug>_full.webp` | `_icon.webp` o wuthering.gg head | /wuthering-waves/ |
| HSR | `{base}honkai-star-rail/characters/<slug>_full.webp` ✅ (verificado con kafka) | `_icon.webp` | /star-rail/ |
| ZZZ | `{base}zenless-zone-zero/characters/<slug>_full.webp` ✅ (verificado con ellen) | `_card.webp` (200 seguro) | /zenless/ |
| NTE | `{base}nte/characters/<slug>_full.webp` (casi todos; "zero" falla) | `_card.webp` (200 seguro) | /neverness-to-everness/ |
| Silver Palace | existe `{base}silver-palace/` (sin characters aún) | — | /silver-palace/ |

Rovers WuWa: Spectro/Aero/Havoc (`rover-spectro`, `rover-aero`, `rover-havoc`) con `_full`;
Electro usa wuthering.gg `T_IconRole_Pile_zhujue_UI.png`.

### Rosters ya incrustados en las webs (fuente Prydwen, nov 2026)
- **NTE 24** (tier list 1.3): T0=Lacrimosa, Zankou, Akane Rin, Linko, Blackbird, Iroi, Zero, Hotori,
  Nanally, Chaos, Sakiri · T0.5=Shinku · T1=Daffodil, Baicang, Jiuyuan, Fadia, Haniel, Adler (Watchlist) ·
  T1.5=Hathor, Chiz · T2=Aurelia, Mint, Skia · T3=Edgar. Zero sin `_full` (usar `_card`).
- **ZZZ 61**: T0(11)=Claret, Dialyn, Lucia, Nangong Yu, Norma, Phoenix, Remielle, Sigrid, Sunna,
  Velina, Ye Shunguang, Yuzuha (rating 11). Facciones pendientes (deep-dive opcional).
- **HSR 93**: rating=max(moc,pure,apo); tier: 11→T0, 10→T0.5, 9→T1, 8→T1.5, 7→T2, 6→T3, 5→T4, ≤4→T5.
  T0 (20): Archer, Ashveil, Aventurine Waveflair, Blade Mortenax, Castorice, Cyrene, Dan Heng • Permansor
  Terrae, Evanescia, Evernight, Himeko Nova, Huohuo, Hyacine, Pearl, Rin Tohsaka, Robin Summeretto,
  Silver Wolf • Lv. 999, Sparxie, Trailblazer - Elation, Tribbie, Yao Guang.
- Mapeo rating→tier usado en NTE/ZZZ: 11→T0, 10→T0.5, 9→T1, 8→T1.5, 7→T2, 6→T3.

## 3. Arquitectura del hub
- `SONANCE.html` en la raíz — mosaico de 5 juegos, TODOS ACTIVOS salvo Silver Palace (PRÓXIMAMENTE).
- Cada web tiene botón "⬅ SONANCE" que vuelve al hub (`SONANCE.html`).
- Plantilla común (base NTE/ZZZ/HSR): tabs Pjs/Tier/Sistemas, ficha modal translúcida con ken-burns,
  localStorage "tuyos" + export/import JSON (`<juego>-backup.json`), filtros + buscador.

## 4. Plan por sesión (HOJA DE RUTA)
- [x] Hub SONANCE + WuWa al día + patrones CDN
- [x] NTE v1 completa (24 hipercos, patch 1.3)
- [x] ZZZ v1 completa (61 agentes)
- [x] HSR v1 completa (93 personajes, ratings por modo)
- [x] Hub rediseñado con colajes por juego (Usuario lo aprobó visualmente ✓ — "epico")
- [x] **Fichas v2 en ZZZ/HSR/NTE (9-nov)**: comparador de stats vs objetivos Prydwen con rating,
  habilidades (kit), build prime, rotacion y equipos. data.js por juego + CSS + openChar.
  ZZZ 61/61 (61/61 con equipos tras rescrape moc), HSR 93/93, NTE 24/24. VERIFICADO en browser.
- [x] Deep-dive build: integrado dentro de las fichas v2 (seccion Build prime).
- [ ] NTE: Re-scrape de equipos moc mas adelante (hoy algunos caen en "Sin equipos destacados").
- [x] NTE 24/24 con equipos. HSR 80/93 con equipos MOC — los 13 restantes (Yukong, Hook, Misha,
  Hanya, Gepard, Dan Heng, Luka, Trailblazer Destruction/Preservation, Sampo, Guinaifen, Yanqing, Arlan)
  NO tienen bloque team-container-moc en Prydwen (uso casi nulo): es el techo natural. La ficha
  muestra fallback español. ZZZ 61/61 con equipos.
- [ ] Silver Palace: esperar lanzamiento (hub dice PRÓXIMAMENTE).
- [ ] **12-nov: REVISAR WuWa 3.8** (Lily debut: quitar `nuevo:true`, re-verificar tier con Prydwen
  y ACTUALIZAR TAMBIEN `wuwa/endgames.js` si el meta de Torre de la Adversidad cambia).

## 4b. PAUTA PERMANENTE (aplicar en CADA sesion, a peticion del usuario)
- **Version del juego**: SIEMPRE verificar al empezar la sesion (y cuando se hable de un juego):
  - WuWa: banner/patch actual + proximo hito (3.8 Lily = 12-nov-2026).
  - ZZZ/HSR/NTE: version y personajes nuevos publicados; si hay nuevos, scrape Prydwen y
    añadirlos al index (roster) + data.js + tier.
- **Tier lists**: re-verificar por date; actualizar tiers/nuevos en el roster inline de cada index.
- **Endgames**: re-scrape de "../endgames" de Prydwen (y tracker de nuevos modos) si el caneva
  de cada juego rota; regenerar `endgames.js` (el pipeline: Code Mode fetch + parser moc
  `team-row` + tier-list `single-team`, desc en español a mano).

## 4c. ENDGAMES (9-nov-2026, revisado) ✅
- Pestaña nueva `🎯 Endgames` en **los 4 juegos** (zzz/hsr/nte/wuwa). Implementacion:
  - `<boton nb-eg onclick=goTab('eg',this)>` + `<section id="tab-eg" class="tab"><div class="card"><div id="egwrap">`
    + `<script src="endgames.js">` antes del script principal.
  - `endgames.js` por juego: `const EG={fecha,fuente,css.av,endgames:[{id,nombre,tag,desc,teams:[{u|tier,nombre,m:[[name,icono]]}]}]}`
    + render con AVATAR DEL PJ (icono redondo 34px de cdn.prydwen.gg) + nombre. CSS inline, 0 dependencias.
  - WuWa: sistema de tabs propio (sections `tab-*` dentro de `<main>`, nav buttons sin id) —
    pestaña entre Equipos y Tier. OJO: al insertar tab-eg se machaco `<section id="tab-tier">`
    si no se restaura a mano (ya paso — verificar al tocar).
- **WuWa tiene 3 endgames** (verificado con Game8/WutheringPity + Prydwen):
  1. **Torre de la Adversidad** (ToA) — equipo leaderboards de Prydwen (SSR de la propia pagina):
     T0 = Hiyuki Hypercarry, Hsin Unison, Jingran Hypercarry, Qingxiao Hypercarry, Xuanling Hypercarry.
  2. **Whimpering Wastes** (desde 2.1, Rinascita, 2 equipos por etapa) — la URL `?mode=ww` NO cambia el SSR;
     hay que hacer CLIC en el switcher `.tier-list-switcher .option` desde el BROWSER IN-APP y re-extraer.
     Recomendados cambian respecto a ToA: T0 = Hiyuki Hypercarry, Hsin Unison, **Phrolova Echo**,
     Sigrika Hypercarry (Jingran cae a T1); 5to = Aemeath Fusion Burst (T0.5).
  3. **Endstate Matrix** (desde 3.2, ex Doubled Pawns Matrix; ciclo S2 "Adversity Vanguard" hasta 3.8) —
     NO hay leaderboard publico de equipos; en el tab va desc del modo + 5 equipaciones recomendadas
     por los buffs del ciclo (Unison/Electro Flare/Echo Skill/Escudo/Basic ATK) segun Game8.
  - Endstate requiere: 24 Crestas en ToA + 3.500 pts en Torrents de Whimpering Wastes.
- Otros juegos verificados: **HSR 4 endgames** (MoC/Pure Fiction/Apocalyptic Shadow/**Anomaly
  Arbitration**, el nuevo), **ZZZ 2** (Shiyu Critical + Deadly Assault; Hollow Zero es roguelike sin
  leaderboard), **NTE 1 bloque** (Team Tier List T0; no hay modo endgame formal aun).
- Parser tipo moc: split `<div class="team-row">`, uso por `App. rate`, miembros por
  `href=".../characters/slug"><div class="avatar..."><img alt=... src=...` — **alt = nombre display y
  src = icono directo** (no hace falta mapa slug ni resolver nada).
- Parser tier-list: split `single-team`, tier por `tier-rating` mas cercano hacia atras, avatares alt+src.
- Top-5 recalado (uso): MoC Firefly/TingyunFugue/Dahlia/Lingsha 7.71% · PF Castorice/Evernight/
  Cyrene/Hyacine 24.93% · AS+AA Wolf-999/Sparxie/YaoGuang/Pearl 24.8-33.5% · Shiyu+DA
  Remielle/Phoenix/Velina 35-36% · NTE Akane Rin+Blackbird+Zero+Linko (T0) · ToA/WW y Endstate arriba.
- Verificado local: 4 webs con endgames + iconos (60 imgs WuWa, 80 HSR, 30 ZZZ, 22 NTE), 0 errores consola.
  ⚠️ Las imgs con `loading=lazy` no cargan en tab en-background del browser: probarlas con `new Image()`.

## 4d. CALCULADORA DE STATS NTE (14-nov-2026) ✅
- Problema: filas generadas con `rec=null` -> siempre "?" gris y Objetivo/Optimo "-" aunque
  marcases el PJ como tuyo y metieses stats.
- Fix en `nte/index.html` (bloque ficha):
  - `parseT(st)`: parsea el objetivo textual de `BUILDS[n].st` a numeros. Tokens reales:
    `HP 20k+` (k->x1000), `ATK 2000+`, `CRIT 50-80%` (rango) o `CRIT 90%+` (min),
    `CRIT DMG 200%+`, `UDMG 10%+`, `X DMG 50-87.5%` (Chaos/Anima/Incant/Cosmos/Lakshana,
    bucle global saltando CRIT/UDMG), `DEF 1200+`, `Break 50+`, `Cycle Intensity 200+`.
  - `rateStat(v,T)`: devuelve [estado, color, txtObjetivo, txtOptimo].
    Verde OK `#34d399` si v>=min (o dentro del rango) · Amarillo CASI `#fbbf24` si >=0.85*min ·
    Naranja BAJO `#fb923c` si >=0.65*min · Rojo `#f87171` por debajo. Sin stat: "?" gris
    pero Objetivo/Optimo SIEMPRE visibles.
  - Optimo: max del rango si hay; si no min*1.15. Tope 100% SOLO para CRIT Rate (flag `cap`),
    NO para CRIT DMG (Linko pide 90%+ y su optimo es >100).
  - Formato objetivo: `min+unit+` (200%+, no 200+%) y rangos `50-80%`.
  - Filas extra dinamicas + inputs `n_ud/n_dm/n_df/n_br/n_ci` segun pida el PJ; `saveCharStats`
    guarda los 9 campos en `nte_sts`.
- Verificado en browser: Zankou (CRIT 62 OK verde, CDMG 150 BAJO, ATK 1800 CASI, Cycle Int OK),
  Lacrimosa rango (CRIT 45 CASI, Chaos 60 OK dentro de 50-87.5, optimo =87.5%), rojo con
  ATK 1000/HP 8000. 0 errores consola.
- ZZZ/HSR: ya tenian colores (objetivos numericos de data.js). Fix aplicado igualmente:
  `optO` de ambos capaba CRIT Rate a 75 -> si el objetivo era mayor (ej. HSR Ashveil 91%)
  el Optimo salia MENOR que el Objetivo. Ahora cap 100 (HSR Ashveil: 86% CASI amarillo,
  Optimo =100%).
- WUWA: no tenia chips de color. Anadidos a "📊 Cómo está" en la ficha:
  CSS `.ratebit` + `rateOf()` + fila con chip coloreado (OK verde/CASI amarillo/BAJO
  naranja-rojo, mismas reglas que NTE). Ademas fixed bug: ATK mostraba "%" falso
  (`u||'%'` con u='' → ahora `u===undefined?'%':u`). Verificado Augusta: CRIT 72 OK verde,
  CDMG 200 CASI amarillo, ATK 2100 OK sin %.
- NTE ya hecho arriba. **Los 4 juegos tienen la calculadora identica** (verde/amarillo/
  naranja/rojo + Objetivo + Optimo siempre visibles).
- v2 DINAMICA (14-nov, peticion "mas dinamico y creativo") en los 4 juegos:
  - Cada stat es ahora una BARRA ANIMADA: fill con degradado del color de estado,
    brillo (shimmer) en loop, `sgrow` al abrir la ficha (scaleX 0->1), y una MARCA
    blanca brillante en la posicion del objetivo dentro de la barra.
  - Bajo la barra: Objetivo / Optimo / "te faltan X" (o "objetivo cumplido ✓").
  - Encima: chip de estado + nombre + "tu valor / objetivo".
  - Panel global "SALUD DE BUILD" (class .overall): badge okN/hasN coloreado por estado,
    barra violeta animada, % global (media de stats RELLENADOS, los vacios no penalizan,
    se listan como "N sin meter"). Texto dinamico: "todo al objetivo 🎯" / "N por mejorar +
    N sin meter". Animacion pop de entrada.
  - CSS compartido: .statrow/.stop/.statbar/.statfill/.statmark/.statmeta/.overall/
    .obadge/.obar/.ofill + keyframes sgrow/sshim/spop (copiado en los 4 index).
  - Verificado local en los 4: WuWa Augusta 4/5 98% (CASI con te faltan 20%), ZZZ Alice
    3/3 100% 🎯, HSR Ashveil 2/6 con 1 por mejorar + 3 sin meter, NTE Zankou 3/5 83%.
    0 errores consola.

## 4e. PAUTA WUWA 3.8 APLICADA (14-nov-2026) ✅
- 3.8 salio 12-nov con Lily (5★ Spectro, pistola, Support Unison). Prydwen tier-list actualizado 13-nov.
- Hecho en `wuwa/index.html`:
  - Chip "Parche 3.7 F2" -> "Parche 3.8"; chip "60 PJs" -> 61 (dinamico); "✨ 3.8: Lily — 12 nov" -> "✨ 3.8 LIVE · Lily S+".
  - Lily: `nuevo:true` QUITADO (ya debutó), tier S -> **S+** (Prydwen la pone T0 Support),
    GUIDE 'donde' actualizado ("Debutó el 12-nov"), teams "Unison: Hsin+Lily+Suoming".
  - RESYNC de tiers con el tier list ToA de Prydwen 3.8 (mapeo: T0+T0.5->S+, T1+T1.5->S,
    T2+T3->A, T4->B; en duplicados de rol gana el mejor tier). 19 cambios:
    SUBEN a S+: Lily, Qiuyuan, Rebecca, Aemeath · SUBEN a S: Mortefi, Rover Electro, Rover Aero ·
    BAJAN a S: Augusta, Cartethyia, Phrolova, Carlotta, Jinhsi, Galbrena ·
    BAJAN a A: Cantarella, Zani, Phoebe, Changli, Jiyan, Yinlin, Roccia ·
    BAJAN a B: Calcharo, Jianxin, Yangyang, Rover Havoc.
  - `renderTeams` texto "Parche 3.7" -> 3.8. `endgames.js?v=3` para cache.
- Endgames re-scrapeados (Prydwen team-tier-list actualizado 13-nov, antes era 22-oct):
  - ToA T0: Hiyuki Hypercarry (+Chisa), **Hsin Unison AHORA CON LILY** (Hsin+Suoming+Lily+Shorekeeper+Verina),
    Jingran (+Lupa 5º), Qingxiao, Xuanling.
  - WW T0: Hiyuki, Hsin Unison (con Lily), Phrolova Echo (+Lynae 5º), Sigrika; T0.5 Aemeath Fusion Burst.
  - Endstate: ciclo S2 'Adversity Vanguard' ABARCA 3.5-3.8 (fandom) — sigue vigente, desc actualizada.
  - El SSR de la team-tier-list SOLO trae la lista ToA; el bloque WW sigue necesitando el
    clic del switcher en browser in-app (mismo metodo de siempre).
- Verificado local: chips 3.8/61, Lily S+ con arte (lily_full.webp 200), tier tab repintada,
  endgames 66 iconos con Lily en 3 equipos, 0 errores consola.
- NOTA metodo tier page personajes: `custom-tier-list-ww` (50444) es el switcher WW; cada
  `custom-tier-container` tiene fila DPS + fila Support (marcadores `burst-type-mobile`/`>DPS<`);
  asignar cada tarjeta al ultimo marcador previo para no colar personajes del tier vecino.

## 5. Recuerdos operativos
- Servidor pruebas: `C:\Users\loshi\AppData\Local\Temp\opencode\webserver.ps1` → http://127.0.0.1:8642/
  sirve `C:\Users\loshi\Documents`. ⚠️ Conflicto de puerto si ya hay uno vivo (usar el ya activo).
- Navegador in-app NO abre file:// → usar preview o servidor HTTP.
- Capturas: si falla "screenshot needs a visible tab" → verificar con styles calculados vía `evaluate`
  (script key, no expression).
- GitHub Desktop registrado en `C:\Users\loshi\AppData\Roaming\GitHub Desktop\repositories.json`.
- Lettir FM: `C:\Users\loshi\Documents\Lettir FM\Lettir FM.html` + `lettir-fm.json` — TERMINADO ✅.
  Repo tb tiene `fm-lettir.html`. Rama `proyectos-de-mierda` = la más avanzada de Lettir (48 commits).
- AGENTS.md del repo: normas del usuario para commits (leer antes de commits especiales).
- El usuario habla español con faltas de ortografía: interpreta, no corrijas.
- El usuario quiere primero CONTEXTO/RESUMEN antes de largas tareas (este archivo).

## 6. Dónde seguir si se corta la sesión (estado 9-nov-2026)
- **PUBLICACION ONLINE (9-nov)**: GitHub Pages activa (repo publicado, era privado → público
  por plan gratuito). URL del hub: **https://judasiii2-lgtm.github.io/default-project/**
  - Webs: `.../default-project/zzz/index.html`, `.../hsr/index.html`, `.../nte/index.html`,
    `.../wuwa/index.html` (index.html de la raíz redirige al hub).
  - Cada `git push` a main reconstruye la web solo (1-2 min). Comprobar build con
    API `/repos/judasiii2-lgtm/default-project/pages/builds/latest` (token via `git credential fill`).
- Codigo fuente de las fichas nuevas (por si hay que re-parchear): `ficha_zzz.js` / `ficha_hsr.js`
  / `ficha_nte.js` en `C:\Users\loshi\AppData\Local\Temp\opencode\`. Ya estan pegadas dentro
  de los 3 `index.html` (funcion `openChar` + CSS comparador).
- Generador de `data.js`: `gen_data.ps1` (usa backups `{zzz,hsr}_b1..b4.b64` y `nte_b1.b64`).
- Equipos ZZZ: `fix_zzz_teams.ps1` + `zzz_teams.json` + `merge_zzz_teams.ps1` (ya ejecutados y mergidos;
  data.js queda con 61/61 `teams`).
- Si hay que actualizar descripciones/objetivos: repetir scraping contra
  `https://www.prydwen.gg/zenless|star-rail|neverness-to-everness/characters/<slug>/` con fetch de Code Mode.
- Proximo hito: 12-nov WuWa 3.8 (ver arriba).

## 4f) Port de pestañas de WuWa a los 3 juegos (14-nov-2026)
- Peticion: "hazlo en todos los juegos igual, y fijate en todas las pestañas que hay en wuwa, introducelo en todos los juegos lo mismo o equivalente si existe".
- WuWa tiene 10 tabs: Portada, Mapa, Personajes, Builds, Equipos, Endgames, Tier, Gacha, Hoy, Tools, Cuenta.
- Portado a ZZZ/HSR/NTE (antes solo tenian 4-5 tabs):
  - **Portada** (nueva, tab por defecto activa): hero + 10 tiles de acceso rapido. chipCount se rellena por JS.
  - **Builds** (nueva en ZZZ y HSR; NTE ya la tenia): listado con buscador + filtro mios/todos,
    muestra build de Prydwen (ZZZ: W-Engine + Discos + objetivos st; HSR: Cono + Reliquias + Planar + objetivos st)
    + boton a la ficha completa.
  - **Equipos** (nueva): equipos meta de Prydwen de TUS personajes (PRYD[n].teams, cada juego con su formato:
    ZZZ string "A + B + C" con Rank; HSR array de slugs via H_S2N; NTE array de strings-comma de slugs via CHARS)
    + "Mis equipos" propios (localStorage {g}_teams) con score por teamScore (stats + tier).
  - **Gacha** (nueva): registro manual de tiradas + contador de pity (ZZZ S-Rank 90, HSR 5★ 90 soft ~74, NTE 90 generico),
    stats total/S/A + historial tabla. localStorage {g}_gacha.
  - **Hoy** (nueva): fecha, reset diario 04:00 servidor + calculadora de bateria/trampeo/energia (240 max, 6 min/punto).
  - **Tools** (nueva): comparador de equipos (top 6 con tus stats), evaluador de discos/reliquias/modulos
    (mismo scoring que WuWa: 50+8/sub+10 CRIT main), cola "¿a quien subo primero?" (top 10 por tier + estado de stats).
  - **Cuenta** (nueva): exportar/importar TODO (mine + stats + gacha + teams) en un JSON {g}-backup-full.json.
  - **Mapa**: WuWa-only, no se porto (no hay mapa interactivo equivalente verificado en los otros juegos).
- goTab en los 3 ahora resalta el nav por id nb-<tab> si no se pasa btn (los tiles lo usan).
- CSS nuevo compartido (copiado en los 3 index): .hero/.chip/.tiles/.tile/.gtable/.item/.skill/.team/.mates/.mate.
- localStorage nuevo por juego: {g}_teams, {g}_gacha ({g} = zzz/hsr/nte).
- Verificado local en los 3: 11 tabs visibles, portada activa con 10 tiles, equipos meta renderizados
  (ZZZ 6 equipos con 2 agentes, HSR 3, NTE 9), builds (ZZZ/HSR), gacha pity, tools con score, 0 errores consola.
  Las fichas con la calculadora dinamica siguen intactas.
- Pendiente puntual: revisar resets/pity exactos de NTE (usado generico 90/04:00) cuando se scrapee de nuevo.
