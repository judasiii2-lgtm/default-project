// Endgames ZZZ — datos de Prydwen (uso de equipos en la version actual)
// Mejor equipo primero + 4 alternativas. Nombres propios sin traducir.
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · leaderboards de uso de equipos",
  endgames: [
    {
      id: "shiyu",
      nombre: "Defensa Critica de Shiyu (Shiyu Defense)",
      tag: "pisos",
      desc: "El endgame por pisos de siempre: pisos inferiores libres y a partir del 7 el modo Critico contra el reloj. Primor Anomalia y disipa rapidisimo. El core Remielle + Phoenix + Velina domina el top (35.52% de uso) — si no lo tienes, Remielle + cualquier anomalia potente tambien rinde.",
      teams: [
        { rk: 1, u: "35.52", m: ["Remielle", "Phoenix", "Velina"] },
        { rk: 2, u: "10.74", m: ["Remielle", "Burnice", "Velina"] },
        { rk: 3, u: "6.66", m: ["Remielle", "Jane Doe", "Velina"] },
        { rk: 4, u: "6.40", m: ["Remielle", "Aria", "Velina"] },
        { rk: 5, u: "2.82", m: ["Yixuan", "Dialyn", "Lucia"] }
      ]
    },
    {
      id: "da",
      nombre: "Asalto Mortal (Deadly Assault)",
      tag: "puntaje",
      desc: "Tres jefes rotativos con vida gigante y puntuacion S+. Necesitas 3 equipos completos: prepara tres cores distintos. El triplete Remielle/Phoenix/Velina vuelve a ser el mejor (36.23%).",
      teams: [
        { rk: 1, u: "36.23", m: ["Remielle", "Phoenix", "Velina"] },
        { rk: 2, u: "12.77", m: ["Remielle", "Burnice", "Velina"] },
        { rk: 3, u: "6.62", m: ["Remielle", "Jane Doe", "Velina"] },
        { rk: 4, u: "3.71", m: ["Remielle", "Aria", "Velina"] },
        { rk: 5, u: "1.37", m: ["Remielle", "Alice", "Velina"] }
      ]
    }
  ]
};

(function () {
  var el = document.getElementById("egwrap");
  if (!el) return;
  var robj = "display:inline-block;background:rgba(125,140,200,.25);color:#dbe2ff;border-radius:6px;padding:1px 7px;font-size:11px;font-weight:700;margin:0 6px 0 0;vertical-align:middle";
  var card = "background:rgba(30,22,44,.42);border-radius:12px;padding:10px 13px;margin:6px 0";
  var h = '<h2>\uD83C\uDFAF Endgames de ZZZ</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas por endgame · ' + EG.fuente + " · " + EG.fecha + "</p>";
  EG.endgames.forEach(function (e) {
    h += '<div style="margin-top:16px"><div style="margin-bottom:4px"><b style="font-size:16px">' + e.nombre + "</b> " +
      '<span style="' + robj + '">' + e.tag + "</span></div><p style=\"color:#a8b3cf;margin:4px 0 8px\">" + e.desc + "</p>";
    e.teams.forEach(function (t, i) {
      var label = i === 0 ? "\u2B50 MEJOR EQUIPO" : "Alternativa " + i;
      h += '<div style="' + card + '"><span style="' + robj + '">' + label + "</span>" +
        '<span style="' + robj + '">uso ' + String(t.u).replace(".", ",") + '%</span>' +
        '<div style="margin-top:7px;font-size:14px">' + t.m.join('<span style="color:#7c8bb5"> + </span>') + "</div></div>";
    });
    h += "</div>";
  });
  el.innerHTML = h;
})();
