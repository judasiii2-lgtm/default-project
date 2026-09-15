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
- Aviso honesto: medias CA 127.6 / 121.1 / 120.6 / 118.7 / 116.6 (dif. 11 pts, la web avisa si >8). Lettir se queda el mejor de cada posición por ser primero en el snake.

### 5. Commit `cc56fd4` — repesca + reparto + mapTeam (pusheado)
- Incluye cambio CSV (110 filas reasignadas) + fix `fm-lettir.html`. Árbol limpio.

### 6. Documentación
- Creado este `progress.md` + Norma 6 en `AGENTS.md` (documentar cada commit aquí).
- Norma 6 ampliada: si no existe `progress.md` se crea con el estado actual; progreso separado por proyecto (wuwa, fútbol u otros); en duda se pregunta.

### 7. Fix Mercado (ventas absurdas)
- Bug: contaba a cada jugador en TODAS sus posiciones a la vez → cupos inflados, 62 ventas, cracks (Velázquez, Silva) marcados como sobrantes y cuentas incoherentes (20−12+3).
- Fix: cupos como el 22 ideal — cada jugador ocupa UN cupo; sobra quien no entra en el 22, falta lo que quede para 22. Cada venta explica por qué (quiénes se quedan, motivo 💎/📉/🌱/🛠) y cada fichaje dice quién lo tapa de momento.
- Verificado offline: Lettir 20−4+6=22, Höttur 23−8+7=22, Magni 21−5+6=22, Hamrarnir 21−6+7=22, Kría 25−8+5=22. Total 31 ventas = 31 fichajes. Sin cracks vendidos.
