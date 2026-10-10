# PROGRESS.md - Progreso del proyecto Lettir Group · FM Islandia

## Estado base (pre-sesión)
- App `fm-lettir.html`: centro de mando Lettir + 4 filiales (matriz por posición, reparto snake, import Genius 0-200, etiquetas MPC/MPD/MPI).
- `plantilla-genius.csv`: 110 jugadores reales del Genius (Léttir 48, Magni 31, IF Höttur 30, KR Reykjavík 1, Hamrarnir 0, Kría 0).
- Web WuWa SONANCE (`index.html`) intacta y separada del proyecto Lettir.

## Sesión 2026-09-15

### 1. Revisión general del proyecto Lettir
- Confirmado que hablamos del Lettir (fútbol), no del WuWa. Rama `proyectos-de-mierda` al día con `origin`.
- Detectado cambio sin commitear en `fm-lettir.html` y 1 jugador colado del KR Reykjavík (equipo fantasma).

### 2. Commit `db5b16a` — mercado + tooltips + vista 22 (pusheado)
- Nuevo bloque 💰 Mercado: qué vender / qué fichar por equipo.
- Matriz con tooltips (quién cuenta en cada casilla + ⓘ multiposición).
- Vista de equipos pasa de XI a 22 (titular + banquillo, 2 por puesto).

### 3. Repesca del KR + blindaje `mapTeam`
- Gunawan, Ferry (22a, LD/MCO/MPD, CA 131/PA 159) movido de KR Reykjavík a Hamrarnir · Grupo A.
- `mapTeam`: clubes desconocidos caen al primer equipo en vez de crear equipos fantasma.

### 4. Reparto equitativo total de los 110 (aplicado al CSV)
- Lógica de la web (snake por posición + protección Sub-19 PA 75+ + tapa-huecos).
- Resultado: Lettir 20 · Höttur 23 · Magni 21 · Hamrarnir 21 · Kría 25. Los 5 cubren las 9 posiciones, 0 huecos.
- Aviso honesto: medias CA Lettir 127.6 · Höttur 118.7 · Magni 120.6 · Hamrarnir 121.1 · Kría 116.6 (dif. 11 pts, la web avisa si >8). Lettir se queda el mejor de cada posición por ser primero en el snake.

### 5. Commit `cc56fd4` — repesca + reparto + mapTeam (pusheado)
- Incluye cambio CSV (110 filas reasignadas) + fix `fm-lettir.html`. Árbol limpio.

### 6. Documentación
- Creado este `progress.md` + Norma 6 en `AGENTS.md` (documentar cada commit aquí).
- Norma 6 ampliada: si no existe `progress.md` se crea con el estado actual; progreso separado por proyecto (wuwa, fútbol u otros); en duda se pregunta.

### 7. Fix Mercado (ventas absurdas)
- Bug: contaba a cada jugador en TODAS sus posiciones a la vez → cupos inflados, 62 ventas, cracks (Velázquez, Silva) marcados como sobrantes y cuentas incoherentes (20−12+3).
- Fix: cupos como el 22 ideal — cada jugador ocupa UN cupo; sobra quien no entra en el 22, falta lo que quede para 22. Cada venta explica por qué (quiénes se quedan, motivo 💎/📉/🌱/🛠) y cada fichaje dice quién lo tapa de momento.
- Verificado offline: Lettir 20−4+6=22, Höttur 23−8+7=22, Magni 21−5+6=22, Hamrarnir 21−6+7=22, Kría 25−8+5=22. Total 31 ventas = 31 fichajes. Sin cracks vendidos.

### 8. Commit `77a5295` — docs progress + Norma 6 (pusheado)
- Creado este `progress.md` con el estado del Lettir + Norma 6 en `AGENTS.md` (documentar cada commit aquí, sin mezclar proyectos).

### 9. Commit `fbdc5bf` — fix Mercado con cupo único (pusheado)
- `fm-lettir.html`: cada jugador ocupa UN cupo del 22 ideal (ya no cuenta en todas sus posiciones); ventas con motivo y fichajes con tapa temporal.
- Incluye avance de este `progress.md` (punto 7). Árbol limpio.

