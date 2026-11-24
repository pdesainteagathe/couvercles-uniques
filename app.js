"use strict";

/* ---------- Configuration ---------- */
// Projet Supabase qui reçoit les réponses (voir supabase.sql). Vides : les réponses
// restent dans le navigateur du visiteur et ne sont collectées nulle part.
// La clé publique (« publishable » ou « anon ») est faite pour être visible dans une page web.
const SUPABASE_URL = "";
const SUPABASE_KEY = "";
// Les résultats ne s'affichent qu'à partir de ce nombre de réponses.
const MIN_RESULTS = 30;

/* ---------- Textes ---------- */
const T = {
  fr: {
    title: "Un couvercle pour chaque boîte",
    brand: "Un couvercle pour chaque boîte",
    nav_problem: "Le problème", nav_idea: "L'idée", nav_height: "Hauteur libre", nav_survey: "Votre avis",
    eyebrow: "Proposition citoyenne européenne",
    hero_title: "Le bon couvercle, sur n'importe quelle boîte.",
    hero_lead: "Quelques formats communs pour les boîtes de conservation alimentaire en Europe, comme l'USB-C pour les chargeurs. Un couvercle perdu ne condamnerait plus sa boîte.",
    cta_survey: "Répondre au questionnaire (1 min)", cta_idea: "Voir l'idée",
    tab_today: "Aujourd'hui", tab_tomorrow: "Avec des formats communs",
    replay: "Rejouer",
    a1: "Une boîte, trois couvercles.", a2: "Trop petit.", a3: "Trop grand.", a4: "Presque. Il ne clipse pas.",
    a5: "La boîte part à la poubelle, en parfait état.",
    b1: "Trois boîtes du même format : trois hauteurs, trois matériaux.", b2: "Un couvercle de ce format les ferme toutes.",
    b3: "Et les couvercles s'échangent.",
    b_glass: "verre", b_plastic: "plastique", b_steel: "inox",
    pb_title: "Le tiroir à couvercles",
    pb_p1: "Chaque marque a ses propres dimensions, et souvent chaque gamme d'une même marque. Un couvercle perdu, cassé ou déformé au lave-vaisselle rend sa boîte presque inutile.",
    pb_p2: "La boîte finit à la poubelle en bon état, et on rachète un lot complet. Les boîtes de conservation servent justement à éviter les emballages jetables : chaque boîte jetée pour un couvercle va contre ce but.",
    idea_title: "Trois ou quatre formats communs",
    idea_p1: "Un format est défini par deux choses : les dimensions du bord, vu de dessus, et le profil qui reçoit le couvercle. Un couvercle d'un format ferme toutes les boîtes de ce format, de toute marque et de tout matériau : plastique, verre, inox.",
    idea_p2: "Les fabricants gardent la main sur la hauteur, les matériaux, les couleurs, le système de fermeture et le prix.",
    idea_ikea: "C'est faisable : IKEA ferme déjà ses boîtes de 1 litre en plastique et en verre avec le même couvercle.", idea_ikea_src: "Voir le produit",
    idea_note: "Proposition de départ, ouverte à discussion. Les dimensions reprennent celles du Gastronorm, utilisé dans les cuisines professionnelles depuis 1964 : elles se combinent sur un plateau sans place perdue.",
    round_tbd: "ronde, diamètre à définir",
    tray_caption: "plateau de 53 × 32,5 cm, sans place perdue",
    h_title: "La hauteur reste libre",
    h_p1: "Un format fixe le bord. La boîte peut être basse pour une portion, ou haute pour une soupe. Le même couvercle ferme les deux.",
    h_label: "Hauteur :", h_vol: "Contenance",
    h_note: "Calcul indicatif : parois de 6 mm et fond de 8 mm supposés.",
    pr_title: "Ça a déjà marché",
    pr_usbc: "Depuis le 28 décembre 2024, les téléphones neufs vendus dans l'Union européenne se rechargent par un port USB-C. La Commission estimait à 11 000 tonnes par an les déchets de chargeurs jetés ou inutilisés.",
    pr_usbc_src: "Directive (UE) 2022/2380", pr_usbc_src2: "Commission européenne, 2021",
    pr_gn: "Créé en Suisse en 1964, norme européenne EN 631 depuis 1993. Dans les cuisines professionnelles, n'importe quel bac va dans n'importe quel four, chariot ou réfrigérateur.",
    pr_gn_src: "Histoire du Gastronorm",
    pr_how_t: "L'outil existe",
    pr_how: "Le règlement européen sur l'écoconception permet déjà à la Commission d'imposer des composants standard, par acte délégué. Une loi française seule entraverait la libre circulation des marchandises : la décision se prend à Bruxelles.",
    pr_how_src: "Règlement (UE) 2024/1781",
    sv_title: "Votre placard en chiffres",
    sv_intro: "Anonyme, une minute. Personne n'a encore compté les boîtes jetées faute de couvercle : vos réponses serviront à chiffrer le problème auprès des élus.",
    sv_submit: "Envoyer mes réponses",
    sv_privacy: "Aucune donnée personnelle : ni nom, ni adresse email, ni cookie de suivi.",
    sv_missing: "Merci de répondre aux questions en rouge.",
    sv_error: "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.",
    res_title: "Les réponses jusqu'ici", res_n: "{n} réponses",
    sv_thanks_t: "Merci.",
    sv_thanks: "Partagez la page pour que d'autres répondent : plus il y a de réponses, plus le chiffre pèse.",
    share: "Partager la page", copied: "Lien copié",
    st_title: "Où en est la proposition",
    st_1_d: "Novembre 2026",
    st_1: "Projet d'acte délégué et proposition de résolution européenne rédigés, puis envoyés à des parlementaires français et européens et à des associations.",
    st_2_d: "Prochaine étape",
    st_2: "Trouver un député ou une sénatrice pour déposer la résolution, et un eurodéputé pour interroger la Commission.",
    st_docs: "Textes complets :", doc_act: "projet d'acte délégué", doc_pre: "proposition de résolution européenne", doc_act_en: "draft delegated act (EN)",
    foot: "Proposition citoyenne portée par Pierre de Sainte Agathe, à titre personnel. Code source ouvert.",
    litre: "l", cm: "cm", dk: "Je ne sais pas",
    q: [
      { id: "owned", text: "Combien de boîtes de conservation avez-vous chez vous, à peu près ?", opts: ["0 à 5", "6 à 10", "11 à 20", "21 à 40", "Plus de 40"] },
      { id: "nolid", text: "Combien de vos boîtes n'ont aucun couvercle qui leur va, en ce moment ?", opts: ["0", "1 ou 2", "3 à 5", "6 à 10", "Plus de 10"] },
      { id: "orphan", text: "Combien de couvercles sans boîte qui leur va ?", opts: ["0", "1 ou 2", "3 à 5", "6 à 10", "Plus de 10"] },
      { id: "thrown", text: "Combien de boîtes avez-vous jetées ces 12 derniers mois faute de couvercle ?", opts: ["0", "1 ou 2", "3 à 5", "6 à 10", "Plus de 10", "Je ne sais pas"] },
      { id: "shape", text: "Quelle forme préférez-vous ?", opts: ["Rectangulaire", "Carrée", "Ronde", "Peu importe"], shapes: true },
      { id: "support", text: "Êtes-vous favorable à des formats communs ?", opts: ["Oui", "Plutôt oui", "Plutôt non", "Non"] },
      { id: "where", text: "Où habitez-vous ?", opts: ["France", "Autre pays de l'UE", "Hors de l'UE"] }
    ]
  },
  en: {
    title: "One lid for every box",
    brand: "One lid for every box",
    nav_problem: "The problem", nav_idea: "The idea", nav_height: "Free height", nav_survey: "Your view",
    eyebrow: "A citizen proposal for Europe",
    hero_title: "The right lid, on any box.",
    hero_lead: "A few common formats for food storage containers in Europe, like USB-C for chargers. A lost lid would no longer doom its box.",
    cta_survey: "Take the survey (1 min)", cta_idea: "See the idea",
    tab_today: "Today", tab_tomorrow: "With common formats",
    replay: "Replay",
    a1: "One box, three lids.", a2: "Too small.", a3: "Too big.", a4: "Almost. It won't click.",
    a5: "Into the bin it goes, in perfect condition.",
    b1: "Three boxes of the same format: three heights, three materials.", b2: "One lid of that format closes them all.",
    b3: "And the lids swap freely.",
    b_glass: "glass", b_plastic: "plastic", b_steel: "steel",
    pb_title: "The lid drawer",
    pb_p1: "Every brand has its own dimensions, often every range within a brand. A lid that is lost, broken or warped in the dishwasher leaves its box almost useless.",
    pb_p2: "The box ends up in the bin in good condition, and a whole new set gets bought. Food storage boxes exist to avoid single-use packaging: every box thrown out for want of a lid works against that purpose.",
    idea_title: "Three or four common formats",
    idea_p1: "A format is defined by two things: the dimensions of the rim, seen from above, and the profile that takes the lid. A lid of one format closes every box of that format, whatever the brand or the material: plastic, glass, steel.",
    idea_p2: "Manufacturers keep control of height, materials, colours, closing system and price.",
    idea_ikea: "It can be done: IKEA already closes its 1-litre plastic and glass boxes with the same lid.", idea_ikea_src: "See the product",
    idea_note: "Starting proposal, open for discussion. The dimensions follow Gastronorm, used in professional kitchens since 1964: they combine on a tray with no wasted space.",
    round_tbd: "round, diameter to be defined",
    tray_caption: "53 × 32.5 cm tray, no wasted space",
    h_title: "Height stays free",
    h_p1: "A format sets the rim. The box can be shallow for a single portion or deep for soup. The same lid closes both.",
    h_label: "Height:", h_vol: "Capacity",
    h_note: "Rough estimate: 6 mm walls and an 8 mm base assumed.",
    pr_title: "It has worked before",
    pr_usbc: "Since 28 December 2024, new phones sold in the European Union charge through a USB-C port. The Commission estimated discarded and unused chargers at 11,000 tonnes of waste a year.",
    pr_usbc_src: "Directive (EU) 2022/2380", pr_usbc_src2: "European Commission, 2021",
    pr_gn: "Created in Switzerland in 1964, European standard EN 631 since 1993. In professional kitchens, any tray fits any oven, trolley or fridge.",
    pr_gn_src: "History of Gastronorm",
    pr_how_t: "The tool exists",
    pr_how: "The EU Ecodesign Regulation already lets the Commission require standard components through a delegated act. A single country acting alone would hinder the free movement of goods: the decision belongs in Brussels.",
    pr_how_src: "Regulation (EU) 2024/1781",
    sv_title: "Your cupboard in numbers",
    sv_intro: "Anonymous, one minute. Nobody has counted the boxes thrown away for want of a lid yet: your answers will put a number on the problem for lawmakers.",
    sv_submit: "Send my answers",
    sv_privacy: "No personal data: no name, no email address, no tracking cookie.",
    sv_missing: "Please answer the questions shown in red.",
    sv_error: "Sending failed. Check your connection and try again.",
    res_title: "Answers so far", res_n: "{n} answers",
    sv_thanks_t: "Thank you.",
    sv_thanks: "Share the page so others answer too: the more answers, the more the figure counts.",
    share: "Share the page", copied: "Link copied",
    st_title: "Where the proposal stands",
    st_1_d: "November 2026",
    st_1: "Draft delegated act and European resolution written, then sent to French and European lawmakers and to NGOs.",
    st_2_d: "Next step",
    st_2: "Find a French MP or senator to table the resolution, and an MEP to question the Commission.",
    st_docs: "Full texts:", doc_act: "draft delegated act (FR)", doc_pre: "European resolution (FR)", doc_act_en: "draft delegated act (EN)",
    foot: "A citizen proposal by Pierre de Sainte Agathe, in a personal capacity. Open source.",
    litre: "L", cm: "cm", dk: "Don't know",
    q: [
      { id: "owned", text: "Roughly how many food storage boxes do you have at home?", opts: ["0 to 5", "6 to 10", "11 to 20", "21 to 40", "More than 40"] },
      { id: "nolid", text: "How many of your boxes have no lid that fits, right now?", opts: ["0", "1 or 2", "3 to 5", "6 to 10", "More than 10"] },
      { id: "orphan", text: "How many lids have no box that fits?", opts: ["0", "1 or 2", "3 to 5", "6 to 10", "More than 10"] },
      { id: "thrown", text: "How many boxes did you throw away in the last 12 months for want of a lid?", opts: ["0", "1 or 2", "3 to 5", "6 to 10", "More than 10", "Don't know"] },
      { id: "shape", text: "Which shape do you prefer?", opts: ["Rectangular", "Square", "Round", "No preference"], shapes: true },
      { id: "support", text: "Do you support common formats?", opts: ["Yes", "Rather yes", "Rather no", "No"] },
      { id: "where", text: "Where do you live?", opts: ["France", "Another EU country", "Outside the EU"] }
    ]
  }
};

