<script lang="ts">
	import type { ArticleMetadata } from '$lib/types';

	export let metadata: ArticleMetadata;
</script>

<div class="wrapper">
	<h3 class="title">{metadata.title}</h3>

	<p class="description">
		{metadata.preview}
	</p>
	<div class="bottom">
		<div class="created_date">
			{new Intl.DateTimeFormat('ri').format(new Date(metadata.date))}
		</div>
	</div>
</div>

<style>
	.wrapper {
		background: var(--base-panel);
		border-radius: var(--border-radius);
		padding: 20px;
	}
	.title {
		margin-bottom: 10px;
		font-size: 1.8rem;
	}
	.description {
		margin-bottom: 10px;
		font-size: 1.1rem;
	}

	.bottom {
		font-weight: 100;
	}
</style>
