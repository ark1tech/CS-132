<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Button1 from './Button1.svelte';
	import Button2 from './Button2.svelte';
	import TextCard from './TextCard.svelte';
	import Reddit from '$lib/images/reddit_bg.webp';
	import Line from '$lib/images/line.svg';
	import Collect from '$lib/images/Archive.svg';
	import Analyze from '$lib/images/Analyze.svg';
	import Category from '$lib/images/Category.svg';
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
		<svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
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
	<div class="relative z-1 pt-[7rem] w-full flex flex-col items-center gap-[1.5rem]">
		<div class="flex flex-row gap-[0.5rem] items-center justify-center">
			{@html caution}
			<p class="font-['JetBrains_Mono'] text-sm w-fit opacity-30">Project still in progress</p>
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
		<div class="w-full h-full gradient-mask-b-50 drop-shadow-xl">
			<img alt="" src={Reddit} class="h-auto w-full relative z-1" />
		</div>
	</div>
</section>

<section
	id="overview"
	class="pt-[4rem] lg:w-[80%] w-full min-h-[100dvh] flex flex-col items-center gap-[3rem] justify-center"
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
	<div class="w-full flex flex-col items-start gap-[2rem]">
		<h4 class="text-left w-full flex-wrap text-pretty">
			Everyone needs a source of income to live comfortably; <br /> for most Filipinos&mdash;<span
				class="text-[#ff5e01]">it's more than just about making ends meet</span
			>
		</h4>
		<div class="w-full flex flex-col gap-[1rem]">
			<p class="text-left text-pretty w-full">
				In December 2023, the Philippines logged an <span class="font-[500]"
					>unemployment rate of 3.1%, a decrease of 617,000 unemployed individuals from the previous
					year</span
				><sup
					><a
						class="text-[#de7030] text-xs hover:text-[#ff4747] ease-out transition-all duration-500"
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
						class="text-[#de7030] text-xs hover:text-[#ff4747] ease-out transition-all duration-500"
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
						class="text-[#de7030] text-xs hover:text-[#ff4747] ease-out transition-all duration-500"
						target="_blank"
						href="https://www.philstar.com/headlines/2024/04/12/2347168/historic-2023-ofw-deployment-moves-philippines-labor-migration-forward-pandemic"
						>[3]</a
					></sup
				>. That is not to say that local workers lack in their share of labor exploitation.
				Contractualization, a common employment practice in the country that hires workers for
				short-term contracts, leaves affected Filipinos without necessary benefits and job security.
			</p>
			<p class="text-left text-pretty w-full">
				Under the 17 Sustainable Development Goals (SDG) established by the United Nations General
				Assembly, specifically SDG 8, there is a need to <span class="font-[500]"
					>“protect labor rights and promote safe and secure working environments for all workers,
					including migrant workers, in particular women migrants, and those in precarious
					employment.”</span
				> For the country to achieve this goal, the issues faced by the Philippine workforce must first
				be properly recognized and addressed before eventually focusing on resolving them.
			</p>
		</div>
	</div>
	<div class="w-full flex flex-col items-center gap-[2rem]">
		<h4 class="text-left w-full flex-wrap text-pretty">
			There's so much data on the Internet, and here's what we can do
		</h4>
		<div class="w-full flex flex-col gap-[1rem]">
			<p class="text-left w-full">
				The subreddit r/AntiworkPH provides workers a platform to vent their frustrations and,
				consequently, shed light on the current situation of the Philippine labor market.
			</p>
			<p class="text-left w-full">
				As such, we seek to unravel which topics have plagued the Philippine workforce since the
				subreddit started on 2022. Through this, our group aims to bring awareness and hopefully
				provide a more realistic view of the Philippine labor environment.
			</p>
		</div>
	</div>
	<div class="w-full flex flex-col items-start gap-[2rem]">
		<h4 class="text-left w-full flex-wrap text-pretty">
			Then&mdash;what are the prevalent topics about labor struggles submitted on r/AntiworkPH?
		</h4>
		<div class="w-full flex lg:flex-row flex-col justify-between gap-6">
			<div class="w-full p-[2rem] flex flex-col gap-3">
				<p class="font-[500]">Hypothesis</p>
				<p class="text-left">
					The prevalent topics among the subreddit users centered around labor struggles in the
					Philippines.
				</p>
			</div>
			<div class="w-full p-[2rem] flex flex-col gap-3">
				<p class="font-[500]">Null Hypothesis</p>
				<p class="text-left">
					The prevalent topics among the subreddit users did not center around labor struggles in
					the Philippines.
				</p>
			</div>
		</div>
	</div>
	<div class="w-full flex flex-col items-start gap-[2rem]">
		<h4 class="text-left w-full flex-wrap text-pretty">
			Which of these topics receive the most Reddit engagements?
		</h4>
		<div class="w-full flex lg:flex-row flex-col justify-between gap-6">
			<div class="w-full p-[2rem] flex flex-col gap-3">
				<p class="font-[500]">Hypothesis</p>
				<p class="text-left">
					The prevalent topics among the subreddit users centered around labor struggles in the
					Philippines.
				</p>
			</div>
			<div class="w-full p-[2rem] flex flex-col gap-3">
				<p class="font-[500]">Null Hypothesis</p>
				<p class="text-left">
					The prevalent topics among the subreddit users did not center around labor struggles in
					the Philippines.
				</p>
			</div>
		</div>
	</div>
	<div class="w-full flex flex-col items-center gap-[2rem]">
		<h4 class="text-left w-full flex-wrap text-pretty">
			<span class="text-[#ff5e01]">What now?</span>
		</h4>
		<div class="w-full flex lg:flex-row flex-col gap-3">
			<div
				class="w-full hover:bg-[#ffa78a] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"
			>
				<div
					class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"
				>
					<img src={Collect} alt="" class="w-fit" />
					<p>
						<span class="font-[500]">Collect</span> various submissions on r/AntiworkPH using a Reddit
						API.
					</p>
				</div>
			</div>
			<div
				class="w-full hover:bg-[#ffa78a] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"
			>
				<div
					class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"
				>
					<img src={Category} alt="" class="w-fit" />
					<p>
						<span class="font-[500]">Extract</span> relevant topics using natural language processing.
					</p>
				</div>
			</div>
			<div
				class="w-full hover:bg-[#ffa78a] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"
			>
				<div
					class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"
				>
					<img src={Analyze} alt="" class="w-fit" />
					<p>
						<span class="font-[500]">Analyze</span> the relationships of these topics to various Reddit
						metadata.
					</p>
				</div>
			</div>
		</div>
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
			<h2 class="text-[#0E0F11] text-center">Data Collection</h2>
		</div>
		<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
			<TextCard
				title="DESCRIBING THE DATA"
				desc={`
					<p class ="w-full"> 
						We want to gather the data we need using <a href="https://praw.readthedocs.io/en/stable/" target="_blank" class ="inline_a">Python Reddit API Wrapper (PRAW)</a>. According to its documentation, we can access any subreddit, its list of submissions, and useful metadata for each submission. For this project, we specifically gathered the following metadata:
					</p>
					<div class = "w-full flex flex-col gap-8 py-4 pl-[1rem]">
						<div class = "w-full flex flex-row gap-4">
							<p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
								String
							</p>
							<div class ="w-full flex flex-row flex-wrap gap-4">
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Timestamp</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Content Type (Text, video, image)</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Title</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Content (Caption if media content)</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Flair</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Permalink</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Submission ID</p>
							</div>	
						</div>
						<div class = "w-full flex flex-row gap-4">
							<p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
								Integer
							</p>
							<div class ="w-full flex flex-row flex-wrap gap-4">
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Upvotes Count</p>
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Comments Count</p>
							</div>
						</div>
						<div class = "w-full flex flex-row gap-4">
							<p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
								Float
							</p>
							<div class ="w-full flex flex-row flex-wrap gap-4">
								<p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Upvote:downvote Ratio</p>
							</div>	
						</div>
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
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">1.</p> 
						<p class = "w-full pl-[0.5rem] ">
							<span class ="font-[500]">Mining Limit</span> &ndash; PRAW only allows us to collect up to 1000 submissions for each request. This means that we don't have much control on the data we get as it will always return relatively the same 1000, implying that we can't consistently scrape unique submissions per request.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">2.</p> 
						<p class = "w-full pl-[0.5rem] ">
						</span><span class ="font-[500]">No Time Customizations</span> &ndash; We can't filter submissions based on specfic posting times and time intervals. This is quite unfortunate as it would be difficult to minimize the time bias. 
						</p>
					</div>
				`}
			/>
			<TextCard
				title="SCRAPING THE DATA: THE GAMEPLAN"
				desc={`
					<p class ="w-full"> 
						Now, here's the plan:
					</p>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">1.</p> 
						<p class = "w-full pl-[0.5rem] ">
							To sample the subreddit, we want to scrape 1000 submissions per category. The categories are: Hot, New, Rising, Controversial, and Top. Upon scraping, we found out that Rising is a subset of Hot, and hence would left us with Hot, Top, New, and Controversial. For Top, we picked All Time as it would give us submissions older than last year, i.e. April 2023. 
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit pl-[1rem]">•</p> 
						<p class = "w-full pl-[0.5rem] ">
							We opted not to use the search function since one of the objectives of our project is to find those relevant keywords themselves. 
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit pl-[1rem]">•</p> 
						<p class = "w-full pl-[0.5rem] ">
							We also opted not to scrape the comments as they are naturally highly contextualized to the main post. Text with little to no context may only cause the model to overfit.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit pl-[1rem]">•</p> 
						<p class = "w-full pl-[0.5rem] ">
							Note that due to the mining limitation, we are not able to fully reach 1000 submissions per category as submissions are not unique to one category. 
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">2.</p> 
						<p class = "w-full pl-[0.5rem] ">
							To avoid duplicates, we want to use the <span class="code font-bold">Save</span> function and mark the submission we've already scraped.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">3.</p> 
						<p class = "w-full pl-[0.5rem] ">
							To save time, we want to skip non-text-only submissions that have less than 10 upvotes since transcribing them may be counterproductive.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">4.</p> 
						<p class = "w-full pl-[0.5rem] ">
							Then as much as possible, we need to minimize time bias. Hence, we won't scrape submissions that are 10 days old or younger as they may have yet to peak in engagements. 
						</p>
					</div>
				`}
			/>
			<div class="flex flex-col items-center my-[2rem]">
				<p class="text-center">Executing the gameplan gave us...</p>
				<h3 class="text-center my-[1rem]">2467 scraped submissions!</h3>
				<p class="w-full text-center">But now comes the hard part&mdash;cleaning the data.</p>
			</div>
		</div>
		<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
			<TextCard
				title="CLEANING THE DATA"
				desc={`
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">1.</p> 
						<p class = "w-full pl-[0.5rem] ">
							Using 
							<a class = "inline_a" href="https://pandas.pydata.org/docs/" target="_blank"> 
								Pandas</a>, 
							<a class = "inline_a" href="https://docs.python.org/3/library/re.html" target="_blank"> 
								RegEx</a>, and 
							<a class = "inline_a" href="https://beautiful-soup-4.readthedocs.io/en/latest/" target="_blank"> 
								BeautifulSoup4</a> on 
							<a class = "inline_a" href="https://docs.jupyter.org/en/latest/" target="_blank"> 
								Jupyter Notebook</a>, we want to:
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit pl-[1rem]">•</p> 
						<p class = "w-full pl-[0.5rem] ">
							Remove URLs, duplicates, emojis, and submissions with empty cells except <span class ="code">Content</span> (to be transcribed later on) and <span class ="code">Flair</span>.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit pl-[1rem]">•</p> 
						<p class = "w-full pl-[0.5rem] ">
							Convert <span class ="code">Content</span> to plaintext as it is retrieved as markdown. This also includes replacing newlines and <span class ="code">NaN</span>s  with a single whitespace. 
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit pl-[1rem]">•</p> 
						<p class = "w-full pl-[0.5rem] ">
							Contextualize Filipino slangs and text abbreviations such as converting "BTW" to "By the way" or "Charot" to "Just kidding". However, it is to note that we can only cater a handful list of them (available on the GitHub repository).
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">2.</p> 
						<p class = "w-full pl-[0.5rem] ">
							We then want to manually transcribe the image and video content. We start by shortlisting the 100 most engaged submissions from each category to save time as effort to value ratio may be low.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">3.</p> 
						<p class = "w-full pl-[0.5rem] ">
							Translate <span class ="code">Title</span> and <span class ="code">Content</span> to English using the
							<a class = "inline_a" href="https://cloud.google.com/translate/docs/reference/rest" target="_blank"> 
								Google Translator API</a>.
						</p>
					</div>
					<div class ="flex flex-row gap-[0.2rem]">
						<p class ="font-[500] w-fit">4.</p> 
						<p class = "w-full pl-[0.5rem] ">
							Lastly, lemmatize <span class ="code">Title</span> and <span class ="code">Content</span> and remove their punctuations and stop words using 
							<a class = "inline_a" href="https://www.nltk.org" target="_blank"> 
								Natural Language Toolkit (NLTK)</a>.
						</p>
					</div>
					
				`}
			/>
		</div>
		<div class="flex flex-col items-center mt-[2rem]">
			<p class="text-center">We then finally get...</p>
			<h3 class="text-center my-[1rem] lg:my-0">2467 preprocessed submissions</h3>
		</div>
		<div
			class="lg:w-[80%] w-full border-t border-b border-white backdrop-blur-lg bg-[#ffffff29] rounded-lg py-5 px-10"
		>
			<BarChartStacked {data} {options} />
		</div>
		<div
			class="w-full flex sm:flex-row flex-col sm:gap-[1rem] gap-[0.3rem] items-center justify-center"
		>
			<Button2
				label="View preprocessing on GitHub"
				href="https://github.com/ark1tech/CS132-Preprocessing"
				icon={up_right_arrow}
			/>
			<Button
				label="View dataset"
				href="https://docs.google.com/spreadsheets/d/1lmhzWPGKuykna-nOAT6i9ry_-330GrGRh_M5wN73qEE/edit?usp=sharing"
				icon={up_right_arrow}
			/>
		</div>
	</div>
