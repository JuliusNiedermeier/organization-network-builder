<div class="container">
	<nav class="navigation"><slot name="navigation" /></nav>
	<aside class="sidebar"><slot name="sidebar" /></aside>
	<main class="main"><slot name="main" /></main>
</div>

<style>
	.container {
		display: grid;
		grid-template-areas: 'navigation navigation' 'main sidebar';
		grid-template-columns: 2fr 1fr;
		grid-template-rows: min-content auto;
		width: 100vw;
		height: 100vh;
	}

	.navigation {
		grid-area: navigation;
		border-bottom: 1px solid lightgray;
		padding: 0.5rem 2rem;
	}

	.sidebar {
		grid-area: sidebar;
		border-left: 1px solid lightgray;
	}

	.main {
		grid-area: main;
		overflow: auto;
	}
</style>
