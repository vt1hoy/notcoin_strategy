export type Lang = 'en' | 'ru' | 'fr';

export function getLang(url: URL): Lang {
	const param = url.searchParams.get('lang');
	if (param === 'ru') return 'ru';
	if (param === 'fr') return 'fr';
	return 'en';
}

/** Preserve language in internal links; English uses clean paths. */
export function withLang(path: string, lang: Lang): string {
	if (lang === 'en') return path;
	const sep = path.includes('?') ? '&' : '?';
	return `${path}${sep}lang=${lang}`;
}
