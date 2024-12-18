<script>
  import Infoform from '$lib/components/Infoform.svelte';
  let { children } = $props();
</script>

<div class="m-auto flex flex-row">
  {@render children()}
  <Infoform />
</div>
