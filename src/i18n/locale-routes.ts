/** Static locale prefixes: /, /ru/*, /fr/* — no query params. */
export type SiteLocale = 'en' | 'ru' | 'fr';

/** Strip /ru or /fr prefix so we get canonical path: /, /wallets, /africa */
export function stripLocalePrefix(pathname: string): string {
	const p = (pathname || '/').replace(/\/$/, '') || '/';
	if (p === '/ru' || p === '/fr') return '/';
	if (p.startsWith('/ru/')) return p.slice(3) || '/';
	if (p.startsWith('/fr/')) return p.slice(3) || '/';
	return p;
}

/** Build localized URL from canonical path. */
export function localizedPath(canonical: string, locale: SiteLocale): string {
	const c = canonical === '' ? '/' : canonical.startsWith('/') ? canonical : `/${canonical}`;
	if (locale === 'en') return c === '//' ? '/' : c;
	if (c === '/') return `/${locale}`;
	return `/${locale}${c}`;
}

/** Active locale from URL pathname. */
export function localeFromPathname(pathname: string): SiteLocale {
	const p = pathname || '/';
	if (p === '/ru' || p.startsWith('/ru/')) return 'ru';
	if (p === '/fr' || p.startsWith('/fr/')) return 'fr';
	return 'en';
}

/** Language switcher target for current page. */
export function switcherHref(pathname: string, target: SiteLocale): string {
	return localizedPath(stripLocalePrefix(pathname), target);
}
