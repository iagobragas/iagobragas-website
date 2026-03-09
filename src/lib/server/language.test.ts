import { describe, expect, it } from 'vitest';
import { getLanguageCookieOptions, languageFromAcceptLanguage, resolveLanguage } from './language';

describe('languageFromAcceptLanguage', () => {
	it('returns pt for Portuguese Accept-Language', () => {
		expect(languageFromAcceptLanguage('pt-BR,pt;q=0.9,en-US;q=0.8')).toBe('pt');
	});

	it('returns en when header is missing', () => {
		expect(languageFromAcceptLanguage(null)).toBe('en');
	});
});

describe('resolveLanguage', () => {
	it('prioritizes valid language cookie', () => {
		expect(resolveLanguage('en', 'pt-BR,pt;q=0.9')).toBe('en');
		expect(resolveLanguage('pt', 'en-US,en;q=0.9')).toBe('pt');
	});

	it('falls back to Accept-Language when cookie is invalid', () => {
		expect(resolveLanguage('fr', 'pt-BR,pt;q=0.9')).toBe('pt');
		expect(resolveLanguage(undefined, 'en-US,en;q=0.9')).toBe('en');
	});
});

describe('getLanguageCookieOptions', () => {
	it('returns secure cookie settings when running on HTTPS', () => {
		const options = getLanguageCookieOptions(true);
		expect(options.secure).toBe(true);
		expect(options.httpOnly).toBe(true);
		expect(options.sameSite).toBe('lax');
		expect(options.path).toBe('/');
	});

	it('returns non-secure cookie settings for local HTTP', () => {
		const options = getLanguageCookieOptions(false);
		expect(options.secure).toBe(false);
	});
});