## Sesión 2026-09-19 — revisión de recuperación
- Confirmado proyecto Lettir (fútbol), no WuWa. Rama `proyectos-de-mierda` al día con `origin`, árbol limpio.
- Verificado `plantilla-genius.csv`: 110 filas (Lettir 20 · Höttur 23 · Magni 21 · Hamrarnir 21 · Kría 25), 0 filas KR fantasma; Gunawan, Ferry en Lettir (CA 131/PA 159).
- Verificado `fm-lettir.html`: `mapTeam` con fallback a `teams[0]` (sin equipos fantasma), `NEED` 22 ideal, Mercado con cupo único (`left`/`slot`), reparto snake + `applySuggestion`, claves `lettir_players`/`lettir_teams` separadas de WuWa (`sonance76`).
- Verificado `index.html` WuWa SONANCE intacto y separado (solo menciona `fm-lettir.html` como enlace).
- Corregido punto 4: medias CA con club explícito (Höttur 118.7 / Hamrarnir 121.1, estaban cruzadas) + documentados commits `77a5295` y `fbdc5bf` (Norma 6).
- Medias re-medidas: Lettir 127.6 · Höttur 118.7 · Magni 120.6 · Hamrarnir 121.1 · Kría 116.6 (dif. 11 pts). Todo OK, pendiente commit de esta revisión si el usuario lo pide.

### 10. Commit `f66e27a` — revisión recuperación + fix docs (pusheado)
- Incluye corrección punto 4 (medias con club explícito) + puntos 8–9 (commits `77a5295`/`fbdc5bf`) + sesión 2026-09-19.

## Sesión 2026-09-19 (2) — simulación + mejor puesto
- Simulación Mercado 22 ideal con réplica PowerShell del `parsePositions`/`score`/`slot` de la app (ver `fm-lettir.html:190,222,282-288`): Magni 21−4+5=22 · Kría 25−6+3=22 · Hamrarnir 21−5+6=22 · Höttur 23−6+5=22 · Lettir 20−2+4=22. Total 23 ventas = 23 fichajes, todo cuadra a 22.
- Discrepancia honesta vs punto 7 (31/31): la réplica da 23/23. Causa probable: la app usa `posLock`/`posList` del navegador + desempates por `score`, la réplica usa `posFull` del CSV con orden NEED. En ambos casos sin cracks vendidos (top-8 por score a salvo: Penc, Hugo, Joyce, De Bernardi, Ibe, Cooney, Martínez, Velázquez).
- Matriz (cuenta multiposición): 0 huecos — los 5 cubren las 9 posiciones.
- Ventas propuestas (peor score, fuera del 22): Lettir solo vende Grétarsson (ED 76/100) y Sæbjörnsson (ED 74/114). Ojo: Eggimann (MCO 104/190), Müller (MCO 108/186) y Aesch (DFC 90/173) salen como ventas por CA baja pero con PA TOP → la app ya los marca 🌱 (ceder antes que vender).
- Mejor puesto del juego: la app mostraba todas las posiciones sin decir la mejor. Fix (sin commit aún): nuevo `bestPos(p)` = candado > campo `best` > primero del Genius (`fm-lettir.html:222`); `migrate` lo rellena por defecto; tabla con ⭐ mejor puesto; editor ✏️ con desplegable ⭐; import/export con columna opcional `mejor_puesto`; si viene vacía se usa el primero del Genius y se ajusta a mano.
- Pendiente: que el usuario confirme si el Genius lista el mejor primero.
- Hecho en esta sesión (paso 2, aprobado): Mercado/Reparto/best22 priorizan el ⭐ — en cada puesto, los que lo tienen como mejor entran primero (desempate por `score`); si sobran huecos se rellenan con polivalentes. XI/banquillo marca ⭐ al que juega en su mejor puesto (`fm-lettir.html` Mercado `slot`, `best22`, `autoReparto` snake, `pair22`).

