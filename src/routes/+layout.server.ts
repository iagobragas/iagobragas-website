import type { LayoutServerLoad } from './$types';
import { isLanguage, type Language } from '$lib/data/resume';

function languageFromHeader(acceptLanguage: string | null): Language {
	if (!acceptLanguage) return 'en';

	return acceptLanguage.toLowerCase().includes('pt') ? 'pt' : 'en';
}

export const load: LayoutServerLoad = ({ cookies, request }) => {
	const cookieLanguage = cookies.get('language');
	const language = isLanguage(cookieLanguage)
		? cookieLanguage
		: languageFromHeader(request.headers.get('accept-language'));

	return { language };
};
