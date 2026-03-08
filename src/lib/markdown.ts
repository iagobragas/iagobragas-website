import { Marked } from 'marked';

const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);

function isSafeHref(href: string): boolean {
	const value = href.trim();
	if (!value) return false;
	if (value.startsWith('#')) return true;
	if (value.startsWith('/')) return true;
	if (value.startsWith('./') || value.startsWith('../')) return true;
	if (value.startsWith('//')) return true;

	try {
		const url = new URL(value);
		return SAFE_PROTOCOLS.has(url.protocol);
	} catch {
		return false;
	}
}

const markdown = new Marked({ gfm: true, breaks: false });

markdown.use({
	walkTokens(token) {
		if (token.type === 'link' && !isSafeHref(token.href ?? '')) {
			token.href = '#';
		}

		if (token.type === 'image' && !isSafeHref(token.href ?? '')) {
			token.href = '';
		}
	}
});

export function renderMarkdownSafe(md: string): string {
	// Escape raw HTML so markdown content cannot inject arbitrary tags/scripts.
	const escaped = (md ?? '').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
	return markdown.parse(escaped) as string;
}
