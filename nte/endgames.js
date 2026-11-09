// Endgames NTE — equipos top de la Team Tier List de Prydwen
// El juego todavia no tiene varios endgames con leaderboard propio, asi que las
// mejores composiciones para endgame son los equipos T0/T0.5 de la tier list.
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · Team Tier List (equipos para endgame)",
  endgames: [
    {
      id: "nte-teams",
      nombre: "Mejores equipos para endgame",
      tag: "T0",
      desc: "NTE todavia no tiene modo endgame con leaderboard formal (la version gira en torno a eventos e historia). Estas son las composiciones T0 con las que la comunidad limpia el contenido hard: elige la que mas cerca este de tu roster.",
      teams: [
        { rk: 1, tier: "T0", nombre: "Akane Hyper", m: ["Akane Rin", "Blackbird", "Zero", "Linko"] },
        { rk: 2, tier: "T0", nombre: "Blackbird Nova", m: ["Blackbird", "Daffodill", "Haniel", "Fadia", "Sakiri"] },
        { rk: 3, tier: "T0", nombre: "Lacrimosa Quickswap", m: ["Lacrimosa", "Sakiri", "Zankou", "Blackbird", "Iroi"] },
        { rk: 4, tier: "T0", nombre: "Zankou Break", m: ["Zankou", "Daffodill", "Sakiri", "Blackbird", "Adler", "Linko"] },
        { rk: 5, tier: "T0", nombre: "Zankou Hexed", m: ["Zankou", "Linko", "Sakiri", "Iroi"] }
      ]
    }
  ]
};

(function () {
  var el = document.getElementById("egwrap");
  if (!el) return;
  var robj = "display:inline-block;background:rgba(125,140,200,.25);color:#dbe2ff;border-radius:6px;padding:1px 7px;font-size:11px;font-weight:700;margin:0 6px 0 0;vertical-align:middle";
  var card = "background:rgba(30,22,44,.42);border-radius:12px;padding:10px 13px;margin:6px 0";
  var h = '<h2>\uD83C\uDFAF Endgames de NTE</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas · ' + EG.fuente + " · " + EG.fecha + "</p>";
  EG.endgames.forEach(function (e) {
    h += '<div style="margin-top:16px"><div style="margin-bottom:4px"><b style="font-size:16px">' + e.nombre + "</b> " +
      '<span style="' + robj + '">' + e.tag + "</span></div><p style=\"color:#a8b3cf;margin:4px 0 8px\">" + e.desc + "</p>";
    e.teams.forEach(function (t, i) {
      var label = i === 0 ? "\u2B50 MEJOR EQUIPO" : "Alternativa " + i;
      h += '<div style="' + card + '"><span style="' + robj + '">' + label + "</span>" +
        (t.tier ? '<span style="' + robj + '">tier ' + t.tier + "</span>" : "") +
        '<div style="margin-top:7px;font-size:14px"><b style="color:#fbbf24">' + t.nombre + '</b> · ' + t.m.join('<span style="color:#7c8bb5"> + </span>') + "</div></div>";
    });
    h += "</div>";
  });
  el.innerHTML = h;
})();
