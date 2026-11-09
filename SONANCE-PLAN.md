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
- [ ] **12-nov: REVISAR WuWa 3.8** (Lily debut: quitar `nuevo:true`, re-verificar tier con Prydwen).

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
- Codigo fuente de las fichas nuevas (por si hay que re-parchear): `ficha_zzz.js` / `ficha_hsr.js`
  / `ficha_nte.js` en `C:\Users\loshi\AppData\Local\Temp\opencode\`. Ya estan pegadas dentro
  de los 3 `index.html` (funcion `openChar` + CSS comparador).
- Generador de `data.js`: `gen_data.ps1` (usa backups `{zzz,hsr}_b1..b4.b64` y `nte_b1.b64`).
- Equipos ZZZ: `fix_zzz_teams.ps1` + `zzz_teams.json` + `merge_zzz_teams.ps1` (ya ejecutados y mergidos;
  data.js queda con 61/61 `teams`).
- Si hay que actualizar descripciones/objetivos: repetir scraping contra
  `https://www.prydwen.gg/zenless|star-rail|neverness-to-everness/characters/<slug>/` con fetch de Code Mode.
- Proximo hito: 12-nov WuWa 3.8 (ver arriba).
