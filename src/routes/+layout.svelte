<script lang="ts">
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import '../app.css';
	import { ModeWatcher, setMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';

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
