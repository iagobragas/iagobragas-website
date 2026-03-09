<script lang="ts">
	import { getResumeContext } from '$lib/data/resume-context';

	const { language, messages } = getResumeContext();

	async function handleToggleLanguage() {
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
		}
	}
</script>

<button
	on:click={handleToggleLanguage}
	aria-label={$messages.toggleLanguageAria}
	class="flex size-12 items-center justify-center rounded-full text-xs font-semibold transition-colors hover:bg-muted"
>
	{$language.toUpperCase()}
</button>
