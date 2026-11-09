// Endgames NTE — equipos top de la Team Tier List de Prydwen
// El juego no tiene endgame con leaderboard formal aun, asi que "mejores equipos
// endgame" = composiciones T0 de la tier list. m: [nombre, icono]
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · Team Tier List (equipos para endgame)",
  css: { av: "https://cdn.prydwen.gg/images/" },
  endgames: [
    {
      id: "nte-teams",
      nombre: "Mejores equipos para endgame",
      tag: "T0",
      desc: "NTE todavia no tiene modo endgame con leaderboard propio (la version gira en torno a eventos, historia y desafios de temporada). Estas son las composiciones T0 con las que la comunidad limpia el contenido hard: elige la que mas cerca este de tu roster. Akane Hyper encabeza la lista.",
      teams: [
        { tier: "T0", nombre: "Akane Hyper", m: [["Akane Rin", "nte/characters/akane-rin_small.webp"], ["Blackbird", "nte/characters/blackbird_small.webp"], ["Zero", "nte/characters/zero_small.webp"], ["Linko", "nte/characters/linko_small.webp"]] },
        { tier: "T0", nombre: "Blackbird Nova", m: [["Blackbird", "nte/characters/blackbird_small.webp"], ["Daffodill", "nte/characters/daffodil_small.webp"], ["Haniel", "nte/characters/haniel_small.webp"], ["Fadia", "nte/characters/fadia_small.webp"], ["Sakiri", "nte/characters/sakiri_small.webp"]] },
        { tier: "T0", nombre: "Lacrimosa Quickswap", m: [["Lacrimosa", "nte/characters/lacrimosa_small.webp"], ["Sakiri", "nte/characters/sakiri_small.webp"], ["Zankou", "nte/characters/zankou_small.webp"], ["Blackbird", "nte/characters/blackbird_small.webp"]] },
        { tier: "T0", nombre: "Zankou Break", m: [["Zankou", "nte/characters/zankou_small.webp"], ["Daffodill", "nte/characters/daffodil_small.webp"], ["Sakiri", "nte/characters/sakiri_small.webp"], ["Blackbird", "nte/characters/blackbird_small.webp"], ["Adler", "nte/characters/adler_small.webp"]] },
        { tier: "T0", nombre: "Zankou Hexed", m: [["Zankou", "nte/characters/zankou_small.webp"], ["Linko", "nte/characters/linko_small.webp"], ["Sakiri", "nte/characters/sakiri_small.webp"], ["Iroi", "nte/characters/iroi_small.webp"]] }
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
  var h = '<h2>\uD83C\uDFAF Endgames de NTE</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas · ' + EG.fuente + " · " + EG.fecha + "</p>";
  EG.endgames.forEach(function (e) {
    h += '<div style="margin-top:16px"><div style="margin-bottom:4px"><b style="font-size:16px">' + e.nombre + "</b> " +
      '<span style="' + chip + '">' + e.tag + "</span></div>" +
      '<p style="color:#a8b3cf;margin:4px 0 8px">' + e.desc + "</p>";
    e.teams.forEach(function (t, i) {
      var label = i === 0 ? "\u2B50 MEJOR EQUIPO" : "Alternativa " + i;
      h += '<div style="' + (i === 0 ? bestCard : card) + '"><span style="' + chip + '">' + label + "</span>" +
        (t.tier ? '<span style="' + chip + '">tier ' + t.tier + "</span>" : "") +
        '<div style="margin:2px 0 4px;font-size:14px"><b style="color:#fbbf24">' + t.nombre + "</b></div>" +
        '<div>' + t.m.map(memb).join("") + "</div></div>";
    });
    h += "</div>";
  });
  el.innerHTML = h;
})();
