import { isLanguage, type Language } from '$lib/data/resume';

export function languageFromAcceptLanguage(acceptLanguage: string | null): Language {
	if (!acceptLanguage) return 'en';
	return acceptLanguage.toLowerCase().includes('pt') ? 'pt' : 'en';
}

export function resolveLanguage(
	cookieLanguage: string | null | undefined,
	acceptLanguage: string | null
): Language {
	return isLanguage(cookieLanguage) ? cookieLanguage : languageFromAcceptLanguage(acceptLanguage);
}

export function getLanguageCookieOptions(isSecure: boolean) {
	return {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax' as const,
		httpOnly: true,
		secure: isSecure
	};
}
