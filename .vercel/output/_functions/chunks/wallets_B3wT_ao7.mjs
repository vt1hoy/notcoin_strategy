import { c as createComponent } from './astro-component_Dtt6e6KP.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BGVXolJC.mjs';
import { g as getLang, t as translations, $ as $$MainLayout, w as withLang } from './MainLayout_Cqp7oRmr.mjs';

const $$Wallets = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Wallets;
  const url = Astro2.url;
  const lang = getLang(url);
  const t = translations[lang];
  const w = t.pages.wallets;
  const explorerHref = "#";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${w.title} · ${t.meta.defaultTitle}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="desk-page"> <p class="desk-nav-back"> <a class="btn btn--secondary btn--compact btn--nav-back"${addAttribute(withLang("/", lang), "href")}> ${w.backToStrategy} </a> </p> <header class="desk-header"> <h1 class="page-title desk-header__title">${w.title}</h1> <p class="page-lede desk-header__subtitle">${w.subtitle}</p> </header> <section class="card desk-anchor" aria-labelledby="desk-totals-heading"> <h2 id="desk-totals-heading" class="sr-only">${w.totalsHeading}</h2> <div class="total-hold"> <div class="total-hold__block total-hold__block--primary"> <span class="total-hold__label">${w.totals.ncLabel}</span> <span class="total-hold__value total-hold__value--hero">${w.totals.ncValue}</span> </div> <div class="total-hold__block"> <span class="total-hold__label">${w.totals.tonLabel}</span> <span class="total-hold__value">${w.totals.tonValue}</span> </div> <div class="total-hold__block"> <span class="total-hold__label">${w.totals.walletsLabel}</span> <span class="total-hold__value">${w.totals.walletsValue}</span> </div> </div> </section> <section class="desk-wallets"${addAttribute(w.title, "aria-label")}> <div class="wallet-grid"> ${w.entries.map((entry) => renderTemplate`<article class="card wallet-card"> <h3 class="wallet-card__name">${entry.name}</h3> <p class="wallet-card__balance">${entry.balance}</p> <p class="wallet-card__meta"> <span class="wallet-card__status">${entry.status}</span> </p> <a class="wallet-card__link"${addAttribute(explorerHref, "href")}> ${entry.explorer} </a> </article>`)} </div> </section> <p class="desk-footnote">${w.footnote}</p> </div> ` })}`;
}, "C:/notcoin_strat/src/pages/wallets.astro", void 0);

const $$file = "C:/notcoin_strat/src/pages/wallets.astro";
const $$url = "/wallets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Wallets,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
