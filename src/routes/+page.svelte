<script>
	import Button1 from './Button1.svelte';
	import Intro from './_Intro.svelte';
	import Collecting from './_Collect.svelte';
	import Explore from './_Explore.svelte';
	import Reddit from '$lib/images/reddit_bg.webp';
	import Line from '$lib/images/line.svg';
	import '@carbon/charts-svelte/styles.css';
	
	// import { CodeBlock } from 'svhighlight';
	// import 'highlight.js/styles/github-dark.css';
	
	// import { onMount } from 'svelte';
	// import AOS from 'aos';
	// import 'aos/dist/aos.css';
	// onMount(() => {
	// 	AOS.init({
	// 		// Global settings:
	// 		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	// 		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	// 		initClassName: 'aos-init', // class applied after initialization
	// 		animatedClassName: 'aos-animate', // class applied on animation
	// 		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	// 		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	// 		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	// 		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// 		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	// 		offset: 120, // offset (in px) from the original trigger point
	// 		delay: 0, // values from 0 to 3000, with step 50ms
	// 		duration: 400, // values from 0 to 3000, with step 50ms
	// 		easing: 'ease', // default easing for AOS animations
	// 		once: false, // whether animation should happen only once - while scrolling down
	// 		mirror: true, // whether elements should animate out while scrolling past them
	// 		anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
	// 	});
	// });

	const down_arrow = `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="19"
			height="19"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path
				d="M16 15l-4 4"
			/><path d="M8 15l4 4" />
		</svg>`;

	const up_right_arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;

	const caution = `<?xml version="1.0" encoding="utf-8"?>
		<svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
		<path d="M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A5464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<circle cx="12" cy="16.5" r="0.9" fill="#4A5464"/>
		</svg>`;
</script>

<svelte:head>
	<title>pocarí</title>
	<meta name="description" content="CS 132 Pocari" />
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<section
	class="w-full min-h-[100dvh] flex flex-col items-center relative gap-4 sm:justify-start justify-center"
>
	<!-- <div class="absolute z-1 w-full h-full border">
		<div class="relative left-[5rem] top-[5rem] w-auto h-[20%] bg-[url('$lib/images/BalloonBG.svg')] bg-no-repeat"></div>
	</div> -->
	<div class="absolute z-0 gradient-mask-t-70 w-screen h-full">
		<div class="absolute z-0 gradient-mask-b-70 w-screen h-full">
			<div class="w-full h-full bg-[url('$lib/images/grid.svg')] bg-repeat"></div>
		</div>
	</div>
	<div class="relative z-1 sm:pt-[7rem] w-full flex flex-col items-center gap-[1.5rem]">
		<div class="flex flex-row gap-[0.5rem] items-center justify-center">
			{@html caution}
			<p class="font-['JetBrains_Mono'] text-sm w-fit opacity-50">Project still in progress</p>
		</div>
		<h1 class="text-[#0E0F11] lg:w-[60%] text-center">Through the lens of Filipino workers</h1>
		<p class="text-center lg:w-[60%]">
			A data science project that delves into the issue of labor struggles in the Philippines
			through exploratory analysis and natural language processing (NLP) of data sourced from the
			subreddit
			<a href="https://www.reddit.com/r/AntiworkPH/" target="_blank" class="inline_a"
				>r/AntiworkPH</a
			>.
		</p>
		<Button1 label="Learn more" href="#overview" icon={down_arrow} target="_self" />
	</div>
	<div class="w-full h-full mt-[2rem]">
		<div class="w-full h-full gradient-mask-b-50 drop-shadow-xl sm:block hidden">
			<img alt="" src={Reddit} class="h-auto w-full relative z-1" />
		</div>
	</div>
</section>

<section
	id="overview"
	class="pt-[4rem] lg:w-[80%] w-full min-h-[100dvh] flex flex-col items-center gap-[3rem] justify-center"
>
	<Intro/>
</section>

<section
	id="collection"
	class="relative pt-[4rem] w-full min-h-[100dvh] flex flex-col items-center gap-4 justify-start"
>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-1 h-full w-full datacollect"></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
	<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
		<div class="flex flex-col w-full h-full items-center gap-[0.8rem] my-[2rem]">
			<h4 class="sub">PART I</h4>
			<h2 class="text-[#0E0F11] text-center">Data Collection</h2>
		</div>
		<Collecting />
	</div>
</section>

<section
	id="exploration"
	class="relative pt-[4rem] w-full h-fit flex flex-col items-center gap-4 justify-start"
>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="datacollect2 h-full w-full gradient-mask-b-80">
			<div class="z-1 h-full w-full "></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
	<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
		<div class="flex flex-col w-full h-full items-center gap-[0.8rem] my-[2rem]">
			<h4 class="sub">PART II</h4>
			<h2 class="text-[#0E0F11] text-center">Data Exploration</h2>
		</div>
		<Explore/>
	</div>
</section>

<section
	id="aboutus"
	class="w-full mt-[10rem] flex flex-col items-center relative gap-4 justify-start"
>
	<div class="relative w-screen h-full bg-[#ffffff]">
		<div class="absolute z-0 gradient-mask-l-30 w-full h-full">
			<div class="h-full w-full gradient-mask-r-30">
				<div
					class="h-full w-full bg-[url('$lib/images/hex.svg')] border-t-[0.5px] border-[#e7e7e767]"
				></div>
			</div>
		</div>
		<footer
			class="relative z-1 w-full h-full py-[2rem] border-t-[0.7px] border-[#0d121c3d] flex flex-col items-center gap-5"
		>
			<div class="w-full flex md:flex-row flex-col items-center justify-evenly gap-5 px-[4rem]">
				<div class="flex-grow flex flex-col gap-2 items-center z-2 px-[1.5rem]">
					<div class="flex flex-col items-center justify-center">
						<h5 class="w-full text-center">Seth Eliserio</h5>
						<a
							class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
							href="https://www.linkedin.com/in/seth-eliserio-655b28225/"
							target="__blank">@setheliserio</a
						>
						<p class='text-sm text-justify mt-[1rem]'>
							Hello! I am Annika, a BS Computer Science student, currently interested in the marriages of Computer Science to other subjects, mainly BioInformatics. I also enjoy writing and discussing stories and literary concepts.
						</p>
					</div>
				</div>
				<div class="flex-grow flex flex-col gap-2 items-center z-2 px-[1.5rem]">
					<div class="flex flex-col  items-center justify-center">
						<h5 class="w-full text-center">Arki Mañago</h5>
						<a
							class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
							href="https://www.linkedin.com/in/ark1tech"
							target="__blank">@ark1tech</a
						>
						<p class='text-sm text-justify mt-[1rem]'>
							Hello! I am Annika, a BS Computer Science student, currently interested in the marriages of Computer Science to other subjects, mainly BioInformatics. I also enjoy writing and discussing stories and literary concepts.
						</p>
					</div>
				</div>
				<div class="flex-grow flex flex-col gap-2 items-center z-2 px-[1.5rem]">
					<!-- <p class="text-sm w-full text-center"></p> -->
					<div class="flex flex-col items-center justify-center">
						<h5 class="w-full text-center">Annika Domondon</h5>
						<a
							class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
							href="/"
							target="__blank">@maridapottedcat</a
						>
						<p class='text-sm text-justify mt-[1rem]'>
							Hello! I am Annika, a BS Computer Science student, currently interested in the marriages of Computer Science to other subjects, mainly BioInformatics. I also enjoy writing and discussing stories and literary concepts.
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
</section>

<style>
</style>
