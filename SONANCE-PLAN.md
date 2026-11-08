# SONANCE — Documento maestro del proyecto (multijuego)

Actualizado: 8-nov-2026
Repositorio: `judasiii2-lgtm/default-project` (rama `main`, privado)
Git: SIEMPRE usar `C:\Users\loshi\AppData\Local\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe` (git del sistema NO existe)
Auth: if network fails → `$env:GIT_TERMINAL_PROMPT=0; $env:GCM_INTERACTIVE="never"; $env:GCM_GUI_PROMPT="never"` (GCM con credenciales de judasiii2-lgtm)

## ⚠️ Regla PowerShell/UTF-8
PowerShell corrompe UTF-8 al capturar/mostrar texto (mojibake). Extraer archivos del repo
SIEMPRE con `git archive --format=zip -o out.zip <rev>` + Expand-Archive. "Commit -m" sin
acentos/ñ para evitar mojibake en el mensaje de commit. Verificar por BYTES, no por pantalla.

---

## 1. Estado actual

### TODAS LAS WEBS ACTIVAS ✅ (8-nov-2026)
| Web | Roster | Contenido | Commit base |
|---|---|---|---|
| `wuwa/index.html` | 61 pjs · meta 3.7 F2 | builds, tier, gacha, calendario | 4df6309 |
| `nte/index.html` | 24 hipercos · patch 1.3 | fichas, tier, builds+stats objetivos, sistemas | 8c23f08 |
| `zzz/index.html` | 61 agentes | fichas, tier, clases CritDPS/AnoDPS/Support | (8-nov) |
| `hsr/index.html` | 93 personajes | fichas, tier T0–T5, ratings por modo MoC/Pure/Apo en ficha | (8-nov) |

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
- [ ] Opcional deep-dive ZZZ: facciones, W-Engine firmas y discos por personaje (ficha build)
- [ ] Opcional deep-dive HSR: conos de luz recomendados y equipos por personaje
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
