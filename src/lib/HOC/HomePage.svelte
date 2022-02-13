<script lang="ts">
	import type { ArticleMetadata } from '$lib/types';

	import PostsList from './PostsList.svelte';

	export let metadatas: ArticleMetadata[] = [];
</script>

<PostsList {metadatas} />
