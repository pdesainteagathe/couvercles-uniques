"use strict";

/* ---------- Configuration ---------- */
// Projet Supabase qui reçoit les réponses (voir supabase.sql). Vides : les réponses
// restent dans le navigateur du visiteur et ne sont collectées nulle part.
// La clé publique (« publishable » ou « anon ») est faite pour être visible dans une page web.
const SUPABASE_URL = "https://luwvrprsgnzywyzsweqv.supabase.co";
const SUPABASE_KEY = "sb_publishable_gkZrpFHZ5rHatHc56LPn3Q_FGYnHQAh";
// Les résultats ne s'affichent qu'à partir de ce nombre de réponses.
const MIN_RESULTS = 5;

/* ---------- Textes ---------- */
const T = {
  fr: {
    title: "Les couvercles uniques",
    brand: "Les couvercles uniques",
    tx_title: "Les textes", tx_intro: "Deux textes, mis à jour le 24 novembre 2026. Les valeurs entre crochets restent ouvertes à la discussion.",
    tx_act_h: "Projet d'acte délégué", tx_act_p: "Le règlement que la Commission européenne pourrait adopter dans le cadre du règlement écoconception (ESPR)\u00a0: trois formats communs, hauteur libre, tous matériaux.",
    tx_pre_h: "Proposition de résolution européenne", tx_pre_p: "Le texte qu'un député ou une sénatrice peut déposer pour demander au Gouvernement de porter le projet à Bruxelles.",
    tx_fr: "Lire en français (PDF)", tx_en: "Read in English (PDF)",
    cl_title: "Plusieurs systèmes de fermeture",
    cl_lead: "La norme fixe le bord de la boîte : ses dimensions et une lèvre qui dépasse vers l'extérieur. Chaque fabricant accroche son couvercle à cette lèvre avec le système de son choix, et choisit son épaisseur, sa couleur et sa matière. Tous ces couvercles ferment toutes les boîtes du même format.",
    cl_press_h: "À pression", cl_press: "Un couvercle en plastique souple épouse le bord et passe sous la lèvre d'une simple pression.",
    cl_clips_h: "À clapets", cl_clips: "Quatre clapets à charnière se rabattent et accrochent la lèvre. Ils serrent un joint en silicone posé sur le bord.",
    cl_glass_h: "En verre", cl_glass: "Une plaque de verre posée sur le bord. Une attache en silicone souple tient le verre et passe sous la lèvre. Pour le four, le frigo ou la table.",
    cl_note: "Coupe du bord de la boîte. Le projet d'acte délégué laisse libre le système de verrouillage, tant que le couvercle ferme toute boîte du même format (article 3, paragraphe 5). La norme harmonisée devra dessiner la lèvre pour que ces systèmes y trouvent tous prise (article 6).",
    nav_problem: "Le problème", nav_texts: "Les textes", nav_idea: "L'idée", nav_height: "Tous les volumes", nav_survey: "Votre avis",
    eyebrow: "Proposition citoyenne européenne",
    hero_title: "Le bon couvercle, sur n'importe quelle boîte.",
    hero_lead: "Quelques formats communs pour les boîtes de conservation alimentaire en Europe, comme l'USB-C pour les chargeurs. Si un couvercle se perd, n'importe quel couvercle du même format le remplace. La boîte reste en service : moins de boîtes jetées, moins de plastique produit.",
    cta_survey: "Répondre au questionnaire (1 min)", cta_idea: "Voir l'idée",
    tab_today: "Aujourd'hui", tab_tomorrow: "Avec des formats communs",
    replay: "Rejouer",
    a1: "Une boîte, trois couvercles.", a2: "Trop petit.", a3: "Rond, sur une boîte rectangulaire.", a4: "Trop grand.",
    a5: "Une boîte de plus sans couvercle. Le tas grandit.",
    b1: "Trois boîtes du même format : trois hauteurs, trois matériaux.", b2: "Un couvercle de ce format les ferme toutes.",
    b3: "Et les couvercles s'échangent.",
    b_glass: "verre", b_plastic: "plastique", b_steel: "inox",
    pb_title: "Le tiroir à couvercles",
    pb_p1: "Chaque marque a ses propres dimensions, et souvent chaque gamme d'une même marque. Un couvercle perdu, cassé ou déformé au lave-vaisselle rend sa boîte presque inutile.",
    pb_p2: "La boîte finit souvent à la poubelle en bon état, et on rachète un lot complet.",
    idea_title: "Trois formats communs",
    idea_p1: "Un format est défini par deux choses : les dimensions du bord, vu de dessus, et le profil qui reçoit le couvercle. Un couvercle d'un format ferme toutes les boîtes de ce format, de toute marque et de tout matériau : plastique, verre, inox.",
    idea_p2: "La hauteur, les matériaux, les couleurs, le système de fermeture et le prix restent au choix des fabricants.",
    idea_scope: "Seules les boîtes de conservation des aliments sont concernées. Les bocaux à couvercle vissé, les bouteilles, les gourdes et les emballages vendus pleins restent hors du champ.",
    idea_ikea: "IKEA ferme déjà ses boîtes de 1 litre en plastique et en verre avec le même couvercle.", idea_ikea_src: "Voir le produit",
    idea_note: "Proposition de départ, ouverte à discussion. UE-3 reprend un format Gastronorm, utilisé dans les cuisines professionnelles depuis 1964. UE-2 est un carré de même largeur. UE-1, pour les sauces et les portions, est le quart de UE-2. Les formats carrés se ferment dans n'importe quel sens.",
    tray_caption: "plateau Gastronorm de 53 × 32,5 cm",
    h_title: "Trois couvercles, tous les volumes",
    h_p1: "Chaque couvercle a une taille fixe. La hauteur de la boîte est libre. Une boîte basse pour une portion et une boîte haute pour une soupe prennent le même couvercle.",
    h_step1: "1. Choisissez un couvercle", h_step2: "2. Réglez la hauteur de la boîte", h_range: "{f} : de {a} à {b}",
    dim_len: "longueur", dim_wid: "largeur", dim_h: "hauteur libre", h_label: "Hauteur :", h_vol: "Contenance",
    h_note: "Calcul indicatif : parois de 6 mm et fond de 8 mm supposés.",
    pr_title: "Des précédents",
    pr_usbc: "Depuis le 28 décembre 2024, les téléphones neufs vendus dans l'Union européenne se rechargent par un port USB-C. La Commission estimait à 11\u00a0000 tonnes par an les déchets de chargeurs jetés ou inutilisés.",
    pr_usbc_src: "Directive (UE) 2022/2380", pr_usbc_src2: "Commission européenne, 2021",
    pr_gn: "Créé en Suisse en 1964, norme européenne EN 631 depuis 1993. Dans les cuisines professionnelles, n'importe quel bac va dans n'importe quel four, chariot ou réfrigérateur.",
    pr_gn_src: "Histoire du Gastronorm",
    pr_how_t: "Le cadre juridique",
    pr_how: "Le règlement européen sur l'écoconception permet déjà à la Commission d'imposer des composants standard, par acte délégué. Une loi française seule entraverait la libre circulation des marchandises. La décision relève donc de l'Union.",
    pr_how_src: "Règlement (UE) 2024/1781",
    sv_title: "Le questionnaire",
    sv_intro: "Anonyme, une minute. Nous n'avons trouvé aucune mesure du nombre de boîtes jetées faute de couvercle. Vos réponses donneront un premier chiffre à présenter aux élus.",
    sv_submit: "Envoyer mes réponses",
    sv_privacy: "Aucune donnée personnelle : ni nom, ni adresse email, ni cookie de suivi.",
    sv_missing: "Merci de répondre aux questions en rouge.",
    sv_error: "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.",
    res_title: "Les réponses jusqu'ici", res_n: "{n} réponses",
    sv_thanks_t: "Merci.",
    sv_thanks: "Partagez la page pour que d'autres répondent aussi.",
    share: "Partager la page", copied: "Lien copié",
    st_title: "Où en est la proposition",
    st_1_d: "Novembre 2026",
    st_1: "Projet d'acte délégué et proposition de résolution européenne rédigés, puis envoyés à des parlementaires français et européens et à des associations.",
    st_2_d: "Prochaine étape",
    st_2: "Trouver un député ou une sénatrice pour déposer la résolution, et un eurodéputé pour interroger la Commission.",
    st_docs: "Les textes complets sont plus haut, dans la section « Les textes ».", doc_act: "projet d'acte délégué", doc_pre: "proposition de résolution européenne", doc_act_en: "draft delegated act (EN)",
    foot: "Proposition portée par le Collectif pour le couvercle unique. Code sous licence MIT, textes sous licence CC BY 4.0.",
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
    title: "Common lids",
    brand: "Common lids",
    tx_title: "The texts", tx_intro: "Two texts, updated on 24 November 2026. Values in square brackets remain open for discussion.",
    tx_act_h: "Draft delegated act", tx_act_p: "The regulation the European Commission could adopt under the Ecodesign for Sustainable Products Regulation (ESPR): three common formats, free height, all materials.",
    tx_pre_h: "Draft European resolution", tx_pre_p: "The text a French MP or senator can table to ask the Government to carry the project to Brussels. French only.",
    tx_fr: "Lire en français (PDF)", tx_en: "Read in English (PDF)",
    cl_title: "Several closing systems",
    cl_lead: "The standard sets the rim of the box: its dimensions and a lip that sticks out. Each manufacturer attaches its lid to that lip with the system of its choice, and picks its thickness, colour and material. All these lids close every box of the same format.",
    cl_press_h: "Press-on", cl_press: "A soft plastic lid hugs the rim and slips under the lip with a simple press.",
    cl_clips_h: "Clip-lock", cl_clips: "Four hinged clips fold down and catch the lip. They press a silicone seal onto the rim.",
    cl_glass_h: "Glass", cl_glass: "A glass plate resting on the rim. A soft silicone clip holds the glass and slips under the lip. For the oven, the fridge or the table.",
    cl_note: "Cross-section of the rim. The draft delegated act leaves the locking system free, as long as the lid closes any box of the same format (Article 3(5)). The harmonised standard will have to shape the lip so that all these systems can grip it (Article 6).",
    nav_problem: "The problem", nav_texts: "The texts", nav_idea: "The idea", nav_height: "Every size", nav_survey: "Your view",
    eyebrow: "A citizen proposal for Europe",
    hero_title: "The right lid, on any box.",
    hero_lead: "A few common formats for food storage boxes in Europe, like USB-C for chargers. If a lid gets lost, any lid of the same format replaces it. The box stays in use, so fewer boxes are thrown away and less plastic is produced.",
    cta_survey: "Take the survey (1 min)", cta_idea: "See the idea",
    tab_today: "Today", tab_tomorrow: "With common formats",
    replay: "Replay",
    a1: "One box, three lids.", a2: "Too small.", a3: "Round, on a rectangular box.", a4: "Too big.",
    a5: "One more box without a lid. The heap grows.",
    b1: "Three boxes of the same format: three heights, three materials.", b2: "One lid of that format closes them all.",
    b3: "And the lids swap freely.",
    b_glass: "glass", b_plastic: "plastic", b_steel: "steel",
    pb_title: "The lid drawer",
    pb_p1: "Every brand has its own dimensions, often every range within a brand. A lid that is lost, broken or warped in the dishwasher leaves its box almost useless.",
    pb_p2: "The box often ends up in the bin in good condition, and a whole new set gets bought.",
    idea_title: "Three common formats",
    idea_p1: "A format is defined by two things: the dimensions of the rim, seen from above, and the profile that takes the lid. A lid of one format closes every box of that format, whatever the brand or the material: plastic, glass, steel.",
    idea_p2: "Height, materials, colours, closing system and price remain up to each manufacturer.",
    idea_scope: "Only food storage boxes are concerned. Screw-top jars, bottles, flasks and packaging sold full stay out of scope.",
    idea_ikea: "IKEA already closes its 1-litre plastic and glass boxes with the same lid.", idea_ikea_src: "See the product",
    idea_note: "Starting proposal, open for discussion. UE-3 follows a Gastronorm size, used in professional kitchens since 1964. UE-2 is a square of the same width. UE-1, for sauces and portions, is a quarter of UE-2. Square formats close either way round.",
    tray_caption: "53 × 32.5 cm Gastronorm tray",
    h_title: "Three lids, every size of box",
    h_p1: "Each lid has a fixed size. The height of the box is free. A shallow box for one portion and a deep box for soup take the same lid.",
    h_step1: "1. Pick a lid", h_step2: "2. Set the height of the box", h_range: "{f}: from {a} to {b}",
    dim_len: "length", dim_wid: "width", dim_h: "free height", h_label: "Height:", h_vol: "Capacity",
    h_note: "Rough estimate: 6 mm walls and an 8 mm base assumed.",
    pr_title: "Precedents",
    pr_usbc: "Since 28 December 2024, new phones sold in the European Union charge through a USB-C port. The Commission estimated discarded and unused chargers at 11,000 tonnes of waste a year.",
    pr_usbc_src: "Directive (EU) 2022/2380", pr_usbc_src2: "European Commission, 2021",
    pr_gn: "Created in Switzerland in 1964, European standard EN 631 since 1993. In professional kitchens, any tray fits any oven, trolley or fridge.",
    pr_gn_src: "History of Gastronorm",
    pr_how_t: "The legal basis",
    pr_how: "The EU Ecodesign Regulation already lets the Commission require standard components through a delegated act. A national law alone would hinder the free movement of goods. The decision therefore lies with the EU.",
    pr_how_src: "Regulation (EU) 2024/1781",
    sv_title: "The survey",
    sv_intro: "Anonymous, one minute. We found no measure of how many boxes are thrown away for want of a lid. Your answers will give a first figure to show to lawmakers.",
    sv_submit: "Send my answers",
    sv_privacy: "No personal data: no name, no email address, no tracking cookie.",
    sv_missing: "Please answer the questions shown in red.",
    sv_error: "Sending failed. Check your connection and try again.",
    res_title: "Answers so far", res_n: "{n} answers",
    sv_thanks_t: "Thank you.",
    sv_thanks: "Share the page so that others answer too.",
    share: "Share the page", copied: "Link copied",
    st_title: "Where the proposal stands",
    st_1_d: "November 2026",
    st_1: "Draft delegated act and European resolution written, then sent to French and European lawmakers and to NGOs.",
    st_2_d: "Next step",
    st_2: "Find a French MP or senator to table the resolution, and an MEP to question the Commission.",
    st_docs: "The full texts are above, in the section \"The texts\".", doc_act: "draft delegated act (FR)", doc_pre: "European resolution (FR)", doc_act_en: "draft delegated act (EN)",
    foot: "A proposal by the Common Lid Collective. Code under the MIT licence, texts under CC BY 4.0.",
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
    text: { fr: "utilisations nécessaires pour qu'une boîte réutilisable en plastique fasse mieux qu'une barquette jetable, selon l'indicateur.",
            en: "uses needed for a reusable plastic box to beat a disposable tray, depending on the impact measured." },
    src: { fr: "Gallego-Schmid et al., J. Cleaner Production, 2019", en: "Gallego-Schmid et al., J. Cleaner Production, 2019" },
    url: "https://doi.org/10.1016/j.jclepro.2018.11.220" },
  { num: { fr: "Bac jaune : non", en: "Not in the recycling bin" }, wide: true,
    text: { fr: "En France, une boîte alimentaire en plastique rigide ne va pas dans le bac de tri. Elle part en général aux ordures ménagères, qui sont incinérées ou enfouies.",
            en: "In France, a rigid plastic food box does not go in the recycling bin. It usually goes with household waste, which is incinerated or landfilled." },
    src: { fr: "ADEME, Que faire de mes déchets (2026)", en: "ADEME, French environment agency (2026)" },
    url: "https://quefairedemesdechets.ademe.fr/categories/emballages/emballages-en-plastique/",
    more: [{ fr: "fiche « Objet en plastique »", en: "\"plastic object\" page", url: "https://quefairedemesdechets.ademe.fr/dechet/objet-en-plastique/" }] }
];

