<script>
	import Infoform from '$lib/components/Infoform.svelte';
	let { children } = $props();
</script>

<div class="flex flex-row m-auto">
	{@render children()}
	<Infoform />
</div>

