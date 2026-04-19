import { c as createComponent } from './astro-component_Dtt6e6KP.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BGVXolJC.mjs';
import { g as getLang, t as translations, $ as $$MainLayout, w as withLang } from './MainLayout_Cqp7oRmr.mjs';

const africaFieldEntries = {
  en: [
    {
      title: "Bamako — Initial Desk Activation",
      description: "~30-person session: TON basics, wallets, and Notcoin entry paths—aligned to the desk playbook.",
      outcomes: ["Onboarding started", "First wallets live", "Demand signal OK"],
      location: "Bamako",
      date: "2026-02-14",
      status: "Active",
      image: "/africa-field-placeholder.svg",
      link: "#"
    },
    {
      title: "Accra — Channel reconnaissance",
      description: "Two entry routes mapped; partner comms guardrails locked before any public push.",
      outcomes: ["Routes documented", "Comms rules agreed"],
      location: "Accra",
      date: "2026-03-02",
      status: "Monitoring",
      image: "/africa-field-placeholder.svg",
      link: "#"
    }
  ],
  ru: [
    {
      title: "Бамако — первичная активация деска",
      description: "Сессия ~30 чел.: TON, кошельки, точки входа Notcoin — по регламенту деска.",
      outcomes: ["Онбординг запущен", "Первые кошельки", "Сигнал спроса ОК"],
      location: "Бамако",
      date: "2026-02-14",
      status: "Активно",
      image: "/africa-field-placeholder.svg",
      link: "#"
    },
    {
      title: "Аккра — разведка каналов",
      description: "Два маршрута входа зафиксированы; правила коммуникаций с партнёрами согласованы.",
      outcomes: ["Маршруты в журнале", "Правила зафиксированы"],
      location: "Аккра",
      date: "2026-03-02",
      status: "Наблюдение",
      image: "/africa-field-placeholder.svg",
      link: "#"
    }
  ],
  fr: [
    {
      title: "Bamako — Activation initiale du desk",
      description: "Session ~30 pers. : TON, portefeuilles, points d’entrée Notcoin — alignés playbook desk.",
      outcomes: ["Onboarding lancé", "Premiers wallets", "Signal demande OK"],
      location: "Bamako",
      date: "2026-02-14",
      status: "Actif",
      image: "/africa-field-placeholder.svg",
      link: "#"
    },
    {
      title: "Accra — Reconnaissance des canaux",
      description: "Deux voies d’entrée cartographiées; garde-fous com partenaires validés avant push public.",
      outcomes: ["Voies consignées", "Règles com OK"],
      location: "Accra",
      date: "2026-03-02",
      status: "Surveillance",
      image: "/africa-field-placeholder.svg",
      link: "#"
    }
  ]
};
function getAfricaFieldEntries(lang) {
  return africaFieldEntries[lang];
}

const $$Africa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Africa;
  const url = Astro2.url;
  const lang = getLang(url);
  const t = translations[lang];
  const a = t.pages.africa;
  const entries = getAfricaFieldEntries(lang);
  const telegramHref = "#";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${a.title} · ${t.meta.defaultTitle}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="africa-page desk-page"> <p class="desk-nav-back"> <a class="btn btn--secondary btn--compact btn--nav-back"${addAttribute(withLang("/", lang), "href")}> ${a.backToStrategy} </a> </p> <header class="desk-header africa-header"> <h1 class="page-title desk-header__title africa-header__title">${a.title}</h1> <p class="page-lede desk-header__subtitle">${a.subtitle}</p> </header> <section class="card africa-narrative africa-narrative--dashboard" aria-labelledby="africa-narrative-lead"> <p id="africa-narrative-lead" class="africa-narrative__lead">${a.narrativeLead}</p> <div class="africa-narrative__shell"> <div class="africa-narrative__left"> <div class="africa-narrative__block-grid" role="list"> ${a.narrativeBlocks.map((block) => renderTemplate`<div class="africa-narrative-block" role="listitem"> <div class="africa-narrative-block__label">${block.label}</div> <div class="africa-narrative-block__body"> ${block.lines.map((line) => renderTemplate`<p class="africa-narrative-block__line">${line}</p>`)} </div> </div>`)} </div> </div> <div class="africa-narrative__visual" aria-hidden="true"> <div class="africa-narrative__visual-frame"> <img src="/hero-map.svg" alt="" width="1200" height="800" loading="lazy"> </div> </div> </div> </section> <section class="africa-feed" aria-labelledby="africa-feed-heading"> <h2 id="africa-feed-heading" class="field-feed__label">${a.feedLabel}</h2> <div class="field-feed"> ${entries.map((entry) => renderTemplate`<article class="card field-entry field-entry--split"> <div class="field-entry__grid"> <div class="field-entry__text"> <h3 class="field-entry__title">${entry.title}</h3> <p class="field-entry__desc">${entry.description}</p> ${entry.outcomes && entry.outcomes.length > 0 ? renderTemplate`<div class="field-entry__outcomes"> <p class="field-entry__outcomes-label">${a.outcomesLabel}</p> <ul class="field-entry__outcomes-list"> ${entry.outcomes.slice(0, 3).map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div>` : null} <p class="field-entry__meta"> <span class="field-entry__meta-plain">${entry.location}</span> <span class="field-entry__meta-sep" aria-hidden="true"> ${" "}
|${" "} </span> <span class="field-entry__meta-plain">${entry.date}</span> <span class="field-entry__meta-sep" aria-hidden="true"> ${" "}
|${" "} </span> <span class="field-entry__status">${entry.status}</span> </p> </div> <div class="field-entry__media"> <div class="field-entry__media-frame"> <img${addAttribute(entry.image, "src")} alt="" width="640" height="360" loading="lazy"> </div> </div> </div> <div class="field-entry__footer"> <a class="btn btn--secondary btn--compact field-entry__link"${addAttribute(entry.link, "href")}> ${a.entryLinkLabel} </a> </div> </article>`)} </div> </section> <div class="card africa-cta"> <p class="africa-cta__text">${a.telegramCtaTitle}</p> <a class="btn btn--secondary btn--compact africa-cta__btn"${addAttribute(telegramHref, "href")}> ${a.telegramCtaButton} </a> </div> </div> ` })}`;
}, "C:/notcoin_strat/src/pages/africa.astro", void 0);

const $$file = "C:/notcoin_strat/src/pages/africa.astro";
const $$url = "/africa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Africa,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