// Chiffres sourcés affichés dans la section « Le problème ». Chaque entrée porte sa source.
const FIGURES = [
  { num: { fr: "≈ 320 millions", en: "≈ 320 million" }, wide: true,
    text: { fr: "de boîtes de conservation dans les foyers français. Ordre de grandeur : environ 10 boîtes par foyer selon une responsable de Pyrex (2021), sans méthode publiée, multipliées par 32,4 millions de ménages (Eurostat). Le questionnaire ci-dessous servira à le vérifier.",
            en: "food storage boxes in French homes. Order of magnitude: about 10 boxes per household according to a Pyrex marketing manager (2021), with no published method, times 32.4 million households (Eurostat). The survey below will help check it." },
    src: { fr: "Offrir International (2021), Eurostat (2025)", en: "Offrir International (2021), Eurostat (2025)" },
    url: "https://www.offrir-international.com/article/conservation-un-marche-en-pleine-ebullition" },
  { num: { fr: "56 %", en: "56%" },
    text: { fr: "des Européens interrogés cessent aussitôt d'utiliser une boîte déformée ou qui ferme mal.",
            en: "of Europeans surveyed stop using a container at once when it is deformed or no longer fits well." },
    src: { fr: "BEUC 2023, enquête 2020 dans 11 pays (France non incluse)", en: "BEUC 2023, 2020 survey in 11 countries (France not included)" },
    url: "https://www.beuc.eu/sites/default/files/publications/BEUC-X-2023-042_What_consumers_say_about_safe_and_sustainable_food_packaging_Annex.pdf" },
  { num: { fr: "16 à 208", en: "16 to 208" },
    text: { fr: "utilisations nécessaires pour qu'une boîte réutilisable en plastique fasse mieux qu'une barquette jetable, selon l'indicateur. Jetée tôt, elle perd son avantage.",
            en: "uses needed for a reusable plastic box to beat a disposable tray, depending on the impact measured. Thrown away early, it loses its advantage." },
    src: { fr: "Gallego-Schmid et al., J. Cleaner Production, 2019", en: "Gallego-Schmid et al., J. Cleaner Production, 2019" },
    url: "https://doi.org/10.1016/j.jclepro.2018.11.220" },
  { num: { fr: "Bac jaune : non", en: "Not recycled" }, wide: true,
    text: { fr: "En France, une boîte alimentaire rigide ne va pas dans le bac de tri. Elle part aux ordures ménagères, puis à l'incinération ou à l'enfouissement.",
            en: "In France, a rigid food box does not go in the recycling bin. It goes with household waste, then to incineration or landfill." },
    src: { fr: "ADEME, Que faire de mes déchets (2026)", en: "ADEME, French environment agency (2026)" },
    url: "https://quefairedemesdechets.ademe.fr/categories/emballages/emballages-en-plastique/" }
];

