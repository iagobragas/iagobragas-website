import { getContext, setContext } from 'svelte';
import type { ResumeI18n } from './resume';

const RESUME_CONTEXT_KEY = Symbol('resume-i18n-context');

export function setResumeContext(value: ResumeI18n) {
	setContext(RESUME_CONTEXT_KEY, value);
}

export function getResumeContext(): ResumeI18n {
	return getContext<ResumeI18n>(RESUME_CONTEXT_KEY);
}
