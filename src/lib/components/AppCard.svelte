<script lang="ts">
	export let name: string;
	export let icon: string;
	export let description: string = '';
	export let link: string;
</script>

<a class="wrapper" href={link}>
	<img src={icon} alt={name} class="app-icon" />
	<div class="content">
		<h4>{name}</h4>
		<p>{description}</p>
	</div>
</a>

<style>
	.app-icon {
		height: 200px;
		width: 100%;
		object-fit: cover;
		object-position: top center;
	}
	.image {
		border-radius: var(--border-radius);
		object-fit: cover;
		object-position: center;
		overflow: hidden;
	}

	.content {
		margin-top: 10px;
	}

	.wrapper {
		border-radius: var(--border-radius);
		background-color: var(--base-panel);
		box-shadow: var(--base-above);
		padding: 12px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	h4 {
		margin: 0;
		font-size: 1.4rem;
		font-weight: 100;
	}

	p {
		font-size: 0.9rem;
		color: var(--text-color80);
		margin: 6px 0;
	}
</style>
