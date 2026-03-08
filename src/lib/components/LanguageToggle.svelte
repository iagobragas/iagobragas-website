<script lang="ts">
	import { getResumeContext } from '$lib/data/resume-context';

	const { language, toggleLanguage, messages } = getResumeContext();
</script>

<button
	on:click={toggleLanguage}
	aria-label={$messages.toggleLanguageAria}
	class="flex size-12 items-center justify-center rounded-full text-xs font-semibold transition-colors hover:bg-muted"
>
	{$language.toUpperCase()}
</button>
