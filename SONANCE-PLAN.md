# SONANCE — Documento maestro del proyecto (multijuego)

Actualizado: 7-nov-2026
Repositorio: `judasiii2-lgtm/default-project` (rama `main`, privado)
Git: SIEMPRE usar `C:\Users\loshi\AppData\Local\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe` (git del sistema NO existe)
Auth: if network fails → `$env:GIT_TERMINAL_PROMPT=0; $env:GCM_INTERACTIVE="never"; $env:GCM_GUI_PROMPT="never"` (GCM con credenciales de judasiii2-lgtm)

## ⚠️ Regla PowerShell/UTF-8
PowerShell corrompe UTF-8 al capturar/mostrar texto (mojibake). Extraer archivos del repo
SIEMPRE con `git archive --format=zip -o out.zip <rev>` + Expand-Archive. "Commit -m" sin
acentos/ñ para evitar mojibake en el mensaje de commit. Verificar por BYTES, no por pantalla.

---

## 1. Estado actual

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

### Rosters ya localizados (para próximas sesiones)
- **NTE (26 pjs, YA LANZADO!)**: adler, akane-rin, aurelia, baicang, blackbird, chaos, chiz, daffodil,
  edgar, elyms, exe, fadia, haniel, hathor, hotori, iroi, jiuyuan, lacrimosa, linko, mint, nanally,
  sakiri, shinku, skia, zankou, zero.
- **ZZZ**: la página /zenless/characters/ lista ≥30 (alice, anby-demara, anby-demara-soldier-0, anton,
  aria, astra-yao, banyue, ben, billy-kid, billy-starlight, burnice, caesar, cissia, claret, corin,
  dialyn, ellen, evelyn, grace-howard, harumasa, hugo, jane-doe, ju-fufu, kafka, koleda, lighter,
  lucia, lucy, lycaon, manato + más que quedaron cortados). Sacar lista COMPLETA + tiers de su tier list.
- **HSR**: obtener roster de /star-rail/characters/ (kafka verificado).

## 3. Arquitectura del hub
- `SONANCE.html` en la raíz del workspace local (y del repo) — mosaico de juegos:
  - WuWa ✅ enlaza `Web WuWa/index.html` (local) — en repo: subida como carpeta `wuwa/index.html`.
  - NTE / ZZZ / HSR: fichas "⭐ DISPONIBLE" (NTE y HSR/ZZZ se construyen en próximas sesiones).
  - Silver Palace: "🔒 PRÓXIMAMENTE" (cuando lanzado, prydwen ya tiene web para decir datos).
- Cada web tiene botón "⬅ SONANCE" que vuelve al hub (`SONANCE.html`).
- Estructura HTML/Javascript de WuWa reutilizable: ROSTERS (datos), SPLASH (slugs CDN),
  artWithFallback()/artFix(), ficha translúcida, tier list, builds, gacha/tools si procede.

## 4. Plan por sesión (HOJA DE RUTA)
- [x] Sesión hoya: plan + hub SONANCE + WuWa al día + patrones CDN descubierto
- [ ] **Próxima: NTE** ← mejor candidato de arranque (26 pjs listos): fetch su tier list + game info,
  construir `nte/index.html` con 26 personajes, fichas estilo WuWa, commit+push.
- [ ] Session HSR: roster de /star-rail/characters/ + tier list → build completa.
- [ ] Session ZZZ: roster completo (la lista anterior está cortada) → build completa.
- [ ] Silver Palace: esperar lanzamiento (hub dice PRÓXIMAMENTE).
- [ ] 12-nov: revisar WuWa 3.8 (Lily debut, quitar chip ✨, validar tier real con Prydwen).

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
