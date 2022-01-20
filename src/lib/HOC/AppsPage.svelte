<script lang="ts">
	import AppCard from '$lib/components/AppCard.svelte';
</script>

<div class="page">
	<div class="container">
		<h1>Приложения</h1>

		<div class="apps-list">
			<a href="/">
				<AppCard name="Gogteat" description="Простой, лаконичный редактор markdown" />
			</a>
			<a href="/">
				<AppCard name="Gogteat" description="Простой, лаконичный редактор markdown" />
			</a>
			<a href="/">
				<AppCard name="Gogteat" description="Простой, лаконичный редактор markdown" />
			</a>
			<a href="/">
				<AppCard name="Gogteat" description="Простой, лаконичный редактор markdown" />
			</a>
		</div>
	</div>
</div>

<style>
	.apps-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 12px;
		margin-top: 24px;
	}
	.apps-list a {
		color: inherit;
		text-decoration: none;
	}
</style>
