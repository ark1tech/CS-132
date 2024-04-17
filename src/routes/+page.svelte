<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Button2 from './Button2.svelte';
	import TextCard from './TextCard.svelte';
	import Reddit from '$lib/images/reddit_bg.webp';
	import Line from '$lib/images/line.svg';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '@carbon/charts-svelte/styles.css';
	import { BarChartStacked } from '@carbon/charts-svelte';
	import options from './collection/options.js';
	import data from './collection/data.js';

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
			anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
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

	const up_right_arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;

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
	<!-- <div class="absolute z-1 w-full h-full border">
		<div class="relative left-[5rem] top-[5rem] w-auto h-[20%] bg-[url('$lib/images/BalloonBG.svg')] bg-no-repeat"></div>
	</div> -->
	<div class="absolute z-0 gradient-mask-t-70 w-screen h-full">
		<div class="absolute z-0 gradient-mask-b-70 w-screen h-full">
			<div class="w-full h-full bg-[url('$lib/images/grid.svg')] bg-repeat"></div>
		</div>
	</div>
	<div class="relative z-1 pt-[10rem] w-full flex flex-col items-center gap-[1.5rem]">
		<div class="flex flex-row gap-[0.5rem] items-center justify-center">
			{@html caution}
			<p class="font-['JetBrains_Mono'] text-sm w-fit">Website still work in progress</p>
		</div>
		<h1 class="text-[#0E0F11] text-center">Work till it works</h1>
		<p class="text-center">
			Our project delves into the issue of labor struggles in the Philippines through exploratory
			analysis and Natural Language Processing of data sourced from the subreddit r/AntiworkPH.
		</p>
		<Button label="Learn more" href="" icon={down_arrow} />
	</div>
	<div class="w-full h-full mt-[2rem]">
		<div class="w-full h-full gradient-mask-b-40 drop-shadow-xl">
			<img
				data-aos="fade-in"
				data-aos-duration="700"
				alt=""
				src={Reddit}
				class="h-auto w-full relative z-1"
			/>
		</div>
	</div>
</section>

<section
	id="overview"
	class="pt-[4rem] lg:w-[80%] w-full min-h-[100dvh] flex flex-col items-center gap-[2rem] justify-center"
