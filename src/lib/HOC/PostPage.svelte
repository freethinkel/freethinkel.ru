<script lang="ts">
	import MarkdownPreview from '$lib/components/MarkdownPreview/MarkdownPreview.svelte';

	              import type { Article } from '$lib/types';

	export let article: Article;
</script>

<div class="wrapper">
	<div class="post_info">
		<h1>{article.metadata.title}</h1>
		{article.metadata.date}
	</div>

	<div class="content">
		<MarkdownPreview html={article.content} />
	</div>
</div>

<style>
	.post_info {
		margin-bottom: 24px;
	}
</style>