## Sesión 2026-09-19 (3) — una sola posición por jugador (pedido del Sultán)
- Idea del usuario: fuera ⭐/multiposición; cada jugador tiene UNA sola posición, la mejor según el juego (el Genius no la da).
- Cambio en `fm-lettir.html`: `effPos` devuelve `[posLock||pos]` (antes todas las del Genius); `posFull`/`posList` quedan como referencia. Editor ✏️ con 🔒 "Puesto en el juego" para fijar la única posición; textos de Matriz/Mercado actualizados.
- Revertido todo lo del ⭐ (`bestPos`, `mejor_puesto`, prioridad en cupos): la asignación vuelve a ser por `score`.
- Simulación réplica PowerShell con 1ª posición del Genius (a corregir con 🔒): matriz con solo 2 huecos (Kría y Lettir sin LI); Mercado Magni 21−5+6=22 · Kría 25−8+5=22 · Hamrarnir 21−3+4=22 · Höttur 23−7+6=22 · Lettir 20−4+6=22. Total 27 ventas = 27 fichajes.
- Nota: en la réplica inicial olvidé `@()` al tomar `pos[0]` en PowerShell (devolvía la primera letra) → daba 18 huecos y 62 ventas; corregido, esos números eran falsos. La app JS nunca tuvo ese bug.
- Uso: abrir `fm-lettir.html`, revisar cada jugador con el juego y fijar su puesto con 🔒; la matriz avisará de huecos reales hasta que esté completo.

## Sesión 2026-09-19 (4) — tabla por posiciones (pedido del Sultán)
- La tabla 👥 Jugadores no estaba ordenada por posición. Cambio en `fm-lettir.html`: nuevo orden por defecto "Posición" (POR → LD → DFC → LI → MC → MPC → MPI → MPD → DC, y dentro de cada puesto por CA). El resto de órdenes (CA/PA/Edad/Precio/Nombre) siguen en el desplegable.

## Sesión 2026-09-19 (5) — pirámide por Nivel + datos del Sultán
- El Sultán pasó su estado real: `lettir-fm.json` (110 jug, 35 candados 🔒 puestos desde el juego) + CSV con textos de posición corregidos (ej. `DF DIC/MPC`, `DFI`, `MC/MP DC`).
- Estado actual medido: Magni 120.6 · Kría 116.6 · Hamrarnir 121.1 · Höttur 118.7 · Lettir 127.6. Con candados, solo 2 huecos aparentes (Höttur y Lettir sin LI — el tapa-huecos los cubre al repartir).
- Pregunta del Sultán: ¿puede la app hacer la pirámide que necesita y entender divisiones que cambian con los ascensos? Sí:
  - Nuevo `teamNivel` + `piramideOrder` (`fm-lettir.html:380-382`): la pirámide ordena por Nivel leído de 🛡️ Equipos (editable), CENTRAL desempata. Al ascender un filial, actualiza su división y la pirámide le da mejores jugadores sola.
  - Modo pirámide: el equipo de Nivel 1 (división más alta) se queda los NEED mejores por puesto (22), resto en cascada por Nivel; el resultado muestra el orden usado.
- Simulación pirámide con sus datos: Lettir 22 jug media CA 162.7 (monstruo europeo) · Höttur 26 con 110.9 · Magni 24 con 108.4 · Hamrarnir 20 con 111.6 · Kría 18 con 109.8. Confirma el plan: Lettir no se vuelve flojo, Höttur queda como 2º europeo en ciernes.
- `plantilla-genius.csv` del repo sustituido por el CSV del Sultán (110 filas, misma distribución, posiciones corregidas). Ojo: los 35 candados viven en su navegador + su JSON, NO en el CSV; no reimportar sin respaldo o se pierden.

