<script>
	export let label;
	export let icon;
	export let href;
	export let target;

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

<div
	class="w-fit border border-[#c9896a] shadow-[0_0_5px_0_#ffab81] hover:shadow-[0_0_15px_0px_#ffab81] transition-all ease-in-out duration-300  rounded-lg overflow-clip
"
>
	<a
		class=" text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem]
			bg-[#ff5e01] shadow-[inset_0_-5px_10px_#ffab81]
			"
		{target}
		{href}
	>
		{@html icon}
		{label}
	</a>
</div>
<div class="border-[#ffab81]"></div>
