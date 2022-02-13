<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import Search from '$lib/components/Search.svelte';

	import type { ArticleMetadata } from '$lib/types';

	export let metadatas: ArticleMetadata[];
	let searchValue = '';

	$: filteredMetadatas = !searchValue.trim()
		? metadatas
		: metadatas.filter(
				(metadata) => metadata.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
		  );
</script>

<div class="wrapper">
	<div class="search">
		<Search
			value={searchValue}
			placeholder="Найти..."
			on:search={({ detail }) => (searchValue = detail)}
		/>
	</div>
	<div class="list">
		{#if !metadatas.length}
			<div class="no_posts">Пока нет статей :-(</div>
		{/if}
		{#if metadatas.length && !filteredMetadatas.length}
			<div class="no_posts">По вашему запросу нет совпадений :-(</div>
		{/if}
		{#each filteredMetadatas as metadata}
			<a href={metadata.url} class="post_card">
				<PostCard {metadata} />
			</a>
		{/each}
	</div>
</div>

<style>
	.search {
		margin-bottom: 20px;
	}

	.no_posts {
		margin: 10px 0;
		text-align: center;
	}
</style>
