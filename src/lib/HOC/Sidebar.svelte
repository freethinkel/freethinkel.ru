<script lang="ts">
	import { page } from '$app/stores';

	import Avatar from '$lib/components/Avatar.svelte';

	const links = [
		{
			text: 'Приложения',
			url: '/apps'
		},
		{
			text: 'Статьи',
			url: '/'
		},
		{
			text: 'Twitter',
			url: 'https://twitter.com/freethinkell',
			isNewTab: true
		}
	];

	$: currentPage = $page.url.pathname;
</script>

<aside class="wrapper">
	<div class="avatar">
		<Avatar url="/my-avatar.jpg" />
	</div>
	<h1 class="name">Колесников Егор</h1>
	<b class="nickname">@freethinkel</b>

	<hr />

	<nav>
		<ul>
			{#each links as link}
				<li>
					<a
						target={link.isNewTab ? '_blank' : null}
						class:link__active={currentPage === link.url}
						href={link.url}>{link.text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	.wrapper {
		padding-right: 24px;
		min-width: 300px;
		max-width: 340px;
	}
	.avatar {
		width: 130px;
		height: 130px;
		margin-bottom: 15px;
	}
	.name {
		line-height: 1.4em;
	}
	.nickname {
		font-size: 1.2rem;
		line-height: 1.4em;
	}
	.description {
		color: var(--base-title);
		font-size: 0.9rem;
		line-height: 1.5em;
		padding: 15px 0;
	}
	.link__active {
		color: var(--base-title);
		font-weight: 600;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	ul li {
		display: flex;
	}
	nav ul li a {
		padding: 8px 0;
	}
</style>
