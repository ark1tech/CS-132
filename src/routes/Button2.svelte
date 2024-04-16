<script>
	export let label;
	export let icon;
	export let href;

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop - 50,
			behavior: 'smooth'
		});
		// on:click={handleAnchorClick}
	}
</script>

<div
	class="w-fit border border-[#ff5e01] shadow-[0_0_5px_0_#ffab81] rounded-lg overflow-clip
"
>
	<a
		class=" text-[#ff5e01] hover:text-white hover:bg-[#ff5e01] transition-all ease-in-out duration-300  flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem]
			"
		target="_blank"
		{href}
	>
		{@html icon}
		{label}
	</a>
</div>
<div class="border-[#ffab81]"></div>
