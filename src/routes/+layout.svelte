<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Infoform from '../components/Infoform.svelte';
	let { children } = $props();
</script>

<Nav />

<div class="flex flex-row m-auto">
	{@render children()}
	<Infoform />
</div>