## Sesión 2026-09-19 (6) — gazapo Nivel + respaldo + paso de temporadas
- Cazado por el Sultán (xD): ponía "Nivel más bajo" cuando es **Nivel 1, división más alta**. Corregido en comentarios, textos y `progress` (sesión 5).
- Respaldo: antes los 35 candados solo vivían en su navegador + Descargas. Ahora `lettir-fm.json` (110 jug con 🔒 + 5 equipos) también en el repo y versionado. El CSV sigue sin guardar candados.
- Paso del tiempo (edad/CA/PA cambian): nuevo botón 🔄 **Actualizar valores** en ➕ Añadir/Importar (`fm-lettir.html:updateValuesText`): pega el CSV nuevo del Genius y actualiza edad/CA/PA/valor/contrato **por nombre**, conservando puestos 🔒 y equipos. Los nombres del CSV que no existen avisan como posibles fichajes (esos con Importar normal). Flujo por temporada: Genius → CSV → 🔄 Actualizar → 🔀 Reparto pirámide → aplicar → ⬇ JSON de respaldo.

## Sesión 2026-09-19 (7) — web muerta, paréntesis culpable
- El Sultán avisa: la web no responde a clics. Causa: `node --check` (Node instalado por winget para verificar) encuentra `SyntaxError: Unexpected token ')'` en el `alert` final de `updateValuesText` — un `)` de más. Todo el `<script>` caía y ningún botón funcionaba.
- Fix: quitado el paréntesis; `node --check` OK.
- Smoke test con Node + datos reales del Sultán (`lettir-fm.json`, stubs de DOM): carga 110/5, pirámide sugiere los 110 (Lettir 21 · Höttur 26 · Magni 24 · Hamrarnir 21 · Kría 18), aplicar mueve bien (Lettir media 164.1), 🔄 Actualizar toca los 110 sin perder 🔒 ni equipos y sin añadir fantasmas. SMOKE OK.

## Sesión 2026-09-19 (8) — el candado contaba pero la etiqueta mentía
- El Sultán fija a Homet, Ricard como solo-LD y la fila sigue mostrando DFC. Causa real (verificada): los cálculos (matriz/mercado/reparto) SÍ usaban el 🔒 LD vía `effPos`; pero `migrate` recalculaba `p.pos` desde el texto Genius en cada carga, pisando el candado solo en la etiqueta, y el resto "+LD" comparaba contra ese `pos` rancio.
- Fix en `fm-lettir.html`: `migrate` respeta el candado (`if(p.posLock)p.pos=p.posLock`); insignia de Jugadores, Tops y plantillas de Equipos muestran la posición efectiva; eliminado el resto confuso "+LD" (ya todo es una sola posición).
- Verificado con `node --check` + smoke (110/5, pirámide 21/26/24/21/18, update 110 sin pérdidas) + caso Homet: lock LD → etiqueta LD.

## Sesión 2026-09-19 (9) — laterales/extremos intercambiables + bug de cupos dobles
- Idea del Sultán: con el editor cambia roles porque LD↔LI y MPI↔MPD comparten atributos. Implementado: `FLEX` en `fm-lettir.html` — LD/LI y EI/ED cubren ambos perfiles en matriz/mercado/reparto/XI; insignia con marca ↔.
- Bug cazado al verificar (importante): con FLEX, la pirámide vaciaba el grupo en la primera pasada (LD se llevaba a todos los LD+LI) y la segunda (LI) no tenía a quién dar → el top se quedaba con 18 cuerpos para 22 cupos (Martínez/Berk contaban doble). Fix: reparto por GRUPOS (`POR | LD+LI | DFC | MC | MCO | EI+ED | DC`) en pirámide y equitativo — el top coge los 4 laterales y 4 extremos de verdad.
- Smoke tras fix: Lettir 22 cuerpos a 162.8 · Höttur 25 a 112.3 · Magni 23 a 112.1 · Hamrarnir 21 a 105.5 · Kría 19 a 110.1. Huecos 0. Mercado/best22 ya llevaban cupo único, sin cambios.