/* ---------- Langue ---------- */
let lang = localStorage.getItem("lang") === "en" ? "en" : "fr"; // français par défaut, anglais seulement sur choix du visiteur
const t = k => T[lang][k];

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderQuestions();
  renderFigures();
  renderClosures();
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

/* Dessin en perspective cavalière : la profondeur part en diagonale vers le haut à droite.
   Une boîte est une empreinte rectangulaire à coins arrondis, extrudée verticalement. */
const KX = 0.476, KY = -0.275; // décalage écran par millimètre de profondeur
const FLOOR = 296;
const R1 = v => Math.round(v * 10) / 10;
const D = pts => "M" + pts.map(p => R1(p[0]) + " " + R1(p[1])).join(" L") + " Z";

// Rectangle à coins arrondis dans le plan (u vers la droite, v vers le fond), sens trigonométrique.
function rr(L, W, r) {
  r = Math.min(r, L / 2, W / 2);
  const c = [[L / 2 - r, -W / 2 + r, -90], [L / 2 - r, W / 2 - r, 0], [-L / 2 + r, W / 2 - r, 90], [-L / 2 + r, -W / 2 + r, 180]];
  const pts = [];
  for (const [cu, cv, a0] of c) for (let k = 0; k <= 8; k++) {
    const a = (a0 + k * 90 / 8) * Math.PI / 180; pts.push([cu + r * Math.cos(a), cv + r * Math.sin(a)]);
  }
  return pts;
}
const proj = (pts, X, Y) => pts.map(([u, v]) => [X + u + v * KX, Y + v * KY]);
// Volume balayé par une forme convexe descendue de H : contour supérieur du haut, contour inférieur du bas.
function sweep(top, H) {
  let iL = 0, iR = 0;
  top.forEach((p, i) => { if (p[0] < top[iL][0]) iL = i; if (p[0] > top[iR][0]) iR = i; });
  const chain = (a, b) => { const out = []; for (let i = a; ; i = (i + 1) % top.length) { out.push(top[i]); if (i === b) break; } return out; };
  const c1 = chain(iL, iR), c2 = chain(iR, iL);
  const mean = c => c.reduce((s, p) => s + p[1], 0) / c.length;
  const upper = mean(c1) < mean(c2) ? c1 : c2.slice().reverse();
  const lower = (mean(c1) < mean(c2) ? c2 : c1.slice().reverse()).map(([x, y]) => [x, y + H]);
  return upper.concat(lower);
}