/* ---------- Langue ---------- */
let lang = localStorage.getItem("lang") || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
const t = k => T[lang][k];

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderQuestions();
  renderFigures();
  updateHeight();
  renderResults();
  if (currentCaptionKey) caption(currentCaptionKey);
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang; localStorage.setItem("lang", lang); applyLang();
}));

/* ---------- Animation ---------- */
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);
const capEl = $("cap");
let currentCaptionKey = null;
let run = 0;
function caption(k) { currentCaptionKey = k; capEl.textContent = k ? t(k) : " "; }
const wait = ms => new Promise(r => setTimeout(r, ms));

function move(el, frames, dur, easing = "cubic-bezier(.45,.05,.3,1)") {
  const a = el.animate(frames, { duration: reduce ? 1 : dur, easing, fill: "forwards" });
  return a.finished.catch(() => {});
}
function resetAll(svg) { svg.querySelectorAll("g[id]").forEach(g => g.getAnimations().forEach(a => a.cancel())); }

// Position de repos des couvercles (centre) et position cible sur la boîte : (400, 198)
const lidRest = { "a-lidA": [110, 264], "a-lidB": [110, 292], "a-lidC": [110, 278] };
const off = (id, x, y) => `translate(${x - lidRest[id][0]}px, ${y - lidRest[id][1]}px)`;

