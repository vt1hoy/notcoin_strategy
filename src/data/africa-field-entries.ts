import type { SiteLocale } from '../i18n/locale-routes';

export type AfricaFieldEntry = {
	title: string;
	description: string;
	outcomes?: string[];
	location: string;
	date: string;
	status: string;
	image: string;
	link: string;
};

export const africaFieldEntries: Record<SiteLocale, AfricaFieldEntry[]> = {
	en: [
		{
			title: 'Bamako — Initial Desk Activation',
			description:
				'~30-person session: TON basics, wallets, and Notcoin entry paths—aligned to the desk playbook.',
			outcomes: ['Onboarding started', 'First wallets live', 'Demand signal OK'],
			location: 'Bamako',
			date: '2026-02-14',
			status: 'Active',
			image: '/africa-field-placeholder.svg',
			link: 'https://example_ton_explorer/',
		},
		{
			title: 'Accra — Channel reconnaissance',
			description: 'Two entry routes mapped; partner comms guardrails locked before any public push.',
			outcomes: ['Routes documented', 'Comms rules agreed'],
			location: 'Accra',
			date: '2026-03-02',
			status: 'Monitoring',
			image: '/africa-field-placeholder.svg',
			link: 'https://example_ton_explorer/',
		},
	],
	ru: [
		{
			title: 'Бамако — первичная активация деска',
			description:
				'Сессия ~30 чел.: TON, кошельки, точки входа Notcoin — по регламенту деска.',
			outcomes: ['Онбординг запущен', 'Первые кошельки', 'Сигнал спроса ОК'],
			location: 'Бамако',
			date: '2026-02-14',
			status: 'Активно',
			image: '/africa-field-placeholder.svg',
			link: 'https://example_ton_explorer/',
		},
		{
			title: 'Аккра — разведка каналов',
			description: 'Два маршрута входа зафиксированы; правила коммуникаций с партнёрами согласованы.',
			outcomes: ['Маршруты в журнале', 'Правила зафиксированы'],
			location: 'Аккра',
			date: '2026-03-02',
			status: 'Наблюдение',
			image: '/africa-field-placeholder.svg',
			link: 'https://example_ton_explorer/',
		},
	],
	fr: [
		{
			title: 'Bamako — Activation initiale du desk',
			description:
				'Session ~30 pers. : TON, portefeuilles, points d’entrée Notcoin — alignés playbook desk.',
			outcomes: ['Onboarding lancé', 'Premiers wallets', 'Signal demande OK'],
			location: 'Bamako',
			date: '2026-02-14',
			status: 'Actif',
			image: '/africa-field-placeholder.svg',
			link: 'https://example_ton_explorer/',
		},
		{
			title: 'Accra — Reconnaissance des canaux',
			description: 'Deux voies d’entrée cartographiées; garde-fous com partenaires validés avant push public.',
			outcomes: ['Voies consignées', 'Règles com OK'],
			location: 'Accra',
			date: '2026-03-02',
			status: 'Surveillance',
			image: '/africa-field-placeholder.svg',
			link: 'https://example_ton_explorer/',
		},
	],
};

export function getAfricaFieldEntries(lang: SiteLocale): AfricaFieldEntry[] {
	return africaFieldEntries[lang];
}
