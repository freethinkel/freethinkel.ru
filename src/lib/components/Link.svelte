<script lang="ts">
	export let url = '';
</script>

<a href={url}>
	<slot />
</a>

<style>
	a {
		color: var(--base-text);
	}
	a:hover {
		color: var(--base-title);
	}
</style>