</section>

<div class="w-full h-full gradient-mask-b-0">
	<section
		id="exploration"
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
		<img src={Line} alt="l" class="lg:w-[60%] w-full h-auto" />
		<div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]">
			<div class="flex flex-col w-full h-full items-center gap-[0.8rem] my-[2rem]">
				<h4 class="sub">PART II</h4>
				<h2 class="text-[#0E0F11] text-center">Data Exploration</h2>
			</div>
		</div>
	</section>
</div>

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
			<div class="w-full flex md:flex-row flex-col items-center justify-evenly gap-5">
				<div class="w-[10%] flex flex-col gap-2 items-center z-2">
					<div class="flex flex-col">
						<h5 class="w-full text-center">Seth Eliserio</h5>
						<a
							class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
							href="https://www.linkedin.com/in/seth-eliserio-655b28225/"
							target="__blank">@setheliserio</a
						>
					</div>
				</div>
				<div class="w-[10%] flex flex-col gap-2 items-center z-2">
					<div class="flex flex-col">
						<h5 class="w-full text-center">Arki Mañago</h5>
						<a
							class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
							href="https://www.linkedin.com/in/ark1tech"
							target="__blank">@ark1tech</a
						>
					</div>
				</div>
				<div class="w-[10%] flex flex-col gap-2 items-center z-2">
					<!-- <p class="text-sm w-full text-center"></p> -->
					<div class="flex flex-col">
						<h5 class="w-full text-center">Annika Domondon</h5>
						<a
							class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out"
							href="/"
							target="__blank">@maridapottedcat</a
						>
					</div>
				</div>
			</div>
			<div class="w-full flex flex-col items-center">
				<p class="w-fit text-center text-[0.8rem] text-[#acacac]">WFW SUMMER</p>
			</div>
		</footer>
	</div>
</section>

<style>
</style>