## Sesión 2026-09-19 (10) — cambios de puesto como texto, no automático
- El Sultán aclara: no quería FLEX automático, sino recomendaciones escritas como las ventas ("cambia a Pepito de LD a LI"). Revertido FLEX (una sola posición) y reparto por grupos (vuelve snake por posición).
- Nuevo en 💰 Mercado por equipo: caja 🔀 **CAMBIOS DE PUESTO** — si falta B y sobra su pareja A (LD↔LI, MPI↔MPD, mismos atributos), propone pasar sobrantes (mejor score primero) con botón Aplicar 🔒 (`setRole`), que fija el candado y recalcula todo. Sale en el resumen del equipo.
- Verificado con sus datos: Magni Mazović LD→LI (113/179), Hamrarnir Hernández LD→LI (119/174) y Prieto ED→EI (131/184), Lettir Haraldsson LD→LI (63/64). `node --check` + smoke OK (pirámide 21/26/24/21/18, Lettir 164.1).

## Sesión 2026-09-19 (11) — mercado también en 🛡️ Equipos
- Pedido del Sultán: ventas/fichajes/cambios visibles por equipo. `renderMercado` guarda por equipo su HTML (`mercadoByTeam`) y conteos (`mercadoCount`); 🛡️ Equipos muestra en la tarjeta 🛒/🎯/🔀 y dentro del desplegable la sección 💰 Mercado completa (misma que Resumen, con botones Aplicar 🔒).
- Verificado: 5/5 equipos con HTML (ej. Lettir 4 vender · 6 fichar · 1 cambiar). `node --check` + smoke OK.

## Sesión 2026-09-19 (12) — revisión completa + bug de arranque en vacío
- Pedido del Sultán: revisar que todo esté bien. Hecho con Node: `node --check` en `fm-lettir.html` e `index.html` (ambos OK) + batería de 34 pruebas con sus datos reales (carga 110/5, pintado de las 10 zonas, matriz 11 filas, mercado 5 equipos, equitativo+pirámide 110/110, aplicar, setRole, add/dup/del, edit/save, export CSV/JSON, import +1, update conserva equipo, goTab, ventas con motivo). Todo verde.
- Bug real cazado: `if(!players.length){genDemo(true);}` estaba ANTES de declarar `FN/LN/POSPOOL` → en un navegador vacío la web moría al arrancar (`ReferenceError`, TDZ). El Sultán nunca lo vio porque tiene datos guardados. Fix: la semilla demo se llama tras definir `genDemo`. Verificado arranque en vacío: 110 demo OK.

## Sesión 2026-09-19 (13) — cantera Lettir (pedido del Sultán)
- Idea: si un cedido no entraría en el 22 de su destino (allí también sobraría), cederlo es absurdo — se queda en el Lettir a desarrollarse o para futuros equipos.
- Implementado en 🔀 Reparto (ambos modos): tras huecos, calcula el 22 de cada destino por score; el cedido que no entre y tenga que desarrollar (≤21 con margen 20+ o PA 165+) vuelve al primer equipo con motivo 🏠 Cantera. Sin margen que desarrollar → se queda cedido y allí se vende (mercado lo marca 📉/🛠).
- En 💰 Mercado, los jóvenes con margen del CENTRAL ya no salen como venta sino 🏠 Cantera (salvo que una filial los ponga de titular).
- Medido con sus datos (pirámide): Lettir 36 (21 + 15 cantera) · Höttur 20 · Magni 20 · Hamrarnir 19 · Kría 15. Aviso honesto: las filiales quedan algo cortas y pedirán fichar barato (se ve en 🎯) — es el coste de no regalar desarrollo. `node --check` + batería OK.

## Sesión 2026-09-19 (14) — regla 22: fuera ventas, todo al Lettir
- El Sultán lo deja claro: 22 por equipo y nada más; quien no juegue, al Lettir (cantera). Ni ventas ni cesiones absurdas. Eliminado: caja VENDER, motivos 💎📉🌱🛠, lenguaje de vender/ceder (el ❌ manual ahora dice borrar).
- 💰 Mercado ahora por equipo: 🏠 **AL LETTIR** (sobrantes del 22, cada uno con su porqué) + botón **Pasar al Lettir** (`moveSurplus`, primero avisa de aplicar 🔀 cambios) + 🎯 fichar huecos + 🔀 cambios. En Lettir, la cantera ya está en casa.
- 🔀 Reparto: la cantera ya no filtra por potencial — TODO el que no entra en el 22 de su filial va al Lettir. Medido: Lettir 45 · Höttur 18 · Magni 17 · Hamrarnir 16 · Kría 14. `node --check` + batería OK.

