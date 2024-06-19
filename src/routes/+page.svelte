<script>
	import Button1 from './Button.svelte';
	import Intro from './_Intro.svelte';
	import Collecting from './_Collect.svelte';
	import Explore from './_Explore.svelte';
	import Model from './_Model.svelte';
	import Conclude from './_Conclu.svelte';
	import Reddit from '$lib/images/reddit_bg.webp';
	import Line from '$lib/images/line.svg';
	import logo from '$lib/images/Logo.svg';
	import TextCard from './TextCard.svelte';
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

	const send = `<svg  xmlns="http://www.w3.org/2000/svg"  width="17"  height="19"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>`;
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
	<div class="relative z-1 sm:pt-[10rem] w-full flex flex-col items-center gap-[1.5rem]">
		<!-- <div class="flex flex-row gap-[0.5rem] items-center justify-center">
			{@html caution}
			<p class="font-['JetBrains_Mono'] text-sm w-fit opacity-50">Project still in progress</p>
		</div> -->
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
	<div class="w-full h-full mt-[2rem] relative" >
		<div class="w-full h-full pinger absolute -z-10 t-0 m-auto saturate-200  blur-sm">
			<div class="w-full h-full gradient-mask-b-50 drop-shadow-xl sm:block hidden">
				<img alt="" src={Reddit} class="h-auto w-full relative z-1 contrast-200 brightness-[0.73]" />
			</div>
		</div>
		<div class="w-full h-full">
			<div class="w-full h-full gradient-mask-b-50 drop-shadow-xl sm:block hidden">
				<img alt="" src={Reddit} class="h-auto w-full relative z-1" />
			</div>
		</div>	
	</div>
</section>

<section
	id="overview"
	class="pt-[4rem] lg:w-[80%] w-full min-h-[100dvh] flex flex-col items-center gap-[3rem] justify-center"
>
	<Intro />
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
			<div class="z-1 h-full w-full"></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
	<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
		<div class="flex flex-col w-full h-full items-center gap-[2rem] my-[2rem]">
			<div class="flex flex-col gap-[0.8rem] items-center w-full">
				<h4 class="sub">PART II</h4>
				<h2 class="text-[#0E0F11] text-center">Data Exploration</h2>
			</div>
			<p class="text-center">
				Now that our data has been processed, the next step would be to solve the research questions
				posed at the start of the study. To do this, we would need to focus on how to define and
				identify submissions, a.k.a. posts, on unfair contracts and job offerings as hypothesized.
			</p>
		</div>
		<Explore />
	</div>
</section>

<section
	id="model"
	class="relative pt-[4rem] w-full h-fit flex flex-col items-center gap-4 justify-start"
>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="datacollect h-full w-full gradient-mask-b-80">
			<div class="z-1 h-full w-full"></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
	<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
		<div class="flex flex-col w-full h-full items-center gap-[2rem] my-[2rem]">
			<div class="flex flex-col gap-[0.8rem] items-center w-full">
				<h4 class="sub">PART III</h4>
				<h2 class="text-[#0E0F11] text-center">Machine Learning Modeling</h2>
			</div>
			<p class="text-center text-pretty">
				As discussed in the last part, we want to use machine learning models to further our
				investigation as it provides a more flexible and objective way to identify clusters, which
				is very crucial! Specifically, we will be using unsupervised learning since we want to
				interpret the differences and similarities among datapoints.
			</p>
		</div>
		<Model />
	</div>
</section>

<section
	id="conclude"
	class="relative pt-[4rem] w-full h-fit flex flex-col items-center gap-4 justify-start"
>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class=" h-full w-full gradient-mask-b-80">
			<div class="z-1 h-full w-full"></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
	<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
		<div class="flex flex-col w-full h-full items-center gap-[2rem] my-[2rem]">
			<div class="flex flex-col gap-[0.8rem] items-center w-full">
				<h4 class="sub">PART V</h4>
				<h2 class="text-[#0E0F11] text-center">Results & Conclusion</h2>
			</div>
		</div>
		<Conclude />
	</div>
</section>

<section
	id="conclude"
	class="relative pt-[4rem] w-full h-fit flex flex-col items-center gap-4 justify-start"
>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class=" h-full w-full gradient-mask-b-80">
			<div class="z-1 h-full w-full"></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
	<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
		<div class="flex flex-col w-full h-full items-center gap-[2rem] my-[2rem]">
			<div class="flex flex-col gap-[0.8rem] items-center w-full">
				<h2 class="text-left flex-wrap text-pretty">
					Now, it's <span class="text-[#ff5e01]">your turn</span>.
				</h2>
			</div>
		</div>
		<div class="w-full flex flex-col gap-[1rem]">
			<p class="text-left w-full">
				Our study proposed to highlight the most negative aspects of the Philippine Job Market and
				inform people what to expect and what should be changed from the current system. By shedding
				light on the common Filipino’s experiences and grievances, we can create a better working
				environment for future Filipino workers and advocate for better working regulations from the
				government.
			</p>
			<p class="text-left w-full">
				Policymakers must lead the way by creating supportive and fair labor laws, streamlining the
				exit process, and implementing standards for effective management practices. Corporate
				leaders, particularly in the BPO sector, should prioritize employee well-being by
				introducing initiatives to mitigate night shift stress, fostering inclusive workplace
				cultures, and offering professional development and mental health support.
			</p>
			<p class="text-left w-full">
				By taking these informed, data-driven actions, stakeholders can collectively create a more
				equitable and supportive work environment in the Philippines. Let us use these insights to
				drive positive change and empower Filipino workers.
			</p>
		</div>
	</div>