// Nourriture : surface dans l'ouverture, avec quelques éléments ; dans le verre, on voit aussi le volume.
const FOOD = {
  salad: { base: "#8cbf5a", side: "#76a84a", bits: [["#5d9c3c", 7], ["#e4572e", 5], ["#f2c14e", 3], ["#5d9c3c", 6], ["#fff4d6", 3]] },
  pasta: { base: "#f2c14e", side: "#dba63a", bits: [["#e0a72b", 5], ["#c94f2a", 4], ["#e0a72b", 5], ["#7aa34a", 2.5]] },
  soup:  { base: "#d9532f", side: "#b9431f", bits: [["#f08a5d", 4], ["#fff4d6", 2.5], ["#f08a5d", 3]] }
};
let uid = 0;
function foodSVG(kind, shape) {
  const f = FOOD[kind], id = "fd" + (++uid);
  const xs = shape.map(p => p[0]), ys = shape.map(p => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  let s = `<clipPath id="${id}"><path d="${D(shape)}"/></clipPath><g clip-path="url(#${id})"><path d="${D(shape)}" fill="${f.base}"/>`;
  let seed = 7;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < 26; i++) {
    const [col, r] = f.bits[i % f.bits.length];
    s += `<ellipse cx="${R1(x0 + rnd() * (x1 - x0))}" cy="${R1(y0 + rnd() * (y1 - y0))}" rx="${r}" ry="${R1(r * .6)}" fill="${col}"/>`;
  }
  return s + "</g>";
}

