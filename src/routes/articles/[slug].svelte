<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({ params, fetch }: LoadInput) {
		const slug = params.slug;
		const res = await fetch(`/articles/${slug}.json`);
		if (res.status !== 200) {
			return {
				props: {
					notFound: true
				}
			};
		}

		const article = await res.json();
		return {
			props: { article }
		};
	}
</script>

<script lang="ts">
	import type { Article } from '$lib/types';
	import PostPage from '$lib/HOC/PostPage.svelte';

	export let notFound = false;
	export let article: Article;
</script>

{#if notFound}
	<h4 class="not_found">Статья не найдена</h4>
{:else}
	<PostPage {article} />
{/if}

<style>
	.not_found {
		text-align: center;
		color: var(--base-text);
		margin: 10px 0;
		font-size: 1.5rem;
	}
</style>