async function sceneA(token) {
  const svg = $("scene-a"); resetAll(svg);
  const A = $("a-lidA"), B = $("a-lidB"), C = $("a-lidC"), box = $("a-box"), mark = $("a-mark"), binlid = $("a-binlid");
  const ok = () => token === run;
  const fail = async () => { await move(mark, [{ opacity: 0 }, { opacity: 1 }], 150); await wait(500); await move(mark, [{ opacity: 1 }, { opacity: 0 }], 200); };
  caption("a1"); await wait(1100); if (!ok()) return;

  // A : trop petit, tombe dans la boîte
  caption("a2");
  await move(A, [{ transform: "none" }, { transform: off("a-lidA", 400, 120) }], 700);
  await move(A, [{ transform: off("a-lidA", 400, 120) }, { transform: off("a-lidA", 400, 230) + " rotate(8deg)" }], 380, "cubic-bezier(.5,0,1,1)");
  if (!ok()) return; await fail();
  await move(A, [{ transform: off("a-lidA", 400, 230) + " rotate(8deg)" }, { transform: off("a-lidA", 400, 120) }, { transform: "none" }], 900);
  if (!ok()) return;

  // B : trop grand, glisse
  caption("a3");
  await move(B, [{ transform: "none" }, { transform: off("a-lidB", 400, 120) }], 700);
  await move(B, [{ transform: off("a-lidB", 400, 120) }, { transform: off("a-lidB", 400, 198) }], 320, "cubic-bezier(.5,0,1,1)");
  if (!ok()) return;
  await move(B, [{ transform: off("a-lidB", 400, 198) }, { transform: off("a-lidB", 470, 222) + " rotate(28deg)" }, { transform: off("a-lidB", 520, 290) + " rotate(4deg)" }], 600, "ease-in");
  await fail(); if (!ok()) return;
  await move(B, [{ transform: off("a-lidB", 520, 290) + " rotate(4deg)" }, { transform: "none" }], 800);
  if (!ok()) return;

  // C : bonne taille, ne clipse pas
  caption("a4");
  await move(C, [{ transform: "none" }, { transform: off("a-lidC", 400, 120) }], 700);
  await move(C, [{ transform: off("a-lidC", 400, 120) }, { transform: off("a-lidC", 400, 196) }], 320, "cubic-bezier(.5,0,1,1)");
  if (!ok()) return;
  await move(C, [{ transform: off("a-lidC", 400, 196) }, { transform: off("a-lidC", 405, 172) + " rotate(-12deg)" }, { transform: off("a-lidC", 398, 196) + " rotate(4deg)" }, { transform: off("a-lidC", 403, 180) + " rotate(-7deg)" }], 700, "ease-out");
  await fail(); if (!ok()) return;
  await move(C, [{ transform: off("a-lidC", 403, 180) + " rotate(-7deg)" }, { transform: "none" }], 800);
  if (!ok()) return;

  // la boîte part à la poubelle
  caption("a5");
  await move(binlid, [{ transform: "none" }, { transform: "rotate(-35deg)" }], 400);
  await move(box, [{ transform: "none" }, { transform: "translate(140px,-110px) rotate(18deg)" }, { transform: "translate(295px,-60px) rotate(38deg)" }, { transform: "translate(295px,30px) rotate(45deg) scale(.85)", opacity: 0 }], 1500, "ease-in-out");
  await move(binlid, [{ transform: "rotate(-35deg)" }, { transform: "none" }], 350);
}

