<script>
	let currentPage = 'hst';
</script>

<nav class="flex justify-between bg-blue-500 text-white">
	<ul class="flex items-center space-x-4 m-auto">
		<li class={`nav-item ${currentPage === 'hst' ? 'active' : ''}`}>
			<a href="/" class="text-white hover:text-blue-100">HST</a>
		</li>
		<li class={`nav-item ${currentPage === 'pred' ? 'active' : ''}`}>
			<a href="/pred" class="text-white hover:text-blue-100">PREDICTION</a>
		</li>
		<li class={`nav-item ${currentPage === 'enrol' ? 'active' : ''}`}>
			<a href="/enrol" class="text-white hover:text-blue-100">ENROLMENT</a>
		</li>
		<li class={`nav-item ${currentPage === 'about' ? 'active' : ''}`}>
			<a href="/about" class="text-white hover:text-blue-100">ABOUT</a>
		</li>
	</ul>
</nav>

<style>
	.nav-item {
		@apply text-lg;
        padding: 12px;
	}
	.nav-item.active {
		@apply bg-blue-700;
	}
</style>
