<script lang="ts" context="module">
	export async function load({ fetch }) {
		const metadatas = await fetch(`/articles/previews.json`).then((r) => r.json());
		return {
			props: { metadatas }
		};
	}
</script>

<script lang="ts">
	import type { ArticleMetadata } from '$lib/types';
	import HomePage from '$lib/HOC/HomePage.svelte';

	export let metadatas: ArticleMetadata[];
</script>

<HomePage {metadatas} />