const MAT = {
  plastic: { body: "url(#hPlastic)", rim: "#f6b98a", inside: "#d9844e" },
  glass:   { body: "url(#hGlass)",   rim: "#d6ecf3", inside: "#a9cfdc", glass: true },
  steel:   { body: "url(#hSteel)",   rim: "#e3e6e9", inside: "#8f979e" }
};
// Boîte posée au sol, centre de l'empreinte en (X, Yfloor). Renvoie aussi le centre du plan du bord.
function boxSVG({ X, Yfloor = FLOOR, L, W, H, r = 16, mat, food, foodLevel = .8 }) {
  const m = MAT[mat], Y0 = Yfloor - W * -KY / 2;
  const top = proj(rr(L, W, r), X, Y0 - H);
  const inner = proj(rr(L - 10, W - 10, r - 5), X, Y0 - H);
  const body = sweep(top, H);
  let s = "";
  if (m.glass && food) {
    const fh = H * foodLevel, ftop = proj(rr(L - 8, W - 8, r - 4), X, Y0 - fh);
    s += `<path d="${D(sweep(ftop, fh - 3))}" fill="${FOOD[food].side}"/>`;
  }
  s += `<path d="${D(body)}" fill="${m.body}" class="box-stroke"/>
    <path d="${D(top)}" fill="${m.rim}" class="box-stroke"/>
    <path d="${D(inner)}" fill="${m.inside}"/>`;
  if (food) s += foodSVG(food, proj(rr(L - 12, W - 12, r - 6), X, Y0 - H + 7));
  return { svg: s, cx: X, cy: Y0 - H, body, top, frontX: X - W / 2 * KX };
}
// Couvercle centré sur (0,0) = centre du plan du bord ; t épaisseur au-dessus du bord, sk rebord descendant.
function lidSVG({ L, W, r = 18, t = 7, sk = 0, col, letter }) {
  const top = proj(rr(L, W, r), 0, -t);
  let s = `<path d="${D(sweep(top, t + sk))}" fill="${col.band}" class="box-stroke"/>`;
  s += `<path d="${D(top)}" fill="${col.top}" class="box-stroke"/>`;
  if (letter) s += `<text class="lid-letter" x="${R1(-W / 2 * KX)}" y="${R1(-t + W / 2 * -KY + (t + sk) / 2 + 3.5)}">${letter}</text>`;
  return s;
}
const LID = {
  std: { top: "#2f9e80", band: "url(#hLid)" },
  S:   { top: "#b6ddb4", band: "#8cc28a" },
  R:   { top: "#dcc0e6", band: "#b48ac4" },
  B:   { top: "#a9c9de", band: "#6f9ab7" }
};
const counter = `<path d="M0 ${FLOOR + 8} H800 V${FLOOR - 56} H0 Z" fill="#f3ece1"/>
  <line x1="0" y1="${FLOOR + 8.5}" x2="800" y2="${FLOOR + 8.5}" class="floor"/>`;