>
	<!-- <div class="absolute left-[-22rem] z-0 gradient-mask-t-50 w-[50rem] h-full">
		<div class="z-0 gradient-mask-b-50 w-full h-full">
			<div class="w-full h-full lg:bg-[url('$lib/images/left.png')] bg-no-repeat"></div>
		</div>
	</div>
	<div class="absolute right-[-24rem] z-0 gradient-mask-t-50 w-[50rem] h-full">
		<div class="z-0 gradient-mask-b-50 w-full h-full">
			<div class="w-full h-full lg:bg-[url('$lib/images/right.png')] bg-no-repeat"></div>
		</div>
	</div> -->
	<div class="w-full flex flex-col items-start">
		<h4 class="text-left w-full flex-wrap text-pretty mb-[1rem]">
			Everyone needs a source of income to live comfortably; <br /> for most Filipinos&mdash;<span
				class="text-[#ff5e01]">it's more than just about making ends meet</span
			>.
		</h4>
		<div class="w-full flex flex-col gap-[1rem]">
			<p class="text-left text-pretty w-full">
				In December 2023, the Philippines logged an unemployment rate of 3.1%, a decrease of 617,000
				unemployed individuals from the previous year<sup
					><a
						class="text-[#ff9752] text-xs"
						target="_blank"
						href="https://neda.gov.ph/unemployment-lowest-in-almost-two-decades-generating-high-quality-jobs-crucial/#:~:text=According%20to%20the%20Philippine%20Statistics,decrease%20of%20617%2C000%20unemployed%20individuals "
						>[1]</a
					></sup
				>. This improvement is being celebrated as the lowest unemployment rate in almost two
				decades, but beyond these statistics, the country is continuously plagued by pressing labor
				issues.
			</p>
			<p class="text-left text-pretty w-full">
				As of 2024, the current minimum wage is set at ₱573-₱610 in Metro Manila, the highest in any
				other region. In comparison, the required minimum to feed a family of five is ₱1188 per day
				according to the IBON foundation<sup
					><a
						class="text-[#ff9752] text-xs"
						target="_blank"
						href="https://www.philstar.com/headlines/2024/01/02/2322987/labor-group-says-2023-wage-hike-not-enough-workers-daily-expenses"
						>[2]</a
					></sup
				>.
			</p>
			<p class="text-left text-pretty w-full">
				With such low wages, some choose to be separated from families and face poor job conditions
				to pursue employment outside the country, as the number of Overseas Filipino Workers reaches
				its peak in 55 years<sup
					><a
						class="text-[#ff9752] text-xs"
						target="_blank"
						href="https://www.philstar.com/headlines/2024/01/02/2322987/labor-group-says-2023-wage-hike-not-enough-workers-daily-expenses"
						>[3]</a
					></sup
				>. That is not to say that local workers lack in their share of labor exploitation.
				Contractualization, a common employment practice in the country that hires workers for
				short-term contracts, leaves affected Filipinos without necessary benefits and job security.
			</p>
			<p class="text-left text-pretty w-full">
				Under the 17 Sustainable Development Goals (SDG) established by the United Nations General
				Assembly, specifically SDG 8, there is a need to “protect labor rights and promote safe and
				secure working environments for all workers, including migrant workers, in particular women
				migrants, and those in precarious employment.” For the country to achieve this goal, the
				issues faced by the Philippine workforce must first be properly recognized and addressed
				before eventually focusing on resolving them.
			</p>
		</div>
	</div>
	<div class="w-full flex flex-col items-center">
		<h4 class="text-left w-full flex-wrap text-pretty mb-[1rem]">
			There's so much data on the Internet, and here's what we can do
		</h4>
		<div class="w-full flex flex-col gap-[1rem]">
			<p class="text-left w-full">
				r/AntiworkPH provides workers a platform to vent their frustrations and, consequently, shed
				light on the current situation of the Philippine labor market.
			</p>
			<p class="text-left w-full">
				As such, we seek to unravel which topics have plagued the Philippine workforce since the
				subreddit started. Through this, our group aims to bring awareness and hopefully provide a
				more realistic view of the Philippine labor environment.
			</p>
		</div>
	</div>
	<div class="w-full flex flex-col items-start">
		<h4 class="text-left lg:w-[950px] w-full flex-wrap text-pretty mb-[1rem]">
			Then... what are the prevalent topics about labor struggle submitted on r/AntiworkPH?
		</h4>
		<div class="w-full flex flex-col gap-[1rem]">
			<p class="text-left">Null Hypothesis</p>
			<p class="text-left">Alternative Hypothesis</p>
		</div>
	</div>
	<div class="w-full flex flex-col items-center">
		<h4 class="text-left w-full flex-wrap text-pretty mb-[1rem]">The action plan</h4>
		<p class="text-left w-full">
			Collect various reddit posts under the subreddit with the appropriate flairs, classify based
			on the post's main topic, and tally these posts under their respective categories.
		</p>
	</div>
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
			<h2 class="text-[#0E0F11] text-center" data-aos="fade-in" data-aos-duration="700">
				Data Collection
			</h2>
		</div>
		<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
			<TextCard
				title="DESCRIBING THE DATA"
				desc={`
					<p class ="w-full"> 
						We want to gather the data we need using Python Reddit API Wrapper (PRAW). According to its documentation, we can access any subreddit, its list of submissions, and useful metadata for each submission. For this project, we specifically gathered the following metadata:
					</p>
					<div class ="w-full flex flex-row flex-wrap gap-4 my-4">
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Timestamp</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Content Type (Text, video, image)</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Title</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Content (None if video or image)</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Upvotes Count</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Comments Count</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Upvote Ratio (Upvotes:downvotes)</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Flair</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Permalink</p>
						<p class ="py-1 px-4 bg-[#ffe2c9af] w-fit rounded-full code">Submission ID</p>
					</div>
					<p class ="w-full"> 
						To conduct our project, recall that we would only need text as data. That is why we kept track of the submission content type so that we may extract their transcripts. 
					</p>
				`}
			/>
			<TextCard
				title="SCRAPING THE DATA: LIMITATIONS"
				desc={`
					<p class ="w-full"> 
						In using PRAW, there are a couple of limitations to note: 
					</p>
					<p class = "w-full ml-[0.5rem]">
						<span class ="font-[500]">1. Mining Limit</span> &ndash; PRAW only allows us to collect up to 1000 submissions for each request. This means that we don't have much control on the data we get as it will always return relatively the same 1000.
					</p>
					<p class = "w-full ml-[0.5rem]">
						</span><span class ="font-[500]">2. No Time Customizations</span> &ndash; We can't filter submissions based on specfic posting times and time intervals. This is quite unfortunate as it would be difficult to minimize the time bias. 
					</p>
				`}
			/>
			<TextCard
				title="SCRAPING THE DATA: THE GAMEPLAN"
				desc={`
					<p class ="w-full"> 
						Now, here's the gameplan:
					</p>
					<p class = "w-full ml-[0.5rem]">
						<span class ="font-[500]">1.</span> To sample the subreddit, we want to scrape 1000 submissions per category. The categories are: Hot, New, Rising, Controversial, and Top. Since we will analyze engagement of submissions later on, New is out. Upon scraping, we found out that Rising is a subset of Hot and Top, and that would left us with Hot, Top, and Controversial. For Top, we picked All Time as it would give us submissions older than last year, i.e. April 2023. 
					</p>
					<p class = "w-full ml-[1rem]">
						<span class ="font-[500]">•</span> We opted not to use the search function since one of the objectives of our project is to find those relevant keywords themselves. 
					</p>
					<p class = "w-full ml-[0.5rem]">
						<span class ="font-[500]">2.</span> To avoid duplicates, we want to use the <span class="code font-bold">Save</span> function and mark the submission we've already scraped.
					</p>
					<p class = "w-full ml-[0.5rem]">
						<span class ="font-[500]">3.</span> To save time, we want to skip non-text-only submissions that have less than 10 upvotes since transcribing them may be counterproductive.
					</p>
					<p class = "w-full ml-[0.5rem]">
						<span class ="font-[500]">4.</span> Then as much as possible, we need to minimize time bias. Hence, we won't scrape submissions that are 10 days old or younger as they may have yet to peak in engagements. 
					</p>
				`}
			/>
			<div class="flex flex-col items-center mt-[2rem]">
				<p class="text-center">Executing the gameplan gave us...</p>
				<h3 class="text-center leading-tight lg:leading-normal my-[1rem] lg:my-0">
					2467 scraped submissions!
				</h3>
			</div>
			<div
				class="lg:w-[80%] w-full border-t border-b border-white backdrop-blur-lg bg-[#ffffff29] rounded-lg py-5 px-10"
			>
				<BarChartStacked {data} {options} />
			</div>
		</div>
		<div
			class="w-full flex sm:flex-row flex-col sm:gap-[1rem] gap-[0.3rem] items-center justify-center"
		>
			<Button2
				label="View scraper GitHub repo"
				href="https://github.com/ark1tech/CS132-Preprocessing"
				icon={up_right_arrow}
			/>
			<Button
				label="View dataset"
				href="https://docs.google.com/spreadsheets/d/1lmhzWPGKuykna-nOAT6i9ry_-330GrGRh_M5wN73qEE/edit?usp=sharing"
				icon={up_right_arrow}
			/>
		</div>
		<p class="w-full text-center">But now comes the hard part&mdash;cleaning the data.</p>
	</div>
