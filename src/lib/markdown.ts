import { marked } from 'marked';
import { browser } from '$app/environment';
import type DOMPurifyType from 'dompurify';

export async function renderMarkdownSafe(md: string) {
	const html = marked.parse(md ?? '') as string;

	if (!browser) return html;

	const mod = await import('dompurify');
	const DOMPurify = (mod.default ?? mod) as typeof DOMPurifyType;
	return DOMPurify.sanitize(html);
}
