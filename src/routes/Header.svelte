<script>
	import logo from '$lib/images/Logo.svg';
	const hamburger_menu = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>`;

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop - 50,
			behavior: 'smooth'
		});
	}
	
</script>

<header class="flex flex-row justify-between items-center">
	<div class="flex-none">
		<a href="/">
			<img src={logo} alt="Pocari!" />
		</a>
	</div>
	<nav class="">
		<ul class="flex-row justify-between font-light text-sm gap-[2.6rem] lg:flex hidden">
			<li><a href="#overview" on:click={handleAnchorClick}> Overview </a></li>
			<li><a href="/">Collection</a></li>
			<li><a href="/">Exploration</a></li>
			<li><a href="/">Modelling</a></li>
			<li><a href="/">Results</a></li>
			<li><a href="/">Conclusion</a></li>
			<li><a href="/">About Us</a></li>
		</ul>
		<div class="lg:hidden block text-white">
			{@html hamburger_menu}
		</div>
	</nav>
</header>

<style>
</style>
