<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import searchIcon from '../icons/search.svg';

	export let placeholder: string = '';
	export let value: string = '';

	const dispatch = createEventDispatcher();

	const onChange = (e) => {
		dispatch('search', e.target.value);
	};
</script>

<label>
	<img src={searchIcon} alt="Search icon" />
	<input {value} type="search" {placeholder} on:change={onChange} />
</label>

<style>
	label {
		display: flex;
		height: 32px;
		align-items: center;
	}

	@media (prefers-color-scheme: dark) {
		label img {
			filter: invert(1);
		}
	}

	label img {
		width: 18px;
		height: 18px;
		margin-right: 6px;
	}

	input {
		appearance: none;
		border: none;
		background: none;
		outline: none;
		width: 100%;
	}
</style>
