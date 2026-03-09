import type { LayoutServerLoad } from './$types';
import { resolveLanguage } from '$lib/server/language';

export const load: LayoutServerLoad = ({ cookies, request }) => {
	const language = resolveLanguage(cookies.get('language'), request.headers.get('accept-language'));

	return { language };
};