const lidB = { "b-lid1": [200, 234], "b-lid2": [400, 194], "b-lid3": [600, 144] };
async function sceneB(token) {
  const svg = $("scene-b"); resetAll(svg);
  const ok = () => token === run;
  const L = ["b-lid1", "b-lid2", "b-lid3"].map($);
  const checks = $("b-checks");
  // couvercles au-dessus, hors champ
  L.forEach((l, i) => l.animate([{ transform: `translate(0, ${-lidB[l.id][1] - 30}px)` }], { duration: 1, fill: "forwards" }));
  checks.animate([{ opacity: 0 }], { duration: 1, fill: "forwards" });
  caption("b1"); await wait(1500); if (!ok()) return;
  caption("b2");
  for (const l of L) {
    const y0 = -lidB[l.id][1] - 30;
    move(l, [{ transform: `translate(0, ${y0}px)` }, { transform: "translate(0, 4px)", offset: .85 }, { transform: "translate(0,0)" }], 750, "cubic-bezier(.5,0,.7,1)");
    await wait(260);
  }
  await wait(700); if (!ok()) return;
  await move(checks, [{ opacity: 0 }, { opacity: 1 }], 300);
  await wait(1200); if (!ok()) return;
  await move(checks, [{ opacity: 1 }, { opacity: 0 }], 250);
  caption("b3");
  // échange : couvercle 1 sur la boîte 3, couvercle 3 sur la boîte 1
  const l1 = L[0], l3 = L[2];
  const dx = 400, dy = 144 - 234;
  move(l1, [{ transform: "none" }, { transform: `translate(0px, -120px)` }, { transform: `translate(${dx}px, ${dy - 80}px)` }, { transform: `translate(${dx}px, ${dy}px)` }], 1600);
  await move(l3, [{ transform: "none" }, { transform: `translate(0px, -60px)` }, { transform: `translate(${-dx}px, ${-dy - 140}px)` }, { transform: `translate(${-dx}px, ${-dy}px)` }], 1600);
  if (!ok()) return;
  await move(checks, [{ opacity: 0 }, { opacity: 1 }], 300);
}

