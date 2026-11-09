// Endgames HSR — datos de Prydwen (uso de equipos en la version actual)
// Mejor equipo primero + 4 alternativas. Nombres propios sin traducir.
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · leaderboards de uso de equipos",
  endgames: [
    {
      id: "moc",
      nombre: "Memoria del Caos (MoC)",
      tag: "ciclos",
      desc: "El endgame rotativo clasico: dos nodos con oleada de enemigos y jefe final, contra reloj de ciclos. La estrella completa exige terminar el nodo en pocos ciclos. Se reinicia con cada parche, asi que los equipos del top van rotando.",
      teams: [
        { rk: 1, u: "7.71", m: ["Firefly", "Tingyun • Fugue", "The Dahlia", "Lingsha"] },
        { rk: 2, u: "6.06", m: ["Castorice", "March 7th • Evernight", "Cyrene", "Hyacine"] },
        { rk: 3, u: "4.50", m: ["Saber", "Gilgamesh", "Robin Summeretto", "Huohuo"] },
        { rk: 4, u: "4.47", m: ["Hysilens", "Black Swan", "Kafka", "Huohuo"] },
        { rk: 5, u: "4.39", m: ["Firefly", "Tingyun • Fugue", "Ruan Mei", "The Dahlia"] }
      ]
    },
    {
      id: "pf",
      nombre: "Ficcion Pura (Pure Fiction)",
      tag: "puntos",
      desc: "El endgame de hordas: puntos por derrotar oleadas rapidisimas. Aqui el AOE y los ataques secundarios (follow-up) valen oro; los equipos mono-diana rinden poco. El mejor equipo arriba por mucho (24.93% de uso).",
      teams: [
        { rk: 1, u: "24.93", m: ["Castorice", "March 7th • Evernight", "Cyrene", "Hyacine"] },
        { rk: 2, u: "5.27", m: ["Castorice", "March 7th • Evernight", "Robin Summeretto", "Hyacine"] },
        { rk: 3, u: "5.06", m: ["Hysilens", "Black Swan", "Kafka", "Huohuo"] },
        { rk: 4, u: "4.57", m: ["Archer", "Rin Tohsaka", "Sparkle", "Dan Heng • Permansor Terrae"] },
        { rk: 5, u: "4.22", m: ["Hysilens", "Black Swan", "Kafka", "Dan Heng • Permansor Terrae"] }
      ]
    },
    {
      id: "as",
      nombre: "Sombra Apocaliptica (Apocalyptic Shadow)",
      tag: "jefe",
      desc: "Duelo contra un jefe gigante con debilidades impuestas: dos fases de barra y puntos por borrar rapidez al boss. Si no rompes la barra pierdes puntuacion, llevate rompedores de barra de su elemento debil.",
      teams: [
        { rk: 1, u: "24.81", m: ["Silver Wolf • Lv. 999", "Sparxie", "Yao Guang", "Pearl"] },
        { rk: 2, u: "7.56", m: ["Evanescia", "Trailblazer • Elation", "Yao Guang", "Pearl"] },
        { rk: 3, u: "7.33", m: ["Firefly", "Tingyun • Fugue", "The Dahlia", "Lingsha"] },
        { rk: 4, u: "6.18", m: ["Silver Wolf • Lv. 999", "Trailblazer • Elation", "Yao Guang", "Pearl"] },
        { rk: 5, u: "6.04", m: ["Firefly", "Tingyun • Fugue", "Ruan Mei", "The Dahlia"] }
      ]
    },
    {
      id: "aa",
      nombre: "Arbitraje de Anomalias (Anomaly Arbitration)",
      tag: "nuevo",
      desc: "El endgame mas nuevo: un solo jefe con mecanicas de anomalia y puntuacion acumulada por danio. El dominio del top es aplastante (33.49% de uso) — si puedes, imita ese core Yao Guang.",
      teams: [
        { rk: 1, u: "33.49", m: ["Silver Wolf • Lv. 999", "Sparxie", "Yao Guang", "Pearl"] },
        { rk: 2, u: "9.51", m: ["Silver Wolf • Lv. 999", "Trailblazer • Elation", "Yao Guang", "Pearl"] },
        { rk: 3, u: "8.98", m: ["Evanescia", "Trailblazer • Elation", "Yao Guang", "Pearl"] },
        { rk: 4, u: "8.75", m: ["Silver Wolf • Lv. 999", "Sparxie", "Yao Guang", "Huohuo"] },
        { rk: 5, u: "2.60", m: ["Evanescia", "Trailblazer • Elation", "Yao Guang", "Huohuo"] }
      ]
    }
  ]
};

(function () {
  var el = document.getElementById("egwrap");
  if (!el) return;
  var robj = "display:inline-block;background:rgba(125,140,200,.25);color:#dbe2ff;border-radius:6px;padding:1px 7px;font-size:11px;font-weight:700;margin:0 6px 0 0;vertical-align:middle";
  var card = "background:rgba(30,22,44,.42);border-radius:12px;padding:10px 13px;margin:6px 0";
  var h = '<h2>\uD83C\uDFAF Endgames de HSR</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas por endgame · ' + EG.fuente + " · " + EG.fecha + "</p>";
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
