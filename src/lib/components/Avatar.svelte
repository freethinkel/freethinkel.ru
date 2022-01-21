<script lang="ts">
	export let url = '';
	export let description = '';
</script>

<div class="wrapper">
	<img src={url} alt={description} />
</div>

<style>
	.wrapper {
		border-radius: 50%;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
</style>
