<script lang="ts">
	import type { CompanyPreview } from '../../types';
	export let company: CompanyPreview;
	export let selected = false;
</script>

<div class="company-card" class:selected>
	<h4 class="name">{company.name}</h4>
	<small class="meta">{company.locationCount} locations • {company.employeeCount} employees</small>
</div>

<style>
	.company-card {
		padding: 2rem;
		border-radius: 0.5rem;
		border: 1px solid blue;
		cursor: pointer;
		transition: all 250ms ease;
	}

	.name {
		color: blue;
	}

	.company-card.selected .name {
		color: white;
	}

	.meta {
		color: black;
		opacity: 0.5;
	}

	.company-card.selected .meta {
		color: white;
	}

	.company-card.selected {
		background-color: #2828ca;
		border-color: transparent;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}

	.company-card:hover {
		opacity: 0.9;
	}

	.company-card:active {
		box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.2);
	}
</style>
