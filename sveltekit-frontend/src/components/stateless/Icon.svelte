<script context="module" lang="ts">
	export interface IconProps {
		prefix: IconPrefix;
		name: IconName;
	}
</script>

<script lang="ts">
	import {
		type IconName,
		findIconDefinition,
		icon,
		type IconPrefix
	} from '@fortawesome/fontawesome-svg-core';
	export let prefix: IconPrefix;
	export let name: IconName;
</script>

{@html icon(findIconDefinition({ prefix, iconName: name })).html}
