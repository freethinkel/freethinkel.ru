<script lang="ts">
	import linkIcon from '../icons/link.svg';
	export let external: boolean = false;
	export let newtab: boolean = false;
	export let url: string;
	export let like: 'button' | 'link' = 'link';
</script>

<a href={url} class:button={like === 'button'} target={newtab ? '_blank' : null}>
	<slot />

	{#if external}
		<img class="external-icon" src={linkIcon} alt="Link icon" />
	{/if}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		color: var(--base-title);
		opacity: 0.9;
		transition: var(--base-transition);
	}
	a:hover {
		opacity: 1;
	}
	a.button {
		height: 32px;
		border-radius: var(--border-radius);
		background-color: var(--base-panel);
		padding: 0 12px;
	}
	.external-icon {
		margin-left: 4px;
		filter: invert(1);
		height: 18px;
	}
</style>
