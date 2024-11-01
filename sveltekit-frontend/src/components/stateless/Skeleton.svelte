<script lang="ts">
	export let loading: boolean;
	export let type:
		| 'avatar'
		| 'text-line'
		| 'short-text'
		| 'long-text'
		| 'heading'
		| 'big-heading'
		| 'image' = 'avatar';
</script>

{#if loading}
	<div class="skeleton big-heading" />
{/if}
{#if !loading}
	<slot />
{/if}

<style>
	.skeleton.big-heading {
		height: 4rem;
		width: 30rem;
		border-radius: 0.5rem;
		background-color: #ededed;
		background: linear-gradient(
				100deg,
				rgba(255, 255, 255, 0) 40%,
				rgba(255, 255, 255, 0.5) 50%,
				rgba(255, 255, 255, 0) 60%
			)
			#ededed;

		background-size: 200% 100%;
		background-position-x: 180%;
		animation: 2s loading ease-in-out infinite;
	}

	@keyframes loading {
		to {
			background-position-x: -20%;
		}
	}
</style>
