<script lang="ts">
	import { getResumeContext } from '$lib/data/resume-context';

	const { language, messages } = getResumeContext();
	let isSaving = false;

	async function handleToggleLanguage() {
		if (isSaving) return;
		isSaving = true;

		const previousLanguage = $language;
		const nextLanguage = previousLanguage === 'en' ? 'pt' : 'en';

		// Optimistic UI update while persisting the preference server-side.
		language.set(nextLanguage);

		try {
			const response = await fetch('/api/language', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ language: nextLanguage })
			});

			if (!response.ok) {
				language.set(previousLanguage);
			}
		} catch {
			language.set(previousLanguage);
		} finally {
			isSaving = false;
		}
	}
</script>

<button
	on:click={handleToggleLanguage}
	aria-label={$messages.toggleLanguageAria}
	aria-busy={isSaving}
	disabled={isSaving}
	class="flex size-12 items-center justify-center rounded-full text-xs font-semibold transition-colors hover:bg-muted"
>
	{$language.toUpperCase()}
</button>
