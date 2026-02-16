import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export function renderMarkdownSafe(md: string) {
	const html = marked.parse(md ?? '') as string;
	return DOMPurify.sanitize(html);
}
