<script lang="ts">
	import ChipList from '$lib/components/ChipList.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextCard from '$lib/components/TextCard.svelte';
</script>

<h1>Yamux</h1>

<div class="description">Неофициальный десктопный клиент Яндекс.Музыки</div>

<div class="about">
	<ChipList list={[['Стэк', 'rust, svelte']]} />

	<div class="advantages">
		<TextCard
			title="Поддержка медиа клавиш"
			description="управляй медиа кнопками, тачбаром или AirPods"
		/>
		<TextCard title="Легковесный" description="Готовое приложение весит чуть больше 4мб" />
	</div>
</div>

<div class="download">
	<Link newtab like="button" url="https://github.com/freethinkel/yamux/releases" external
		>Скачать</Link
	>
</div>

<img class="banner" src="/apps/yamux__macos.png" alt="" />

<style>
	.download {
		margin-top: 10px;
	}
	.description {
		margin-top: 8px;
		margin-bottom: 24px;
	}

	.banner {
		width: 100%;
		margin: 24px 0;
		border-radius: var(--border-radius);
	}

	.advantages {
		margin-top: 24px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	}
</style>
