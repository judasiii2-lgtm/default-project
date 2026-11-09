// Endgames WuWa — equipos top de la Team Tier List de Prydwen (Tower of Adversity)
// Mejor equipo primero + 4 alternativas. Nombres propios sin traducir.
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · Team Tier List (Tower of Adversity)",
  endgames: [
    {
      id: "toa",
      nombre: "Torre de la Adversidad (Tower of Adversity)",
      tag: "pisos",
      desc: "El endgame de WuWa: pisos con planeta y bloques asignados. La Zona Estable es para todos, la Zona Experimental puntea los equipos por tiempo. Conviene tener 2-3 cores distintos preparados porque cada bloque penaliza reusar el mismo DPS. El primer equipo (Hiyuki Hypercarry, T0) es el que mas limpia ahora mismo.",
      teams: [
        { rk: 1, tier: "T0", nombre: "Hiyuki Hypercarry", m: ["Hiyuki", "Lucilla", "Lynae", "Suisui"] },
        { rk: 2, tier: "T0", nombre: "Hsin Unison", m: ["Hsin", "Suoming", "The Shorekeeper", "Verina"] },
        { rk: 3, tier: "T0", nombre: "Jingran Hypercarry", m: ["Jingran", "Iuno", "Mortefi", "The Shorekeeper"] },
        { rk: 4, tier: "T0", nombre: "Qingxiao Hypercarry", m: ["Qingxiao", "Denia", "Lynae", "Mornye"] },
        { rk: 5, tier: "T0", nombre: "Xuanling Hypercarry", m: ["Yangyang Xuanling", "Chisa", "Rebecca", "Phrolova"] }
      ]
    }
  ]
};

(function () {
  var el = document.getElementById("egwrap");
  if (!el) return;
  var robj = "display:inline-block;background:rgba(125,140,200,.25);color:#dbe2ff;border-radius:6px;padding:1px 7px;font-size:11px;font-weight:700;margin:0 6px 0 0;vertical-align:middle";
  var card = "background:rgba(30,22,44,.42);border-radius:12px;padding:10px 13px;margin:6px 0";
  var h = '<h2>\uD83C\uDFAF Endgames de WuWa</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas · ' + EG.fuente + " · " + EG.fecha + "</p>";
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
