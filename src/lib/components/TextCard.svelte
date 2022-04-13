<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="wrapper">
	<div class="title">
		{title}
	</div>
	<p class="description">
		{description}
	</p>
</div>

<style>
	.wrapper {
		padding: 4px;
	}
	.title {
		color: var(--base-title);
		font-size: 1.2rem;
	}

	.description {
		color: var(--base-text);
		font-size: 1rem;
		margin-top: 4px;
	}
</style>
