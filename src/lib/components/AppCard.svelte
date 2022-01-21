<script lang="ts">
	export let name: string;
	export let description: string;
</script>

<div class="wrapper">
	<img src="" alt={name} class="image" />
	<h4>{name}</h4>
	<p>{description}</p>
</div>

<style>
	.image {
		border-radius: var(--border-radius);
		object-fit: cover;
		object-position: center;
		overflow: hidden;
	}

	.wrapper {
		border-radius: var(--border-radius);
		background-color: var(--base-panel);
		box-shadow: var(--base-above);
		padding: 12px;
	}
	h4 {
		margin: 12px 0 0;
	}

	p {
		font-size: 0.9rem;
		color: var(--text-color80);
		margin: 6px 0;
	}
</style>
