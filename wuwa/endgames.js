// Endgames WuWa — Torre de la Adversidad + Whimpering Wastes (equipos de Prydwen)
// + Endstate Matrix (recomendacion por buffs del ciclo; no hay leaderboard de equipos).
// m: [nombre, icono]
const EG = {
  fecha: "9-nov-2026",
  fuente: "Prydwen (ToA + Whimpering Wastes) · recomendacion Endstate segun buffs del ciclo",
  css: { av: "https://cdn.prydwen.gg/images/" },
  endgames: [
    {
      id: "toa",
      nombre: "Torre de la Adversidad (Tower of Adversity)",
      tag: "pisos",
      desc: "El endgame principal de WuWa: zonas Estable/Experimental permanentes y Zona Peligrosa rotativa (cada ~28 dias, reset de recompensas). Cada personaje gasta Vigor por piso, asi que necesitas 3-4 cores distintos. Conviene variar el DPS por bloque porque penaliza reusar. El top T0 actual: Hiyuki Hypercarry.",
      teams: [
        { tier: "T0", nombre: "Hiyuki Hypercarry", m: [["Hiyuki", "ww/characters/hiyuki_sm.webp"], ["Lucilla", "ww/characters/47_icon.webp"], ["Lynae", "ww/characters/48_icon.webp"], ["Suisui", "wuthering-waves/characters/suisui_icon.webp"]] },
        { tier: "T0", nombre: "Hsin Unison", m: [["Hsin", "wuthering-waves/characters/hsin_icon.webp"], ["Suoming", "wuthering-waves/characters/suoming_icon.webp"], ["The Shorekeeper", "ww/characters/icon_keeper.webp"], ["Verina", "ww/characters/verina_icon.webp"]] },
        { tier: "T0", nombre: "Jingran Hypercarry", m: [["Jingran", "wuthering-waves/characters/jingran_icon.webp"], ["Iuno", "ww/characters/ioun_icon.webp"], ["Mortefi", "ww/characters/mortefi_icon.webp"], ["The Shorekeeper", "ww/characters/icon_keeper.webp"]] },
        { tier: "T0", nombre: "Qingxiao Hypercarry", m: [["Qingxiao", "wuthering-waves/characters/qingxiao_icon.webp"], ["Denia", "ww/characters/denia_sm.webp"], ["Lynae", "ww/characters/48_icon.webp"], ["Mornye", "ww/characters/46_icon.webp"]] },
        { tier: "T0", nombre: "Xuanling Hypercarry", m: [["Yangyang Xuanling", "wuthering-waves/characters/yangyang-xuanling_icon.webp"], ["Chisa", "ww/characters/chisa_icon.webp"], ["Rebecca", "ww/characters/rebecca_icon.webp"], ["Phrolova", "ww/characters/phr_icon.webp"]] }
      ]
    },
    {
      id: "whimpering",
      nombre: "Whimpering Wastes (Páramos de Rinascita)",
      tag: "2 equipos",
      desc: "El endgame de Rinascita (desde 2.1): 12 etapas, cada una con DOS equipos separados y puntuacion por velocidad, mas el sistema de Tokens como capa de buffs. Mide profundidad de inversion, no amplitud: un solo equipo tope no basta. Sin Vigor, puedes reintentar sin limite. T0 actual: Hiyuki, Hsin, Phrolova Echo y Sigrika.",
      teams: [
        { tier: "T0", nombre: "Hiyuki Hypercarry", m: [["Hiyuki", "ww/characters/hiyuki_sm.webp"], ["Lucilla", "ww/characters/47_icon.webp"], ["Lynae", "ww/characters/48_icon.webp"], ["Suisui", "wuthering-waves/characters/suisui_icon.webp"]] },
        { tier: "T0", nombre: "Hsin Unison", m: [["Hsin", "wuthering-waves/characters/hsin_icon.webp"], ["Suoming", "wuthering-waves/characters/suoming_icon.webp"], ["The Shorekeeper", "ww/characters/icon_keeper.webp"], ["Verina", "ww/characters/verina_icon.webp"]] },
        { tier: "T0", nombre: "Phrolova Echo", m: [["Phrolova", "ww/characters/phr_icon.webp"], ["Lucilla", "ww/characters/47_icon.webp"], ["Cantarella", "ww/characters/icon_canta.webp"], ["Sigrika", "ww/characters/44_icon.webp"]] },
        { tier: "T0", nombre: "Sigrika Hypercarry", m: [["Sigrika", "ww/characters/44_icon.webp"], ["Qiuyuan", "ww/characters/qiu_icon.webp"], ["Lucilla", "ww/characters/47_icon.webp"], ["Ciaccona", "ww/characters/cia_icon.webp"]] },
        { tier: "T0.5", nombre: "Aemeath Fusion Burst", m: [["Aemeath", "ww/characters/math_icon.webp"], ["Denia", "ww/characters/denia_sm.webp"], ["Chisa", "ww/characters/chisa_icon.webp"], ["Suisui", "wuthering-waves/characters/suisui_icon.webp"]] }
      ]
    },
    {
      id: "endstate",
      nombre: "Endstate Matrix",
      tag: "ciclos",
      desc: "El tercer modo: jefes en cadena con varios equipos (la vida del jefe se traslada entre equipos), buffs de Power Circuit y resonadores demo ya construidos. Objetivo-tipico: 5.000 puntos por equipo, ciclo S2 'Adversity Vanguard' hasta 3.8. NO tiene leaderboard publico de equipos — recomendaciones segun los buffs del ciclo actual (Unison, Electro Flare, Echo Skill, escudos, Tune Break). Usa los demo resonators cuando falte gear.",
      teams: [
        { tier: "buff Unison", nombre: "Hsin Unison", m: [["Hsin", "wuthering-waves/characters/hsin_icon.webp"], ["Suoming", "wuthering-waves/characters/suoming_icon.webp"], ["The Shorekeeper", "ww/characters/icon_keeper.webp"], ["Verina", "ww/characters/verina_icon.webp"]] },
        { tier: "buff ATK basico", nombre: "Xuanling Hypercarry", m: [["Yangyang Xuanling", "wuthering-waves/characters/yangyang-xuanling_icon.webp"], ["Chisa", "ww/characters/chisa_icon.webp"], ["Rebecca", "ww/characters/rebecca_icon.webp"], ["Phrolova", "ww/characters/phr_icon.webp"]] },
        { tier: "buff Echo Skill", nombre: "Phrolova Echo", m: [["Phrolova", "ww/characters/phr_icon.webp"], ["Lucilla", "ww/characters/47_icon.webp"], ["Cantarella", "ww/characters/icon_canta.webp"], ["Sigrika", "ww/characters/44_icon.webp"]] },
        { tier: "buff escudo", nombre: "Hiyuki Hypercarry", m: [["Hiyuki", "ww/characters/hiyuki_sm.webp"], ["Lucilla", "ww/characters/47_icon.webp"], ["Lynae", "ww/characters/48_icon.webp"], ["Suisui", "wuthering-waves/characters/suisui_icon.webp"]] },
        { tier: "buff electro", nombre: "Hsin Flare", m: [["Hsin", "wuthering-waves/characters/hsin_icon.webp"], ["Rover (Electro)", "ww/characters/rover_icon.webp"], ["Suisui", "wuthering-waves/characters/suisui_icon.webp"], ["Chisa", "ww/characters/chisa_icon.webp"]] }
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
  var h = '<h2>\uD83C\uDFAF Endgames de WuWa</h2><p style="color:#94a3b8">\u2B50 Mejor equipo + 4 alternativas · ' + EG.fuente + " · " + EG.fecha + "</p>";
  EG.endgames.forEach(function (e) {
    h += '<div style="margin-top:16px"><div style="margin-bottom:4px"><b style="font-size:16px">' + e.nombre + "</b> " +
      '<span style="' + chip + '">' + e.tag + "</span></div>" +
      '<p style="color:#a8b3cf;margin:4px 0 8px">' + e.desc + "</p>";
    e.teams.forEach(function (t, i) {
      var label = i === 0 ? "\u2B50 MEJOR EQUIPO" : "Alternativa " + i;
      h += '<div style="' + (i === 0 ? bestCard : card) + '"><span style="' + chip + '">' + label + "</span>" +
        (t.tier ? '<span style="' + chip + '">' + t.tier + "</span>" : "") +
        '<div style="margin:2px 0 4px;font-size:14px"><b style="color:#fbbf24">' + t.nombre + "</b></div>" +
        '<div>' + t.m.map(memb).join("") + "</div></div>";
    });
    h += "</div>";
  });
  el.innerHTML = h;
})();
