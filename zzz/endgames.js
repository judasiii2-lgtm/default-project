// Endgames ZZZ — datos de Prydwen (uso de equipos en la version actual)
// Mejor equipo primero + 4 alternativas. Nombres propios sin traducir.
// m: [nombre, icono]
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · leaderboards de uso de equipos",
  css: { av: "https://cdn.prydwen.gg/images/" },
  endgames: [
    {
      id: "shiyu",
      nombre: "Defensa Critica de Shiyu (Shiyu Defense)",
      tag: "pisos",
      desc: "El endgame por pisos de siempre: del 7 en adelante es el modo Critico contra el reloj. Remielle + Phoenix + Velina lidera con 35.52% de uso — si no los tienes, Remielle + cualquier Anomalia potente tambien rinde.",
      teams: [
        { u: "35.52", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Phoenix", "zenless-zone-zero/characters/phoenix.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "10.74", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Burnice", "zenless-zone-zero/characters/burnice.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "6.66", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Jane Doe", "zenless-zone-zero/characters/jane-doe.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "6.40", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Aria", "zenless-zone-zero/characters/aria.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "2.82", m: [["Yixuan", "zenless-zone-zero/characters/yixuan.webp"], ["Dialyn", "zenless-zone-zero/characters/dialyn.webp"], ["Lucia", "zenless-zone-zero/characters/lucia.webp"]] }
      ]
    },
    {
      id: "da",
      nombre: "Asalto Mortal (Deadly Assault)",
      tag: "puntaje",
      desc: "Tres jefes rotativos con vida gigante y puntuacion S+. Necesitas 3 equipos completos: prepara tres cores distintos. El triplete Remielle/Phoenix/Velina vuelve a dominar (36.23%).",
      teams: [
        { u: "36.23", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Phoenix", "zenless-zone-zero/characters/phoenix.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "12.77", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Burnice", "zenless-zone-zero/characters/burnice.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "6.62", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Jane Doe", "zenless-zone-zero/characters/jane-doe.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "3.71", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Aria", "zenless-zone-zero/characters/aria.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] },
        { u: "1.37", m: [["Remielle", "zenless-zone-zero/characters/remielle.webp"], ["Alice", "zenless-zone-zero/characters/alice.webp"], ["Velina", "zenless-zone-zero/characters/velina.webp"]] }
      ]
    }
  ]
};

(function () {
  var el = document.getElementById("egwrap");
  if (!el || typeof EG === "undefined") return;
  var chip = "display:inline-block;background:rgba(125,140,200,.25);color:#dbe2ff;border-radius:6px;padding:1px 7px;font-size:11px;font-weight:700;margin:0 6px 0 0;vertical-align:middle";
  var card = "background:rgba(30,22,44,.42);border-radius:12px;padding:10px 13px;margin:6px 0";
  var bestCard = "background:rgba(125,110,200,.22);border:1px solid rgba(167,139,250,.35);border-radius:12px;padding:10px 13px;margin:6px 0";
  var memb = function (x) {
    return '<span style="display:inline-flex;align-items:center;background:rgba(15,12,28,.6);border:1px solid rgba(125,140,200,.28);border-radius:20px;padding:2px 10px 2px 2px;margin:3px 6px 3px 0">' +
      '<img src="' + EG.css.av + x[1] + '" alt="" loading="lazy" style="width:34px;height:34px;border-radius:50%;object-fit:cover" onerror="this.style.display=\'none\'">' +
      '<b style="margin-left:6px;font-size:13px;font-weight:700">' + x[0] + "</b></span>";
  };
  var h = '<h2>\uD83C\uDFAF Endgames de ZZZ</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas por endgame · ' + EG.fuente + " · " + EG.fecha + "</p>";
  EG.endgames.forEach(function (e) {
    h += '<div style="margin-top:16px"><div style="margin-bottom:4px"><b style="font-size:16px">' + e.nombre + "</b> " +
      '<span style="' + chip + '">' + e.tag + "</span></div>" +
      '<p style="color:#a8b3cf;margin:4px 0 8px">' + e.desc + "</p>";
    e.teams.forEach(function (t, i) {
      var label = i === 0 ? "\u2B50 MEJOR EQUIPO" : "Alternativa " + i;
      h += '<div style="' + (i === 0 ? bestCard : card) + '"><span style="' + chip + '">' + label + "</span>" +
        '<span style="' + chip + '">uso ' + String(t.u).replace(".", ",") + '%</span>' +
        '<div style="margin-top:6px">' + t.m.map(memb).join("") + "</div></div>";
    });
    h += "</div>";
  });
  el.innerHTML = h;
})();
