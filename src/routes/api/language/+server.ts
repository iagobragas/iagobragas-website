import { isLanguage } from '$lib/data/resume';
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

	cookies.set('language', language, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax',
		httpOnly: true,
		secure: url.protocol === 'https:'
	});

	return new Response(null, { status: 204 });
};
