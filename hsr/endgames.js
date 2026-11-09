// Endgames HSR — datos de Prydwen (uso de equipos en la version actual)
// Mejor equipo primero + 4 alternativas. Nombres propios sin traducir.
// m: [nombre, icono]
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen · leaderboards de uso de equipos",
  css: { av: "https://cdn.prydwen.gg/images/" },
  endgames: [
    {
      id: "moc",
      nombre: "Memoria del Caos (Memory of Chaos)",
      tag: "ciclos",
      desc: "El endgame rotativo clasico: dos nodos con oleadas y jefe final contra el reloj de ciclos. Cada parche rota, asi que los equipos del top tambien. El core Firefly + Tingyun Fugue + The Dahlia + Lingsha lidera con 7.71% de uso.",
      teams: [
        { u: "7.71", m: [["Firefly", "honkai-star-rail/characters/firefly_icon.webp"], ["Tingyun \u2022 Fugue", "honkai-star-rail/characters/tingyun-fugue_icon.webp"], ["The Dahlia", "honkai-star-rail/characters/the-dahlia_icon.webp"], ["Lingsha", "honkai-star-rail/characters/lingsha_icon.webp"]] },
        { u: "6.06", m: [["Castorice", "honkai-star-rail/characters/castorice_icon.webp"], ["March 7th \u2022 Evernight", "honkai-star-rail/characters/march-7th-evernight_icon.webp"], ["Cyrene", "honkai-star-rail/characters/cyrene_icon.webp"], ["Hyacine", "honkai-star-rail/characters/hyacine_icon.webp"]] },
        { u: "4.50", m: [["Saber", "honkai-star-rail/characters/saber_icon.webp"], ["Gilgamesh", "honkai-star-rail/characters/gilgamesh_icon.webp"], ["Robin Summeretto", "honkai-star-rail/characters/robin-summeretto_icon.webp"], ["Huohuo", "honkai-star-rail/characters/huohuo_icon.webp"]] },
        { u: "4.47", m: [["Hysilens", "honkai-star-rail/characters/hysilens_icon.webp"], ["Black Swan", "honkai-star-rail/characters/black-swan_icon.webp"], ["Kafka", "honkai-star-rail/characters/kafka_icon.webp"], ["Huohuo", "honkai-star-rail/characters/huohuo_icon.webp"]] },
        { u: "4.39", m: [["Firefly", "honkai-star-rail/characters/firefly_icon.webp"], ["Tingyun \u2022 Fugue", "honkai-star-rail/characters/tingyun-fugue_icon.webp"], ["Ruan Mei", "honkai-star-rail/characters/ruan-mei_icon.webp"], ["The Dahlia", "honkai-star-rail/characters/the-dahlia_icon.webp"]] }
      ]
    },
    {
      id: "pf",
      nombre: "Ficcion Pura (Pure Fiction)",
      tag: "puntos",
      desc: "El endgame de hordas: puntos por barrer oleadas a toda velocidad. AOE y ataques secundarios valen oro; el mono-diana sufre. Castorice + Evernight + Cyrene + Hyacine arrasa (24.93%).",
      teams: [
        { u: "24.93", m: [["Castorice", "honkai-star-rail/characters/castorice_icon.webp"], ["March 7th \u2022 Evernight", "honkai-star-rail/characters/march-7th-evernight_icon.webp"], ["Cyrene", "honkai-star-rail/characters/cyrene_icon.webp"], ["Hyacine", "honkai-star-rail/characters/hyacine_icon.webp"]] },
        { u: "5.27", m: [["Castorice", "honkai-star-rail/characters/castorice_icon.webp"], ["March 7th \u2022 Evernight", "honkai-star-rail/characters/march-7th-evernight_icon.webp"], ["Robin Summeretto", "honkai-star-rail/characters/robin-summeretto_icon.webp"], ["Hyacine", "honkai-star-rail/characters/hyacine_icon.webp"]] },
        { u: "5.06", m: [["Hysilens", "honkai-star-rail/characters/hysilens_icon.webp"], ["Black Swan", "honkai-star-rail/characters/black-swan_icon.webp"], ["Kafka", "honkai-star-rail/characters/kafka_icon.webp"], ["Huohuo", "honkai-star-rail/characters/huohuo_icon.webp"]] },
        { u: "4.57", m: [["Archer", "honkai-star-rail/characters/archer_icon.webp"], ["Rin Tohsaka", "honkai-star-rail/characters/rin-tohsaka_icon.webp"], ["Sparkle", "honkai-star-rail/characters/sparkle_icon.webp"], ["Dan Heng \u2022 Permansor Terrae", "honkai-star-rail/characters/dan-heng-permansor-terrae_icon.webp"]] },
        { u: "4.22", m: [["Hysilens", "honkai-star-rail/characters/hysilens_icon.webp"], ["Black Swan", "honkai-star-rail/characters/black-swan_icon.webp"], ["Kafka", "honkai-star-rail/characters/kafka_icon.webp"], ["Dan Heng \u2022 Permansor Terrae", "honkai-star-rail/characters/dan-heng-permansor-terrae_icon.webp"]] }
      ]
    },
    {
      id: "as",
      nombre: "Sombra Apocaliptica (Apocalyptic Shadow)",
      tag: "jefe",
      desc: "Duelo contra un jefe gigante con debilidades impuestas: romper la barra a tiempo es la mitad de la puntuacion. Silver Wolf Lv.999 + Sparxie + Yao Guang + Pearl domina (24.81%).",
      teams: [
        { u: "24.81", m: [["Silver Wolf \u2022 Lv. 999", "honkai-star-rail/characters/silver-wolf-lv-999_icon.webp"], ["Sparxie", "honkai-star-rail/characters/sparxie_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Pearl", "honkai-star-rail/characters/pearl_icon.webp"]] },
        { u: "7.56", m: [["Evanescia", "honkai-star-rail/characters/evanescia_icon.webp"], ["Trailblazer \u2022 Elation", "honkai-star-rail/characters/trailblazer-elation_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Pearl", "honkai-star-rail/characters/pearl_icon.webp"]] },
        { u: "7.33", m: [["Firefly", "honkai-star-rail/characters/firefly_icon.webp"], ["Tingyun \u2022 Fugue", "honkai-star-rail/characters/tingyun-fugue_icon.webp"], ["The Dahlia", "honkai-star-rail/characters/the-dahlia_icon.webp"], ["Lingsha", "honkai-star-rail/characters/lingsha_icon.webp"]] },
        { u: "6.18", m: [["Silver Wolf \u2022 Lv. 999", "honkai-star-rail/characters/silver-wolf-lv-999_icon.webp"], ["Trailblazer \u2022 Elation", "honkai-star-rail/characters/trailblazer-elation_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Pearl", "honkai-star-rail/characters/pearl_icon.webp"]] },
        { u: "6.04", m: [["Firefly", "honkai-star-rail/characters/firefly_icon.webp"], ["Tingyun \u2022 Fugue", "honkai-star-rail/characters/tingyun-fugue_icon.webp"], ["Ruan Mei", "honkai-star-rail/characters/ruan-mei_icon.webp"], ["The Dahlia", "honkai-star-rail/characters/the-dahlia_icon.webp"]] }
      ]
    },
    {
      id: "aa",
      nombre: "Arbitraje de Anomalias (Anomaly Arbitration)",
      tag: "nuevo",
      desc: "El endgame mas nuevo: un jefe con mecanicas de anomalia y puntuacion acumulada. El equipo del top es aplastante (33.49% de uso) — si puedes, imita ese core de Yao Guang.",
      teams: [
        { u: "33.49", m: [["Silver Wolf \u2022 Lv. 999", "honkai-star-rail/characters/silver-wolf-lv-999_icon.webp"], ["Sparxie", "honkai-star-rail/characters/sparxie_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Pearl", "honkai-star-rail/characters/pearl_icon.webp"]] },
        { u: "9.51", m: [["Silver Wolf \u2022 Lv. 999", "honkai-star-rail/characters/silver-wolf-lv-999_icon.webp"], ["Trailblazer \u2022 Elation", "honkai-star-rail/characters/trailblazer-elation_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Pearl", "honkai-star-rail/characters/pearl_icon.webp"]] },
        { u: "8.98", m: [["Evanescia", "honkai-star-rail/characters/evanescia_icon.webp"], ["Trailblazer \u2022 Elation", "honkai-star-rail/characters/trailblazer-elation_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Pearl", "honkai-star-rail/characters/pearl_icon.webp"]] },
        { u: "8.75", m: [["Silver Wolf \u2022 Lv. 999", "honkai-star-rail/characters/silver-wolf-lv-999_icon.webp"], ["Sparxie", "honkai-star-rail/characters/sparxie_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Huohuo", "honkai-star-rail/characters/huohuo_icon.webp"]] },
        { u: "2.60", m: [["Evanescia", "honkai-star-rail/characters/evanescia_icon.webp"], ["Trailblazer \u2022 Elation", "honkai-star-rail/characters/trailblazer-elation_icon.webp"], ["Yao Guang", "honkai-star-rail/characters/yao-guang_icon.webp"], ["Huohuo", "honkai-star-rail/characters/huohuo_icon.webp"]] }
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
  var h = '<h2>\uD83C\uDFAF Endgames de HSR</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas por endgame · ' + EG.fuente + " · " + EG.fecha + "</p>";
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