let scene = "a";
function play() {
  const token = ++run;
  const both = ["scene-a", "scene-b"].map($);
  both.forEach(resetAll);
  if (scene === "a") sceneA(token); else sceneB(token);
}
document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => {
  scene = b.dataset.scene;
  document.querySelectorAll(".tabs button").forEach(x => x.setAttribute("aria-selected", String(x === b)));
  $("scene-a").toggleAttribute("hidden", scene !== "a"); $("scene-b").toggleAttribute("hidden", scene !== "b");
  play();
}));
$("replay").addEventListener("click", play);
// Enchaîne « Aujourd'hui » puis « Avec des formats communs » une fois, à la première apparition.
let started = false;
new IntersectionObserver((es, obs) => {
  if (es[0].isIntersecting && !started) {
    started = true; obs.disconnect();
    (async () => {
      const token = ++run; await sceneA(token);
      if (token !== run) return; await wait(1800); if (token !== run) return;
      document.querySelector('.tabs button[data-scene="b"]').click();
    })();
  }
}, { threshold: .4 }).observe($("stage"));

/* ---------- Chiffres ---------- */
function renderFigures() {
  const box = $("figures"); box.textContent = "";
  for (const f of FIGURES) {
    const d = document.createElement("div"); d.className = "fig" + (f.wide ? " wide" : "");
    const n = document.createElement("span"); n.className = "num"; n.textContent = f.num[lang];
    const p = document.createElement("p"); p.textContent = f.text[lang];
    const s = document.createElement("small"); const a = document.createElement("a");
    a.href = f.url; a.textContent = f.src[lang]; a.rel = "noopener"; s.append(a);
    d.append(n, p, s); box.append(d);
  }
}

