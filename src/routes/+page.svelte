<script>
	import Button from './Button.svelte';
	import reddit from '$lib/images/Reddit.webp';
	const down_arrow = `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="19"
			height="19"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path
				d="M16 15l-4 4"
			/><path d="M8 15l4 4" />
		</svg>`;
</script>

<svelte:head>
	<title>pocarí</title>
	<meta name="description" content="CS 132 Pocari" />
</svelte:head>

<section class="h-auto pt-[3rem] w-full flex flex-col items-center gap-[2rem]">
	<div class="w-fit">
		<h1 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text">
			<span class="font-[100] text-inherit">ANTI</span>WORK
		</h1>
	</div>
	<div class="w-1/2">
		<p class="font-light text-center">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel.
			Nulla pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum
			est. Odio facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla
			aliquet enim tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.
		</p>
	</div>
	<Button icon={down_arrow} label={'Learn more'} />
	<img src={reddit} alt="reddit" class="w-[100%] h-auto gradient-mask-b-0" />
</section>

<style>
</style>
