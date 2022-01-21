<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/HOC/Sidebar.svelte';
</script>

<Header />
<div class="container">
	<div class="layout">
		<div class="sidebar">
			<Sidebar />
		</div>
		<main>
			<slot />
		</main>
	</div>
</div>

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

	.layout {
		display: flex;
	}
</style>
