import { marked } from 'marked';
import { browser } from '$app/environment';
import type { default as DOMPurifyType } from 'dompurify';

let DOMPurify: typeof DOMPurifyType | null = null;

if (browser) {
	import('dompurify').then((mod) => {
		DOMPurify = (mod.default ?? mod) as typeof DOMPurifyType;
	});
}

export function renderMarkdownSafe(md: string): string {
	const html = marked.parse(md ?? '') as string;

	if (!browser) return html;

	return DOMPurify ? DOMPurify.sanitize(html) : html;
}
