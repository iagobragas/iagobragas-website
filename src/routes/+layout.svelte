<script lang="ts">
	import { browser } from '$app/environment';
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import { createResumeI18n, type Language } from '$lib/data/resume';
	import { setResumeContext } from '$lib/data/resume-context';
	import '../app.css';
	import { ModeWatcher, setMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	export let data: { language: Language };

	const resumeI18n = createResumeI18n(data.language);
	const { language } = resumeI18n;
	setResumeContext(resumeI18n);

	$: if (browser) {
		document.cookie = `language=${$language}; Path=/; Max-Age=31536000; SameSite=Lax`;
	}

	onMount(() => {
		if (!$mode) setMode('dark');
	});
</script>

<ModeWatcher />
<div
	class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24"
>
	<slot />
	<Navbar />
</div>
