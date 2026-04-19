import { c as createComponent } from './astro-component_Dtt6e6KP.mjs';
import 'piccolore';
import { h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate } from './entrypoint_BGVXolJC.mjs';
import 'clsx';

function getLang(url) {
  const lang = url.searchParams.get("lang");
  if (lang === "ru") return "ru";
  if (lang === "fr") return "fr";
  return "en";
}
function withLang(path, lang) {
  if (lang === "en") return path;
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}lang=${lang}`;
}

const translations = {
  en: {
    meta: {
      defaultTitle: "Notcoin Strategy",
      langNav: "Language"
    },
    pages: {
      wallets: {
        title: "Open Wallets",
        subtitle: "Accumulation proof and public treasury visibility.",
        totals: {
          ncLabel: "TOTAL NC HELD",
          ncValue: "10,421,357 NC",
          tonLabel: "TOTAL TON SPENT",
          tonValue: "16,321 TON",
          walletsLabel: "ACTIVE WALLETS",
          walletsValue: "4"
        },
        entries: [
          {
            name: "Notcoin Strategy 1",
            balance: "2,540,000 NC",
            status: "Active",
            explorer: "View on TON Explorer"
          },
          {
            name: "Notcoin Strategy 2",
            balance: "2,100,000 NC",
            status: "Active",
            explorer: "View on TON Explorer"
          },
          {
            name: "Notcoin Strategy 3",
            balance: "3,781,357 NC",
            status: "Active",
            explorer: "View on TON Explorer"
          },
          {
            name: "Notcoin Strategy 4",
            balance: "2,000,000 NC",
            status: "Active",
            explorer: "View on TON Explorer"
          }
        ],
        footnote: "All data represents current accumulation state. On-chain verification links will be provided.",
        totalsHeading: "Total hold",
        backToStrategy: "← Back to Strategy"
      },
      africa: {
        title: "Notcoin in Africa",
        subtitle: "Field accumulation, onboarding, and signal expansion layer.",
        backToStrategy: "← Back to Strategy",
        narrativeLead: "Field log first: geography and rails—then narrative.",
        narrativeBlocks: [
          {
            label: "WHY AFRICA",
            lines: ["Growth corridors expanding faster than banking coverage.", "Mobile-first: wallets and chat are the default rails."]
          },
          {
            label: "WHY TON",
            lines: ["Telegram-native onboarding layer.", "Fast transfers; community-led activation."]
          },
          {
            label: "WHY NOTCOIN",
            lines: ["Simple entry plus viral distribution in-channel.", "Champions replay the desk playbook locally."]
          },
          {
            label: "DESK MODE",
            lines: ["Chronology over campaigns.", "Infrastructure before narrative pressure."]
          }
        ],
        outcomesLabel: "Key outcomes",
        feedLabel: "FIELD LOG",
        entryLinkLabel: "View details",
        telegramCtaTitle: "Follow updates in Telegram",
        telegramCtaButton: "Open Telegram"
      }
    },
    home: {
      hero: {
        title: "Notcoin Strategy",
        subtitle: "Accumulation. Pressure. Narrative.",
        description: "A disciplined control surface for simulation, treasury visibility, and narrative timing—built for operators who think in phases, not headlines.",
        ctaSimulation: "Launch Simulation",
        ctaWallets: "Open Wallets",
        ctaTelegram: "Enter Telegram",
        ctaDesk: "Visit Desk"
      },
      simulation: {
        title: "Notcoin Simulation",
        body: "Static preview of the operator console. Run the full environment to stress parameters and desk assumptions.",
        launch: "Launch"
      },
      strategy: {
        title: "Strategy Desk",
        label: "Simulation Data",
        totalNcLabel: "TOTAL NC HELD",
        totalNcValue: "10,421,357 NC",
        totalTonLabel: "TOTAL TON SPENT",
        totalTonValue: "16,321 TON",
        activeWalletsLabel: "ACTIVE WALLETS",
        activeWalletsValue: "4",
        phaseLabel: "ACCUMULATION PHASE",
        phaseValue: "Active",
        lastUpdateLabel: "LAST UPDATE",
        lastUpdateValue: "15 hours ago",
        holdLabel: "HOLD PERIOD",
        holdValue: "390 days"
      },
      africaBlock: {
        title: "Notcoin in Africa",
        stats: "Regional liquidity signals and partner desk notes—curated for fast scanning.",
        cta: "Visit Desk"
      },
      telegramBlock: {
        title: "Enter Telegram",
        hint: "Alerts, rollouts, and desk comms in one channel.",
        cta: "Open Telegram"
      },
      aria: {
        simulationStrategy: "Simulation and strategy",
        africaTelegram: "Africa desk and Telegram"
      }
    }
  },
  ru: {
    meta: {
      defaultTitle: "Notcoin Strategy",
      langNav: "Язык"
    },
    pages: {
      wallets: {
        title: "Открытые кошельки",
        subtitle: "Доказательство накопления и публичная видимость казны.",
        totals: {
          ncLabel: "ВСЕГО NC В ХОЛДЕ",
          ncValue: "10 421 357 NC",
          tonLabel: "ВСЕГО ПОТРАЧЕНО TON",
          tonValue: "16 321 TON",
          walletsLabel: "АКТИВНЫЕ КОШЕЛЬКИ",
          walletsValue: "4"
        },
        entries: [
          {
            name: "Notcoin Strategy 1",
            balance: "2 540 000 NC",
            status: "Активно",
            explorer: "Смотреть в TON Explorer"
          },
          {
            name: "Notcoin Strategy 2",
            balance: "2 100 000 NC",
            status: "Активно",
            explorer: "Смотреть в TON Explorer"
          },
          {
            name: "Notcoin Strategy 3",
            balance: "3 781 357 NC",
            status: "Активно",
            explorer: "Смотреть в TON Explorer"
          },
          {
            name: "Notcoin Strategy 4",
            balance: "2 000 000 NC",
            status: "Активно",
            explorer: "Смотреть в TON Explorer"
          }
        ],
        footnote: "Все данные отражают текущее состояние накопления. Ссылки для ончейн-проверки будут добавлены.",
        totalsHeading: "Сводка холда",
        backToStrategy: "← Назад к стратегии"
      },
      africa: {
        title: "Notcoin в Африке",
        subtitle: "Полевое накопление, онбординг и слой расширения сигналов.",
        backToStrategy: "← Назад к стратегии",
        narrativeLead: "Сначала полевой журнал: география и рельсы — потом нарратив.",
        narrativeBlocks: [
          {
            label: "ПОЧЕМУ АФРИКА",
            lines: ["Коридоры роста быстрее банковского покрытия.", "Мобильный первый: кошельки и чаты — базовые рельсы."]
          },
          {
            label: "ПОЧЕМУ TON",
            lines: ["Онбординг в слое Telegram.", "Быстрые переводы; активация через комьюнити."]
          },
          {
            label: "ПОЧЕМУ NOTCOIN",
            lines: ["Простой вход и вирус в канале.", "Локальные лидеры повторяют сценарий деска."]
          },
          {
            label: "РЕЖИМ ДЕСКА",
            lines: ["Хронология важнее кампаний.", "Инфраструктура до нарративного давления."]
          }
        ],
        outcomesLabel: "Ключевые результаты",
        feedLabel: "ПОЛЕВОЙ ЖУРНАЛ",
        entryLinkLabel: "Подробнее",
        telegramCtaTitle: "Следите за обновлениями в Telegram",
        telegramCtaButton: "Открыть Telegram"
      }
    },
    home: {
      hero: {
        title: "Notcoin Strategy",
        subtitle: "Накопление. Давление. Нарратив.",
        description: "Сдержанная панель для симуляции, видимости казны и тайминга нарратива — для тех, кто мыслит фазами, а не заголовками.",
        ctaSimulation: "Запустить симуляцию",
        ctaWallets: "Открыть кошельки",
        ctaTelegram: "Перейти в Telegram",
        ctaDesk: "Открыть деск"
      },
      simulation: {
        title: "Симуляция Notcoin",
        body: "Статический предпросмотр консоли оператора. Полный запуск — для нагрузки параметров и допущений деска.",
        launch: "Запуск"
      },
      strategy: {
        title: "Стратегический деск",
        label: "Данные симуляции",
        totalNcLabel: "ВСЕГО NC В ХОЛДЕ",
        totalNcValue: "10 421 357 NC",
        totalTonLabel: "ВСЕГО ПОТРАЧЕНО TON",
        totalTonValue: "16 321 TON",
        activeWalletsLabel: "АКТИВНЫЕ КОШЕЛЬКИ",
        activeWalletsValue: "4",
        phaseLabel: "ФАЗА НАКОПЛЕНИЯ",
        phaseValue: "Активна",
        lastUpdateLabel: "ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ",
        lastUpdateValue: "15 часов назад",
        holdLabel: "ПЕРИОД ХОЛДА",
        holdValue: "390 дней"
      },
      africaBlock: {
        title: "Notcoin в Африке",
        stats: "Сигналы ликвидности по региону и заметки партнёрского деска — для быстрого обзора.",
        cta: "Открыть деск"
      },
      telegramBlock: {
        title: "Войти в Telegram",
        hint: "Алерты, выкаты и коммуникации деска в одном канале.",
        cta: "Открыть Telegram"
      },
      aria: {
        simulationStrategy: "Симуляция и стратегия",
        africaTelegram: "Африка и Telegram"
      }
    }
  },
  fr: {
    meta: {
      defaultTitle: "Notcoin Strategy",
      langNav: "Langue"
    },
    pages: {
      wallets: {
        title: "Portefeuilles ouverts",
        subtitle: "Preuve d’accumulation et visibilité publique de la trésorerie.",
        totals: {
          ncLabel: "TOTAL NC DÉTENUS",
          ncValue: "10 421 357 NC",
          tonLabel: "TOTAL TON DÉPENSÉS",
          tonValue: "16 321 TON",
          walletsLabel: "PORTEFEUILLES ACTIFS",
          walletsValue: "4"
        },
        entries: [
          {
            name: "Notcoin Strategy 1",
            balance: "2 540 000 NC",
            status: "Actif",
            explorer: "Voir sur TON Explorer"
          },
          {
            name: "Notcoin Strategy 2",
            balance: "2 100 000 NC",
            status: "Actif",
            explorer: "Voir sur TON Explorer"
          },
          {
            name: "Notcoin Strategy 3",
            balance: "3 781 357 NC",
            status: "Actif",
            explorer: "Voir sur TON Explorer"
          },
          {
            name: "Notcoin Strategy 4",
            balance: "2 000 000 NC",
            status: "Actif",
            explorer: "Voir sur TON Explorer"
          }
        ],
        footnote: "Toutes les données reflètent l’état actuel de l’accumulation. Des liens de vérification on-chain seront fournis.",
        totalsHeading: "Synthèse des avoirs",
        backToStrategy: "← Retour à la stratégie"
      },
      africa: {
        title: "Notcoin en Afrique",
        subtitle: "Accumulation terrain, onboarding et couche d’expansion des signaux.",
        backToStrategy: "← Retour à la stratégie",
        narrativeLead: "Journal terrain d’abord : géographie et rails—puis narratif.",
        narrativeBlocks: [
          {
            label: "POURQUOI L’AFRIQUE",
            lines: ["Couloirs qui dépassent la couverture bancaire.", "Mobile-first : portefeuilles et messageries = rails."]
          },
          {
            label: "POURQUOI TON",
            lines: ["Couche d’onboarding native Telegram.", "Transferts rapides ; activation communautaire."]
          },
          {
            label: "POURQUOI NOTCOIN",
            lines: ["Entrée simple + distribution virale in-channel.", "Les relais locaux rejouent le playbook du desk."]
          },
          {
            label: "MODE DESK",
            lines: ["Chronologie avant campagnes.", "Infrastructure avant pression narrative."]
          }
        ],
        outcomesLabel: "Résultats clés",
        feedLabel: "JOURNAL DE TERRAIN",
        entryLinkLabel: "Voir le détail",
        telegramCtaTitle: "Suivre les mises à jour sur Telegram",
        telegramCtaButton: "Ouvrir Telegram"
      }
    },
    home: {
      hero: {
        title: "Notcoin Strategy",
        subtitle: "Accumulation. Pression. Narratif.",
        description: "Une surface de contrôle sobre pour la simulation, la visibilité trésorerie et le timing narratif — pensée pour les opérateurs qui raisonnent par phases.",
        ctaSimulation: "Lancer la simulation",
        ctaWallets: "Ouvrir les portefeuilles",
        ctaTelegram: "Rejoindre Telegram",
        ctaDesk: "Visiter le desk"
      },
      simulation: {
        title: "Simulation Notcoin",
        body: "Aperçu statique de la console opérateur. Lancez l’environnement complet pour tester paramètres et hypothèses du desk.",
        launch: "Lancer"
      },
      strategy: {
        title: "Desk stratégique",
        label: "Données de simulation",
        totalNcLabel: "TOTAL NC DÉTENUS",
        totalNcValue: "10 421 357 NC",
        totalTonLabel: "TOTAL TON DÉPENSÉS",
        totalTonValue: "16 321 TON",
        activeWalletsLabel: "PORTEFEUILLES ACTIFS",
        activeWalletsValue: "4",
        phaseLabel: "PHASE D’ACCUMULATION",
        phaseValue: "Active",
        lastUpdateLabel: "DERNIÈRE MISE À JOUR",
        lastUpdateValue: "Il y a 15 heures",
        holdLabel: "PÉRIODE DE DÉTENTION",
        holdValue: "390 jours"
      },
      africaBlock: {
        title: "Notcoin en Afrique",
        stats: "Signaux de liquidité régionaux et notes partenaires — pour une lecture rapide.",
        cta: "Visiter le desk"
      },
      telegramBlock: {
        title: "Rejoindre Telegram",
        hint: "Alertes, déploiements et communications du desk sur un canal.",
        cta: "Ouvrir Telegram"
      },
      aria: {
        simulationStrategy: "Simulation et stratégie",
        africaTelegram: "Desk Afrique et Telegram"
      }
    }
  }
};

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  const url = Astro2.url;
  const pathname = url.pathname || "/";
  const lang = getLang(url);
  const t = translations[lang];
  const htmlLang = lang === "en" ? "en" : lang === "ru" ? "ru" : "fr";
  const hrefEn = pathname;
  const hrefRu = `${pathname}?lang=ru`;
  const hrefFr = `${pathname}?lang=fr`;
  return renderTemplate`<html${addAttribute(htmlLang, "lang")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="site-shell"> <header class="site-header"> <nav class="lang-switch site-nav"${addAttribute(t.meta.langNav, "aria-label")}> <a${addAttribute(hrefEn, "href")}${addAttribute({ "is-active": lang === "en" }, "class:list")}>EN</a> <span class="lang-sep" aria-hidden="true">|</span> <a${addAttribute(hrefRu, "href")}${addAttribute({ "is-active": lang === "ru" }, "class:list")}>RU</a> <span class="lang-sep" aria-hidden="true">|</span> <a${addAttribute(hrefFr, "href")}${addAttribute({ "is-active": lang === "fr" }, "class:list")}>FR</a> </nav> </header> <main class="site-main"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/notcoin_strat/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, getLang as g, translations as t, withLang as w };
