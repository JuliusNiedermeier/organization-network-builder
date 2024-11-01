<script lang="ts">
	export let src: string;
	export let name: string;
</script>

<div class="container"><img {src} alt={name} /></div>

<style>
	.container {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		cursor: pointer;
		transition: box-shadow 100ms ease;
		overflow: hidden;
	}

	.container > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.container:hover {
		box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.1);
	}

	.container:active {
		box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.2);
	}
</style>
