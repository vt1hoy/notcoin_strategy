import { c as createComponent } from './astro-component_Dtt6e6KP.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BGVXolJC.mjs';
import { g as getLang, t as translations, $ as $$MainLayout, w as withLang } from './MainLayout_Cqp7oRmr.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const url = Astro2.url;
  const lang = getLang(url);
  const t = translations[lang];
  const simulationHref = "#";
  const telegramHref = "#";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": t.meta.defaultTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack"> <section class="hero" aria-labelledby="hero-title"> <div class="hero__copy"> <h1 id="hero-title" class="hero__title">${t.home.hero.title}</h1> <p class="hero__subtitle">${t.home.hero.subtitle}</p> <p class="hero__desc">${t.home.hero.description}</p> <div class="hero__actions"> <a class="btn btn--primary"${addAttribute(simulationHref, "href")}>${t.home.hero.ctaSimulation}</a> <a class="btn btn--secondary"${addAttribute(telegramHref, "href")}>${t.home.hero.ctaTelegram}</a> </div> </div> <div class="hero__visual" role="img" aria-hidden="true"></div> </section> <section class="grid-2"${addAttribute(t.home.aria.simulationStrategy, "aria-label")}> <article class="card"> <div class="preview"> <img src="/simulation-preview.svg" alt="" width="960" height="540" loading="lazy"> </div> <h2 class="card__title">${t.home.simulation.title}</h2> <p class="card__text">${t.home.simulation.body}</p> <div class="btn-row btn-row--stack"> <a class="btn btn--launch"${addAttribute(simulationHref, "href")}>${t.home.simulation.launch}</a> </div> </article> <article class="card"> <span class="pill">${t.home.strategy.label}</span> <h2 class="card__title">${t.home.strategy.title}</h2> <div class="strategy-metrics" role="group"${addAttribute(t.home.strategy.title, "aria-label")}> <div class="stat stat--focus"> <span class="stat__label">${t.home.strategy.totalNcLabel}</span> <span class="stat__value stat__value--focus">${t.home.strategy.totalNcValue}</span> </div> <div class="stat stat--compact-metric"> <span class="stat__label">${t.home.strategy.totalTonLabel}</span> <span class="stat__value">${t.home.strategy.totalTonValue}</span> </div> <div class="stat stat--compact-metric"> <span class="stat__label">${t.home.strategy.activeWalletsLabel}</span> <span class="stat__value">${t.home.strategy.activeWalletsValue}</span> </div> <div class="stat stat--compact-metric"> <span class="stat__label">${t.home.strategy.phaseLabel}</span> <span class="stat__value">${t.home.strategy.phaseValue}</span> </div> <div class="stat stat--compact-metric"> <span class="stat__label">${t.home.strategy.lastUpdateLabel}</span> <span class="stat__value">${t.home.strategy.lastUpdateValue}</span> </div> <div class="stat stat--compact-metric"> <span class="stat__label">${t.home.strategy.holdLabel}</span> <span class="stat__value">${t.home.strategy.holdValue}</span> </div> </div> <div class="card__footer"> <a class="btn btn--secondary btn--compact"${addAttribute(withLang("/wallets", lang), "href")}>${t.home.hero.ctaWallets}</a> </div> </article> </section> <section class="grid-2"${addAttribute(t.home.aria.africaTelegram, "aria-label")}> <article class="card"> <h2 class="card__title">${t.home.africaBlock.title}</h2> <p class="card__text">${t.home.africaBlock.stats}</p> <div class="btn-row btn-row--stack"> <a class="btn btn--secondary"${addAttribute(withLang("/africa", lang), "href")}>${t.home.africaBlock.cta}</a> </div> </article> <article class="card telegram-minimal"> <div> <h2 class="card__title">${t.home.telegramBlock.title}</h2> <p class="card__text">${t.home.telegramBlock.hint}</p> </div> <div class="btn-row btn-row--stack"> <a class="btn btn--secondary"${addAttribute(telegramHref, "href")}>${t.home.telegramBlock.cta}</a> </div> </article> </section> </div> ` })}`;
}, "C:/notcoin_strat/src/pages/index.astro", void 0);

const $$file = "C:/notcoin_strat/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