## Sesión 2026-09-19 (15) — pestaña Mercado + escudos + nombre original
- Pedido triple del Sultán: (1) pestaña 💰 Mercado propia con qué zona mejorar por equipo (antes vivía dentro de Resumen; el contenido por equipo —al Léttir/fichar/cambios— ya lo dice todo); (2) escudos en 🛡️ Equipos; (3) nombre original del Lettir.
- Nombre: el club existe de verdad — **Léttir Knattspyrnufélag** (Reykjavík, fund. 1979, ÍR-völlur; ojo, era filial del ÍR). En la app pasa a **Léttir** (el Genius le quitó la tilde). Migración automática al cargar: equipos y jugadores `Lettir`→`Léttir`, `mapTeam` sigue tragando con/sin tilde (verificado), importaciones intactas.
- Escudos verificados: Léttir (Wikipedia) · Höttur y Magni (TheSportsDB, mismo escudo del club) en las tarjetas, con inicial de respaldo si falla la red. Hamrarnir y Kría sin escudo fiable encontrado → inicial con su color, editable con ✏️ (nuevo prompt URL de escudo en editar equipo).
- Cabecera y título con LÉTTIR + nombre completo. Verificado: 0 restos sin tilde, 3 imgs en tarjetas, mercado-tab pinta, batería OK.

## Sesión 2026-09-19 (16) — escudo amarillo del Höttur
- El Sultán avisa: el que puse no era (era el de baloncesto del club). El equipo de fútbol compite como conjunto Höttur/Huginn y su escudo es amarillo y negro.
- Puesto el amarillo real (CDN scoreapis del Höttur/Huginn, verificado descargándolo: escudo amarillo/negro). Ojo honesto: pone HUGINN (es el escudo del conjunto, no solo Höttur); el del multiclub ÍFH (verde/rojo de hottur.is) lo descarto por no ser amarillo. Si el FM le muestra otro, me pasa la imagen o URL y lo cambio con el ✏️.
- `node --check` + batería OK.

## Sesión 2026-09-19 (17) — escudos Hamrarnir y Kría
- Pedido del Sultán: poner los dos que faltaban. Hamrarnir verificado descargándolo (círculo amarillo con martillos cruzados, "HAMRARNIR 2005", CDN scoreapis id 62317). Kría = **Knattspyrnufélagið Kría** (kría = golondrina de mar ártica): círculo amarillo con el pájaro negro + KRIA (CDN offsidescores, verificado).
- Los 5 equipos ya lucen escudo (migración rellena los vacíos del navegador). `node --check` + smoke (5 imgs) OK.

## Sesión 2026-09-19 (18) — Equipos solo táctica
- Pedido del Sultán (con captura): en 🛡️ Equipos solo la táctica con los nombres (XI + banquillo, 22). Fuera la sección de mercado y la tabla de jugadores de cada desplegable — para eso están 💰 Mercado y 👥 Jugadores. Título actualizado. `node --check` + batería OK.

## Sesión 2026-09-19 (19) — pestaña 🏆 Ligas + cierre de temporada
- Pedido del Sultán: meter todos los equipos de todas las ligas y a final de temporada poner los datos para que la web evalúe.
- Nuevo: 7 ligas islandesas precargadas (N1–N5 + 5ª en grupos A/B, con los nuestros colocados y ⭐), editables (tamaño, ascensos, descensos, +/− equipos). Por liga se pega la clasificación final en orden (opcional `PJ G E P GF GC`); los nombres nuevos se incorporan solos.
- Cierre: veredicto por objetivo (Título/Ascenso/Playoff/Mantener, editable en ✏️ equipo) con 🟢🟡🔴 + contexto de plantilla (nº y media) + notas de ataque/defensa si hay stats (enlazan al 🎯 fichar). Propone ascensos/descensos y al aplicar actualiza división/Nivel (la pirámide se adapta sola) y archiva la temporada en el historial.
- Persistencia en `lettir_leagues` + incluido en ⬇/⬆ JSON. Verificado: Höttur 1º en N3 → asciende a `1. deild karla · Nivel 2`, archiva 2026→2027. `node --check` + batería OK.

