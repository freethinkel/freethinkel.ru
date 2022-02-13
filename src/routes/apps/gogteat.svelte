<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import ChipList from '$lib/components/ChipList.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<h1>Gogteat</h1>

<div class="description">Быстрое и легкое приложение для создания заметок Markdown.</div>

<div class="about">
	<ChipList list={[['Стэк', 'rust, svelte, vanilla css']]} />
</div>

<div class="download">
	<!-- <Button>Скачать</Button> -->
	<Link newtab like="button" url="https://github.com/freethinkel/gogteat/releases" external
		>Скачать</Link
	>
</div>

<img class="banner" src="/apps/gogteat__macos.png" alt="" />

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
</style>