const wrap = (id, x, y, inner) => `<g transform="translate(${x} ${y})"><g id="${id}">${inner}</g></g>`;

// ----- Scène A : aujourd'hui
const A = { box: boxSVG({ X: 405, L: 150, W: 100, H: 82, r: 18, mat: "plastic", food: "salad" }) };
A.rest = { "a-lidB": [150, 270], "a-lidR": [150, 255], "a-lidS": [150, 241] };
A.target = [A.box.cx, A.box.cy];
// Au fond : un tas de boîtes dépareillées, jetées en vrac, petit et pâle parce que lointain.
// [x, sol, longueur, largeur, hauteur, rayon d'angle, rotation, matière] ; rayon = largeur / 2 : boîte ronde
const PILE = [
  [668, 255, 44, 28, 16, 6, -4, "plastic"], [712, 257, 34, 34, 20, 17, 0, "glass"], [754, 254, 50, 30, 14, 8, 3, "steel"],
  [686, 238, 38, 24, 18, 5, -14, "steel"], [731, 237, 46, 30, 15, 9, 10, "plastic"], [771, 241, 30, 30, 16, 15, -6, "plastic"],
  [708, 221, 42, 26, 14, 7, -22, "glass"], [750, 222, 32, 32, 18, 16, 18, "steel"], [727, 205, 40, 24, 16, 6, -8, "plastic"],
  // boîtes qui arrivent ensuite
  [695, 205, 36, 22, 14, 5, 25, "steel", 1], [763, 207, 44, 28, 13, 8, -15, "glass", 1], [716, 190, 30, 30, 15, 15, 6, "plastic", 1],
  [745, 191, 38, 24, 14, 6, -20, "steel", 1], [676, 222, 40, 26, 15, 6, -32, "plastic", 1], [732, 175, 34, 22, 13, 5, 12, "glass", 1],
  [777, 224, 28, 28, 14, 14, 30, "plastic", 1]
].map(([x, y, L, W, H, r, rot, mat, late]) => ({ x, y, L, W, H, r, rot, mat, late: !!late }));
const pileBox = p => `<g transform="rotate(${p.rot} ${p.x} ${R1(p.y - p.H / 2 - p.W * -KY / 2)})">${boxSVG({ X: p.x, Yfloor: p.y, L: p.L, W: p.W, H: p.H, r: p.r, mat: p.mat }).svg}</g>`;
(function buildA() {
  // le petit couvercle disparaît derrière les parois quand il tombe dans la boîte (règle pair-impair)
  const hole = `M-50 0H850V420H-50Z ${D(A.box.body)} ${D(A.box.top)}`;
  $("scene-a").innerHTML = `${counter}
    <defs><clipPath id="clipBox"><path clip-rule="evenodd" d="${hole}"/></clipPath></defs>
    <g class="pile">${PILE.map((p, i) => p.late ? `<g id="a-pile${i}" opacity="0">${pileBox(p)}</g>` : pileBox(p)).join("")}</g>
    <g id="a-person" class="person" opacity="0">
      <path d="M598 296 l3 -52 M622 296 l-3 -52" class="leg"/>
      <path d="M586 252 q0 -52 24 -52 q24 0 24 52 z" class="shirt"/>
      <path d="M590 214 q-14 18 -2 30 l14 -6 M630 214 q14 18 2 30 l-14 -6" class="arm"/>
      <circle cx="610" cy="182" r="17" class="skin"/>
      <path d="M593 178 q2 -20 17 -20 q16 0 17 18 q-9 -9 -22 -8 q-8 1 -12 10 z" class="hair"/>
      <circle cx="604" cy="183" r="1.8" class="eye"/><circle cx="616" cy="183" r="1.8" class="eye"/>
      <path d="M600 176 l7 3 M620 176 l-7 3" class="mouth"/><path d="M604 194 q6 -4 12 0" class="mouth"/>
    </g>
    <g id="a-box">${A.box.svg}</g>
    ${wrap("a-lidB", ...A.rest["a-lidB"], lidSVG({ L: 196, W: 128, r: 22, sk: 7, col: LID.B }))}
    ${wrap("a-lidR", ...A.rest["a-lidR"], lidSVG({ L: 138, W: 138, r: 69, sk: 6, col: LID.R }))}
    <g clip-path="url(#clipBox)">${wrap("a-lidS", ...A.rest["a-lidS"], lidSVG({ L: 104, W: 66, r: 14, sk: 6, col: LID.S }))}</g>
    <g id="a-mark" class="mark bad" opacity="0"><circle cx="${A.target[0]}" cy="125" r="20"/><path d="M${A.target[0] - 9} 116 l18 18 M${A.target[0] + 9} 116 l-18 18"/></g>`;
})();
const offA = (id, x, y) => `translate(${x - A.rest[id][0]}px, ${y - A.rest[id][1]}px)`;