</section>
<section
	id="aboutus"
	class="relative pt-[4rem] w-full h-fit flex flex-col items-center gap-4 justify-start"
>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-1 h-full w-full"></div>
		</div>
	</div>
	<div class="absolute z-1 w-screen h-full gradient-mask-t-80">
		<div class="h-full w-full gradient-mask-b-80">
			<div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div>
		</div>
	</div>
	<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto mb-[3rem]" />
	<div class="lg:w-[80%] w-full z-10">
		<p class="font-[500] text-center xl:mb-[0rem] mb-[2rem]">Meet the Team</p>
		<div class="w-full h-full flex xl:flex-row flex-col items-start justify-evenly gap-5">
			<div class="w-full h-full flex flex-col gap-2 items-center z-2">
				<div class="flex flex-col items-center justify-start w-full h-full">
					<pre class="text-xs w-full flex items-center justify-center text-[#4A5464] min-h-[25dvh]">
			  _ |\_
		      \` ..\
        __,.-" =__Y=
      ."        )
_    /   ,    \/\_
((____|    )_-\ \_-`
`-----'`-----` `--`
				</pre>
					<h5 class="w-full text-center">Seth Eliserio</h5>
					<a
						class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
						href="https://www.linkedin.com/in/seth-eliserio-655b28225/"
						target="__blank">@setheliserio</a
					>
					<p class="text-sm text-justify mt-[1rem] w-full">
						I am Eli, a BS Computer Science student, and my main field of interest is automata
						theory. I also enjoy exploring finance and some Taylor Swift on the side.
					</p>
				</div>
			</div>
			<div class="w-full h-full flex flex-col gap-2 items-center z-2">
				<div class="flex flex-col items-center justify-start">
					<pre class="text-xs w-full flex items-center justify-center text-[#4A5464] min-h-[25dvh]">
       |\      _,,,---,,_
ZZZzz /,`.-'`'    -.  ;-;;,_
     |,4-  ) )-,_. ,\ (  `'-'
    '---''(_/--'  `-'\_) 
				</pre>
					<h5 class="w-full text-center">Arki Mañago</h5>
					<a
						class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
						href="https://www.linkedin.com/in/ark1tech"
						target="__blank">@ark1tech</a
					>
					<p class="text-sm text-justify mt-[1rem] w-full">
						Hi, I'm Arki. I love putting beauty to the things I build. My passion lies in fusing my
						marketing and programming skills. I love jogging and the flowers around UPD!‧₊˚❀༉‧₊˚.
					</p>
				</div>
			</div>
			<div class="w-full h-full flex flex-col gap-2 items-center z-2">
				<!-- <p class="text-sm w-full text-center"></p> -->
				<div class="flex flex-col items-center justify-start">
					<pre class="text-xs flex items-center justify-center text-[#4A5464] min-h-[25dvh]">
  	 _
 |\'/-..--.
 / _ _   ,  ;
`~=`Y'~_&lt;._./
  &lt;`-....__.'  
				</pre>
					<h5 class="w-full text-center">Annika Domondon</h5>
					<a
						class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
						href="mailto:annika.domondon@gmail.com"
						target="__blank">@maridapottedcat</a
					>
					<p class="text-sm text-justify mt-[1rem]">
						Hello! I am Annika, a BS Computer Science student, currently interested in the marriages
						of computer science to other subjects, mainly bioinformatics. I also enjoy writing and
						discussing stories and literary concepts.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section
	id="aboutus"
	class="w-full mt-[6rem] flex flex-col items-center relative gap-4 justify-start"
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
			class="relative z-1 w-full h-full py-[3rem] border-t-[0.7px] border-[#0d121c3d] flex flex-col items-center justify-center gap-[3rem]"
		>
			<div class="flex md:flex-row flex-col items-center md:gap-8 gap-4">
				<h3>Got questions?</h3>
				<Button1
					label="Send them here!"
					href="https://docs.google.com/forms/d/e/1FAIpQLSf1tvHbr03CbsgSScuTcz7Sm-ushALWQzKuh7IScpCfF19ZUQ/viewform?usp=sf_link"
					icon={send}
					target={'blank_'}
				/>
			</div>
			<p
				class="text-sm text-center font-['Public_Sans'] flex flex-row gap-2 items-center justify-center"
			>
				<img src={logo} alt="Pocari!" class="w-[5rem]" />
				© 2024
			</p>
		</footer>
	</div>
</section>

<style>
</style>