/* ---------- Hauteur libre ---------- */
const FMTS = [[176, 108], [176, 162], [265, 162]];
let fmt = 0;
function updateHeight() {
  const h = +$("hslider").value;
  const [L, W] = FMTS[fmt];
  const litres = ((L - 12) * (W - 12) * (h - 8)) / 1e6;
  const nf = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  $("hval").textContent = `${nf.format(h / 10)} ${t("cm")}`;
  $("vol").textContent = `${nf.format(litres)} ${t("litre")}`;
  // perspective cavalière : la profondeur W part en diagonale, 1 mm = 1 unité en façade
  const k = 0.55, dx = W * k * Math.cos(Math.PI / 6), dy = -W * k * Math.sin(Math.PI / 6);
  const floor = 290, x = (420 - L - dx - 60) / 2, top = floor - h, lt = 7, o = 3, sk = 10; // sk : rebord descendant qui recouvre le haut de la boîte
  const P = pts => pts.map(p => p.join(",")).join(" ");
  $("hdraw").innerHTML = `
    <polygon class="box-stroke" fill="#eaa06c" points="${P([[x + L, top], [x + L + dx, top + dy], [x + L + dx, floor + dy], [x + L, floor]])}"/>
    <rect class="box-stroke" fill="url(#gPlastic)" x="${x}" y="${top}" width="${L}" height="${h}" rx="4"/>
    <rect class="box-stroke" fill="#f2a46e" x="${x - 1}" y="${top}" width="${L + 2}" height="8" rx="2"/>
    <g class="lid-std">
      <polygon points="${P([[x - o, top - lt], [x + L + o, top - lt], [x + L + o + dx, top - lt + dy], [x - o + dx, top - lt + dy]])}" class="lid-top-face"/>
      <polygon points="${P([[x + L + o, top - lt], [x + L + o + dx, top - lt + dy], [x + L + o + dx, top + sk + dy], [x + L + o, top + sk]])}" class="lid-side"/>
      <rect x="${x - o}" y="${top - lt}" width="${L + 2 * o}" height="${lt + sk}" rx="3"/>
      <rect x="${x - o}" y="${top}" width="${L + 2 * o}" height="${sk}" rx="2" class="skirt"/>
    </g>
    <text class="hdim" x="${x + L / 2}" y="${floor + 24}">${L} mm</text>
    <text class="hdim start" x="${x + L + dx + 6}" y="${floor + dy / 2 + 4}">${W} mm</text>
    <text class="hdim strong" x="${x + L / 2}" y="${top + sk + (h - sk) / 2 + 5}">${h} mm</text>`;
}
$("hslider").addEventListener("input", updateHeight);
document.querySelectorAll(".fmt-pick button").forEach(b => b.addEventListener("click", () => {
  fmt = +b.dataset.fmt;
  document.querySelectorAll(".fmt-pick button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  updateHeight();
}));

/* ---------- Questionnaire ---------- */
const answers = JSON.parse(localStorage.getItem("survey_draft") || "{}");
const SHAPE_ICONS = [
  '<svg class="shape-ico" viewBox="0 0 20 20"><rect x="2" y="5" width="16" height="10" rx="2" fill="currentColor"/></svg>',
  '<svg class="shape-ico" viewBox="0 0 20 20"><rect x="4" y="4" width="12" height="12" rx="2" fill="currentColor"/></svg>',
  '<svg class="shape-ico" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7" fill="currentColor"/></svg>',
  ""
];
function renderQuestions() {
  const host = $("questions"); host.textContent = "";
  for (const q of T[lang].q) {
    const fs = document.createElement("fieldset"); fs.className = "q"; fs.dataset.q = q.id;
    const lg = document.createElement("legend"); lg.textContent = q.text; fs.append(lg);
    const opts = document.createElement("div"); opts.className = "opts";
    q.opts.forEach((o, i) => {
      const lab = document.createElement("label"); lab.className = "opt";
      const inp = document.createElement("input"); inp.type = "radio"; inp.name = q.id; inp.value = String(i);
      if (answers[q.id] === i) inp.checked = true;
      inp.addEventListener("change", () => { answers[q.id] = i; localStorage.setItem("survey_draft", JSON.stringify(answers)); fs.classList.remove("missing"); });
      const sp = document.createElement("span");
      if (q.shapes && SHAPE_ICONS[i]) sp.innerHTML = SHAPE_ICONS[i];
      sp.append(document.createTextNode(o));
      lab.append(inp, sp); opts.append(lab);
    });
    fs.append(opts); host.append(fs);
  }
}
function showThanks() { $("survey").hidden = true; $("thanks").hidden = false; loadResults(); }
if (localStorage.getItem("survey_done")) showThanks();

function sbHeaders() {
  const h = { "Content-Type": "application/json", apikey: SUPABASE_KEY };
  if (SUPABASE_KEY.startsWith("eyJ")) h.Authorization = "Bearer " + SUPABASE_KEY; // ancienne clé « anon » (JWT)
  return h;
}

$("survey").addEventListener("submit", async e => {
  e.preventDefault();
  const missing = T[lang].q.filter(q => answers[q.id] === undefined);
  document.querySelectorAll(".q").forEach(fs => fs.classList.toggle("missing", missing.some(q => q.id === fs.dataset.q)));
  $("sv-error").hidden = true;
  if (missing.length) { document.querySelector(".q.missing")?.scrollIntoView({ block: "center" }); return; }
  // Les réponses sont codées par indice d'option, identiques en français et en anglais.
  const row = { lang, owned: answers.owned, nolid: answers.nolid, orphan: answers.orphan, thrown: answers.thrown,
                shape: answers.shape, support: answers.support, country: answers.where };
  if (SUPABASE_URL) {
    const btn = e.submitter; if (btn) btn.disabled = true;
    try {
      const r = await fetch(SUPABASE_URL + "/rest/v1/survey_responses", {
        method: "POST", headers: { ...sbHeaders(), Prefer: "return=minimal" }, body: JSON.stringify(row) });
      if (!r.ok) throw new Error("HTTP " + r.status);
    } catch (err) {
      if (btn) btn.disabled = false;
      $("sv-error").hidden = false;
      return;
    }
  }
  localStorage.setItem("survey_done", "1");
  showThanks();
});

let stats = null;
async function loadResults() {
  if (!SUPABASE_URL) return;
  try {
    const r = await fetch(SUPABASE_URL + "/rest/v1/rpc/survey_stats", { method: "POST", headers: sbHeaders(), body: "{}" });
    if (r.ok) { stats = await r.json(); renderResults(); }
  } catch (e) { /* résultats indisponibles : rien à afficher */ }
}
function renderResults() {
  const box = $("results");
  if (!stats || stats.n < MIN_RESULTS) { box.hidden = true; return; }
  box.hidden = false;
  $("results-n").textContent = t("res_n").replace("{n}", new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB").format(stats.n));
  const host = $("results-bars"); host.textContent = "";
  const keys = { nolid: "nolid", thrown: "thrown", shape: "shape", support: "support" };
  for (const q of T[lang].q.filter(q => keys[q.id])) {
    const counts = stats[q.id] || {};
    const block = document.createElement("div"); block.className = "res-q";
    const h = document.createElement("h4"); h.textContent = q.text; block.append(h);
    q.opts.forEach((o, i) => {
      const pct = Math.round(100 * (counts[i] || 0) / stats.n);
      const row = document.createElement("div"); row.className = "res-row";
      const lab = document.createElement("span"); lab.className = "res-lab"; lab.textContent = o;
      const bar = document.createElement("span"); bar.className = "res-bar";
      const fill = document.createElement("span"); fill.style.width = pct + "%"; bar.append(fill);
      const val = document.createElement("span"); val.className = "res-val"; val.textContent = pct + " %";
      row.append(lab, bar, val); block.append(row);
    });
    host.append(block);
  }
}

$("share").addEventListener("click", async () => {
  const url = location.href.split("#")[0];
  if (navigator.share) { try { await navigator.share({ title: t("title"), url }); return; } catch (e) { return; } }
  try { await navigator.clipboard.writeText(url); $("share").textContent = t("copied"); } catch (e) {}
});

applyLang();