async function sceneA(token) {
  const svg = $("scene-a"); resetAll(svg);
  const S = $("a-lidS"), R = $("a-lidR"), B = $("a-lidB"), box = $("a-box"), mark = $("a-mark"), person = $("a-person");
  const [tx, ty] = A.target;
  const ok = () => token === run;
  const late = PILE.map((p, i) => p.late ? $("a-pile" + i) : null).filter(Boolean);
  const fail = async () => {
    await move(mark, [{ opacity: 0 }, { opacity: 1 }], 150); await wait(550); await move(mark, [{ opacity: 1 }, { opacity: 0 }], 200);
  };
  caption("a1"); await wait(1100); if (!ok()) return;

  caption("a2"); // trop petit : tombe dans la boîte
  await move(S, [{ transform: "none" }, { transform: offA("a-lidS", tx, ty - 70) }], 750);
  await move(S, [{ transform: offA("a-lidS", tx, ty - 70) }, { transform: offA("a-lidS", tx + 4, ty + 24) + " rotate(9deg)" }], 420, "cubic-bezier(.5,0,1,1)");
  if (!ok()) return; await fail();
  await move(S, [{ transform: offA("a-lidS", tx + 4, ty + 24) + " rotate(9deg)" }, { transform: offA("a-lidS", tx, ty - 70) }, { transform: "none" }], 950);
  if (!ok()) return;

  caption("a3"); // rond sur rectangulaire : bascule et ne ferme rien
  await move(R, [{ transform: "none" }, { transform: offA("a-lidR", tx, ty - 70) }], 750);
  await move(R, [{ transform: offA("a-lidR", tx, ty - 70) }, { transform: offA("a-lidR", tx, ty - 3) }], 340, "cubic-bezier(.5,0,1,1)");
  if (!ok()) return;
  await move(R, [{ transform: offA("a-lidR", tx, ty - 3) }, { transform: offA("a-lidR", tx + 6, ty - 10) + " rotate(-9deg)" },
                 { transform: offA("a-lidR", tx - 4, ty - 4) + " rotate(6deg)" }, { transform: offA("a-lidR", tx + 3, ty - 8) + " rotate(-5deg)" }], 800, "ease-out");
  await fail(); if (!ok()) return;
  await move(R, [{ transform: offA("a-lidR", tx + 3, ty - 8) + " rotate(-5deg)" }, { transform: "none" }], 850);
  if (!ok()) return;

  caption("a4"); // trop grand : glisse et tombe
  await move(B, [{ transform: "none" }, { transform: offA("a-lidB", tx, ty - 70) }], 750);
  await move(B, [{ transform: offA("a-lidB", tx, ty - 70) }, { transform: offA("a-lidB", tx, ty + 2) }], 340, "cubic-bezier(.5,0,1,1)");
  if (!ok()) return;
  await move(B, [{ transform: offA("a-lidB", tx, ty + 2) }, { transform: offA("a-lidB", tx + 50, ty + 30) + " rotate(22deg)" },
                 { transform: offA("a-lidB", tx + 65, 280) + " rotate(3deg)" }], 650, "ease-in");
  await fail(); if (!ok()) return;
  await move(B, [{ transform: offA("a-lidB", tx + 65, 280) + " rotate(3deg)" }, { transform: "none" }], 850);
  if (!ok()) return;

  caption("a5"); // le personnage arrive, mécontent ; la boîte rejoint le tas au fond, et le tas grandit
  await move(person, [{ opacity: 0, transform: "translateX(24px)" }, { opacity: 1, transform: "none" }], 500);
  await move(box, [{ transform: "none" }, { transform: "translate(150px,-150px) rotate(-8deg) scale(.6)" },
                   { transform: "translate(286px,-105px) scale(.25)" }], 1400, "ease-in-out");
  if (!ok()) return;
  move(late[0], [{ opacity: 0 }, { opacity: 1 }], 1);
  move(box, [{ transform: "translate(286px,-105px) scale(.25)", opacity: 1 }, { transform: "translate(286px,-105px) scale(.25)", opacity: 0 }], 1);
  for (const g of late.slice(1)) {
    await wait(380); if (!ok()) return;
    move(g, [{ opacity: 0, transform: "translateY(-40px)" }, { opacity: 1, transform: "none" }], 420, "cubic-bezier(.5,0,1,1)");
  }
}

