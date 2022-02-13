<script>
	import AppCard from '$lib/components/AppCard.svelte';
</script>

<div class="page">
	<h1>Apps</h1>

	<div class="apps-list">
		<AppCard
			name="Gogteat"
			description="Markdown редактор"
			icon="/apps/gogteat__macos.png"
			link="/apps/gogteat"
		/>
		<AppCard
			name="Yamux"
			description="Неофициальный клиент Яндекс музыки"
			icon="/apps/yamux__macos.png"
			link="/apps/yamux"
		/>
	</div>
	<!-- <div class="no_content">Пока не выложил</div> -->
</div>

<style>
	.apps-list {
		display: grid;
		grid-gap: 12px;
		margin-top: 24px;
	}
	.apps-list a {
		color: inherit;
		text-decoration: none;
	}

	.no_content {
		text-align: center;
		color: var(--base-text);
		margin: 10px 0;
		font-size: 1.5rem;
	}
</style>
