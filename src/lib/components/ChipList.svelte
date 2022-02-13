<script lang="ts">
	export let list: string[][] = [];
</script>

<ul>
	{#each list as item}
		<li>
			<span>{item[0]}</span>
			<span>{item[1]}</span>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
	}
	li span {
		font-size: 1rem;
		line-height: 1.5em;
	}
	li span:first-of-type {
		background-color: var(--base-accent12);
		color: var(--base-accent);
		padding: 2px 4px;
		border-radius: 3px;
		margin-right: 6px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.8rem;
		display: inline-block;
	}
</style>
