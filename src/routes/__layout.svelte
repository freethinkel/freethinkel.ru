<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/HOC/Sidebar.svelte';
</script>

<svelte:head>
	<title>freethinkel</title>
</svelte:head>

<Header />
<div class="layout__wrapper">
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
</div>

<style>
	:global(#svelte) {
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	main {
		flex-grow: 1;
		width: 0;
	}

	.layout {
		display: flex;
	}
	@media screen and (max-width: 680px) {
		main {
			margin-top: 24px;
			width: auto;
		}
		.layout {
			flex-direction: column;
		}
	}
	.layout__wrapper {
		flex-grow: 1;
	}
</style>