---
# WuWa SONANCE (proyecto separado, no mezclar con Lettir)

## Sesión 2026-09-24 — restauración tras borrado
- El Sultán reporta WuWa vacío: sin imgs, sin fichas/rotaciones, sin Mis Equipos. En git no existe versión full previa (`index.html` 233 líneas desde `e1289a7` en main y `proyectos-de-mierda`): no se puede recuperar, se reconstruye.
- Restaurado en `index.html`: `portrait()` + `IMG_ID` (wuthering.gg `_ipx`, 5 URLs 200 OK verificadas; resto con fallback a inicial si el ID falla), `BUILDS` 9→20 con `rot`, `kitDesc()` en ficha, `MY_TEAMS_DEFAULT` (6 meta 3.6) + `myTeams` persistido en `sonance76` con editor (añadir/borrar), imgs en PJs/Builds/Tier/Ficha.
- Fix `bestTeams`: filtro DPS `includes('DPS')` → `==='DPS principal'` (antes Iuno/Zhezhi duplicados en 2 equipos; ahora 18 slots únicos, 0 dups). Clave `sonance76` intacta y separada de `lettir_*`.
- Verificado: `node --check` OK, smoke 58/47, builds 20, myTeams 6, bestTeams sin dups, `renderAll` OK.

## Sesión 2026-10-02 — reconstrucción v7.7 (análisis web)
- Análisis: `IMG_ID` inventados (pinyin) → 404 fuera de 5; `portHTML()` sin usar; `MY_TEAMS` con 4 no-poseídos (Ciaccona/Roccia/Lupa/Brant); `teamScore` rompía con nombre fantasma; gacha sin pity real; `buildFor` genérico para 38/58; `kitDesc` sin enlace.
- Fix con `wuthering.gg/characters` en vivo: retratos a `iconrolehead150` numérico (58/58, ej. Augusta 51_UI, Cartethyia 40_UI, Qingxiao 73_UI), `.port` con `position:relative`, `MY_TEAMS` 6/6 100% tuyos (Electro/Aero/Havoc/Spectro/Glacio/Fusion), `teamScore` con guard, pity `x/80` + soft-pity ≥70, `buildFor` por rol (Support Rejuvenating/Moonlit, Sub Moonlit/sup, DPS 43311), `kitDesc` con enlace al kit, versión v7.7.
- Verificado: `node --check` OK, smoke 58/47/20, retratos 58/58 nuevo formato, equipos 0 faltantes, bestTeams 18 únicos, fantasma 0, `renderAll` OK.

## Sesión 2026-10-02 (2) — ficha y builds como capturas
- El Sultán muestra cómo estaba: modal Lucy con splash, Talentos, Cómo está (Tuyo vs Recomendado/Óptimo), Editar números (Prob/CDMG/ATK/HP/ER/bono/cura), Progreso (arma/ecos/talentos), ecos/arma/subs/prioridad/ascensión/dónde + Ver en mapa, Qué mejorar ahora, Sus equipos; y Builds con banner, % progreso, checks, detalles y UID 600063375.
- Reconstruido: `UID`+`GUIDE` (7 PJs con objetivos reales + fallback por rol), `st2`/`buildPct`/`improveFor`, `openChar` rico, `saveStats` con 7 campos, `renderBuilds` rico (banner, %, Tengo arma/Ecos/Talentos, eco/arma/alt/set/prioridad/ascensión/dónde, Qué mejorar, Ficha completa), cabecera Builds vinculada a UID + alerta cuenta precargada + botón Tengo todas las armas, barra parche 3.6, `bFilter` por defecto Solo los míos.
- Verificado: `node --check` OK, ficha Lucy con las 5 secciones, builds con banner/checks/mejorar, `renderAll` OK.

