<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	:global(#svelte) {
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	main {
		flex-grow: 1;
	}
</style>