</section>

<section class="w-full mt-[10rem] flex flex-col items-center relative gap-4 justify-start">
	<div class="relative w-screen h-full bg-[#ffffff]">
		<div class="absolute z-0 gradient-mask-l-30 w-full h-full">
			<div class="h-full w-full gradient-mask-r-30">
				<div
					class="h-full w-full bg-[url('$lib/images/hex.svg')] border-t-[0.5px] border-[#e7e7e767]"
				></div>
			</div>
		</div>
		<footer
			class="relative z-1 w-full h-full py-[2rem] flex md:flex-row flex-col items-center justify-evenly gap-5 border-t-[0.7px] border-[#0d121c3d]"
		>
			<div class="flex flex-col gap-2 items-center z-2">
				<!-- <p class="text-sm w-full text-center"></p> -->
				<div class="flex flex-col gap-1">
					<h5 class="w-full text-center">Seth Eliserio</h5>
					<a
						class="w-full text-center font-normal text-[#4A5464]"
						href="https://www.linkedin.com/in/seth-eliserio-655b28225/"
						target="__blank">@setheliserio</a
					>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-center">
				<!-- <p class="text-sm w-full"></p> -->
				<div class="flex flex-col gap-1">
					<h5 class="w-full text-center">Arki Mañago</h5>
					<a
						class="w-full text-center font-normal text-[#4A5464]"
						href="https://www.linkedin.com/in/ark1tech"
						target="__blank">@ark1tech</a
					>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-center">
				<!-- <p class="text-sm w-full text-center"></p> -->
				<div class="flex flex-col gap-1">
					<h5 class="w-full text-center">Annika Domondon</h5>
					<a class="w-full text-center font-normal text-[#4A5464]" href="/" target="__blank"
						>@maridapottedcat</a
					>
				</div>
			</div>
		</footer>
	</div>
</section>

<style>
</style>
