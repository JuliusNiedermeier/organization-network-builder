<script lang="ts">
	import CompanyCard from './CompanyCard.svelte';
	import {
		sortX,
		sortY,
		type Edge,
		type Graph,
		type Node,
		type SortedGraph
	} from '$src/features/company/utils/sortCompanyGraph';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { getCompanyNetwork, type CompanyNetworkNode } from '../../requests/getCompanyNetwork';
	import { page } from '$app/stores';
	import { getCompanyPreviews } from '../../requests/getCompanyPreviews';
	import type { CompanyPreview } from '../../types';

	type NodeElementMap = { [key: string]: HTMLDivElement };

	const queryClient = useQueryClient();

	const getRows = (sortedGraph: SortedGraph) => {
		const rows: Array<Array<Node>> = [];

		sortedGraph.nodes.forEach((node) => {
			const y = sortedGraph.positionMap[node.id].y;
			if (!rows[y]) rows[y] = [];
			rows[y].push(node);
		});

		return rows;
	};

	const getRelativePosition = (el: HTMLElement, container: HTMLElement) => {
		const elRect = el.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();

		return {
			width: elRect.width,
			height: elRect.height,
			left: elRect.left - containerRect.left,
			x: elRect.left - containerRect.left,
			top: elRect.top - containerRect.top,
			y: elRect.top - containerRect.top,
			bottom: elRect.bottom - containerRect.top,
			right: elRect.right - containerRect.left
		};
	};

	const getPaths = (sortedGraph: SortedGraph, elements: NodeElementMap) => {
		return sortedGraph.edges.map((edge) => {
			const parent = elements[edge.parent];
			const child = elements[edge.child];

			if (!parent || !child) return;

			const parentPos = getRelativePosition(parent, mapElement);
			const childPos = getRelativePosition(child, mapElement);

			const start = { x: parentPos.left + parentPos.width / 2, y: parentPos.bottom };
			const end = { x: childPos.left + childPos.width / 2, y: childPos.top };
			const h1 = { x: start.x, y: start.y + (end.y - start.y) / 2 };
			const h2 = { x: end.x, y: h1.y };

			return {
				connected: [edge.parent, edge.child],
				points: `M ${start.x} ${start.y} C ${h1.x} ${h1.y} ${h2.x} ${h2.y} ${end.x} ${end.y}`
			};
		});
	};

	const buildGraph = (companies: CompanyNetworkNode[]): Graph => {
		const nodes: Node[] = companies.map((company) => ({ id: company.id, name: company.id }));
		const edges: Edge[] = [];
		companies.forEach((company) => {
			if (!company.holdings.length) return;
			edges.push(...company.holdings.map((id) => ({ parent: id, child: company.id, stake: 100 })));
		});
		return { nodes, edges };
	};

	const companyNetworkQuery = useQuery(
		'company-network',
		async () => {
			const response = await getCompanyNetwork($page.params.company);
			if (!response) return null;
			return buildGraph(response);
		},
		{ onSuccess: () => queryClient.invalidateQueries('company-previews') }
	);

	const companyPreviewsQuery = useQuery('company-previews', () =>
		getCompanyPreviews(sortedGraph.nodes.map(({ id }) => id))
	);

	const findCompanyPreview = (id: string) => companyPreviews?.find((node) => id == node.id);

	$: sortedGraph = sortX(sortY($companyNetworkQuery.data || { nodes: [], edges: [] })) || [];
	$: rows = getRows(sortedGraph);
	$: paths = getPaths(sortedGraph, nodeElements);
	$: companyPreviews = $companyPreviewsQuery.data?.map(
		(preview): CompanyPreview => ({
			id: preview.id,
			name: preview.name,
			locationCount: preview.locationsAggregate.count,
			employeeCount: preview.usersAggregate.count
		})
	);

	let mapElement: HTMLDivElement;
	let nodeElements: NodeElementMap = {};

	export let onSelect: (id: string) => void;
	export let selected: string;
</script>

<div class="map" bind:this={mapElement}>
	<div class="nodes">
		{#each rows as nodes}
			<div class="nodes__row">
				{#each nodes as node}
					<div
						class="nodes__row__node"
						bind:this={nodeElements[node.id]}
						on:click={() => onSelect(node.id)}
					>
						{#if findCompanyPreview(node.id)}
							<CompanyCard company={findCompanyPreview(node.id)} selected={selected == node.id} />
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<svg class="paths">
		{#each paths as path}
			<path
				class="paths__path"
				class:selected={path?.connected.includes(selected)}
				d={path?.points}
			/>
		{/each}
	</svg>
</div>

<style>
	.map {
		position: relative;
		padding: 2rem;
	}

	.nodes {
		display: flex;
		flex-direction: column;
		gap: 16rem;
	}

	.nodes__row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: 4rem;
	}

	.paths {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
	}

	.paths__path {
		fill: none;
		stroke: lightgray;
		stroke-width: 1px;
		transition: all 250ms ease;
	}

	.paths__path.selected {
		stroke: blue;
		filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5));
		stroke-width: 2px;
	}
</style>
