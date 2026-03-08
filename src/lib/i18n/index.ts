import type { Language } from '$lib/data/resume';
import type { Messages } from './types';
import { MESSAGES_EN } from './en';
import { MESSAGES_PT } from './pt';

const MESSAGES_BY_LANGUAGE: Record<Language, Messages> = {
	en: MESSAGES_EN,
	pt: MESSAGES_PT
};

export function getMessagesByLanguage(language: Language): Messages {
	return MESSAGES_BY_LANGUAGE[language];
}
