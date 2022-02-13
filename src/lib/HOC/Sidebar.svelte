<script lang="ts">
	import { page } from '$app/stores';

	import Avatar from '$lib/components/Avatar.svelte';

	const links = [
		{
			text: 'Статьи',
			url: '/',
			isActive: (path: string) => path.indexOf('/articles') >= 0
		},
		{
			text: 'Приложения',
			url: '/apps',
			isActive: (path: string) => path.indexOf('/apps') >= 0
		},
		{ text: 'Twitter', url: 'https://twitter.com/freethinkell', isNewTab: true }
	];

	$: currentPage = $page.url.pathname;
</script>

<aside class="wrapper">
	<div class="top__content">
		<div class="avatar">
			<Avatar url="/my-avatar.jpg" />
		</div>
		<div class="about">
			<h1 class="name">Колесников Егор</h1>
			<b class="nickname">@freethinkel</b>
		</div>
	</div>

	<nav>
		<ul>
			{#each links as link}
				<li>
					<a
						target={link.isNewTab ? '_blank' : null}
						class:link__active={(link.isActive && link.isActive(currentPage)) ||
							currentPage === link.url}
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
	.top__content {
		margin-bottom: 20px;
	}
	.name {
		line-height: 1.4em;
	}
	.nickname {
		font-size: 1.2rem;
		line-height: 1.4em;
	}

	.link__active {
		color: var(--base-title);
		font-weight: 600;
	}
	nav {
		border-top: 1px solid var(--base-border);
		padding: 10px 0;
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

	@media screen and (max-width: 680px) {
		.avatar {
			width: 100px;
			height: 100px;
		}
		.top__content {
			display: flex;
			align-items: flex-end;
			flex-direction: row-reverse;
			justify-content: space-between;
		}
		.wrapper {
			width: 100%;
			max-width: 100%;
			padding: 0;
		}
		nav {
			border-bottom: 1px solid var(--base-border);
		}
		ul {
			display: flex;
			gap: 12px;
		}
	}
</style>
