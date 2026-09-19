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
