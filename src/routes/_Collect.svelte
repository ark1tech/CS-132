<script>
	import Button from './Button.svelte';
	import Button2 from './Button2.svelte';
	import TextCard from './TextCard.svelte';
	import { BarChartStacked } from '@carbon/charts-svelte';
	import options from './collection/options.js';
	import data from './collection/data.js';
	import '@carbon/charts-svelte/styles.css';

	const up_right_arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;
</script>

<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
	<TextCard
		title="Describing the Data"
		desc={`
            <p class ="w-full"> 
                We want to gather the data we need using <a href="https://praw.readthedocs.io/en/stable/" target="_blank" class ="inline_a">Python Reddit API Wrapper (PRAW)</a>. According to its documentation, we can access any subreddit, its list of submissions, and useful metadata for each submission. For this project, we specifically gathered the following metadata:
            </p>
            <div class = "w-full flex flex-col gap-8 py-4 pl-[1rem]">
                <div class = "w-full flex flex-row gap-4">
                    <p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
                        String:
                    </p>
                    <div class ="w-full flex flex-row flex-wrap gap-4">
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Timestamp</p>
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Content Type <span class="font-[300]">(text, video, image)</span></p>
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Title</p>
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Content <span class="font-[300]">(caption if media)</span></p>
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Flair</p>
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Submission ID</p>
                    </div>	
                </div>
                <div class = "w-full flex flex-row gap-4">
                    <p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
                        Integer:
                    </p>
                    <div class ="w-full flex flex-row flex-wrap gap-4">
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Upvotes Count</p>
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Comments Count</p>
                    </div>
                </div>
                <div class = "w-full flex flex-row gap-4">
                    <p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
                        Float:
                    </p>
                    <div class ="w-full flex flex-row flex-wrap gap-4">
                        <p class ="py-1 px-4 border-[#d1d4d7af] border-[1.5px] bg-[#e7e5e3af] hover:bg-[#d1d4d7af] transition-all w-fit rounded-full code">Upvote:downvote Ratio</p>
                    </div>	
                </div>
            </div>
            <p class ="w-full"> 
                We kept track of the submission content type so that we may manually extract their transcripts. 
            </p>
        `}
	/>
	<TextCard
		title="Scraping the Data: Limitations"
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
		title="Scraping the Data: The Gameplan"
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
                    To avoid duplicates, we want to use the <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Save</span> function and mark the submission we've already scraped.
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
	<div
		class="w-full hover:bg-[#ffe2e2] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg my-[1rem]"
	>
		<div
			class="w-full flex flex-col font-[400] h-full bg-gradient-to-tr from-[#ffede7] px-[2rem] py-[3rem] rounded-md"
		>
			<p class="text-center">Executing the gameplan gave us...</p>
			<h3 class="text-center my-[1rem]">2541 scraped submissions</h3>
			<p class="w-full text-center">But now comes the hard part&mdash;cleaning the data.</p>
		</div>
	</div>
</div>
<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
	<TextCard
		title="Cleaning the Data"
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
                    Remove URLs, duplicates, emojis, and submissions with empty cells except <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Content</span>  (to be transcribed later on) and <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Flair</span> .
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Convert <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Content</span>  to plaintext as it is retrieved as markdown. This also includes replacing newlines and <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">NaN</span>s  with a single whitespace. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Contextualize Filipino slangs, text abbreviations, and corporate jargons such as converting "WFH" to "Work from home" or "Charot" to "Just kidding". However, it is to note that we can only cater a handful list of them (available on the GitHub repository). This would also raise the possibility of incorrectly defining an acronym, but doing this may be more beneficial as it heavily contextualizes the text.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Concatenate <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Title</span>  and <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Content</span>  of every submission into one cell under a new column <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Title+Content</span> .
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Add another column that converts Timestamp into a Unix timestamp (the number of seconds that have elapsed since January 1, 1970) for ease when we do a timeseries later on. Only the day, month, and year are converted for the plot.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">2.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Using spaCy's English transformer pipline <a class = "inline_a" href="https://spacy.io/models/en#en_core_web_trf" target="_blank"> 
                         <span class ="code">en_core_web_trf</span></a> and its power to recognize named entities, we remove the names in the dataset to avoid possible doxxing. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">3.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    We then want to manually transcribe the image and video content. We shortlist the 100 most engaged submissions from each category to save time as effort to value ratio may be low.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">4.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Translate <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Title+Content</span> to English using the
                    <a class = "inline_a" href="https://deep-translator.readthedocs.io/en/latest/usage.html" target="_blank"> 
                        Google Translator of deep_translator API</a>.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">5.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Lastly, remove punctuations, numbers, and stop words of <span class="code px-[0.4rem] text-[#ba5137] tracking-tight border rounded-md bg-[#ffffff90]">Title+Content</span>  then convert it to lowercase using 
                    <a class = "inline_a" href="https://www.nltk.org" target="_blank"> 
                        Natural Language Toolkit (NLTK)</a> and Pandas. We chose not to lemmatize the words as we plan to identify topics through clouds of words (which we will see later on) where we want to keep the context as much as possible.  
                </p>
            </div>
            
        `}
	/>
</div>
<div
		class="w-full hover:bg-[#ffe2e2] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg my-[1rem]"
	>
		<div
			class="w-full flex flex-col font-[400] h-full bg-gradient-to-tr from-[#ffede7] px-[2rem] py-[3rem] rounded-md"
		>
	<p class="text-center">We then finally get...</p>
	<h3 class="text-center my-[1rem]">1976 preprocessed submissions!</h3>
	<p class="text-center">Considering the subreddit was just made in 2022, what's the distribution like?</p>
</div>
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
		label="View data processing on GitHub"
		href="https://github.com/ark1tech/CS132-Preprocessing"
		icon={up_right_arrow}
	/>
	<Button
		label="View dataset"
		href="https://docs.google.com/spreadsheets/d/1lmhzWPGKuykna-nOAT6i9ry_-330GrGRh_M5wN73qEE/edit?usp=sharing"
		icon={up_right_arrow}
		target={'blank_'}
	/>
</div>