// ----- Scène B : formats communs
const Bx = [
  { box: boxSVG({ X: 165, L: 150, W: 100, H: 60, mat: "glass", food: "salad", foodLevel: .78 }), tag: "b_glass", letter: "A" },
  { box: boxSVG({ X: 400, L: 150, W: 100, H: 95, mat: "plastic", food: "pasta" }), tag: "b_plastic", letter: "B" },
  { box: boxSVG({ X: 635, L: 150, W: 100, H: 140, mat: "steel", food: "soup" }), tag: "b_steel", letter: "C" }
];
(function buildB() {
  $("scene-b").innerHTML = `${counter}
    ${Bx.map(b => b.box.svg).join("")}
    ${Bx.map(b => `<text x="${R1(b.box.frontX)}" y="${FLOOR + 26}" class="tag" data-i18n="${b.tag}"></text>`).join("")}
    ${Bx.map((b, i) => wrap("b-lid" + (i + 1), b.box.cx, b.box.cy, lidSVG({ L: 158, W: 108, r: 22, t: 6, sk: 11, col: LID.std, letter: b.letter }))).join("")}
    <g id="b-checks" opacity="0">${Bx.map(b => `<g class="mark good"><circle cx="${b.box.cx}" cy="${b.box.cy - 44}" r="16"/><path d="M${b.box.cx - 8} ${b.box.cy - 44} l6 6 l11 -12"/></g>`).join("")}</g>`;
})();

async function sceneB(token) {
  const svg = $("scene-b"); resetAll(svg);
  const ok = () => token === run;
  const L = ["b-lid1", "b-lid2", "b-lid3"].map($);
  const checks = $("b-checks");
  L.forEach((l, i) => l.animate([{ transform: `translate(0, ${-Bx[i].box.cy - 40}px)` }], { duration: 1, fill: "forwards" }));
  checks.animate([{ opacity: 0 }], { duration: 1, fill: "forwards" });
  caption("b1"); await wait(1700); if (!ok()) return;
  caption("b2");
  for (const [i, l] of L.entries()) {
    const y0 = -Bx[i].box.cy - 40;
    move(l, [{ transform: `translate(0, ${y0}px)` }, { transform: "translate(0, 4px)", offset: .85 }, { transform: "translate(0,0)" }], 750, "cubic-bezier(.5,0,.7,1)");
    await wait(260);
  }
  await wait(700); if (!ok()) return;
  await move(checks, [{ opacity: 0 }, { opacity: 1 }], 300);
  await wait(1200); if (!ok()) return;
  await move(checks, [{ opacity: 1 }, { opacity: 0 }], 250);
  caption("b3"); // échange : A sur la boîte en inox, C sur la boîte en verre
  const dx = Bx[2].box.cx - Bx[0].box.cx, dy = Bx[2].box.cy - Bx[0].box.cy;
  move(L[0], [{ transform: "none" }, { transform: "translate(0px, -110px)" }, { transform: `translate(${dx}px, ${dy - 70}px)` }, { transform: `translate(${dx}px, ${dy}px)` }], 1600);
  await move(L[2], [{ transform: "none" }, { transform: "translate(0px, -50px)" }, { transform: `translate(${-dx}px, ${-dy - 130}px)` }, { transform: `translate(${-dx}px, ${-dy}px)` }], 1600);
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
    for (const m of f.more || []) {
      const a2 = document.createElement("a"); a2.href = m.url; a2.textContent = m[lang]; a2.rel = "noopener";
      s.append(", ", a2);
    }
    d.append(n, p, s); box.append(d);
  }
}

/* ---------- Fermetures : coupes du bord ---------- */
// Paroi de la boîte (x 70 à 78) terminée par la lèvre commune (x 78 à 90, y 62 à 70).
// Côté intérieur (à gauche), du riz. Couvercles en plastique translucide, comme les modèles du commerce.
const RICE = (() => {
  let s = "", seed = 11; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < 70; i++) {
    const x = 31 + rnd() * 38, y = 67 + rnd() * 33, a = Math.round(rnd() * 180);
    s += `<ellipse cx="${R1(x)}" cy="${R1(y)}" rx="2.1" ry=".9" transform="rotate(${a} ${R1(x)} ${R1(y)})" class="cl-grain"/>`;
  }
  return `<path d="M30 66 Q40 64 50 66 T70 66 V100 H30 Z" class="cl-rice"/>${s}`;
})();
function closureSVG(kind) {
  const box = `${RICE}<path d="M70 100 V64 Q70 62 72 62 H88 Q90 62 90 64 V68 Q90 70 88 70 H80 Q78 70 78 72 V100 Z" class="cl-box"/>`;
  // chaque marque son épaisseur et sa couleur : la compatibilité ne tient qu'à la lèvre
  const lidPlate = (y, h, cls) => `<rect x="20" y="${y}" width="74" height="${h}" rx="${R1(h / 2.4)}" class="${cls}"/>`;
  let lid = "";
  if (kind === "press") lid =
    // plastique souple qui épouse le bord : dessus de la paroi, face extérieure de la lèvre, et dessous
    `<path d="M20 58 H88 Q94 58 94 64 V70 Q94 74 90 74 H84 Q82 74 82 72 Q82 70 84 70 H88 Q90 70 90 68 V64 Q90 62 88 62 H20 Z" class="cl-lid press"/>`;
  if (kind === "clips") lid = lidPlate(47, 9, "cl-lid clips") +
    `<rect x="70" y="56" width="18" height="6" rx="3" class="cl-seal"/>` +
    // charnière fine au bord du couvercle, clapet avec crochet sous la lèvre et ergot de préhension
    `<path d="M94 51 q3 0 3 3" class="cl-hinge"/>
     <path d="M92 56 H98 V84 l6 9 -3 2 -9 -9 V76 H82 V71 H92 Z" class="cl-clip"/>`;
  if (kind === "glass") lid = `<rect x="20" y="49" width="70" height="13" rx="2" class="cl-glass"/>` +
    // attache en silicone souple : pince le bord du verre et passe sous la lèvre
    `<path d="M86 50 Q86 48 88 48 H95 Q99 48 99 52 V71 Q99 75 95 75 H86 Q83 75 83 73 Q83 71 85 71 H89 Q91 71 91 69 V53 H88 Q86 53 86 51 Z" class="cl-band"/>`;
  return box + lid;
}
function renderClosures() { document.querySelectorAll(".cl-ill").forEach(s => { s.innerHTML = closureSVG(s.dataset.cl); }); }