## Sesión 2026-10-10 — v7.8 parche 3.7 (limpieza + Hsin/Suoming + retratos grandes)
- Limpieza pedida por el Sultán: versión unificada a `v7.8` (header + chip + footer, antes v7.7/v7.6-rebuild/v7.7-rebuild2), fuera clave basura `Jiyan2` en `HEAD_ID`, guards anti-fantasma en `guideFor` (devuelve ficha `-`/aviso en vez de reventar con `r.el`), `renderQueue` y `bestTeams:rank` (tier por defecto si el nombre no existe — solo afecta a imports manuales corruptos).
- Retratos: fuera las iniciales sobre la imagen (`<span>` con `r.name[0]` eliminado en Personajes y Tier); `.port` 120→180px, `.banner` 130→180px, tier 110→160px, `.tiermember` 110→140px, `.splash` ficha 130x170→180x230.
- Parche 3.7 "Prism's Illumination" (verificado en wuthering.gg + Prydwen + Pocket Gamer + UU TOP 2026-09-30/10-05): añadidos `Hsin` (Electro/Rectificador, DPS principal, S+) y `Suoming` (Electro/Espada, Support, S) → 60 PJs. `HEAD_ID` Hsin 75_UI / Suoming 76_UI (secuencial tras Qingxiao 73 / Jingran 74, con `onerror` que oculta si Kuro numera distinto).
- Builds/guías con datos reales: Hsin `Blooming Jadehaven` + set `Heart of Sworn Vigil` + eco `Suhsin the Inevitable` (Flare/Unison); Suoming `Unspoken Rue` + mismo set (apoyo Electro +48% al equipo); Qingxiao→`Glint of Clouds`+`Heart of Evil's Purge`, Jingran→`Thousandfold Deliverance`+`Lamp of Nether Road` (nombres reales 3.6, antes placeholders). `GUIDE` Hsin/Suoming con ascensión real (Loneflame/Bloom of Hearkening · Empyrean's Sigh/Miasmic Branch) y banners (Fase 1 Hsin+Iuno+Chisa hasta 22-oct, Fase 2 Suoming+Lynae+Luuk Herssen). Hoy actualizado al 3.7. `MY_OWNED` sigue en 47 (los nuevos son banners en curso, no poseídos).
- Verificado: `node --check` OK (exit 0), 60 PJs con Hsin/Suoming, 0 restos `(58)`, versiones 3× v7.8, sin `r.name[0]`, port/banner 180px, builds Hsin/Suoming presentes.

## Sesión 2026-10-10 (2) — ficha por retrato + subapartado Habilidades y rotación
- Pedido del Sultán: fuera el botón Ficha en Personajes; ahora se entra a la ficha clicando el retrato (`.port` con `cursor:pointer` + `onclick=openChar`, quitado el `<button>Ficha</button>` en `renderPjs`). En Builds se mantiene `Ficha completa` hasta que el Sultán decida.
- Nuevo en la ficha (`openChar`): subapartado `🌀 Habilidades y rotación` con `kitFull(n)` en castellano — qué hace cada kit (Skill/Liberación/Forte/Eco/Intro/Outro), rotación paso a paso numerada, prioridad de talentos y objetivo, más enlace a detalles. Entradas verificadas para Hsin (Flare+Unison), Suoming (Unison/Binding Mind +48% Electro), Qingxiao (Tune Strain + Mindlock 15/25) y Jingran (Heavy + escudo); resto por rol (DPS/Sub/Support) con su `rot` real del build. Fantasma devuelve `-` sin reventar.
- Verificado: `node --check` OK (exit 0), `kitFull` en 8 casos (Hsin/Suoming/Qingxiao/Jingran/DPS/Sub/Support/fantasma) sin errores, `saveStats` intacto tras el enganche.
