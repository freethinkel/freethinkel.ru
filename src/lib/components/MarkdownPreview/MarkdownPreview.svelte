<script lang="ts">
	import './preview.postcss';
	export let html: string;
</script>

<div class="wrapper preview markdown-body">
	{@html html}
</div>

<style>
	.wrapper {
		overflow: auto;
		height: 100%;
	}
	.preview {
		background-color: transparent;
	}
</style>
