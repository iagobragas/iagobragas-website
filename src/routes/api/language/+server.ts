import { isLanguage } from '$lib/data/resume';
import { getLanguageCookieOptions } from '$lib/server/language';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies, url }) => {
	let payload: unknown;

	try {
		payload = await request.json();
	} catch {
		return new Response('Invalid JSON body', { status: 400 });
	}

	const language = (payload as { language?: string })?.language;

	if (!isLanguage(language)) {
		return new Response('Invalid language', { status: 400 });
	}

	cookies.set('language', language, getLanguageCookieOptions(url.protocol === 'https:'));

	return new Response(null, { status: 204 });
};
