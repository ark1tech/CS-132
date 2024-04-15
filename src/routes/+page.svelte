<script>
	import Button from './Button.svelte';
	import Reddit from '$lib/images/reddit_bg.webp';
	import antiwork from '$lib/images/antiwork.webp';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	// import { CodeBlock } from 'svhighlight';
	// import 'highlight.js/styles/github-dark.css';

	onMount(() => {
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: true, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		});
	});

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

	const up_right_arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;

	const caution = `<?xml version="1.0" encoding="utf-8"?>
		<svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A5464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<circle cx="12" cy="16.5" r="0.9" fill="#4A5464"/>
		</svg>`;
</script>

<svelte:head>
	<title>pocarí</title>
	<meta name="description" content="CS 132 Pocari" />
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<section class="w-full min-h-[100dvh] flex flex-col items-center relative gap-4 justify-start">
	<div class="absolute z-0 gradient-mask-t-70 w-screen h-full">
		<div class="absolute z-0 gradient-mask-b-70 w-screen h-full">
			<div class="w-full h-full bg-[url('$lib/images/grid.svg')] bg-repeat"></div>
		</div>
	</div>
	<div class="relative z-1 pt-[10rem] w-full flex flex-col items-center gap-[1rem]">
		<div class="flex flex-row gap-[0.5rem] items-center justify-center">
			{@html caution}
			<p class="font-['JetBrains_Mono'] text-sm w-fit">Website still work in progress</p>
		</div>
		<h1 class="text-[#0E0F11]">Antiwork</h1>
		<p class="text-center">
			Our data science project delves into the pervasive issue of labor exploitation in the
			Philippines through an analysis of data sourced from the subreddit r/AntiworkPH, shedding
			light on the multifaceted dimensions of anti-work sentiments and labor struggles.
		</p>
		<Button label="Learn more" href="" icon={down_arrow} />
	</div>
	<div class="w-full h-full">
		<div class="w-full h-full gradient-mask-b-0">
			<img data-aos="fade-in" data-aos-duration="700" alt="" src={Reddit} class="h-auto w-full relative z-1" />
		</div>
	</div>
</section>

<section id="overview" class="w-full min-h-[100dvh] flex flex-col items-center gap-4 justify-start">
	<div class=" w-full flex flex-col items-start gap-[1rem]">
		<h2 class="text-[#0E0F11]" data-aos="fade-in" data-aos-duration="700">Overview</h2>
		<p>
			Our data science project delves into the pervasive issue of labor exploitation in the
			Philippines through an analysis of data sourced from the subreddit r/AntiworkPH, shedding
			light on the multifaceted dimensions of anti-work sentiments and labor struggles.
		</p>
	</div>
</section>

<section
	id="collection"
	class="w-full min-h-[100dvh] flex flex-col items-center gap-4 justify-start"
>
	<div class="pt-[10rem] w-full flex flex-col items-start gap-[1rem]">
		<h2 class="text-[#0E0F11]" data-aos="fade-in" data-aos-duration="700">Data Collection</h2>
		<p>
			Using Python Reddit API Wrapper (PRAW), we were able to mine the submissions under
			r/AntiworkPH.
		</p>
		<Button label="View our dataset" href="" icon={up_right_arrow} />
	</div>
</section>

<style>
</style>
