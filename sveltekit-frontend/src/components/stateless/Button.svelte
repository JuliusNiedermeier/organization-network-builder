<script lang="ts">
	import Icon, { type IconProps } from '$src/components/stateless/Icon.svelte';

	export let label: string;
	export let variant: 'contained' | 'outlined' | 'text' = 'text';
	export let type: 'default' | 'warn' = 'default';
	export let onClick: () => any = () => {};
	export let leadingIcon: IconProps | null = null;
	export let trailingIcon: IconProps | null = null;
	export let disabled: boolean = false;
	export let fullwidth: boolean = false;
</script>

<button
	class="button"
	class:button--contained={variant == 'contained'}
	class:button--outlined={variant == 'outlined'}
	class:button--warn={type == 'warn'}
	class:fullwidth
	on:click={onClick}
	{disabled}
>
	{#if leadingIcon}
		<span class="leading-icon">
			<Icon prefix={leadingIcon.prefix} name={leadingIcon.name} />
		</span>
	{/if}
	{label}
	{#if trailingIcon}
		<span class="trailing-icon"
			><Icon prefix={trailingIcon.prefix} name={trailingIcon.name} />
		</span>
	{/if}
</button>

<style>
	.button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: transparent;
		color: blue;
		font-size: 1rem;
		transition: background-color 100ms ease;
		cursor: pointer;
		white-space: nowrap;
	}

	.button[disabled] {
		opacity: 0.25;
		pointer-events: none;
	}

	.fullwidth {
		width: 100%;
	}

	.button--warn {
		color: red;
	}

	.leading-icon {
		margin-right: 0.5rem;
	}

	.trailing-icon {
		margin-left: 0.5rem;
	}

	.button:hover {
		background-color: rgba(0, 0, 255, 0.1);
	}

	.button--warn:hover {
		background-color: rgba(255, 0, 0, 0.1);
	}

	.button:active {
		background-color: rgba(0, 0, 255, 0.2);
	}

	.button--warn:active {
		background-color: rgba(255, 0, 0, 0.2);
	}

	.button--outlined {
		border: 1px solid rgba(0, 0, 255, 0.5);
	}

	.button--outlined.button--warn {
		border: 1px solid rgba(255, 0, 0, 0.5);
	}

	.button--contained {
		background-color: blue;
		color: white;
	}

	.button--contained.button--warn {
		background-color: red;
		color: white;
	}

	.button--contained:hover {
		background-color: rgba(0, 0, 255, 0.8);
	}

	.button--contained.button--warn:hover {
		background-color: rgba(255, 0, 0, 0.6);
	}

	.button--contained:active {
		background-color: rgba(0, 0, 255, 0.9);
	}

	.button--contained.button--warn:active {
		background-color: rgba(255, 0, 0, 0.7);
	}
</style>
