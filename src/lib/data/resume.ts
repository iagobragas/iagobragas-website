import { writable, derived } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';
import { getMessagesByLanguage } from '$lib/i18n';
import type { Messages } from '$lib/i18n/types';

import { DATA as DATA_EN } from './resume.en';
import { DATA as DATA_PT } from './resume.pt';

export type Language = 'en' | 'pt';

const RESUMES = {
	en: DATA_EN,
	pt: DATA_PT
} satisfies Record<Language, typeof DATA_EN>;

export type ResumeData = (typeof RESUMES)[Language];

export function isLanguage(value: string | null | undefined): value is Language {
	return value === 'en' || value === 'pt';
}

export function getResumeByLanguage(language: Language): ResumeData {
	return RESUMES[language];
}

export type ResumeI18n = {
	language: Writable<Language>;
	DATA: Readable<ResumeData>;
	messages: Readable<Messages>;
	setLanguage: (language: Language) => void;
	toggleLanguage: () => void;
};

export function createResumeI18n(initialLanguage: Language): ResumeI18n {
	const language = writable<Language>(initialLanguage);
	const DATA = derived(language, ($language) => RESUMES[$language]);
	const messages = derived(language, ($language) => getMessagesByLanguage($language));

	return {
		language,
		DATA,
		messages,
		setLanguage: (lang) => language.set(lang),
		toggleLanguage: () => language.update((lang) => (lang === 'en' ? 'pt' : 'en'))
	};
}
