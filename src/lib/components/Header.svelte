<header>
	<div class="container">
		<a href="/" class="logo"> freethinkel </a>

		<nav class="menu">
			<ul>
				<li>
					<a href="/apps">Приложения</a>
				</li>
				<li>
					<a href="/about">Обо мне</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
`

<style>
	.logo {
		font-size: 32px;
		font-weight: bold;
		color: var(--accent-color);
		text-decoration: none;
	}

	header {
		padding: 10px 0;
		border-bottom: 1px solid var(--box-color12);
		background-color: var(--invert-box-color);
	}

	.menu ul {
		list-style: none;
		display: flex;
		gap: 16px;
	}

	.menu ul li a {
		color: var(--text-color);
		font-size: 1.1rem;
		text-decoration-color: var(--accent-color);
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