/* ---------- Hauteur libre ---------- */
const FMTS = [[81, 81], [162, 162], [265, 162]];
let fmt = 0;
function updateHeight() {
  const h = +$("hslider").value;
  const [L, W] = FMTS[fmt];
  const litres = ((L - 12) * (W - 12) * (h - 8)) / 1e6;
  const nf = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  $("hval").textContent = `${nf.format(h / 10)} ${t("cm")}`;
  $("vol").textContent = `${nf.format(litres)} ${t("litre")}`;
  // fourchette de chaque couvercle, de la boîte la plus basse à la plus haute du curseur
  const sl = $("hslider"), cap = (f, hh) => ((FMTS[f][0] - 12) * (FMTS[f][1] - 12) * (hh - 8)) / 1e6;
  $("hranges").textContent = "";
  FMTS.forEach((_, f) => {
    const li = document.createElement("li"); if (f === fmt) li.className = "on";
    li.textContent = t("h_range").replace("{f}", "UE-" + (f + 1)).replace("{a}", `${nf.format(cap(f, +sl.min))} ${t("litre")}`).replace("{b}", `${nf.format(cap(f, +sl.max))} ${t("litre")}`);
    $("hranges").append(li);
  });
  // même rendu que l'animation : empreinte arrondie, couvercle à rebord descendant, pâtes dedans
  const floor = 280, X = 285;
  const rb = Math.min(20, Math.round(W * 0.15));   // petit format : coins moins arrondis
  const b = boxSVG({ X, Yfloor: floor, L, W, H: h, r: rb, mat: "plastic", food: "pasta" });
  const lid = lidSVG({ L: L + 8, W: W + 8, r: rb + 4, t: 6, sk: 11, col: LID.std });
  // cotes : coins de l'empreinte au sol (avant-gauche, avant-droit, arrière-droit)
  const fl = [X - L / 2 - W / 2 * KX, floor], fr = [X + L / 2 - W / 2 * KX, floor], br = [X + L / 2 + W / 2 * KX, floor + W * KY];
  const nf0 = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB");
  const lab = (k, v) => `${t(k)} ${nf0.format(v)} mm`;
  const yL = floor + 16;                       // longueur, sous l'arête avant
  const o = 16, ox = o * 0.866, oy = o * 0.5;  // largeur, décalée perpendiculairement à l'arête droite
  const xH = fl[0] - 16;                       // hauteur, à gauche de l'arête avant gauche
  const ang = Math.atan2(br[1] - fr[1], br[0] - fr[0]) * 180 / Math.PI;
  const mx = (fr[0] + br[0]) / 2 + ox + 10, my = (fr[1] + br[1]) / 2 + oy + 10;
  const sh = L < 130 ? 16 : 0;                // petit format : décale la cote de largeur le long de l'arête
  const mxs = mx + sh * Math.cos(ang * Math.PI / 180), mys = my + sh * Math.sin(ang * Math.PI / 180);
  $("hdraw").innerHTML = b.svg + `<g transform="translate(${b.cx} ${b.cy})">${lid}</g>
    <g class="dim">
      <path class="ext" d="M${R1(fl[0])} ${floor + 3} V${yL + 4} M${R1(fr[0])} ${floor + 3} V${yL + 4}"/>
      <path class="dl" d="M${R1(fl[0])} ${yL} H${R1(fr[0])}" marker-start="url(#arr)" marker-end="url(#arr)"/>
      <text class="hdim${L < 130 ? " end" : ""}" x="${R1(L < 130 ? fr[0] : (fl[0] + fr[0]) / 2)}" y="${yL + 18}">${lab("dim_len", L)}</text>
      <path class="ext" d="M${R1(fr[0] + 3)} ${R1(fr[1] + 2)} L${R1(fr[0] + ox + 3)} ${R1(fr[1] + oy + 2)} M${R1(br[0] + 3)} ${R1(br[1] + 2)} L${R1(br[0] + ox + 3)} ${R1(br[1] + oy + 2)}"/>
      <path class="dl" d="M${R1(fr[0] + ox)} ${R1(fr[1] + oy)} L${R1(br[0] + ox)} ${R1(br[1] + oy)}" marker-start="url(#arr)" marker-end="url(#arr)"/>
      <text class="hdim" transform="translate(${R1(mxs)} ${R1(mys)}) rotate(${R1(ang)})">${lab("dim_wid", W)}</text>
      <path class="ext" d="M${R1(fl[0] - 3)} ${floor} H${R1(xH - 4)} M${R1(fl[0] - 3)} ${floor - h} H${R1(xH - 4)}"/>
      <path class="dl strong" d="M${R1(xH)} ${floor} V${floor - h}" marker-start="url(#arrS)" marker-end="url(#arrS)"/>
      <text class="hdim strong end" x="${R1(xH - 8)}" y="${R1(floor - h / 2 - 3)}">${t("dim_h")}</text>
      <text class="hdim strong end" x="${R1(xH - 8)}" y="${R1(floor - h / 2 + 12)}">${nf0.format(h)} mm</text>
    </g>`;
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
